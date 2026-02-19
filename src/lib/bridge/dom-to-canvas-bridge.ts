/**
 * DOM to Canvas Bridge Utilities
 *
 * Temporary utilities to bridge between DOM-centric Carousel store
 * and Canvas-centric CarouselRenderer.
 *
 * These utilities will be removed once the carousel-store is fully migrated
 * to Canvas-centric data model (Phase 4, Task 4.2).
 */

import type { Carousel as DOMCarousel, Slide } from '@/types/index';
import type { CanvasTemplate, CarouselContent, CarouselSlide, ContentField, CanvasElement } from '@/types/canvas-templates';
import { getPillarTheme } from '@/config/pillars';
import { getStyleTemplate } from '@/config/styles';

/**
 * Create content fields from DOM slide
 *
 * This converts DOM slide content to Canvas content fields format.
 * Content fields are what users fill in when generating a carousel from a template.
 */
function createContentFieldsFromSlide(slide: Slide): ContentField[] {
  const fields: ContentField[] = [];
  const { content } = slide;

  if (content.headline) {
    const headlineValue = typeof content.headline === 'string' ? content.headline : content.headline.value;
    if (headlineValue) {
      fields.push({
        id: 'headline',
        name: 'Headline',
        label: 'Headline',
        type: 'text',
        elementId: 'headline',
        defaultValue: headlineValue,
        required: true,
        placeholder: 'Enter headline',
      });
    }
  }

  if (content.subtext) {
    const subtextValue = typeof content.subtext === 'string' ? content.subtext : content.subtext.value;
    if (subtextValue) {
      fields.push({
        id: 'subtext',
        name: 'Subtext',
        label: 'Subtext',
        type: 'text',
        elementId: 'subtext',
        defaultValue: subtextValue,
        required: false,
        placeholder: 'Enter subtext',
      });
    }
  }

  if (content.bullets) {
    const bulletsValue = Array.isArray(content.bullets)
      ? content.bullets
      : typeof content.bullets === 'string'
      ? content.bullets
      : content.bullets.value;

    if (Array.isArray(bulletsValue) && bulletsValue.length > 0) {
      fields.push({
        id: 'bullets',
        name: 'Bullets',
        label: 'Bullet Points',
        type: 'textarea',
        elementId: 'bullets',
        defaultValue: bulletsValue.join('\n'),
        required: false,
        placeholder: 'Enter bullet points (one per line)',
      });
    }
  }

  if (content.quote) {
    const quoteValue = typeof content.quote === 'string' ? content.quote : content.quote.value;
    if (quoteValue) {
      fields.push({
        id: 'quote',
        name: 'Quote',
        label: 'Quote',
        type: 'textarea',
        elementId: 'quote',
        defaultValue: quoteValue,
        required: false,
        placeholder: 'Enter quote',
      });
    }
  }

  if (content.attribution) {
    const attributionValue = typeof content.attribution === 'string' ? content.attribution : content.attribution.value;
    if (attributionValue) {
      fields.push({
        id: 'attribution',
        name: 'Attribution',
        label: 'Attribution',
        type: 'text',
        elementId: 'attribution',
        defaultValue: attributionValue,
        required: false,
        placeholder: 'Enter attribution',
      });
    }
  }

  if (content.imageConfig) {
    const imageUrl = content.imageConfig.imageUrl;
    if (imageUrl) {
      fields.push({
        id: 'image',
        name: 'Image',
        label: 'Image URL',
        type: 'image',
        elementId: 'image',
        defaultValue: imageUrl,
        required: false,
        placeholder: 'Enter image URL',
      });
    }
  }

  if (content.ctaText) {
    const ctaValue = typeof content.ctaText === 'string' ? content.ctaText : content.ctaText.value;
    if (ctaValue) {
      fields.push({
        id: 'cta',
        name: 'CTA',
        label: 'Call to Action',
        type: 'text',
        elementId: 'cta',
        defaultValue: ctaValue,
        required: false,
        placeholder: 'Enter CTA text',
      });
    }
  }

  return fields;
}

/**
 * Convert DOM Carousel to Canvas Template
 *
 * This creates a dynamic template from the DOM carousel structure.
 * In the future, templates will be pre-defined and selected by the user.
 */
export function createTemplateFromDOMCarousel(carousel: DOMCarousel): CanvasTemplate {
  const theme = getPillarTheme(carousel.pillar);
  const styleTemplate = getStyleTemplate('minimal') || getStyleTemplate('minimal')!;

  // Create elements from a representative slide
  const representativeSlide = carousel.slides[0];
  const elements = createElementsFromSlide(representativeSlide, theme, carousel.pillar);

  // Create content fields based on slide content
  const contentFields = createContentFieldsFromSlide(representativeSlide);

  return {
    id: carousel.id,
    name: carousel.name,
    description: `Auto-generated template for ${carousel.name}`,
    elements,
    settings: {
      width: 1080,
      height: 1350,
      backgroundColor: theme.backgroundColor || '#0a0a0a',
      allowCustomContent: true,
      contentFields,
      defaultTheme: carousel.pillar,
      enableResponsive: false,
      maxSlides: 10,
    },
    metadata: {
      version: '1.0.0',
      author: 'System',
      createdAt: carousel.createdAt,
      updatedAt: carousel.updatedAt,
      tags: ['auto-generated', carousel.pillar],
      category: 'auto-generated',
      description: `Auto-generated template for ${carousel.name}`,
      isOfficial: false,
      isPublic: false,
      usageCount: 0,
    },
  };
}

/**
 * Convert DOM Carousel to Canvas Content
 *
 * This converts DOM slide content to Canvas content format.
 */
export function createContentFromDOMCarousel(carousel: DOMCarousel): CarouselContent {
  const slides: CarouselSlide[] = carousel.slides.map((slide, index) => {
    const contentFieldsArray = createContentFieldsFromSlide(slide);
    // Convert ContentField[] to Record<string, any>
    const contentFields: Record<string, any> = {};
    contentFieldsArray.forEach(field => {
      contentFields[field.id] = field.defaultValue;
    });

    return {
      slideNumber: index + 1,
      contentFields,
    };
  });

  return { slides };
}

/**
 * Create Canvas elements from DOM slide
 */
function createElementsFromSlide(
  slide: Slide,
  theme: any,
  pillar: string
): CanvasElement[] {
  const elements: CanvasElement[] = [];

  // Create text element for headline
  if (slide.content.headline) {
    const headlineValue = typeof slide.content.headline === 'string' ? slide.content.headline : slide.content.headline.value;
    if (headlineValue) {
      elements.push({
        id: 'headline',
        type: 'text',
        name: 'Headline',
        x: 100,
        y: 100,
        width: 880,
        height: 200,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: false,
        zIndex: 10,
        data: {
          content: headlineValue,
          fontSize: 72,
          fontFamily: 'Arial',
          fontWeight: 'bold',
          color: theme.textColor || '#FFFFFF',
          alignment: 'center',
          lineHeight: 1.2,
        },
      });
    }
  }

  // Create text element for subtext
  if (slide.content.subtext) {
    const subtextValue = typeof slide.content.subtext === 'string' ? slide.content.subtext : slide.content.subtext.value;
    if (subtextValue) {
      elements.push({
        id: 'subtext',
        type: 'text',
        name: 'Subtext',
        x: 100,
        y: 320,
        width: 880,
        height: 150,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: false,
        zIndex: 9,
        data: {
          content: subtextValue,
          fontSize: 36,
          fontFamily: 'Arial',
          fontWeight: 'normal',
          color: theme.textColor || '#FFFFFF',
          alignment: 'center',
          lineHeight: 1.4,
        },
      });
    }
  }

  // Create text element for bullets
  if (slide.content.bullets) {
    const bulletsValue = Array.isArray(slide.content.bullets)
      ? slide.content.bullets
      : typeof slide.content.bullets === 'string'
      ? slide.content.bullets
      : slide.content.bullets.value;

    if (Array.isArray(bulletsValue) && bulletsValue.length > 0) {
      elements.push({
        id: 'bullets',
        type: 'text',
        name: 'Bullets',
        x: 150,
        y: 400,
        width: 780,
        height: 600,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: false,
        zIndex: 8,
        data: {
          content: bulletsValue.map((b: string) => `• ${b}`).join('\n'),
          fontSize: 32,
          fontFamily: 'Arial',
          fontWeight: 'normal',
          color: theme.textColor || '#FFFFFF',
          alignment: 'left',
          lineHeight: 1.6,
        },
      });
    }
  }

  // Create text element for quote
  if (slide.content.quote) {
    const quoteValue = typeof slide.content.quote === 'string' ? slide.content.quote : slide.content.quote.value;
    if (quoteValue) {
      elements.push({
        id: 'quote',
        type: 'text',
        name: 'Quote',
        x: 100,
        y: 200,
        width: 880,
        height: 400,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: false,
        zIndex: 10,
        data: {
          content: `"${quoteValue}"`,
          fontSize: 48,
          fontFamily: 'Arial',
          fontWeight: 'normal',
          fontStyle: 'italic',
          color: theme.textColor || '#FFFFFF',
          alignment: 'center',
          lineHeight: 1.5,
        },
      });
    }
  }

  // Create text element for attribution
  if (slide.content.attribution) {
    const attributionValue = typeof slide.content.attribution === 'string' ? slide.content.attribution : slide.content.attribution.value;
    if (attributionValue) {
      elements.push({
        id: 'attribution',
        type: 'text',
        name: 'Attribution',
        x: 100,
        y: 620,
        width: 880,
        height: 100,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: false,
        zIndex: 9,
        data: {
          content: `- ${attributionValue}`,
          fontSize: 28,
          fontFamily: 'Arial',
          fontWeight: 'normal',
          color: theme.textColor || '#FFFFFF',
          alignment: 'center',
          lineHeight: 1.4,
        },
      });
    }
  }

  // Create image element
  if (slide.content.imageConfig) {
    const imageUrl = slide.content.imageConfig.imageUrl;
    if (imageUrl) {
      elements.push({
        id: 'image',
        type: 'image',
        name: 'Image',
        x: 100,
        y: 100,
        width: 880,
        height: 600,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: false,
        zIndex: 5,
        data: {
          url: imageUrl,
          objectFit: 'cover',
          filters: {
            blur: 0,
            grayscale: 0,
            sepia: 0,
            saturate: 100,
            brightness: 100,
            contrast: 100,
            hueRotate: 0,
            invert: 0,
          },
          borderRadius: 16,
          borderWidth: 0,
          borderColor: '#FFFFFF',
          shadow: true,
          blendMode: 'source-over',
        },
      });
    }
  }

  // Create CTA element
  if (slide.content.ctaText) {
    const ctaValue = typeof slide.content.ctaText === 'string' ? slide.content.ctaText : slide.content.ctaText.value;
    if (ctaValue) {
      elements.push({
        id: 'cta',
        type: 'cta',
        name: 'CTA',
        x: 390,
        y: 1150,
        width: 300,
        height: 80,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: false,
        zIndex: 15,
        data: {
          text: ctaValue,
          style: 'solid',
          shape: 'pill',
          backgroundColor: theme.accentColor || '#00E5FF',
          textColor: '#000000',
          borderRadius: 40,
          shadow: true,
        },
      });
    }
  }

  return elements;
}
