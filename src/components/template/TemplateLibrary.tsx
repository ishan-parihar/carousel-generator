'use client';

import React, { useState, useMemo } from 'react';
import { useTemplateStore } from '@/store/template-store';
import type { CanvasTemplate, TemplateCategory, TemplateSortOption, TemplateExport } from '@/types/canvas-templates';
import { cn } from '@/lib/utils';
import {
  Search,
  Filter,
  Grid3X3,
  List,
  Star,
  Clock,
  TrendingUp,
  ChevronDown,
  Check,
  Plus,
  Download,
  Share2,
  Trash2,
  Copy,
  Eye,
  Edit,
  Upload,
  AlertCircle,
  X,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

/**
 * Template Library Component
 *
 * Browse, search, filter, and select templates for editing.
 * This is the main entry point for template management.
 *
 * Features:
 * - Browse templates by category
 * - Filter by tags, author, difficulty
 * - Search templates by name/description
 * - Sort by various criteria
 * - Grid/List view toggle
 * - Template preview modal
 * - Select template for editing
 * - Quick actions (duplicate, delete, share, export, import)
 *
 * @param onSelectTemplate - Callback when a template is selected
 * @param onCreateTemplate - Callback when creating a new template
 */
interface TemplateLibraryProps {
  onSelectTemplate?: (template: CanvasTemplate) => void;
  onCreateTemplate?: () => void;
  className?: string;
}

/**
 * Template Card Component
 *
 * Displays a single template in a card format with:
 * - Thumbnail/preview
 * - Name and description
 * - Metadata (author, rating, usage)
 * - Quick actions
 */
interface TemplateCardProps {
  template: CanvasTemplate;
  onSelect: (template: CanvasTemplate) => void;
  onDuplicate: (template: CanvasTemplate) => void;
  onDelete: (template: CanvasTemplate) => void;
  onPreview: (template: CanvasTemplate) => void;
  onExport: (template: CanvasTemplate) => void;
  onShare: (template: CanvasTemplate) => void;
  isSelected?: boolean;
}

function TemplateCard({
  template,
  onSelect,
  onDuplicate,
  onDelete,
  onPreview,
  onExport,
  onShare,
  isSelected = false,
}: TemplateCardProps) {
  const [showActions, setShowActions] = useState(false);

  return (
    <div
      className={cn(
        'group relative bg-white/5 border border-white/10 rounded-xl overflow-hidden',
        'transition-all duration-200 hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-500/10',
        'cursor-pointer',
        isSelected && 'border-cyan-500 ring-2 ring-cyan-500/20'
      )}
      onClick={() => onSelect(template)}
      onMouseEnter={() => setShowActions(true)}
      onMouseLeave={() => setShowActions(false)}
    >
      {/* Thumbnail/Preview */}
      <div className="relative aspect-video bg-gradient-to-br from-slate-800 to-slate-900 overflow-hidden">
        {template.metadata.thumbnail ? (
          <img
            src={template.metadata.thumbnail}
            alt={template.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center p-4">
              <div className="text-4xl mb-2">🎨</div>
              <div className="text-xs text-white/50">No preview</div>
            </div>
          </div>
        )}

        {/* Overlay on hover */}
        <div
          className={cn(
            'absolute inset-0 bg-black/60 flex items-center justify-center gap-2',
            'transition-opacity duration-200',
            showActions ? 'opacity-100' : 'opacity-0'
          )}
        >
          <Button
            size="sm"
            variant="secondary"
            icon={<Eye size={16} />}
            onClick={(e) => {
              e.stopPropagation();
              onPreview(template);
            }}
          >
            Preview
          </Button>
          <Button
            size="sm"
            variant="secondary"
            icon={<Edit size={16} />}
            onClick={(e) => {
              e.stopPropagation();
              onSelect(template);
            }}
          >
            Edit
          </Button>
        </div>

        {/* Official Badge */}
        {template.metadata.isOfficial && (
          <div className="absolute top-2 right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full font-medium">
            Official
          </div>
        )}

        {/* Rating Badge */}
        {template.metadata.rating && (
          <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
            <Star size={12} className="fill-yellow-400 text-yellow-400" />
            {template.metadata.rating.toFixed(1)}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <div className="flex items-start justify-between gap-2 mb-2">
          <h3 className="font-semibold text-white text-lg line-clamp-1">
            {template.name}
          </h3>
        </div>

        <p className="text-sm text-white/60 line-clamp-2 mb-3">
          {template.description}
        </p>

        {/* Metadata */}
        <div className="flex items-center gap-4 text-xs text-white/50">
          <div className="flex items-center gap-1">
            <Clock size={12} />
            {new Date(template.metadata.updatedAt).toLocaleDateString()}
          </div>
          <div className="flex items-center gap-1">
            <TrendingUp size={12} />
            {template.metadata.usageCount} uses
          </div>
        </div>

        {/* Tags */}
        {template.metadata.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mt-3">
            {template.metadata.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs bg-white/5 text-white/70 px-2 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
            {template.metadata.tags.length > 3 && (
              <span className="text-xs text-white/50 px-2 py-1">
                +{template.metadata.tags.length - 3}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Quick Actions (visible on hover) */}
      <div
        className={cn(
          'absolute bottom-0 left-0 right-0 bg-slate-900/95 border-t border-white/10',
          'flex items-center justify-around py-2',
          'transition-transform duration-200',
          showActions ? 'translate-y-0' : 'translate-y-full'
        )}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
          title="Duplicate"
          onClick={() => onDuplicate(template)}
        >
          <Copy size={16} />
        </button>
        <button
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
          title="Share"
          onClick={() => onShare(template)}
        >
          <Share2 size={16} />
        </button>
        <button
          className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/70 hover:text-white"
          title="Export"
          onClick={() => onExport(template)}
        >
          <Download size={16} />
        </button>
        {!template.metadata.isOfficial && (
          <button
            className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-white/70 hover:text-red-400"
            title="Delete"
            onClick={() => onDelete(template)}
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Template List Item Component
 *
 * Displays a single template in a list format (compact)
 */
interface TemplateListItemProps {
  template: CanvasTemplate;
  onSelect: (template: CanvasTemplate) => void;
  onDuplicate: (template: CanvasTemplate) => void;
  onDelete: (template: CanvasTemplate) => void;
  onPreview: (template: CanvasTemplate) => void;
  onExport: (template: CanvasTemplate) => void;
  onShare: (template: CanvasTemplate) => void;
  isSelected?: boolean;
}

function TemplateListItem({
  template,
  onSelect,
  onDuplicate,
  onDelete,
  onPreview,
  onExport,
  onShare,
  isSelected = false,
}: TemplateListItemProps) {
  return (
    <div
      className={cn(
        'flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-lg',
        'transition-all duration-200 hover:border-cyan-500/50 hover:bg-white/10',
        'cursor-pointer',
        isSelected && 'border-cyan-500 ring-2 ring-cyan-500/20'
      )}
      onClick={() => onSelect(template)}
    >
      {/* Thumbnail */}
      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 flex-shrink-0 overflow-hidden">
        {template.metadata.thumbnail ? (
          <img
            src={template.metadata.thumbnail}
            alt={template.name}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-2xl">
            🎨
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <h3 className="font-semibold text-white truncate">{template.name}</h3>
          {template.metadata.isOfficial && (
            <span className="bg-cyan-500 text-white text-xs px-2 py-0.5 rounded-full font-medium flex-shrink-0">
              Official
            </span>
          )}
        </div>
        <p className="text-sm text-white/60 line-clamp-1">
          {template.description}
        </p>
        <div className="flex items-center gap-4 mt-1 text-xs text-white/50">
          <span>{template.metadata.category}</span>
          <span>{template.metadata.usageCount} uses</span>
          {template.metadata.rating && (
            <span className="flex items-center gap-1">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              {template.metadata.rating.toFixed(1)}
            </span>
          )}
        </div>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 flex-shrink-0">
        <Button
          size="sm"
          variant="ghost"
          icon={<Eye size={16} />}
          onClick={(e) => {
            e.stopPropagation();
            onPreview(template);
          }}
        >
          Preview
        </Button>
        <Button
          size="sm"
          variant="primary"
          icon={<Edit size={16} />}
          onClick={(e) => {
            e.stopPropagation();
            onSelect(template);
          }}
        >
          Edit
        </Button>
        {!template.metadata.isOfficial && (
          <button
            className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-white/70 hover:text-red-400"
            title="Delete"
            onClick={(e) => {
              e.stopPropagation();
              onDelete(template);
            }}
          >
            <Trash2 size={16} />
          </button>
        )}
      </div>
    </div>
  );
}

/**
 * Template Library Main Component
 */
export function TemplateLibrary({
  onSelectTemplate,
  onCreateTemplate,
  className,
}: TemplateLibraryProps) {
  const {
    templates,
    getOfficialTemplates,
    getUserTemplates,
    filterTemplates,
    deleteTemplate,
    duplicateTemplate,
    exportTemplateAsJSON,
    importTemplateFromJSON,
  } = useTemplateStore();

  // UI State
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<TemplateCategory | 'all'>('all');
  const [selectedSort, setSelectedSort] = useState<TemplateSortOption>('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState<CanvasTemplate | null>(null);
  const [showPreviewModal, setShowPreviewModal] = useState(false);
  const [showImportModal, setShowImportModal] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const [importSuccess, setImportSuccess] = useState(false);

  // Filter and sort templates
  const filteredTemplates = useMemo(() => {
    return filterTemplates({
      category: selectedCategory === 'all' ? undefined : selectedCategory,
      search: searchQuery || undefined,
      sort: selectedSort,
    });
  }, [templates, selectedCategory, searchQuery, selectedSort, filterTemplates]);

  // Handle template selection
  const handleSelectTemplate = (template: CanvasTemplate) => {
    setSelectedTemplate(template);
    onSelectTemplate?.(template);
  };

  // Handle template duplication
  const handleDuplicateTemplate = (template: CanvasTemplate) => {
    duplicateTemplate(template.id);
  };

  // Handle template deletion
  const handleDeleteTemplate = (template: CanvasTemplate) => {
    if (confirm(`Are you sure you want to delete "${template.name}"?`)) {
      deleteTemplate(template.id);
    }
  };

  // Handle template preview
  const handlePreviewTemplate = (template: CanvasTemplate) => {
    setSelectedTemplate(template);
    setShowPreviewModal(true);
  };

  // Handle template export
  const handleExportTemplate = (template: CanvasTemplate) => {
    try {
      const json = exportTemplateAsJSON(template.id);
      const blob = new Blob([json], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${template.name.replace(/\s+/g, '-').toLowerCase()}.json`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Failed to export template:', error);
      alert('Failed to export template. Please try again.');
    }
  };

  // Handle template share
  const handleShareTemplate = (template: CanvasTemplate) => {
    if (template.id) {
      const shareUrl = `${window.location.origin}/templates/${template.id}`;
      navigator.clipboard.writeText(shareUrl).then(() => {
        alert('Share URL copied to clipboard!');
      }).catch(() => {
        alert('Failed to copy share URL');
      });
    } else {
      alert('Template must be saved before sharing');
    }
  };

  // Handle template import
  const handleImportTemplate = (file: File) => {
    setImportError(null);
    setImportSuccess(false);

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = e.target?.result as string;
        importTemplateFromJSON(json);
        setImportSuccess(true);
        setTimeout(() => {
          setShowImportModal(false);
          setImportSuccess(false);
        }, 2000);
      } catch (error) {
        setImportError(error instanceof Error ? error.message : 'Failed to import template');
      }
    };
    reader.onerror = () => {
      setImportError('Failed to read file');
    };
    reader.readAsText(file);
  };

  return (
    <div className={cn('flex flex-col h-full', className)}>
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-white mb-1">Template Library</h1>
          <p className="text-sm text-white/60">
            {templates.length} templates available
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            icon={<Upload size={16} />}
            onClick={() => setShowImportModal(true)}
          >
            Import
          </Button>
          <Button
            variant="secondary"
            icon={<Plus size={16} />}
            onClick={onCreateTemplate}
          >
            Create Template
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white/5 border border-white/10 rounded-xl p-4 mb-6">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-white/50"
              size={16}
            />
            <Input
              placeholder="Search templates..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Category Filter */}
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as TemplateCategory | 'all')}
            options={[
              { value: 'all', label: 'All Categories' },
              { value: 'marketing', label: 'Marketing' },
              { value: 'education', label: 'Education' },
              { value: 'social', label: 'Social' },
              { value: 'business', label: 'Business' },
              { value: 'personal', label: 'Personal' },
            ]}
            className="w-40"
          />

          {/* Sort */}
          <Select
            value={selectedSort}
            onChange={(e) => setSelectedSort(e.target.value as TemplateSortOption)}
            options={[
              { value: 'newest', label: 'Newest' },
              { value: 'popular', label: 'Popular' },
              { value: 'rating', label: 'Rating' },
              { value: 'name-asc', label: 'Name A-Z' },
              { value: 'name-desc', label: 'Name Z-A' },
            ]}
            className="w-32"
          />

          {/* View Mode Toggle */}
          <div className="flex items-center gap-1 bg-white/5 rounded-lg p-1">
            <button
              className={cn(
                'p-2 rounded-lg transition-colors',
                viewMode === 'grid'
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'text-white/50 hover:text-white'
              )}
              onClick={() => setViewMode('grid')}
              title="Grid View"
            >
              <Grid3X3 size={16} />
            </button>
            <button
              className={cn(
                'p-2 rounded-lg transition-colors',
                viewMode === 'list'
                  ? 'bg-cyan-500/20 text-cyan-400'
                  : 'text-white/50 hover:text-white'
              )}
              onClick={() => setViewMode('list')}
              title="List View"
            >
              <List size={16} />
            </button>
          </div>

          {/* More Filters */}
          <Button
            variant="ghost"
            size="sm"
            icon={<Filter size={16} />}
            onClick={() => setShowFilters(!showFilters)}
          >
            Filters
          </Button>
        </div>

        {/* Advanced Filters (collapsible) */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-white/10">
            <div className="flex items-center gap-4">
              {/* TODO: Add advanced filters */}
              <span className="text-sm text-white/50">
                Advanced filters coming soon...
              </span>
            </div>
          </div>
        )}
      </div>

      {/* Template List */}
      {filteredTemplates.length === 0 ? (
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <div className="text-6xl mb-4">🎨</div>
            <h3 className="text-xl font-semibold text-white mb-2">No templates found</h3>
            <p className="text-white/60 mb-4">
              {searchQuery
                ? 'Try adjusting your search or filters'
                : 'Create your first template to get started'}
            </p>
            {!searchQuery && (
              <Button
                variant="primary"
                icon={<Plus size={16} />}
                onClick={onCreateTemplate}
              >
                Create Template
              </Button>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-1 overflow-auto">
          {viewMode === 'grid' ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {filteredTemplates.map((template) => (
                <TemplateCard
                  key={template.id}
                  template={template}
                  onSelect={handleSelectTemplate}
                  onDuplicate={handleDuplicateTemplate}
                  onDelete={handleDeleteTemplate}
                  onPreview={handlePreviewTemplate}
                  onExport={handleExportTemplate}
                  onShare={handleShareTemplate}
                  isSelected={selectedTemplate?.id === template.id}
                />
              ))}
            </div>
          ) : (
            <div className="space-y-2">
              {filteredTemplates.map((template) => (
                <TemplateListItem
                  key={template.id}
                  template={template}
                  onSelect={handleSelectTemplate}
                  onDuplicate={handleDuplicateTemplate}
                  onDelete={handleDeleteTemplate}
                  onPreview={handlePreviewTemplate}
                  onExport={handleExportTemplate}
                  onShare={handleShareTemplate}
                  isSelected={selectedTemplate?.id === template.id}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Preview Modal */}
      {showPreviewModal && selectedTemplate && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-white/10 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            {/* Modal Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <h2 className="text-xl font-semibold text-white">
                  {selectedTemplate.name}
                </h2>
                <p className="text-sm text-white/60">
                  {selectedTemplate.description}
                </p>
              </div>
              <Button
                variant="ghost"
                icon={<Check size={16} />}
                onClick={() => setShowPreviewModal(false)}
              >
                Close
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-4">
              {/* Template Preview */}
              <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden mb-4">
                {selectedTemplate.metadata.thumbnail ? (
                  <img
                    src={selectedTemplate.metadata.thumbnail}
                    alt={selectedTemplate.name}
                    className="w-full h-full object-contain"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-6xl mb-2">🎨</div>
                      <div className="text-white/50">No preview available</div>
                    </div>
                  </div>
                )}
              </div>

              {/* Template Details */}
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="text-white/50 mb-1">Category</div>
                  <div className="text-white">{selectedTemplate.metadata.category}</div>
                </div>
                <div>
                  <div className="text-white/50 mb-1">Author</div>
                  <div className="text-white">{selectedTemplate.metadata.author}</div>
                </div>
                <div>
                  <div className="text-white/50 mb-1">Version</div>
                  <div className="text-white">{selectedTemplate.metadata.version}</div>
                </div>
                <div>
                  <div className="text-white/50 mb-1">Usage</div>
                  <div className="text-white">{selectedTemplate.metadata.usageCount} times</div>
                </div>
                <div>
                  <div className="text-white/50 mb-1">Rating</div>
                  <div className="text-white">
                    {selectedTemplate.metadata.rating
                      ? `${selectedTemplate.metadata.rating.toFixed(1)} (${selectedTemplate.metadata.ratingCount} reviews)`
                      : 'Not rated'}
                  </div>
                </div>
                <div>
                  <div className="text-white/50 mb-1">Difficulty</div>
                  <div className="text-white capitalize">
                    {selectedTemplate.metadata.difficulty || 'Not specified'}
                  </div>
                </div>
              </div>

              {/* Tags */}
              {selectedTemplate.metadata.tags.length > 0 && (
                <div className="mt-4">
                  <div className="text-white/50 mb-2 text-sm">Tags</div>
                  <div className="flex flex-wrap gap-2">
                    {selectedTemplate.metadata.tags.map((tag) => (
                      <span
                        key={tag}
                        className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Content Fields */}
              {selectedTemplate.settings.contentFields.length > 0 && (
                <div className="mt-4">
                  <div className="text-white/50 mb-2 text-sm">Content Fields</div>
                  <div className="space-y-2">
                    {selectedTemplate.settings.contentFields.map((field) => (
                      <div
                        key={field.id}
                        className="bg-white/5 border border-white/10 rounded-lg p-3"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <div className="text-white font-medium">{field.label}</div>
                            <div className="text-xs text-white/50">
                              {field.type} {field.required && '(required)'}
                            </div>
                          </div>
                          <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                            {field.type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="flex items-center justify-end gap-2 p-4 border-t border-white/10">
              <Button
                variant="secondary"
                onClick={() => setShowPreviewModal(false)}
              >
                Close
              </Button>
              <Button
                variant="primary"
                onClick={() => {
                  handleSelectTemplate(selectedTemplate);
                  setShowPreviewModal(false);
                }}
              >
                Use This Template
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Import Modal */}
      {showImportModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-white/10 rounded-xl max-w-lg w-full">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <div>
                <h2 className="text-xl font-semibold text-white">Import Template</h2>
                <p className="text-sm text-white/60">Import a template from a JSON file</p>
              </div>
              <Button variant="ghost" size="sm" icon={<X size={16} />} onClick={() => setShowImportModal(false)}>
                Close
              </Button>
            </div>

            {/* Content */}
            <div className="p-6 space-y-6">
              {/* File Upload */}
              <div>
                <label className="block text-sm text-white mb-2">Select JSON File</label>
                <div className="border-2 border-dashed border-white/20 rounded-lg p-8 text-center hover:border-cyan-500/50 transition-colors">
                  <input
                    type="file"
                    accept=".json"
                    onChange={(e) => {
                      const file = e.target.files?.[0];
                      if (file) {
                        handleImportTemplate(file);
                      }
                    }}
                    className="hidden"
                    id="template-file-input"
                  />
                  <label
                    htmlFor="template-file-input"
                    className="cursor-pointer flex flex-col items-center gap-4"
                  >
                    <Upload size={48} className="text-white/50" />
                    <div>
                      <div className="text-white font-medium mb-1">Click to upload</div>
                      <div className="text-sm text-white/50">or drag and drop</div>
                    </div>
                    <div className="text-xs text-white/30">JSON files only</div>
                  </label>
                </div>
              </div>

              {/* Error Message */}
              {importError && (
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Import Failed</h4>
                      <p className="text-sm text-white/70">{importError}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Success Message */}
              {importSuccess && (
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Check size={18} className="text-green-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Import Successful</h4>
                      <p className="text-sm text-white/70">Template has been imported successfully!</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Info */}
              <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
                <div className="flex items-start gap-3">
                  <AlertCircle size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-medium mb-1">Import Notes</h4>
                    <ul className="text-sm text-white/70 space-y-1">
                      <li>• Only valid template JSON files can be imported</li>
                      <li>• Existing templates with the same ID will be renamed</li>
                      <li>• All template data including elements and settings will be imported</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-end gap-2 p-4 border-t border-white/10">
              <Button variant="secondary" onClick={() => setShowImportModal(false)}>
                Cancel
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}