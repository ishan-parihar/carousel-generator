#!/usr/bin/env tsx

/**
 * Migration Script: DOM Templates → Canvas Templates
 *
 * Converts existing ArcTemplate definitions to CanvasTemplate format
 *
 * Usage:
 *   npx tsx scripts/migrate-dom-templates.ts
 */

import fs from 'fs';
import path from 'path';
import { titanArc, quickArc, arcTemplateList } from '../src/config/arc-templates/titan-arc';
import { migrateArcTemplateToCanvasTemplate, validateMigratedTemplate } from '../src/lib/migration/template-migrator';
import type { CanvasTemplate } from '../src/types/canvas-templates';
import { generateValidationReport } from '../src/lib/migration/validation';

// Configuration
const OUTPUT_DIR = path.join(process.cwd(), 'templates', 'official');
const BACKUP_DIR = path.join(process.cwd(), 'data', 'backups');

// Ensure directories exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  console.log(`✓ Created output directory: ${OUTPUT_DIR}`);
}

if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  console.log(`✓ Created backup directory: ${BACKUP_DIR}`);
}

/**
 * Backup existing templates
 */
function backupExistingTemplates(): void {
  const backupPath = path.join(BACKUP_DIR, `templates-backup-${Date.now()}.json`);

  if (fs.existsSync(OUTPUT_DIR)) {
    const files = fs.readdirSync(OUTPUT_DIR);
    const backupData: Record<string, any> = {};

    files.forEach(file => {
      if (file.endsWith('.json')) {
        const filePath = path.join(OUTPUT_DIR, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        backupData[file] = JSON.parse(content);
      }
    });

    if (Object.keys(backupData).length > 0) {
      fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2));
      console.log(`✓ Backed up ${Object.keys(backupData).length} templates to: ${backupPath}`);
    }
  }
}

/**
 * Save template to file
 */
function saveTemplate(template: CanvasTemplate): void {
  const filePath = path.join(OUTPUT_DIR, `${template.id}.json`);
  fs.writeFileSync(filePath, JSON.stringify(template, null, 2));
  console.log(`  ✓ Saved: ${template.name} (${template.id}.json)`);
}

/**
 * Main migration function
 */
async function main() {
  console.log('\n' + '='.repeat(60));
  console.log('DOM Templates → Canvas Templates Migration');
  console.log('='.repeat(60) + '\n');

  // Step 1: Backup existing templates
  console.log('Step 1: Backing up existing templates...');
  backupExistingTemplates();
  console.log('');

  // Step 2: Migrate templates
  console.log('Step 2: Migrating templates...');
  const migratedTemplates: CanvasTemplate[] = [];
  const migrationResults: any[] = [];

  for (const arcTemplate of arcTemplateList) {
    console.log(`\nMigrating: ${arcTemplate.name} (${arcTemplate.id})`);

    try {
      // Migrate template
      const result = migrateArcTemplateToCanvasTemplate(arcTemplate);
      migratedTemplates.push(result.template);
      migrationResults.push({
        templateId: arcTemplate.id,
        templateName: arcTemplate.name,
        ...result.metadata,
      });

      // Validate template
      const validation = validateMigratedTemplate(result.template);

      if (!validation.isValid) {
        console.log(`  ✗ Validation failed: ${validation.errors.join(', ')}`);
        console.log(`  Warnings: ${validation.warnings.join(', ')}`);
      } else {
        console.log(`  ✓ Validation passed`);
        if (validation.warnings.length > 0) {
          console.log(`  Warnings: ${validation.warnings.join(', ')}`);
        }
      }

      // Save template
      saveTemplate(result.template);

      // Print migration metadata
      console.log(`  Metadata:`);
      console.log(`    - Slides: ${result.metadata.slideCount}`);
      console.log(`    - Content fields: ${result.metadata.contentFieldCount}`);
      console.log(`    - Elements: ${result.metadata.elementCount}`);
    } catch (error) {
      console.error(`  ✗ Migration failed: ${error instanceof Error ? error.message : 'Unknown error'}`);
      console.error(error);
    }
  }

  // Step 3: Generate summary
  console.log('\n' + '='.repeat(60));
  console.log('Migration Summary');
  console.log('='.repeat(60) + '\n');

  const totalTemplates = migratedTemplates.length;
  const totalSlides = migrationResults.reduce((sum, r) => sum + r.slideCount, 0);
  const totalContentFields = migrationResults.reduce((sum, r) => sum + r.contentFieldCount, 0);
  const totalElements = migrationResults.reduce((sum, r) => sum + r.elementCount, 0);
  const totalWarnings = migrationResults.reduce((sum, r) => sum + r.warnings.length, 0);

  console.log(`Templates migrated: ${totalTemplates}`);
  console.log(`Total slides: ${totalSlides}`);
  console.log(`Total content fields: ${totalContentFields}`);
  console.log(`Total elements: ${totalElements}`);
  console.log(`Total warnings: ${totalWarnings}`);

  // Step 4: Save migration report
  const reportPath = path.join(BACKUP_DIR, `migration-report-${Date.now()}.json`);
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      totalTemplates,
      totalSlides,
      totalContentFields,
      totalElements,
      totalWarnings,
    },
    results: migrationResults,
  };

  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  console.log(`\n✓ Migration report saved to: ${reportPath}`);

  // Step 5: Generate index file
  const indexPath = path.join(OUTPUT_DIR, 'index.json');
  const index = {
    version: '1.0.0',
    generatedAt: new Date().toISOString(),
    templates: migratedTemplates.map(t => ({
      id: t.id,
      name: t.name,
      description: t.description,
      category: t.metadata.category,
      tags: t.metadata.tags,
      difficulty: t.metadata.difficulty,
      estimatedTime: t.metadata.estimatedTime,
      slideCount: t.settings.maxSlides,
      contentFieldCount: t.settings.contentFields.length,
    })),
  };

  fs.writeFileSync(indexPath, JSON.stringify(index, null, 2));
  console.log(`✓ Template index saved to: ${indexPath}`);

  console.log('\n' + '='.repeat(60));
  console.log('Migration Complete!');
  console.log('='.repeat(60) + '\n');
}

// Run migration
main().catch(error => {
  console.error('\n✗ Migration failed with error:');
  console.error(error);
  process.exit(1);
});