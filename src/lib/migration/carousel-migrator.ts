/**
 * Carousel Migrator
 *
 * Converts Slide-based carousels to Template-based carousels
 *
 * This module handles the migration of carousel data from the old
 * DOM-centric format (Slide[]) to the new Canvas-centric format (Carousel with templateId).
 */

import type { Carousel, CarouselContent, CarouselSlide } from '@/types/canvas-templates';
import type { Slide, SlideContent } from '@/types/slide';

/**
 * Migration options
 */
export interface CarouselMigrationOptions {
  /**
   * Default template ID to use if no template is found
   * @default 'default-template'
   */
  defaultTemplateId?: string;

  /**
   * Whether to preserve slide order
   * @default true
   */
  preserveOrder?: boolean;

  /**
   * Whether to merge consecutive slides of same type
   * @default false
   */
  mergeConsecutive?: boolean;

  /**
   * Whether to preserve custom styling
   * @default true
   */
  preserveStyling?: boolean;
}

/**
 * Migration result
 */
export interface CarouselMigrationResult {
  /**
   * Migrated carousel
   */
  carousel: Carousel;

  /**
   * Migration metadata
   */
  metadata: {
    /**
     * Number of slides migrated
     */
    slideCount: number;

    /**
     * Template ID used
     */
    templateId: string;

    /**
     * Number of content fields extracted
     */
    contentFieldCount: number;

    /**
     * Migration warnings
     */
    warnings: string[];

    /**
     * Whether custom styling was preserved
     */
    stylingPreserved: boolean;
  };
}

/**
 * Default migration options
 */
const defaultOptions: Required<CarouselMigrationOptions> = {
  defaultTemplateId: 'default-template',
  preserveOrder: true,
  mergeConsecutive: false,
  preserveStyling: true,
};

/**
 * Slide type to template ID mapping
 */
const slideTypeToTemplateId: Record<string, string> = {
  'title': 'template-title',
  'content': 'template-content',
  'bullets': 'template-bullets',
  'quote': 'template-quote',
  'cta': 'template-cta',
  'image': 'template-image',
  'custom': 'template-custom',
};

/**
 * Migrate carousel from Slide[] to Carousel format
 *
 * @param slides - Array of slides to migrate
 * @param carouselName - Name of the carousel
 * @param pillar - Content pillar
 * @param options - Migration options
 * @returns Migration result with Carousel and metadata
 */
export function migrateSlidesToCarousel(
  slides: Slide[],
  carouselName: string,
  pillar: string,
  options: CarouselMigrationOptions = {}
): CarouselMigrationResult {
  const opts = { ...defaultOptions, ...options };
  const warnings: string[] = [];

  if (!slides || slides.length === 0) {
    throw new Error('Cannot migrate empty carousel');
  }

  // Infer template from first slide
  const templateId = inferTemplateFromSlides(slides, opts.defaultTemplateId);

  // Convert slides to carousel content
  const carouselContent: CarouselContent = {
    slides: slides.map((slide, index) => convertSlideToCarouselSlide(slide, index, opts)),
  };

  // Count total content fields
  const contentFieldCount = carouselContent.slides.reduce(
    (total, slide) => total + Object.keys(slide.contentFields).length,
    0
  );

  // Check if styling was preserved
  const stylingPreserved = slides.some(slide => slide.style !== undefined || slide.cta !== undefined);

  // Create the Carousel
  const carousel: Carousel = {
    id: generateCarouselId(),
    templateId,
    templateVersion: '1.0.0',
    name: carouselName,
    content: carouselContent,
    settings: {
      pillar,
    },
    exportSettings: {
      format: 'png',
      quality: 1,
      pixelRatio: 2,
    },
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };

  return {
    carousel,
    metadata: {
      slideCount: slides.length,
      templateId,
      contentFieldCount,
      warnings,
      stylingPreserved,
    },
  };
}

/**
 * Convert a single Slide to CarouselSlide
 */
function convertSlideToCarouselSlide(
  slide: Slide,
  slideNumber: number,
  options: Required<CarouselMigrationOptions>
): CarouselSlide {
  const contentFields: Record<string, any> = {};
  const overrides: any = {};

  // Extract content fields
  if (slide.content.headline) {
    contentFields.headline = extractContentValue(slide.content.headline);
  }

  if (slide.content.subtext) {
    contentFields.subtext = extractContentValue(slide.content.subtext);
  }

  if (slide.content.bullets) {
    contentFields.bullets = extractContentValue(slide.content.bullets);
  }

  if (slide.content.quote) {
    contentFields.quote = extractContentValue(slide.content.quote);
  }

  if (slide.content.attribution) {
    contentFields.attribution = extractContentValue(slide.content.attribution);
  }

  if (slide.content.ctaText) {
    contentFields.cta = extractContentValue(slide.content.ctaText);
  }

  if (slide.content.imageUrl) {
    contentFields.image = slide.content.imageUrl;
  }

  if (slide.content.imageConfig) {
    contentFields.image = slide.content.imageConfig.imageUrl;
    if (slide.content.imageConfig.caption) {
      contentFields.imageCaption = slide.content.imageConfig.caption;
    }
  }

  // Preserve styling if enabled
  if (options.preserveStyling) {
    if (slide.style) {
      overrides.style = slide.style;
    }
    if (slide.cta) {
      overrides.cta = slide.cta;
    }
  }

  const carouselSlide: CarouselSlide = {
    slideNumber: slideNumber + 1,
    contentFields,
  };

  // Add overrides if any
  if (Object.keys(overrides).length > 0) {
    carouselSlide.overrides = overrides;
  }

  return carouselSlide;
}

/**
 * Extract content value from PositionedContent
 */
function extractContentValue(content: any): any {
  if (typeof content === 'string') {
    return content;
  }

  if (typeof content === 'object' && content !== null) {
    // Handle PositionedContent structure
    if (content.text !== undefined) {
      return content.text;
    }

    // Handle array content (bullets)
    if (Array.isArray(content)) {
      return content.join('\n');
    }

    // Handle other object structures
    return JSON.stringify(content);
  }

  return content;
}

/**
 * Infer template ID from slides
 */
function inferTemplateFromSlides(slides: Slide[], defaultTemplateId: string): string {
  if (!slides || slides.length === 0) {
    return defaultTemplateId;
  }

  // Check if all slides are of the same type
  const firstSlideType = slides[0].type;
  const allSameType = slides.every(slide => slide.type === firstSlideType);

  if (allSameType) {
    // Use template based on slide type
    return slideTypeToTemplateId[firstSlideType] || defaultTemplateId;
  }

  // Mixed slide types - use a multi-slide template
  if (slides.length <= 5) {
    return 'template-quick-arc';
  } else if (slides.length <= 10) {
    return 'template-titan-arc';
  } else {
    return 'template-custom-arc';
  }
}

/**
 * Generate unique carousel ID
 */
function generateCarouselId(): string {
  return `carousel-${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Validate migrated carousel
 */
export function validateMigratedCarousel(carousel: Carousel): {
  isValid: boolean;
  errors: string[];
  warnings: string[];
} {
  const errors: string[] = [];
  const warnings: string[] = [];

  // Check required fields
  if (!carousel.id) errors.push('Carousel missing ID');
  if (!carousel.name) errors.push('Carousel missing name');
  if (!carousel.templateId) errors.push('Carousel missing template ID');
  if (!carousel.content) errors.push('Carousel missing content');

  // Check slides
  if (!carousel.content.slides || carousel.content.slides.length === 0) {
    errors.push('Carousel has no slides');
  }

  // Check each slide
  carousel.content.slides.forEach((slide, index) => {
    if (slide.slideNumber < 1) {
      errors.push(`Slide ${index} has invalid slide number`);
    }

    if (!slide.contentFields || Object.keys(slide.contentFields).length === 0) {
      warnings.push(`Slide ${index} has no content fields`);
    }
  });

  // Check export settings
  if (!carousel.exportSettings) {
    warnings.push('Carousel missing export settings');
  } else {
    const validFormats = ['png', 'jpg', 'pdf', 'json', 'gif', 'mp4'];
    if (!validFormats.includes(carousel.exportSettings.format)) {
      errors.push('Invalid export format');
    }

    if (carousel.exportSettings.quality < 0 || carousel.exportSettings.quality > 1) {
      errors.push('Invalid export quality');
    }

    if (carousel.exportSettings.pixelRatio < 1 || carousel.exportSettings.pixelRatio > 3) {
      errors.push('Invalid pixel ratio');
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
  };
}

/**
 * Calculate migration statistics
 */
export function calculateMigrationStats(
  slides: Slide[],
  result: CarouselMigrationResult
): {
  originalSlideCount: number;
  migratedSlideCount: number;
  contentFieldsExtracted: number;
  avgFieldsPerSlide: number;
  warningsCount: number;
} {
  return {
    originalSlideCount: slides.length,
    migratedSlideCount: result.metadata.slideCount,
    contentFieldsExtracted: result.metadata.contentFieldCount,
    avgFieldsPerSlide: slides.length > 0
      ? result.metadata.contentFieldCount / slides.length
      : 0,
    warningsCount: result.metadata.warnings.length,
  };
}