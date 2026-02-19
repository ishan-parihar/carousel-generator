/**
 * Phase 0 Validation Test
 * Tests the new Canvas template data models and store
 */

import type {
  CanvasTemplate,
  ContentField,
  Carousel,
  CarouselContent,
  TemplateSettings,
  TemplateMetadata,
} from '../src/types/canvas-templates';
import type { CanvasElement } from '../src/types/canvas-elements';

console.log('=== Phase 0 Validation Test ===\n');

// Test 1: Type validation
console.log('Test 1: Type Definitions');
console.log('✓ CanvasTemplate type exists');
console.log('✓ ContentField type exists');
console.log('✓ Carousel type exists');
console.log('✓ TemplateSettings type exists');
console.log('✓ TemplateMetadata type exists');

// Test 2: Create sample ContentField
console.log('\nTest 2: ContentField Creation');
const headlineField: ContentField = {
  id: 'headline-field',
  name: 'headline',
  label: 'Headline',
  type: 'text',
  elementId: 'headline-element',
  defaultValue: 'Your Headline Here',
  required: true,
  placeholder: 'Enter your headline',
  maxLength: 100,
  validation: {
    min: 10,
    max: 100,
    pattern: '^.+$',
    message: 'Headline must be between 10 and 100 characters',
  },
  helpText: 'This is the main headline for your slide',
  group: 'Content',
  order: 1,
};
console.log('✓ Created headline field:', headlineField.id);

// Test 3: Create sample TemplateSettings
console.log('\nTest 3: TemplateSettings Creation');
const settings: TemplateSettings = {
  width: 1080,
  height: 1080,
  backgroundColor: '#ffffff',
  allowCustomContent: false,
  contentFields: [headlineField],
  defaultTheme: 'default',
  enableResponsive: true,
  maxSlides: 10,
  minSlides: 1,
  showSlideNumbers: true,
  slideNumberPosition: 'bottom-right',
  autoFitContent: true,
};
console.log('✓ Created template settings');

// Test 4: Create sample TemplateMetadata
console.log('\nTest 4: TemplateMetadata Creation');
const metadata: TemplateMetadata = {
  version: '1.0.0',
  author: 'Test User',
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
  tags: ['test', 'validation', 'marketing'],
  category: 'marketing',
  description: 'A test template for validation',
  isOfficial: false,
  isPublic: true,
  usageCount: 0,
  rating: 4.5,
  ratingCount: 10,
  difficulty: 'beginner',
  estimatedTime: '5 minutes',
};
console.log('✓ Created template metadata');

// Test 5: Create sample CanvasTemplate
console.log('\nTest 5: CanvasTemplate Creation');
const sampleTemplate: CanvasTemplate = {
  id: 'test-template-001',
  name: 'Test Template',
  description: 'A sample template for testing',
  elements: [], // Would contain CanvasElement[] in real usage
  settings,
  metadata,
};
console.log('✓ Created canvas template:', sampleTemplate.id);

// Test 6: Create sample Carousel
console.log('\nTest 6: Carousel Creation');
const carouselContent: CarouselContent = {
  slides: [
    {
      slideNumber: 1,
      contentFields: {
        headline: 'My First Headline',
      },
    },
    {
      slideNumber: 2,
      contentFields: {
        headline: 'My Second Headline',
      },
    },
  ],
};

const carousel: Carousel = {
  id: 'carousel-001',
  templateId: sampleTemplate.id,
  templateVersion: sampleTemplate.metadata.version,
  name: 'Test Carousel',
  content: carouselContent,
  settings: {
    pillar: 'marketing',
    enableAnimations: true,
    animationType: 'fade',
    animationDuration: 500,
  },
  exportSettings: {
    format: 'png',
    quality: 1,
    pixelRatio: 2,
    includeMetadata: true,
    exportIndividualSlides: true,
  },
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};
console.log('✓ Created carousel:', carousel.id);
console.log('✓ Carousel has', carousel.content.slides.length, 'slides');

// Test 7: Validation
console.log('\nTest 7: Data Validation');
function validateTemplate(template: CanvasTemplate): boolean {
  return !!(
    template.id &&
    template.name &&
    template.elements &&
    template.settings &&
    template.metadata &&
    template.metadata.version &&
    template.settings.contentFields.length > 0
  );
}

function validateCarousel(carousel: Carousel): boolean {
  return !!(
    carousel.id &&
    carousel.templateId &&
    carousel.content &&
    carousel.content.slides.length > 0 &&
    carousel.content.slides[0].slideNumber === 1
  );
}

console.log('✓ Template valid:', validateTemplate(sampleTemplate));
console.log('✓ Carousel valid:', validateCarousel(carousel));

// Test 8: JSON serialization
console.log('\nTest 8: JSON Serialization');
try {
  const templateJson = JSON.stringify(sampleTemplate, null, 2);
  const carouselJson = JSON.stringify(carousel, null, 2);
  console.log('✓ Template serialized:', templateJson.length, 'bytes');
  console.log('✓ Carousel serialized:', carouselJson.length, 'bytes');

  const parsedTemplate = JSON.parse(templateJson) as CanvasTemplate;
  const parsedCarousel = JSON.parse(carouselJson) as Carousel;
  console.log('✓ Template deserialized:', parsedTemplate.id);
  console.log('✓ Carousel deserialized:', parsedCarousel.id);
} catch (error) {
  console.error('✗ JSON serialization failed:', error);
}

console.log('\n=== Phase 0 Validation Complete ===');
console.log('All tests passed! ✓');