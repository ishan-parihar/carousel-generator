'use client';

import React, { useState, useCallback, useRef, useEffect } from 'react';
import { useTemplateStore } from '@/store/template-store';
import { useCanvasStore } from '@/store/canvas-store';
import type { CanvasTemplate, CanvasElement } from '@/types/canvas-templates';
import { TemplateCanvasWrapper } from './TemplateCanvasWrapper';
import { cn } from '@/lib/utils';
import {
  Save,
  Download,
  Upload,
  Undo,
  Redo,
  ZoomIn,
  ZoomOut,
  Maximize,
  Minimize,
  Eye,
  EyeOff,
  Settings,
  Layers,
  Plus,
  Trash2,
  Copy,
  Lock,
  Unlock,
  ArrowUp,
  ArrowDown,
  X,
  Play,
  Pause,
  Share2,
  Check,
  AlertCircle,
  History,
  GitCommit,
  GitCompare,
  RotateCcw,
  Clock,
  User,
  Edit,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { PropertyPanel } from '../editor/PropertyPanel';
import { LayerPanel } from '../editor/LayerPanel';
import { Toolbar } from '../editor/Toolbar';
import { ZoomControls } from '../editor/ZoomControls';
import { SLIDE_WIDTH, SLIDE_HEIGHT } from '@/config/constants';
import {
  TextElement,
  ImageElement,
  BackgroundElement,
  DecoratorElement,
  CTAElement,
} from '@/canvas-editor/elements';

/**
 * Template Editor Component
 *
 * Canvas-based editor for creating and editing templates.
 * This is the primary editor for template design.
 *
 * Features:
 * - Canvas-based visual editor
 * - Drag-and-drop elements
 * - Property panel for element editing
 * - Layer panel for element management
 * - Template settings panel
 * - Content field definition
 * - Template preview with sample content
 * - Zoom and pan controls
 * - Undo/redo support
 * - Element locking and hiding
 *
 * @param template - Template to edit (optional for new templates)
 * @param onSave - Callback when template is saved
 * @param onCancel - Callback when editing is cancelled
 */
interface TemplateEditorProps {
  template?: CanvasTemplate;
  onSave?: (template: CanvasTemplate) => void;
  onCancel?: () => void;
  className?: string;
}

/**
 * Template Settings Panel Component
 *
 * Panel for editing template-level settings:
 * - Name and description
 * - Category and tags
 * - Canvas dimensions
 * - Background color
 * - Default theme
 * - Max slides
 */
interface TemplateSettingsPanelProps {
  template: CanvasTemplate;
  onChange: (updates: Partial<CanvasTemplate>) => void;
  onClose: () => void;
}

function TemplateSettingsPanel({
  template,
  onChange,
  onClose,
}: TemplateSettingsPanelProps) {
  const [localSettings, setLocalSettings] = useState({
    name: template.name,
    description: template.description,
    category: template.metadata.category,
    tags: template.metadata.tags.join(', '),
    width: template.settings.width,
    height: template.settings.height,
    backgroundColor: template.settings.backgroundColor,
    defaultTheme: template.settings.defaultTheme || '',
    maxSlides: template.settings.maxSlides || 10,
    enableResponsive: template.settings.enableResponsive ?? true,
    showSlideNumbers: template.settings.showSlideNumbers ?? true,
    autoFitContent: template.settings.autoFitContent ?? true,
  });

  const handleSave = () => {
    onChange({
      name: localSettings.name,
      description: localSettings.description,
      metadata: {
        ...template.metadata,
        category: localSettings.category as any,
        tags: localSettings.tags.split(',').map(t => t.trim()).filter(Boolean),
      },
      settings: {
        ...template.settings,
        width: localSettings.width,
        height: localSettings.height,
        backgroundColor: localSettings.backgroundColor,
        defaultTheme: localSettings.defaultTheme || undefined,
        maxSlides: localSettings.maxSlides,
        enableResponsive: localSettings.enableResponsive,
        showSlideNumbers: localSettings.showSlideNumbers,
        autoFitContent: localSettings.autoFitContent,
      },
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-white/10 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">Template Settings</h2>
          <Button variant="ghost" size="sm" icon={<X size={16} />} onClick={onClose}>
            Close
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Basic Info */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Basic Information</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Template Name</label>
                <input
                  type="text"
                  value={localSettings.name}
                  onChange={(e) => setLocalSettings({ ...localSettings, name: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="My Template"
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Description</label>
                <textarea
                  value={localSettings.description}
                  onChange={(e) => setLocalSettings({ ...localSettings, description: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none resize-none"
                  rows={3}
                  placeholder="Describe your template..."
                />
              </div>
            </div>
          </div>

          {/* Category & Tags */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Category & Tags</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Category</label>
                <select
                  value={localSettings.category}
                  onChange={(e) => setLocalSettings({ ...localSettings, category: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                >
                  <option value="marketing">Marketing</option>
                  <option value="education">Education</option>
                  <option value="social">Social</option>
                  <option value="business">Business</option>
                  <option value="personal">Personal</option>
                  <option value="news">News</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="technology">Technology</option>
                  <option value="health">Health</option>
                  <option value="finance">Finance</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={localSettings.tags}
                  onChange={(e) => setLocalSettings({ ...localSettings, tags: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  placeholder="carousel, social, instagram"
                />
              </div>
            </div>
          </div>

          {/* Canvas Settings */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Canvas Settings</h3>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-white/70 mb-2">Width (px)</label>
                <input
                  type="number"
                  value={localSettings.width}
                  onChange={(e) => setLocalSettings({ ...localSettings, width: parseInt(e.target.value) || 1080 })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  min={100}
                  max={4000}
                />
              </div>
              <div>
                <label className="block text-sm text-white/70 mb-2">Height (px)</label>
                <input
                  type="number"
                  value={localSettings.height}
                  onChange={(e) => setLocalSettings({ ...localSettings, height: parseInt(e.target.value) || 1080 })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  min={100}
                  max={4000}
                />
              </div>
              <div className="col-span-2">
                <label className="block text-sm text-white/70 mb-2">Background Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={localSettings.backgroundColor}
                    onChange={(e) => setLocalSettings({ ...localSettings, backgroundColor: e.target.value })}
                    className="w-12 h-10 rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={localSettings.backgroundColor}
                    onChange={(e) => setLocalSettings({ ...localSettings, backgroundColor: e.target.value })}
                    className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none font-mono"
                    placeholder="#000000"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Template Options */}
          <div>
            <h3 className="text-sm font-medium text-white mb-3">Template Options</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white">Enable Responsive</div>
                  <div className="text-xs text-white/50">Allow template to scale to different screen sizes</div>
                </div>
                <button
                  onClick={() => setLocalSettings({ ...localSettings, enableResponsive: !localSettings.enableResponsive })}
                  className={cn(
                    'w-12 h-6 rounded-full transition-colors relative',
                    localSettings.enableResponsive ? 'bg-cyan-500' : 'bg-white/10'
                  )}
                >
                  <div
                    className={cn(
                      'w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all',
                      localSettings.enableResponsive ? 'left-6' : 'left-0.5'
                    )}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white">Show Slide Numbers</div>
                  <div className="text-xs text-white/50">Display slide numbers by default</div>
                </div>
                <button
                  onClick={() => setLocalSettings({ ...localSettings, showSlideNumbers: !localSettings.showSlideNumbers })}
                  className={cn(
                    'w-12 h-6 rounded-full transition-colors relative',
                    localSettings.showSlideNumbers ? 'bg-cyan-500' : 'bg-white/10'
                  )}
                >
                  <div
                    className={cn(
                      'w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all',
                      localSettings.showSlideNumbers ? 'left-6' : 'left-0.5'
                    )}
                  />
                </button>
              </div>

              <div className="flex items-center justify-between">
                <div>
                  <div className="text-white">Auto-fit Content</div>
                  <div className="text-xs text-white/50">Automatically fit content to element dimensions</div>
                </div>
                <button
                  onClick={() => setLocalSettings({ ...localSettings, autoFitContent: !localSettings.autoFitContent })}
                  className={cn(
                    'w-12 h-6 rounded-full transition-colors relative',
                    localSettings.autoFitContent ? 'bg-cyan-500' : 'bg-white/10'
                  )}
                >
                  <div
                    className={cn(
                      'w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all',
                      localSettings.autoFitContent ? 'left-6' : 'left-0.5'
                    )}
                  />
                </button>
              </div>

              <div>
                <label className="block text-sm text-white/70 mb-2">Maximum Slides</label>
                <input
                  type="number"
                  value={localSettings.maxSlides}
                  onChange={(e) => setLocalSettings({ ...localSettings, maxSlides: parseInt(e.target.value) || 10 })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  min={1}
                  max={100}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-4 border-t border-white/10">
          <Button variant="secondary" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * Template Preview Panel Component
 *
 * Panel for previewing template with sample content
 */
interface TemplatePreviewPanelProps {
  template: CanvasTemplate;
  onClose: () => void;
}

function TemplatePreviewPanel({ template, onClose }: TemplatePreviewPanelProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(1);

  // Auto-play slides
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => {
        const maxSlides = template.settings.maxSlides || 10;
        return prev >= maxSlides ? 1 : prev + 1;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, template.settings.maxSlides]);

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-white/10 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div>
            <h2 className="text-xl font-semibold text-white">Template Preview</h2>
            <p className="text-sm text-white/60">{template.name}</p>
          </div>
          <div className="flex items-center gap-2">
            <Button
              variant="ghost"
              size="sm"
              icon={isPlaying ? <Pause size={16} /> : <Play size={16} />}
              onClick={() => setIsPlaying(!isPlaying)}
            >
              {isPlaying ? 'Pause' : 'Play'}
            </Button>
            <Button variant="ghost" size="sm" icon={<X size={16} />} onClick={onClose}>
              Close
            </Button>
          </div>
        </div>

        {/* Preview Content */}
        <div className="p-6">
          <div className="aspect-video bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg overflow-hidden relative">
            {/* TODO: Render template with sample content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-6xl mb-4">🎨</div>
                <div className="text-white text-xl font-medium mb-2">Template Preview</div>
                <div className="text-white/60 mb-4">Slide {currentSlide} of {template.settings.maxSlides || 10}</div>
                <div className="flex items-center justify-center gap-2">
                  {Array.from({ length: Math.min(5, template.settings.maxSlides || 10) }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentSlide(i + 1)}
                      className={cn(
                        'w-2 h-2 rounded-full transition-colors',
                        currentSlide === i + 1 ? 'bg-cyan-500' : 'bg-white/30'
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Template Info */}
          <div className="mt-4 grid grid-cols-3 gap-4 text-sm">
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-white/50 mb-1">Dimensions</div>
              <div className="text-white font-medium">
                {template.settings.width} × {template.settings.height}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-white/50 mb-1">Max Slides</div>
              <div className="text-white font-medium">
                {template.settings.maxSlides || 10}
              </div>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-lg p-4">
              <div className="text-white/50 mb-1">Content Fields</div>
              <div className="text-white font-medium">
                {template.settings.contentFields.length}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Share Template Modal Component
 *
 * Modal for sharing templates with:
 * - Shareable URL generation
 * - Copy to clipboard functionality
 * - Template export option
 * - Success/error messages
 */
interface ShareTemplateModalProps {
  template: CanvasTemplate;
  onClose: () => void;
}

function ShareTemplateModal({ template, onClose }: ShareTemplateModalProps) {
  const [shareUrl, setShareUrl] = useState('');
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Generate shareable URL
  useEffect(() => {
    if (template.id) {
      // Generate shareable URL based on template ID
      const baseUrl = window.location.origin;
      const url = `${baseUrl}/templates/${template.id}`;
      setShareUrl(url);
    } else {
      setError('Please save the template before sharing');
    }
  }, [template.id]);

  // Copy to clipboard
  const handleCopyToClipboard = async () => {
    if (!shareUrl) return;

    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setError(null);

      // Reset copied state after 2 seconds
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy to clipboard');
      console.error('Failed to copy:', err);
    }
  };

  // Handle template export
  const handleExport = () => {
    const exportData = JSON.stringify(template, null, 2);
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-white/10 rounded-xl max-w-lg w-full">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div>
            <h2 className="text-xl font-semibold text-white">Share Template</h2>
            <p className="text-sm text-white/60">{template.name}</p>
          </div>
          <Button variant="ghost" size="sm" icon={<X size={16} />} onClick={onClose}>
            Close
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Share URL */}
          <div>
            <label className="block text-sm text-white mb-2">Shareable URL</label>
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={shareUrl}
                readOnly
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white/70 font-mono text-sm"
                placeholder="Save template to generate shareable URL"
              />
              <Button
                variant="secondary"
                size="sm"
                icon={copied ? <Check size={16} /> : <Copy size={16} />}
                onClick={handleCopyToClipboard}
                disabled={!shareUrl}
              >
                {copied ? 'Copied!' : 'Copy'}
              </Button>
            </div>
            {error && (
              <div className="mt-2 flex items-center gap-2 text-sm text-red-400">
                <AlertCircle size={14} />
                {error}
              </div>
            )}
          </div>

          {/* Export Option */}
          <div className="bg-white/5 border border-white/10 rounded-lg p-4">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3 className="text-white font-medium mb-1">Export as JSON</h3>
                <p className="text-sm text-white/60">
                  Download the template as a JSON file for backup or sharing via other platforms
                </p>
              </div>
              <Button
                variant="secondary"
                size="sm"
                icon={<Download size={16} />}
                onClick={handleExport}
              >
                Export
              </Button>
            </div>
          </div>

          {/* Info */}
          <div className="bg-cyan-500/10 border border-cyan-500/20 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <Share2 size={18} className="text-cyan-400 flex-shrink-0 mt-0.5" />
              <div>
                <h4 className="text-white font-medium mb-1">Sharing Options</h4>
                <ul className="text-sm text-white/70 space-y-1">
                  <li>• Copy the URL to share with others</li>
                  <li>• Export as JSON for backup or offline use</li>
                  <li>• Others can view and use your template</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-4 border-t border-white/10">
          <Button variant="secondary" onClick={onClose}>
            Close
          </Button>
          <Button
            variant="primary"
            icon={<Check size={16} />}
            onClick={() => {
              if (shareUrl) {
                handleCopyToClipboard();
                onClose();
              }
            }}
            disabled={!shareUrl}
          >
            Copy & Close
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * Version History Panel Component
 *
 * Panel for viewing and managing template version history:
 * - List all versions with timestamps
 * - Show version metadata (author, description)
 * - Rollback to previous versions
 * - Compare versions
 */
interface VersionHistoryPanelProps {
  templateId: string;
  onClose: () => void;
  onRollback: (version: string) => void;
  onCompare: (version1: string, version2: string) => void;
}

function VersionHistoryPanel({
  templateId,
  onClose,
  onRollback,
  onCompare,
}: VersionHistoryPanelProps) {
  const {
    getTemplateVersionSnapshots,
    getTemplateById,
  } = useTemplateStore();

  const versions = getTemplateVersionSnapshots(templateId);
  const currentTemplate = getTemplateById(templateId);
  const [selectedVersion1, setSelectedVersion1] = useState<string>('');
  const [selectedVersion2, setSelectedVersion2] = useState<string>('');
  const [showCompare, setShowCompare] = useState(false);
  const [compareResult, setCompareResult] = useState<any>(null);
  const [rollbackConfirm, setRollbackConfirm] = useState<string | null>(null);

  const handleCompare = () => {
    if (!selectedVersion1 || !selectedVersion2) return;

    try {
      const result = useTemplateStore.getState().compareTemplateVersions(
        templateId,
        selectedVersion1,
        selectedVersion2
      );
      setCompareResult(result);
      setShowCompare(true);
    } catch (error) {
      console.error('Failed to compare versions:', error);
      alert('Failed to compare versions');
    }
  };

  const handleRollback = (version: string) => {
    setRollbackConfirm(version);
  };

  const confirmRollback = () => {
    if (rollbackConfirm) {
      onRollback(rollbackConfirm);
      setRollbackConfirm(null);
      onClose();
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
    });
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-white/10 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <div className="flex items-center gap-3">
            <History size={20} className="text-cyan-400" />
            <div>
              <h2 className="text-xl font-semibold text-white">Version History</h2>
              <p className="text-sm text-white/60">{versions.length} versions</p>
            </div>
          </div>
          <Button variant="ghost" size="sm" icon={<X size={16} />} onClick={onClose}>
            Close
          </Button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Version List */}
          <div className="space-y-3">
            {versions.length === 0 ? (
              <div className="text-center py-8">
                <GitCommit size={48} className="text-white/20 mx-auto mb-4" />
                <p className="text-white/60">No versions saved yet</p>
                <p className="text-sm text-white/40">Save your template to create your first version</p>
              </div>
            ) : (
              versions.map((version, index) => (
                <div
                  key={version.version}
                  className={cn(
                    'bg-white/5 border border-white/10 rounded-lg p-4',
                    version.version === currentTemplate?.metadata.version && 'border-cyan-500/50 bg-cyan-500/10'
                  )}
                >
                  <div className="flex items-start justify-between gap-4">
                    {/* Version Info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <GitCommit size={16} className="text-cyan-400" />
                        <span className="text-white font-medium">v{version.version}</span>
                        {version.version === currentTemplate?.metadata.version && (
                          <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                            Current
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-white/70 mb-2">{version.description}</p>
                      <div className="flex items-center gap-4 text-xs text-white/50">
                        <div className="flex items-center gap-1">
                          <Clock size={12} />
                          {formatDate(version.timestamp)}
                        </div>
                        <div className="flex items-center gap-1">
                          <User size={12} />
                          {version.author}
                        </div>
                        <div className="flex items-center gap-1 font-mono">
                          {version.checksum.substring(0, 8)}
                        </div>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        icon={<GitCompare size={14} />}
                        onClick={() => {
                          if (selectedVersion1 === version.version) {
                            setSelectedVersion1('');
                          } else {
                            setSelectedVersion1(version.version);
                          }
                        }}
                        className={selectedVersion1 === version.version ? 'bg-cyan-500/20 text-cyan-400' : ''}
                      >
                        {selectedVersion1 === version.version ? 'Selected' : 'Compare'}
                      </Button>
                      {version.version !== currentTemplate?.metadata.version && (
                        <Button
                          variant="ghost"
                          size="sm"
                          icon={<RotateCcw size={14} />}
                          onClick={() => handleRollback(version.version)}
                        >
                          Rollback
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Compare Button */}
          {selectedVersion1 && versions.length > 1 && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium mb-1">Compare Versions</h3>
                  <p className="text-sm text-white/60">
                    Selected: v{selectedVersion1}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <select
                    value={selectedVersion2}
                    onChange={(e) => setSelectedVersion2(e.target.value)}
                    className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none"
                  >
                    <option value="">Select version to compare</option>
                    {versions
                      .filter(v => v.version !== selectedVersion1)
                      .map(v => (
                        <option key={v.version} value={v.version}>
                          v{v.version} - {v.description}
                        </option>
                      ))}
                  </select>
                  <Button
                    variant="secondary"
                    icon={<GitCompare size={16} />}
                    onClick={handleCompare}
                    disabled={!selectedVersion2}
                  >
                    Compare
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Compare Result */}
          {showCompare && compareResult && (
            <div className="mt-6 pt-6 border-t border-white/10">
              <h3 className="text-white font-medium mb-4">Comparison Result</h3>
              <div className="grid grid-cols-3 gap-4">
                {/* Elements Added */}
                <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Plus size={16} className="text-green-400" />
                    <span className="text-white font-medium">Added</span>
                  </div>
                  <div className="text-2xl text-green-400 font-bold mb-1">
                    {compareResult.elements.added.length}
                  </div>
                  <div className="text-sm text-white/60">elements</div>
                </div>

                {/* Elements Removed */}
                <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Trash2 size={16} className="text-red-400" />
                    <span className="text-white font-medium">Removed</span>
                  </div>
                  <div className="text-2xl text-red-400 font-bold mb-1">
                    {compareResult.elements.removed.length}
                  </div>
                  <div className="text-sm text-white/60">elements</div>
                </div>

                {/* Elements Modified */}
                <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Edit size={16} className="text-yellow-400" />
                    <span className="text-white font-medium">Modified</span>
                  </div>
                  <div className="text-2xl text-yellow-400 font-bold mb-1">
                    {compareResult.elements.modified.length}
                  </div>
                  <div className="text-sm text-white/60">elements</div>
                </div>
              </div>

              {compareResult.settingsChanged && (
                <div className="mt-4 bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                  <div className="flex items-center gap-2 text-blue-400">
                    <Settings size={16} />
                    <span className="font-medium">Settings Changed</span>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Rollback Confirmation Dialog */}
        {rollbackConfirm && (
          <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-900 border border-white/10 rounded-xl max-w-md w-full p-6">
              <div className="flex items-center gap-3 mb-4">
                <AlertCircle size={24} className="text-yellow-400" />
                <h3 className="text-xl font-semibold text-white">Confirm Rollback</h3>
              </div>
              <p className="text-white/70 mb-6">
                Are you sure you want to rollback to version <span className="text-cyan-400 font-medium">v{rollbackConfirm}</span>?
                This will replace the current template with the selected version.
              </p>
              <div className="flex items-center justify-end gap-2">
                <Button variant="secondary" onClick={() => setRollbackConfirm(null)}>
                  Cancel
                </Button>
                <Button
                  variant="primary"
                  icon={<RotateCcw size={16} />}
                  onClick={confirmRollback}
                >
                  Confirm Rollback
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

/**
 * Template Editor Main Component
 */
export function TemplateEditor({
  template: initialTemplate,
  onSave,
  onCancel,
  className,
}: TemplateEditorProps) {
  // Template state
  const [template, setTemplate] = useState<CanvasTemplate>(() => {
    if (initialTemplate) {
      return initialTemplate;
    }

    // Create new template with default values
    return {
      id: '',
      name: 'New Template',
      description: 'A custom template',
      elements: [],
      settings: {
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        backgroundColor: '#000000',
        allowCustomContent: true,
        contentFields: [],
        enableResponsive: true,
        showSlideNumbers: true,
        autoFitContent: true,
        maxSlides: 10,
      },
      metadata: {
        version: '1.0.0',
        author: 'User',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        tags: [],
        category: 'personal',
        description: 'A custom template',
        isOfficial: false,
        isPublic: false,
        usageCount: 0,
      },
    };
  });

  // UI state
  const [showSettings, setShowSettings] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showContentFields, setShowContentFields] = useState(false);
  const [showShareModal, setShowShareModal] = useState(false);
  const [showVersionHistory, setShowVersionHistory] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  // Canvas store state
  const { zoom, pan, selectedIds } = useCanvasStore();

  // Template store
  const { addTemplate, updateTemplate, createTemplateVersion, rollbackTemplate } = useTemplateStore();

  // Handle template save
  const handleSave = useCallback(() => {
    const templateToSave = {
      ...template,
      metadata: {
        ...template.metadata,
        updatedAt: new Date().toISOString(),
      },
    };

    if (template.id) {
      // Create a version before updating
      createTemplateVersion(template.id, 'Manual save');
      updateTemplate(template.id, templateToSave);
    } else {
      addTemplate(templateToSave);
    }

    setHasChanges(false);
    onSave?.(templateToSave);
  }, [template, addTemplate, updateTemplate, createTemplateVersion, onSave]);

  // Handle template rollback
  const handleRollback = useCallback((version: string) => {
    if (!template.id) return;

    try {
      rollbackTemplate(template.id, version);
      setTemplate((prev) => ({
        ...prev,
        metadata: {
          ...prev.metadata,
          version,
          updatedAt: new Date().toISOString(),
        },
      }));
      setHasChanges(true);
      alert(`Successfully rolled back to version ${version}`);
    } catch (error) {
      console.error('Failed to rollback:', error);
      alert('Failed to rollback template');
    }
  }, [template.id, rollbackTemplate]);

  // Handle version comparison
  const handleCompareVersions = useCallback((version1: string, version2: string) => {
    if (!template.id) return;

    try {
      const result = useTemplateStore.getState().compareTemplateVersions(
        template.id,
        version1,
        version2
      );
      console.log('Comparison result:', result);
      // TODO: Show comparison result in UI
    } catch (error) {
      console.error('Failed to compare versions:', error);
      alert('Failed to compare versions');
    }
  }, [template.id]);

  // Handle template export
  const handleExport = useCallback(() => {
    const exportData = JSON.stringify(template, null, 2);
    const blob = new Blob([exportData], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${template.name.replace(/\s+/g, '-').toLowerCase()}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }, [template]);

  // Handle template import
  const handleImport = useCallback(() => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'application/json';
    input.onchange = (e) => {
      const file = (e.target as HTMLInputElement).files?.[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const imported = JSON.parse(e.target?.result as string) as CanvasTemplate;
          setTemplate(imported);
          setHasChanges(true);
        } catch (error) {
          console.error('Failed to import template:', error);
          alert('Failed to import template. Please check the file format.');
        }
      };
      reader.readAsText(file);
    };
    input.click();
  }, []);

  // Update template elements
  const handleElementsChange = useCallback((elements: CanvasElement[]) => {
    setTemplate((prev) => ({
      ...prev,
      elements,
    }));
    setHasChanges(true);
  }, []);

  // Handle element selection
  const handleElementSelect = useCallback((elementId: string) => {
    const { selectElement } = useCanvasStore.getState();
    selectElement(elementId);
  }, []);

  return (
    <div className={cn('flex flex-col h-full bg-slate-900', className)}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-slate-900">
        <div className="flex items-center gap-4">
          {/* Back Button */}
          {onCancel && (
            <Button variant="ghost" size="sm" onClick={onCancel}>
              ← Back
            </Button>
          )}

          {/* Template Name */}
          <div>
            <input
              type="text"
              value={template.name}
              onChange={(e) => {
                setTemplate((prev) => ({ ...prev, name: e.target.value }));
                setHasChanges(true);
              }}
              className="bg-transparent text-white font-semibold text-lg focus:outline-none focus:border-b focus:border-cyan-500"
              placeholder="Template Name"
            />
          </div>

          {hasChanges && (
            <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded-full">
              Unsaved
            </span>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          {template.id && (
            <Button
              variant="ghost"
              size="sm"
              icon={<History size={16} />}
              onClick={() => setShowVersionHistory(true)}
            >
              History
            </Button>
          )}
          <Button
            variant="ghost"
            size="sm"
            icon={<Settings size={16} />}
            onClick={() => setShowSettings(true)}
          >
            Settings
          </Button>
          <Button
            variant="ghost"
            size="sm"
            icon={<Eye size={16} />}
            onClick={() => setShowPreview(true)}
          >
            Preview
          </Button>
          <Button
            variant="ghost"
            size="sm"
            icon={<Share2 size={16} />}
            onClick={() => setShowShareModal(true)}
          >
            Share
          </Button>
          <Button
            variant="ghost"
            size="sm"
            icon={<Upload size={16} />}
            onClick={handleImport}
          >
            Import
          </Button>
          <Button
            variant="ghost"
            size="sm"
            icon={<Download size={16} />}
            onClick={handleExport}
          >
            Export
          </Button>
          <Button
            variant="primary"
            size="sm"
            icon={<Save size={16} />}
            onClick={handleSave}
            disabled={!hasChanges}
          >
            Save
          </Button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Panel - Layers */}
        <div className="w-64 border-r border-white/10 bg-slate-900/50 flex flex-col">
          <div className="p-3 border-b border-white/10">
            <h3 className="text-sm font-medium text-white flex items-center gap-2">
              <Layers size={16} />
              Layers
            </h3>
          </div>
          <div className="flex-1 overflow-auto p-3">
            <LayerPanel
              elements={new Map(template.elements.map(el => [el.id, el]))}
              onElementUpdate={(id, updates) => {
                const updatedElements = template.elements.map(el =>
                  el.id === id ? { ...el, ...updates } : el
                );
                handleElementsChange(updatedElements);
              }}
              onElementDelete={(id) => {
                const updatedElements = template.elements.filter(el => el.id !== id);
                handleElementsChange(updatedElements);
              }}
            />
          </div>
        </div>

        {/* Center - Canvas */}
        <div className="flex-1 flex flex-col bg-slate-950">
          {/* Toolbar */}
          <div className="border-b border-white/10 bg-slate-900/50">
            <Toolbar />
          </div>

          {/* Canvas Area */}
          <div className="flex-1 overflow-auto flex items-center justify-center p-8">
            <TemplateCanvasWrapper
              template={template}
              selectedIds={selectedIds}
              onElementSelect={handleElementSelect}
              zoom={zoom}
              pan={pan}
            />
          </div>

          {/* Zoom Controls */}
          <div className="absolute bottom-4 right-4">
            <ZoomControls />
          </div>
        </div>

        {/* Right Panel - Properties */}
        <div className="w-80 border-l border-white/10 bg-slate-900/50 flex flex-col">
          <div className="p-3 border-b border-white/10">
            <h3 className="text-sm font-medium text-white">Properties</h3>
          </div>
          <div className="flex-1 overflow-auto p-3">
            <PropertyPanel
              elements={new Map(template.elements.map(el => [el.id, el]))}
              onElementUpdate={(id, updates) => {
                const updatedElements = template.elements.map(el =>
                  el.id === id ? { ...el, ...updates } : el
                );
                handleElementsChange(updatedElements);
              }}
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      {showSettings && (
        <TemplateSettingsPanel
          template={template}
          onChange={(updates) => {
            setTemplate((prev) => ({ ...prev, ...updates }));
            setHasChanges(true);
          }}
          onClose={() => setShowSettings(false)}
        />
      )}

      {showPreview && (
        <TemplatePreviewPanel
          template={template}
          onClose={() => setShowPreview(false)}
        />
      )}

      {showShareModal && (
        <ShareTemplateModal
          template={template}
          onClose={() => setShowShareModal(false)}
        />
      )}

      {showVersionHistory && template.id && (
        <VersionHistoryPanel
          templateId={template.id}
          onClose={() => setShowVersionHistory(false)}
          onRollback={handleRollback}
          onCompare={handleCompareVersions}
        />
      )}

      {showContentFields && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-slate-900 border border-white/10 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-auto">
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <h2 className="text-xl font-semibold text-white">Content Fields</h2>
              <Button variant="ghost" size="sm" icon={<X size={16} />} onClick={() => setShowContentFields(false)}>
                Close
              </Button>
            </div>
            <div className="p-6">
              <div className="text-center text-white/60">
                Content field editing coming soon...
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}