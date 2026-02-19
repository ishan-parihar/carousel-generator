/**
 * Carousel Generator Component
 * Allows users to select a template, fill content fields, preview, and export carousels
 *
 * This component is the primary interface for generating carousels from Canvas templates.
 * It provides:
 * - Template selection from the template library
 * - Content field editing form
 * - Carousel preview with live updates
 * - Export functionality (PNG, JSON)
 */

import React, { useState, useEffect, useCallback } from 'react';
import { useTemplateStore } from '@/store/template-store';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';
import type { CanvasTemplate, CarouselContent, CarouselSlide, ContentField } from '@/types/canvas-templates';

interface CarouselGeneratorProps {
  /** Optional initial template ID */
  initialTemplateId?: string;
  /** Callback when carousel is generated */
  onCarouselGenerated?: (content: CarouselContent) => void;
  /** Callback when export is performed */
  onExport?: (format: 'png' | 'json') => void;
}

interface ContentFieldValue {
  fieldId: string;
  value: any;
}

/**
 * Carousel Generator Component
 */
export function CarouselGenerator({
  initialTemplateId,
  onCarouselGenerated,
  onExport,
}: CarouselGeneratorProps) {
  // State
  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(initialTemplateId || null);
  const [contentFields, setContentFields] = useState<ContentFieldValue[]>([]);
  const [numberOfSlides, setNumberOfSlides] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isGenerating, setIsGenerating] = useState(false);
  const [previewContent, setPreviewContent] = useState<CarouselContent | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Store
  const { templates, getTemplateById, incrementTemplateUsage } = useTemplateStore();

  // Get selected template
  const selectedTemplate = selectedTemplateId ? getTemplateById(selectedTemplateId) : null;

  /**
   * Initialize content fields when template changes
   */
  useEffect(() => {
    if (selectedTemplate) {
      const initialFields: ContentFieldValue[] = selectedTemplate.settings.contentFields.map(field => ({
        fieldId: field.id,
        value: field.defaultValue,
      }));
      setContentFields(initialFields);
      setErrors({});
      setPreviewContent(null);

      // Set default number of slides
      const defaultSlides = selectedTemplate.settings.minSlides || 1;
      setNumberOfSlides(defaultSlides);
    }
  }, [selectedTemplateId]);

  /**
   * Update content field value
   */
  const updateFieldValue = useCallback((fieldId: string, value: any) => {
    setContentFields(prev =>
      prev.map(field =>
        field.fieldId === fieldId ? { ...field, value } : field
      )
    );

    // Clear error for this field
    setErrors(prev => {
      const newErrors = { ...prev };
      delete newErrors[fieldId];
      return newErrors;
    });
  }, []);

  /**
   * Validate content fields
   */
  const validateFields = useCallback((): boolean => {
    if (!selectedTemplate) return false;

    const newErrors: Record<string, string> = {};
    const fieldMap = new Map(selectedTemplate.settings.contentFields.map(f => [f.id, f]));

    contentFields.forEach(({ fieldId, value }) => {
      const field = fieldMap.get(fieldId);
      if (!field) return;

      // Check required fields
      if (field.required && (!value || value === '')) {
        newErrors[fieldId] = `${field.label} is required`;
        return;
      }

      // Check max length for text fields
      if (field.maxLength && typeof value === 'string' && value.length > field.maxLength) {
        newErrors[fieldId] = `${field.label} must be ${field.maxLength} characters or less`;
        return;
      }

      // Check validation rules
      if (field.validation) {
        const { min, max, pattern, message } = field.validation;

        if (field.type === 'number') {
          const numValue = Number(value);
          if (min !== undefined && numValue < min) {
            newErrors[fieldId] = message || `${field.label} must be at least ${min}`;
          }
          if (max !== undefined && numValue > max) {
            newErrors[fieldId] = message || `${field.label} must be at most ${max}`;
          }
        }

        if (pattern && typeof value === 'string' && !new RegExp(pattern).test(value)) {
          newErrors[fieldId] = message || `${field.label} format is invalid`;
        }
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [selectedTemplate, contentFields]);

  /**
   * Generate carousel content
   */
  const generateCarousel = useCallback(() => {
    if (!selectedTemplate || !validateFields()) return;

    setIsGenerating(true);

    try {
      // Build content field map
      const fieldValues = new Map(contentFields.map(f => [f.fieldId, f.value]));

      // Generate slides
      const slides: CarouselSlide[] = [];
      for (let i = 0; i < numberOfSlides; i++) {
        const slideContent: Record<string, any> = {};

        // Copy field values to each slide
        // In a more advanced implementation, you might have slide-specific fields
        selectedTemplate.settings.contentFields.forEach(field => {
          const value = fieldValues.get(field.id);
          if (value !== undefined) {
            slideContent[field.id] = value;
          }
        });

        slides.push({
          slideNumber: i + 1,
          contentFields: slideContent,
        });
      }

      const carouselContent: CarouselContent = {
        slides,
      };

      setPreviewContent(carouselContent);

      // Increment template usage
      incrementTemplateUsage(selectedTemplate.id);

      // Callback
      if (onCarouselGenerated) {
        onCarouselGenerated(carouselContent);
      }
    } catch (error) {
      console.error('Failed to generate carousel:', error);
      setErrors({ general: 'Failed to generate carousel' });
    } finally {
      setIsGenerating(false);
    }
  }, [selectedTemplate, contentFields, numberOfSlides, validateFields, incrementTemplateUsage, onCarouselGenerated]);

  /**
   * Export carousel
   */
  const handleExport = useCallback((format: 'png' | 'json') => {
    if (!previewContent || !selectedTemplate) {
      alert('Please generate a carousel first');
      return;
    }

    try {
      const carouselExport = {
        templateId: selectedTemplate.id,
        templateVersion: selectedTemplate.metadata.version,
        templateName: selectedTemplate.name,
        content: previewContent,
        exportedAt: new Date().toISOString(),
      };

      if (format === 'json') {
        // Export as JSON file
        const blob = new Blob([JSON.stringify(carouselExport, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `carousel-${selectedTemplate.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } else if (format === 'png') {
        // Export as PNG - this will be handled by the CarouselRenderer
        // For now, we'll trigger the callback
        if (onExport) {
          onExport('png');
        } else {
          alert('PNG export requires CarouselRenderer integration');
        }
      }

      // Callback
      if (onExport) {
        onExport(format);
      }
    } catch (error) {
      console.error('Failed to export carousel:', error);
      alert('Failed to export carousel');
    }
  }, [previewContent, selectedTemplate, onExport]);

  /**
   * Auto-play preview
   */
  useEffect(() => {
    if (!isPlaying || !previewContent) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex(prev => {
        if (prev >= previewContent.slides.length - 1) {
          return 0;
        }
        return prev + 1;
      });
    }, 3000); // 3 seconds per slide

    return () => clearInterval(interval);
  }, [isPlaying, previewContent]);

  /**
   * Render content field input based on type
   */
  const renderFieldInput = (field: ContentField) => {
    const fieldValue = contentFields.find(f => f.fieldId === field.id);
    const value = fieldValue?.value ?? field.defaultValue;
    const error = errors[field.id];

    switch (field.type) {
      case 'text':
        return (
          <Input
            label={field.label}
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => updateFieldValue(field.id, e.target.value)}
            error={error}
            required={field.required}
          />
        );

      case 'textarea':
        return (
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <textarea
              placeholder={field.placeholder}
              value={value}
              onChange={(e) => updateFieldValue(field.id, e.target.value)}
              maxLength={field.maxLength}
              className={cn(
                'w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40',
                'focus:outline-none focus:border-white/40 min-h-[100px]',
                error && 'border-red-400'
              )}
            />
            {field.maxLength && (
              <div className="text-xs text-white/50 mt-1">
                {String(value).length} / {field.maxLength}
              </div>
            )}
            {error && (
              <div className="text-xs text-red-400 mt-1">{error}</div>
            )}
          </div>
        );

      case 'number':
        return (
          <Input
            label={field.label}
            type="number"
            placeholder={field.placeholder}
            value={value}
            onChange={(e) => updateFieldValue(field.id, Number(e.target.value))}
            error={error}
            required={field.required}
          />
        );

      case 'select':
        return (
          <Select
            label={field.label}
            options={field.options?.map(opt => ({ value: opt, label: opt })) || []}
            value={value}
            onChange={(e) => updateFieldValue(field.id, e.target.value)}
            required={field.required}
          />
        );

      case 'boolean':
        return (
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id={field.id}
              checked={value}
              onChange={(e) => updateFieldValue(field.id, e.target.checked)}
              className="w-4 h-4 rounded bg-white/10 border-white/20 text-blue-500"
            />
            <label htmlFor={field.id} className="text-sm font-medium text-white/70">
              {field.label}
            </label>
          </div>
        );

      case 'color':
        return (
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={value}
                onChange={(e) => updateFieldValue(field.id, e.target.value)}
                className="w-12 h-12 rounded cursor-pointer border-0"
              />
              <Input
                placeholder="#000000"
                value={value}
                onChange={(e) => updateFieldValue(field.id, e.target.value)}
              />
            </div>
          </div>
        );

      case 'image':
        return (
          <div>
            <label className="block text-sm font-medium text-white/70 mb-2">
              {field.label}
              {field.required && <span className="text-red-400 ml-1">*</span>}
            </label>
            <Input
              placeholder="https://example.com/image.jpg"
              value={value}
              onChange={(e) => updateFieldValue(field.id, e.target.value)}
              error={error}
              required={field.required}
            />
            {value && (
              <div className="mt-2">
                <img
                  src={value}
                  alt={field.label}
                  className="max-w-full h-32 object-cover rounded-lg border border-white/20"
                  onError={() => setErrors(prev => ({ ...prev, [field.id]: 'Failed to load image' }))}
                />
              </div>
            )}
          </div>
        );

      default:
        return (
          <div className="text-sm text-white/50">
            Unknown field type: {field.type}
          </div>
        );
    }
  };

  /**
   * Handle template selection
   */
  const handleTemplateChange = (templateId: string) => {
    setSelectedTemplateId(templateId === '' ? null : templateId);
    setPreviewContent(null);
    setCurrentSlideIndex(0);
    setIsPlaying(false);
  };

  // Template options
  const templateOptions = templates.map(t => ({ value: t.id, label: t.name }));

  return (
    <div className="flex flex-col gap-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-white">Generate Carousel</h2>
          <p className="text-white/60 mt-1">Select a template and fill in your content</p>
        </div>
      </div>

      {/* Template Selection */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">1. Select Template</h3>
        <Select
          label="Choose a template"
          options={templateOptions}
          value={selectedTemplateId || ''}
          onChange={(e) => handleTemplateChange(e.target.value)}
          placeholder="Select a template..."
        />

        {selectedTemplate && (
          <div className="mt-4 p-4 bg-white/5 rounded-lg">
            <div className="flex items-start gap-4">
              {selectedTemplate.metadata.thumbnail && (
                <img
                  src={selectedTemplate.metadata.thumbnail}
                  alt={selectedTemplate.name}
                  className="w-20 h-20 object-cover rounded-lg"
                />
              )}
              <div className="flex-1">
                <h4 className="font-semibold text-white">{selectedTemplate.name}</h4>
                <p className="text-sm text-white/60 mt-1">{selectedTemplate.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-white/50">
                    {selectedTemplate.metadata.category}
                  </span>
                  <span className="text-xs text-white/50">
                    {selectedTemplate.metadata.tags.join(', ')}
                  </span>
                  {selectedTemplate.metadata.difficulty && (
                    <span className="text-xs px-2 py-0.5 bg-white/10 rounded-full">
                      {selectedTemplate.metadata.difficulty}
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Content Fields */}
      {selectedTemplate && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">2. Fill Content</h3>

          {/* Number of Slides */}
          {selectedTemplate.settings.allowCustomContent && (
            <div className="mb-6">
              <label className="block text-sm font-medium text-white/70 mb-2">
                Number of Slides
              </label>
              <Input
                type="number"
                min={selectedTemplate.settings.minSlides || 1}
                max={selectedTemplate.settings.maxSlides || 10}
                value={numberOfSlides}
                onChange={(e) => setNumberOfSlides(Number(e.target.value))}
              />
            </div>
          )}

          {/* Content Fields */}
          <div className="space-y-4">
            {selectedTemplate.settings.contentFields.map(field => (
              <div key={field.id}>
                {renderFieldInput(field)}
                {field.helpText && (
                  <p className="text-xs text-white/50 mt-1">{field.helpText}</p>
                )}
              </div>
            ))}
          </div>

          {/* Generate Button */}
          <div className="mt-6 flex items-center justify-between">
            <div>
              {Object.keys(errors).length > 0 && !errors.general && (
                <p className="text-sm text-red-400">
                  Please fix the errors before generating
                </p>
              )}
              {errors.general && (
                <p className="text-sm text-red-400">{errors.general}</p>
              )}
            </div>
            <Button
              onClick={generateCarousel}
              disabled={isGenerating}
              size="lg"
            >
              {isGenerating ? 'Generating...' : 'Generate Carousel'}
            </Button>
          </div>
        </div>
      )}

      {/* Preview */}
      {previewContent && selectedTemplate && (
        <div className="bg-white/5 border border-white/10 rounded-xl p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-white">3. Preview</h3>
            <div className="flex items-center gap-2">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsPlaying(!isPlaying)}
              >
                {isPlaying ? '⏸ Pause' : '▶ Play'}
              </Button>
              <div className="text-sm text-white/60">
                Slide {currentSlideIndex + 1} of {previewContent.slides.length}
              </div>
            </div>
          </div>

          {/* Slide Navigation */}
          <div className="flex items-center justify-center gap-4 mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentSlideIndex(Math.max(0, currentSlideIndex - 1))}
              disabled={currentSlideIndex === 0}
            >
              ← Previous
            </Button>
            <div className="flex gap-2">
              {previewContent.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlideIndex(index)}
                  className={cn(
                    'w-8 h-8 rounded-full text-sm font-medium transition-colors',
                    index === currentSlideIndex
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/60 hover:bg-white/20'
                  )}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentSlideIndex(Math.min(previewContent.slides.length - 1, currentSlideIndex + 1))}
              disabled={currentSlideIndex === previewContent.slides.length - 1}
            >
              Next →
            </Button>
          </div>

          {/* Preview Content Display */}
          <div className="bg-black/30 rounded-lg p-6 min-h-[400px]">
            <div className="text-center text-white/50">
              <p className="text-lg font-medium mb-2">Slide {currentSlideIndex + 1}</p>
              <p className="text-sm">
                Preview will be rendered by CarouselRenderer component
              </p>
              <div className="mt-4 p-4 bg-white/5 rounded-lg">
                <pre className="text-xs text-left text-white/70 overflow-auto">
                  {JSON.stringify(previewContent.slides[currentSlideIndex], null, 2)}
                </pre>
              </div>
            </div>
          </div>

          {/* Export Buttons */}
          <div className="mt-6 flex items-center justify-end gap-3">
            <Button
              variant="secondary"
              onClick={() => handleExport('json')}
            >
              Export as JSON
            </Button>
            <Button
              onClick={() => handleExport('png')}
            >
              Export as PNG
            </Button>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!selectedTemplate && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">📋</div>
          <h3 className="text-xl font-semibold text-white mb-2">No Template Selected</h3>
          <p className="text-white/60">Select a template above to get started</p>
        </div>
      )}
    </div>
  );
}

/**
 * Utility function for class name merging
 */
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}