# Migration Strategy
## DOM/Canvas Integration Refactoring - Phase 0

**Date:** January 26, 2026
**Status:** Planning Phase
**Purpose:** Define strategy for migrating from DOM-centric to Canvas-centric architecture

---

## Overview

This document outlines the migration strategy for transforming the carousel-generator from a dual-mode (DOM + Canvas) system to a unified Canvas-centric platform. The migration must preserve existing user data while enabling the new Canva-like experience.

---

## Migration Goals

### Primary Goals
1. **Preserve User Data:** No loss of existing templates, carousels, or user preferences
2. **Maintain Functionality:** All existing features continue to work during migration
3. **Enable New Features:** Migration unlocks template library, sharing, and AI integration
4. **Minimize Disruption:** Gradual migration with backward compatibility

### Secondary Goals
1. **Improve Performance:** Canvas rendering should be faster than DOM
2. **Simplify Codebase:** Remove translation layer and duplicate code
3. **Enhance UX:** Better template creation and management
4. **Enable AI:** Canvas templates for AI agent integration

---

## Current State Analysis

### Existing Data Structures

#### 1. DOM Templates (ArcTemplate)
- **Location:** `src/types/slide-subtypes.ts`
- **Format:** DOM-centric with slide types and subtypes
- **Examples:** `SingleImageTemplate`, `QuoteTemplate`, `BulletPointsTemplate`
- **Count:** ~20 predefined templates

#### 2. Carousel Data (Slide)
- **Location:** `src/store/carousel-store.ts`
- **Format:** DOM-centric with Slide[] array
- **Content:** SlideContent (headline, subtext, bullets, etc.)
- **Storage:** Zustand persist (localStorage)

#### 3. Canvas Elements (CanvasElement)
- **Location:** `src/types/canvas-elements.ts`
- **Format:** Already defined, used for Canvas mode
- **Status:** Secondary, computed from Slide data

### Existing Workflows

#### 1. Template Selection
```
User selects ArcTemplate
  → Carousel store initializes with Slide[]
  → DOM mode renders using ThemedSlide
  → Canvas mode renders by translating Slide → CanvasElement
```

#### 2. Carousel Editing
```
User edits slide content
  → Update carousel-store (DOM-centric)
  → DOM mode re-renders
  → Canvas mode re-translates and re-renders
```

#### 3. CLI Rendering
```
CLI command: npm run render
  → Load carousel from carousel-store
  → Render using DOM mode (ThemedSlide)
  → Export to PNG
```

---

## Migration Strategy

### Phase 1: Data Model Migration (Week 1)

#### 1.1 Migrate DOM Templates to Canvas Templates

**Objective:** Convert existing ArcTemplate definitions to CanvasTemplate format.

**Approach:**

1. **Create Migration Script:** `scripts/migrate-dom-templates.ts`
   - Reads ArcTemplate definitions
   - Converts to CanvasTemplate format
   - Generates CanvasElement[] for each template
   - Creates ContentField[] for each editable element
   - Saves to `/templates/official/` directory

2. **Template Conversion Rules:**

   **SingleImageTemplate:**
   ```typescript
   // Before (DOM)
   {
     type: 'single-image',
     content: {
       imageConfig: { url: '...' },
       headline: { text: '...', position: '...' },
       subtext: { text: '...', position: '...' }
     }
   }

   // After (Canvas)
   {
     elements: [
       { id: 'bg', type: 'background', ... },
       { id: 'image', type: 'image', data: { url: '...' }, ... },
       { id: 'headline', type: 'text', data: { content: '...' }, ... },
       { id: 'subtext', type: 'text', data: { content: '...' }, ... }
     ],
     settings: {
       contentFields: [
         { id: 'headline', elementId: 'headline', type: 'text', ... },
         { id: 'subtext', elementId: 'subtext', type: 'text', ... },
         { id: 'image', elementId: 'image', type: 'image', ... }
       ]
     }
   }
   ```

3. **Position Translation:**
   - Use existing `position-translation.ts` logic
   - Convert relative positions to absolute (x, y)
   - Preserve aspect ratios and alignments

4. **Content Field Generation:**
   - Auto-generate ContentField for each editable element
   - Map element IDs to field IDs
   - Set defaults from existing template content

**Deliverables:**
- Migration script
- 20+ Canvas templates in `/templates/official/`
- Validation report

**Success Criteria:**
- All DOM templates converted to Canvas format
- Visual output matches original templates
- All content fields correctly mapped

#### 1.2 Migrate Carousel Data

**Objective:** Convert existing Slide[] data to Carousel format.

**Approach:**

1. **Create Migration Script:** `scripts/migrate-carousels.ts`
   - Reads carousel-store data
   - Converts Slide[] to CarouselContent
   - Extracts content field values
   - Preserves template references
   - Backs up original data

2. **Data Mapping:**

   **Slide Content Extraction:**
   ```typescript
   // Before (DOM)
   {
     id: 'slide-1',
     type: 'single-image',
     content: {
       headline: { text: 'My Headline', ... },
       subtext: { text: 'My Subtext', ... },
       imageConfig: { url: 'https://example.com/image.jpg', ... }
     }
   }

   // After (Canvas)
   {
     slideNumber: 1,
     contentFields: {
       'headline': 'My Headline',
       'subtext': 'My Subtext',
       'image': 'https://example.com/image.jpg'
     }
   }
   ```

3. **Template Matching:**
   - Match Slide type to CanvasTemplate
   - Use template ID instead of slide type
   - Handle custom slides (no template)

**Deliverables:**
- Migration script
- Migrated carousel data
- Backup of original data
- Migration report

**Success Criteria:**
- All existing carousels migrated
- Visual output matches original carousels
- No data loss

### Phase 2: Component Migration (Weeks 2-3)

#### 2.1 Update Carousel Editor

**Objective:** Replace DOM mode with Canvas-only editor.

**Approach:**

1. **Remove Mode Toggle:**
   - Remove `renderMode` state from carousel-store
   - Remove toggle button from UI
   - Default to Canvas mode

2. **Update CarouselEditor Component:**
   - Use CanvasSlide for all rendering
   - Remove ThemedSlide references
   - Update property panel for Canvas elements

3. **Backward Compatibility Layer:**
   - Keep carousel-store API unchanged
   - Add adapter to convert Slide → Carousel internally
   - Maintain existing actions (updateElement, etc.)

**Deliverables:**
- Updated CarouselEditor component
- Removed DOM mode
- Backward compatibility layer

**Success Criteria:**
- Editor works with existing carousels
- No breaking changes to existing workflows
- Performance improved

#### 2.2 Update CLI Integration

**Objective:** Use Canvas mode for CLI rendering.

**Approach:**

1. **Update `scripts/render-carousel.ts`:**
   - Load Carousel data instead of Slide[]
   - Use CarouselRenderer instead of ThemedSlide
   - Support template-based rendering

2. **New CLI Commands:**
   ```bash
   # Generate from template
   carousel-gen generate --template my-template --content content.json

   # Render existing carousel
   carousel-gen render --carousel my-carousel --output output/

   # Export template
   carousel-gen export-template --template my-template --output template.json
   ```

3. **Content JSON Format:**
   ```json
   {
     "template": "my-template",
     "version": "1.0.0",
     "content": [
       {
         "slideNumber": 1,
         "fields": {
           "headline": "My Headline",
           "subtext": "My Subtext",
           "image": "https://example.com/image.jpg"
         }
       }
     ]
   }
   ```

**Deliverables:**
- Updated CLI scripts
- New CLI commands
- Documentation

**Success Criteria:**
- CLI uses Canvas rendering
- Output matches visual editor
- AI agents can use new format

### Phase 3: Cleanup (Week 4)

#### 3.1 Remove Deprecated Code

**Files to Remove:**
- `src/components/preview/ThemedSlide.tsx`
- `src/lib/canvas/dom-canvas-translation.ts`
- `src/lib/canvas/position-translation.ts` (if no longer needed)
- `src/hooks/useCanvasElements.ts` (if no longer needed)

**Files to Update:**
- `src/store/carousel-store.ts` (remove DOM-centric data)
- `src/components/editor/CarouselEditor.tsx` (simplify)
- `src/components/preview/CanvasSlide.tsx` (remove translation)

**Deliverables:**
- Cleaned up codebase
- Updated documentation
- Removed deprecated files

**Success Criteria:**
- Codebase simplified
- No unused imports
- Documentation updated

---

## Migration Scripts

### Script 1: migrate-dom-templates.ts

```typescript
#!/usr/bin/env tsx

/**
 * Migration Script: DOM Templates → Canvas Templates
 *
 * Converts existing ArcTemplate definitions to CanvasTemplate format
 */

import fs from 'fs';
import path from 'path';
import type { CanvasTemplate, ContentField, CanvasElement } from '../src/types/canvas-templates';
import type { ArcTemplate } from '../src/types/slide-subtypes';

// Configuration
const INPUT_DIR = './src/lib/templates';
const OUTPUT_DIR = './templates/official';

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

/**
 * Convert ArcTemplate to CanvasTemplate
 */
function convertTemplate(arcTemplate: ArcTemplate): CanvasTemplate {
  const templateId = `template-${arcTemplate.type}`;

  // Generate Canvas elements from ArcTemplate
  const elements: CanvasElement[] = generateElements(arcTemplate);

  // Generate content fields
  const contentFields: ContentField[] = generateContentFields(arcTemplate, elements);

  return {
    id: templateId,
    name: arcTemplate.name,
    description: arcTemplate.description || '',
    elements,
    settings: {
      width: 1080,
      height: 1080,
      backgroundColor: '#ffffff',
      allowCustomContent: false,
      contentFields,
      maxSlides: 10,
      minSlides: 1,
    },
    metadata: {
      version: '1.0.0',
      author: 'System',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: ['official', arcTemplate.category || 'general'],
      category: arcTemplate.category || 'general',
      description: arcTemplate.description || '',
      isOfficial: true,
      isPublic: true,
      usageCount: 0,
    },
  };
}

/**
 * Generate Canvas elements from ArcTemplate
 */
function generateElements(arcTemplate: ArcTemplate): CanvasElement[] {
  // Implementation details...
  // This would use the existing position-translation logic
  return [];
}

/**
 * Generate content fields from ArcTemplate
 */
function generateContentFields(arcTemplate: ArcTemplate, elements: CanvasElement[]): ContentField[] {
  // Implementation details...
  // This would map editable elements to content fields
  return [];
}

// Main execution
console.log('Starting template migration...');

// Load ArcTemplates
const templates = loadArcTemplates();

// Convert each template
const convertedTemplates = templates.map(convertTemplate);

// Save to output directory
convertedTemplates.forEach(template => {
  const filePath = path.join(OUTPUT_DIR, `${template.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(template, null, 2));
  console.log(`✓ Converted: ${template.name}`);
});

console.log(`\nMigration complete!`);
console.log(`Converted ${convertedTemplates.length} templates`);
console.log(`Output directory: ${OUTPUT_DIR}`);
```

### Script 2: migrate-carousels.ts

```typescript
#!/usr/bin/env tsx

/**
 * Migration Script: Slide[] → Carousel
 *
 * Converts existing carousel data from DOM-centric to Canvas-centric format
 */

import fs from 'fs';
import path from 'path';
import type { Carousel, CarouselContent } from '../src/types/canvas-templates';

// Configuration
const INPUT_FILE = './data/backups/carousel-store-backup.json';
const OUTPUT_FILE = './data/migrated-carousels.json';

// Backup original data
if (fs.existsSync(INPUT_FILE)) {
  console.log('Backup already exists, skipping backup...');
} else {
  // Load current carousel-store data
  const currentData = loadCarouselStoreData();
  fs.writeFileSync(INPUT_FILE, JSON.stringify(currentData, null, 2));
  console.log(`✓ Backed up carousel data to: ${INPUT_FILE}`);
}

/**
 * Convert Slide[] to Carousel
 */
function convertCarousel(slides: any[]): Carousel {
  const carouselId = `carousel-${Date.now()}`;

  // Convert slides to carousel content
  const content: CarouselContent = {
    slides: slides.map((slide, index) => ({
      slideNumber: index + 1,
      contentFields: extractContentFields(slide),
    })),
  };

  return {
    id: carouselId,
    templateId: getTemplateIdForSlide(slides[0]),
    templateVersion: '1.0.0',
    name: 'Migrated Carousel',
    content,
    settings: {
      pillar: slides[0]?.pillar || 'general',
    },
    exportSettings: {
      format: 'png',
      quality: 1,
      pixelRatio: 2,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
}

/**
 * Extract content fields from slide
 */
function extractContentFields(slide: any): Record<string, any> {
  const fields: Record<string, any> = {};

  if (slide.content.headline) {
    fields.headline = slide.content.headline.text;
  }

  if (slide.content.subtext) {
    fields.subtext = slide.content.subtext.text;
  }

  if (slide.content.bullets) {
    fields.bullets = slide.content.bullets.text;
  }

  if (slide.content.imageConfig) {
    fields.image = slide.content.imageConfig.url;
  }

  return fields;
}

/**
 * Get template ID for slide type
 */
function getTemplateIdForSlide(slide: any): string {
  const typeToTemplate: Record<string, string> = {
    'single-image': 'template-single-image',
    'quote': 'template-quote',
    'bullet-points': 'template-bullet-points',
    // Add more mappings...
  };

  return typeToTemplate[slide.type] || 'template-custom';
}

// Main execution
console.log('Starting carousel migration...');

// Load carousel data
const carouselData = loadCarouselStoreData();

// Convert each carousel
const migratedCarousels = carouselData.carousels.map(convertCarousel);

// Save migrated data
fs.writeFileSync(OUTPUT_FILE, JSON.stringify(migratedCarousels, null, 2));

console.log(`\nMigration complete!`);
console.log(`Migrated ${migratedCarousels.length} carousels`);
console.log(`Output file: ${OUTPUT_FILE}`);
```

---

## Backward Compatibility Strategy

### Compatibility Layer

**Objective:** Maintain existing API compatibility during migration.

**Approach:**

1. **Adapter Pattern:**
   - Create adapter functions to convert old API calls to new format
   - Maintain existing action names (updateElement, addSlide, etc.)
   - Internally convert to Canvas format

2. **Graceful Fallback:**
   - If Canvas template not found, fall back to DOM rendering
   - Log warnings for deprecated usage
   - Provide migration suggestions

3. **Version Detection:**
   - Detect old vs new data format
   - Auto-migrate on first access
   - Cache migrated data

### Compatibility Functions

```typescript
// src/lib/migration/compatibility-layer.ts

/**
 * Convert old Slide data to Carousel format
 */
export function slideToCarousel(slide: Slide): CarouselSlide {
  return {
    slideNumber: slide.order + 1,
    contentFields: {
      headline: slide.content.headline?.text,
      subtext: slide.content.subtext?.text,
      bullets: slide.content.bullets?.text,
      image: slide.content.imageConfig?.url,
    },
  };
}

/**
 * Convert old carousel store data to new format
 */
export function migrateCarouselStore(oldData: any): any {
  return {
    carousels: oldData.slides.map((slide: Slide) => slideToCarousel(slide)),
  };
}
```

---

## Testing Strategy

### Unit Tests

1. **Template Conversion Tests:**
   - Test each ArcTemplate → CanvasTemplate conversion
   - Verify element positions match
   - Verify content field mappings

2. **Carousel Migration Tests:**
   - Test Slide[] → Carousel conversion
   - Verify content extraction
   - Verify template matching

3. **Store Tests:**
   - Test template-store CRUD operations
   - Test backward compatibility layer
   - Test data persistence

### Integration Tests

1. **Template Loading:**
   - Load migrated templates
   - Render in editor
   - Verify visual output

2. **Carousel Rendering:**
   - Load migrated carousels
   - Render in Canvas mode
   - Compare with DOM output

3. **CLI Integration:**
   - Test new CLI commands
   - Verify output format
   - Test AI integration

### E2E Tests

1. **Complete User Journey:**
   - Create carousel from template
   - Edit content fields
   - Export to PNG
   - Verify output

2. **Migration Journey:**
   - Load old carousel
   - Auto-migrate to new format
   - Verify no data loss
   - Test all features

### Visual Regression Tests

1. **Template Comparison:**
   - Render old DOM template
   - Render new Canvas template
   - Compare pixel-by-pixel
   - Accept minor differences

2. **Carousel Comparison:**
   - Render old carousel
   - Render migrated carousel
   - Compare output
   - Verify consistency

---

## Rollback Plan

### Pre-Migration Backup

1. **Backup Locations:**
   - `./data/backups/carousel-store-backup.json`
   - `./data/backups/templates-backup.json`
   - `./data/backups/user-data-backup.json`

2. **Backup Process:**
   - Create timestamped backups
   - Verify backup integrity
   - Store in multiple locations

### Rollback Steps

1. **Stop Migration:**
   - Halt any running migration scripts
   - Lock database writes
   - Notify users

2. **Restore Data:**
   - Restore carousel-store from backup
   - Restore templates from backup
   - Verify data integrity

3. **Revert Code:**
   - Rollback to previous commit
   - Reinstall dependencies
   - Restart application

4. **Verify:**
   - Test all features
   - Verify data integrity
   - Notify users of rollback

---

## Timeline

| Phase | Duration | Tasks |
|-------|----------|-------|
| **Phase 1: Data Model Migration** | Week 1 | - Create migration scripts<br>- Migrate DOM templates<br>- Migrate carousel data<br>- Validate migrations |
| **Phase 2: Component Migration** | Weeks 2-3 | - Update CarouselEditor<br>- Remove DOM mode<br>- Update CLI<br>- Test integration |
| **Phase 3: Cleanup** | Week 4 | - Remove deprecated code<br>- Update documentation<br>- Final testing<br>- Launch |

**Total Duration:** 4 weeks

---

## Risk Assessment

### High Risk

1. **Data Loss:**
   - **Risk:** Migration could corrupt or lose user data
   - **Mitigation:** Comprehensive backups, validation, rollback plan
   - **Probability:** Low
   - **Impact:** Critical

2. **Visual Regression:**
   - **Risk:** Canvas output doesn't match DOM output
   - **Mitigation:** Visual regression tests, manual review
   - **Probability:** Medium
   - **Impact:** High

### Medium Risk

3. **Performance Degradation:**
   - **Risk:** Canvas rendering is slower than DOM
   - **Mitigation:** Performance testing, optimization
   - **Probability:** Low
   - **Impact:** Medium

4. **Breaking Changes:**
   - **Risk:** Existing workflows break
   - **Mitigation:** Backward compatibility layer, gradual rollout
   - **Probability:** Medium
   - **Impact:** High

### Low Risk

5. **User Confusion:**
   - **Risk:** Users confused by new UI
   - **Mitigation:** Documentation, tutorials, support
   - **Probability:** High
   - **Impact:** Low

6. **CLI Incompatibility:**
   - **Risk:** CLI scripts no longer work
   - **Mitigation:** Update CLI, maintain old commands
   - **Probability:** Low
   - **Impact:** Medium

---

## Success Criteria

### Phase 1 Success
- [ ] All DOM templates converted to Canvas format
- [ ] All existing carousels migrated
- [ ] Visual output matches original templates
- [ ] No data loss
- [ ] Migration scripts tested and validated

### Phase 2 Success
- [ ] CarouselEditor uses Canvas-only rendering
- [ ] DOM mode removed
- [ ] CLI updated to use Canvas
- [ ] Backward compatibility maintained
- [ ] All existing features work

### Phase 3 Success
- [ ] Deprecated code removed
- [ ] Codebase simplified
- [ ] Documentation updated
- [ ] Performance improved
- [ ] Ready for launch

---

## Next Steps

1. **Review Migration Strategy** with team
2. **Approve Migration Plan** and timeline
3. **Create Migration Scripts** (Phase 1)
4. **Test Migration Scripts** with sample data
5. **Execute Migration** (Phase 1)
6. **Update Components** (Phase 2)
7. **Cleanup** (Phase 3)
8. **Launch** new system

---

**Migration Strategy Prepared By:** Trace (Debugging Agent)
**Date:** January 26, 2026
**Status:** Ready for Review
**Estimated Effort:** 4 weeks
**Team Size:** 2-3 developers