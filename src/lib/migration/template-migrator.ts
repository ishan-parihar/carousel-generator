/**
 * Template Migrator
 *
 * Converts DOM-based ArcTemplates to Canvas-based CanvasTemplates
 *
 * This module handles the migration of template definitions from the old
 * DOM-centric format to the new Canvas-centric format.
 */

import type { CanvasTemplate, ContentField } from '@/types/canvas-templates';
import type { CanvasElement } from '@/types/canvas-elements';
import type { ArcTemplate, ArcSlideTemplate } from '@/config/arc-templates/titan-arc';

/**
 * Migration options
 */
export interface TemplateMigrationOptions {
  /**
   * Canvas width in pixels
   * @default 1080
   */
  canvasWidth?: number;

  /**
   * Canvas height in pixels
   * @default 1080
   */
  canvasHeight?: number;

  /**
   * Default background color
   * @default '#ffffff'
   */
  defaultBackgroundColor?: string;

  /**
   * Author name for migrated templates
   * @default 'System'
   */
  author?: string;

  /**
   * Category for migrated templates
   * @default 'general'
   */
  category?: string;

  /**
   * Whether templates are official
   * @default true
   */
  isOfficial?: boolean;
}

/**
 * Migration result
 */
export interface TemplateMigrationResult {
  /**
   * Migrated template
   */
  template: CanvasTemplate;

  /**
   * Migration metadata
   */
  metadata: {
    /**
     * Number of slides migrated
     */
    slideCount: number;

    /**
     * Number of content fields created
     */
    contentFieldCount: number;

    /**
     * Number of canvas elements created
     */
    elementCount: number;

    /**
     * Migration warnings
     */
    warnings: string[];
  };
}

/**
 * Default migration options
 */
const defaultOptions: Required<TemplateMigrationOptions> = {
  canvasWidth: 1080,
  canvasHeight: 1080,
  defaultBackgroundColor: '#ffffff',
  author: 'System',
  category: 'general',
  isOfficial: true,
};

/**
 * Migrate ArcTemplate to CanvasTemplate
 *
 * @param arcTemplate - The ArcTemplate to migrate
 * @param options - Migration options
 * @returns Migration result with CanvasTemplate and metadata
 */
export function migrateArcTemplateToCanvasTemplate(
  arcTemplate: ArcTemplate,
  options: TemplateMigrationOptions = {}
): TemplateMigrationResult {
  const opts = { ...defaultOptions, ...options };
  const warnings: string[] = [];

  // Generate canvas elements for each slide type
  const elements: CanvasElement[] = [];
  const contentFields: ContentField[] = [];

  // Process each slide in the arc template
  arcTemplate.slides.forEach((slide, index) => {
    const slideElements = generateElementsForSlide(slide, index, opts);
    const slideContentFields = generateContentFieldsForSlide(slide, slideElements, index);

    elements.push(...slideElements);
    contentFields.push(...slideContentFields);
  });

  // Create the CanvasTemplate
  const template: CanvasTemplate = {
    id: arcTemplate.id,
    name: arcTemplate.name,
    description: arcTemplate.description,
    elements,
    settings: {
      width: opts.canvasWidth,
      height: opts.canvasHeight,
      backgroundColor: opts.defaultBackgroundColor,
      allowCustomContent: false,
      contentFields,
      maxSlides: arcTemplate.slides.length,
      minSlides: 1,
    },
    metadata: {
      version: '1.0.0',
      author: opts.author,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      tags: ['official', 'migrated', 'arc', opts.category],
      category: opts.category,
      description: arcTemplate.description,
      isOfficial: opts.isOfficial,
      isPublic: true,
      usageCount: 0,
      difficulty: 'beginner',
      estimatedTime: `${arcTemplate.slides.length * 2} minutes`,
    },
  };

  return {
    template,
    metadata: {
      slideCount: arcTemplate.slides.length,
      contentFieldCount: contentFields.length,
      elementCount: elements.length,
      warnings,
    },
  };
}

/**
 * Generate canvas elements for a slide
 */
function generateElementsForSlide(
  slide: ArcSlideTemplate,
  slideIndex: number,
  options: Required<TemplateMigrationOptions>
): CanvasElement[] {
  const elements: CanvasElement[] = [];
  const slideId = `slide-${slideIndex}`;

  // Background element
  elements.push({
    id: `${slideId}-bg`,
    type: 'background',
    name: `${slideId}-bg`,
    x: 0,
    y: 0,
    width: options.canvasWidth,
    height: options.canvasHeight,
    rotation: 0,
    scaleX: 1,
    scaleY: 1,
    opacity: 1,
    visible: true,
    zIndex: 0,
    locked: true,
    data: {
      backgroundType: 'solid',
      primaryColor: options.defaultBackgroundColor,
      opacity: 1,
    },
  });

  // Headline element
  if (slide.defaultContent.headline) {
    const position = getDefaultPosition('headline', slideIndex, options);
    elements.push({
      id: `${slideId}-headline`,
      type: 'text',
      name: `${slideId}-headline`,
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      visible: true,
      zIndex: 10,
      locked: false,
      data: {
        content: slide.defaultContent.headline,
        fontSize: 48,
        fontFamily: 'sans-serif',
        fontWeight: 'bold',
        color: '#000000',
        alignment: 'center',
        lineHeight: 1.2,
      },
    });
  }

  // Subtext element
  if (slide.defaultContent.subtext) {
    const position = getDefaultPosition('subtext', slideIndex, options);
    elements.push({
      id: `${slideId}-subtext`,
      type: 'text',
      name: `${slideId}-subtext`,
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      visible: true,
      zIndex: 11,
      locked: false,
      data: {
        content: slide.defaultContent.subtext,
        fontSize: 28,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        color: '#333333',
        alignment: 'center',
        lineHeight: 1.4,
      },
    });
  }

  // Bullets element
  if (slide.defaultContent.bullets) {
    const position = getDefaultPosition('bullets', slideIndex, options);
    elements.push({
      id: `${slideId}-bullets`,
      type: 'text',
      name: `${slideId}-bullets`,
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      visible: true,
      zIndex: 12,
      locked: false,
      data: {
        content: slide.defaultContent.bullets.join('\n'),
        fontSize: 24,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        color: '#333333',
        alignment: 'left',
        lineHeight: 1.5,
      },
    });
  }

  // Quote element
  if (slide.defaultContent.quote) {
    const position = getDefaultPosition('quote', slideIndex, options);
    elements.push({
      id: `${slideId}-quote`,
      type: 'text',
      name: `${slideId}-quote`,
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      visible: true,
      zIndex: 13,
      locked: false,
      data: {
        content: `"${slide.defaultContent.quote}"`,
        fontSize: 32,
        fontFamily: 'serif',
        fontWeight: 'normal',
        color: '#000000',
        alignment: 'center',
        lineHeight: 1.4,
        fontStyle: 'italic',
      },
    });
  }

  // Attribution element
  if (slide.defaultContent.attribution) {
    const position = getDefaultPosition('attribution', slideIndex, options);
    elements.push({
      id: `${slideId}-attribution`,
      type: 'text',
      name: `${slideId}-attribution`,
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      visible: true,
      zIndex: 14,
      locked: false,
      data: {
        content: slide.defaultContent.attribution,
        fontSize: 20,
        fontFamily: 'sans-serif',
        fontWeight: 'normal',
        color: '#666666',
        alignment: 'center',
        lineHeight: 1.2,
      },
    });
  }

  // CTA element
  if (slide.defaultContent.ctaText) {
    const position = getDefaultPosition('cta', slideIndex, options);
    elements.push({
      id: `${slideId}-cta`,
      type: 'cta',
      name: `${slideId}-cta`,
      x: position.x,
      y: position.y,
      width: position.width,
      height: position.height,
      rotation: 0,
      scaleX: 1,
      scaleY: 1,
      opacity: 1,
      visible: true,
      zIndex: 15,
      locked: false,
      data: {
        text: slide.defaultContent.ctaText,
        style: 'solid',
        shape: 'pill',
        backgroundColor: '#007AFF',
        textColor: '#ffffff',
        borderRadius: 24,
        shadow: false,
      },
    });
  }

  return elements;
}

/**
 * Generate content fields for a slide
 */
function generateContentFieldsForSlide(
  slide: ArcSlideTemplate,
  elements: CanvasElement[],
  slideIndex: number
): ContentField[] {
  const fields: ContentField[] = [];
  const slideId = `slide-${slideIndex}`;

  // Helper function to find element by type
  const findElement = (type: string): CanvasElement | undefined => {
    return elements.find(e => e.id === `${slideId}-${type}`);
  };

  // Headline field
  if (slide.defaultContent.headline) {
    const element = findElement('headline');
    if (element) {
      fields.push({
        id: `${slideId}-headline-field`,
        name: 'headline',
        label: 'Headline',
        type: 'text',
        elementId: element.id,
        defaultValue: slide.defaultContent.headline,
        required: true,
        placeholder: 'Enter headline',
        maxLength: 100,
        group: 'Content',
        order: 1,
      });
    }
  }

  // Subtext field
  if (slide.defaultContent.subtext) {
    const element = findElement('subtext');
    if (element) {
      fields.push({
        id: `${slideId}-subtext-field`,
        name: 'subtext',
        label: 'Subtext',
        type: 'text',
        elementId: element.id,
        defaultValue: slide.defaultContent.subtext,
        required: false,
        placeholder: 'Enter subtext',
        maxLength: 200,
        group: 'Content',
        order: 2,
      });
    }
  }

  // Bullets field
  if (slide.defaultContent.bullets) {
    const element = findElement('bullets');
    if (element) {
      fields.push({
        id: `${slideId}-bullets-field`,
        name: 'bullets',
        label: 'Bullet Points',
        type: 'textarea',
        elementId: element.id,
        defaultValue: slide.defaultContent.bullets.join('\n'),
        required: false,
        placeholder: 'Enter bullet points (one per line)',
        maxLength: 500,
        group: 'Content',
        order: 3,
        helpText: 'Enter each bullet point on a new line',
      });
    }
  }

  // Quote field
  if (slide.defaultContent.quote) {
    const element = findElement('quote');
    if (element) {
      fields.push({
        id: `${slideId}-quote-field`,
        name: 'quote',
        label: 'Quote',
        type: 'text',
        elementId: element.id,
        defaultValue: slide.defaultContent.quote,
        required: true,
        placeholder: 'Enter quote',
        maxLength: 300,
        group: 'Content',
        order: 4,
      });
    }
  }

  // Attribution field
  if (slide.defaultContent.attribution) {
    const element = findElement('attribution');
    if (element) {
      fields.push({
        id: `${slideId}-attribution-field`,
        name: 'attribution',
        label: 'Attribution',
        type: 'text',
        elementId: element.id,
        defaultValue: slide.defaultContent.attribution,
        required: false,
        placeholder: 'Enter attribution',
        maxLength: 100,
        group: 'Content',
        order: 5,
      });
    }
  }

  // CTA field
  if (slide.defaultContent.ctaText) {
    const element = findElement('cta');
    if (element) {
      fields.push({
        id: `${slideId}-cta-field`,
        name: 'cta',
        label: 'Call to Action',
        type: 'text',
        elementId: element.id,
        defaultValue: slide.defaultContent.ctaText,
        required: true,
        placeholder: 'Enter CTA text',
        maxLength: 50,
        group: 'Content',
        order: 6,
      });
    }
  }

  return fields;
}

/**
 * Get default position for element type
 */
function getDefaultPosition(
  type: string,
  slideIndex: number,
  options: Required<TemplateMigrationOptions>
): { x: number; y: number; width: number; height: number } {
  const width = options.canvasWidth;
  const height = options.canvasHeight;

  switch (type) {
    case 'headline':
      return {
        x: width * 0.1,
        y: height * 0.15,
        width: width * 0.8,
        height: height * 0.2,
      };
    case 'subtext':
      return {
        x: width * 0.1,
        y: height * 0.4,
        width: width * 0.8,
        height: height * 0.15,
      };
    case 'bullets':
      return {
        x: width * 0.15,
        y: height * 0.35,
        width: width * 0.7,
        height: height * 0.4,
      };
    case 'quote':
      return {
        x: width * 0.15,
        y: height * 0.3,
        width: width * 0.7,
        height: height * 0.3,
      };
    case 'attribution':
      return {
        x: width * 0.15,
        y: height * 0.65,
        width: width * 0.7,
        height: height * 0.1,
      };
    case 'cta':
      return {
        x: width * 0.3,
        y: height * 0.8,
        width: width * 0.4,
        height: height * 0.1,
      };
    default:
      return {
        x: 0,
        y: 0,
        width: width,
        height: height,
      };
  }
}

/**
 * Validate migrated template
 */
export function validateMigratedTemplate(template: CanvasTemplate): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required fields
  if (!template.id) errors.push('Template missing ID');
  if (!template.name) errors.push('Template missing name');
  if (!template.elements || template.elements.length === 0) {
    errors.push('Template has no elements');
  }
  if (!template.settings) errors.push('Template missing settings');
  if (!template.metadata) errors.push('Template missing metadata');

  // Check content fields
  if (template.settings.contentFields.length === 0) {
    warnings.push('Template has no content fields');
  }

  // Check element positions
  template.elements.forEach((element, index) => {
    if (element.x < 0 || element.x > template.settings.width) {
      errors.push(`Element ${index} has invalid x position`);
    }
    if (element.y < 0 || element.y > template.settings.height) {
      errors.push(`Element ${index} has invalid y position`);
    }
    if (element.width <= 0 || element.width > template.settings.width) {
      errors.push(`Element ${index} has invalid width`);
    }
    if (element.height <= 0 || element.height > template.settings.height) {
      errors.push(`Element ${index} has invalid height`);
    }
  });

  // Check content field mappings
  template.settings.contentFields.forEach((field) => {
    const element = template.elements.find(e => e.id === field.elementId);
    if (!element) {
      errors.push(`Content field ${field.id} references non-existent element ${field.elementId}`);
    }
  });

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}