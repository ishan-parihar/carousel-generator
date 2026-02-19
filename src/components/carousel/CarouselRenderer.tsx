'use client';

/**
 * Carousel Renderer Component
 * Renders a carousel from a template with content filled in
 *
 * This component is responsible for:
 * - Rendering template elements with applied content
 * - Mapping content fields to canvas elements
 * - Exporting to PNG format
 * - Responsive preview scaling
 */

import React, { useRef, useEffect, useState, useCallback } from 'react';
import { Stage, Layer } from 'react-konva';
import Konva from 'konva';
import { Stage as StageType } from 'konva/lib/Stage';
import { Button } from '@/components/ui/Button';
import type { CanvasTemplate, CarouselContent, CarouselSlide } from '@/types/canvas-templates';
import type { CanvasElement } from '@/types/canvas-elements';

// Import element renderers
import { TextElement } from '@/canvas-editor/elements/TextElement';
import { ImageElement } from '@/canvas-editor/elements/ImageElement';
import { BackgroundElement } from '@/canvas-editor/elements/BackgroundElement';
import { DecoratorElement } from '@/canvas-editor/elements/DecoratorElement';
import { CTAElement } from '@/canvas-editor/elements/CTAElement';

interface CarouselRendererProps {
  /** The template to render */
  template: CanvasTemplate;
  /** The content to apply to the template */
  content: CarouselContent;
  /** Whether to show navigation controls */
  showControls?: boolean;
  /** Whether to show slide numbers */
  showSlideNumbers?: boolean;
  /** Whether to auto-play the carousel */
  autoPlay?: boolean;
  /** Auto-play interval in milliseconds */
  autoPlayInterval?: number;
  /** Callback when export is performed */
  onExport?: (format: 'png' | 'json', data: any) => void;
  /** Callback when slide changes */
  onSlideChange?: (slideIndex: number) => void;
}

/**
 * Carousel Renderer Component
 */
export function CarouselRenderer({
  template,
  content,
  showControls = true,
  showSlideNumbers = true,
  autoPlay = false,
  autoPlayInterval = 3000,
  onExport,
  onSlideChange,
}: CarouselRendererProps) {
  // State
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [scale, setScale] = useState(1);
  const [isExporting, setIsExporting] = useState(false);

  // Refs
  const stageRef = useRef<StageType>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  // Get current slide content
  const currentSlide = content.slides[currentSlideIndex];

  /**
   * Handle responsive scaling
   */
  useEffect(() => {
    const handleResize = () => {
      if (!containerRef.current) return;

      const containerWidth = containerRef.current.offsetWidth;
      const templateWidth = template.settings.width;

      // Calculate scale to fit container
      const newScale = Math.min(1, (containerWidth - 32) / templateWidth); // 32px for padding
      setScale(newScale);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [template.settings.width]);

  /**
   * Auto-play functionality
   */
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlideIndex(prev => {
        const nextIndex = (prev + 1) % content.slides.length;
        return nextIndex;
      });
    }, autoPlayInterval);

    return () => clearInterval(interval);
  }, [isPlaying, content.slides.length, autoPlayInterval]);

  /**
   * Callback when slide changes
   */
  const prevSlideIndexRef = useRef(currentSlideIndex);
  useEffect(() => {
    if (onSlideChange && currentSlideIndex !== prevSlideIndexRef.current) {
      prevSlideIndexRef.current = currentSlideIndex;
      onSlideChange(currentSlideIndex);
    }
  }, [currentSlideIndex, onSlideChange]);

  /**
   * Navigate to specific slide
   */
  const goToSlide = useCallback((index: number) => {
    setCurrentSlideIndex(index);
    setIsPlaying(false);
  }, []);

  /**
   * Navigate to next slide
   */
  const goToNextSlide = useCallback(() => {
    setCurrentSlideIndex(prev => {
      const nextIndex = (prev + 1) % content.slides.length;
      return nextIndex;
    });
  }, [content.slides.length]);

  /**
   * Navigate to previous slide
   */
  const goToPreviousSlide = useCallback(() => {
    setCurrentSlideIndex(prev => {
      const prevIndex = (prev - 1 + content.slides.length) % content.slides.length;
      return prevIndex;
    });
  }, [content.slides.length]);

  /**
   * Apply content to template elements
   * Maps content field values to canvas elements
   */
  const applyContentToElements = useCallback((
    elements: CanvasElement[],
    slideContent: CarouselSlide
  ): CanvasElement[] => {
    const contentFieldMap = new Map(
      Object.entries(slideContent.contentFields)
    );

    return elements.map(element => {
      // Check if this element is linked to a content field
      const linkedField = template.settings.contentFields.find(
        field => field.elementId === element.id
      );

      if (!linkedField) {
        return element;
      }

      // Get the content value for this field
      const contentValue = contentFieldMap.get(linkedField.id);

      if (contentValue === undefined || contentValue === null) {
        // Use default value if no content provided
        return element;
      }

      // Apply content to element based on element type
      const updatedElement = { ...element };

      switch (element.type) {
        case 'text':
          updatedElement.data = {
            ...element.data,
            content: contentValue,
          };
          break;

        case 'image':
          updatedElement.data = {
            ...element.data,
            url: contentValue,
          };
          break;

        case 'background':
          updatedElement.data = {
            ...element.data,
            color: contentValue,
          };
          break;

        case 'cta':
          updatedElement.data = {
            ...element.data,
            text: contentValue,
          };
          break;

        default:
          // For other element types, try to apply content generically
          if (updatedElement.data) {
            updatedElement.data = {
              ...updatedElement.data,
              content: contentValue,
            };
          }
          break;
      }

      return updatedElement;
    });
  }, [template.settings.contentFields]);

  /**
   * Get elements for current slide with content applied
   */
  const currentElements: CanvasElement[] = React.useMemo(() => {
    if (!currentSlide) return [];
    return applyContentToElements(template.elements, currentSlide);
  }, [template.elements, currentSlide, applyContentToElements]);

  /**
   * Render element based on type
   */
  const renderElement = useCallback((element: CanvasElement) => {
    const { key, ...commonProps } = {
      key: element.id,
      element,
      isSelected: false, // No selection in renderer
      onTransform: () => {}, // No transforms in renderer
      onSelect: () => {}, // No selection in renderer
    };

    switch (element.type) {
      case 'text':
        return <TextElement key={key} {...commonProps} />;
      case 'image':
        return <ImageElement key={key} {...commonProps} />;
      case 'background':
        return <BackgroundElement key={key} {...commonProps} />;
      case 'decorator':
        return <DecoratorElement key={key} {...commonProps} />;
      case 'cta':
        return <CTAElement key={key} {...commonProps} />;
      default:
        console.warn(`Unknown element type: ${element.type}`);
        return null;
    }
  }, []);

  /**
   * Export as PNG
   */
  const exportAsPNG = useCallback(async () => {
    if (!stageRef.current) return;

    setIsExporting(true);

    try {
      // Export current slide as data URL
      const dataURL = stageRef.current.toDataURL({
        pixelRatio: 2, // High quality
        mimeType: 'image/png',
        quality: 1,
      });

      // Create download link
      const link = document.createElement('a');
      link.download = `slide-${currentSlideIndex + 1}-${template.name.toLowerCase().replace(/\s+/g, '-')}.png`;
      link.href = dataURL;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      // Callback
      if (onExport) {
        onExport('png', { dataURL, slideIndex: currentSlideIndex });
      }
    } catch (error) {
      console.error('Failed to export PNG:', error);
      alert('Failed to export PNG');
    } finally {
      setIsExporting(false);
    }
  }, [template.name, currentSlideIndex, onExport]);

  /**
   * Export as JSON
   */
  const exportAsJSON = useCallback(() => {
    const exportData = {
      templateId: template.id,
      templateVersion: template.metadata.version,
      templateName: template.name,
      content,
      exportedAt: new Date().toISOString(),
    };

    const blob = new Blob([JSON.stringify(exportData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = `carousel-${template.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.json`;
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    // Callback
    if (onExport) {
      onExport('json', exportData);
    }
  }, [template, content, onExport]);

  /**
   * Export all slides as PNG
   */
  const exportAllSlidesAsPNG = useCallback(async () => {
    if (!stageRef.current) return;

    setIsExporting(true);

    try {
      const images: { slideIndex: number; dataURL: string }[] = [];

      // Export each slide
      for (let i = 0; i < content.slides.length; i++) {
        // Update current slide
        setCurrentSlideIndex(i);

        // Wait for render
        await new Promise(resolve => setTimeout(resolve, 100));

        // Export
        const dataURL = stageRef.current.toDataURL({
          pixelRatio: 2,
          mimeType: 'image/png',
          quality: 1,
        });

        images.push({ slideIndex: i, dataURL });
      }

      // Download each image
      images.forEach(({ slideIndex, dataURL }) => {
        const link = document.createElement('a');
        link.download = `slide-${slideIndex + 1}-${template.name.toLowerCase().replace(/\s+/g, '-')}.png`;
        link.href = dataURL;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      });

      // Restore original slide
      setCurrentSlideIndex(0);

      // Callback
      if (onExport) {
        onExport('png', { images, allSlides: true });
      }
    } catch (error) {
      console.error('Failed to export all slides:', error);
      alert('Failed to export all slides');
    } finally {
      setIsExporting(false);
    }
  }, [template.name, content.slides.length, onExport]);

  return (
    <div className="flex flex-col gap-4">
      {/* Controls */}
      {showControls && (
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4">
          {/* Slide Navigation */}
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={goToPreviousSlide}
              disabled={content.slides.length <= 1}
            >
              ←
            </Button>
            <div className="flex gap-1">
              {content.slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
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
              onClick={goToNextSlide}
              disabled={content.slides.length <= 1}
            >
              →
            </Button>
          </div>

          {/* Play/Pause */}
          {content.slides.length > 1 && (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? '⏸ Pause' : '▶ Play'}
            </Button>
          )}

          {/* Export Buttons */}
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={exportAsJSON}
              disabled={isExporting}
            >
              Export JSON
            </Button>
            <Button
              size="sm"
              onClick={exportAsPNG}
              disabled={isExporting}
            >
              Export PNG
            </Button>
            {content.slides.length > 1 && (
              <Button
                size="sm"
                onClick={exportAllSlidesAsPNG}
                disabled={isExporting}
              >
                Export All
              </Button>
            )}
          </div>
        </div>
      )}

      {/* Canvas */}
      <div ref={containerRef} className="flex items-center justify-center bg-black/30 rounded-lg overflow-hidden">
        <Stage
          ref={stageRef}
          width={template.settings.width * scale}
          height={template.settings.height * scale}
          scale={{ x: scale, y: scale }}
        >
          <Layer>
            {/* Render background */}
            {template.settings.backgroundColor && (
              <BackgroundElement
                key="template-background"
                element={{
                  id: 'template-background',
                  type: 'background',
                  name: 'Template Background',
                  x: 0,
                  y: 0,
                  width: template.settings.width,
                  height: template.settings.height,
                  rotation: 0,
                  scaleX: 1,
                  scaleY: 1,
                  zIndex: -1,
                  locked: true,
                  visible: true,
                  opacity: 1,
                  data: {
                    backgroundType: 'solid',
                    primaryColor: template.settings.backgroundColor,
                    opacity: 1,
                  },
                }}
                isSelected={false}
                onTransform={() => {}}
                onSelect={() => {}}
              />
            )}

            {/* Render elements */}
            {currentElements.map(renderElement)}

            {/* Render slide number */}
            {showSlideNumbers && content.slides.length > 1 && (
              <TextElement
                key="slide-number"
                element={{
                  id: 'slide-number',
                  type: 'text',
                  name: 'Slide Number',
                  x: template.settings.width - 50,
                  y: template.settings.height - 30,
                  width: 40,
                  height: 20,
                  rotation: 0,
                  scaleX: 1,
                  scaleY: 1,
                  zIndex: 1000,
                  locked: true,
                  visible: true,
                  opacity: 1,
                  data: {
                    content: `${currentSlideIndex + 1}/${content.slides.length}`,
                    fontFamily: 'Arial',
                    fontSize: 14,
                    fontWeight: 'normal',
                    fontStyle: 'normal',
                    color: '#FFFFFF',
                    alignment: 'right',
                    lineHeight: 1.4,
                  },
                }}
                isSelected={false}
                onTransform={() => {}}
                onSelect={() => {}}
              />
            )}
          </Layer>
        </Stage>
      </div>

      {/* Slide Info */}
      <div className="flex items-center justify-between text-sm text-white/60 px-2">
        <div>
          {template.name} - Slide {currentSlideIndex + 1} of {content.slides.length}
        </div>
        <div>
          {template.settings.width} × {template.settings.height}px
        </div>
      </div>
    </div>
  );
}

/**
 * Utility function for class name merging
 */
function cn(...classes: (string | boolean | undefined | null)[]): string {
  return classes.filter(Boolean).join(' ');
}