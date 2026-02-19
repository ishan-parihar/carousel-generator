#!/usr/bin/env tsx

/**
 * Migration Script: Slide[] → Carousel
 *
 * Converts existing carousel data from DOM-centric to Canvas-centric format
 *
 * Usage:
 *   npx tsx scripts/migrate-carousels.ts
 */

import fs from 'fs';
import path from 'path';
import { migrateSlidesToCarousel, validateMigratedCarousel, calculateMigrationStats } from '../src/lib/migration/carousel-migrator';
import type { Slide, Carousel } from '@/types';
import type { Carousel as NewCarousel } from '@/types/canvas-templates';

// Configuration
const INPUT_FILE = path.join(process.cwd(), 'data', 'backups', 'carousel-store-backup.json');
const OUTPUT_FILE = path.join(process.cwd(), 'data', 'migrated-carousels.json');
const BACKUP_DIR = path.join(process.cwd(), 'data', 'backups');

// Ensure directories exist
if (!fs.existsSync(BACKUP_DIR)) {
  fs.mkdirSync(BACKUP_DIR, { recursive: true });
  console.log(`✓ Created backup directory: ${BACKUP_DIR}`);
}

/**
 * Backup carousel store data
 */
function backupCarouselData(data: any): void {
  const backupPath = path.join(BACKUP_DIR, `carousel-store-backup-${Date.now()}.json`);
  fs.writeFileSync(backupPath, JSON.stringify(data, null, 2));
  console.log(`✓ Backed up carousel data to: ${backupPath}`);
}

/**
 * Load carousel store data from localStorage backup
 */
function loadCarouselStoreData(): any {
  // Try to load from backup file first
  if (fs.existsSync(INPUT_FILE)) {
    console.log(`✓ Loading carousel data from: ${INPUT_FILE}`);
    const content = fs.readFileSync(INPUT_FILE, 'utf-8');
    return JSON.parse(content);
  }

  // If no backup file, try to load from localStorage simulation
  console.log('⚠ No backup file found, creating sample data...');
  return createSampleCarouselData();
}

/**
 * Create sample carousel data for testing
 */
function createSampleCarouselData(): any {
  return {
    carousel: {
      id: 'sample-carousel',
      name: 'Sample Carousel',
      pillar: 'marketing',
      slides: [
        {
          id: 'slide-1',
          type: 'title',
          content: {
            headline: { text: 'Welcome to Our Platform' },
            subtext: { text: 'Discover the future of content creation' },
          },
          order: 0,
        },
        {
          id: 'slide-2',
          type: 'content',
          content: {
            headline: { text: 'The Problem' },
            subtext: { text: 'Most people struggle with creating engaging content' },
          },
          order: 1,
        },
        {
          id: 'slide-3',
          type: 'bullets',
          content: {
            headline: { text: 'Our Solution' },
            bullets: { text: ['Feature 1', 'Feature 2', 'Feature 3'] },
          },
          order: 2,
        },
        {
          id: 'slide-4',
          type: 'cta',
          content: {
            headline: { text: 'Get Started Today' },
            ctaText: { text: 'Sign Up Now' },
          },
          order: 3,
        },
      ],
      carouselBackgroundPack: 'default',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    },
  };
}

/**
 * Save migrated carousel to file
 */
function saveMigratedCarousel(carousel: NewCarousel): void {
  const outputPath = path.join(BACKUP_DIR, `migrated-carousel-${carousel.id}.json`);
  fs.writeFileSync(outputPath, JSON.stringify(carousel, null, 2));
  console.log(`  ✓ Saved migrated carousel to: ${outputPath}`);
}

/**
 * Main migration function
 */
async function main() {
  console.log('\n' + '='.repeat(60));
  console.log('Slide[] → Carousel Migration');
  console.log('='.repeat(60) + '\n');

  // Step 1: Load carousel data
  console.log('Step 1: Loading carousel data...');
  const carouselData = loadCarouselStoreData();
  console.log('');

  // Step 2: Backup original data
  console.log('Step 2: Backing up original data...');
  backupCarouselData(carouselData);
  console.log('');

  // Step 3: Migrate carousel
  console.log('Step 3: Migrating carousel...');

  if (!carouselData.carousel) {
    console.log('✗ No carousel found in data');
    return;
  }

  const { carousel } = carouselData;
  console.log(`\nMigrating: ${carousel.name} (${carousel.id})`);
  console.log(`  Slides: ${carousel.slides.length}`);
  console.log(`  Pillar: ${carousel.pillar}`);

  try {
    // Migrate carousel
    const result = migrateSlidesToCarousel(
      carousel.slides,
      carousel.name,
      carousel.pillar,
      {
        preserveOrder: true,
        preserveStyling: true,
      }
    );

    // Validate migrated carousel
    console.log('\nValidating migrated carousel...');
    const validation = validateMigratedCarousel(result.carousel);

    if (!validation.isValid) {
      console.log(`  ✗ Validation failed:`);
      validation.errors.forEach((error, index) => {
        console.log(`    ${index + 1}. ${error}`);
      });
    } else {
      console.log(`  ✓ Validation passed`);
    }

    if (validation.warnings.length > 0) {
      console.log(`  Warnings:`);
      validation.warnings.forEach((warning, index) => {
        console.log(`    ${index + 1}. ${warning}`);
      });
    }

    // Save migrated carousel
    saveMigratedCarousel(result.carousel);

    // Calculate and display migration stats
    const stats = calculateMigrationStats(carousel.slides, result);

    console.log('\nMigration Statistics:');
    console.log(`  Original slides: ${stats.originalSlideCount}`);
    console.log(`  Migrated slides: ${stats.migratedSlideCount}`);
    console.log(`  Content fields extracted: ${stats.contentFieldsExtracted}`);
    console.log(`  Average fields per slide: ${stats.avgFieldsPerSlide.toFixed(2)}`);
    console.log(`  Warnings: ${stats.warningsCount}`);

    console.log('\nMigration Metadata:');
    console.log(`  Template ID: ${result.metadata.templateId}`);
    console.log(`  Template version: ${result.carousel.templateVersion}`);
    console.log(`  Styling preserved: ${result.metadata.stylingPreserved ? 'Yes' : 'No'}`);

    // Step 4: Save migration report
    console.log('\nStep 4: Saving migration report...');
    const reportPath = path.join(BACKUP_DIR, `carousel-migration-report-${Date.now()}.json`);
    const report = {
      timestamp: new Date().toISOString(),
      original: {
        carouselId: carousel.id,
        carouselName: carousel.name,
        pillar: carousel.pillar,
        slideCount: carousel.slides.length,
      },
      migrated: {
        carouselId: result.carousel.id,
        templateId: result.metadata.templateId,
        templateVersion: result.carousel.templateVersion,
        slideCount: result.metadata.slideCount,
        contentFieldCount: result.metadata.contentFieldCount,
      },
      statistics: stats,
      validation: {
        isValid: validation.isValid,
        errors: validation.errors,
        warnings: validation.warnings,
      },
    };

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`✓ Migration report saved to: ${reportPath}`);

    // Step 5: Update main output file
    fs.writeFileSync(OUTPUT_FILE, JSON.stringify(result.carousel, null, 2));
    console.log(`✓ Migrated carousel saved to: ${OUTPUT_FILE}`);

    console.log('\n' + '='.repeat(60));
    console.log('Migration Complete!');
    console.log('='.repeat(60) + '\n');

    console.log('Next steps:');
    console.log('  1. Review the migrated carousel');
    console.log('  2. Test rendering in the application');
    console.log('  3. Verify all content fields are correct');
    console.log('  4. Update carousel-store to use new format');

  } catch (error) {
    console.error('\n✗ Migration failed with error:');
    console.error(error);
    process.exit(1);
  }
}

// Run migration
main().catch(error => {
  console.error('\n✗ Migration failed with error:');
  console.error(error);
  process.exit(1);
});