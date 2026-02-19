/**
 * Canvas Template System
 * Core data model for Canva-like template system
 *
 * This module defines the data structures for the template-centric architecture
 * where CanvasElement is the source of truth and templates are reusable.
 */

import type { CanvasElement } from './canvas-elements';

// Re-export CanvasElement for convenience
export type { CanvasElement } from './canvas-elements';

/**
 * Content field type for templates
 * Defines what kind of content a user can provide when generating a carousel
 */
export type ContentFieldType =
  | 'text'      // Single line or multi-line text
  | 'image'     // Image URL or upload
  | 'color'     // Color picker
  | 'number'    // Numeric input
  | 'boolean'   // Toggle/checkbox
  | 'select'    // Dropdown selection
  | 'textarea'; // Multi-line text area

/**
 * Content field definition
 * Defines a field that users can fill in when generating a carousel from a template
 * Each field is linked to a specific CanvasElement via elementId
 */
export interface ContentField {
  /** Unique identifier for this field */
  id: string;

  /** Display name for the field (shown in UI) */
  name: string;

  /** Label shown to users (e.g., "Headline", "Background Image") */
  label: string;

  /** Type of content this field accepts */
  type: ContentFieldType;

  /** ID of the CanvasElement this field maps to */
  elementId: string;

  /** Default value when no content is provided */
  defaultValue: any;

  /** Whether this field is required for carousel generation */
  required: boolean;

  /** Placeholder text for text fields */
  placeholder?: string;

  /** Maximum length for text fields */
  maxLength?: number;

  /** Available options for select fields */
  options?: string[];

  /** Validation rules for the field */
  validation?: {
    /** Minimum value for number fields */
    min?: number;

    /** Maximum value for number fields */
    max?: number;

    /** Regex pattern for validation */
    pattern?: string;

    /** Custom validation message */
    message?: string;
  };

  /** Optional help text shown to users */
  helpText?: string;

  /** Group this field belongs to (for organization) */
  group?: string;

  /** Order of this field in the form */
  order?: number;
}

/**
 * Template settings
 * Global settings that apply to the entire template
 */
export interface TemplateSettings {
  /** Canvas width in pixels */
  width: number;

  /** Canvas height in pixels */
  height: number;

  /** Default background color */
  backgroundColor: string;

  /** Whether users can add custom content beyond defined fields */
  allowCustomContent: boolean;

  /** List of content fields users can fill in */
  contentFields: ContentField[];

  /** Default theme to apply (optional) */
  defaultTheme?: string;

  /** Whether responsive scaling is enabled */
  enableResponsive?: boolean;

  /** Maximum number of slides in carousel using this template */
  maxSlides?: number;

  /** Minimum number of slides */
  minSlides?: number;

  /** Whether slide numbers are shown by default */
  showSlideNumbers?: boolean;

  /** Default slide number position */
  slideNumberPosition?: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';

  /** Whether to auto-fit content to elements */
  autoFitContent?: boolean;
}

/**
 * Template metadata
 * Metadata for template management and discovery
 */
export interface TemplateMetadata {
  /** Semantic version (e.g., "1.0.0") */
  version: string;

  /** Template author/creator */
  author: string;

  /** ISO 8601 timestamp of creation */
  createdAt: string;

  /** ISO 8601 timestamp of last update */
  updatedAt: string;

  /** Tags for search and categorization */
  tags: string[];

  /** Primary category (e.g., "marketing", "education", "social") */
  category: string;

  /** Human-readable description */
  description: string;

  /** Thumbnail image URL or base64 data */
  thumbnail?: string;

  /** Whether this is an official template */
  isOfficial: boolean;

  /** Whether this template is publicly visible */
  isPublic: boolean;

  /** Number of times this template has been used */
  usageCount: number;

  /** Average rating (0-5) */
  rating?: number;

  /** Number of ratings */
  ratingCount?: number;

  /** Difficulty level for users */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';

  /** Estimated time to create content */
  estimatedTime?: string;

  /** Related template IDs */
  relatedTemplates?: string[];

  /** Parent template ID (for variations) */
  parentTemplateId?: string;
}

/**
 * Canvas Template
 * Complete template definition containing all elements, settings, and metadata
 * This is the source of truth for carousel generation
 */
export interface CanvasTemplate {
  /** Unique identifier for this template */
  id: string;

  /** Human-readable name */
  name: string;

  /** Brief description of the template */
  description: string;

  /** All canvas elements that make up the template */
  elements: CanvasElement[];

  /** Global template settings */
  settings: TemplateSettings;

  /** Template metadata */
  metadata: TemplateMetadata;
}

/**
 * Carousel generated from template
 * Represents a specific instance of a carousel created from a template
 */
export interface Carousel {
  /** Unique identifier for this carousel */
  id: string;

  /** ID of the template this carousel is based on */
  templateId: string;

  /** Version of the template used */
  templateVersion: string;

  /** User-provided name for this carousel */
  name: string;

  /** Content that fills the template fields */
  content: CarouselContent;

  /** Carousel-specific settings */
  settings: CarouselSettings;

  /** Export configuration */
  exportSettings: ExportSettings;

  /** ISO 8601 timestamp of creation */
  createdAt: string;

  /** ISO 8601 timestamp of last update */
  updatedAt: string;
}

/**
 * Carousel content
 * User-provided content that fills template fields for each slide
 */
export interface CarouselContent {
  /** Array of slide content */
  slides: CarouselSlide[];
}

/**
 * Carousel slide
 * Content for a single slide in the carousel
 */
export interface CarouselSlide {
  /** Slide number (1-indexed) */
  slideNumber: number;

  /** Content field values (field ID -> value) */
  contentFields: Record<string, any>;

  /** Optional slide-specific overrides */
  overrides?: {
    /** Override background color */
    backgroundColor?: string;

    /** Override decorator settings */
    decoratorConfig?: any;

    /** Custom elements added to this slide */
    customElements?: CanvasElement[];
  };
}

/**
 * Carousel settings
 * Settings specific to this carousel instance
 */
export interface CarouselSettings {
  /** Content pillar (e.g., "marketing", "education") */
  pillar: string;

  /** Optional background pack ID */
  backgroundPack?: string;

  /** Optional decorator configuration */
  decoratorConfig?: any;

  /** Whether to use animations between slides */
  enableAnimations?: boolean;

  /** Animation type */
  animationType?: 'fade' | 'slide' | 'zoom' | 'none';

  /** Animation duration in milliseconds */
  animationDuration?: number;
}

/**
 * Export settings
 * Configuration for exporting the carousel
 */
export interface ExportSettings {
  /** Export format */
  format: 'png' | 'jpg' | 'pdf' | 'json' | 'gif' | 'mp4';

  /** Image quality (0-1 for PNG/JPG) */
  quality: number;

  /** Pixel ratio for high-DPI displays */
  pixelRatio: number;

  /** Whether to include metadata in export */
  includeMetadata?: boolean;

  /** Whether to export individual slides */
  exportIndividualSlides?: boolean;

  /** Whether to export as animated GIF */
  exportAsGif?: boolean;

  /** GIF frame duration in milliseconds */
  gifFrameDuration?: number;

  /** Video format settings */
  videoSettings?: {
    /** Video resolution */
    resolution: '720p' | '1080p' | '4k';

    /** Frame rate */
    fps: number;

    /** Video codec */
    codec: 'h264' | 'vp9' | 'av1';
  };
}

/**
 * Template export/import format
 * Used for sharing templates between users
 */
export interface TemplateExport {
  /** The template itself */
  template: CanvasTemplate;

  /** Export metadata */
  exportInfo: {
    /** Export timestamp */
    exportedAt: string;

    /** Export format version */
    formatVersion: string;

    /** Exporter information */
    exportedBy: string;

    /** Checksum for integrity verification */
    checksum?: string;
  };
}

/**
 * Carousel export format
 * Used for exporting carousels with all content
 */
export interface CarouselExport {
  /** The carousel */
  carousel: Carousel;

  /** The template used (for reference) */
  template: CanvasTemplate;

  /** Export metadata */
  exportInfo: {
    /** Export timestamp */
    exportedAt: string;

    /** Export format version */
    formatVersion: string;

    /** Exporter information */
    exportedBy: string;

    /** Checksum for integrity verification */
    checksum?: string;
  };
}

/**
 * Template validation result
 * Returned when validating a template
 */
export interface TemplateValidationResult {
  /** Whether the template is valid */
  isValid: boolean;

  /** List of validation errors */
  errors: ValidationError[];

  /** List of validation warnings */
  warnings: ValidationWarning[];

  /** List of validation info messages */
  info: ValidationInfo[];
}

/**
 * Validation error
 */
export interface ValidationError {
  /** Error code */
  code: string;

  /** Error message */
  message: string;

  /** Path to the invalid element (e.g., "elements[0].data.content") */
  path: string;

  /** Severity */
  severity: 'error';
}

/**
 * Validation warning
 */
export interface ValidationWarning {
  /** Warning code */
  code: string;

  /** Warning message */
  message: string;

  /** Path to the element */
  path: string;

  /** Severity */
  severity: 'warning';
}

/**
 * Validation info
 */
export interface ValidationInfo {
  /** Info code */
  code: string;

  /** Info message */
  message: string;

  /** Path to the element */
  path: string;

  /** Severity */
  severity: 'info';
}

/**
 * Template statistics
 * Usage and performance statistics for a template
 */
export interface TemplateStats {
  /** Template ID */
  templateId: string;

  /** Total usage count */
  totalUsage: number;

  /** Usage in last 30 days */
  usageLast30Days: number;

  /** Usage in last 7 days */
  usageLast7Days: number;

  /** Average time to create content (in minutes) */
  avgCreationTime: number;

  /** Most common pillar used with this template */
  topPillar: string;

  /** Most common content fields used */
  topFields: {
    fieldId: string;
    usageCount: number;
  }[];

  /** Export statistics */
  exports: {
    png: number;
    jpg: number;
    pdf: number;
    json: number;
  };
}

/**
 * Template category
 * Predefined template categories
 */
export type TemplateCategory =
  | 'marketing'
  | 'education'
  | 'social'
  | 'business'
  | 'personal'
  | 'news'
  | 'entertainment'
  | 'technology'
  | 'health'
  | 'finance'
  | 'lifestyle'
  | 'travel'
  | 'food'
  | 'sports'
  | 'music'
  | 'art'
  | 'other';

/**
 * Template sort option
 */
export type TemplateSortOption =
  | 'newest'
  | 'oldest'
  | 'popular'
  | 'rating'
  | 'name-asc'
  | 'name-desc'
  | 'usage';

/**
 * Template filter options
 */
export interface TemplateFilterOptions {
  /** Filter by category */
  category?: TemplateCategory;

  /** Filter by tags */
  tags?: string[];

  /** Filter by author */
  author?: string;

  /** Filter by difficulty */
  difficulty?: 'beginner' | 'intermediate' | 'advanced';

  /** Filter by official status */
  isOfficial?: boolean;

  /** Filter by public status */
  isPublic?: boolean;

  /** Search query */
  search?: string;

  /** Minimum rating */
  minRating?: number;

  /** Sort option */
  sort?: TemplateSortOption;

  /** Limit results */
  limit?: number;

  /** Skip results (for pagination) */
  skip?: number;
}