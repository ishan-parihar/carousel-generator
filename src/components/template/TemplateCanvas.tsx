'use client';

import React from 'react';
import { Stage, Layer } from 'react-konva';
import { TextElement } from '@/canvas-editor/elements/TextElement';
import { ImageElement } from '@/canvas-editor/elements/ImageElement';
import { BackgroundElement } from '@/canvas-editor/elements/BackgroundElement';
import { DecoratorElement } from '@/canvas-editor/elements/DecoratorElement';
import { CTAElement } from '@/canvas-editor/elements/CTAElement';
import type { CanvasElement } from '@/types/canvas-templates';

interface TemplateCanvasProps {
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

export function TemplateCanvas({ template, selectedIds, onElementSelect, zoom, pan }: TemplateCanvasProps) {
  return (
    <div
      style={{
        transform: `scale(${zoom}) translate(${pan.x}px, ${pan.y}px)`,
        transformOrigin: 'center center',
      }}
    >
      <Stage
        width={template.settings.width}
        height={template.settings.height}
        style={{
          backgroundColor: template.settings.backgroundColor,
          boxShadow: '0 0 100px rgba(0, 0, 0, 0.5)',
        }}
      >
        <Layer>
          {template.elements.map((element) => {
            const isSelected = selectedIds.includes(element.id);
            switch (element.type) {
              case 'text':
                return (
                  <TextElement
                    key={element.id}
                    element={element}
                    isSelected={isSelected}
                    onSelect={() => onElementSelect(element.id)}
                    onTransform={() => {}}
                  />
                );
              case 'image':
                return (
                  <ImageElement
                    key={element.id}
                    element={element}
                    isSelected={isSelected}
                    onSelect={() => onElementSelect(element.id)}
                    onTransform={() => {}}
                  />
                );
              case 'background':
                return (
                  <BackgroundElement
                    key={element.id}
                    element={element}
                    isSelected={isSelected}
                    onSelect={() => onElementSelect(element.id)}
                    onTransform={() => {}}
                  />
                );
              case 'decorator':
                return (
                  <DecoratorElement
                    key={element.id}
                    element={element}
                    isSelected={isSelected}
                    onSelect={() => onElementSelect(element.id)}
                    onTransform={() => {}}
                  />
                );
              case 'cta':
                return (
                  <CTAElement
                    key={element.id}
                    element={element}
                    isSelected={isSelected}
                    onSelect={() => onElementSelect(element.id)}
                    onTransform={() => {}}
                  />
                );
              default:
                return null;
            }
          })}
        </Layer>
      </Stage>
    </div>
  );
}
