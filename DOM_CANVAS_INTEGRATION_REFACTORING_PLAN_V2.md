# DOM/Canvas Integration Refactoring Action Plan
## From Parallel Systems to Canva-like Experience

**Date:** January 26, 2026
**Based On:** DOM_CANVAS_INTEGRATION_CRITICAL_AUDIT_V2.md
**Approach:** Phased Redesign with Backward Compatibility

---

## Vision Statement

Transform the carousel-generator from a dual-mode (DOM + Canvas) system into a **unified Canvas-centric platform** where:

1. **Canvas is the primary editor** for creating visual templates
2. **Templates are the source of truth** for carousel generation
3. **AI agents use Canvas templates** via CLI/JSON
4. **DOM mode is optional** for preview/export only
5. **Users can create, share, and reuse templates** like Canva

---

## Architecture Overview (Target)

```
┌─────────────────────────────────────────────────────────────┐
│                    USER INTERFACE LAYER                      │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Canvas Editor (Template Builder)          │    │
│  │  - Visual drag-and-drop editor                    │    │
│  │  - Property panel for elements                    │    │
│  │  - Layer management                               │    │
│  │  - Content field definition                       │    │
│  │  - Template preview                               │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Carousel Generator (Content Fill)         │    │
│  │  - Select template                                │    │
│  │  - Fill content fields                            │    │
│  │  - Preview carousel                               │    │
│  │  - Export to PNG/JSON                             │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    TEMPLATE MANAGEMENT LAYER                 │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Template Store (Zustand)                   │    │
│  │  - templates: CanvasTemplate[]                    │    │
│  │  - selectedTemplateId: string                     │    │
│  │  - templateVersions: Map<string, string[]>        │    │
│  │  - Actions: CRUD, versioning, sharing             │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Template Library (File System)             │    │
│  │  - /templates/official/ (pre-built)               │    │
│  │  - /templates/user/ (user-created)                │    │
│  │  - /templates/community/ (shared)                 │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    CAROUSEL MANAGEMENT LAYER                 │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Carousel Store (Zustand)                   │    │
│  │  - carousels: Carousel[]                          │    │
│  │  - selectedCarouselId: string                     │    │
│  │  - Actions: CRUD, export, import                  │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │         Carousel Renderer (Canvas)                 │    │
│  │  - Render template + content                       │    │
│  │  - Export to PNG                                  │    │
│  │  - Export to JSON                                 │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────┐
│                    CLI / AI INTEGRATION LAYER                │
│  ┌────────────────────────────────────────────────────┐    │
│  │         CLI Commands                                │    │
│  │  - carousel-gen generate --template --content      │    │
│  │  - carousel-gen export-template --output           │    │
│  │  - carousel-gen render --template --content        │    │
│  └────────────────────────────────────────────────────┘    │
│  ┌────────────────────────────────────────────────────┐    │
│  │         AI Agent Integration                        │    │
│  │  - Generate from template                          │    │
│  │  - Auto-fill content fields                        │    │
│  │  - Optimize layout                                 │    │
│  └────────────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────────────┘
```

---

## Phase 0: Preparation (Week 1)

### Goals
- Set up development environment
- Create new data models
- Plan migration strategy

### Tasks

#### Task 0.1: Create New Data Models
**File:** `src/types/canvas-templates.ts`

```typescript
/**
 * Canvas Template System
 * Core data model for Canva-like template system
 */

/**
 * Content field type for templates
 */
export type ContentFieldType = 'text' | 'image' | 'color' | 'number' | 'boolean';

/**
 * Content field definition
 * Defines a field that users can fill in when generating a carousel
 */
export interface ContentField {
  id: string;
  name: string;
  label: string;
  type: ContentFieldType;
  elementId: string;  // Links to CanvasElement
  defaultValue: any;
  required: boolean;
  placeholder?: string;
  maxLength?: number;
  options?: string[];  // For select fields
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
  };
}

/**
 * Template settings
 * Global settings for the template
 */
export interface TemplateSettings {
  width: number;
  height: number;
  backgroundColor: string;
  allowCustomContent: boolean;
  contentFields: ContentField[];
  defaultTheme?: string;
  enableResponsive?: boolean;
  maxSlides?: number;
}

/**
 * Template metadata
 * Metadata for template management
 */
export interface TemplateMetadata {
  version: string;
  author: string;
  createdAt: string;
  updatedAt: string;
  tags: string[];
  category: string;
  description: string;
  thumbnail?: string;
  isOfficial: boolean;
  isPublic: boolean;
  usageCount: number;
  rating?: number;
}

/**
 * Canvas Template
 * Complete template definition
 */
export interface CanvasTemplate {
  id: string;
  name: string;
  description: string;
  elements: CanvasElement[];
  settings: TemplateSettings;
  metadata: TemplateMetadata;
}

/**
 * Carousel generated from template
 */
export interface Carousel {
  id: string;
  templateId: string;
  templateVersion: string;
  name: string;
  content: CarouselContent;
  settings: CarouselSettings;
  exportSettings: ExportSettings;
  createdAt: string;
  updatedAt: string;
}

/**
 * Carousel content
 * User-provided content that fills template fields
 */
export interface CarouselContent {
  slides: CarouselSlide[];
}

/**
 * Carousel slide
 * Content for a single slide
 */
export interface CarouselSlide {
  slideNumber: number;
  contentFields: Record<string, any>;  // Field ID -> Value
}

/**
 * Carousel settings
 */
export interface CarouselSettings {
  pillar: string;
  backgroundPack?: string;
  decoratorConfig?: any;
}

/**
 * Export settings
 */
export interface ExportSettings {
  format: 'png' | 'jpg' | 'pdf' | 'json';
  quality: number;
  pixelRatio: number;
  includeMetadata?: boolean;
}
```

**Action Items:**
- [ ] Create `src/types/canvas-templates.ts`
- [ ] Document all interfaces
- [ ] Add TypeScript tests for types
- [ ] Review with team

#### Task 0.2: Create Template Store
**File:** `src/store/template-store.ts`

```typescript
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CanvasTemplate, ContentField } from '@/types/canvas-templates';

interface TemplateState {
  // State
  templates: CanvasTemplate[];
  selectedTemplateId: string | null;
  templateVersions: Map<string, string[]>;

  // Selectors
  getTemplateById: (id: string) => CanvasTemplate | undefined;
  getSelectedTemplate: () => CanvasTemplate | undefined;
  getTemplatesByCategory: (category: string) => CanvasTemplate[];
  getOfficialTemplates: () => CanvasTemplate[];
  getUserTemplates: () => CanvasTemplate[];

  // Actions
  addTemplate: (template: Omit<CanvasTemplate, 'id' | 'metadata'>) => void;
  updateTemplate: (id: string, updates: Partial<CanvasTemplate>) => void;
  deleteTemplate: (id: string) => void;
  duplicateTemplate: (id: string) => void;
  selectTemplate: (id: string | null) => void;
  addContentField: (templateId: string, field: ContentField) => void;
  updateContentField: (templateId: string, fieldId: string, updates: Partial<ContentField>) => void;
  deleteContentField: (templateId: string, fieldId: string) => void;

  // Import/Export
  exportTemplate: (id: string) => string;
  importTemplate: (json: string) => void;
}

export const useTemplateStore = create<TemplateState>()(
  persist(
    (set, get) => ({
      templates: [],
      selectedTemplateId: null,
      templateVersions: new Map(),

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

      addTemplate: (templateData) => {
        const now = new Date().toISOString();
        const id = Math.random().toString(36).substring(2, 11);

        const template: CanvasTemplate = {
          ...templateData,
          id,
          metadata: {
            ...templateData.metadata,
            version: '1.0.0',
            createdAt: now,
            updatedAt: now,
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
        const newId = Math.random().toString(36).substring(2, 11);

        const duplicated: CanvasTemplate = {
          ...JSON.parse(JSON.stringify(template)),
          id: newId,
          name: `${template.name} (Copy)`,
          metadata: {
            ...template.metadata,
            createdAt: now,
            updatedAt: now,
            usageCount: 0,
          },
        };

        set({
          templates: [...get().templates, duplicated],
        });
      },

      selectTemplate: (id) => {
        set({ selectedTemplateId: id });
      },

      addContentField: (templateId, field) => {
        get().updateTemplate(templateId, {
          settings: {
            ...get().getTemplateById(templateId)!.settings,
            contentFields: [
              ...get().getTemplateById(templateId)!.settings.contentFields,
              field,
            ],
          },
        });
      },

      updateContentField: (templateId, fieldId, updates) => {
        get().updateTemplate(templateId, {
          settings: {
            ...get().getTemplateById(templateId)!.settings,
            contentFields: get().getTemplateById(templateId)!.settings.contentFields.map(f =>
              f.id === fieldId ? { ...f, ...updates } : f
            ),
          },
        });
      },

      deleteContentField: (templateId, fieldId) => {
        get().updateTemplate(templateId, {
          settings: {
            ...get().getTemplateById(templateId)!.settings,
            contentFields: get().getTemplateById(templateId)!.settings.contentFields.filter(
              f => f.id !== fieldId
            ),
          },
        });
      },

      exportTemplate: (id) => {
        const template = get().getTemplateById(id);
        if (!template) throw new Error('Template not found');
        return JSON.stringify(template, null, 2);
      },

      importTemplate: (json) => {
        try {
          const template = JSON.parse(json) as CanvasTemplate;
          get().addTemplate(template);
        } catch (error) {
          throw new Error('Invalid template JSON');
        }
      },
    }),
    {
      name: 'template-storage',
    }
  )
);
```

**Action Items:**
- [ ] Create `src/store/template-store.ts`
- [ ] Add tests for store actions
- [ ] Document store API
- [ ] Integrate with existing app

#### Task 0.3: Plan Migration Strategy

**Migration Questions:**
1. How to migrate existing DOM templates to Canvas templates?
2. How to preserve user data in current carousel-store?
3. How to maintain backward compatibility?
4. How to handle existing CLI workflows?

**Migration Plan:**
- [ ] Create migration script: DOM → Canvas templates
- [ ] Create migration script: Slide → Carousel data
- [ ] Add backward compatibility layer
- [ ] Document migration process
- [ ] Test migration with sample data

**Action Items:**
- [ ] Write migration plan document
- [ ] Create migration scripts
- [ ] Test migration with existing data
- [ ] Document migration process

---

## Phase 1: Foundation (Weeks 2-3)

### Goals
- Implement Canvas-centric data model
- Build template management system
- Create basic template editor

### Tasks

#### Task 1.1: Implement Template Library UI

**Component:** `src/components/template/TemplateLibrary.tsx`

**Features:**
- Browse templates by category
- Filter by tags
- Search templates
- Preview templates
- Select template for editing

**Action Items:**
- [ ] Create TemplateLibrary component
- [ ] Add template cards
- [ ] Add filtering and search
- [ ] Add template preview
- [ ] Integrate with template-store

#### Task 1.2: Implement Template Editor UI

**Component:** `src/components/template/TemplateEditor.tsx`

**Features:**
- Canvas-based editor
- Drag-and-drop elements
- Property panel
- Layer panel
- Content field definition
- Template preview

**Action Items:**
- [ ] Create TemplateEditor component
- [ ] Integrate with existing CanvasSlide
- [ ] Add content field definition UI
- [ ] Add template preview
- [ ] Integrate with template-store

#### Task 1.3: Implement Content Field System

**Component:** `src/components/template/ContentFieldPanel.tsx`

**Features:**
- Define content fields
- Link fields to elements
- Set field properties
- Preview field mapping
- Validation

**Action Items:**
- [ ] Create ContentFieldPanel component
- [ ] Add field type selection
- [ ] Add field property editor
- [ ] Add field-element linking
- [ ] Add validation UI

---

## Phase 2: Carousel Generation (Weeks 4-5)

### Goals
- Build carousel generator from templates
- Implement content filling system
- Create preview and export

### Tasks

#### Task 2.1: Implement Carousel Generator UI

**Component:** `src/components/carousel/CarouselGenerator.tsx`

**Features:**
- Select template
- Fill content fields
- Preview carousel
- Export to PNG/JSON

**Action Items:**
- [ ] Create CarouselGenerator component
- [ ] Add template selector
- [ ] Add content field editor
- [ ] Add carousel preview
- [ ] Add export buttons

#### Task 2.2: Implement Carousel Renderer

**Component:** `src/components/carousel/CarouselRenderer.tsx`

**Features:**
- Render template + content
- Apply content to elements
- Handle missing content
- Responsive preview
- Export functionality

**Action Items:**
- [ ] Create CarouselRenderer component
- [ ] Implement content mapping
- [ ] Add error handling
- [ ] Add export to PNG
- [ ] Add export to JSON

#### Task 2.3: Update CLI Integration

**File:** `scripts/render-carousel.ts`

**Features:**
- Use Canvas templates
- Generate from JSON
- Support content fields
- Export to PNG

**Action Items:**
- [ ] Update CLI to use templates
- [ ] Add template selection
- [ ] Add content JSON support
- [ ] Update render script
- [ ] Test CLI integration

---

## Phase 3: Migration & Cleanup (Weeks 6-7)

### Goals
- Migrate existing data to new system
- Remove deprecated DOM components
- Clean up translation layer

### Tasks

#### Task 3.1: Migrate Existing Templates

**Script:** `scripts/migrate-dom-templates.ts`

**Features:**
- Convert DOM templates to Canvas templates
- Preserve styling and layout
- Generate content fields
- Validate migration

**Action Items:**
- [ ] Create migration script
- [ ] Migrate arc-templates
- [ ] Migrate user templates
- [ ] Validate migration
- [ ] Document process

#### Task 3.2: Migrate Existing Carousels

**Script:** `scripts/migrate-carousels.ts`

**Features:**
- Convert Slide data to Carousel data
- Extract content fields
- Map to templates
- Preserve user data

**Action Items:**
- [ ] Create migration script
- [ ] Migrate existing carousels
- [ ] Validate migration
- [ ] Test with real data
- [ ] Rollback plan

#### Task 3.3: Remove Deprecated Components

**Files to Remove:**
- `src/components/preview/ThemedSlide.tsx` (replace with CarouselRenderer)
- `src/lib/canvas/dom-canvas-translation.ts` (no longer needed)
- `src/lib/canvas/position-translation.ts` (no longer needed)
- `src/hooks/useCanvasElements.ts` (no longer needed)

**Action Items:**
- [ ] Remove deprecated files
- [ ] Update imports
- [ ] Update tests
- [ ] Clean up dependencies

#### Task 3.4: Clean Up Translation Layer

**Files to Update:**
- `src/components/preview/CanvasSlide.tsx` (simplify, remove translation)
- `src/store/carousel-store.ts` (remove DOM-centric data)

**Action Items:**
- [ ] Simplify CanvasSlide
- [ ] Update carousel-store
- [ ] Remove translation calls
- [ ] Update documentation

---

## Phase 4: Polish & Launch (Weeks 8-9)

### Goals
- Add advanced features
- Improve UX
- Prepare for launch

### Tasks

#### Task 4.1: Add Template Sharing

**Features:**
- Share templates via URL
- Export/import templates
- Template marketplace (future)
- Community templates

**Action Items:**
- [ ] Add share button
- [ ] Add export/import
- [ ] Add template marketplace UI
- [ ] Add community templates

#### Task 4.2: Add Version Control

**Features:**
- Template versioning
- Version history
- Rollback to previous version
- Version comparison

**Action Items:**
- [ ] Add version tracking
- [ ] Add version history UI
- [ ] Add rollback feature
- [ ] Add version comparison

#### Task 4.3: Improve AI Integration

**Features:**
- AI uses Canvas templates
- AI auto-fills content
- AI optimizes layout
- AI generates variations

**Action Items:**
- [ ] Update AI to use templates
- [ ] Add content auto-fill
- [ ] Add layout optimization
- [ ] Add variation generation

#### Task 4.4: Documentation & Launch

**Documents:**
- User guide
- Developer guide
- API documentation
- Migration guide

**Action Items:**
- [ ] Write user guide
- [ ] Write developer guide
- [ ] Write API docs
- [ ] Write migration guide
- [ ] Prepare launch

---

## Testing Strategy

### Unit Tests
- [ ] Test all new data models
- [ ] Test template store actions
- [ ] Test content field mapping
- [ ] Test carousel generation

### Integration Tests
- [ ] Test template creation flow
- [ ] Test carousel generation flow
- [ ] Test export functionality
- [ ] Test CLI integration

### E2E Tests
- [ ] Test complete user journey
- [ ] Test migration process
- [ ] Test AI integration
- [ ] Test export/import

### Performance Tests
- [ ] Test template rendering
- [ ] Test carousel generation
- [ ] Test export performance
- [ ] Test CLI performance

---

## Risk Management

### Risks
1. **Data Loss:** Migration could corrupt existing data
2. **Breaking Changes:** Existing workflows could break
3. **Performance:** New system could be slower
4. **Complexity:** New system could be more complex
5. **Adoption:** Users might resist change

### Mitigations
1. **Data Loss:** Create backups, test migration, rollback plan
2. **Breaking Changes:** Maintain backward compatibility, document changes
3. **Performance:** Optimize rendering, use caching, lazy loading
4. **Complexity:** Simplify UI, provide documentation, training
5. **Adoption:** Beta testing, user feedback, gradual rollout

---

## Success Criteria

### Phase 0
- [ ] New data models created and documented
- [ ] Template store implemented and tested
- [ ] Migration plan approved

### Phase 1
- [ ] Template library UI working
- [ ] Template editor UI working
- [ ] Content field system working

### Phase 2
- [ ] Carousel generator UI working
- [ ] Carousel renderer working
- [ ] CLI integration working

### Phase 3
- [ ] All templates migrated
- [ ] All carousels migrated
- [ ] Deprecated components removed
- [ ] Translation layer cleaned up

### Phase 4
- [ ] Template sharing working
- [ ] Version control working
- [ ] AI integration working
- [ ] Documentation complete

---

## Timeline

| Phase | Duration | Start Date | End Date |
|-------|----------|------------|----------|
| Phase 0: Preparation | 1 week | Jan 26 | Feb 2 |
| Phase 1: Foundation | 2 weeks | Feb 3 | Feb 16 |
| Phase 2: Carousel Generation | 2 weeks | Feb 17 | Mar 2 |
| Phase 3: Migration & Cleanup | 2 weeks | Mar 3 | Mar 16 |
| Phase 4: Polish & Launch | 2 weeks | Mar 17 | Mar 30 |

**Total Duration:** 9 weeks

---

## Next Steps

1. **Review This Plan** with team/stakeholders
2. **Approve Plan** and assign resources
3. **Start Phase 0** immediately
4. **Track Progress** weekly
5. **Adjust Plan** as needed

---

**Action Plan Prepared By:** Trace (Debugging Agent)
**Date:** January 26, 2026
**Status:** Ready for Review
**Estimated Effort:** 9 weeks
**Team Size:** 2-3 developers