/**
 * Template Components
 *
 * Exports all template-related components for easy importing
 *
 * @module components/template
 */

// Template Library
export { TemplateLibrary } from './TemplateLibrary';

// Template Editor
export { TemplateEditor } from './TemplateEditor';

// Content Field System
export { ContentFieldPanel } from './ContentFieldPanel';

// Re-export types if needed
export type {
  CanvasTemplate,
  ContentField,
  Carousel,
  CarouselSlide,
  TemplateSettings,
  TemplateMetadata,
} from '@/types/canvas-templates';