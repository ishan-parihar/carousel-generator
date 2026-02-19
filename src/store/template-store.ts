/**
 * Template Store
 * Zustand store for managing Canvas templates
 *
 * This store handles all template-related state including:
 * - Template CRUD operations
 * - Template selection
 * - Content field management
 * - Template versioning
 * - Template import/export
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type {
  CanvasTemplate,
  ContentField,
  TemplateFilterOptions,
  TemplateCategory,
  TemplateSortOption,
  TemplateStats,
  TemplateExport,
} from '@/types/canvas-templates';

/**
 * Template version snapshot
 * Stores a complete snapshot of a template at a specific version
 */
interface TemplateVersionSnapshot {
  version: string;
  template: CanvasTemplate;
  timestamp: string;
  description: string;
  author: string;
  checksum: string;
}

/**
 * Template store state interface
 */
interface TemplateState {
  // State
  templates: CanvasTemplate[];
  selectedTemplateId: string | null;
  templateVersions: Map<string, TemplateVersionSnapshot[]>;
  templateStats: Map<string, TemplateStats>;
  isLoading: boolean;
  error: string | null;

  // Selectors
  getTemplateById: (id: string) => CanvasTemplate | undefined;
  getSelectedTemplate: () => CanvasTemplate | undefined;
  getTemplatesByCategory: (category: TemplateCategory) => CanvasTemplate[];
  getOfficialTemplates: () => CanvasTemplate[];
  getUserTemplates: () => CanvasTemplate[];
  getPublicTemplates: () => CanvasTemplate[];
  getTemplatesByTag: (tag: string) => CanvasTemplate[];
  getTemplatesByAuthor: (author: string) => CanvasTemplate[];
  searchTemplates: (query: string) => CanvasTemplate[];
  filterTemplates: (options: TemplateFilterOptions) => CanvasTemplate[];
  getTemplateVersions: (templateId: string) => string[];
  getTemplateVersionSnapshots: (templateId: string) => TemplateVersionSnapshot[];
  getTemplateStats: (templateId: string) => TemplateStats | undefined;

  // Actions - Template CRUD
  addTemplate: (template: Omit<CanvasTemplate, 'id' | 'metadata'>) => void;
  updateTemplate: (id: string, updates: Partial<CanvasTemplate>) => void;
  deleteTemplate: (id: string) => void;
  duplicateTemplate: (id: string) => void;
  selectTemplate: (id: string | null) => void;

  // Actions - Content Fields
  addContentField: (templateId: string, field: ContentField) => void;
  updateContentField: (templateId: string, fieldId: string, updates: Partial<ContentField>) => void;
  deleteContentField: (templateId: string, fieldId: string) => void;
  reorderContentFields: (templateId: string, fieldIds: string[]) => void;

  // Actions - Template Elements
  updateTemplateElements: (templateId: string, elements: CanvasTemplate['elements']) => void;
  addTemplateElement: (templateId: string, element: CanvasTemplate['elements'][0]) => void;
  updateTemplateElement: (templateId: string, elementId: string, updates: Partial<CanvasTemplate['elements'][0]>) => void;
  deleteTemplateElement: (templateId: string, elementId: string) => void;

  // Actions - Import/Export
  exportTemplate: (id: string) => TemplateExport;
  importTemplate: (exportData: TemplateExport) => void;
  exportTemplateAsJSON: (id: string) => string;
  importTemplateFromJSON: (json: string) => void;

  // Actions - Versioning
  createTemplateVersion: (templateId: string, description?: string) => void;
  rollbackTemplate: (templateId: string, version: string) => void;
  compareTemplateVersions: (templateId: string, version1: string, version2: string) => any;

  // Actions - Stats
  incrementTemplateUsage: (templateId: string) => void;
  rateTemplate: (templateId: string, rating: number) => void;

  // Actions - Bulk Operations
  bulkDeleteTemplates: (ids: string[]) => void;
  bulkDuplicateTemplates: (ids: string[]) => void;

  // Actions - State Management
  setLoading: (isLoading: boolean) => void;
  setError: (error: string | null) => void;
  clearError: () => void;
  resetStore: () => void;
}

/**
 * Generate unique ID
 */
const generateId = (): string => {
  return Math.random().toString(36).substring(2, 11);
};

/**
 * Calculate checksum for template integrity
 */
const calculateChecksum = (template: CanvasTemplate): string => {
  const str = JSON.stringify(template);
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32bit integer
  }
  return Math.abs(hash).toString(16);
};

/**
 * Create template store
 */
export const useTemplateStore = create<TemplateState>()(
  persist(
    (set, get) => ({
      // Initial State
      templates: [],
      selectedTemplateId: null,
      templateVersions: new Map(),
      templateStats: new Map(),
      isLoading: false,
      error: null,

      // ==================== Selectors ====================

      getTemplateById: (id) => {
        const { templates } = get();
        return templates.find(t => t.id === id);
      },

      getSelectedTemplate: () => {
        const { selectedTemplateId, templates } = get();
        if (!selectedTemplateId) return undefined;
        return templates.find(t => t.id === selectedTemplateId);
      },

      getTemplatesByCategory: (category) => {
        const { templates } = get();
        return templates.filter(t => t.metadata.category === category);
      },

      getOfficialTemplates: () => {
        const { templates } = get();
        return templates.filter(t => t.metadata.isOfficial);
      },

      getUserTemplates: () => {
        const { templates } = get();
        return templates.filter(t => !t.metadata.isOfficial);
      },

      getPublicTemplates: () => {
        const { templates } = get();
        return templates.filter(t => t.metadata.isPublic);
      },

      getTemplatesByTag: (tag) => {
        const { templates } = get();
        return templates.filter(t => t.metadata.tags.includes(tag));
      },

      getTemplatesByAuthor: (author) => {
        const { templates } = get();
        return templates.filter(t => t.metadata.author === author);
      },

      searchTemplates: (query) => {
        const { templates } = get();
        const lowerQuery = query.toLowerCase();
        return templates.filter(t =>
          t.name.toLowerCase().includes(lowerQuery) ||
          t.description.toLowerCase().includes(lowerQuery) ||
          t.metadata.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
        );
      },

      filterTemplates: (options) => {
        const { templates } = get();
        let filtered = [...templates];

        // Apply filters
        if (options.category) {
          filtered = filtered.filter(t => t.metadata.category === options.category);
        }

        if (options.tags && options.tags.length > 0) {
          filtered = filtered.filter(t =>
            options.tags!.some(tag => t.metadata.tags.includes(tag))
          );
        }

        if (options.author) {
          filtered = filtered.filter(t => t.metadata.author === options.author);
        }

        if (options.difficulty) {
          filtered = filtered.filter(t => t.metadata.difficulty === options.difficulty);
        }

        if (options.isOfficial !== undefined) {
          filtered = filtered.filter(t => t.metadata.isOfficial === options.isOfficial);
        }

        if (options.isPublic !== undefined) {
          filtered = filtered.filter(t => t.metadata.isPublic === options.isPublic);
        }

        if (options.search) {
          const lowerQuery = options.search.toLowerCase();
          filtered = filtered.filter(t =>
            t.name.toLowerCase().includes(lowerQuery) ||
            t.description.toLowerCase().includes(lowerQuery) ||
            t.metadata.tags.some(tag => tag.toLowerCase().includes(lowerQuery))
          );
        }

        if (options.minRating !== undefined) {
          filtered = filtered.filter(t =>
            (t.metadata.rating || 0) >= options.minRating!
          );
        }

        // Apply sorting
        switch (options.sort) {
          case 'newest':
            filtered.sort((a, b) => new Date(b.metadata.createdAt).getTime() - new Date(a.metadata.createdAt).getTime());
            break;
          case 'oldest':
            filtered.sort((a, b) => new Date(a.metadata.createdAt).getTime() - new Date(b.metadata.createdAt).getTime());
            break;
          case 'popular':
            filtered.sort((a, b) => b.metadata.usageCount - a.metadata.usageCount);
            break;
          case 'rating':
            filtered.sort((a, b) => (b.metadata.rating || 0) - (a.metadata.rating || 0));
            break;
          case 'name-asc':
            filtered.sort((a, b) => a.name.localeCompare(b.name));
            break;
          case 'name-desc':
            filtered.sort((a, b) => b.name.localeCompare(a.name));
            break;
          case 'usage':
            filtered.sort((a, b) => b.metadata.usageCount - a.metadata.usageCount);
            break;
        }

        // Apply pagination
        if (options.skip !== undefined) {
          filtered = filtered.slice(options.skip);
        }

        if (options.limit !== undefined) {
          filtered = filtered.slice(0, options.limit);
        }

        return filtered;
      },

      getTemplateVersions: (templateId) => {
        const { templateVersions } = get();
        return (templateVersions.get(templateId) || []).map(v => v.version);
      },

      getTemplateVersionSnapshots: (templateId) => {
        const { templateVersions } = get();
        return templateVersions.get(templateId) || [];
      },

      getTemplateStats: (templateId) => {
        const { templateStats } = get();
        return templateStats.get(templateId);
      },

      // ==================== Actions - Template CRUD ====================

      addTemplate: (templateData) => {
        const now = new Date().toISOString();
        const id = generateId();

        const template: CanvasTemplate = {
          id,
          name: templateData.name,
          description: templateData.description || '',
          elements: templateData.elements,
          settings: templateData.settings,
          metadata: {
            version: '1.0.0',
            author: 'User',
            createdAt: now,
            updatedAt: now,
            tags: (templateData as any).metadata?.tags || [],
            category: (templateData as any).metadata?.category || 'custom',
            description: (templateData as any).metadata?.description || templateData.description || '',
            isOfficial: false,
            isPublic: false,
            usageCount: 0,
          },
        };

        set({
          templates: [...get().templates, template],
          selectedTemplateId: id,
        });
      },

      updateTemplate: (id, updates) => {
        set({
          templates: get().templates.map(t => {
            if (t.id !== id) return t;

            return {
              ...t,
              ...updates,
              metadata: {
                ...t.metadata,
                ...updates.metadata,
                updatedAt: new Date().toISOString(),
              },
            };
          }),
        });
      },

      deleteTemplate: (id) => {
        set({
          templates: get().templates.filter(t => t.id !== id),
          selectedTemplateId: get().selectedTemplateId === id ? null : get().selectedTemplateId,
        });
      },

      duplicateTemplate: (id) => {
        const template = get().getTemplateById(id);
        if (!template) return;

        const now = new Date().toISOString();
        const newId = generateId();

        const duplicated: CanvasTemplate = {
          ...JSON.parse(JSON.stringify(template)),
          id: newId,
          name: `${template.name} (Copy)`,
          metadata: {
            ...template.metadata,
            createdAt: now,
            updatedAt: now,
            usageCount: 0,
            version: '1.0.0',
          },
        };

        set({
          templates: [...get().templates, duplicated],
        });
      },

      selectTemplate: (id) => {
        set({ selectedTemplateId: id });
      },

      // ==================== Actions - Content Fields ====================

      addContentField: (templateId, field) => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        get().updateTemplate(templateId, {
          settings: {
            ...template.settings,
            contentFields: [
              ...template.settings.contentFields,
              field,
            ],
          },
        });
      },

      updateContentField: (templateId, fieldId, updates) => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        get().updateTemplate(templateId, {
          settings: {
            ...template.settings,
            contentFields: template.settings.contentFields.map(f =>
              f.id === fieldId ? { ...f, ...updates } : f
            ),
          },
        });
      },

      deleteContentField: (templateId, fieldId) => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        get().updateTemplate(templateId, {
          settings: {
            ...template.settings,
            contentFields: template.settings.contentFields.filter(
              f => f.id !== fieldId
            ),
          },
        });
      },

      reorderContentFields: (templateId, fieldIds) => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        const fieldMap = new Map(template.settings.contentFields.map(f => [f.id, f]));
        const reorderedFields = fieldIds.map(id => fieldMap.get(id)).filter((f): f is ContentField => f !== undefined);

        get().updateTemplate(templateId, {
          settings: {
            ...template.settings,
            contentFields: reorderedFields,
          },
        });
      },

      // ==================== Actions - Template Elements ====================

      updateTemplateElements: (templateId, elements) => {
        get().updateTemplate(templateId, { elements });
      },

      addTemplateElement: (templateId, element) => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        get().updateTemplate(templateId, {
          elements: [...template.elements, element],
        });
      },

      updateTemplateElement: (templateId, elementId, updates) => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        get().updateTemplate(templateId, {
          elements: template.elements.map(e =>
            e.id === elementId ? { ...e, ...updates } : e
          ),
        });
      },

      deleteTemplateElement: (templateId, elementId) => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        get().updateTemplate(templateId, {
          elements: template.elements.filter(e => e.id !== elementId),
        });
      },

      // ==================== Actions - Import/Export ====================

      exportTemplate: (id) => {
        const template = get().getTemplateById(id);
        if (!template) {
          throw new Error('Template not found');
        }

        const exportData: TemplateExport = {
          template,
          exportInfo: {
            exportedAt: new Date().toISOString(),
            formatVersion: '1.0.0',
            exportedBy: 'user',
            checksum: calculateChecksum(template),
          },
        };

        return exportData;
      },

      importTemplate: (exportData) => {
        try {
          const { template, exportInfo } = exportData;

          // Verify checksum
          const expectedChecksum = calculateChecksum(template);
          if (exportInfo.checksum && exportInfo.checksum !== expectedChecksum) {
            throw new Error('Template checksum verification failed');
          }

          // Check if template already exists
          const existing = get().getTemplateById(template.id);
          if (existing) {
            // Generate new ID for imported template
            const newId = generateId();
            template.id = newId;
            template.name = `${template.name} (Imported)`;
          }

          get().addTemplate(template);
        } catch (error) {
          throw new Error(`Failed to import template: ${error instanceof Error ? error.message : 'Unknown error'}`);
        }
      },

      exportTemplateAsJSON: (id) => {
        const exportData = get().exportTemplate(id);
        return JSON.stringify(exportData, null, 2);
      },

      importTemplateFromJSON: (json) => {
        try {
          const exportData = JSON.parse(json) as TemplateExport;
          get().importTemplate(exportData);
        } catch (error) {
          throw new Error('Invalid template JSON');
        }
      },

      // ==================== Actions - Versioning ====================

      createTemplateVersion: (templateId, description = 'Manual save') => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        const { templateVersions } = get();
        const versions = templateVersions.get(templateId) || [];

        // Create version snapshot
        const version = template.metadata.version;
        const snapshot: TemplateVersionSnapshot = {
          version,
          template: JSON.parse(JSON.stringify(template)),
          timestamp: new Date().toISOString(),
          description,
          author: template.metadata.author,
          checksum: calculateChecksum(template),
        };

        // Store version data (in a real app, this would be in a database)
        const newVersions = [...versions, snapshot];
        const newTemplateVersions = new Map(templateVersions);
        newTemplateVersions.set(templateId, newVersions);

        set({ templateVersions: newTemplateVersions });
      },

      rollbackTemplate: (templateId, version) => {
        const { templateVersions, templates } = get();
        const versions = templateVersions.get(templateId) || [];

        // Find the version snapshot
        const versionSnapshot = versions.find(v => v.version === version);
        if (!versionSnapshot) {
          throw new Error(`Version ${version} not found`);
        }

        // Restore the template from the snapshot
        const restoredTemplate: CanvasTemplate = {
          ...JSON.parse(JSON.stringify(versionSnapshot.template)),
          id: templateId, // Keep the current template ID
          metadata: {
            ...versionSnapshot.template.metadata,
            updatedAt: new Date().toISOString(),
          },
        };

        // Update the template in the store
        set({
          templates: templates.map(t =>
            t.id === templateId ? restoredTemplate : t
          ),
        });
      },

      compareTemplateVersions: (templateId, version1, version2) => {
        const { templateVersions } = get();
        const versions = templateVersions.get(templateId) || [];

        const v1 = versions.find(v => v.version === version1);
        const v2 = versions.find(v => v.version === version2);

        if (!v1 || !v2) {
          throw new Error('One or both versions not found');
        }

        // Compare elements
        const elementsDiff = {
          added: v2.template.elements.filter(e2 =>
            !v1.template.elements.some(e1 => e1.id === e2.id)
          ),
          removed: v1.template.elements.filter(e1 =>
            !v2.template.elements.some(e2 => e2.id === e1.id)
          ),
          modified: v2.template.elements.filter(e2 => {
            const e1 = v1.template.elements.find(el => el.id === e2.id);
            return e1 && JSON.stringify(e1) !== JSON.stringify(e2);
          }),
        };

        // Compare settings
        const settingsDiff = JSON.stringify(v1.template.settings) !== JSON.stringify(v2.template.settings);

        return {
          elements: elementsDiff,
          settingsChanged: settingsDiff,
          v1Timestamp: v1.timestamp,
          v2Timestamp: v2.timestamp,
        };
      },

      // ==================== Actions - Stats ====================

      incrementTemplateUsage: (templateId) => {
        const { templateStats } = get();
        const existingStats = templateStats.get(templateId);

        if (existingStats) {
          const updatedStats: TemplateStats = {
            ...existingStats,
            totalUsage: existingStats.totalUsage + 1,
            usageLast30Days: existingStats.usageLast30Days + 1,
            usageLast7Days: existingStats.usageLast7Days + 1,
          };

          const newStats = new Map(templateStats);
          newStats.set(templateId, updatedStats);

          set({ templateStats: newStats });
        } else {
          const newStats: TemplateStats = {
            templateId,
            totalUsage: 1,
            usageLast30Days: 1,
            usageLast7Days: 1,
            avgCreationTime: 0,
            topPillar: '',
            topFields: [],
            exports: {
              png: 0,
              jpg: 0,
              pdf: 0,
              json: 0,
            },
          };

          const newStatsMap = new Map(templateStats);
          newStatsMap.set(templateId, newStats);

          set({ templateStats: newStatsMap });
        }

        // Update template metadata
        const template = get().getTemplateById(templateId);
        if (template) {
          get().updateTemplate(templateId, {
            metadata: {
              ...template.metadata,
              usageCount: template.metadata.usageCount + 1,
            },
          });
        }
      },

      rateTemplate: (templateId, rating) => {
        const template = get().getTemplateById(templateId);
        if (!template) return;

        const currentRating = template.metadata.rating || 0;
        const currentCount = template.metadata.ratingCount || 0;
        const newRatingCount = currentCount + 1;
        const newRating = ((currentRating * currentCount) + rating) / newRatingCount;

        get().updateTemplate(templateId, {
          metadata: {
            ...template.metadata,
            rating: Math.round(newRating * 10) / 10,
            ratingCount: newRatingCount,
          },
        });
      },

      // ==================== Actions - Bulk Operations ====================

      bulkDeleteTemplates: (ids) => {
        set({
          templates: get().templates.filter(t => !ids.includes(t.id)),
          selectedTemplateId: ids.includes(get().selectedTemplateId || '') ? null : get().selectedTemplateId,
        });
      },

      bulkDuplicateTemplates: (ids) => {
        const templates = get().templates;
        const duplicates = ids
          .map(id => templates.find(t => t.id === id))
          .filter((t): t is CanvasTemplate => t !== undefined)
          .map(template => {
            const now = new Date().toISOString();
            const newId = generateId();

            return {
              ...JSON.parse(JSON.stringify(template)),
              id: newId,
              name: `${template.name} (Copy)`,
              metadata: {
                ...template.metadata,
                createdAt: now,
                updatedAt: now,
                usageCount: 0,
                version: '1.0.0',
              },
            };
          });

        set({
          templates: [...get().templates, ...duplicates],
        });
      },

      // ==================== Actions - State Management ====================

      setLoading: (isLoading) => {
        set({ isLoading });
      },

      setError: (error) => {
        set({ error });
      },

      clearError: () => {
        set({ error: null });
      },

      resetStore: () => {
        set({
          templates: [],
          selectedTemplateId: null,
          templateVersions: new Map(),
          templateStats: new Map(),
          isLoading: false,
          error: null,
        });
      },
    }),
    {
      name: 'template-storage',
      partialize: (state) => ({
        templates: state.templates,
        selectedTemplateId: state.selectedTemplateId,
        templateVersions: Array.from(state.templateVersions.entries()),
        templateStats: Array.from(state.templateStats.entries()),
      }),
      merge: (persistedState: any, currentState) => ({
        ...currentState,
        ...persistedState,
        templateVersions: new Map(persistedState.templateVersions || []),
        templateStats: new Map(persistedState.templateStats || []),
      }),
    }
  )
);