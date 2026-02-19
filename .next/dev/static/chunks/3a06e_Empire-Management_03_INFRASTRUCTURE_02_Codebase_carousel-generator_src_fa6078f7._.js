(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/position-translation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "canvasToDomPosition",
    ()=>canvasToDomPosition,
    "detectAlignment",
    ()=>detectAlignment,
    "domToCanvasPosition",
    ()=>domToCanvasPosition,
    "getDefaultYPosition",
    ()=>getDefaultYPosition,
    "isBottomEdgePosition",
    ()=>isBottomEdgePosition,
    "isCenterPosition",
    ()=>isCenterPosition,
    "isEdgePosition",
    ()=>isEdgePosition,
    "isLeftEdgePosition",
    ()=>isLeftEdgePosition,
    "isRightEdgePosition",
    ()=>isRightEdgePosition,
    "isTopEdgePosition",
    ()=>isTopEdgePosition,
    "preserveRotation",
    ()=>preserveRotation
]);
/**
 * Position Translation Module
 *
 * Provides bidirectional translation between DOM positioning (CSS flexbox/percentages)
 * and Canvas positioning (pixel coordinates).
 *
 * This module implements smart position detection to preserve positioning intent
 * through mode switches, ensuring that auto-layout elements stay auto-layout when
 * possible.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/constants.ts [app-client] (ecmascript)");
;
/**
 * Threshold for considering positions "close enough" to be the same
 * Used for smart position detection
 */ const POSITION_TOLERANCE = 20; // pixels
/**
 * Center position of the slide
 */ const SLIDE_CENTER_X = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] / 2;
const SLIDE_CENTER_Y = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"] / 2;
function isCenterPosition(element) {
    // Calculate element center
    const elementCenterX = element.x + element.width / 2;
    const elementCenterY = element.y + element.height / 2;
    // Check if element center is close to slide center
    const isXCentered = Math.abs(elementCenterX - SLIDE_CENTER_X) <= POSITION_TOLERANCE;
    const isYCentered = Math.abs(elementCenterY - SLIDE_CENTER_Y) <= POSITION_TOLERANCE;
    return isXCentered && isYCentered;
}
function isLeftEdgePosition(element) {
    return Math.abs(element.x) <= POSITION_TOLERANCE;
}
function isRightEdgePosition(element) {
    return Math.abs(element.x + element.width - __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"]) <= POSITION_TOLERANCE;
}
function isTopEdgePosition(element) {
    return Math.abs(element.y) <= POSITION_TOLERANCE;
}
function isBottomEdgePosition(element) {
    return Math.abs(element.y + element.height - __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"]) <= POSITION_TOLERANCE;
}
function isEdgePosition(element) {
    return isLeftEdgePosition(element) || isRightEdgePosition(element) || isTopEdgePosition(element) || isBottomEdgePosition(element);
}
function detectAlignment(element) {
    const elementCenterX = element.x + element.width / 2;
    if (Math.abs(elementCenterX - SLIDE_CENTER_X) <= POSITION_TOLERANCE) {
        return 'center';
    } else if (Math.abs(element.x) <= POSITION_TOLERANCE) {
        return 'left';
    } else {
        return 'right';
    }
}
function domToCanvasPosition(position, elementWidth, elementHeight, defaultY = 200) {
    // Default to auto layout
    if (!position || position.mode === 'auto') {
        const alignment = position?.alignment || 'center';
        let x;
        switch(alignment){
            case 'left':
                x = 40; // Left margin
                break;
            case 'right':
                x = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] - elementWidth - 40; // Right margin
                break;
            case 'center':
            default:
                x = SLIDE_CENTER_X - elementWidth / 2;
                break;
        }
        // Calculate Y position with margin if specified
        let y = defaultY;
        if (position?.marginTop) {
            y += position.marginTop;
        }
        return {
            x,
            y,
            _mode: 'auto',
            _alignment: alignment
        };
    }
    // Absolute positioning
    if (position.mode === 'absolute') {
        const x = (position.x || 0) / 100 * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"];
        const y = (position.y || 0) / 100 * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"];
        return {
            x,
            y,
            _mode: 'absolute',
            _alignment: position.alignment
        };
    }
    // Relative positioning (treated as absolute with offset)
    if (position.mode === 'relative') {
        let x = (position.x || 0) / 100 * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"];
        let y = (position.y || 0) / 100 * __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"];
        // Apply margin offsets
        if (position.marginTop) {
            y += position.marginTop;
        }
        if (position.marginLeft) {
            x += position.marginLeft;
        }
        return {
            x,
            y,
            _mode: 'relative',
            _alignment: position.alignment
        };
    }
    // Fallback to auto layout
    return {
        x: SLIDE_CENTER_X - elementWidth / 2,
        y: defaultY,
        _mode: 'auto',
        _alignment: 'center'
    };
}
function canvasToDomPosition(element, originalPosition) {
    // Check if we have original position metadata
    const originalMode = originalPosition?.mode || 'auto';
    // Smart detection: Try to preserve auto layout when possible
    if (originalMode === 'auto' && isCenterPosition(element)) {
        // Element is still centered, preserve auto layout
        return {
            mode: 'auto',
            alignment: 'center'
        };
    }
    if (originalMode === 'auto' && isEdgePosition(element)) {
        // Element is at edge, preserve auto layout with appropriate alignment
        let alignment = 'center';
        if (isLeftEdgePosition(element)) {
            alignment = 'left';
        } else if (isRightEdgePosition(element)) {
            alignment = 'right';
        }
        // Calculate margin offset if moved from default position
        const defaultY = 200; // Default headline Y position
        const marginTop = element.y - defaultY;
        if (marginTop !== 0) {
            return {
                mode: 'auto',
                alignment,
                marginTop: marginTop > 0 ? marginTop : undefined,
                marginBottom: marginTop < 0 ? Math.abs(marginTop) : undefined
            };
        }
        return {
            mode: 'auto',
            alignment
        };
    }
    // Convert to absolute positioning
    const x = element.x / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] * 100;
    const y = element.y / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"] * 100;
    const width = element.width / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] * 100;
    const height = element.height / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"] * 100;
    return {
        mode: 'absolute',
        x: Math.round(x * 100) / 100,
        y: Math.round(y * 100) / 100,
        width: Math.round(width * 100) / 100,
        height: Math.round(height * 100) / 100,
        rotation: element.rotation
    };
}
function getDefaultYPosition(elementType) {
    const defaultPositions = {
        headline: 200,
        subtext: 350,
        bullets: 400,
        quote: 300,
        attribution: 500,
        image: 200
    };
    return defaultPositions[elementType] || 200;
}
function preserveRotation(rotation = 0) {
    // Normalize rotation to 0-360 range
    let normalized = rotation % 360;
    if (normalized < 0) {
        normalized += 360;
    }
    return normalized;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/dom-canvas-translation.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * DOM/Canvas Translation Module
 *
 * Provides bidirectional translation between DOM mode and Canvas mode.
 * This module implements Phase 3 of the DOM/Canvas integration plan.
 *
 * Key Features:
 * - domToCanvas(): Convert DOM slide content to Canvas elements
 * - canvasToDom(): Convert Canvas elements to DOM slide content
 * - Conflict resolution (theme vs. overrides)
 * - Round-trip preservation
 *
 * Translation Flow:
 * DOM Mode → Canvas Mode: Uses migration functions + position translation
 * Canvas Mode → DOM Mode: Uses smart detection + style extraction
 */ __turbopack_context__.s([
    "canvasToDom",
    ()=>canvasToDom,
    "domToCanvas",
    ()=>domToCanvas,
    "resolveStyleConflict",
    ()=>resolveStyleConflict,
    "testRoundTrip",
    ()=>testRoundTrip,
    "validateTranslationResult",
    ()=>validateTranslationResult
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$element$2d$migration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/element-migration.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$position$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/position-translation.ts [app-client] (ecmascript)");
;
;
;
function domToCanvas(slide, theme, styleTemplate, subTypeConfig, decoratorConfig, options = {}) {
    const warnings = [];
    let conflictsResolved = 0;
    // Apply default options
    const opts = {
        preserveMode: options.preserveMode ?? true,
        applyTheme: options.applyTheme ?? true,
        extractOverrides: options.extractOverrides ?? true,
        smartDetection: options.smartDetection ?? true
    };
    // Migrate slide to canvas using existing migration function
    // This function already respects the useTheme flag (Phase 1)
    let canvasElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$element$2d$migration$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["migrateSlideToCanvas"])(slide, opts.applyTheme ? theme : undefined, styleTemplate, subTypeConfig, decoratorConfig);
    // Enhance canvas elements with position mode tags if preserveMode is enabled
    if (opts.preserveMode) {
        canvasElements = canvasElements.map((element)=>{
            // Skip background, decorators, and locked elements
            if (element.locked || element.type === 'background' || element.type === 'decorator') {
                return element;
            }
            // Only process text elements (headline, subtext, bullets, quote, attribution)
            if (element.type !== 'text') {
                return element;
            }
            // Get element ID to determine which content field it represents
            const elementId = element.id;
            const contentType = elementId.split('-').pop();
            if (!contentType) {
                return element;
            }
            // Get position from slide content
            let position;
            if (contentType === 'headline') {
                position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(slide.content.headline);
            } else if (contentType === 'subtext') {
                position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(slide.content.subtext);
            } else if (contentType === 'bullets') {
                position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(slide.content.bullets);
            } else if (contentType === 'quote') {
                position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(slide.content.quote);
            } else if (contentType === 'attribution') {
                position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(slide.content.attribution);
            }
            // Skip if no position
            if (!position) {
                return element;
            }
            // Convert DOM position to Canvas position
            const canvasPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$position$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domToCanvasPosition"])(position, element.width, element.height, element.y // Use current Y as default
            );
            // Update element with position mode tags
            return {
                ...element,
                _mode: canvasPosition._mode,
                _alignment: canvasPosition._alignment,
                _originalPosition: position
            };
        });
    }
    // Build result metadata
    const metadata = {
        elementCount: canvasElements.length,
        conflictsResolved,
        modePreserved: opts.preserveMode,
        warnings
    };
    return {
        content: canvasElements,
        metadata
    };
}
function canvasToDom(elements, slide, options = {}) {
    const warnings = [];
    let conflictsResolved = 0;
    const contentUpdates = {};
    // Apply default options
    const opts = {
        preserveMode: options.preserveMode ?? true,
        applyTheme: options.applyTheme ?? true,
        extractOverrides: options.extractOverrides ?? true,
        smartDetection: options.smartDetection ?? true
    };
    // Process each canvas element
    for (const element of elements){
        // Skip background, decorators, and locked elements
        if (element.locked || element.type === 'background' || element.type === 'decorator') {
            continue;
        }
        // Only process text elements (headline, subtext, bullets, quote, attribution)
        if (element.type !== 'text') {
            continue;
        }
        // Get element ID to determine which content field it represents
        const elementId = element.id;
        const contentType = elementId.split('-').pop();
        if (!contentType) {
            warnings.push(`Unknown element type for ID: ${elementId}`);
            continue;
        }
        // Get original position from element metadata (if available)
        const originalPosition = element._originalPosition;
        // Get current position from element
        const currentPosition = {
            x: element.x,
            y: element.y,
            width: element.width,
            height: element.height,
            rotation: element.rotation
        };
        // Convert Canvas position to DOM position using smart detection
        let domPosition;
        if (opts.smartDetection && opts.preserveMode) {
            // Use smart detection to preserve positioning intent
            domPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$position$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canvasToDomPosition"])(currentPosition, originalPosition);
        } else {
            // Force absolute positioning (fallback)
            domPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$position$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canvasToDomPosition"])(currentPosition, undefined);
        }
        // Extract style overrides if enabled
        let styleOverrides;
        if (opts.extractOverrides) {
            // Check if element has custom styling (useTheme flag is false)
            const elementData = element.data;
            const useTheme = elementData._useTheme ?? true;
            if (!useTheme) {
                // Extract style overrides from element data
                styleOverrides = {
                    fontSize: elementData.fontSize,
                    fontFamily: elementData.fontFamily,
                    fontWeight: elementData.fontWeight,
                    color: elementData.color,
                    lineHeight: elementData.lineHeight,
                    letterSpacing: elementData.letterSpacing,
                    fontStyle: elementData.fontStyle,
                    textDecoration: elementData.textDecoration,
                    useTheme: false
                };
            } else {
                // Preserve useTheme: true if it was true
                styleOverrides = {
                    useTheme: true
                };
            }
        }
        // Get content value from element data
        const elementData = element.data;
        let contentValue = elementData.content;
        // Format content based on type
        if (contentType === 'bullets') {
            // Split bullets by newline
            contentValue = contentValue.split('\n').map((bullet)=>{
                // Remove bullet point prefix if present
                return bullet.replace(/^[•\-\*]\s*/, '').trim();
            });
        } else if (contentType === 'quote') {
            // Remove quote marks if present
            contentValue = contentValue.replace(/^"|"$/g, '');
        } else if (contentType === 'attribution') {
            // Remove dash prefix if present
            contentValue = contentValue.replace(/^-\s*/, '');
        }
        // Build positioned content
        const positionedContent = {
            value: contentValue,
            position: domPosition
        };
        // Add style overrides if available
        if (styleOverrides && Object.keys(styleOverrides).length > 0) {
            positionedContent.style = styleOverrides;
        }
        // Update content based on type
        switch(contentType){
            case 'headline':
                contentUpdates.headline = positionedContent;
                break;
            case 'subtext':
                contentUpdates.subtext = positionedContent;
                break;
            case 'bullets':
                contentUpdates.bullets = positionedContent;
                break;
            case 'quote':
                contentUpdates.quote = positionedContent;
                break;
            case 'attribution':
                contentUpdates.attribution = positionedContent;
                break;
            default:
                warnings.push(`Unhandled content type: ${contentType}`);
        }
    }
    // Build result metadata
    const metadata = {
        elementCount: Object.keys(contentUpdates).length,
        conflictsResolved,
        modePreserved: opts.preserveMode,
        warnings
    };
    return {
        content: contentUpdates,
        metadata
    };
}
function resolveStyleConflict(themeStyle, overrideStyle, useTheme) {
    if (useTheme) {
        // Use theme styling, but allow specific overrides if provided
        return {
            ...themeStyle,
            useTheme: true
        };
    } else {
        // Use override styling
        return {
            ...overrideStyle,
            useTheme: false
        };
    }
}
function validateTranslationResult(result) {
    const issues = [];
    // Check for warnings
    if (result.metadata.warnings.length > 0) {
        issues.push(...result.metadata.warnings);
    }
    // Check if any elements were translated
    if (result.metadata.elementCount === 0) {
        issues.push('No elements were translated');
    }
    // Check for conflicts
    if (result.metadata.conflictsResolved > 0) {
        issues.push(`${result.metadata.conflictsResolved} conflicts were resolved`);
    }
    return {
        isValid: issues.length === 0,
        hasIssues: issues.length > 0,
        issues
    };
}
function testRoundTrip(slide, theme, styleTemplate, subTypeConfig, decoratorConfig) {
    const issues = [];
    // Step 1: DOM → Canvas
    const domToCanvasResult = domToCanvas(slide, theme, styleTemplate, subTypeConfig, decoratorConfig, {
        preserveMode: true,
        smartDetection: true
    });
    const canvasElements = domToCanvasResult.content;
    // Step 2: Canvas → DOM
    const canvasToDomResult = canvasToDom(canvasElements, slide, {
        preserveMode: true,
        smartDetection: true
    });
    const domContent = canvasToDomResult.content;
    // Step 3: Compare original and round-trip content
    const originalContent = slide.content;
    const roundTripContent = domContent;
    // Check if all content fields are preserved
    const contentFields = [
        'headline',
        'subtext',
        'bullets',
        'quote',
        'attribution'
    ];
    for (const field of contentFields){
        const originalValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(originalContent[field]);
        const roundTripValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(roundTripContent[field]);
        // Compare values (handle arrays for bullets)
        if (Array.isArray(originalValue) && Array.isArray(roundTripValue)) {
            if (JSON.stringify(originalValue) !== JSON.stringify(roundTripValue)) {
                issues.push(`${field} content mismatch after round-trip`);
            }
        } else if (originalValue !== roundTripValue) {
            issues.push(`${field} content mismatch after round-trip`);
        }
    }
    // Check if mode is preserved
    for (const field of contentFields){
        const originalPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(originalContent[field]);
        const roundTripPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(roundTripContent[field]);
        if (originalPosition?.mode !== roundTripPosition?.mode) {
            issues.push(`${field} mode not preserved: ${originalPosition?.mode} → ${roundTripPosition?.mode}`);
        }
    }
    return {
        success: issues.length === 0,
        issues,
        metadata: {
            domToCanvasElements: domToCanvasResult.metadata.elementCount,
            canvasToDomElements: canvasToDomResult.metadata.elementCount,
            modePreserved: domToCanvasResult.metadata.modePreserved && canvasToDomResult.metadata.modePreserved
        }
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/hooks/useCanvasElements.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasElements",
    ()=>useCanvasElements,
    "useCanvasElementsSimple",
    ()=>useCanvasElementsSimple
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/styles/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$dom$2d$canvas$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/dom-canvas-translation.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
;
;
;
;
function useCanvasElements(slide, pillar, subTypeConfig, decoratorConfig) {
    _s();
    // Get theme and style template
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPillarTheme"])(pillar);
    const styleTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleTemplate"])(slide.style?.template || 'minimal') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleTemplate"])('minimal');
    // Computed migration (no state change)
    // Elements are computed from slide data on-demand
    const canvasElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useCanvasElements.useMemo[canvasElements]": ()=>{
            console.log('[useCanvasElements] Computing canvas elements for slide:', slide.id);
            // Phase 3: Use domToCanvas translation function
            // This preserves position mode tags and respects useTheme flag
            const translationResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$dom$2d$canvas$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["domToCanvas"])(slide, theme, styleTemplate, subTypeConfig, decoratorConfig, {
                preserveMode: true,
                applyTheme: true,
                extractOverrides: true,
                smartDetection: true
            });
            const elements = translationResult.content;
            console.log('[useCanvasElements] Computed', elements.length, 'canvas elements');
            console.log('[useCanvasElements] Mode preserved:', translationResult.metadata.modePreserved);
            console.log('[useCanvasElements] Conflicts resolved:', translationResult.metadata.conflictsResolved);
            if (translationResult.metadata.warnings.length > 0) {
                console.warn('[useCanvasElements] Warnings:', translationResult.metadata.warnings);
            }
            return elements;
        }
    }["useCanvasElements.useMemo[canvasElements]"], [
        slide,
        theme,
        styleTemplate,
        subTypeConfig,
        decoratorConfig
    ]);
    return canvasElements;
}
_s(useCanvasElements, "Oq7tccNX6xyzypPg0YGvbxwZuUo=");
function useCanvasElementsSimple(slide, pillar) {
    _s1();
    // Get sub-type configuration
    const getDefaultSubTypeForSlideType = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)").getDefaultSubTypeForSlideType;
    const getSubType = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/slide-subtypes/index.ts [app-client] (ecmascript)").getSubType;
    const subTypeConfig = getSubType(slide.subType || getDefaultSubTypeForSlideType(slide.type));
    // Get decorator config hook
    const { useDecoratorConfig } = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/hooks/useDecoratorConfig.ts [app-client] (ecmascript)");
    const { config: decoratorConfig } = useDecoratorConfig({
        pillarId: pillar,
        slideConfig: slide.style?.decoratorConfig,
        styleTemplateId: slide.style?.template,
        applyTemplateSuggestions: true
    });
    return useCanvasElements(slide, pillar, subTypeConfig, decoratorConfig);
}
_s1(useCanvasElementsSimple, "KxHMRirYPfzKGgODELIn7cy49Bk=", true, function() {
    return [
        useCanvasElements
    ];
});
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CanvasSlide",
    ()=>CanvasSlide,
    "CanvasSlideEditor",
    ()=>CanvasSlideEditor,
    "CanvasSlidePreview",
    ()=>CanvasSlidePreview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/hooks/useDecoratorConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/canvas-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/carousel-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useCanvasElements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/hooks/useCanvasElements.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$TextElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/TextElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$ImageElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BackgroundElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$DecoratorElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$CTAElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$position$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/position-translation.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
/**
 * Convert canvas element to slide content
 *
 * Converts a single canvas element update to slide content format.
 * This is used for immediate sync when elements are updated in canvas mode.
 *
 * Phase 2 Enhancement: Uses smart position detection to preserve positioning intent.
 * - Auto-layout elements stay auto-layout when at center/edge positions
 * - Absolute positioning preserved for custom positions
 * - Rotation preserved through conversion
 *
 * @param element - Canvas element to convert
 * @param originalPosition - Original DOM position (if available) for mode preservation
 * @returns Slide content update or null if not applicable
 */ function convertCanvasElementToSlideContent(element, originalPosition) {
    // Calculate position using smart detection
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$position$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["canvasToDomPosition"])({
        x: element.x,
        y: element.y,
        width: element.width,
        height: element.height,
        rotation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$position$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preserveRotation"])(element.rotation)
    }, originalPosition);
    // Only sync text and image elements (background, decorator, CTA are handled separately)
    if (element.type === 'text') {
        const textData = element.data;
        if (element.name === 'Headline') {
            return {
                headline: {
                    value: textData.content,
                    position
                }
            };
        } else if (element.name === 'Subtext') {
            return {
                subtext: {
                    value: textData.content,
                    position
                }
            };
        } else if (element.name === 'Bullets') {
            // Parse bullets from content
            const bulletLines = textData.content.split('\n');
            const bullets = bulletLines.map((line)=>line.replace(/^[•\-*]\s*/, '').trim()).filter((line)=>line.length > 0);
            return {
                bullets: {
                    value: bullets,
                    position
                }
            };
        } else if (element.name === 'Quote') {
            // Remove quote marks
            const quoteValue = textData.content.replace(/^"|"$/g, '');
            return {
                quote: {
                    value: quoteValue,
                    position
                }
            };
        } else if (element.name === 'Attribution') {
            // Remove dash
            const attributionValue = textData.content.replace(/^-\s*/, '');
            return {
                attribution: {
                    value: attributionValue,
                    position
                }
            };
        }
    } else if (element.type === 'image') {
        const imageData = element.data;
        return {
            imageConfig: {
                imageUrl: imageData.url,
                position: 'half-right',
                size: element.width / __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] * 100,
                rotation: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$canvas$2f$position$2d$translation$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["preserveRotation"])(element.rotation),
                opacity: element.opacity,
                objectFit: imageData.objectFit,
                filters: {
                    blur: imageData.filters.blur,
                    grayscale: imageData.filters.grayscale,
                    sepia: imageData.filters.sepia,
                    saturate: imageData.filters.saturate,
                    brightness: imageData.filters.brightness,
                    contrast: imageData.filters.contrast
                },
                borderRadius: imageData.borderRadius,
                borderWidth: imageData.borderWidth,
                borderColor: imageData.borderColor,
                shadow: imageData.shadow,
                blendMode: imageData.blendMode
            }
        };
    }
    // Note: background, decorator, and CTA are not synced here as they are
    // managed through slide.style and slide.cta properties
    return null;
}
const CanvasSlide = ({ slide, pillar, carouselTotalSlides, carouselBackgroundPack, carouselDecoratorConfig, isPreview = false, scale = 1, onElementsChange, onElementDelete })=>{
    _s();
    // Edge Case: Missing slide data
    if (!slide) {
        console.error('[CanvasSlide] No slide data provided');
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-full h-full bg-gray-100 text-gray-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-semibold",
                        children: "No slide data"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "Please select a slide to edit"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 202,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
            lineNumber: 199,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Edge Case: Invalid slide ID
    if (!slide.id) {
        console.error('[CanvasSlide] Slide missing ID:', slide);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-full h-full bg-red-50 text-red-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-semibold",
                        children: "Invalid slide data"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 214,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "Slide is missing required ID"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 215,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                lineNumber: 213,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
            lineNumber: 212,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Store updateSlide in ref to keep dependency array stable
    const { updateSlide } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarouselStore"])();
    const updateSlideRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(updateSlide);
    updateSlideRef.current = updateSlide;
    // Get selection state from canvas store (UI state only)
    const { selectedIds } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])();
    // Track local element state (for rendering)
    // Stores partial updates to elements (user edits that haven't been synced yet)
    const localElementsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(new Map());
    // Get sub-type configuration
    const { getSubType } = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/slide-subtypes/index.ts [app-client] (ecmascript)");
    const subTypeConfig = getSubType(slide.subType || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultSubTypeForSlideType"])(slide.type));
    // Use unified decorator config system
    const { config: decoratorConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDecoratorConfig"])({
        carouselConfig: carouselDecoratorConfig,
        pillarId: pillar,
        slideConfig: slide.style?.decoratorConfig,
        styleTemplateId: slide.style?.template,
        applyTemplateSuggestions: true
    });
    // Compute canvas elements from slide data (single source of truth)
    // Edge Case: Wrap in try-catch to handle migration errors
    let computedElements = [];
    let migrationError = null;
    try {
        computedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useCanvasElements$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasElements"])(slide, pillar, subTypeConfig, decoratorConfig);
    } catch (error) {
        migrationError = error instanceof Error ? error : new Error(String(error));
        console.error('[CanvasSlide] Migration failed:', migrationError);
    }
    // Merge computed elements with local modifications
    // This preserves user edits while keeping sync with slide data
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CanvasSlide.useMemo[elements]": ()=>{
            const merged = new Map();
            // Start with computed elements
            computedElements.forEach({
                "CanvasSlide.useMemo[elements]": (element)=>{
                    // Edge Case: Skip invalid elements
                    if (!element || !element.id || !element.type) {
                        console.warn('[CanvasSlide] Skipping invalid element:', element);
                        return;
                    }
                    merged.set(element.id, element);
                }
            }["CanvasSlide.useMemo[elements]"]);
            // Apply local modifications (user edits)
            localElementsRef.current.forEach({
                "CanvasSlide.useMemo[elements]": (element, id)=>{
                    if (merged.has(id)) {
                        // Merge local modifications with computed element
                        merged.set(id, {
                            ...merged.get(id),
                            ...element
                        });
                    }
                }
            }["CanvasSlide.useMemo[elements]"]);
            // Phase 4: Expose elements to parent (PropertyPanel, LayerPanel)
            if (onElementsChange) {
                const elementsArray = Array.from(merged.values());
                onElementsChange(elementsArray);
            }
            return merged;
        }
    }["CanvasSlide.useMemo[elements]"], [
        computedElements,
        onElementsChange
    ]);
    // Handle element update (writes to carousel-store)
    const handleElementUpdate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasSlide.useCallback[handleElementUpdate]": (elementId, updates)=>{
            console.log('[CanvasSlide] Element update:', elementId, updates);
            // Edge Case: Invalid element ID
            if (!elementId) {
                console.warn('[CanvasSlide] Element update called with invalid element ID');
                return;
            }
            // Update local state (for immediate feedback)
            // Note: We store partial updates and merge them when computing elements
            const existingUpdate = localElementsRef.current.get(elementId) || {};
            localElementsRef.current.set(elementId, {
                ...existingUpdate,
                ...updates
            });
            // Convert canvas update to slide update
            const element = elements.get(elementId);
            if (!element) {
                console.warn('[CanvasSlide] Element not found:', elementId);
                return;
            }
            // Edge Case: Skip updates in preview mode
            if (isPreview) {
                console.log('[CanvasSlide] Skipping update in preview mode');
                return;
            }
            // Edge Case: Skip empty updates
            if (!updates || Object.keys(updates).length === 0) {
                console.warn('[CanvasSlide] Skipping empty update');
                return;
            }
            try {
                const updatedElement = {
                    ...element,
                    ...updates
                };
                // Get original position for mode preservation
                let originalPosition = undefined;
                const elementName = element.name;
                if (elementName && slide.content) {
                    // Map element name to content field
                    const contentFieldMap = {
                        'Headline': 'headline',
                        'Subtext': 'subtext',
                        'Bullets': 'bullets',
                        'Quote': 'quote',
                        'Attribution': 'attribution'
                    };
                    const field = contentFieldMap[elementName];
                    if (field) {
                        const content = slide.content[field];
                        if (content && typeof content === 'object' && 'position' in content) {
                            originalPosition = content.position;
                        }
                    }
                }
                const slideContent = convertCanvasElementToSlideContent(updatedElement, originalPosition);
                // Write to carousel-store (single source of truth)
                if (slideContent) {
                    console.log('[CanvasSlide] Writing to carousel-store:', slide.id, slideContent);
                    updateSlideRef.current(slide.id, slideContent);
                }
            } catch (error) {
                console.error('[CanvasSlide] Error updating slide:', error);
            // Don't throw - let the user continue editing
            }
        }
    }["CanvasSlide.useCallback[handleElementUpdate]"], [
        elements,
        slide.id,
        isPreview,
        slide.content
    ]);
    // Phase 4: Handle element deletion
    const handleElementDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasSlide.useCallback[handleElementDelete]": (elementId)=>{
            console.log('[CanvasSlide] Element delete:', elementId);
            // Edge Case: Invalid element ID
            if (!elementId) {
                console.warn('[CanvasSlide] Element delete called with invalid element ID');
                return;
            }
            // Edge Case: Skip deletion in preview mode
            if (isPreview) {
                console.log('[CanvasSlide] Skipping delete in preview mode');
                return;
            }
            const element = elements.get(elementId);
            if (!element) {
                console.warn('[CanvasSlide] Element not found for deletion:', elementId);
                return;
            }
            // Map element name to content field
            const contentFieldMap = {
                'Headline': 'headline',
                'Subtext': 'subtext',
                'Bullets': 'bullets',
                'Quote': 'quote',
                'Attribution': 'attribution'
            };
            const field = contentFieldMap[element.name];
            if (field) {
                // Clear the content field to delete the element
                updateSlideRef.current(slide.id, {
                    [field]: undefined
                });
            } else {
                console.warn('[CanvasSlide] Cannot delete element type:', element.name);
            }
            // Call parent callback if provided
            if (onElementDelete) {
                onElementDelete(elementId);
            }
        }
    }["CanvasSlide.useCallback[handleElementDelete]"], [
        elements,
        slide.id,
        isPreview,
        onElementDelete
    ]);
    // Phase 4: Expose functions via onElementsChange callback
    // We'll pass the current elements AND the update/delete functions
    if (onElementsChange) {
        const elementsArray = Array.from(elements.values());
        onElementsChange(elementsArray);
    }
    // Get sorted elements by zIndex
    const sortedElements = Array.from(elements.values()).sort((a, b)=>a.zIndex - b.zIndex);
    // Handle element selection
    const handleElementSelect = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasSlide.useCallback[handleElementSelect]": (elementId)=>{
            if (!isPreview) {
                const { selectElement } = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"].getState();
                selectElement(elementId, false);
            }
        }
    }["CanvasSlide.useCallback[handleElementSelect]"], [
        isPreview
    ]);
    // Handle element transform
    const handleElementTransform = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasSlide.useCallback[handleElementTransform]": (elementId)=>({
                "CanvasSlide.useCallback[handleElementTransform]": (transform)=>{
                    console.log('[CanvasSlide] Transform called for', elementId, ':', transform);
                    handleElementUpdate(elementId, transform);
                }
            })["CanvasSlide.useCallback[handleElementTransform]"]
    }["CanvasSlide.useCallback[handleElementTransform]"], [
        handleElementUpdate
    ]);
    // Render element based on type
    const renderElement = (element)=>{
        // Edge Case: Skip invalid elements
        if (!element || !element.id || !element.type) {
            console.warn('[CanvasSlide] Skipping invalid element in render:', element);
            return null;
        }
        const isSelected = selectedIds.includes(element.id);
        const onSelect = handleElementSelect;
        const onTransform = handleElementTransform(element.id);
        try {
            switch(element.type){
                case 'text':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$TextElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TextElement"], {
                        element: element,
                        isSelected: isSelected,
                        onSelect: onSelect,
                        onTransform: onTransform
                    }, element.id, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 448,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                case 'image':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$ImageElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageElement"], {
                        element: element,
                        isSelected: isSelected,
                        onSelect: onSelect,
                        onTransform: onTransform
                    }, element.id, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 459,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                case 'background':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BackgroundElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BackgroundElement"], {
                        element: element,
                        isSelected: isSelected,
                        onSelect: onSelect,
                        onTransform: onTransform
                    }, element.id, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 470,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                case 'decorator':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$DecoratorElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecoratorElement"], {
                        element: element,
                        isSelected: isSelected,
                        onSelect: onSelect,
                        onTransform: onTransform
                    }, element.id, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 481,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                case 'cta':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$CTAElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTAElement"], {
                        element: element,
                        isSelected: isSelected,
                        onSelect: onSelect,
                        onTransform: onTransform
                    }, element.id, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 492,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                default:
                    console.warn(`[CanvasSlide] Unknown element type: ${element.type}`);
                    return null;
            }
        } catch (error) {
            console.error(`[CanvasSlide] Error rendering element ${element.id}:`, error);
            return null;
        }
    };
    // Edge Case: Migration error display
    if (migrationError) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex items-center justify-center w-full h-full bg-red-50 text-red-500",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg font-semibold",
                        children: "Migration failed"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 516,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: migrationError.message
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 517,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xs mt-2",
                        children: "Please check the console for details"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 518,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                lineNumber: 515,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
            lineNumber: 514,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Edge Case: Empty slide (no elements)
    if (sortedElements.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
            width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] * scale,
            height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"] * scale,
            scaleX: scale,
            scaleY: scale,
            className: "canvas-slide",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-center w-full h-full text-gray-400 text-sm",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "No elements to display"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 536,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                    lineNumber: 535,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                lineNumber: 534,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
            lineNumber: 527,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Stage"], {
        width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] * scale,
        height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"] * scale,
        scaleX: scale,
        scaleY: scale,
        className: "canvas-slide",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Layer"], {
            children: sortedElements.map((element)=>renderElement(element))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
            lineNumber: 551,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
        lineNumber: 544,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CanvasSlide, "RxGZoQSP3JsjKv0sVPIVxa6eA2E=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarouselStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDecoratorConfig"]
    ];
});
_c = CanvasSlide;
const CanvasSlidePreview = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasSlide, {
        ...props,
        isPreview: true
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
        lineNumber: 573,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c1 = CanvasSlidePreview;
const CanvasSlideEditor = (props)=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CanvasSlide, {
        ...props,
        isPreview: false
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
        lineNumber: 591,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
_c2 = CanvasSlideEditor;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CanvasSlide");
__turbopack_context__.k.register(_c1, "CanvasSlidePreview");
__turbopack_context__.k.register(_c2, "CanvasSlideEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=3a06e_Empire-Management_03_INFRASTRUCTURE_02_Codebase_carousel-generator_src_fa6078f7._.js.map