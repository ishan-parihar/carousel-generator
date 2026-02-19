'use client';

import React, { useState, useCallback } from 'react';
import { useTemplateStore } from '@/store/template-store';
import type { CanvasTemplate, ContentField, ContentFieldType, CanvasElement } from '@/types/canvas-templates';
import { cn } from '@/lib/utils';
import {
  Plus,
  Trash2,
  GripVertical,
  Edit,
  Eye,
  EyeOff,
  Check,
  X,
  Type,
  Image as ImageIcon,
  Palette,
  Hash,
  ToggleLeft,
  ChevronDown,
  ChevronUp,
  Link,
  Info,
  AlertCircle,
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Select } from '@/components/ui/Select';

/**
 * Content Field Panel Component
 *
 * Panel for defining and managing content fields in templates.
 * Content fields are the inputs users fill when generating a carousel from a template.
 *
 * Features:
 * - Define content fields (text, image, color, number, boolean, select, textarea)
 * - Link fields to canvas elements
 * - Set field properties (required, default value, validation)
 * - Preview field mapping
 * - Field validation
 * - Field reordering
 * - Field grouping
 *
 * @param template - Template being edited
 * @param onFieldsChange - Callback when fields are modified
 */
interface ContentFieldPanelProps {
  template: CanvasTemplate;
  onFieldsChange?: (fields: ContentField[]) => void;
  className?: string;
}

/**
 * Content Field Type Configuration
 */
const FIELD_TYPE_CONFIG: Record<
  ContentFieldType,
  {
    icon: React.ReactNode;
    label: string;
    description: string;
    hasOptions: boolean;
    hasValidation: boolean;
    hasPlaceholder: boolean;
    hasMaxLength: boolean;
  }
> = {
  text: {
    icon: <Type size={16} />,
    label: 'Text',
    description: 'Single line of text',
    hasOptions: false,
    hasValidation: true,
    hasPlaceholder: true,
    hasMaxLength: true,
  },
  textarea: {
    icon: <Type size={16} />,
    label: 'Text Area',
    description: 'Multi-line text input',
    hasOptions: false,
    hasValidation: true,
    hasPlaceholder: true,
    hasMaxLength: true,
  },
  image: {
    icon: <ImageIcon size={16} />,
    label: 'Image',
    description: 'Image URL or upload',
    hasOptions: false,
    hasValidation: false,
    hasPlaceholder: false,
    hasMaxLength: false,
  },
  color: {
    icon: <Palette size={16} />,
    label: 'Color',
    description: 'Color picker',
    hasOptions: false,
    hasValidation: false,
    hasPlaceholder: false,
    hasMaxLength: false,
  },
  number: {
    icon: <Hash size={16} />,
    label: 'Number',
    description: 'Numeric input',
    hasOptions: false,
    hasValidation: true,
    hasPlaceholder: false,
    hasMaxLength: false,
  },
  boolean: {
    icon: <ToggleLeft size={16} />,
    label: 'Boolean',
    description: 'Toggle/checkbox',
    hasOptions: false,
    hasValidation: false,
    hasPlaceholder: false,
    hasMaxLength: false,
  },
  select: {
    icon: <ChevronDown size={16} />,
    label: 'Select',
    description: 'Dropdown selection',
    hasOptions: true,
    hasValidation: false,
    hasPlaceholder: false,
    hasMaxLength: false,
  },
};

/**
 * Field Editor Modal Component
 *
 * Modal for creating or editing a content field
 */
interface FieldEditorModalProps {
  field?: ContentField;
  templateElements: CanvasElement[];
  onSave: (field: ContentField) => void;
  onCancel: () => void;
}

function FieldEditorModal({ field, templateElements, onSave, onCancel }: FieldEditorModalProps) {
  const [formData, setFormData] = useState<Partial<ContentField>>({
    id: field?.id || `field-${Date.now()}`,
    name: field?.name || '',
    label: field?.label || '',
    type: field?.type || 'text',
    elementId: field?.elementId || '',
    defaultValue: field?.defaultValue ?? '',
    required: field?.required ?? false,
    placeholder: field?.placeholder || '',
    maxLength: field?.maxLength,
    options: field?.options || [],
    validation: field?.validation,
    helpText: field?.helpText || '',
    group: field?.group || '',
    order: field?.order || 0,
  });

  const [showValidation, setShowValidation] = useState(!!field?.validation);
  const [newOption, setNewOption] = useState('');

  const handleSave = () => {
    if (!formData.name || !formData.label) {
      alert('Please fill in the required fields');
      return;
    }

    onSave(formData as ContentField);
  };

  const handleAddOption = () => {
    if (!newOption.trim()) return;

    setFormData((prev) => ({
      ...prev,
      options: [...(prev.options || []), newOption.trim()],
    }));
    setNewOption('');
  };

  const handleRemoveOption = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      options: prev.options?.filter((_, i) => i !== index) || [],
    }));
  };

  const config = FIELD_TYPE_CONFIG[formData.type || 'text'];

  return (
    <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
      <div className="bg-slate-900 border border-white/10 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="text-xl font-semibold text-white">
            {field ? 'Edit Field' : 'Add Field'}
          </h2>
          <Button variant="ghost" size="sm" icon={<X size={16} />} onClick={onCancel}>
            Cancel
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Field Type */}
          <div>
            <label className="block text-sm text-white/70 mb-2">Field Type</label>
            <div className="grid grid-cols-4 gap-2">
              {(Object.keys(FIELD_TYPE_CONFIG) as ContentFieldType[]).map((type) => {
                const typeConfig = FIELD_TYPE_CONFIG[type];
                return (
                  <button
                    key={type}
                    onClick={() => setFormData((prev) => ({ ...prev, type }))}
                    className={cn(
                      'flex flex-col items-center gap-2 p-3 rounded-lg border transition-all',
                      formData.type === type
                        ? 'border-cyan-500 bg-cyan-500/10 text-cyan-400'
                        : 'border-white/10 bg-white/5 text-white/50 hover:border-white/20 hover:text-white/70'
                    )}
                  >
                    {typeConfig.icon}
                    <span className="text-xs font-medium">{typeConfig.label}</span>
                  </button>
                );
              })}
            </div>
            <p className="text-xs text-white/50 mt-2">{config.description}</p>
          </div>

          {/* Basic Info */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm text-white/70 mb-2">
                Field Name <span className="text-red-400">*</span>
              </label>
              <Input
                value={formData.name}
                onChange={(e) => setFormData((prev) => ({ ...prev, name: e.target.value }))}
                placeholder="headline"
                className="font-mono"
              />
              <p className="text-xs text-white/50 mt-1">
                Internal identifier (used in code)
              </p>
            </div>

            <div>
              <label className="block text-sm text-white/70 mb-2">
                Field Label <span className="text-red-400">*</span>
              </label>
              <Input
                value={formData.label}
                onChange={(e) => setFormData((prev) => ({ ...prev, label: e.target.value }))}
                placeholder="Headline Text"
              />
              <p className="text-xs text-white/50 mt-1">
                Displayed to users
              </p>
            </div>

            {config.hasPlaceholder && (
              <div>
                <label className="block text-sm text-white/70 mb-2">Placeholder</label>
                <Input
                  value={formData.placeholder}
                  onChange={(e) => setFormData((prev) => ({ ...prev, placeholder: e.target.value }))}
                  placeholder="Enter your headline..."
                />
              </div>
            )}

            {config.hasMaxLength && (
              <div>
                <label className="block text-sm text-white/70 mb-2">Max Length</label>
                <Input
                  type="number"
                  value={formData.maxLength || ''}
                  onChange={(e) => setFormData((prev) => ({ ...prev, maxLength: parseInt(e.target.value) || undefined }))}
                  placeholder="100"
                />
              </div>
            )}
          </div>

          {/* Element Linking */}
          <div>
            <label className="block text-sm text-white/70 mb-2 flex items-center gap-2">
              <Link size={16} />
              Link to Element
            </label>
            <Select
              value={formData.elementId}
              onChange={(e) => setFormData((prev) => ({ ...prev, elementId: e.target.value }))}
              options={[
                { value: '', label: 'No element linked' },
                ...templateElements.map((el) => ({
                  value: el.id,
                  label: `${el.type} - ${el.name || el.id}`,
                })),
              ]}
              className="w-full"
            />
            <p className="text-xs text-white/50 mt-1">
              Link this field to a canvas element
            </p>
          </div>

          {/* Options (for select fields) */}
          {config.hasOptions && (
            <div>
              <label className="block text-sm text-white/70 mb-2">Options</label>
              <div className="space-y-2">
                {formData.options?.map((option, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Input
                      value={option}
                      onChange={(e) => {
                        const newOptions = [...(formData.options || [])];
                        newOptions[index] = e.target.value;
                        setFormData((prev) => ({ ...prev, options: newOptions }));
                      }}
                      className="flex-1"
                    />
                    <Button
                      variant="ghost"
                      size="sm"
                      icon={<Trash2 size={16} />}
                      onClick={() => handleRemoveOption(index)}
                    />
                  </div>
                ))}
                <div className="flex items-center gap-2">
                  <Input
                    value={newOption}
                    onChange={(e) => setNewOption(e.target.value)}
                    placeholder="Add option..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        e.preventDefault();
                        handleAddOption();
                      }
                    }}
                    className="flex-1"
                  />
                  <Button
                    variant="secondary"
                    size="sm"
                    icon={<Plus size={16} />}
                    onClick={handleAddOption}
                  >
                    Add
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Default Value */}
          <div>
            <label className="block text-sm text-white/70 mb-2">Default Value</label>
            {formData.type === 'color' ? (
              <div className="flex items-center gap-2">
                <input
                  type="color"
                  value={formData.defaultValue as string}
                  onChange={(e) => setFormData((prev) => ({ ...prev, defaultValue: e.target.value }))}
                  className="w-12 h-10 rounded cursor-pointer"
                />
                <Input
                  value={formData.defaultValue as string}
                  onChange={(e) => setFormData((prev) => ({ ...prev, defaultValue: e.target.value }))}
                  placeholder="#000000"
                  className="flex-1 font-mono"
                />
              </div>
            ) : formData.type === 'boolean' ? (
              <button
                onClick={() => setFormData((prev) => ({ ...prev, defaultValue: !prev.defaultValue }))}
                className={cn(
                  'w-12 h-6 rounded-full transition-colors relative',
                  formData.defaultValue ? 'bg-cyan-500' : 'bg-white/10'
                )}
              >
                <div
                  className={cn(
                    'w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all',
                    formData.defaultValue ? 'left-6' : 'left-0.5'
                  )}
                />
              </button>
            ) : (
              <Input
                value={formData.defaultValue as string}
                onChange={(e) => setFormData((prev) => ({ ...prev, defaultValue: e.target.value }))}
                placeholder="Default value..."
              />
            )}
          </div>

          {/* Required Toggle */}
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white font-medium">Required Field</div>
              <div className="text-xs text-white/50">
                Users must fill this field
              </div>
            </div>
            <button
              onClick={() => setFormData((prev) => ({ ...prev, required: !prev.required }))}
              className={cn(
                'w-12 h-6 rounded-full transition-colors relative',
                formData.required ? 'bg-cyan-500' : 'bg-white/10'
              )}
            >
              <div
                className={cn(
                  'w-5 h-5 bg-white rounded-full absolute top-0.5 transition-all',
                  formData.required ? 'left-6' : 'left-0.5'
                )}
              />
            </button>
          </div>

          {/* Validation */}
          {config.hasValidation && (
            <div>
              <button
                onClick={() => setShowValidation(!showValidation)}
                className="flex items-center justify-between w-full text-left"
              >
                <div>
                  <div className="text-white font-medium flex items-center gap-2">
                    <Info size={16} />
                    Validation Rules
                  </div>
                  <div className="text-xs text-white/50">
                    Set validation constraints
                  </div>
                </div>
                {showValidation ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </button>

              {showValidation && (
                <div className="mt-4 space-y-4 p-4 bg-white/5 rounded-lg">
                  {formData.type === 'number' && (
                    <>
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Minimum Value</label>
                        <Input
                          type="number"
                          value={formData.validation?.min || ''}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              validation: { ...prev.validation, min: parseFloat(e.target.value) || undefined },
                            }))
                          }
                          placeholder="0"
                        />
                      </div>
                      <div>
                        <label className="block text-sm text-white/70 mb-2">Maximum Value</label>
                        <Input
                          type="number"
                          value={formData.validation?.max || ''}
                          onChange={(e) =>
                            setFormData((prev) => ({
                              ...prev,
                              validation: { ...prev.validation, max: parseFloat(e.target.value) || undefined },
                            }))
                          }
                          placeholder="100"
                        />
                      </div>
                    </>
                  )}

                  {(formData.type === 'text' || formData.type === 'textarea') && (
                    <div>
                      <label className="block text-sm text-white/70 mb-2">Pattern (Regex)</label>
                      <Input
                        value={formData.validation?.pattern || ''}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            validation: { ...prev.validation, pattern: e.target.value },
                          }))
                        }
                        placeholder="^[a-zA-Z0-9]+$"
                        className="font-mono"
                      />
                    </div>
                  )}

                  <div>
                    <label className="block text-sm text-white/70 mb-2">Validation Message</label>
                    <Input
                      value={formData.validation?.message || ''}
                      onChange={(e) =>
                        setFormData((prev) => ({
                          ...prev,
                          validation: { ...prev.validation, message: e.target.value },
                        }))
                      }
                      placeholder="Please enter a valid value"
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          {/* Help Text */}
          <div>
            <label className="block text-sm text-white/70 mb-2">Help Text</label>
            <textarea
              value={formData.helpText}
              onChange={(e) => setFormData((prev) => ({ ...prev, helpText: e.target.value }))}
              placeholder="Additional instructions for the user..."
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:border-cyan-500 focus:outline-none resize-none"
              rows={3}
            />
          </div>

          {/* Group */}
          <div>
            <label className="block text-sm text-white/70 mb-2">Group</label>
            <Input
              value={formData.group}
              onChange={(e) => setFormData((prev) => ({ ...prev, group: e.target.value }))}
              placeholder="Content"
            />
            <p className="text-xs text-white/50 mt-1">
              Group related fields together
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end gap-2 p-4 border-t border-white/10">
          <Button variant="secondary" onClick={onCancel}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            {field ? 'Update Field' : 'Add Field'}
          </Button>
        </div>
      </div>
    </div>
  );
}

/**
 * Content Field Item Component
 *
 * Displays a single content field with actions
 */
interface ContentFieldItemProps {
  field: ContentField;
  templateElements: CanvasElement[];
  onEdit: (field: ContentField) => void;
  onDelete: (fieldId: string) => void;
  onToggleVisibility: (fieldId: string) => void;
  isHidden?: boolean;
}

function ContentFieldItem({
  field,
  templateElements,
  onEdit,
  onDelete,
  onToggleVisibility,
  isHidden = false,
}: ContentFieldItemProps) {
  const config = FIELD_TYPE_CONFIG[field.type];
  const linkedElement = templateElements.find((el) => el.id === field.elementId);

  return (
    <div
      className={cn(
        'bg-white/5 border border-white/10 rounded-lg p-4 transition-all',
        'hover:border-white/20',
        isHidden && 'opacity-50'
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-1">
            <div className="text-cyan-400">{config.icon}</div>
            <h4 className="font-semibold text-white truncate">{field.label}</h4>
            {field.required && (
              <span className="text-xs bg-red-500/20 text-red-400 px-2 py-0.5 rounded-full">
                Required
              </span>
            )}
          </div>
          <p className="text-xs text-white/50 font-mono mb-2">{field.name}</p>

          {/* Linked Element */}
          {linkedElement && (
            <div className="flex items-center gap-2 text-xs text-white/50">
              <Link size={12} />
              <span>
                Linked to: {linkedElement.type} - {linkedElement.name || linkedElement.id}
              </span>
            </div>
          )}

          {/* Default Value */}
          {field.defaultValue !== undefined && field.defaultValue !== '' && (
            <div className="mt-2 text-xs text-white/50">
              <span className="text-white/70">Default:</span>{' '}
              {typeof field.defaultValue === 'boolean'
                ? field.defaultValue
                  ? 'true'
                  : 'false'
                : field.defaultValue}
            </div>
          )}

          {/* Options */}
          {field.options && field.options.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-1">
              {field.options.slice(0, 3).map((option, i) => (
                <span
                  key={i}
                  className="text-xs bg-white/10 text-white/70 px-2 py-0.5 rounded-full"
                >
                  {option}
                </span>
              ))}
              {field.options.length > 3 && (
                <span className="text-xs text-white/50">+{field.options.length - 3} more</span>
              )}
            </div>
          )}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <button
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/50 hover:text-white"
            title={isHidden ? 'Show' : 'Hide'}
            onClick={() => onToggleVisibility(field.id)}
          >
            {isHidden ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
          <button
            className="p-2 hover:bg-white/10 rounded-lg transition-colors text-white/50 hover:text-white"
            title="Edit"
            onClick={() => onEdit(field)}
          >
            <Edit size={16} />
          </button>
          <button
            className="p-2 hover:bg-red-500/20 rounded-lg transition-colors text-white/50 hover:text-red-400"
            title="Delete"
            onClick={() => {
              if (confirm(`Are you sure you want to delete "${field.label}"?`)) {
                onDelete(field.id);
              }
            }}
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
}

/**
 * Content Field Panel Main Component
 */
export function ContentFieldPanel({
  template,
  onFieldsChange,
  className,
}: ContentFieldPanelProps) {
  const { addContentField, updateContentField, deleteContentField } = useTemplateStore();
  const [showEditor, setShowEditor] = useState(false);
  const [editingField, setEditingField] = useState<ContentField | undefined>();
  const [hiddenFields, setHiddenFields] = useState<Set<string>>(new Set());

  const handleAddField = useCallback(
    (field: ContentField) => {
      addContentField(template.id, field);
      onFieldsChange?.([...template.settings.contentFields, field]);
      setShowEditor(false);
      setEditingField(undefined);
    },
    [template.id, template.settings.contentFields, addContentField, onFieldsChange]
  );

  const handleEditField = useCallback(
    (field: ContentField) => {
      updateContentField(template.id, field.id, field);
      onFieldsChange?.(
        template.settings.contentFields.map((f) => (f.id === field.id ? field : f))
      );
      setShowEditor(false);
      setEditingField(undefined);
    },
    [template.id, template.settings.contentFields, updateContentField, onFieldsChange]
  );

  const handleDeleteField = useCallback(
    (fieldId: string) => {
      deleteContentField(template.id, fieldId);
      onFieldsChange?.(template.settings.contentFields.filter((f) => f.id !== fieldId));
    },
    [template.id, template.settings.contentFields, deleteContentField, onFieldsChange]
  );

  const handleToggleVisibility = useCallback((fieldId: string) => {
    setHiddenFields((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(fieldId)) {
        newSet.delete(fieldId);
      } else {
        newSet.add(fieldId);
      }
      return newSet;
    });
  }, []);

  // Group fields by group name
  const groupedFields = template.settings.contentFields.reduce(
    (acc, field) => {
      const group = field.group || 'Ungrouped';
      if (!acc[group]) {
        acc[group] = [];
      }
      acc[group].push(field);
      return acc;
    },
    {} as Record<string, ContentField[]>
  );

  return (
    <div className={cn('flex flex-col h-full', className)}>
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <div>
          <h2 className="text-lg font-semibold text-white">Content Fields</h2>
          <p className="text-xs text-white/50">
            {template.settings.contentFields.length} field
            {template.settings.contentFields.length !== 1 ? 's' : ''} defined
          </p>
        </div>
        <Button
          variant="primary"
          size="sm"
          icon={<Plus size={16} />}
          onClick={() => {
            setEditingField(undefined);
            setShowEditor(true);
          }}
        >
          Add Field
        </Button>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto p-4">
        {template.settings.contentFields.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="text-6xl mb-4">📝</div>
            <h3 className="text-lg font-semibold text-white mb-2">No Content Fields</h3>
            <p className="text-sm text-white/60 mb-4">
              Define content fields to allow users to fill in data when generating carousels
            </p>
            <Button
              variant="primary"
              size="sm"
              icon={<Plus size={16} />}
              onClick={() => {
                setEditingField(undefined);
                setShowEditor(true);
              }}
            >
              Add Your First Field
            </Button>
          </div>
        ) : (
          <div className="space-y-6">
            {Object.entries(groupedFields).map(([groupName, fields]) => (
              <div key={groupName}>
                {groupName !== 'Ungrouped' && (
                  <h3 className="text-sm font-medium text-white/70 mb-3 flex items-center gap-2">
                    <GripVertical size={14} />
                    {groupName}
                  </h3>
                )}
                <div className="space-y-2">
                  {fields.map((field) => (
                    <ContentFieldItem
                      key={field.id}
                      field={field}
                      templateElements={template.elements}
                      onEdit={(field) => {
                        setEditingField(field);
                        setShowEditor(true);
                      }}
                      onDelete={handleDeleteField}
                      onToggleVisibility={handleToggleVisibility}
                      isHidden={hiddenFields.has(field.id)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Info */}
      {template.settings.contentFields.length > 0 && (
        <div className="p-4 border-t border-white/10 bg-white/5">
          <div className="flex items-start gap-2 text-xs text-white/50">
            <Info size={14} className="flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-white/70 mb-1">About Content Fields</p>
              <p>
                Content fields define the inputs users fill when generating carousels from this template.
                Link fields to canvas elements to automatically apply content.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Field Editor Modal */}
      {showEditor && (
        <FieldEditorModal
          field={editingField}
          templateElements={template.elements}
          onSave={editingField ? handleEditField : handleAddField}
          onCancel={() => {
            setShowEditor(false);
            setEditingField(undefined);
          }}
        />
      )}
    </div>
  );
}