'use client';

import dynamic from 'next/dynamic';
import { createTemplateFromDOMCarousel, createContentFromDOMCarousel } from '@/lib/bridge/dom-to-canvas-bridge';
import { Carousel } from '@/types/index';

// Dynamically import CarouselRenderer with SSR disabled to prevent Konva SSR issue
const CarouselRenderer = dynamic(
  () => import('@/components/carousel/CarouselRenderer').then(mod => ({ default: mod.CarouselRenderer })),
  { ssr: false }
);

interface RenderClientProps {
  carousel: Carousel;
  slideIndex: number;
}

export function RenderClient({ carousel, slideIndex }: RenderClientProps) {
  // Validate slide index
  if (slideIndex < 0 || slideIndex >= carousel.slides.length) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p>Invalid slide index: {slideIndex}</p>
      </div>
    );
  }

  // Phase 4: Use Canvas-based rendering
  const template = createTemplateFromDOMCarousel(carousel);
  const content = createContentFromDOMCarousel(carousel);

  return (
    <div
      className="flex items-center justify-center min-h-screen bg-gray-900"
      data-slide-ready="true"
    >
      <CarouselRenderer
        template={template}
        content={content}
        showControls={false}
        showSlideNumbers={true}
        onSlideChange={() => {}}
      />
    </div>
  );
}