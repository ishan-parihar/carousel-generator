module.exports = [
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Slide Sub-Types and Positioning System
 *
 * This file defines the type system for:
 * - Element positioning (custom placement and alignment)
 * - Sub-type presets (layout configurations)
 * - Image configuration (image slides with various layouts)
 *
 * @module types/slide-subtypes
 */ // ============================================================================
// ELEMENT POSITIONING SYSTEM
// ============================================================================
/**
 * Positioning mode for an element
 * - auto: Uses existing flexbox behavior, respects container positioning
 * - absolute: Custom X/Y coordinates, independent of container
 * - relative: Offset from auto position, combines auto + custom offset
 */ __turbopack_context__.s([
    "DEFAULT_CONTENT_STYLE",
    ()=>DEFAULT_CONTENT_STYLE,
    "DEFAULT_ELEMENT_POSITION",
    ()=>DEFAULT_ELEMENT_POSITION,
    "DEFAULT_IMAGE_CONFIG",
    ()=>DEFAULT_IMAGE_CONFIG,
    "getArrayContent",
    ()=>getArrayContent,
    "getContentPosition",
    ()=>getContentPosition,
    "getContentStyle",
    ()=>getContentStyle,
    "getContentValue",
    ()=>getContentValue,
    "getDefaultSubTypeForSlideType",
    ()=>getDefaultSubTypeForSlideType,
    "hasPositionConfig",
    ()=>hasPositionConfig,
    "hasStyleConfig",
    ()=>hasStyleConfig,
    "isSubTypeCompatible",
    ()=>isSubTypeCompatible
]);
const DEFAULT_ELEMENT_POSITION = {
    mode: 'auto',
    alignment: 'center',
    marginBottom: 16
};
const DEFAULT_CONTENT_STYLE = {
    useTheme: true
};
function hasPositionConfig(content) {
    return typeof content === 'object' && content !== null && 'value' in content;
}
function getContentValue(content) {
    if (content === undefined) return undefined;
    return hasPositionConfig(content) ? content.value : content;
}
function getContentPosition(content) {
    if (content === undefined) return undefined;
    return hasPositionConfig(content) ? content.position : undefined;
}
function getContentStyle(content) {
    if (content === undefined) return undefined;
    if (!hasPositionConfig(content)) return undefined;
    return content.style;
}
function hasStyleConfig(content) {
    return typeof content === 'object' && content !== null && 'value' in content && 'style' in content;
}
function getArrayContent(content) {
    if (content === undefined) return undefined;
    return hasPositionConfig(content) ? content.value : content;
}
const DEFAULT_IMAGE_CONFIG = {
    imageUrl: '',
    position: 'full-bleed',
    size: 100,
    objectFit: 'cover',
    overlay: {
        type: 'none'
    },
    captionPosition: 'none',
    borderRadius: 0,
    shadow: false,
    border: false,
    opacity: 1,
    blendMode: 'normal',
    filters: {}
};
function isSubTypeCompatible(subType, templateId) {
    if (!subType.compatibleWith || subType.compatibleWith.length === 0) {
        return true; // Compatible with all templates
    }
    return subType.compatibleWith.includes(templateId);
}
function getDefaultSubTypeForSlideType(slideType) {
    const defaults = {
        title: 'title-classic',
        content: 'content-standard',
        bullets: 'bullets-vertical',
        quote: 'quote-classic',
        cta: 'cta-standard',
        custom: 'content-standard',
        image: 'image-full-bleed'
    };
    return defaults[slideType] || `${slideType}-standard`;
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/decorators.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Unified Decorator Configuration Types
 *
 * This file defines the single source of truth for all decorator configurations.
 * It replaces the three competing systems:
 * 1. Inline constants in ThemedSlide.tsx
 * 2. Style template decorators in styles/index.ts
 * 3. Decorator config in decorators/index.ts
 *
 * Configuration Hierarchy (from lowest to highest priority):
 * - Carousel config (base settings)
 * - Pillar config (override carousel)
 * - Slide config (override pillar)
 * - Style template (suggestion, not override)
 */ /**
 * Slide number style options
 */ __turbopack_context__.s([
    "DEFAULT_DECORATOR_CONFIG",
    ()=>DEFAULT_DECORATOR_CONFIG,
    "mergeDecoratorConfig",
    ()=>mergeDecoratorConfig
]);
const DEFAULT_DECORATOR_CONFIG = {
    slideNumber: {
        enabled: true,
        style: 'decimal',
        position: 'bottom-right',
        size: 48,
        color: undefined,
        showBackground: false
    },
    border: {
        enabled: false,
        style: 'solid',
        thickness: 6,
        position: 'full',
        color: undefined,
        offset: 0,
        padding: 0,
        cornerRadius: 0
    },
    hashtag: {
        enabled: false,
        text: undefined,
        position: 'top-left',
        size: 32,
        color: undefined,
        showBackground: false
    },
    watermark: {
        enabled: false,
        text: undefined,
        x: 75,
        y: 75,
        opacity: 0.3,
        size: 120,
        rotation: -45,
        zIndex: 5
    },
    logo: {
        enabled: true,
        position: 'top-right',
        size: 80,
        opacity: 1,
        imageUrl: '/default-logo.png',
        blendMode: 'normal'
    },
    frame: {
        enabled: false,
        style: 'minimal',
        thickness: 8,
        color: undefined,
        innerPadding: 8
    },
    cornerAccents: {
        enabled: false,
        topLeft: {
            enabled: false,
            style: 'bracket',
            size: 48,
            thickness: 8,
            rotation: 0,
            offset: {
                x: 0,
                y: 0
            },
            effects: {
                shadow: true,
                glow: false,
                blur: false
            }
        },
        topRight: {
            enabled: false,
            style: 'bracket',
            size: 48,
            thickness: 8,
            rotation: 0,
            offset: {
                x: 0,
                y: 0
            },
            effects: {
                shadow: true,
                glow: false,
                blur: false
            }
        },
        bottomLeft: {
            enabled: false,
            style: 'bracket',
            size: 48,
            thickness: 8,
            rotation: 0,
            offset: {
                x: 0,
                y: 0
            },
            effects: {
                shadow: true,
                glow: false,
                blur: false
            }
        },
        bottomRight: {
            enabled: false,
            style: 'bracket',
            size: 48,
            thickness: 8,
            rotation: 0,
            offset: {
                x: 0,
                y: 0
            },
            effects: {
                shadow: true,
                glow: false,
                blur: false
            }
        }
    },
    accentLines: {
        enabled: false,
        positions: {
            top: {
                enabled: false,
                offset: 40,
                thickness: 4,
                length: 80,
                gradient: false
            },
            bottom: {
                enabled: false,
                offset: 40,
                thickness: 4,
                length: 80,
                gradient: false
            },
            left: {
                enabled: false,
                offset: 40,
                thickness: 4,
                length: 80,
                gradient: false
            },
            right: {
                enabled: false,
                offset: 40,
                thickness: 4,
                length: 80,
                gradient: false
            }
        }
    },
    backgroundEffects: {
        shadow: false,
        glow: false,
        blur: false,
        noise: false
    },
    pillarLabel: {
        enabled: true,
        position: 'bottom-right',
        size: 32
    }
};
function mergeDecoratorConfig(base, override) {
    return {
        slideNumber: {
            ...base.slideNumber,
            ...override.slideNumber
        },
        border: {
            ...base.border,
            ...override.border
        },
        hashtag: {
            ...base.hashtag,
            ...override.hashtag
        },
        watermark: {
            ...base.watermark,
            ...override.watermark
        },
        logo: {
            ...base.logo,
            ...override.logo,
            imageUrl: override.logo?.imageUrl || base.logo.imageUrl || '/default-logo.png',
            blendMode: override.logo?.blendMode || base.logo.blendMode
        },
        frame: {
            ...base.frame,
            ...override.frame
        },
        cornerAccents: {
            ...base.cornerAccents,
            ...override.cornerAccents,
            topLeft: override.cornerAccents?.topLeft ? {
                ...base.cornerAccents.topLeft,
                ...override.cornerAccents.topLeft
            } : base.cornerAccents.topLeft,
            topRight: override.cornerAccents?.topRight ? {
                ...base.cornerAccents.topRight,
                ...override.cornerAccents.topRight
            } : base.cornerAccents.topRight,
            bottomLeft: override.cornerAccents?.bottomLeft ? {
                ...base.cornerAccents.bottomLeft,
                ...override.cornerAccents.bottomLeft
            } : base.cornerAccents.bottomLeft,
            bottomRight: override.cornerAccents?.bottomRight ? {
                ...base.cornerAccents.bottomRight,
                ...override.cornerAccents.bottomRight
            } : base.cornerAccents.bottomRight
        },
        accentLines: {
            ...base.accentLines,
            ...override.accentLines
        },
        backgroundEffects: {
            ...base.backgroundEffects,
            ...override.backgroundEffects
        },
        pillarLabel: {
            ...base.pillarLabel,
            ...override.pillarLabel
        }
    };
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/element-migration.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearMigrationCache",
    ()=>clearMigrationCache,
    "getMigrationCacheStats",
    ()=>getMigrationCacheStats,
    "migrateAllElements",
    ()=>migrateAllElements,
    "migrateAllTextElements",
    ()=>migrateAllTextElements,
    "migrateAttribution",
    ()=>migrateAttribution,
    "migrateBackground",
    ()=>migrateBackground,
    "migrateBullets",
    ()=>migrateBullets,
    "migrateCTA",
    ()=>migrateCTA,
    "migrateDecoratorConfigFromPreset",
    ()=>migrateDecoratorConfigFromPreset,
    "migrateDecorators",
    ()=>migrateDecorators,
    "migrateHeadline",
    ()=>migrateHeadline,
    "migrateImage",
    ()=>migrateImage,
    "migrateQuote",
    ()=>migrateQuote,
    "migrateSlideToCanvas",
    ()=>migrateSlideToCanvas,
    "migrateSubtext",
    ()=>migrateSubtext,
    "validateDecoratorConfig",
    ()=>validateDecoratorConfig
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/decorators.ts [app-ssr] (ecmascript)");
/**
 * Element Migration Functions
 *
 * Converts existing slide structure to canvas elements.
 * Provides backward compatibility while enabling new canvas-based editing.
 *
 * @module lib/canvas/element-migration
 */ /**
 * Generate stable ID for canvas element
 *
 * Generates a stable ID based on slide ID and element type prefix.
 * This ensures that the same element always gets the same ID across migrations,
 * enabling element tracking between DOM and Canvas modes.
 *
 * @param prefix - Element type prefix (e.g., 'headline', 'subtext')
 * @param slideId - The slide ID to ensure uniqueness across slides
 * @returns Stable element ID in format: {slideId}-{prefix}
 */ function generateId(prefix, slideId) {
    return `${slideId}-${prefix}`;
}
;
;
// Constants
const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1350;
// Migration cache for performance optimization
// Cache key: stringified slide data
// Cache value: computed CanvasElement array
const migrationCache = new Map();
/**
 * Generate cache key for migration
 *
 * Creates a unique cache key based on slide data that affects migration result.
 *
 * @param slide - The slide to cache
 * @param theme - Pillar theme configuration
 * @param styleTemplate - Style template configuration
 * @param subTypeConfig - Sub-type configuration
 * @param decoratorConfig - Decorator configuration
 * @returns Cache key string
 */ function generateCacheKey(slide, theme, styleTemplate, subTypeConfig, decoratorConfig) {
    // Only include properties that affect migration result
    const cacheData = {
        slideId: slide.id,
        content: slide.content,
        style: slide.style,
        themeId: theme?.id,
        templateId: styleTemplate?.id
    };
    return JSON.stringify(cacheData);
}
function clearMigrationCache(slideId) {
    if (slideId) {
        // Clear cache for specific slide
        for (const [key] of migrationCache){
            if (key.startsWith(`{"slideId":"${slideId}"`)) {
                migrationCache.delete(key);
            }
        }
    } else {
        // Clear entire cache
        migrationCache.clear();
    }
}
function getMigrationCacheStats() {
    let totalSize = 0;
    const keys = [];
    for (const [key, value] of migrationCache){
        keys.push(key);
        totalSize += key.length + JSON.stringify(value).length;
    }
    return {
        size: migrationCache.size,
        keys,
        memoryUsageKB: Math.round(totalSize / 1024)
    };
}
function migrateHeadline(slide, theme) {
    const headlineContent = slide.content.headline;
    if (!headlineContent) {
        return null;
    }
    // Get headline value (handle both string and PositionedContent)
    const headlineValue = typeof headlineContent === 'string' ? headlineContent : headlineContent.value;
    if (!headlineValue) {
        return null;
    }
    // Get position configuration
    const position = typeof headlineContent === 'object' && headlineContent.position ? headlineContent.position : undefined;
    // Get style configuration (Phase 1)
    const styleConfig = typeof headlineContent === 'object' && headlineContent.style ? headlineContent.style : undefined;
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'headline', headlineValue);
    // Get styling - respect useTheme flag (Phase 1)
    const styling = getElementStyling(slide, 'headline', styleConfig, theme);
    // Create TextElement
    const textElement = {
        id: generateId('headline', slide.id),
        type: 'text',
        name: 'Headline',
        x,
        y,
        width,
        height,
        rotation: position?.rotation || 0,
        scaleX: 1,
        scaleY: 1,
        opacity: position?.opacity ?? 1,
        visible: true,
        locked: false,
        zIndex,
        data: {
            content: headlineValue,
            fontSize: styling.fontSize,
            fontFamily: styling.fontFamily,
            fontWeight: styling.fontWeight,
            color: styling.color,
            alignment: alignment,
            lineHeight: styling.lineHeight,
            letterSpacing: styling.letterSpacing,
            textDecoration: styling.textDecoration || 'none',
            fontStyle: styling.fontStyle || 'normal',
            _useTheme: styleConfig?.useTheme ?? true
        }
    };
    return textElement;
}
function migrateSubtext(slide, theme) {
    const subtextContent = slide.content.subtext;
    if (!subtextContent) {
        return null;
    }
    // Get subtext value
    const subtextValue = typeof subtextContent === 'string' ? subtextContent : subtextContent.value;
    if (!subtextValue) {
        return null;
    }
    // Get position configuration
    const position = typeof subtextContent === 'object' && subtextContent.position ? subtextContent.position : undefined;
    // Get style configuration (Phase 1)
    const styleConfig = typeof subtextContent === 'object' && subtextContent.style ? subtextContent.style : undefined;
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'subtext', subtextValue);
    // Get styling - respect useTheme flag (Phase 1)
    const styling = getElementStyling(slide, 'subtext', styleConfig, theme);
    // Create TextElement
    const textElement = {
        id: generateId('subtext', slide.id),
        type: 'text',
        name: 'Subtext',
        x,
        y,
        width,
        height,
        rotation: position?.rotation || 0,
        scaleX: 1,
        scaleY: 1,
        opacity: position?.opacity ?? 1,
        visible: true,
        locked: false,
        zIndex,
        data: {
            content: subtextValue,
            fontSize: styling.fontSize,
            fontFamily: styling.fontFamily,
            fontWeight: styling.fontWeight,
            color: styling.color,
            alignment: alignment,
            lineHeight: styling.lineHeight,
            letterSpacing: styling.letterSpacing,
            textDecoration: styling.textDecoration || 'none',
            fontStyle: styling.fontStyle || 'normal',
            _useTheme: styleConfig?.useTheme ?? true
        }
    };
    return textElement;
}
function migrateBullets(slide, theme) {
    const bulletsContent = slide.content.bullets;
    if (!bulletsContent) {
        return null;
    }
    // Get bullets value (handle both array and PositionedContent)
    const bulletsValue = Array.isArray(bulletsContent) ? bulletsContent : bulletsContent.value;
    if (!bulletsValue || bulletsValue.length === 0) {
        return null;
    }
    // Format bullets with bullet points
    const formattedBullets = bulletsValue.map((bullet, index)=>{
        // Check if it already starts with a bullet point
        if (bullet.startsWith('•') || bullet.startsWith('-') || bullet.startsWith('*')) {
            return bullet;
        }
        // Add bullet point if not present
        return `• ${bullet}`;
    }).join('\n');
    // Get position configuration
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["hasPositionConfig"])(bulletsContent) ? bulletsContent.position : undefined;
    // Get style configuration (Phase 1)
    const styleConfig = typeof bulletsContent === 'object' && 'style' in bulletsContent ? bulletsContent.style : undefined;
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'bullets', formattedBullets);
    // Get styling - respect useTheme flag (Phase 1)
    const styling = getElementStyling(slide, 'bullets', styleConfig, theme);
    // Create TextElement
    const textElement = {
        id: generateId('bullets', slide.id),
        type: 'text',
        name: 'Bullets',
        x,
        y,
        width,
        height,
        rotation: position?.rotation || 0,
        scaleX: 1,
        scaleY: 1,
        opacity: position?.opacity ?? 1,
        visible: true,
        locked: false,
        zIndex,
        data: {
            content: formattedBullets,
            fontSize: styling.fontSize,
            fontFamily: styling.fontFamily,
            fontWeight: styling.fontWeight,
            color: styling.color,
            alignment: alignment,
            lineHeight: styling.lineHeight,
            letterSpacing: styling.letterSpacing,
            textDecoration: styling.textDecoration || 'none',
            fontStyle: styling.fontStyle || 'normal',
            _useTheme: styleConfig?.useTheme ?? true
        }
    };
    return textElement;
}
function migrateQuote(slide, theme) {
    const quoteContent = slide.content.quote;
    if (!quoteContent) {
        return null;
    }
    // Get quote value
    const quoteValue = typeof quoteContent === 'string' ? quoteContent : quoteContent.value;
    if (!quoteValue) {
        return null;
    }
    // Add quote marks if not present
    const formattedQuote = quoteValue.startsWith('"') ? quoteValue : `"${quoteValue}"`;
    // Get position configuration
    const position = typeof quoteContent === 'object' && quoteContent.position ? quoteContent.position : undefined;
    // Get style configuration (Phase 1)
    const styleConfig = typeof quoteContent === 'object' && quoteContent.style ? quoteContent.style : undefined;
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'quote', formattedQuote);
    // Get styling - respect useTheme flag (Phase 1)
    const styling = getElementStyling(slide, 'quote', styleConfig, theme);
    // Create TextElement with italic font style (default for quotes)
    const textElement = {
        id: generateId('quote', slide.id),
        type: 'text',
        name: 'Quote',
        x,
        y,
        width,
        height,
        rotation: position?.rotation || 0,
        scaleX: 1,
        scaleY: 1,
        opacity: position?.opacity ?? 1,
        visible: true,
        locked: false,
        zIndex,
        data: {
            content: formattedQuote,
            fontSize: styling.fontSize,
            fontFamily: styling.fontFamily,
            fontWeight: styling.fontWeight,
            color: styling.color,
            alignment: alignment,
            lineHeight: styling.lineHeight,
            letterSpacing: styling.letterSpacing,
            textDecoration: styling.textDecoration || 'none',
            fontStyle: styling.fontStyle || 'italic',
            _useTheme: styleConfig?.useTheme ?? true
        }
    };
    return textElement;
}
function migrateAttribution(slide, theme) {
    const attributionContent = slide.content.attribution;
    if (!attributionContent) {
        return null;
    }
    // Get attribution value
    const attributionValue = typeof attributionContent === 'string' ? attributionContent : attributionContent.value;
    if (!attributionValue) {
        return null;
    }
    // Get position configuration
    const position = typeof attributionContent === 'object' && attributionContent.position ? attributionContent.position : undefined;
    // Get style configuration (Phase 1)
    const styleConfig = typeof attributionContent === 'object' && attributionContent.style ? attributionContent.style : undefined;
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'attribution', attributionValue);
    // Get styling - respect useTheme flag (Phase 1)
    const styling = getElementStyling(slide, 'attribution', styleConfig, theme);
    // Create TextElement
    const textElement = {
        id: generateId('attribution', slide.id),
        type: 'text',
        name: 'Attribution',
        x,
        y,
        width,
        height,
        rotation: position?.rotation || 0,
        scaleX: 1,
        scaleY: 1,
        opacity: position?.opacity ?? 1,
        visible: true,
        locked: false,
        zIndex,
        data: {
            content: attributionValue.startsWith('-') ? attributionValue : `- ${attributionValue}`,
            fontSize: styling.fontSize,
            fontFamily: styling.fontFamily,
            fontWeight: styling.fontWeight,
            color: styling.color,
            alignment: alignment,
            lineHeight: styling.lineHeight,
            letterSpacing: styling.letterSpacing,
            textDecoration: styling.textDecoration || 'none',
            fontStyle: styling.fontStyle || 'normal',
            _useTheme: styleConfig?.useTheme ?? true
        }
    };
    return textElement;
}
function migrateImage(slide) {
    const imageConfig = slide.content.imageConfig;
    if (!imageConfig || !imageConfig.imageUrl) {
        return null;
    }
    // Calculate image position and size based on position type
    const { x, y, width, height, zIndex } = calculateImagePosition(imageConfig.position, imageConfig.size);
    // Create ImageElement
    const imageElement = {
        id: generateId('image', slide.id),
        type: 'image',
        name: 'Image',
        x,
        y,
        width,
        height,
        rotation: imageConfig.rotation || 0,
        scaleX: 1,
        scaleY: 1,
        opacity: imageConfig.opacity ?? 1,
        visible: true,
        locked: false,
        zIndex,
        data: {
            url: imageConfig.imageUrl,
            objectFit: imageConfig.objectFit,
            filters: {
                blur: imageConfig.filters?.blur,
                grayscale: imageConfig.filters?.grayscale,
                sepia: imageConfig.filters?.sepia,
                saturate: imageConfig.filters?.saturate,
                brightness: imageConfig.filters?.brightness,
                contrast: imageConfig.filters?.contrast,
                hueRotate: 0,
                invert: 0
            },
            borderRadius: imageConfig.borderRadius || 0,
            borderWidth: imageConfig.borderWidth,
            borderColor: imageConfig.borderColor,
            shadow: imageConfig.shadow || false,
            blendMode: imageConfig.blendMode || 'normal'
        }
    };
    return imageElement;
}
function migrateBackground(slide, theme, styleTemplate, carouselBackgroundPack) {
    // Priority: carouselBackgroundPack > styleTemplate.background > theme.backgroundColor
    const background = styleTemplate?.background || theme?.background;
    const backgroundColor = theme?.backgroundColor || '#0a0a0a';
    const primaryColor = theme?.primaryColor || '#00E5FF';
    const secondaryColor = theme?.secondaryColor || primaryColor;
    // Determine background type and colors
    let backgroundType = 'solid';
    let primaryColorValue = backgroundColor;
    let secondaryColorValue = secondaryColor;
    let opacity = 1;
    if (background) {
        if (background.type === 'gradient') {
            backgroundType = 'gradient';
            primaryColorValue = background.primary || backgroundColor;
            secondaryColorValue = background.secondary || secondaryColor;
            opacity = background.opacity ?? 1;
        } else if (background.type === 'pattern') {
            // Use specific pattern type (dots, stripes, grid)
            backgroundType = 'dots'; // Default to dots
            primaryColorValue = background.primary || backgroundColor;
            secondaryColorValue = background.secondary || secondaryColor;
            opacity = background.opacity ?? 1;
        } else if (background.type === 'geometric') {
            // Use specific geometric type (circles, squares, triangles)
            backgroundType = 'circles'; // Default to circles
            primaryColorValue = background.primary || backgroundColor;
            secondaryColorValue = background.secondary || secondaryColor;
            opacity = background.opacity ?? 1;
        } else {
            // Solid background
            backgroundType = 'solid';
            primaryColorValue = background.primary || backgroundColor;
            opacity = background.opacity ?? 1;
        }
    }
    // Create background element
    const backgroundElement = {
        id: generateId('background', slide.id),
        type: 'background',
        name: 'Background',
        x: 0,
        y: 0,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: true,
        zIndex: 0,
        data: {
            backgroundType,
            primaryColor: primaryColorValue,
            secondaryColor: secondaryColorValue,
            opacity,
            gradientAngle: 135,
            patternType: 'dots',
            patternScale: 20,
            geometricType: 'circles',
            blendMode: 'source-over',
            effects: {
                shadow: false,
                glow: false,
                blur: false,
                noise: false
            }
        }
    };
    return backgroundElement;
}
function migrateDecorators(slide) {
    const decoratorConfig = slide.style?.decoratorConfig;
    // Check if decorator config exists and is enabled
    if (!decoratorConfig) {
        return null;
    }
    // Check if any decorator is enabled
    const hasEnabledDecorators = decoratorConfig.slideNumber?.enabled || decoratorConfig.border?.enabled || decoratorConfig.hashtag?.enabled || decoratorConfig.watermark?.enabled || decoratorConfig.logo?.enabled || decoratorConfig.frame?.enabled || decoratorConfig.cornerAccents?.enabled || decoratorConfig.accentLines?.enabled || decoratorConfig.pillarLabel?.enabled;
    if (!hasEnabledDecorators) {
        return null;
    }
    // Determine the primary decorator type based on what's enabled
    // Priority: corners > border > frame > slideNumber > logo > hashtag > watermark > accentLines > pillarLabel
    let decoratorType = 'corner';
    if (decoratorConfig.cornerAccents?.enabled) {
        decoratorType = 'corner';
    } else if (decoratorConfig.border?.enabled) {
        decoratorType = 'border';
    } else if (decoratorConfig.frame?.enabled) {
        decoratorType = 'frame';
    } else if (decoratorConfig.slideNumber?.enabled) {
        decoratorType = 'slideNumber';
    } else if (decoratorConfig.logo?.enabled) {
        decoratorType = 'logo';
    } else if (decoratorConfig.hashtag?.enabled) {
        decoratorType = 'hashtag';
    } else if (decoratorConfig.watermark?.enabled) {
        decoratorType = 'watermark';
    } else if (decoratorConfig.accentLines?.enabled) {
        decoratorType = 'line';
    } else if (decoratorConfig.pillarLabel?.enabled) {
        decoratorType = 'pillarLabel';
    }
    // Create DecoratorElement
    const decoratorElement = {
        id: generateId('decorator', slide.id),
        type: 'decorator',
        name: 'Decorators',
        x: SLIDE_WIDTH / 2,
        y: SLIDE_HEIGHT / 2,
        width: SLIDE_WIDTH,
        height: SLIDE_HEIGHT,
        rotation: 0,
        scaleX: 1,
        scaleY: 1,
        opacity: 1,
        visible: true,
        locked: true,
        zIndex: 0,
        data: {
            decoratorType,
            config: decoratorConfig
        }
    };
    return decoratorElement;
}
function migrateCTA(slide) {
    const ctaConfig = slide.cta;
    // Check if CTA config exists
    if (!ctaConfig || !ctaConfig.text) {
        return null;
    }
    // Calculate CTA position and size based on position configuration
    const { x, y, width, height, zIndex } = calculateCTAPosition(ctaConfig.position);
    // Get styling from slide style (use pillar color for background/text)
    const pillarColor = '#00E5FF'; // Default pillar color
    const backgroundColor = ctaConfig.style === 'solid' || ctaConfig.style === 'gradient' ? pillarColor : pillarColor;
    const textColor = ctaConfig.style === 'solid' ? '#000000' : pillarColor;
    // Create CTAElement
    const ctaElement = {
        id: generateId('cta', slide.id),
        type: 'cta',
        name: 'CTA Button',
        x,
        y,
        width,
        height,
        rotation: ctaConfig.position?.rotation || 0,
        scaleX: 1,
        scaleY: 1,
        opacity: ctaConfig.position?.opacity ?? 1,
        visible: true,
        locked: false,
        zIndex,
        data: {
            text: ctaConfig.text,
            style: ctaConfig.style,
            shape: ctaConfig.shape,
            backgroundColor,
            textColor,
            icon: ctaConfig.icon,
            iconPosition: ctaConfig.iconPosition || 'left',
            animation: ctaConfig.animation || 'none',
            borderRadius: ctaConfig.shape === 'custom' ? 12 : undefined,
            shadow: ctaConfig.style === 'solid' || ctaConfig.style === 'gradient'
        }
    };
    return ctaElement;
}
/**
 * Calculate image position and size from image configuration
 *
 * Converts ImagePosition to CanvasElement coordinates.
 *
 * @param position - Image position/layout type
 * @param size - Image size as percentage of slide (0-100)
 * @returns Position and size for canvas element
 */ function calculateImagePosition(position, size) {
    // Default image element position (centered, full width)
    let x = SLIDE_WIDTH / 2;
    let y = SLIDE_HEIGHT / 2;
    let width = SLIDE_WIDTH * (size / 100);
    let height = SLIDE_HEIGHT * (size / 100);
    let zIndex = 1;
    // Adjust position based on layout type
    switch(position){
        case 'full-bleed':
            // Image covers entire slide
            x = SLIDE_WIDTH / 2;
            y = SLIDE_HEIGHT / 2;
            width = SLIDE_WIDTH;
            height = SLIDE_HEIGHT;
            zIndex = 0; // Background layer
            break;
        case 'half-left':
            // Image 50% left, text 50% right
            x = SLIDE_WIDTH * 0.25;
            y = SLIDE_HEIGHT / 2;
            width = SLIDE_WIDTH * 0.5;
            height = SLIDE_HEIGHT;
            zIndex = 1;
            break;
        case 'half-right':
            // Image 50% right, text 50% left
            x = SLIDE_WIDTH * 0.75;
            y = SLIDE_HEIGHT / 2;
            width = SLIDE_WIDTH * 0.5;
            height = SLIDE_HEIGHT;
            zIndex = 1;
            break;
        case 'card':
            // Image in centered card with caption
            x = SLIDE_WIDTH / 2;
            y = SLIDE_HEIGHT * 0.4;
            width = SLIDE_WIDTH * 0.7;
            height = SLIDE_WIDTH * 0.7; // Square card
            zIndex = 1;
            break;
        case 'gradient-overlay':
            // Image with gradient overlay at bottom for text
            x = SLIDE_WIDTH / 2;
            y = SLIDE_HEIGHT / 2;
            width = SLIDE_WIDTH;
            height = SLIDE_HEIGHT;
            zIndex = 0; // Background layer
            break;
        case 'frame':
            // Image in decorative frame with text below
            x = SLIDE_WIDTH / 2;
            y = SLIDE_HEIGHT * 0.35;
            width = SLIDE_WIDTH * 0.8;
            height = SLIDE_WIDTH * 0.6;
            zIndex = 1;
            break;
        case 'polaroid':
            // Polaroid style with caption
            x = SLIDE_WIDTH / 2;
            y = SLIDE_HEIGHT * 0.4;
            width = SLIDE_WIDTH * 0.6;
            height = SLIDE_WIDTH * 0.75; // Polaroid aspect ratio (3:4)
            zIndex = 1;
            break;
        case 'diagonal-split':
            // Diagonal split between image and text
            x = SLIDE_WIDTH * 0.5;
            y = SLIDE_HEIGHT * 0.5;
            width = SLIDE_WIDTH * 0.7;
            height = SLIDE_HEIGHT * 0.7;
            zIndex = 1;
            break;
        case 'masonry-2':
            // 2 images stacked
            x = SLIDE_WIDTH / 2;
            y = SLIDE_HEIGHT / 4;
            width = SLIDE_WIDTH * 0.8;
            height = SLIDE_HEIGHT * 0.4;
            zIndex = 1;
            break;
        case 'masonry-3':
            // 3 images in grid
            x = SLIDE_WIDTH / 2;
            y = SLIDE_HEIGHT / 3;
            width = SLIDE_WIDTH * 0.5;
            height = SLIDE_HEIGHT * 0.4;
            zIndex = 1;
            break;
        default:
            // Default to centered
            x = SLIDE_WIDTH / 2;
            y = SLIDE_HEIGHT / 2;
            width = SLIDE_WIDTH * (size / 100);
            height = SLIDE_HEIGHT * (size / 100);
            zIndex = 1;
            break;
    }
    return {
        x,
        y,
        width,
        height,
        zIndex
    };
}
/**
 * Calculate CTA position and size from CTA position configuration
 *
 * Converts CTA position to CanvasElement coordinates.
 *
 * @param position - CTA position configuration
 * @returns Position and size for canvas element
 */ function calculateCTAPosition(position) {
    // Default CTA position (centered at bottom)
    let x = SLIDE_WIDTH / 2;
    let y = SLIDE_HEIGHT - 150;
    let width = 300;
    let height = 80;
    let zIndex = 20; // CTA is typically on top
    if (position) {
        // Handle absolute positioning
        if (position.mode === 'absolute') {
            x = (position.x ?? 50) / 100 * SLIDE_WIDTH;
            y = (position.y ?? 85) / 100 * SLIDE_HEIGHT;
            width = (position.width ?? 30) / 100 * SLIDE_WIDTH;
            height = (position.height ?? 10) / 100 * SLIDE_HEIGHT;
            zIndex = position.zIndex ?? 20;
        } else if (position.mode === 'relative') {
            x += position.offsetLeft ?? 0;
            y += position.offsetTop ?? 0;
            zIndex = position.zIndex ?? 20;
        } else {
            zIndex = position.zIndex ?? 20;
        }
    }
    return {
        x,
        y,
        width,
        height,
        zIndex
    };
}
function migrateAllTextElements(slide, theme) {
    const elements = [];
    // Migrate headline
    const headline = migrateHeadline(slide, theme);
    if (headline) {
        elements.push(headline);
    }
    // Migrate subtext
    const subtext = migrateSubtext(slide, theme);
    if (subtext) {
        elements.push(subtext);
    }
    // Migrate bullets
    const bullets = migrateBullets(slide, theme);
    if (bullets) {
        elements.push(bullets);
    }
    // Migrate quote
    const quote = migrateQuote(slide, theme);
    if (quote) {
        elements.push(quote);
    }
    // Migrate attribution
    const attribution = migrateAttribution(slide, theme);
    if (attribution) {
        elements.push(attribution);
    }
    return elements;
}
function migrateAllElements(slide, theme, styleTemplate, carouselBackgroundPack) {
    const elements = [];
    // Migrate background element (always first, zIndex 0)
    const backgroundElement = migrateBackground(slide, theme, styleTemplate, carouselBackgroundPack);
    if ("TURBOPACK compile-time truthy", 1) {
        elements.push(backgroundElement);
    }
    // Migrate decorators (on top of background, zIndex 0)
    const decoratorElement = migrateDecorators(slide);
    if (decoratorElement) {
        elements.push(decoratorElement);
    }
    // Migrate text elements (pass theme for useTheme flag support - Phase 1)
    const textElements = migrateAllTextElements(slide, theme);
    elements.push(...textElements);
    // Migrate image element
    const imageElement = migrateImage(slide);
    if (imageElement) {
        elements.push(imageElement);
    }
    // Migrate CTA element
    const ctaElement = migrateCTA(slide);
    if (ctaElement) {
        elements.push(ctaElement);
    }
    // Sort elements by zIndex (lowest first)
    elements.sort((a, b)=>a.zIndex - b.zIndex);
    return elements;
}
/**
 * Calculate element position and size from position configuration
 *
 * Converts ElementPosition to CanvasElement coordinates.
 *
 * @param position - Element position configuration
 * @param elementType - Type of element (headline, subtext, bullets, quote, attribution)
 * @param content - Content text for size calculation
 * @returns Position and size for canvas element
 */ function calculateElementPosition(position, elementType, content) {
    // Default styling based on element type
    const defaults = getDefaultElementDefaults(elementType);
    // Calculate position based on mode
    let x = defaults.x;
    let y = defaults.y;
    let width = defaults.width;
    let height = defaults.height;
    let alignment = defaults.alignment;
    let zIndex = defaults.zIndex;
    if (position) {
        // Handle absolute positioning
        if (position.mode === 'absolute') {
            x = (position.x ?? 50) / 100 * SLIDE_WIDTH;
            y = (position.y ?? 50) / 100 * SLIDE_HEIGHT;
            width = (position.width ?? 80) / 100 * SLIDE_WIDTH;
            height = (position.height ?? 20) / 100 * SLIDE_HEIGHT;
            alignment = position.alignment ?? 'center';
            zIndex = position.zIndex ?? 10;
        } else if (position.mode === 'relative') {
            x = defaults.x + (position.offsetLeft ?? 0);
            y = defaults.y + (position.offsetTop ?? 0);
            width = defaults.width;
            height = defaults.height;
            alignment = position.alignment ?? defaults.alignment;
            zIndex = position.zIndex ?? 10;
        } else {
            alignment = position.alignment ?? defaults.alignment;
            zIndex = position.zIndex ?? 10;
        }
    }
    // Adjust height based on content length
    const lines = content.split('\n').length;
    height = Math.max(height, lines * defaults.fontSize * defaults.lineHeight);
    return {
        x,
        y,
        width,
        height,
        zIndex,
        alignment
    };
}
/**
 * Get default element defaults for element type
 */ function getDefaultElementDefaults(elementType) {
    switch(elementType){
        case 'headline':
            return {
                x: SLIDE_WIDTH / 2,
                y: 200,
                width: 800,
                height: 100,
                fontSize: 64,
                lineHeight: 1.2,
                alignment: 'center',
                zIndex: 10
            };
        case 'subtext':
            return {
                x: SLIDE_WIDTH / 2,
                y: 350,
                width: 700,
                height: 80,
                fontSize: 32,
                lineHeight: 1.5,
                alignment: 'center',
                zIndex: 9
            };
        case 'bullets':
            return {
                x: SLIDE_WIDTH / 2,
                y: 450,
                width: 700,
                height: 200,
                fontSize: 28,
                lineHeight: 1.6,
                alignment: 'left',
                zIndex: 8
            };
        case 'quote':
            return {
                x: SLIDE_WIDTH / 2,
                y: 600,
                width: 700,
                height: 150,
                fontSize: 40,
                lineHeight: 1.4,
                alignment: 'center',
                zIndex: 7
            };
        case 'attribution':
            return {
                x: SLIDE_WIDTH / 2,
                y: 800,
                width: 400,
                height: 50,
                fontSize: 24,
                lineHeight: 1.2,
                alignment: 'center',
                zIndex: 6
            };
        default:
            return {
                x: SLIDE_WIDTH / 2,
                y: SLIDE_HEIGHT / 2,
                width: 600,
                height: 100,
                fontSize: 32,
                lineHeight: 1.5,
                alignment: 'center',
                zIndex: 10
            };
    }
}
/**
 * Get styling from slide style configuration
 * @deprecated Use getElementStyling instead (Phase 1)
 */ function getSlideStyling(slide, elementType) {
    // Get defaults for element type
    const defaults = getDefaultElementDefaults(elementType);
    // TODO: Extract styling from slide.style.template
    // For now, return defaults
    return {
        fontSize: defaults.fontSize,
        fontFamily: 'Inter',
        fontWeight: '700',
        color: '#FFFFFF',
        lineHeight: defaults.lineHeight,
        letterSpacing: 0
    };
}
/**
 * Get element styling with useTheme flag support (Phase 1)
 *
 * Returns styling based on the useTheme flag:
 * - If useTheme is true (or undefined): Use theme styling
 * - If useTheme is false: Use custom style overrides
 *
 * @param slide - The slide to get styling from
 * @param elementType - Type of element (headline, subtext, bullets, quote, attribution)
 * @param styleConfig - Style configuration from content
 * @param theme - Pillar theme configuration
 * @returns Styling object
 */ function getElementStyling(slide, elementType, styleConfig, theme) {
    // Get defaults for element type
    const defaults = getDefaultElementDefaults(elementType);
    // Check if useTheme flag is false (use custom styling)
    const useCustomStyle = styleConfig?.useTheme === false;
    if (useCustomStyle && styleConfig) {
        // Use custom style overrides
        return {
            fontSize: styleConfig.fontSize ?? defaults.fontSize,
            fontFamily: styleConfig.fontFamily ?? 'Inter',
            fontWeight: styleConfig.fontWeight ?? '700',
            color: styleConfig.color ?? '#FFFFFF',
            lineHeight: styleConfig.lineHeight ?? defaults.lineHeight,
            letterSpacing: styleConfig.letterSpacing ?? 0,
            textDecoration: styleConfig.textDecoration ?? 'none',
            fontStyle: styleConfig.fontStyle ?? 'normal'
        };
    } else {
        // Use theme styling (default behavior)
        // TODO: Extract styling from slide.style.template and theme
        // For now, return defaults
        return {
            fontSize: defaults.fontSize,
            fontFamily: theme?.headingFont || 'Inter',
            fontWeight: '700',
            color: theme?.primaryColor || '#FFFFFF',
            lineHeight: defaults.lineHeight,
            letterSpacing: 0,
            textDecoration: 'none',
            fontStyle: 'normal'
        };
    }
}
function migrateDecoratorConfigFromPreset(preset, slideId) {
    // Find the slide in the preset
    const slide = preset.slides.find((s)=>s.id === slideId);
    // Get decorator config from slide level (highest priority)
    const slideDecoratorConfig = slide?.style?.decoratorConfig;
    // Get decorator config from carousel level (lowest priority)
    const carouselDecoratorConfig = preset.decoratorConfig;
    // Merge configs: DEFAULT → carousel → slide
    // This ensures all required fields are present while preserving user settings
    const mergedConfig = slideDecoratorConfig ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"], carouselDecoratorConfig || {}), slideDecoratorConfig) : (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"], carouselDecoratorConfig || {});
    return mergedConfig;
}
function validateDecoratorConfig(config) {
    const errors = [];
    // Check required top-level properties
    if (!config.slideNumber) {
        errors.push('Missing slideNumber configuration');
    } else if (typeof config.slideNumber.enabled !== 'boolean') {
        errors.push('slideNumber.enabled must be a boolean');
    }
    if (!config.border) {
        errors.push('Missing border configuration');
    } else if (typeof config.border.enabled !== 'boolean') {
        errors.push('border.enabled must be a boolean');
    }
    if (!config.hashtag) {
        errors.push('Missing hashtag configuration');
    } else if (typeof config.hashtag.enabled !== 'boolean') {
        errors.push('hashtag.enabled must be a boolean');
    }
    if (!config.watermark) {
        errors.push('Missing watermark configuration');
    } else if (typeof config.watermark.enabled !== 'boolean') {
        errors.push('watermark.enabled must be a boolean');
    }
    if (!config.logo) {
        errors.push('Missing logo configuration');
    } else if (typeof config.logo.enabled !== 'boolean') {
        errors.push('logo.enabled must be a boolean');
    }
    if (!config.frame) {
        errors.push('Missing frame configuration');
    } else if (typeof config.frame.enabled !== 'boolean') {
        errors.push('frame.enabled must be a boolean');
    }
    if (!config.cornerAccents) {
        errors.push('Missing cornerAccents configuration');
    } else if (typeof config.cornerAccents.enabled !== 'boolean') {
        errors.push('cornerAccents.enabled must be a boolean');
    }
    if (!config.accentLines) {
        errors.push('Missing accentLines configuration');
    } else if (typeof config.accentLines.enabled !== 'boolean') {
        errors.push('accentLines.enabled must be a boolean');
    }
    if (!config.pillarLabel) {
        errors.push('Missing pillarLabel configuration');
    } else if (typeof config.pillarLabel.enabled !== 'boolean') {
        errors.push('pillarLabel.enabled must be a boolean');
    }
    return {
        isValid: errors.length === 0,
        errors
    };
}
function migrateSlideToCanvas(slide, theme, styleTemplate, subTypeConfig, decoratorConfig) {
    // Generate cache key
    const cacheKey = generateCacheKey(slide, theme, styleTemplate, subTypeConfig, decoratorConfig);
    // Check cache
    if (migrationCache.has(cacheKey)) {
        console.log('[migrateSlideToCanvas] Cache hit for slide:', slide.id);
        return migrationCache.get(cacheKey);
    }
    console.log('[migrateSlideToCanvas] Cache miss, migrating slide:', slide.id);
    // Perform migration
    const elements = migrateAllElements(slide, theme, styleTemplate);
    // Cache result
    migrationCache.set(cacheKey, elements);
    // Log cache statistics (in development only)
    if ("TURBOPACK compile-time truthy", 1) {
        const stats = getMigrationCacheStats();
        console.log('[migrateSlideToCanvas] Cache stats:', {
            size: stats.size,
            memory: `${stats.memoryUsageKB} KB`
        });
    }
    return elements;
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/bridge/dom-to-canvas-bridge.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * DOM to Canvas Bridge Utilities
 *
 * Temporary utilities to bridge between DOM-centric Carousel store
 * and Canvas-centric CarouselRenderer.
 *
 * These utilities will be removed once the carousel-store is fully migrated
 * to Canvas-centric data model (Phase 4, Task 4.2).
 */ __turbopack_context__.s([
    "createContentFromDOMCarousel",
    ()=>createContentFromDOMCarousel,
    "createTemplateFromDOMCarousel",
    ()=>createTemplateFromDOMCarousel
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/styles/index.ts [app-ssr] (ecmascript)");
;
;
/**
 * Create content fields from DOM slide
 *
 * This converts DOM slide content to Canvas content fields format.
 * Content fields are what users fill in when generating a carousel from a template.
 */ function createContentFieldsFromSlide(slide) {
    const fields = [];
    const { content } = slide;
    if (content.headline) {
        const headlineValue = typeof content.headline === 'string' ? content.headline : content.headline.value;
        if (headlineValue) {
            fields.push({
                id: 'headline',
                name: 'Headline',
                label: 'Headline',
                type: 'text',
                elementId: 'headline',
                defaultValue: headlineValue,
                required: true,
                placeholder: 'Enter headline'
            });
        }
    }
    if (content.subtext) {
        const subtextValue = typeof content.subtext === 'string' ? content.subtext : content.subtext.value;
        if (subtextValue) {
            fields.push({
                id: 'subtext',
                name: 'Subtext',
                label: 'Subtext',
                type: 'text',
                elementId: 'subtext',
                defaultValue: subtextValue,
                required: false,
                placeholder: 'Enter subtext'
            });
        }
    }
    if (content.bullets) {
        const bulletsValue = Array.isArray(content.bullets) ? content.bullets : typeof content.bullets === 'string' ? content.bullets : content.bullets.value;
        if (Array.isArray(bulletsValue) && bulletsValue.length > 0) {
            fields.push({
                id: 'bullets',
                name: 'Bullets',
                label: 'Bullet Points',
                type: 'textarea',
                elementId: 'bullets',
                defaultValue: bulletsValue.join('\n'),
                required: false,
                placeholder: 'Enter bullet points (one per line)'
            });
        }
    }
    if (content.quote) {
        const quoteValue = typeof content.quote === 'string' ? content.quote : content.quote.value;
        if (quoteValue) {
            fields.push({
                id: 'quote',
                name: 'Quote',
                label: 'Quote',
                type: 'textarea',
                elementId: 'quote',
                defaultValue: quoteValue,
                required: false,
                placeholder: 'Enter quote'
            });
        }
    }
    if (content.attribution) {
        const attributionValue = typeof content.attribution === 'string' ? content.attribution : content.attribution.value;
        if (attributionValue) {
            fields.push({
                id: 'attribution',
                name: 'Attribution',
                label: 'Attribution',
                type: 'text',
                elementId: 'attribution',
                defaultValue: attributionValue,
                required: false,
                placeholder: 'Enter attribution'
            });
        }
    }
    if (content.imageConfig) {
        const imageUrl = content.imageConfig.imageUrl;
        if (imageUrl) {
            fields.push({
                id: 'image',
                name: 'Image',
                label: 'Image URL',
                type: 'image',
                elementId: 'image',
                defaultValue: imageUrl,
                required: false,
                placeholder: 'Enter image URL'
            });
        }
    }
    if (content.ctaText) {
        const ctaValue = typeof content.ctaText === 'string' ? content.ctaText : content.ctaText.value;
        if (ctaValue) {
            fields.push({
                id: 'cta',
                name: 'CTA',
                label: 'Call to Action',
                type: 'text',
                elementId: 'cta',
                defaultValue: ctaValue,
                required: false,
                placeholder: 'Enter CTA text'
            });
        }
    }
    return fields;
}
function createTemplateFromDOMCarousel(carousel) {
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPillarTheme"])(carousel.pillar);
    const styleTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleTemplate"])('minimal') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getStyleTemplate"])('minimal');
    // Create elements from a representative slide
    const representativeSlide = carousel.slides[0];
    const elements = createElementsFromSlide(representativeSlide, theme, carousel.pillar);
    // Create content fields based on slide content
    const contentFields = createContentFieldsFromSlide(representativeSlide);
    return {
        id: carousel.id,
        name: carousel.name,
        description: `Auto-generated template for ${carousel.name}`,
        elements,
        settings: {
            width: 1080,
            height: 1350,
            backgroundColor: theme.backgroundColor || '#0a0a0a',
            allowCustomContent: true,
            contentFields,
            defaultTheme: carousel.pillar,
            enableResponsive: false,
            maxSlides: 10
        },
        metadata: {
            version: '1.0.0',
            author: 'System',
            createdAt: carousel.createdAt,
            updatedAt: carousel.updatedAt,
            tags: [
                'auto-generated',
                carousel.pillar
            ],
            category: 'auto-generated',
            description: `Auto-generated template for ${carousel.name}`,
            isOfficial: false,
            isPublic: false,
            usageCount: 0
        }
    };
}
function createContentFromDOMCarousel(carousel) {
    const slides = carousel.slides.map((slide, index)=>{
        const contentFieldsArray = createContentFieldsFromSlide(slide);
        // Convert ContentField[] to Record<string, any>
        const contentFields = {};
        contentFieldsArray.forEach((field)=>{
            contentFields[field.id] = field.defaultValue;
        });
        return {
            slideNumber: index + 1,
            contentFields
        };
    });
    return {
        slides
    };
}
/**
 * Create Canvas elements from DOM slide
 */ function createElementsFromSlide(slide, theme, pillar) {
    const elements = [];
    // Create text element for headline
    if (slide.content.headline) {
        const headlineValue = typeof slide.content.headline === 'string' ? slide.content.headline : slide.content.headline.value;
        if (headlineValue) {
            elements.push({
                id: 'headline',
                type: 'text',
                name: 'Headline',
                x: 100,
                y: 100,
                width: 880,
                height: 200,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
                visible: true,
                locked: false,
                zIndex: 10,
                data: {
                    content: headlineValue,
                    fontSize: 72,
                    fontFamily: 'Arial',
                    fontWeight: 'bold',
                    color: theme.textColor || '#FFFFFF',
                    alignment: 'center',
                    lineHeight: 1.2
                }
            });
        }
    }
    // Create text element for subtext
    if (slide.content.subtext) {
        const subtextValue = typeof slide.content.subtext === 'string' ? slide.content.subtext : slide.content.subtext.value;
        if (subtextValue) {
            elements.push({
                id: 'subtext',
                type: 'text',
                name: 'Subtext',
                x: 100,
                y: 320,
                width: 880,
                height: 150,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
                visible: true,
                locked: false,
                zIndex: 9,
                data: {
                    content: subtextValue,
                    fontSize: 36,
                    fontFamily: 'Arial',
                    fontWeight: 'normal',
                    color: theme.textColor || '#FFFFFF',
                    alignment: 'center',
                    lineHeight: 1.4
                }
            });
        }
    }
    // Create text element for bullets
    if (slide.content.bullets) {
        const bulletsValue = Array.isArray(slide.content.bullets) ? slide.content.bullets : typeof slide.content.bullets === 'string' ? slide.content.bullets : slide.content.bullets.value;
        if (Array.isArray(bulletsValue) && bulletsValue.length > 0) {
            elements.push({
                id: 'bullets',
                type: 'text',
                name: 'Bullets',
                x: 150,
                y: 400,
                width: 780,
                height: 600,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
                visible: true,
                locked: false,
                zIndex: 8,
                data: {
                    content: bulletsValue.map((b)=>`• ${b}`).join('\n'),
                    fontSize: 32,
                    fontFamily: 'Arial',
                    fontWeight: 'normal',
                    color: theme.textColor || '#FFFFFF',
                    alignment: 'left',
                    lineHeight: 1.6
                }
            });
        }
    }
    // Create text element for quote
    if (slide.content.quote) {
        const quoteValue = typeof slide.content.quote === 'string' ? slide.content.quote : slide.content.quote.value;
        if (quoteValue) {
            elements.push({
                id: 'quote',
                type: 'text',
                name: 'Quote',
                x: 100,
                y: 200,
                width: 880,
                height: 400,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
                visible: true,
                locked: false,
                zIndex: 10,
                data: {
                    content: `"${quoteValue}"`,
                    fontSize: 48,
                    fontFamily: 'Arial',
                    fontWeight: 'normal',
                    fontStyle: 'italic',
                    color: theme.textColor || '#FFFFFF',
                    alignment: 'center',
                    lineHeight: 1.5
                }
            });
        }
    }
    // Create text element for attribution
    if (slide.content.attribution) {
        const attributionValue = typeof slide.content.attribution === 'string' ? slide.content.attribution : slide.content.attribution.value;
        if (attributionValue) {
            elements.push({
                id: 'attribution',
                type: 'text',
                name: 'Attribution',
                x: 100,
                y: 620,
                width: 880,
                height: 100,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
                visible: true,
                locked: false,
                zIndex: 9,
                data: {
                    content: `- ${attributionValue}`,
                    fontSize: 28,
                    fontFamily: 'Arial',
                    fontWeight: 'normal',
                    color: theme.textColor || '#FFFFFF',
                    alignment: 'center',
                    lineHeight: 1.4
                }
            });
        }
    }
    // Create image element
    if (slide.content.imageConfig) {
        const imageUrl = slide.content.imageConfig.imageUrl;
        if (imageUrl) {
            elements.push({
                id: 'image',
                type: 'image',
                name: 'Image',
                x: 100,
                y: 100,
                width: 880,
                height: 600,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
                visible: true,
                locked: false,
                zIndex: 5,
                data: {
                    url: imageUrl,
                    objectFit: 'cover',
                    filters: {
                        blur: 0,
                        grayscale: 0,
                        sepia: 0,
                        saturate: 100,
                        brightness: 100,
                        contrast: 100,
                        hueRotate: 0,
                        invert: 0
                    },
                    borderRadius: 16,
                    borderWidth: 0,
                    borderColor: '#FFFFFF',
                    shadow: true,
                    blendMode: 'source-over'
                }
            });
        }
    }
    // Create CTA element
    if (slide.content.ctaText) {
        const ctaValue = typeof slide.content.ctaText === 'string' ? slide.content.ctaText : slide.content.ctaText.value;
        if (ctaValue) {
            elements.push({
                id: 'cta',
                type: 'cta',
                name: 'CTA',
                x: 390,
                y: 1150,
                width: 300,
                height: 80,
                rotation: 0,
                scaleX: 1,
                scaleY: 1,
                opacity: 1,
                visible: true,
                locked: false,
                zIndex: 15,
                data: {
                    text: ctaValue,
                    style: 'solid',
                    shape: 'pill',
                    backgroundColor: theme.accentColor || '#00E5FF',
                    textColor: '#000000',
                    borderRadius: 40,
                    shadow: true
                }
            });
        }
    }
    return elements;
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/carousel-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCarouselStore",
    ()=>useCarouselStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/zustand/esm/middleware.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$element$2d$migration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/element-migration.ts [app-ssr] (ecmascript)");
;
;
;
const generateId = ()=>Math.random().toString(36).substring(2, 11);
const defaultExportSettings = {
    pixelRatio: 2,
    format: 'png',
    quality: 1
};
// Phase 4: Helper function to save state to history
const saveToHistory = (set, get)=>{
    const { carousel, history, historyIndex } = get();
    if (!carousel) return;
    // Remove any future history (redo stack)
    const newHistory = history.slice(0, historyIndex + 1);
    // Add current state to history
    newHistory.push(JSON.parse(JSON.stringify(carousel)));
    // Limit history size to 50 states
    if (newHistory.length > 50) {
        newHistory.shift();
    }
    set({
        history: newHistory,
        historyIndex: newHistory.length - 1
    });
};
const useCarouselStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        carousel: null,
        selectedSlideId: null,
        exportSettings: defaultExportSettings,
        presets: [],
        // Phase 4: History state
        history: [],
        historyIndex: -1,
        // Selectors
        getSlideById: (id)=>{
            const { carousel } = get();
            return carousel?.slides.find((slide)=>slide.id === id);
        },
        getSelectedSlide: ()=>{
            const { carousel, selectedSlideId } = get();
            if (!carousel || !selectedSlideId) return undefined;
            return carousel.slides.find((slide)=>slide.id === selectedSlideId);
        },
        getSlidesByType: (type)=>{
            const { carousel } = get();
            if (!carousel) return [];
            return carousel.slides.filter((slide)=>slide.type === type);
        },
        hasSlides: ()=>{
            const { carousel } = get();
            return carousel ? carousel.slides.length > 0 : false;
        },
        getSlideCount: ()=>{
            const { carousel } = get();
            return carousel ? carousel.slides.length : 0;
        },
        getPresetById: (id)=>{
            const { presets } = get();
            return presets.find((preset)=>preset.id === id);
        },
        createCarousel: (name, pillar)=>{
            const now = new Date().toISOString();
            const carousel = {
                id: generateId(),
                name,
                pillar,
                slides: [],
                decoratorConfig: {
                    logo: {
                        enabled: true,
                        position: 'top-right',
                        size: 80,
                        opacity: 1,
                        imageUrl: '/default-logo.png',
                        blendMode: 'normal'
                    }
                },
                createdAt: now,
                updatedAt: now
            };
            // Phase 4: Initialize history with first state
            set({
                carousel,
                selectedSlideId: null,
                history: [
                    carousel
                ],
                historyIndex: 0
            });
        },
        loadCarousel: (carousel)=>{
            set({
                carousel,
                selectedSlideId: carousel.slides[0]?.id || null
            });
        },
        setPillar: (pillar)=>{
            const { carousel } = get();
            if (carousel) {
                set({
                    carousel: {
                        ...carousel,
                        pillar,
                        updatedAt: new Date().toISOString()
                    }
                });
            }
        },
        addSlide: (slideData)=>{
            const { carousel } = get();
            if (!carousel) return;
            const newSlide = {
                ...slideData,
                id: generateId(),
                order: carousel.slides.length,
                style: {
                    ...slideData.style,
                    decoratorConfig: {}
                }
            };
            set({
                carousel: {
                    ...carousel,
                    slides: [
                        ...carousel.slides,
                        newSlide
                    ],
                    updatedAt: new Date().toISOString()
                },
                selectedSlideId: newSlide.id
            });
        },
        updateSlide: (id, content)=>{
            const { carousel } = get();
            if (!carousel) return;
            // Phase 4: Save to history before update
            saveToHistory(set, get);
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>{
                        if (slide.id !== id) return slide;
                        // Merge content while preserving style overrides (Phase 1)
                        const mergedContent = {
                            ...slide.content
                        };
                        // For each field in the new content, merge properly
                        Object.keys(content).forEach((key)=>{
                            const existingContent = slide.content[key];
                            const newContent = content[key];
                            // If both existing and new content are positioned content, merge them
                            if (typeof existingContent === 'object' && existingContent !== null && 'value' in existingContent && typeof newContent === 'object' && newContent !== null && 'value' in newContent) {
                                // Merge position and style, but prefer new values
                                const existing = existingContent;
                                const updated = newContent;
                                mergedContent[key] = {
                                    value: updated.value,
                                    position: updated.position ?? existing.position,
                                    style: updated.style ?? existing.style
                                };
                            } else {
                                // Use new content directly - cast to any to bypass strict type checking
                                mergedContent[key] = newContent;
                            }
                        });
                        return {
                            ...slide,
                            content: mergedContent
                        };
                    }),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateSlideStyle: (id, style)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>slide.id === id ? {
                            ...slide,
                            style: {
                                ...slide.style,
                                ...style,
                                // Ensure decoratorConfig is properly merged
                                decoratorConfig: {
                                    ...slide.style?.decoratorConfig || {},
                                    ...style?.decoratorConfig || {}
                                }
                            }
                        } : slide),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateSlideCTA: (id, cta)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>slide.id === id ? {
                            ...slide,
                            cta: {
                                ...slide.cta,
                                ...cta
                            }
                        } : slide),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateSlideType: (id, type)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>slide.id === id ? {
                            ...slide,
                            type
                        } : slide),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateSlideSubType: (id, subType)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>slide.id === id ? {
                            ...slide,
                            subType
                        } : slide),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateElementPosition: (id, field, position)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>{
                        if (slide.id !== id) return slide;
                        const currentContent = slide.content[field];
                        const updatedContent = typeof currentContent === 'object' && currentContent !== null && 'value' in currentContent ? {
                            ...currentContent,
                            position
                        } : {
                            value: currentContent,
                            position
                        };
                        return {
                            ...slide,
                            content: {
                                ...slide.content,
                                [field]: updatedContent
                            }
                        };
                    }),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateElementAlignment: (id, field, alignment)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>{
                        if (slide.id !== id) return slide;
                        const currentContent = slide.content[field];
                        const currentPosition = typeof currentContent === 'object' && currentContent !== null && 'value' in currentContent ? currentContent.position || {
                            mode: 'auto',
                            alignment: alignment
                        } : {
                            mode: 'auto',
                            alignment: alignment
                        };
                        const updatedContent = typeof currentContent === 'object' && currentContent !== null && 'value' in currentContent ? {
                            ...currentContent,
                            position: {
                                ...currentPosition,
                                alignment
                            }
                        } : {
                            value: currentContent,
                            position: {
                                ...currentPosition,
                                alignment
                            }
                        };
                        return {
                            ...slide,
                            content: {
                                ...slide.content,
                                [field]: updatedContent
                            }
                        };
                    }),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateElementStyle: (id, field, style)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>{
                        if (slide.id !== id) return slide;
                        const currentContent = slide.content[field];
                        const updatedContent = typeof currentContent === 'object' && currentContent !== null && 'value' in currentContent ? {
                            ...currentContent,
                            style: {
                                ...currentContent.style,
                                ...style
                            }
                        } : {
                            value: currentContent,
                            style
                        };
                        return {
                            ...slide,
                            content: {
                                ...slide.content,
                                [field]: updatedContent
                            }
                        };
                    }),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateImageConfig: (id, imageConfig)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>slide.id === id ? {
                            ...slide,
                            content: {
                                ...slide.content,
                                imageConfig
                            }
                        } : slide),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        duplicateSlide: (id)=>{
            const { carousel } = get();
            if (!carousel) return;
            const slideToDuplicate = carousel.slides.find((slide)=>slide.id === id);
            if (!slideToDuplicate) return;
            const duplicatedSlide = {
                ...slideToDuplicate,
                id: generateId(),
                order: carousel.slides.length
            };
            set({
                carousel: {
                    ...carousel,
                    slides: [
                        ...carousel.slides,
                        duplicatedSlide
                    ],
                    updatedAt: new Date().toISOString()
                }
            });
        },
        clearSlideContent: (id)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>slide.id === id ? {
                            ...slide,
                            content: {}
                        } : slide),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateAllSlidesDecoratorConfig: (decoratorConfig)=>{
            const { carousel } = get();
            if (!carousel) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>({
                            ...slide,
                            style: {
                                ...slide.style,
                                decoratorConfig: {
                                    ...decoratorConfig
                                }
                            }
                        })),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        updateAllSlidesSettings: (template, visualTreatment, decoratorConfig)=>{
            const { carousel, selectedSlideId } = get();
            if (!carousel) return;
            // Get settings from currently selected slide if not provided
            const currentSlide = carousel.slides.find((s)=>s.id === selectedSlideId);
            if (!currentSlide) return;
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>({
                            ...slide,
                            style: {
                                ...slide.style,
                                // Apply template if provided, otherwise use current slide's template
                                template: template ?? currentSlide.style?.template,
                                // Apply visual treatment if provided, otherwise use current slide's treatment
                                visualTreatment: visualTreatment ?? currentSlide.style?.visualTreatment,
                                // Apply decorator config if provided
                                decoratorConfig: decoratorConfig ?? currentSlide.style?.decoratorConfig
                            }
                        })),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        removeSlide: (id)=>{
            const { carousel, selectedSlideId } = get();
            if (!carousel) return;
            const newSlides = carousel.slides.filter((slide)=>slide.id !== id).map((slide, index)=>({
                    ...slide,
                    order: index
                }));
            set({
                carousel: {
                    ...carousel,
                    slides: newSlides,
                    updatedAt: new Date().toISOString()
                },
                selectedSlideId: selectedSlideId === id ? newSlides[0]?.id || null : selectedSlideId
            });
        },
        reorderSlides: (activeId, overId)=>{
            const { carousel } = get();
            if (!carousel) return;
            const activeIndex = carousel.slides.findIndex((s)=>s.id === activeId);
            const overIndex = carousel.slides.findIndex((s)=>s.id === overId);
            if (activeIndex === -1 || overIndex === -1) return;
            const newSlides = [
                ...carousel.slides
            ];
            const [removed] = newSlides.splice(activeIndex, 1);
            newSlides.splice(overIndex, 0, removed);
            set({
                carousel: {
                    ...carousel,
                    slides: newSlides.map((slide, index)=>({
                            ...slide,
                            order: index
                        })),
                    updatedAt: new Date().toISOString()
                }
            });
        },
        selectSlide: (id)=>{
            set({
                selectedSlideId: id
            });
        },
        applyTemplate: (template)=>{
            const { carousel } = get();
            if (!carousel) return;
            const slides = template.slides.map((slideTemplate, index)=>({
                    id: generateId(),
                    type: slideTemplate.type,
                    content: {
                        ...slideTemplate.defaultContent
                    },
                    order: index
                }));
            set({
                carousel: {
                    ...carousel,
                    slides,
                    updatedAt: new Date().toISOString()
                },
                selectedSlideId: slides[0]?.id || null
            });
        },
        setExportSettings: (settings)=>{
            set({
                exportSettings: {
                    ...get().exportSettings,
                    ...settings
                }
            });
        },
        // Preset actions
        savePreset: (name, description)=>{
            const { carousel, presets } = get();
            if (!carousel) {
                console.error('Cannot save preset: No carousel loaded');
                return;
            }
            const now = new Date().toISOString();
            const preset = {
                id: generateId(),
                name,
                description,
                carousel: JSON.parse(JSON.stringify(carousel)),
                createdAt: now,
                updatedAt: now
            };
            set({
                presets: [
                    ...presets,
                    preset
                ]
            });
        },
        loadPreset: (presetId)=>{
            const { presets } = get();
            const preset = presets.find((p)=>p.id === presetId);
            if (!preset) {
                console.error('Preset not found:', presetId);
                return;
            }
            // Validate decorator configs in all slides
            const validationErrors = [];
            preset.carousel.slides.forEach((slide)=>{
                if (slide.style?.decoratorConfig) {
                    const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$element$2d$migration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDecoratorConfig"])(slide.style.decoratorConfig);
                    if (!validation.isValid) {
                        validationErrors.push(`Slide ${slide.order + 1}: ${validation.errors.join(', ')}`);
                    }
                }
            });
            // Validate carousel-level decorator config
            if (preset.carousel.decoratorConfig) {
                const validation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$element$2d$migration$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateDecoratorConfig"])(preset.carousel.decoratorConfig);
                if (!validation.isValid) {
                    validationErrors.push(`Carousel: ${validation.errors.join(', ')}`);
                }
            }
            // Show validation errors if any
            if (validationErrors.length > 0) {
                console.warn('Preset validation errors:', validationErrors);
                if (!confirm(`This preset has ${validationErrors.length} validation error(s):\n\n${validationErrors.slice(0, 3).join('\n')}${validationErrors.length > 3 ? '\n...' : ''}\n\nLoad anyway?`)) {
                    return;
                }
            }
            // Deep clone the carousel to avoid reference issues
            const loadedCarousel = JSON.parse(JSON.stringify(preset.carousel));
            set({
                carousel: loadedCarousel,
                selectedSlideId: loadedCarousel.slides[0]?.id || null
            });
        },
        deletePreset: (presetId)=>{
            const { presets } = get();
            set({
                presets: presets.filter((p)=>p.id !== presetId)
            });
        },
        updatePreset: (presetId, name, description)=>{
            const { presets } = get();
            set({
                presets: presets.map((p)=>p.id === presetId ? {
                        ...p,
                        ...name && {
                            name
                        },
                        ...description !== undefined && {
                            description
                        },
                        updatedAt: new Date().toISOString()
                    } : p)
            });
        },
        reset: ()=>{
            set({
                carousel: null,
                selectedSlideId: null,
                exportSettings: defaultExportSettings,
                presets: [],
                history: [],
                historyIndex: -1
            });
        },
        // Phase 4: Undo/Redo actions
        undo: ()=>{
            const { history, historyIndex } = get();
            if (historyIndex > 0) {
                const previousState = history[historyIndex - 1];
                set({
                    carousel: previousState,
                    historyIndex: historyIndex - 1
                });
            }
        },
        redo: ()=>{
            const { history, historyIndex } = get();
            if (historyIndex < history.length - 1) {
                const nextState = history[historyIndex + 1];
                set({
                    carousel: nextState,
                    historyIndex: historyIndex + 1
                });
            }
        },
        canUndo: ()=>{
            const { historyIndex } = get();
            return historyIndex > 0;
        },
        canRedo: ()=>{
            const { history, historyIndex } = get();
            return historyIndex < history.length - 1;
        }
    }), {
    name: 'carousel-storage',
    partialize: (state)=>({
            carousel: state.carousel,
            exportSettings: state.exportSettings,
            presets: state.presets
        })
}));
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/canvas-store.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasStore",
    ()=>useCanvasStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/zustand/esm/react.mjs [app-ssr] (ecmascript)");
;
const useCanvasStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state (UI state only)
        selectedIds: [],
        zoom: 1,
        pan: {
            x: 0,
            y: 0
        },
        activeTool: 'select',
        editingElementId: null,
        /**
   * Select an element
   */ selectElement: (id, multiSelect = false)=>{
            set((state)=>{
                if (!multiSelect) {
                    return {
                        selectedIds: [
                            id
                        ]
                    };
                }
                // Toggle selection if multi-select
                const isSelected = state.selectedIds.includes(id);
                if (isSelected) {
                    return {
                        selectedIds: state.selectedIds.filter((selectedId)=>selectedId !== id)
                    };
                } else {
                    return {
                        selectedIds: [
                            ...state.selectedIds,
                            id
                        ]
                    };
                }
            });
            // Save selection state to localStorage (selection persistence)
            get().persistSelection();
        },
        /**
   * Deselect all elements
   */ deselectAll: ()=>{
            set({
                selectedIds: []
            });
            get().persistSelection(); // Update persisted selection
        },
        /**
   * Set zoom level
   */ setZoom: (zoom)=>{
            set({
                zoom
            });
        },
        /**
   * Set pan position
   */ setPan: (pan)=>{
            set({
                pan
            });
        },
        /**
    * Set active tool
    */ setActiveTool: (tool)=>{
            set({
                activeTool: tool
            });
        },
        /**
    * Set element currently being edited (for visual feedback)
    */ setEditingElement: (id)=>{
            set({
                editingElementId: id
            });
        },
        /**
    * Persist selection state to localStorage
    */ persistSelection: ()=>{
            const state = get();
            try {
                localStorage.setItem('canvas-selection', JSON.stringify(state.selectedIds));
            } catch (error) {
                console.error('Failed to persist selection:', error);
            }
        },
        /**
   * Restore selection state from localStorage
   *
   * Note: This function only restores selection IDs. Validation of whether
   * these IDs exist in the current slide's elements is handled by the
   * calling component (e.g., CanvasSlide).
   */ restoreSelection: ()=>{
            try {
                const savedSelection = localStorage.getItem('canvas-selection');
                if (savedSelection) {
                    const selectedIds = JSON.parse(savedSelection);
                    set({
                        selectedIds
                    });
                }
            } catch (error) {
                console.error('Failed to restore selection:', error);
            }
        },
        /**
   * Clear selection persistence
   */ clearSelectionPersistence: ()=>{
            try {
                localStorage.removeItem('canvas-selection');
            } catch (error) {
                console.error('Failed to clear selection persistence:', error);
            }
        }
    }));
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/hooks/useDecoratorConfig.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatSlideNumber",
    ()=>formatSlideNumber,
    "useDecoratorConfig",
    ()=>useDecoratorConfig,
    "usePositionStyles",
    ()=>usePositionStyles
]);
/**
 * useDecoratorConfig Hook
 *
 * This hook manages decorator configuration with proper precedence:
 * - Carousel config (base settings)
 * - Pillar config (override carousel)
 * - Slide config (override pillar)
 * - Style template (suggestion, not override)
 *
 * The hook ensures that decorators are applied consistently across all slides
 * while allowing individual slide customization when needed.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/decorators.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$unified$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/decorators/unified.ts [app-ssr] (ecmascript)");
;
;
;
/**
 * Convert decimal number to Roman numeral
 */ function toRoman(num) {
    const lookup = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };
    let roman = '';
    for(const i in lookup){
        while(num >= lookup[i]){
            roman += i;
            num -= lookup[i];
        }
    }
    return roman;
}
/**
 * Convert decimal number to circled number
 */ function toCircled(num) {
    const circled = [
        '⓪',
        '①',
        '②',
        '③',
        '④',
        '⑤',
        '⑥',
        '⑦',
        '⑧',
        '⑨',
        '⑩'
    ];
    return circled[num] || num.toString();
}
/**
 * Convert decimal number to squared number
 */ function toSquared(num) {
    const squared = [
        '⓿',
        '⓵',
        '⓶',
        '⓷',
        '⓸',
        '⓹',
        '⓺',
        '⓻',
        '⓼',
        '⓽',
        '⓾'
    ];
    return squared[num] || num.toString();
}
function formatSlideNumber(number, style) {
    switch(style){
        case 'roman':
            return toRoman(number);
        case 'circle':
            return toCircled(number);
        case 'square':
            return toSquared(number);
        case 'decimal':
        case 'minimal':
        case 'pillar-branded':
        default:
            return number.toString();
    }
}
/**
 * Helper to merge decorator config with template suggestions (only where not manually configured)
 */ function mergeWithTemplateSuggestions(baseConfig, templateSuggestions, manualConfig) {
    const result = {
        ...baseConfig
    };
    // Only apply template suggestions where manual config doesn't have that decorator
    Object.keys(templateSuggestions).forEach((key)=>{
        const decoratorKey = key;
        if (decoratorKey in manualConfig) {
            // Skip if manually configured at slide level
            return;
        }
        const templateValue = templateSuggestions[decoratorKey];
        if (templateValue) {
            // Apply template suggestion using Object.assign for type safety
            const mergedValue = Object.assign({}, result[decoratorKey], templateValue);
            result[decoratorKey] = mergedValue;
        }
    });
    return result;
}
function useDecoratorConfig(params) {
    const { carouselConfig, pillarId, slideConfig, styleTemplateId, applyTemplateSuggestions = false } = params;
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        // Step 1: Start with default configuration
        let config = {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"]
        };
        // Step 2: Apply carousel-level configuration (base)
        if (carouselConfig) {
            config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])(config, carouselConfig);
        }
        // Store carousel-level config for reference
        const carouselLevelConfig = {
            ...config
        };
        // Step 3: Apply pillar-level configuration (override carousel)
        const pillarConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$unified$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getPillarDecoratorConfig"])(pillarId);
        config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])(config, pillarConfig);
        // Store pillar-level config for reference
        const pillarLevelConfig = {
            ...config
        };
        // Step 4: Apply slide-level configuration (override EVERYTHING)
        // This MUST happen before template suggestions
        if (slideConfig) {
            config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])(config, slideConfig);
        }
        // Step 5: Apply style template suggestions (only where NOT manually configured)
        // Template suggestions are suggestions only, not overrides
        if (applyTemplateSuggestions && styleTemplateId) {
            const templateSuggestion = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$unified$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STYLE_TEMPLATE_DECORATORS"][styleTemplateId];
            if (templateSuggestion) {
                // Apply template suggestions only where manual config doesn't exist
                config = mergeWithTemplateSuggestions(config, templateSuggestion, slideConfig || {});
            }
        }
        // Track decorator sources for UI display
        const decoratorSources = {
            carousel: {},
            pillar: {},
            template: {},
            slide: {}
        };
        // Track carousel-level decorators
        if (carouselConfig) {
            Object.keys(carouselConfig).forEach((key)=>{
                decoratorSources.carousel[key] = true;
            });
        }
        // Track pillar-level decorators (only those not overridden by carousel)
        Object.keys(pillarConfig).forEach((key)=>{
            // Only mark as pillar source if not already set by carousel
            if (!decoratorSources.carousel[key]) {
                decoratorSources.pillar[key] = true;
            }
        });
        // Track template-suggested decorators (only those not manually configured)
        if (applyTemplateSuggestions && styleTemplateId) {
            const templateSuggestion = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$unified$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["STYLE_TEMPLATE_DECORATORS"][styleTemplateId];
            if (templateSuggestion) {
                Object.keys(templateSuggestion).forEach((key)=>{
                    // Only mark as template source if not manually configured at slide level
                    if (!slideConfig || !(key in slideConfig)) {
                        decoratorSources.template[key] = true;
                    }
                });
            }
        }
        // Track slide-level manually configured decorators
        if (slideConfig) {
            Object.keys(slideConfig).forEach((key)=>{
                decoratorSources.slide[key] = true;
            });
        }
        // Determine if custom overrides are applied
        const hasCustomOverrides = Boolean(slideConfig || carouselConfig);
        return {
            config,
            pillarConfig,
            carouselLevelConfig,
            hasCustomOverrides,
            decoratorSources
        };
    }, [
        carouselConfig,
        pillarId,
        slideConfig,
        styleTemplateId,
        applyTemplateSuggestions
    ]);
    return result;
}
function usePositionStyles(position) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>{
        const positions = {
            'top-left': 'top-8 left-8',
            'top-right': 'top-8 right-8',
            'bottom-left': 'bottom-8 left-8',
            'bottom-right': 'bottom-8 right-8'
        };
        return positions[position] || 'bottom-8 right-8';
    }, [
        position
    ]);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/carousel-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$editor$2f$CarouselEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/editor/CarouselEditor.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$export$2f$ExportDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/download.js [app-ssr] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/save.js [app-ssr] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-ssr] (ecmascript) <export default as FolderOpen>");
'use client';
;
;
;
;
;
;
;
function HomePage() {
    const { carousel, createCarousel, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarouselStore"])();
    const [showExport, setShowExport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNewCarousel, setShowNewCarousel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newName, setNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    const [newPillar, setNewPillar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('p1');
    // Auto-show new carousel dialog if none exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!carousel) {
            setShowNewCarousel(true);
        }
    }, [
        carousel
    ]);
    const handleCreate = ()=>{
        if (!newName.trim()) return;
        createCarousel(newName.trim(), newPillar);
        setShowNewCarousel(false);
        setNewName('');
    };
    const handleExportJSON = ()=>{
        if (!carousel) return;
        const data = JSON.stringify(carousel, null, 2);
        const blob = new Blob([
            data
        ], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${carousel.name}_carousel.json`;
        link.click();
        URL.revokeObjectURL(url);
    };
    const handleImportJSON = (e)=>{
        const file = e.target.files?.[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = (event)=>{
            try {
                const data = JSON.parse(event.target?.result);
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarouselStore"].getState().loadCarousel(data);
            } catch (error) {
                alert('Invalid JSON file');
            }
        };
        reader.readAsText(file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex-shrink-0 border-b border-white/10 px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                    children: "Carousel Generator"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                carousel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "text-white/60 text-sm",
                                    children: carousel.name
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 71,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                            lineNumber: 66,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowNewCarousel(true),
                                    className: "flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 82,
                                            columnNumber: 15
                                        }, this),
                                        "New"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        "Import",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "file",
                                            accept: ".json",
                                            onChange: handleImportJSON,
                                            className: "hidden"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 89,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 86,
                                    columnNumber: 13
                                }, this),
                                carousel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleExportJSON,
                                            className: "flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                                    lineNumber: 103,
                                                    columnNumber: 19
                                                }, this),
                                                "Save JSON"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 99,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowExport(true),
                                            className: "flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
                                                    className: "w-4 h-4"
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                                    lineNumber: 111,
                                                    columnNumber: 19
                                                }, this),
                                                "Export PNG"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 107,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                            lineNumber: 77,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                lineNumber: 64,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-6 overflow-hidden min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$editor$2f$CarouselEditor$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CarouselEditor"], {}, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$export$2f$ExportDialog$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportDialog"], {
                isOpen: showExport,
                onClose: ()=>setShowExport(false)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            showNewCarousel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-900 rounded-2xl w-full max-w-md p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-white mb-6",
                            children: "Create New Carousel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-white/70 mb-2",
                                            children: "Carousel Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: newName,
                                            onChange: (e)=>setNewName(e.target.value),
                                            placeholder: "My Awesome Carousel",
                                            className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-white/40",
                                            autoFocus: true
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 141,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 137,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-white/70 mb-2",
                                            children: "Pillar Theme"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pillarList"].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setNewPillar(pillar.id),
                                                    className: `px-3 py-2 rounded-lg text-sm transition-all border-2 ${newPillar === pillar.id ? 'border-white text-white' : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'}`,
                                                    style: {
                                                        backgroundColor: newPillar === pillar.id ? pillar.primaryColor + '20' : undefined
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "inline-block w-2 h-2 rounded-full mr-2",
                                                            style: {
                                                                backgroundColor: pillar.primaryColor
                                                            }
                                                        }, void 0, false, {
                                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                                            lineNumber: 172,
                                                            columnNumber: 23
                                                        }, this),
                                                        pillar.name
                                                    ]
                                                }, pillar.id, true, {
                                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                                    lineNumber: 157,
                                                    columnNumber: 21
                                                }, this))
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 155,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 151,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                            lineNumber: 136,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-6",
                            children: [
                                carousel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowNewCarousel(false),
                                    className: "px-4 py-2 text-white/70 hover:text-white transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: handleCreate,
                                    disabled: !newName.trim(),
                                    className: "px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",
                                    children: "Create Carousel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 192,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                            lineNumber: 183,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                    lineNumber: 131,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                lineNumber: 130,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
        lineNumber: 62,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=3a06e_Empire-Management_03_INFRASTRUCTURE_02_Codebase_carousel-generator_src_77391329._.js.map