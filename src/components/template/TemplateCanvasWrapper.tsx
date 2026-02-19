'use client';

import dynamic from 'next/dynamic';
import type { CanvasElement } from '@/types/canvas-templates';

const TemplateCanvas = dynamic(
  () => import('./TemplateCanvas').then(mod => ({ default: mod.TemplateCanvas })),
  { ssr: false }
);

interface TemplateCanvasWrapperProps {
  template: {
    settings: {
      width: number;
      height: number;
      backgroundColor: string;
    };
    elements: CanvasElement[];
  };
  selectedIds: string[];
  onElementSelect: (id: string) => void;
  zoom: number;
  pan: { x: number; y: number };
}

export function TemplateCanvasWrapper(props: TemplateCanvasWrapperProps) {
  return <TemplateCanvas {...props} />;
}
