/**
 * Migration Validation Utilities
 *
 * Provides validation functions for migrated templates and carousels
 */

import type { CanvasTemplate } from '@/types/canvas-templates';
import type { Slide } from '@/types/slide';

/**
 * Validation result
 */
export interface ValidationResult {
  /**
   * Whether the validation passed
   */
  isValid: boolean;

  /**
   * Validation errors (critical issues)
   */
  errors: ValidationError[];

  /**
   * Validation warnings (non-critical issues)
   */
  warnings: ValidationWarning[];

  /**
   * Validation info (informational messages)
   */
  info: ValidationInfo[];
}

/**
 * Validation error
 */
export interface ValidationError {
  code: string;
  message: string;
  path: string;
  severity: 'error';
}

/**
 * Validation warning
 */
export interface ValidationWarning {
  code: string;
  message: string;
  path: string;
  severity: 'warning';
}

/**
 * Validation info
 */
export interface ValidationInfo {
  code: string;
  message: string;
  path: string;
  severity: 'info';
}

/**
 * Validation options
 */
export interface ValidationOptions {
  /**
   * Whether to check element positions
   * @default true
   */
  checkPositions?: boolean;

  /**
   * Whether to check content field mappings
   * @default true
   */
  checkContentFields?: boolean;

  /**
   * Whether to check metadata completeness
   * @default true
   */
  checkMetadata?: boolean;

  /**
   * Strict mode (warnings become errors)
   * @default false
   */
  strict?: boolean;
}

/**
 * Default validation options
 */
const defaultOptions: Required<ValidationOptions> = {
  checkPositions: true,
  checkContentFields: true,
  checkMetadata: true,
  strict: false,
};

/**
 * Validate a CanvasTemplate
 */
export function validateCanvasTemplate(
  template: CanvasTemplate,
  options: ValidationOptions = {}
): ValidationResult {
  const opts = { ...defaultOptions, ...options };
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  const info: ValidationInfo[] = [];

  // Validate required fields
  if (!template.id) {
    errors.push({
      code: 'MISSING_ID',
      message: 'Template is missing ID',
      path: 'id',
      severity: 'error',
    });
  }

  if (!template.name) {
    errors.push({
      code: 'MISSING_NAME',
      message: 'Template is missing name',
      path: 'name',
      severity: 'error',
    });
  }

  if (!template.description) {
    warnings.push({
      code: 'MISSING_DESCRIPTION',
      message: 'Template is missing description',
      path: 'description',
      severity: 'warning',
    });
  }

  // Validate elements
  if (!template.elements || template.elements.length === 0) {
    errors.push({
      code: 'NO_ELEMENTS',
      message: 'Template has no elements',
      path: 'elements',
      severity: 'error',
    });
  } else {
    info.push({
      code: 'ELEMENT_COUNT',
      message: `Template has ${template.elements.length} elements`,
      path: 'elements',
      severity: 'info',
    });

    // Validate each element
    template.elements.forEach((element, index) => {
      validateElement(element, index, opts, errors, warnings);
    });
  }

  // Validate settings
  if (!template.settings) {
    errors.push({
      code: 'MISSING_SETTINGS',
      message: 'Template is missing settings',
      path: 'settings',
      severity: 'error',
    });
  } else {
    validateSettings(template.settings, opts, errors, warnings);
  }

  // Validate metadata
  if (opts.checkMetadata) {
    validateMetadata(template.metadata, opts, errors, warnings, info);
  }

  // Convert warnings to errors if strict mode
  if (opts.strict) {
    warnings.forEach(warning => {
      errors.push({
        code: warning.code,
        message: warning.message,
        path: warning.path,
        severity: 'error',
      });
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    info,
  };
}

/**
 * Validate a single element
 */
function validateElement(
  element: any,
  index: number,
  options: Required<ValidationOptions>,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  const basePath = `elements[${index}]`;

  if (!element.id) {
    errors.push({
      code: 'ELEMENT_MISSING_ID',
      message: `Element at index ${index} is missing ID`,
      path: `${basePath}.id`,
      severity: 'error',
    });
  }

  if (!element.type) {
    errors.push({
      code: 'ELEMENT_MISSING_TYPE',
      message: `Element ${element.id || index} is missing type`,
      path: `${basePath}.type`,
      severity: 'error',
    });
  }

  const validTypes = ['text', 'image', 'background', 'decorator', 'cta', 'shape'];
  if (element.type && !validTypes.includes(element.type)) {
    errors.push({
      code: 'INVALID_ELEMENT_TYPE',
      message: `Element ${element.id} has invalid type: ${element.type}`,
      path: `${basePath}.type`,
      severity: 'error',
    });
  }

  // Validate positions if enabled
  if (options.checkPositions) {
    if (typeof element.x !== 'number' || element.x < 0) {
      errors.push({
        code: 'INVALID_X_POSITION',
        message: `Element ${element.id} has invalid x position`,
        path: `${basePath}.x`,
        severity: 'error',
      });
    }

    if (typeof element.y !== 'number' || element.y < 0) {
      errors.push({
        code: 'INVALID_Y_POSITION',
        message: `Element ${element.id} has invalid y position`,
        path: `${basePath}.y`,
        severity: 'error',
      });
    }

    if (typeof element.width !== 'number' || element.width <= 0) {
      errors.push({
        code: 'INVALID_WIDTH',
        message: `Element ${element.id} has invalid width`,
        path: `${basePath}.width`,
        severity: 'error',
      });
    }

    if (typeof element.height !== 'number' || element.height <= 0) {
      errors.push({
        code: 'INVALID_HEIGHT',
        message: `Element ${element.id} has invalid height`,
        path: `${basePath}.height`,
        severity: 'error',
      });
    }
  }

  // Validate element data
  if (!element.data) {
    warnings.push({
      code: 'ELEMENT_NO_DATA',
      message: `Element ${element.id} has no data`,
      path: `${basePath}.data`,
      severity: 'warning',
    });
  }
}

/**
 * Validate template settings
 */
function validateSettings(
  settings: any,
  options: Required<ValidationOptions>,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  const basePath = 'settings';

  if (typeof settings.width !== 'number' || settings.width <= 0) {
    errors.push({
      code: 'INVALID_WIDTH',
      message: 'Template has invalid width',
      path: `${basePath}.width`,
      severity: 'error',
    });
  }

  if (typeof settings.height !== 'number' || settings.height <= 0) {
    errors.push({
      code: 'INVALID_HEIGHT',
      message: 'Template has invalid height',
      path: `${basePath}.height`,
      severity: 'error',
    });
  }

  if (!settings.backgroundColor) {
    warnings.push({
      code: 'MISSING_BG_COLOR',
      message: 'Template is missing background color',
      path: `${basePath}.backgroundColor`,
      severity: 'warning',
    });
  }

  // Validate content fields if enabled
  if (options.checkContentFields) {
    if (!settings.contentFields || settings.contentFields.length === 0) {
      warnings.push({
        code: 'NO_CONTENT_FIELDS',
        message: 'Template has no content fields',
        path: `${basePath}.contentFields`,
        severity: 'warning',
      });
    } else {
      settings.contentFields.forEach((field: any, index: number) => {
        validateContentField(field, index, errors, warnings);
      });
    }
  }
}

/**
 * Validate a content field
 */
function validateContentField(
  field: any,
  index: number,
  errors: ValidationError[],
  warnings: ValidationWarning[]
): void {
  const basePath = `settings.contentFields[${index}]`;

  if (!field.id) {
    errors.push({
      code: 'FIELD_MISSING_ID',
      message: `Content field at index ${index} is missing ID`,
      path: `${basePath}.id`,
      severity: 'error',
    });
  }

  if (!field.name) {
    errors.push({
      code: 'FIELD_MISSING_NAME',
      message: `Content field ${field.id || index} is missing name`,
      path: `${basePath}.name`,
      severity: 'error',
    });
  }

  if (!field.type) {
    errors.push({
      code: 'FIELD_MISSING_TYPE',
      message: `Content field ${field.id || index} is missing type`,
      path: `${basePath}.type`,
      severity: 'error',
    });
  }

  if (!field.elementId) {
    errors.push({
      code: 'FIELD_NO_ELEMENT',
      message: `Content field ${field.id || index} has no element ID`,
      path: `${basePath}.elementId`,
      severity: 'error',
    });
  }

  const validTypes = ['text', 'image', 'color', 'number', 'boolean', 'select', 'textarea'];
  if (field.type && !validTypes.includes(field.type)) {
    errors.push({
      code: 'INVALID_FIELD_TYPE',
      message: `Content field ${field.id || index} has invalid type: ${field.type}`,
      path: `${basePath}.type`,
      severity: 'error',
    });
  }
}

/**
 * Validate template metadata
 */
function validateMetadata(
  metadata: any,
  options: Required<ValidationOptions>,
  errors: ValidationError[],
  warnings: ValidationWarning[],
  info: ValidationInfo[]
): void {
  const basePath = 'metadata';

  if (!metadata) {
    errors.push({
      code: 'MISSING_METADATA',
      message: 'Template is missing metadata',
      path: basePath,
      severity: 'error',
    });
    return;
  }

  if (!metadata.version) {
    warnings.push({
      code: 'MISSING_VERSION',
      message: 'Template metadata is missing version',
      path: `${basePath}.version`,
      severity: 'warning',
    });
  }

  if (!metadata.author) {
    warnings.push({
      code: 'MISSING_AUTHOR',
      message: 'Template metadata is missing author',
      path: `${basePath}.author`,
      severity: 'warning',
    });
  }

  if (!metadata.createdAt) {
    warnings.push({
      code: 'MISSING_CREATED_AT',
      message: 'Template metadata is missing createdAt timestamp',
      path: `${basePath}.createdAt`,
      severity: 'warning',
    });
  }

  if (!metadata.updatedAt) {
    warnings.push({
      code: 'MISSING_UPDATED_AT',
      message: 'Template metadata is missing updatedAt timestamp',
      path: `${basePath}.updatedAt`,
      severity: 'warning',
    });
  }

  if (!metadata.category) {
    info.push({
      code: 'NO_CATEGORY',
      message: 'Template has no category',
      path: `${basePath}.category`,
      severity: 'info',
    });
  }

  if (metadata.tags && metadata.tags.length === 0) {
    info.push({
      code: 'NO_TAGS',
      message: 'Template has no tags',
      path: `${basePath}.tags`,
      severity: 'info',
    });
  }
}

/**
 * Validate a Slide (for comparison before/after migration)
 */
export function validateSlide(slide: Slide): ValidationResult {
  const errors: ValidationError[] = [];
  const warnings: ValidationWarning[] = [];
  const info: ValidationInfo[] = [];

  if (!slide.id) {
    errors.push({
      code: 'MISSING_ID',
      message: 'Slide is missing ID',
      path: 'id',
      severity: 'error',
    });
  }

  if (!slide.type) {
    errors.push({
      code: 'MISSING_TYPE',
      message: 'Slide is missing type',
      path: 'type',
      severity: 'error',
    });
  }

  if (!slide.content) {
    errors.push({
      code: 'NO_CONTENT',
      message: 'Slide has no content',
      path: 'content',
      severity: 'error',
    });
  }

  const hasContent = Object.keys(slide.content || {}).length > 0;
  if (hasContent) {
    info.push({
      code: 'CONTENT_FIELDS',
      message: `Slide has ${Object.keys(slide.content).length} content fields`,
      path: 'content',
      severity: 'info',
    });
  } else {
    warnings.push({
      code: 'EMPTY_CONTENT',
      message: 'Slide has empty content',
      path: 'content',
      severity: 'warning',
    });
  }

  return {
    isValid: errors.length === 0,
    errors,
    warnings,
    info,
  };
}

/**
 * Generate validation report
 */
export function generateValidationReport(result: ValidationResult, name: string): string {
  const lines: string[] = [];

  lines.push(`\n${'='.repeat(60)}`);
  lines.push(`Validation Report: ${name}`);
  lines.push(`${'='.repeat(60)}`);

  lines.push(`\nStatus: ${result.isValid ? '✓ VALID' : '✗ INVALID'}`);

  if (result.errors.length > 0) {
    lines.push(`\nErrors (${result.errors.length}):`);
    result.errors.forEach((error, index) => {
      lines.push(`  ${index + 1}. [${error.code}] ${error.message}`);
      lines.push(`     Path: ${error.path}`);
    });
  }

  if (result.warnings.length > 0) {
    lines.push(`\nWarnings (${result.warnings.length}):`);
    result.warnings.forEach((warning, index) => {
      lines.push(`  ${index + 1}. [${warning.code}] ${warning.message}`);
      lines.push(`     Path: ${warning.path}`);
    });
  }

  if (result.info.length > 0) {
    lines.push(`\nInfo (${result.info.length}):`);
    result.info.forEach((info, index) => {
      lines.push(`  ${index + 1}. [${info.code}] ${info.message}`);
      lines.push(`     Path: ${info.path}`);
    });
  }

  lines.push(`\n${'='.repeat(60)}\n`);

  return lines.join('\n');
}