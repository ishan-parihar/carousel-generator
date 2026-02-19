'use client';

import React, { useState } from 'react';
import type { DecoratorConfig } from '@/types/decorators';
import { DECORATOR_PRESETS, applyDecoratorPreset } from '@/config/decorators/presets';
import { cn } from '@/lib/utils';
import { Copy, BadgeCheck, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

/**
 * DecoratorPropertyPanel Component
 *
 * Comprehensive decorator editing panel for Property Panel.
 * Matches DecoratorControls functionality but optimized for Property Panel usage.
 *
 * Features:
 * - Quick preset selection
 * - All 10 decorator types with full controls
 * - Source tracking badges
 * - Collapsible sections
 */

interface DecoratorPropertyPanelProps {
  config: Partial<DecoratorConfig>;
  onChange: (config: Partial<DecoratorConfig>) => void;
  pillarColor?: string;
  decoratorSources?: {
    carousel?: Record<string, boolean>;
    pillar?: Record<string, boolean>;
    template?: Record<string, boolean>;
    slide?: Record<string, boolean>;
  };
  className?: string;
}

/**
 * Component to display decorator source badge
 */
function DecoratorSourceBadge({
  decoratorSources,
  decoratorKey,
}: {
  decoratorSources?: {
    carousel?: Record<string, boolean>;
    pillar?: Record<string, boolean>;
    template?: Record<string, boolean>;
    slide?: Record<string, boolean>;
  };
  decoratorKey: string;
}) {
  if (!decoratorSources) return null;

  if (decoratorSources.slide?.[decoratorKey]) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
        <BadgeCheck className="w-2.5 h-2.5" />
        Slide
      </span>
    );
  }

  if (decoratorSources.template?.[decoratorKey]) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-green-500/20 text-green-400 border border-green-500/30">
        Template
      </span>
    );
  }

  if (decoratorSources.pillar?.[decoratorKey]) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-yellow-500/20 text-yellow-400 border border-yellow-500/30">
        Pillar
      </span>
    );
  }

  if (decoratorSources.carousel?.[decoratorKey]) {
    return (
      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-medium bg-purple-500/20 text-purple-400 border border-purple-500/30">
        Carousel
      </span>
    );
  }

  return null;
}

/**
 * Collapsible Section Component
 */
function CollapsibleSection({
  title,
  children,
  defaultOpen = true,
  decoratorKey,
  decoratorSources,
}: {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  decoratorKey?: string;
  decoratorSources?: any;
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border border-white/10 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 flex items-center justify-between bg-white/5 hover:bg-white/10 transition-colors"
      >
        <div className="flex items-center gap-2">
          <span className="text-white/70 text-sm font-medium">{title}</span>
          {decoratorKey && decoratorSources && (
            <DecoratorSourceBadge decoratorSources={decoratorSources} decoratorKey={decoratorKey} />
          )}
        </div>
        {isOpen ? (
          <ChevronUp className="w-4 h-4 text-white/50" />
        ) : (
          <ChevronDown className="w-4 h-4 text-white/50" />
        )}
      </button>
      {isOpen && <div className="p-4 space-y-3">{children}</div>}
    </div>
  );
}

/**
 * Toggle Switch Component
 */
function ToggleSwitch({
  enabled,
  onChange,
  label,
}: {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
  label: string;
}) {
  return (
    <div className="flex items-center justify-between">
      <label className="text-white/70 text-xs font-medium">{label}</label>
      <button
        onClick={() => onChange(!enabled)}
        className={cn(
          'relative inline-flex h-5 w-9 items-center rounded-full transition-colors',
          enabled ? 'bg-white/20' : 'bg-white/5'
        )}
      >
        <span
          className={cn(
            'inline-block h-3 w-3 transform rounded-full bg-white transition-transform',
            enabled ? 'translate-x-5' : 'translate-x-1'
          )}
        />
      </button>
    </div>
  );
}

export const DecoratorPropertyPanel: React.FC<DecoratorPropertyPanelProps> = ({
  config,
  onChange,
  pillarColor = '#00E5FF',
  decoratorSources,
  className,
}) => {
  const [activePreset, setActivePreset] = useState<string | null>(null);

  /**
   * Handle config update for nested properties
   */
  const updateConfig = (section: keyof DecoratorConfig, updates: any) => {
    onChange({
      ...config,
      [section]: {
        ...(config as any)[section],
        ...updates,
      },
    });
  };

  /**
   * Handle preset application
   */
  const handleApplyPreset = (presetId: string) => {
    const newConfig = applyDecoratorPreset(config, presetId);
    onChange(newConfig);
    setActivePreset(presetId);
  };

  return (
    <div className={cn('space-y-4', className)}>
      {/* Quick Presets */}
      <div className="grid grid-cols-2 gap-2">
        {DECORATOR_PRESETS.map((preset) => (
          <button
            key={preset.id}
            onClick={() => handleApplyPreset(preset.id)}
            className={cn(
              'px-3 py-2 rounded-lg text-xs font-medium transition-all',
              'border border-white/10',
              'hover:border-white/30',
              activePreset === preset.id
                ? 'bg-[var(--pillar-color)]/20 text-[var(--pillar-color)] border-[var(--pillar-color)]/50'
                : 'bg-white/5 text-white/70'
            )}
            style={{ '--pillar-color': pillarColor } as React.CSSProperties}
          >
            {preset.name}
          </button>
        ))}
      </div>

      {/* Slide Numbers */}
      <CollapsibleSection
        title="Slide Numbers"
        defaultOpen={config.slideNumber?.enabled}
        decoratorKey="slideNumber"
        decoratorSources={decoratorSources}
      >
        <ToggleSwitch
          enabled={config.slideNumber?.enabled ?? false}
          onChange={(enabled) => updateConfig('slideNumber', { enabled })}
          label="Show Slide Numbers"
        />
        {config.slideNumber?.enabled && (
          <>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Style</label>
              <div className="grid grid-cols-2 gap-2">
                {['decimal', 'roman', 'circle', 'square', 'minimal'].map((style) => (
                  <button
                    key={style}
                    onClick={() => updateConfig('slideNumber', { style })}
                    className={cn(
                      'px-2 py-1.5 rounded text-xs capitalize',
                      config.slideNumber?.style === style
                        ? 'bg-[var(--pillar-color)]/20 text-[var(--pillar-color)]'
                        : 'bg-white/5 text-white/60'
                    )}
                    style={{ '--pillar-color': pillarColor } as React.CSSProperties}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Position</label>
              <div className="grid grid-cols-2 gap-2">
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
                  <button
                    key={pos}
                    onClick={() => updateConfig('slideNumber', { position: pos })}
                    className={cn(
                      'px-2 py-1.5 rounded text-xs capitalize',
                      config.slideNumber?.position === pos
                        ? 'bg-[var(--pillar-color)]/20 text-[var(--pillar-color)]'
                        : 'bg-white/5 text-white/60'
                    )}
                    style={{ '--pillar-color': pillarColor } as React.CSSProperties}
                  >
                    {pos.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Size</label>
              <input
                type="range"
                min="24"
                max="96"
                value={config.slideNumber?.size || 48}
                onChange={(e) => updateConfig('slideNumber', { size: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-white/50 text-xs mt-1">{config.slideNumber?.size || 48}px</div>
            </div>
          </>
        )}
      </CollapsibleSection>

      {/* Border */}
      <CollapsibleSection
        title="Border"
        defaultOpen={config.border?.enabled}
        decoratorKey="border"
        decoratorSources={decoratorSources}
      >
        <ToggleSwitch
          enabled={config.border?.enabled ?? false}
          onChange={(enabled) => updateConfig('border', { enabled })}
          label="Show Border"
        />
        {config.border?.enabled && (
          <>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Style</label>
              <div className="grid grid-cols-2 gap-2">
                {['solid', 'dashed', 'dotted', 'double'].map((style) => (
                  <button
                    key={style}
                    onClick={() => updateConfig('border', { style })}
                    className={cn(
                      'px-2 py-1.5 rounded text-xs capitalize',
                      config.border?.style === style
                        ? 'bg-[var(--pillar-color)]/20 text-[var(--pillar-color)]'
                        : 'bg-white/5 text-white/60'
                    )}
                    style={{ '--pillar-color': pillarColor } as React.CSSProperties}
                  >
                    {style}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Thickness</label>
              <input
                type="range"
                min="2"
                max="24"
                value={config.border?.thickness || 4}
                onChange={(e) => updateConfig('border', { thickness: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-white/50 text-xs mt-1">{config.border?.thickness || 4}px</div>
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Color</label>
              <input
                type="color"
                value={config.border?.color || '#000000'}
                onChange={(e) => updateConfig('border', { color: e.target.value })}
                className="w-full h-8 rounded cursor-pointer"
              />
            </div>
          </>
        )}
      </CollapsibleSection>

      {/* Corner Accents */}
      <CollapsibleSection
        title="Corner Accents"
        defaultOpen={config.cornerAccents?.enabled}
        decoratorKey="cornerAccents"
        decoratorSources={decoratorSources}
      >
        <ToggleSwitch
          enabled={config.cornerAccents?.enabled ?? false}
          onChange={(enabled) => updateConfig('cornerAccents', { enabled })}
          label="Show Corner Accents"
        />
        {config.cornerAccents?.enabled && (
          <div className="grid grid-cols-2 gap-2">
            {['topLeft', 'topRight', 'bottomLeft', 'bottomRight'].map((corner) => (
              <div key={corner} className="space-y-2">
                <ToggleSwitch
                  enabled={(config.cornerAccents as any)[corner]?.enabled ?? false}
                  onChange={(enabled) =>
                    updateConfig('cornerAccents', {
                      [corner]: { ...(config.cornerAccents as any)[corner], enabled },
                    })
                  }
                  label={corner.replace(/([A-Z])/g, ' $1').trim()}
                />
              </div>
            ))}
          </div>
        )}
      </CollapsibleSection>

      {/* Accent Lines */}
      <CollapsibleSection
        title="Accent Lines"
        defaultOpen={config.accentLines?.enabled}
        decoratorKey="accentLines"
        decoratorSources={decoratorSources}
      >
        <ToggleSwitch
          enabled={config.accentLines?.enabled ?? false}
          onChange={(enabled) => updateConfig('accentLines', { enabled })}
          label="Show Accent Lines"
        />
        {config.accentLines?.enabled && (
          <div className="grid grid-cols-2 gap-2">
            {['top', 'bottom', 'left', 'right'].map((position) => (
              <div key={position} className="space-y-2">
                <ToggleSwitch
                  enabled={(config.accentLines as any).positions?.[position]?.enabled ?? false}
                  onChange={(enabled) =>
                    updateConfig('accentLines', {
                      positions: {
                        ...(config.accentLines as any).positions,
                        [position]: { ...(config.accentLines as any).positions?.[position], enabled },
                      },
                    })
                  }
                  label={position}
                />
              </div>
            ))}
          </div>
        )}
      </CollapsibleSection>

      {/* Logo */}
      <CollapsibleSection
        title="Logo"
        defaultOpen={config.logo?.enabled}
        decoratorKey="logo"
        decoratorSources={decoratorSources}
      >
        <ToggleSwitch
          enabled={config.logo?.enabled ?? false}
          onChange={(enabled) => updateConfig('logo', { enabled })}
          label="Show Logo"
        />
        {config.logo?.enabled && (
          <>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Position</label>
              <div className="grid grid-cols-2 gap-2">
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
                  <button
                    key={pos}
                    onClick={() => updateConfig('logo', { position: pos })}
                    className={cn(
                      'px-2 py-1.5 rounded text-xs capitalize',
                      config.logo?.position === pos
                        ? 'bg-[var(--pillar-color)]/20 text-[var(--pillar-color)]'
                        : 'bg-white/5 text-white/60'
                    )}
                    style={{ '--pillar-color': pillarColor } as React.CSSProperties}
                  >
                    {pos.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Size</label>
              <input
                type="range"
                min="40"
                max="200"
                value={config.logo?.size || 80}
                onChange={(e) => updateConfig('logo', { size: parseInt(e.target.value) })}
                className="w-full"
              />
              <div className="text-white/50 text-xs mt-1">{config.logo?.size || 80}px</div>
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Opacity</label>
              <input
                type="range"
                min="0"
                max="100"
                value={(config.logo?.opacity || 1) * 100}
                onChange={(e) => updateConfig('logo', { opacity: parseInt(e.target.value) / 100 })}
                className="w-full"
              />
              <div className="text-white/50 text-xs mt-1">{Math.round((config.logo?.opacity || 1) * 100)}%</div>
            </div>
          </>
        )}
      </CollapsibleSection>

      {/* Hashtag */}
      <CollapsibleSection
        title="Hashtag"
        defaultOpen={config.hashtag?.enabled}
        decoratorKey="hashtag"
        decoratorSources={decoratorSources}
      >
        <ToggleSwitch
          enabled={config.hashtag?.enabled ?? false}
          onChange={(enabled) => updateConfig('hashtag', { enabled })}
          label="Show Hashtag"
        />
        {config.hashtag?.enabled && (
          <>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Text</label>
              <input
                type="text"
                value={config.hashtag?.text || ''}
                onChange={(e) => updateConfig('hashtag', { text: e.target.value })}
                placeholder="#yourhashtag"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Position</label>
              <div className="grid grid-cols-2 gap-2">
                {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
                  <button
                    key={pos}
                    onClick={() => updateConfig('hashtag', { position: pos })}
                    className={cn(
                      'px-2 py-1.5 rounded text-xs capitalize',
                      config.hashtag?.position === pos
                        ? 'bg-[var(--pillar-color)]/20 text-[var(--pillar-color)]'
                        : 'bg-white/5 text-white/60'
                    )}
                    style={{ '--pillar-color': pillarColor } as React.CSSProperties}
                  >
                    {pos.replace('-', ' ')}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </CollapsibleSection>

      {/* Watermark */}
      <CollapsibleSection
        title="Watermark"
        defaultOpen={config.watermark?.enabled}
        decoratorKey="watermark"
        decoratorSources={decoratorSources}
      >
        <ToggleSwitch
          enabled={config.watermark?.enabled ?? false}
          onChange={(enabled) => updateConfig('watermark', { enabled })}
          label="Show Watermark"
        />
        {config.watermark?.enabled && (
          <>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Text</label>
              <input
                type="text"
                value={config.watermark?.text || ''}
                onChange={(e) => updateConfig('watermark', { text: e.target.value })}
                placeholder="Watermark text"
                className="w-full px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white text-sm focus:outline-none focus:border-cyan-400"
              />
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="text-white/50 text-xs font-medium mb-1 block">X Position</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={config.watermark?.x || 75}
                  onChange={(e) => updateConfig('watermark', { x: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-white/50 text-xs mt-1">{config.watermark?.x || 75}%</div>
              </div>
              <div>
                <label className="text-white/50 text-xs font-medium mb-1 block">Y Position</label>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={config.watermark?.y || 75}
                  onChange={(e) => updateConfig('watermark', { y: parseInt(e.target.value) })}
                  className="w-full"
                />
                <div className="text-white/50 text-xs mt-1">{config.watermark?.y || 75}%</div>
              </div>
            </div>
            <div>
              <label className="text-white/50 text-xs font-medium mb-1 block">Opacity</label>
              <input
                type="range"
                min="0"
                max="100"
                value={(config.watermark?.opacity || 0.3) * 100}
                onChange={(e) => updateConfig('watermark', { opacity: parseInt(e.target.value) / 100 })}
                className="w-full"
              />
              <div className="text-white/50 text-xs mt-1">{Math.round((config.watermark?.opacity || 0.3) * 100)}%</div>
            </div>
          </>
        )}
      </CollapsibleSection>

      {/* Background Effects */}
      <CollapsibleSection
        title="Background Effects"
        defaultOpen={false}
        decoratorKey="backgroundEffects"
        decoratorSources={decoratorSources}
      >
        <div className="grid grid-cols-2 gap-2">
          {['shadow', 'glow', 'blur', 'noise'].map((effect) => (
            <ToggleSwitch
              key={effect}
              enabled={(config.backgroundEffects as any)?.[effect] ?? false}
              onChange={(enabled) =>
                updateConfig('backgroundEffects', {
                  [effect]: enabled,
                })
              }
              label={effect.charAt(0).toUpperCase() + effect.slice(1)}
            />
          ))}
        </div>
      </CollapsibleSection>
    </div>
  );
};