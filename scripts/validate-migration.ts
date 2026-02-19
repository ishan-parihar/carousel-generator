#!/usr/bin/env tsx

/**
 * Validation Script: Migration Validation
 *
 * Validates migrated templates and carousels to ensure data integrity
 *
 * Usage:
 *   npx tsx scripts/validate-migration.ts
 */

import fs from 'fs';
import path from 'path';
import { validateCanvasTemplate, generateValidationReport } from '../src/lib/migration/validation';
import { validateMigratedTemplate } from '../src/lib/migration/template-migrator';
import { validateMigratedCarousel } from '../src/lib/migration/carousel-migrator';
import type { CanvasTemplate } from '@/types/canvas-templates';

// Configuration
const TEMPLATES_DIR = path.join(process.cwd(), 'templates', 'official');
const MIGRATED_CAROUSELS_DIR = path.join(process.cwd(), 'data', 'backups');
const REPORT_FILE = path.join(process.cwd(), 'data', 'backups', `validation-report-${Date.now()}.txt`);

/**
 * Load all templates from directory
 */
function loadTemplates(): CanvasTemplate[] {
  const templates: CanvasTemplate[] = [];

  if (!fs.existsSync(TEMPLATES_DIR)) {
    console.log(`⚠ Templates directory not found: ${TEMPLATES_DIR}`);
    return templates;
  }

  const files = fs.readdirSync(TEMPLATES_DIR);
  const jsonFiles = files.filter(f => f.endsWith('.json') && f !== 'index.json');

  console.log(`Found ${jsonFiles.length} template files`);

  jsonFiles.forEach(file => {
    try {
      const filePath = path.join(TEMPLATES_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const template = JSON.parse(content) as CanvasTemplate;
      templates.push(template);
    } catch (error) {
      console.error(`  ✗ Failed to load ${file}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  });

  return templates;
}

/**
 * Load migrated carousels from directory
 */
function loadMigratedCarousels(): any[] {
  const carousels: any[] = [];

  if (!fs.existsSync(MIGRATED_CAROUSELS_DIR)) {
    console.log(`⚠ Migrated carousels directory not found: ${MIGRATED_CAROUSELS_DIR}`);
    return carousels;
  }

  const files = fs.readdirSync(MIGRATED_CAROUSELS_DIR);
  const carouselFiles = files.filter(f => f.startsWith('migrated-carousel-') && f.endsWith('.json'));

  console.log(`Found ${carouselFiles.length} migrated carousel files`);

  carouselFiles.forEach(file => {
    try {
      const filePath = path.join(MIGRATED_CAROUSELS_DIR, file);
      const content = fs.readFileSync(filePath, 'utf-8');
      const carousel = JSON.parse(content);
      carousels.push(carousel);
    } catch (error) {
      console.error(`  ✗ Failed to load ${file}: ${error instanceof Error ? error.message : 'Unknown error'}`);
    }
  });

  return carousels;
}

/**
 * Validate all templates
 */
function validateTemplates(templates: CanvasTemplate[]): {
  valid: number;
  invalid: number;
  results: any[];
} {
  console.log('\n' + '='.repeat(60));
  console.log('Validating Templates');
  console.log('='.repeat(60) + '\n');

  let valid = 0;
  let invalid = 0;
  const results: any[] = [];

  templates.forEach(template => {
    console.log(`Validating: ${template.name} (${template.id})`);

    // Validate using both validators
    const validation = validateCanvasTemplate(template, { strict: false });
    const simpleValidation = validateMigratedTemplate(template);

    // Format errors and warnings for display
    const formatError = (e: any): string => typeof e === 'string' ? e : e.message;
    const formatWarning = (w: any): string => typeof w === 'string' ? w : w.message;

    const result = {
      templateId: template.id,
      templateName: template.name,
      isValid: validation.isValid && simpleValidation.isValid,
      errors: [...validation.errors, ...simpleValidation.errors],
      warnings: [...validation.warnings, ...simpleValidation.warnings],
      info: validation.info,
    };

    if (result.isValid) {
      valid++;
      console.log(`  ✓ Valid`);
    } else {
      invalid++;
      console.log(`  ✗ Invalid: ${result.errors.map(formatError).join(', ')}`);
    }

    if (result.warnings.length > 0) {
      console.log(`  Warnings: ${result.warnings.map(formatWarning).join(', ')}`);
    }

    results.push(result);
  });

  return { valid, invalid, results };
}

/**
 * Validate all carousels
 */
function validateCarousels(carousels: any[]): {
  valid: number;
  invalid: number;
  results: any[];
} {
  console.log('\n' + '='.repeat(60));
  console.log('Validating Carousels');
  console.log('='.repeat(60) + '\n');

  let valid = 0;
  let invalid = 0;
  const results: any[] = [];

  carousels.forEach(carousel => {
    console.log(`Validating: ${carousel.name} (${carousel.id})`);

    const validation = validateMigratedCarousel(carousel);

    const result = {
      carouselId: carousel.id,
      carouselName: carousel.name,
      isValid: validation.isValid,
      errors: validation.errors,
      warnings: validation.warnings,
    };

    if (result.isValid) {
      valid++;
      console.log(`  ✓ Valid`);
    } else {
      invalid++;
      console.log(`  ✗ Invalid: ${result.errors.join(', ')}`);
    }

    if (result.warnings.length > 0) {
      console.log(`  Warnings: ${result.warnings.join(', ')}`);
    }

    results.push(result);
  });

  return { valid, invalid, results };
}

/**
 * Generate summary report
 */
function generateSummaryReport(
  templateResults: any,
  carouselResults: any
): string {
  const lines: string[] = [];

  lines.push('\n' + '='.repeat(60));
  lines.push('MIGRATION VALIDATION SUMMARY');
  lines.push('='.repeat(60));

  lines.push('\nTemplates:');
  lines.push(`  Total: ${templateResults.valid + templateResults.invalid}`);
  lines.push(`  Valid: ${templateResults.valid}`);
  lines.push(`  Invalid: ${templateResults.invalid}`);
  lines.push(`  Success rate: ${((templateResults.valid / (templateResults.valid + templateResults.invalid)) * 100).toFixed(2)}%`);

  lines.push('\nCarousels:');
  lines.push(`  Total: ${carouselResults.valid + carouselResults.invalid}`);
  lines.push(`  Valid: ${carouselResults.valid}`);
  lines.push(`  Invalid: ${carouselResults.invalid}`);
  lines.push(`  Success rate: ${((carouselResults.valid / (carouselResults.valid + carouselResults.invalid)) * 100).toFixed(2)}%`);

  // Overall status
  const totalInvalid = templateResults.invalid + carouselResults.invalid;
  const totalItems = templateResults.valid + templateResults.invalid + carouselResults.valid + carouselResults.invalid;
  const overallSuccessRate = ((totalItems - totalInvalid) / totalItems * 100).toFixed(2);

  lines.push('\nOverall:');
  lines.push(`  Total items: ${totalItems}`);
  lines.push(`  Invalid items: ${totalInvalid}`);
  lines.push(`  Overall success rate: ${overallSuccessRate}%`);

  if (totalInvalid === 0) {
    lines.push('\n✓ All validations passed! Migration was successful.');
  } else {
    lines.push('\n✗ Some validations failed. Please review the errors above.');
  }

  lines.push('\n' + '='.repeat(60));

  return lines.join('\n');
}

/**
 * Main validation function
 */
async function main() {
  console.log('\n' + '='.repeat(60));
  console.log('Migration Validation');
  console.log('='.repeat(60) + '\n');

  const reportLines: string[] = [];

  // Step 1: Load templates
  console.log('Step 1: Loading templates...');
  const templates = loadTemplates();
  console.log(`✓ Loaded ${templates.length} templates\n`);

  // Step 2: Load carousels
  console.log('Step 2: Loading migrated carousels...');
  const carousels = loadMigratedCarousels();
  console.log(`✓ Loaded ${carousels.length} carousels\n`);

  // Step 3: Validate templates
  const templateValidation = validateTemplates(templates);

  // Step 4: Validate carousels
  const carouselValidation = validateCarousels(carousels);

  // Step 5: Generate summary
  const summary = generateSummaryReport(templateValidation, carouselValidation);
  console.log(summary);

  // Step 6: Save detailed report
  console.log('\nStep 6: Saving validation report...');
  reportLines.push(summary);
  reportLines.push('\n\n');
  reportLines.push('DETAILED RESULTS');
  reportLines.push('='.repeat(60));

  // Template details
  reportLines.push('\n\nTemplate Details:\n');
  templateValidation.results.forEach(result => {
    reportLines.push(`\n${result.templateName} (${result.templateId})`);
    reportLines.push(`  Status: ${result.isValid ? '✓ Valid' : '✗ Invalid'}`);

    if (result.errors.length > 0) {
      reportLines.push(`  Errors:`);
      result.errors.forEach((error: any, index: number) => {
        if (typeof error === 'string') {
          reportLines.push(`    ${index + 1}. ${error}`);
        } else {
          reportLines.push(`    ${index + 1}. [${error.code}] ${error.message}`);
          reportLines.push(`       Path: ${error.path}`);
        }
      });
    }

    if (result.warnings.length > 0) {
      reportLines.push(`  Warnings:`);
      result.warnings.forEach((warning: any, index: number) => {
        if (typeof warning === 'string') {
          reportLines.push(`    ${index + 1}. ${warning}`);
        } else {
          reportLines.push(`    ${index + 1}. [${warning.code}] ${warning.message}`);
          reportLines.push(`       Path: ${warning.path}`);
        }
      });
    }
  });

  // Carousel details
  reportLines.push('\n\nCarousel Details:\n');
  carouselValidation.results.forEach(result => {
    reportLines.push(`\n${result.carouselName} (${result.carouselId})`);
    reportLines.push(`  Status: ${result.isValid ? '✓ Valid' : '✗ Invalid'}`);

    if (result.errors.length > 0) {
      reportLines.push(`  Errors:`);
      result.errors.forEach((error: any, index: number) => {
        if (typeof error === 'string') {
          reportLines.push(`    ${index + 1}. ${error}`);
        } else {
          reportLines.push(`    ${index + 1}. [${error.code}] ${error.message}`);
          reportLines.push(`       Path: ${error.path}`);
        }
      });
    }

    if (result.warnings.length > 0) {
      reportLines.push(`  Warnings:`);
      result.warnings.forEach((warning: any, index: number) => {
        if (typeof warning === 'string') {
          reportLines.push(`    ${index + 1}. ${warning}`);
        } else {
          reportLines.push(`    ${index + 1}. [${warning.code}] ${warning.message}`);
          reportLines.push(`       Path: ${warning.path}`);
        }
      });
    }
  });

  fs.writeFileSync(REPORT_FILE, reportLines.join('\n'));
  console.log(`✓ Validation report saved to: ${REPORT_FILE}`);

  // Exit with appropriate code
  const totalInvalid = templateValidation.invalid + carouselValidation.invalid;
  process.exit(totalInvalid > 0 ? 1 : 0);
}

// Run validation
main().catch(error => {
  console.error('\n✗ Validation failed with error:');
  console.error(error);
  process.exit(1);
});