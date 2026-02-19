(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Advanced Corner Accents Rendering Component
// This component renders corner accents with 10 styles and effects, plus symbol library support
__turbopack_context__.s([
    "CornerAccentRenderer",
    ()=>CornerAccentRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$corner$2d$symbols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/decorators/corner-symbols.ts [app-client] (ecmascript)");
;
;
/**
 * Calculate corner offset based on symbol type and size
 * to prevent cropping of large or rotated symbols
 */ const getCornerOffset = (style, size)=>{
    const baseOffset = 64;
    switch(style){
        case 'diamond':
            // Diamond rotated 45°, diagonal = size × √2 ≈ size × 1.414
            // Extra space needed: (size × 0.414) / 2
            return baseOffset + size * 0.4;
        case 'star':
        case 'arrow':
            // These symbols have protrusions that extend beyond the bounding box
            return baseOffset + size * 0.25;
        case 'triangle':
            // Triangle extends beyond its size due to rotation
            return baseOffset + size * 0.2;
        case 'circle':
        case 'cross':
        case 'wave':
            // These have some protrusion but less
            return baseOffset + size * 0.15;
        case 'dot':
        case 'line':
            // Small symbols, minimal extra space
            return baseOffset + size * 0.05;
        default:
            return baseOffset;
    }
};
function CornerAccentRenderer({ config, pillarColor }) {
    if (!config.cornerAccents.enabled) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            'topLeft',
            'topRight',
            'bottomLeft',
            'bottomRight'
        ].map((corner)=>{
            const cornerConfig = config.cornerAccents[corner];
            if (!cornerConfig || typeof cornerConfig !== 'object' || !cornerConfig.enabled) return null;
            // Calculate dynamic offset based on symbol type and size
            const offset = getCornerOffset(cornerConfig.style || 'bracket', cornerConfig.size || 48);
            const positionStyles = {
                topLeft: {
                    top: `${offset}px`,
                    left: `${offset}px`,
                    right: 'auto',
                    bottom: 'auto'
                },
                topRight: {
                    top: `${offset}px`,
                    left: 'auto',
                    right: `${offset}px`,
                    bottom: 'auto'
                },
                bottomLeft: {
                    top: 'auto',
                    left: `${offset}px`,
                    right: 'auto',
                    bottom: `${offset}px`
                },
                bottomRight: {
                    top: 'auto',
                    left: 'auto',
                    right: `${offset}px`,
                    bottom: `${offset}px`
                }
            };
            const pos = positionStyles[corner];
            const rotation = cornerConfig.rotation || 0;
            const offsetX = cornerConfig.offset?.x || 0;
            const offsetY = cornerConfig.offset?.y || 0;
            const effects = cornerConfig.effects || {};
            const symbol = cornerConfig.symbolId ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$corner$2d$symbols$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getSymbolById"])(cornerConfig.symbolId) : null;
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-20",
                style: {
                    top: pos.top,
                    left: pos.left,
                    right: pos.right,
                    bottom: pos.bottom,
                    transform: `translate(${offsetX}px, ${offsetY}px) rotate(${rotation}deg)`
                },
                children: [
                    symbol && !cornerConfig.style && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: cornerConfig.size,
                        height: cornerConfig.size,
                        viewBox: "0 0 40 40",
                        fill: "none",
                        stroke: cornerConfig.color || pillarColor,
                        strokeWidth: cornerConfig.thickness || 4,
                        style: {
                            filter: effects.shadow ? `drop-shadow(0 4px 12px ${cornerConfig.color || pillarColor}40)` : effects.glow ? `drop-shadow(0 0 8px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: symbol.path
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                            lineNumber: 101,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 84,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'bracket' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${cornerConfig.size}px`,
                            height: `${cornerConfig.size}px`,
                            borderTop: `${cornerConfig.thickness || 8}px solid ${cornerConfig.color || pillarColor}`,
                            borderLeft: corner === 'topLeft' || corner === 'bottomLeft' ? `${cornerConfig.thickness || 8}px solid ${cornerConfig.color || pillarColor}` : 'none',
                            borderRight: corner === 'topRight' || corner === 'bottomRight' ? `${cornerConfig.thickness || 8}px solid ${cornerConfig.color || pillarColor}` : 'none',
                            borderBottom: corner === 'bottomLeft' || corner === 'bottomRight' ? `${cornerConfig.thickness || 8}px solid ${cornerConfig.color || pillarColor}` : 'none',
                            boxShadow: effects.shadow ? `0 4px 12px ${cornerConfig.color || pillarColor}40` : 'none',
                            filter: effects.glow ? `drop-shadow(0 0 8px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 107,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'line' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${cornerConfig.size}px`,
                            height: `${cornerConfig.thickness || 8}px`,
                            backgroundColor: cornerConfig.color || pillarColor,
                            boxShadow: effects.shadow ? `0 2px 8px ${cornerConfig.color || pillarColor}40` : 'none',
                            filter: effects.glow ? `drop-shadow(0 0 6px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 135,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'dot' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${cornerConfig.size * 0.4}px`,
                            height: `${cornerConfig.size * 0.4}px`,
                            borderRadius: '50%',
                            backgroundColor: cornerConfig.color || pillarColor,
                            boxShadow: effects.shadow ? `0 2px 8px ${cornerConfig.color || pillarColor}40` : 'none',
                            filter: effects.glow ? `drop-shadow(0 0 6px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 154,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'triangle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: '0',
                            height: '0',
                            borderLeft: `${cornerConfig.size / 2}px solid transparent`,
                            borderTop: `${cornerConfig.size}px solid ${cornerConfig.color || pillarColor}`,
                            transform: corner === 'topRight' ? 'rotate(-90deg)' // Point up-left
                             : corner === 'bottomLeft' ? 'rotate(90deg)' // Point down-right
                             : corner === 'bottomRight' ? 'rotate(180deg)' // Point down-left
                             : 'rotate(0deg)',
                            filter: effects.glow ? `drop-shadow(0 0 6px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 174,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'circle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${cornerConfig.size}px`,
                            height: `${cornerConfig.size}px`,
                            borderRadius: '50%',
                            border: `${cornerConfig.thickness || 8}px solid ${cornerConfig.color || pillarColor}`,
                            boxShadow: effects.shadow ? `0 4px 12px ${cornerConfig.color || pillarColor}40` : 'none',
                            filter: effects.glow ? `drop-shadow(0 0 8px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 198,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'cross' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${cornerConfig.size}px`,
                            height: `${cornerConfig.size}px`,
                            position: 'relative'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    top: '50%',
                                    left: 0,
                                    right: 0,
                                    height: `${cornerConfig.thickness || 8}px`,
                                    backgroundColor: cornerConfig.color || pillarColor,
                                    transform: 'translateY(-50%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                                lineNumber: 225,
                                columnNumber: 17
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    position: 'absolute',
                                    left: '50%',
                                    top: 0,
                                    bottom: 0,
                                    width: `${cornerConfig.thickness || 8}px`,
                                    backgroundColor: cornerConfig.color || pillarColor,
                                    transform: 'translateX(-50%)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                                lineNumber: 236,
                                columnNumber: 17
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 218,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'star' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: cornerConfig.size,
                        height: cornerConfig.size,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: cornerConfig.color || pillarColor,
                        strokeWidth: cornerConfig.thickness || 8,
                        style: {
                            filter: effects.glow ? `drop-shadow(0 0 6px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                            points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                            lineNumber: 267,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 252,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'diamond' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            width: `${cornerConfig.size}px`,
                            height: `${cornerConfig.size}px`,
                            backgroundColor: cornerConfig.color || pillarColor,
                            transform: 'rotate(45deg)',
                            boxShadow: effects.shadow ? `0 4px 12px ${cornerConfig.color || pillarColor}40` : 'none',
                            filter: effects.glow ? `drop-shadow(0 0 8px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 273,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'arrow' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: cornerConfig.size,
                        height: cornerConfig.size,
                        viewBox: "0 0 24 24",
                        fill: "none",
                        stroke: cornerConfig.color || pillarColor,
                        strokeWidth: cornerConfig.thickness || 8,
                        style: {
                            transform: corner === 'bottomLeft' || corner === 'bottomRight' ? 'rotate(180deg)' : 'rotate(0deg)',
                            filter: effects.glow ? `drop-shadow(0 0 6px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 12h14M12 5l7 7-7 7"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                            lineNumber: 311,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 293,
                        columnNumber: 15
                    }, this),
                    cornerConfig.style === 'wave' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: cornerConfig.size,
                        height: cornerConfig.size / 2,
                        viewBox: "0 0 24 12",
                        fill: "none",
                        stroke: cornerConfig.color || pillarColor,
                        strokeWidth: cornerConfig.thickness || 8,
                        style: {
                            filter: effects.glow ? `drop-shadow(0 0 6px ${cornerConfig.color || pillarColor})` : effects.blur ? 'blur(2px)' : 'none'
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M2 6c2-2 4-2 6 0s4 2 6 0 4-2 6-0"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                            lineNumber: 332,
                            columnNumber: 17
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                        lineNumber: 317,
                        columnNumber: 15
                    }, this)
                ]
            }, corner, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx",
                lineNumber: 71,
                columnNumber: 11
            }, this);
        })
    }, void 0, false);
}
_c = CornerAccentRenderer;
var _c;
__turbopack_context__.k.register(_c, "CornerAccentRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageRenderer",
    ()=>ImageRenderer,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature(), _s9 = __turbopack_context__.k.signature();
/**
 * Image Renderer Component
 *
 * Renders images in various layouts with comprehensive styling options.
 * Supports 10 different image layouts for image slides.
 *
 * Layouts:
 * - full-bleed: Image covers entire slide, text overlay
 * - half-left: Image 50% left, text 50% right
 * - half-right: Image 50% right, text 50% left
 * - card: Image in centered card with caption
 * - gradient-overlay: Image with gradient overlay at bottom
 * - frame: Image in decorative frame with text below
 * - polaroid: Polaroid style with caption
 * - diagonal-split: Diagonal split between image and text
 * - masonry-2: 2 images stacked
 * - masonry-3: 3 images in grid
 *
 * @module components/preview/ImageRenderer
 */ 'use client';
;
/**
 * Default fallback image (placeholder)
 */ const DEFAULT_FALLBACK_IMAGE = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"%3E%3Crect width="100" height="100" fill="%23333"/%3E%3Ctext x="50" y="50" font-family="Arial" font-size="12" fill="%23666" text-anchor="middle" dy=".3em"%3ENo Image%3C/text%3E%3C/svg%3E';
/**
 * Generate gradient overlay style
 */ function getGradientOverlayStyle(overlay) {
    if (!overlay || overlay.type === 'none' || overlay.type === undefined) {
        return {};
    }
    const color = overlay.color || '#000000';
    const opacity = overlay.opacity || 0.5;
    const rgbaColor = `${color}${Math.round(opacity * 255).toString(16).padStart(2, '0')}`;
    if (overlay.type === 'solid') {
        return {
            backgroundColor: rgbaColor
        };
    }
    // Gradient overlay
    const directions = {
        top: 'to bottom',
        bottom: 'to top',
        left: 'to right',
        right: 'to left',
        'top-left': 'to bottom right',
        'top-right': 'to bottom left',
        'bottom-left': 'to top right',
        'bottom-right': 'to top left'
    };
    const direction = directions[overlay.direction || 'bottom'] || 'to top';
    return {
        background: `linear-gradient(${direction}, transparent 0%, ${rgbaColor} 100%)`
    };
}
/**
 * Generate filter style from image filters
 */ function getFilterStyle(filters) {
    if (!filters) {
        return 'none';
    }
    const filterParts = [];
    if (filters.blur) {
        filterParts.push(`blur(${filters.blur}px)`);
    }
    if (filters.grayscale) {
        filterParts.push(`grayscale(${filters.grayscale * 100}%)`);
    }
    if (filters.sepia) {
        filterParts.push(`sepia(${filters.sepia * 100}%)`);
    }
    if (filters.saturate) {
        filterParts.push(`saturate(${filters.saturate * 100}%)`);
    }
    if (filters.brightness) {
        filterParts.push(`brightness(${filters.brightness * 100}%)`);
    }
    if (filters.contrast) {
        filterParts.push(`contrast(${filters.contrast * 100}%)`);
    }
    return filterParts.length > 0 ? filterParts.join(' ') : 'none';
}
/**
 * Get caption position style
 */ function getCaptionStyle(position) {
    switch(position){
        case 'top':
            return {
                position: 'absolute',
                top: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20,
                maxWidth: '80%',
                textAlign: 'center'
            };
        case 'bottom':
            return {
                position: 'absolute',
                bottom: '16px',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 20,
                maxWidth: '80%',
                textAlign: 'center'
            };
        case 'overlay':
            return {
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                zIndex: 20,
                maxWidth: '80%',
                textAlign: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.6)',
                padding: '12px 16px',
                borderRadius: '8px',
                color: 'white'
            };
        case 'none':
        default:
            return {
                display: 'none'
            };
    }
}
/**
 * Full Bleed Layout
 * Image covers entire slide, text overlay
 */ const FullBleedLayout = ({ config, pillarColor })=>{
    _s();
    const [imageState, setImageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    const handleLoad = ()=>{
        setImageState({
            isLoading: false,
            hasError: false,
            isLoaded: true
        });
    };
    const handleError = ()=>{
        setImageState({
            isLoading: false,
            hasError: true,
            isLoaded: false
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageState.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                alt: "",
                className: "absolute inset-0 w-full h-full object-cover",
                style: {
                    objectFit: config.objectFit,
                    filter: getFilterStyle(config.filters),
                    opacity: config.opacity ?? 1,
                    mixBlendMode: config.blendMode || 'normal'
                },
                onLoad: handleLoad,
                onError: handleError
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 180,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            config.overlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: getGradientOverlayStyle(config.overlay)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 194,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            imageState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 201,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 200,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: getCaptionStyle(config.captionPosition),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-white",
                    style: {
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                    },
                    children: config.caption
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 207,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 206,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 179,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(FullBleedLayout, "DWX5bUyYhYnEDrr+iPPO2GSWOg8=");
_c = FullBleedLayout;
/**
 * Half Left Layout
 * Image on left, text on right (configurable via size property)
 */ const HalfLeftLayout = ({ config, pillarColor })=>{
    _s1();
    const [imageState, setImageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    // Size controls the width of the image section (default 50%)
    const imageSize = config.size || 50;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full overflow-hidden",
            style: {
                width: `${imageSize}%`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageState.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                    alt: "",
                    className: "absolute inset-0 w-full h-full object-cover",
                    style: {
                        objectFit: config.objectFit,
                        filter: getFilterStyle(config.filters),
                        opacity: config.opacity ?? 1,
                        mixBlendMode: config.blendMode || 'normal'
                    },
                    onLoad: ()=>setImageState({
                            isLoading: false,
                            hasError: false,
                            isLoaded: true
                        }),
                    onError: ()=>setImageState({
                            isLoading: false,
                            hasError: true,
                            isLoaded: false
                        })
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 236,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                imageState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 251,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 250,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: getCaptionStyle(config.captionPosition),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white",
                        style: {
                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                        },
                        children: config.caption
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 257,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 256,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
            lineNumber: 232,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 231,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s1(HalfLeftLayout, "DWX5bUyYhYnEDrr+iPPO2GSWOg8=");
_c1 = HalfLeftLayout;
/**
 * Half Right Layout
 * Image on right, text on left (configurable via size property)
 */ const HalfRightLayout = ({ config, pillarColor })=>{
    _s2();
    const [imageState, setImageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    // Size controls the width of the image section (default 50%)
    const imageSize = config.size || 50;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-full overflow-hidden ml-auto",
            style: {
                width: `${imageSize}%`
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageState.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                    alt: "",
                    className: "absolute inset-0 w-full h-full object-cover",
                    style: {
                        objectFit: config.objectFit,
                        filter: getFilterStyle(config.filters),
                        opacity: config.opacity ?? 1,
                        mixBlendMode: config.blendMode || 'normal'
                    },
                    onLoad: ()=>setImageState({
                            isLoading: false,
                            hasError: false,
                            isLoaded: true
                        }),
                    onError: ()=>setImageState({
                            isLoading: false,
                            hasError: true,
                            isLoaded: false
                        })
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 287,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                imageState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 302,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 301,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: getCaptionStyle(config.captionPosition),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white",
                        style: {
                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                        },
                        children: config.caption
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 308,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 307,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
            lineNumber: 283,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 282,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s2(HalfRightLayout, "DWX5bUyYhYnEDrr+iPPO2GSWOg8=");
_c2 = HalfRightLayout;
/**
 * Card Layout
 * Image in centered card with caption
 */ const CardLayout = ({ config, pillarColor })=>{
    _s3();
    const [imageState, setImageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    const size = config.size || 80;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex items-center justify-center p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-white dark:bg-gray-800 rounded-lg overflow-hidden",
            style: {
                width: `${size}%`,
                maxWidth: '100%',
                borderRadius: config.borderRadius || 16,
                boxShadow: config.shadow ? '0 20px 40px rgba(0,0,0,0.3)' : 'none',
                border: config.border ? `${config.borderWidth || 2}px solid ${config.borderColor || pillarColor || '#333'}` : 'none'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageState.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                    alt: "",
                    className: "w-full",
                    style: {
                        height: 'auto',
                        maxHeight: '70vh',
                        objectFit: config.objectFit,
                        filter: getFilterStyle(config.filters),
                        opacity: config.opacity ?? 1,
                        mixBlendMode: config.blendMode || 'normal',
                        transform: config.rotation ? `rotate(${config.rotation}deg)` : undefined
                    },
                    onLoad: ()=>setImageState({
                            isLoading: false,
                            hasError: false,
                            isLoaded: true
                        }),
                    onError: ()=>setImageState({
                            isLoading: false,
                            hasError: true,
                            isLoaded: false
                        })
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 343,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                imageState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 361,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 360,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: getCaptionStyle(config.captionPosition),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-600 dark:text-gray-400",
                        children: config.caption
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 367,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 366,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
            lineNumber: 333,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 332,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s3(CardLayout, "DWX5bUyYhYnEDrr+iPPO2GSWOg8=");
_c3 = CardLayout;
/**
 * Gradient Overlay Layout
 * Image with gradient overlay at bottom for text
 */ const GradientOverlayLayout = ({ config, pillarColor })=>{
    _s4();
    const [imageState, setImageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                src: imageState.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                alt: "",
                className: "absolute inset-0 w-full h-full object-cover",
                style: {
                    objectFit: config.objectFit,
                    filter: getFilterStyle(config.filters),
                    opacity: config.opacity ?? 1,
                    mixBlendMode: config.blendMode || 'normal'
                },
                onLoad: ()=>setImageState({
                        isLoading: false,
                        hasError: false,
                        isLoaded: true
                    }),
                onError: ()=>setImageState({
                        isLoading: false,
                        hasError: true,
                        isLoaded: false
                    })
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 390,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            config.overlay && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 pointer-events-none",
                style: getGradientOverlayStyle(config.overlay)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 404,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            imageState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 411,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 410,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: getCaptionStyle(config.captionPosition),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-white",
                    style: {
                        textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                    },
                    children: config.caption
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 417,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 416,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 389,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s4(GradientOverlayLayout, "DWX5bUyYhYnEDrr+iPPO2GSWOg8=");
_c4 = GradientOverlayLayout;
/**
 * Frame Layout
 * Image in decorative frame with text below
 */ const FrameLayout = ({ config, pillarColor })=>{
    _s5();
    const [imageState, setImageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    const size = config.size || 75;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex flex-col items-center justify-center p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative",
            style: {
                width: `${size}%`,
                maxWidth: '100%',
                padding: config.borderWidth || 8,
                backgroundColor: pillarColor || '#333',
                borderRadius: config.borderRadius || 8,
                boxShadow: config.shadow ? '0 20px 40px rgba(0,0,0,0.3)' : 'none'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageState.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                    alt: "",
                    className: "w-full",
                    style: {
                        height: 'auto',
                        maxHeight: '60vh',
                        objectFit: config.objectFit,
                        filter: getFilterStyle(config.filters),
                        opacity: config.opacity ?? 1,
                        mixBlendMode: config.blendMode || 'normal',
                        transform: config.rotation ? `rotate(${config.rotation}deg)` : undefined
                    },
                    onLoad: ()=>setImageState({
                            isLoading: false,
                            hasError: false,
                            isLoaded: true
                        }),
                    onError: ()=>setImageState({
                            isLoading: false,
                            hasError: true,
                            isLoaded: false
                        })
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 452,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                imageState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 470,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 469,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: getCaptionStyle(config.captionPosition),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-lg text-white",
                        style: {
                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                        },
                        children: config.caption
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 476,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 475,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
            lineNumber: 441,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 440,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s5(FrameLayout, "DWX5bUyYhYnEDrr+iPPO2GSWOg8=");
_c5 = FrameLayout;
/**
 * Polaroid Layout
 * Polaroid style with caption
 */ const PolaroidLayout = ({ config, pillarColor })=>{
    _s6();
    const [imageState, setImageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    const size = config.size || 65;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex items-center justify-center p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative bg-white dark:bg-gray-800",
            style: {
                width: `${size}%`,
                maxWidth: '100%',
                padding: config.caption && config.captionPosition !== 'none' && config.captionPosition === 'bottom' ? '16px 16px 60px 16px' : '16px',
                boxShadow: config.shadow ? '0 20px 40px rgba(0,0,0,0.3)' : '0 10px 20px rgba(0,0,0,0.2)',
                transform: config.rotation ? `rotate(${config.rotation}deg)` : undefined
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageState.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                    alt: "",
                    className: "w-full",
                    style: {
                        height: 'auto',
                        maxHeight: '55vh',
                        objectFit: config.objectFit,
                        filter: getFilterStyle(config.filters),
                        opacity: config.opacity ?? 1,
                        mixBlendMode: config.blendMode || 'normal'
                    },
                    onLoad: ()=>setImageState({
                            isLoading: false,
                            hasError: false,
                            isLoaded: true
                        }),
                    onError: ()=>setImageState({
                            isLoading: false,
                            hasError: true,
                            isLoaded: false
                        })
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 513,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                imageState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 530,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 529,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: config.captionPosition === 'bottom' ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-4 left-4 right-4",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-center text-sm",
                            style: {
                                fontFamily: 'Georgia, serif',
                                color: '#333',
                                fontStyle: 'italic'
                            },
                            children: config.caption
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 538,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 537,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: getCaptionStyle(config.captionPosition),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-sm text-gray-600 dark:text-gray-400",
                            style: {
                                textShadow: '0 2px 4px rgba(0,0,0,0.5)'
                            },
                            children: config.caption
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 551,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 550,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
            lineNumber: 501,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 500,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s6(PolaroidLayout, "DWX5bUyYhYnEDrr+iPPO2GSWOg8=");
_c6 = PolaroidLayout;
/**
 * Diagonal Split Layout
 * Diagonal split between image and text
 * Image occupies right side (65%) with diagonal cut, text on left side (35%)
 */ const DiagonalSplitLayout = ({ config, pillarColor })=>{
    _s7();
    const [imageState, setImageState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 overflow-hidden",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "absolute inset-0",
            style: {
                width: '100%',
                height: '100%',
                // Diagonal split: image on right (65%), text on left (35%)
                clipPath: 'polygon(35% 0, 100% 0, 100% 100%, 65% 100%)'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: imageState.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                    alt: "",
                    className: "absolute inset-0 w-full h-full object-cover",
                    style: {
                        objectFit: config.objectFit,
                        filter: getFilterStyle(config.filters),
                        opacity: config.opacity ?? 1,
                        mixBlendMode: config.blendMode || 'normal'
                    },
                    onLoad: ()=>setImageState({
                            isLoading: false,
                            hasError: false,
                            isLoaded: true
                        }),
                    onError: ()=>setImageState({
                            isLoading: false,
                            hasError: true,
                            isLoaded: false
                        })
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 586,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                imageState.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 601,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 600,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: getCaptionStyle(config.captionPosition),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-white",
                        style: {
                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                        },
                        children: config.caption
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 607,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 606,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
            lineNumber: 577,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 576,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s7(DiagonalSplitLayout, "DWX5bUyYhYnEDrr+iPPO2GSWOg8=");
_c7 = DiagonalSplitLayout;
/**
 * Masonry 2 Layout
 * 2 images stacked
 */ const Masonry2Layout = ({ config, pillarColor })=>{
    _s8();
    const [imageState1, setImageState1] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    const [imageState2, setImageState2] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        isLoading: true,
        hasError: false,
        isLoaded: false
    });
    // For masonry, we use the same image twice (in real implementation, would use multiple images)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 flex flex-col gap-4 p-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative overflow-hidden rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageState1.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                        alt: "",
                        className: "absolute inset-0 w-full h-full object-cover",
                        style: {
                            objectFit: config.objectFit,
                            filter: getFilterStyle(config.filters),
                            opacity: config.opacity ?? 1,
                            mixBlendMode: config.blendMode || 'normal'
                        },
                        onLoad: ()=>setImageState1({
                                isLoading: false,
                                hasError: false,
                                isLoaded: true
                            }),
                        onError: ()=>setImageState1({
                                isLoading: false,
                                hasError: true,
                                isLoaded: false
                            })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 637,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    imageState1.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 652,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 651,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: getCaptionStyle(config.captionPosition),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white",
                            style: {
                                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                            },
                            children: config.caption
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 658,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 657,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 636,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex-1 relative overflow-hidden rounded-lg",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: imageState2.hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                        alt: "",
                        className: "absolute inset-0 w-full h-full object-cover",
                        style: {
                            objectFit: config.objectFit,
                            filter: getFilterStyle(config.filters),
                            opacity: config.opacity ?? 1,
                            mixBlendMode: config.blendMode || 'normal'
                        },
                        onLoad: ()=>setImageState2({
                                isLoading: false,
                                hasError: false,
                                isLoaded: true
                            }),
                        onError: ()=>setImageState2({
                                isLoading: false,
                                hasError: true,
                                isLoaded: false
                            })
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 665,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    imageState2.isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 680,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 679,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: getCaptionStyle(config.captionPosition),
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-xs text-white",
                            style: {
                                textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                            },
                            children: config.caption
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 686,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                        lineNumber: 685,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                lineNumber: 664,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 635,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s8(Masonry2Layout, "RBYdvATAtN0S2o9Wi+pY5GbxDJw=");
_c8 = Masonry2Layout;
/**
 * Masonry 3 Layout
 * 3 images in grid
 */ const Masonry3Layout = ({ config, pillarColor })=>{
    _s9();
    const [imageStates, setImageStates] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        {
            isLoading: true,
            hasError: false,
            isLoaded: false
        },
        {
            isLoading: true,
            hasError: false,
            isLoaded: false
        },
        {
            isLoading: true,
            hasError: false,
            isLoaded: false
        }
    ]);
    const handleLoad = (index)=>{
        setImageStates((prev)=>{
            const newStates = [
                ...prev
            ];
            newStates[index] = {
                isLoading: false,
                hasError: false,
                isLoaded: true
            };
            return newStates;
        });
    };
    const handleError = (index)=>{
        setImageStates((prev)=>{
            const newStates = [
                ...prev
            ];
            newStates[index] = {
                isLoading: false,
                hasError: true,
                isLoaded: false
            };
            return newStates;
        });
    };
    // For masonry, we use the same image 3 times (in real implementation, would use multiple images)
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "absolute inset-0 p-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "grid grid-cols-2 gap-4 h-full",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative overflow-hidden rounded-lg",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: imageStates[0].hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                            alt: "",
                            className: "absolute inset-0 w-full h-full object-cover",
                            style: {
                                objectFit: config.objectFit,
                                filter: getFilterStyle(config.filters),
                                opacity: config.opacity ?? 1,
                                mixBlendMode: config.blendMode || 'normal'
                            },
                            onLoad: ()=>handleLoad(0),
                            onError: ()=>handleError(0)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 728,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        imageStates[0].isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                lineNumber: 743,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 742,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: getCaptionStyle(config.captionPosition),
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-white",
                                style: {
                                    textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                                },
                                children: config.caption
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                lineNumber: 749,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 748,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 727,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative overflow-hidden rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imageStates[1].hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                                    alt: "",
                                    className: "absolute inset-0 w-full h-full object-cover",
                                    style: {
                                        objectFit: config.objectFit,
                                        filter: getFilterStyle(config.filters),
                                        opacity: config.opacity ?? 1,
                                        mixBlendMode: config.blendMode || 'normal'
                                    },
                                    onLoad: ()=>handleLoad(1),
                                    onError: ()=>handleError(1)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                    lineNumber: 757,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                imageStates[1].isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                        lineNumber: 772,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                    lineNumber: 771,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getCaptionStyle(config.captionPosition),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-white",
                                        style: {
                                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                                        },
                                        children: config.caption
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                        lineNumber: 778,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                    lineNumber: 777,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 756,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1 relative overflow-hidden rounded-lg",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                    src: imageStates[2].hasError ? DEFAULT_FALLBACK_IMAGE : config.imageUrl,
                                    alt: "",
                                    className: "absolute inset-0 w-full h-full object-cover",
                                    style: {
                                        objectFit: config.objectFit,
                                        filter: getFilterStyle(config.filters),
                                        opacity: config.opacity ?? 1,
                                        mixBlendMode: config.blendMode || 'normal'
                                    },
                                    onLoad: ()=>handleLoad(2),
                                    onError: ()=>handleError(2)
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                    lineNumber: 785,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                imageStates[2].isLoading && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center bg-gray-900/50",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                        lineNumber: 800,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                    lineNumber: 799,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                config.caption && config.captionPosition !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getCaptionStyle(config.captionPosition),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-xs text-white",
                                        style: {
                                            textShadow: '0 2px 4px rgba(0,0,0,0.8)'
                                        },
                                        children: config.caption
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                        lineNumber: 806,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                                    lineNumber: 805,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                            lineNumber: 784,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 755,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
            lineNumber: 726,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
        lineNumber: 725,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s9(Masonry3Layout, "OOT2vwZ7cChJsZaF0pDy5KKH/78=");
_c9 = Masonry3Layout;
const ImageRenderer = ({ config, pillarColor, onError, onLoad })=>{
    const renderLayout = ()=>{
        switch(config.position){
            case 'full-bleed':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FullBleedLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 827,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'half-left':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HalfLeftLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 829,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'half-right':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(HalfRightLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 831,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'card':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CardLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 833,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'gradient-overlay':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GradientOverlayLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 835,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'frame':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FrameLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 837,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'polaroid':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PolaroidLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 839,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'diagonal-split':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DiagonalSplitLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 841,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'masonry-2':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Masonry2Layout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 843,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            case 'masonry-3':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Masonry3Layout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 845,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FullBleedLayout, {
                    config: config,
                    pillarColor: pillarColor
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx",
                    lineNumber: 847,
                    columnNumber: 16
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: renderLayout()
    }, void 0, false);
};
_c10 = ImageRenderer;
const __TURBOPACK__default__export__ = ImageRenderer;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;
__turbopack_context__.k.register(_c, "FullBleedLayout");
__turbopack_context__.k.register(_c1, "HalfLeftLayout");
__turbopack_context__.k.register(_c2, "HalfRightLayout");
__turbopack_context__.k.register(_c3, "CardLayout");
__turbopack_context__.k.register(_c4, "GradientOverlayLayout");
__turbopack_context__.k.register(_c5, "FrameLayout");
__turbopack_context__.k.register(_c6, "PolaroidLayout");
__turbopack_context__.k.register(_c7, "DiagonalSplitLayout");
__turbopack_context__.k.register(_c8, "Masonry2Layout");
__turbopack_context__.k.register(_c9, "Masonry3Layout");
__turbopack_context__.k.register(_c10, "ImageRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemedSlide",
    ()=>ThemedSlide
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/styles/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$backgrounds$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/backgrounds/index.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$cta$2f$CTAButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/cta/CTAButton.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$visual$2d$treatments$2f$VisualTreatment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$preview$2f$CornerAccentRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CornerAccentRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$preview$2f$ImageRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ImageRenderer.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/hooks/useDecoratorConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx [app-client] (ecmascript)");
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
// Parse inline styling with correct order
const parseStyledText = (text)=>{
    if (!text) return null;
    // Process patterns in specific order to avoid conflicts
    let processed = text;
    processed = processed.replace(/\[color:([^\]]+)\]([^\[]*?)\[\/color\]/g, '<span style="color:$1">$2</span>');
    processed = processed.replace(/\[font:([^\]]+)\]([^\[]*?)\[\/font\]/g, '<span style="font-family:$1">$2</span>');
    processed = processed.replace(/~~([^~]+?)~~/g, '<del style="opacity:0.5">$1</del>');
    processed = processed.replace(/`([^`]+?)`/g, '<code style="font-family:JetBrains Mono,monospace;background-color:rgba(255,255,255,0.1);padding:4px 8px;border-radius:4px;">$1</code>');
    processed = processed.replace(/\*\*([^*]+?)\*\*/g, '<strong>$1</strong>');
    processed = processed.replace(/\*([^*]+?)\*/g, '<em>$1</em>');
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        dangerouslySetInnerHTML: {
            __html: processed
        }
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
        lineNumber: 41,
        columnNumber: 10
    }, ("TURBOPACK compile-time value", void 0));
};
const BackgroundLayer = ({ style, pillarColor, backgroundPack, backgroundEffects })=>{
    const { background } = style;
    // If background pack is specified, use it instead of template background
    if (backgroundPack) {
        const pack = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$backgrounds$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getBackgroundPack"])(backgroundPack);
        if (pack && pack.render) {
            return pack.render(pillarColor, background.primary);
        }
    }
    // Apply background effects
    const shadow = backgroundEffects?.shadow ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' : 'none';
    const glow = backgroundEffects?.glow ? `drop-shadow(0 0 30px ${pillarColor}40)` : 'none';
    const blur = backgroundEffects?.blur ? 'blur(2px)' : 'none';
    const noise = backgroundEffects?.noise ? 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\' opacity=\'0.1\'/%3E%3C/svg%3E")' : 'none';
    switch(background.type){
        case 'gradient':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: `linear-gradient(135deg, ${pillarColor}15 0%, ${background.primary} 50%, ${background.secondary || background.primary} 100%)`,
                    opacity: background.opacity,
                    filter: `${shadow} ${glow} ${blur}`,
                    backgroundImage: noise !== 'none' ? noise : undefined
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 79,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case 'pattern':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundColor: background.primary,
                            opacity: background.opacity,
                            filter: `${shadow} ${glow} ${blur}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 93,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            opacity: 0.03,
                            backgroundImage: `radial-gradient(${pillarColor} 1px, transparent 1px)`,
                            backgroundSize: '20px 20px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 101,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    noise !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: noise,
                            opacity: 0.05
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 110,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'geometric':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundColor: background.primary,
                            opacity: background.opacity,
                            filter: `${shadow} ${glow} ${blur}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 124,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute",
                        style: {
                            width: '300px',
                            height: '300px',
                            background: `linear-gradient(135deg, ${pillarColor}20, transparent)`,
                            borderRadius: '50%',
                            top: '-100px',
                            right: '-100px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 132,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute",
                        style: {
                            width: '200px',
                            height: '200px',
                            background: `linear-gradient(45deg, ${pillarColor}15, transparent)`,
                            top: '50%',
                            left: '-50px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    noise !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: noise,
                            opacity: 0.05
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 154,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        // NEW BACKGROUND TYPES
        case 'glass-gradient':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundColor: background.primary,
                            opacity: background.opacity,
                            filter: `${shadow} ${glow}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 170,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                            backdropFilter: 'blur(20px)',
                            WebkitBackdropFilter: 'blur(20px)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 178,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    noise !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: noise,
                            opacity: 0.05
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 187,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'cyber-grid':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundColor: '#0a0a0a',
                            opacity: background.opacity,
                            filter: `${shadow} ${glow} ${blur}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 201,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: `
                linear-gradient(${pillarColor}20 1px, transparent 1px),
                linear-gradient(90deg, ${pillarColor}20 1px, transparent 1px)
              `,
                            backgroundSize: '50px 50px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 209,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    noise !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: noise,
                            opacity: 0.05
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 220,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'gradient-mesh':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: `
              radial-gradient(circle at 20% 30%, ${pillarColor}40, transparent 50%),
              radial-gradient(circle at 80% 70%, ${pillarColor}30, transparent 50%),
              radial-gradient(circle at 50% 50%, ${pillarColor}20, transparent 50%),
              ${background.primary}
            `,
                    opacity: background.opacity,
                    filter: `${shadow} ${glow} ${blur}`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 233,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case 'isometric-grid':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundColor: background.primary,
                            opacity: background.opacity,
                            filter: `${shadow} ${glow} ${blur}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 251,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: `
                linear-gradient(60deg, ${pillarColor}20 25%, transparent 25%),
                linear-gradient(-60deg, ${pillarColor}20 25%, transparent 25%),
                linear-gradient(60deg, transparent 75%, ${pillarColor}20 75%),
                linear-gradient(-60deg, transparent 75%, ${pillarColor}20 75%)
              `,
                            backgroundSize: '30px 52px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    noise !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: noise,
                            opacity: 0.05
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 272,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'holographic':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    background: `conic-gradient(${pillarColor}, #ff00ff, #00ffff, #ff00ff, ${pillarColor})`,
                    opacity: background.opacity * 0.3,
                    mixBlendMode: 'screen',
                    filter: `${shadow} ${glow} ${blur}`
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 285,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case 'vaporwave':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            background: `linear-gradient(180deg, #ff00ff 0%, #00ffff 50%, #ff00ff 100%)`,
                            opacity: background.opacity * 0.2,
                            filter: `${shadow} ${glow} ${blur}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 299,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: `linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px)`,
                            backgroundSize: '40px 40px'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 307,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    noise !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            backgroundImage: noise,
                            opacity: 0.05
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 315,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        case 'scanlines':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundColor: background.primary,
                    opacity: background.opacity,
                    filter: `${shadow} ${glow} ${blur}`,
                    backgroundImage: `
              repeating-linear-gradient(
                0deg,
                rgba(0,0,0,0.1),
                rgba(0,0,0,0.1) 2px,
                transparent 2px,
                transparent 4px
              )
            `
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 328,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        case 'noise':
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundColor: background.primary,
                    opacity: background.opacity,
                    filter: `${shadow} ${glow} ${blur}`,
                    backgroundImage: noise !== 'none' ? noise : undefined
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 349,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        default:
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    backgroundColor: background.primary,
                    opacity: background.opacity,
                    filter: `${shadow} ${glow} ${blur}`,
                    backgroundImage: noise !== 'none' ? noise : undefined
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 362,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
    }
};
_c = BackgroundLayer;
/**
 * Unified Decorator Elements Component
 *
 * Renders all decorators using the unified decorator configuration system.
 * This replaces the old DecorativeElements component and inline constants.
 */ const DecoratorElements = ({ config, pillarColor, slideNumber, totalSlides, pillarLabel })=>{
    const positionClass = (position)=>{
        const positions = {
            'top-left': 'top-16 left-16',
            'top-right': 'top-16 right-16',
            'bottom-left': 'bottom-16 left-16',
            'bottom-right': 'bottom-16 right-16'
        };
        return positions[position] || 'bottom-16 right-16';
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            config.accentLines.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    config.accentLines.positions?.top?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 right-0",
                        style: {
                            top: `${config.accentLines.positions.top.offset}px`,
                            height: `${config.accentLines.positions.top.thickness}px`,
                            width: `${config.accentLines.positions.top.length}%`,
                            left: `${(100 - config.accentLines.positions.top.length) / 2}%`,
                            background: config.accentLines.positions.top.gradient ? `linear-gradient(90deg, transparent, ${pillarColor}, transparent)` : pillarColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 411,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.accentLines.positions?.bottom?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute left-0 right-0",
                        style: {
                            bottom: `${config.accentLines.positions.bottom.offset}px`,
                            height: `${config.accentLines.positions.bottom.thickness}px`,
                            width: `${config.accentLines.positions.bottom.length}%`,
                            left: `${(100 - config.accentLines.positions.bottom.length) / 2}%`,
                            background: config.accentLines.positions.bottom.gradient ? `linear-gradient(90deg, transparent, ${pillarColor}, transparent)` : pillarColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 427,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.accentLines.positions?.left?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 bottom-0",
                        style: {
                            left: `${config.accentLines.positions.left.offset}px`,
                            width: `${config.accentLines.positions.left.thickness}px`,
                            height: `${config.accentLines.positions.left.length}%`,
                            top: `${(100 - config.accentLines.positions.left.length) / 2}%`,
                            background: config.accentLines.positions.left.gradient ? `linear-gradient(180deg, transparent, ${pillarColor}, transparent)` : pillarColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 443,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.accentLines.positions?.right?.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 bottom-0",
                        style: {
                            right: `${config.accentLines.positions.right.offset}px`,
                            width: `${config.accentLines.positions.right.thickness}px`,
                            height: `${config.accentLines.positions.right.length}%`,
                            top: `${(100 - config.accentLines.positions.right.length) / 2}%`,
                            background: config.accentLines.positions.right.gradient ? `linear-gradient(180deg, transparent, ${pillarColor}, transparent)` : pillarColor
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 459,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true),
            config.border.enabled && config.border.position === 'full' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-0",
                style: {
                    border: config.border.style === 'double' ? `${config.border.thickness}px double` : config.border.style === 'dashed' ? `${config.border.thickness}px dashed` : config.border.style === 'dotted' ? `${config.border.thickness}px dotted` : config.border.style === 'gradient' ? `${config.border.thickness}px solid` : `${config.border.thickness}px solid`,
                    borderColor: config.border.color || `${pillarColor}40`,
                    borderRadius: config.border.cornerRadius ? `${config.border.cornerRadius}px` : '0',
                    margin: config.border.padding ? `${config.border.padding}px` : '0'
                }
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 477,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            config.border.enabled && config.border.position !== 'full' && config.border.position !== 'corners' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    config.border.position === 'top' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 right-0",
                        style: {
                            height: `${config.border.thickness}px`,
                            backgroundColor: config.border.color || `${pillarColor}40`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 500,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.border.position === 'bottom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 right-0",
                        style: {
                            height: `${config.border.thickness}px`,
                            backgroundColor: config.border.color || `${pillarColor}40`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 509,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.border.position === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 bottom-0 left-0",
                        style: {
                            width: `${config.border.thickness}px`,
                            backgroundColor: config.border.color || `${pillarColor}40`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 518,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.border.position === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 bottom-0 right-0",
                        style: {
                            width: `${config.border.thickness}px`,
                            backgroundColor: config.border.color || `${pillarColor}40`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 527,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.border.position === 'top-bottom' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0",
                                style: {
                                    height: `${config.border.thickness}px`,
                                    backgroundColor: config.border.color || `${pillarColor}40`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 537,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0",
                                style: {
                                    height: `${config.border.thickness}px`,
                                    backgroundColor: config.border.color || `${pillarColor}40`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 544,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    config.border.position === 'left-right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 bottom-0 left-0",
                                style: {
                                    width: `${config.border.thickness}px`,
                                    backgroundColor: config.border.color || `${pillarColor}40`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 555,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 bottom-0 right-0",
                                style: {
                                    width: `${config.border.thickness}px`,
                                    backgroundColor: config.border.color || `${pillarColor}40`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 562,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true)
                ]
            }, void 0, true),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$preview$2f$CornerAccentRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CornerAccentRenderer"], {
                config: config,
                pillarColor: pillarColor
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 575,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            config.slideNumber.enabled && totalSlides && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute z-10 ${positionClass(config.slideNumber.position)}`,
                style: {
                    color: config.slideNumber.color || `${pillarColor}60`,
                    fontSize: `${config.slideNumber.size}px`,
                    fontWeight: '600',
                    fontFamily: config.slideNumber.font || 'Inter'
                },
                children: [
                    config.slideNumber.style === 'circle' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center justify-center",
                        style: {
                            width: `${config.slideNumber.size * 1.5}px`,
                            height: `${config.slideNumber.size * 1.5}px`,
                            borderRadius: '50%',
                            backgroundColor: config.slideNumber.showBackground ? `${pillarColor}20` : 'transparent',
                            color: pillarColor
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSlideNumber"])(slideNumber, config.slideNumber.style)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 589,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.slideNumber.style === 'square' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "inline-flex items-center justify-center",
                        style: {
                            width: `${config.slideNumber.size * 1.5}px`,
                            height: `${config.slideNumber.size * 1.5}px`,
                            backgroundColor: config.slideNumber.showBackground ? `${pillarColor}20` : 'transparent',
                            color: pillarColor
                        },
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSlideNumber"])(slideNumber, config.slideNumber.style)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 603,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.slideNumber.style === 'decimal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: [
                            slideNumber,
                            "/",
                            totalSlides
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 616,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    (config.slideNumber.style === 'roman' || config.slideNumber.style === 'minimal' || config.slideNumber.style === 'pillar-branded') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatSlideNumber"])(slideNumber, config.slideNumber.style)
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 619,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 579,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            config.hashtag.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute z-10 ${positionClass(config.hashtag.position)}`,
                style: {
                    fontFamily: 'Inter',
                    fontSize: `${config.hashtag.size}px`,
                    fontWeight: '600',
                    letterSpacing: '1px',
                    color: config.hashtag.color || `${pillarColor}80`,
                    backgroundColor: config.hashtag.showBackground ? `${pillarColor}15` : 'transparent',
                    padding: config.hashtag.showBackground ? '16px 32px' : '0',
                    borderRadius: '8px'
                },
                children: config.hashtag.text || ''
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 626,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            config.watermark.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    left: `${config.watermark.x}%`,
                    top: `${config.watermark.y}%`,
                    transform: `translate(-50%, -50%) rotate(${config.watermark.rotation || -45}deg)`,
                    fontFamily: 'Inter',
                    fontSize: `${config.watermark.size}px`,
                    fontWeight: '400',
                    color: `${pillarColor}40`,
                    opacity: config.watermark.opacity || 0.3,
                    zIndex: config.watermark.zIndex || 5
                },
                children: config.watermark.text || ''
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 645,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            config.logo.enabled && config.logo.imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${positionClass(config.logo.position)}`,
                style: {
                    opacity: config.logo.opacity || 1,
                    zIndex: 10
                },
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: config.logo.imageUrl,
                    alt: "Logo",
                    style: {
                        width: `${config.logo.size}px`,
                        height: 'auto',
                        maxHeight: `${config.logo.size}px`,
                        objectFit: 'contain',
                        mixBlendMode: config.logo.blendMode || 'normal',
                        isolation: 'isolate'
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 672,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 665,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            config.frame.enabled && config.frame.style !== 'none' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute pointer-events-none",
                style: {
                    top: `${config.frame.innerPadding || 0}px`,
                    left: `${config.frame.innerPadding || 0}px`,
                    right: `${config.frame.innerPadding || 0}px`,
                    bottom: `${config.frame.innerPadding || 0}px`
                },
                children: [
                    config.frame.style === 'photo' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            border: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`,
                            borderRadius: '8px',
                            boxShadow: 'inset 0 0 20px rgba(0,0,0,0.3)'
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 699,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    config.frame.style === 'film' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0 right-0",
                                style: {
                                    height: `${config.frame.thickness * 3}px`,
                                    background: 'linear-gradient(180deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: `0 ${config.frame.thickness * 2}px`,
                                    borderBottom: '2px solid #2a2a2a'
                                },
                                children: [
                                    ...Array(8)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: `${config.frame.thickness * 1.2}px`,
                                            height: `${config.frame.thickness * 1.2}px`,
                                            backgroundColor: '#0a0a0a',
                                            borderRadius: '2px',
                                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)'
                                        }
                                    }, `top-${i}`, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 725,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 711,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 right-0",
                                style: {
                                    height: `${config.frame.thickness * 3}px`,
                                    background: 'linear-gradient(0deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: `0 ${config.frame.thickness * 2}px`,
                                    borderTop: '2px solid #2a2a2a'
                                },
                                children: [
                                    ...Array(8)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: `${config.frame.thickness * 1.2}px`,
                                            height: `${config.frame.thickness * 1.2}px`,
                                            backgroundColor: '#0a0a0a',
                                            borderRadius: '2px',
                                            boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.8)'
                                        }
                                    }, `bottom-${i}`, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 743,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 729,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 bottom-0 left-0",
                                style: {
                                    width: `${config.frame.thickness * 2.5}px`,
                                    background: 'linear-gradient(90deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: `${config.frame.thickness * 3}px 0`,
                                    borderRight: '2px solid #2a2a2a'
                                },
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: `${config.frame.thickness * 1.2}px`,
                                            height: `${config.frame.thickness * 1.2}px`,
                                            backgroundColor: '#0a0a0a',
                                            borderRadius: '2px',
                                            boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.8)'
                                        }
                                    }, `left-${i}`, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 762,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 747,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 bottom-0 right-0",
                                style: {
                                    width: `${config.frame.thickness * 2.5}px`,
                                    background: 'linear-gradient(270deg, #0a0a0a 0%, #1a1a1a 50%, #0a0a0a 100%)',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    padding: `${config.frame.thickness * 3}px 0`,
                                    borderLeft: '2px solid #2a2a2a'
                                },
                                children: [
                                    ...Array(6)
                                ].map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        style: {
                                            width: `${config.frame.thickness * 1.2}px`,
                                            height: `${config.frame.thickness * 1.2}px`,
                                            backgroundColor: '#0a0a0a',
                                            borderRadius: '2px',
                                            boxShadow: 'inset 2px 0 4px rgba(0,0,0,0.8)'
                                        }
                                    }, `right-${i}`, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 781,
                                        columnNumber: 19
                                    }, ("TURBOPACK compile-time value", void 0)))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 766,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    config.frame.style === 'tech' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 left-0",
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    borderTop: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`,
                                    borderLeft: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 788,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute top-0 right-0",
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    borderTop: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`,
                                    borderRight: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 797,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0",
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    borderBottom: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`,
                                    borderLeft: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 806,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 right-0",
                                style: {
                                    width: '40px',
                                    height: '40px',
                                    borderBottom: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`,
                                    borderRight: `${config.frame.thickness}px solid ${config.frame.color || pillarColor}`
                                }
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                lineNumber: 815,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true),
                    config.frame.style === 'minimal' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0",
                        style: {
                            border: `${config.frame.thickness}px solid ${config.frame.color || `${pillarColor}30`}`
                        }
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 827,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 689,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0)),
            config.pillarLabel.enabled && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `absolute ${positionClass(config.pillarLabel.position)}`,
                style: {
                    fontFamily: 'Inter',
                    fontSize: `${config.pillarLabel.size}px`,
                    fontWeight: '600',
                    letterSpacing: '4px',
                    textTransform: 'uppercase',
                    color: `${pillarColor}80`
                },
                children: pillarLabel
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 839,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_c1 = DecoratorElements;
const ThemedSlide = /*#__PURE__*/ _s((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["forwardRef"])(_c2 = _s(({ slide, pillar, carouselTotalSlides, carouselBackgroundPack, carouselDecoratorConfig, isPreview = false }, ref)=>{
    _s();
    const theme = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPillarTheme"])(pillar);
    const { content, type, subType } = slide;
    const styleTemplate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleTemplate"])(slide.style?.template || 'minimal') || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$styles$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getStyleTemplate"])('minimal');
    // ALWAYS use theme.typography (pillar-specific)
    const { typography } = theme;
    // Get sub-type configuration (or default for slide type)
    const { getSubType } = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/slide-subtypes/index.ts [app-client] (ecmascript)");
    const subTypeConfig = getSubType(subType || (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultSubTypeForSlideType"])(type));
    // Use unified decorator config system
    const { config: decoratorConfig } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDecoratorConfig"])({
        carouselConfig: carouselDecoratorConfig,
        pillarId: pillar,
        slideConfig: slide.style?.decoratorConfig,
        styleTemplateId: slide.style?.template,
        applyTemplateSuggestions: true
    });
    // ============================================================================
    // ELEMENT POSITIONING HELPERS
    // ============================================================================
    /**
     * Apply element position configuration to style
     */ const applyElementPosition = (baseStyle, position)=>{
        if (!position || position.mode === 'auto') {
            // Auto mode: use existing flexbox behavior
            return {
                ...baseStyle,
                textAlign: position?.alignment || 'left',
                marginTop: position?.marginTop,
                marginBottom: position?.marginBottom,
                marginLeft: position?.marginLeft,
                marginRight: position?.marginRight
            };
        }
        if (position.mode === 'absolute') {
            // Absolute mode: custom X/Y coordinates
            return {
                ...baseStyle,
                position: 'absolute',
                left: position.x !== undefined ? `${position.x}%` : undefined,
                top: position.y !== undefined ? `${position.y}%` : undefined,
                transform: 'translate(-50%, -50%)',
                width: position.width !== undefined ? `${position.width}%` : undefined,
                height: position.height !== undefined ? `${position.height}%` : undefined,
                zIndex: position.zIndex,
                textAlign: position.alignment || 'left',
                marginTop: position.marginTop,
                marginBottom: position.marginBottom,
                marginLeft: position.marginLeft,
                marginRight: position.marginRight,
                opacity: position.opacity
            };
        }
        if (position.mode === 'relative') {
            // Relative mode: offset from auto position
            return {
                ...baseStyle,
                textAlign: position.alignment || 'left',
                marginTop: position.marginTop,
                marginBottom: position.marginBottom,
                marginLeft: position.marginLeft,
                marginRight: position.marginRight,
                position: 'relative',
                top: position.offsetTop,
                bottom: position.offsetBottom,
                left: position.offsetLeft,
                right: position.offsetRight,
                zIndex: position.zIndex,
                opacity: position.opacity
            };
        }
        return baseStyle;
    };
    /**
     * Check if element has absolute positioning
     */ const isAbsolutePositioned = (contentType)=>{
        const position = getElementStyle({}, contentType);
        return position.position === 'absolute';
    };
    const containerStyle = ()=>{
        // Use sub-type layout if available, otherwise fall back to template
        const layout = subTypeConfig?.layout || styleTemplate.layout;
        return {
            display: 'flex',
            height: '100%',
            position: 'relative',
            zIndex: 10,
            justifyContent: layout.containerPosition === 'left' ? 'flex-start' : layout.containerPosition === 'right' ? 'flex-end' : layout.containerPosition === 'center' ? 'center' : layout.containerPosition === 'top' ? 'center' : layout.containerPosition === 'bottom' ? 'center' : layout.containerPosition === 'split-horizontal' ? 'flex-start' : layout.containerPosition === 'split-vertical' ? 'center' : layout.containerPosition === 'diagonal' ? 'flex-start' : layout.containerPosition === 'offset' ? 'flex-start' : 'center',
            alignItems: 'center',
            textAlign: layout.containerPosition === 'left' ? 'left' : layout.containerPosition === 'right' ? 'right' : 'center',
            flexDirection: layout.containerPosition === 'top' ? 'column' : layout.containerPosition === 'bottom' ? 'column' : layout.containerPosition === 'split-horizontal' ? 'row' : layout.containerPosition === 'split-vertical' ? 'column' : 'row'
        };
    };
    const contentContainerStyle = ()=>{
        const layout = subTypeConfig?.layout || styleTemplate.layout;
        const effects = styleTemplate.effects;
        return {
            position: 'relative',
            zIndex: 10,
            maxWidth: `${layout.containerMaxWidth}%`,
            width: '100%',
            filter: effects.shadow ? 'drop-shadow(0 10px 20px rgba(0,0,0,0.5))' : 'none',
            wordWrap: 'break-word',
            overflowWrap: 'break-word'
        };
    };
    /**
     * Get typography size with fallback to theme
     */ const getTypographySize = (defaultSize, fontSize)=>{
        return fontSize || defaultSize;
    };
    /**
     * Apply style overrides to base style (Phase 3)
     *
     * This function applies custom style overrides to the base style.
     * It respects the useTheme flag:
     * - If useTheme is true (or undefined): Use theme styling
     * - If useTheme is false: Use custom overrides
     *
     * @param baseStyle - Base style (theme or default)
     * @param styleConfig - Style configuration from content
     * @returns Style with overrides applied
     */ const applyStyleOverrides = (baseStyle, styleConfig)=>{
        // If no style config or useTheme is true, return base style
        if (!styleConfig || styleConfig.useTheme !== false) {
            return baseStyle;
        }
        // Apply custom overrides
        const overrides = {};
        if (styleConfig.fontSize !== undefined) {
            overrides.fontSize = `${styleConfig.fontSize}px`;
        }
        if (styleConfig.fontFamily) {
            overrides.fontFamily = styleConfig.fontFamily;
        }
        if (styleConfig.fontWeight) {
            overrides.fontWeight = styleConfig.fontWeight;
        }
        if (styleConfig.color) {
            overrides.color = styleConfig.color;
        }
        if (styleConfig.lineHeight !== undefined) {
            overrides.lineHeight = styleConfig.lineHeight;
        }
        if (styleConfig.letterSpacing !== undefined) {
            overrides.letterSpacing = `${styleConfig.letterSpacing}px`;
        }
        if (styleConfig.fontStyle) {
            overrides.fontStyle = styleConfig.fontStyle;
        }
        if (styleConfig.textDecoration) {
            overrides.textDecoration = styleConfig.textDecoration;
        }
        return {
            ...baseStyle,
            ...overrides
        };
    };
    /**
     * Get base typography style for content type (Phase 3)
     *
     * Returns the base theme-based style for a content type.
     * This can be overridden by applyStyleOverrides.
     *
     * @param contentType - Type of content
     * @returns Base typography style
     */ const getBaseTypographyStyle = (contentType)=>{
        switch(contentType){
            case 'headline':
                return {
                    fontFamily: theme.headingFont,
                    fontSize: getTypographySize(subTypeConfig?.typography?.headlineSize, typography.titleSize),
                    fontWeight: subTypeConfig?.typography?.fontWeight || '700',
                    lineHeight: subTypeConfig?.typography?.lineHeight || '1.1',
                    color: theme.primaryColor
                };
            case 'subtext':
                return {
                    fontFamily: theme.bodyFont,
                    fontSize: getTypographySize(subTypeConfig?.typography?.subtextSize, typography.subheadingSize),
                    fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                    lineHeight: subTypeConfig?.typography?.lineHeight || '1.4',
                    color: 'rgba(255,255,255,0.9)'
                };
            case 'bullets':
                return {
                    fontFamily: theme.bodyFont,
                    fontSize: getTypographySize(subTypeConfig?.typography?.bulletSize, typography.bulletSize),
                    fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                    lineHeight: subTypeConfig?.typography?.lineHeight || '1.5',
                    color: 'rgba(255,255,255,0.95)'
                };
            case 'quote':
                return {
                    fontFamily: theme.headingFont,
                    fontSize: getTypographySize(subTypeConfig?.typography?.quoteSize, typography.titleSize),
                    fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                    fontStyle: 'italic',
                    lineHeight: subTypeConfig?.typography?.lineHeight || '1.4',
                    color: 'rgba(255,255,255,0.95)'
                };
            case 'attribution':
                return {
                    fontFamily: theme.bodyFont,
                    fontSize: getTypographySize(subTypeConfig?.typography?.attributionSize, typography.subheadingSize),
                    fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                    lineHeight: subTypeConfig?.typography?.lineHeight || '1.2',
                    color: 'rgba(255,255,255,0.8)'
                };
            default:
                return {};
        }
    };
    /**
     * Get element style with position and style overrides applied (Phase 3)
     */ const getElementStyle = (baseStyle, contentType)=>{
        // Start with sub-type default position
        const defaultPosition = subTypeConfig?.defaults[contentType];
        // Get custom position override from content
        let customPosition;
        let styleConfig;
        if (contentType === 'headline') {
            customPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(content.headline);
            styleConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentStyle"])(content.headline);
        } else if (contentType === 'subtext') {
            customPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(content.subtext);
            styleConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentStyle"])(content.subtext);
        } else if (contentType === 'bullets') {
            customPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(content.bullets);
            styleConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentStyle"])(content.bullets);
        } else if (contentType === 'quote') {
            customPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(content.quote);
            styleConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentStyle"])(content.quote);
        } else if (contentType === 'attribution') {
            customPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(content.attribution);
            styleConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentStyle"])(content.attribution);
        } else if (contentType === 'ctaText') {
            customPosition = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentPosition"])(content.ctaText);
            styleConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentStyle"])(content.ctaText);
        } else if (contentType === 'ctaButton') {
            // CTA button position - stored in cta config or using defaults
            customPosition = slide.cta?.position;
        }
        // Custom position overrides default
        const finalPosition = customPosition || defaultPosition;
        // Apply position to base style
        const positionStyle = applyElementPosition(baseStyle, finalPosition);
        // Phase 3: Apply style overrides if available
        if (styleConfig && contentType !== 'ctaText' && contentType !== 'ctaButton') {
            const baseTypographyStyle = getBaseTypographyStyle(contentType);
            const styleWithOverrides = applyStyleOverrides(baseTypographyStyle, styleConfig);
            return {
                ...positionStyle,
                ...styleWithOverrides
            };
        }
        return positionStyle;
    };
    const renderContent = ()=>{
        // Apply visual treatment if specified
        const hasVisualTreatment = slide.style?.visualTreatment && slide.style.visualTreatment.treatment !== 'none';
        const visualTreatment = slide.style?.visualTreatment;
        const isCTASlide = type === 'cta';
        const hasCTA = isCTASlide && slide.cta;
        // Helper to apply treatment to specific element
        const applyTreatment = (children, elementType)=>{
            if (!hasVisualTreatment || !visualTreatment) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false);
            const target = visualTreatment.target || 'all';
            if (target !== 'all' && target !== elementType) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$visual$2d$treatments$2f$VisualTreatment$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["VisualTreatment"], {
                treatment: visualTreatment.treatment,
                intensity: visualTreatment.intensity || 'medium',
                pillarColor: theme.primaryColor,
                target: target,
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                lineNumber: 1194,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        };
        const ContentWrapper = ({ children })=>{
            if (!hasCTA) return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false);
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: children
            }, void 0, false);
        };
        // Handle image slides
        if (type === 'image' && content.imageConfig) {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$preview$2f$ImageRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ImageRenderer"], {
                        config: content.imageConfig,
                        pillarColor: theme.primaryColor
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1214,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: getElementStyle({}, 'headline'),
                        children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            style: {
                                fontFamily: theme.headingFont,
                                fontSize: getTypographySize(subTypeConfig?.typography?.headlineSize, typography.titleSize),
                                fontWeight: subTypeConfig?.typography?.fontWeight || '700',
                                lineHeight: subTypeConfig?.typography?.lineHeight || '1.1',
                                color: theme.primaryColor
                            },
                            children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                            lineNumber: 1219,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)), 'headline')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1217,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0)),
                    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: getElementStyle({}, 'subtext'),
                        children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            style: {
                                fontFamily: theme.bodyFont,
                                fontSize: getTypographySize(subTypeConfig?.typography?.subtextSize, typography.subheadingSize),
                                fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                                lineHeight: subTypeConfig?.typography?.lineHeight || '1.4',
                                color: 'rgba(255,255,255,0.9)'
                            },
                            children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext))
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                            lineNumber: 1235,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0)), 'subtext')
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1233,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true);
        }
        // Handle other slide types
        switch(type){
            case 'title':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: containerStyle(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: contentContainerStyle(),
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'headline'),
                                    children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        style: {
                                            fontFamily: theme.headingFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.headlineSize, typography.titleSize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '700',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.1',
                                            color: theme.primaryColor,
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1262,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)), 'headline')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1260,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'subtext'),
                                    children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: theme.bodyFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.subtextSize, typography.subheadingSize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.4',
                                            color: 'rgba(255,255,255,0.9)',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1282,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)), 'subtext')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1280,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                            lineNumber: 1258,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1257,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 1256,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            case 'content':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: containerStyle(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: contentContainerStyle(),
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'headline'),
                                    children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: theme.headingFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.headlineSize, typography.titleSize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '700',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.2',
                                            color: theme.primaryColor,
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1312,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)), 'headline')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1310,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'subtext'),
                                    children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: theme.bodyFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.subtextSize, typography.bodySize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.5',
                                            color: 'rgba(255,255,255,0.95)',
                                            whiteSpace: 'pre-line',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1332,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)), 'subtext')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1330,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                            lineNumber: 1308,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1307,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 1306,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            case 'bullets':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: containerStyle(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: contentContainerStyle(),
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'headline'),
                                    children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: theme.headingFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.headlineSize, typography.titleSize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '700',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.2',
                                            color: theme.primaryColor,
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1363,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)), 'headline')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1361,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayContent"])(content.bullets) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'bullets'),
                                    children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        style: {
                                            listStyle: 'none',
                                            padding: 0,
                                            margin: 0
                                        },
                                        children: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayContent"])(content.bullets).map((bullet, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                style: {
                                                    fontFamily: theme.bodyFont,
                                                    fontSize: getTypographySize(subTypeConfig?.typography?.bulletSize, typography.bulletSize),
                                                    fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                                                    lineHeight: subTypeConfig?.typography?.lineHeight || '1.5',
                                                    color: 'rgba(255,255,255,0.95)',
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '16px',
                                                    marginBottom: index < (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getArrayContent"])(content.bullets).length - 1 ? '16px' : '0'
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            width: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELEMENT_SCALES"].bulletPoint}px`,
                                                            height: `${__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ELEMENT_SCALES"].bulletPoint}px`,
                                                            borderRadius: '50%',
                                                            backgroundColor: theme.primaryColor,
                                                            flexShrink: 0,
                                                            marginTop: '8px'
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                                        lineNumber: 1399,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            wordWrap: 'break-word',
                                                            overflowWrap: 'break-word'
                                                        },
                                                        children: parseStyledText(bullet)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                                        lineNumber: 1409,
                                                        columnNumber: 31
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, index, true, {
                                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                                lineNumber: 1385,
                                                columnNumber: 29
                                            }, ("TURBOPACK compile-time value", void 0)))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1383,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)), 'bullets')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1381,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                            lineNumber: 1359,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1358,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 1357,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            case 'quote':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: containerStyle(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: contentContainerStyle(),
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        color: theme.primaryColor,
                                        fontSize: '96px',
                                        lineHeight: 1,
                                        opacity: 0.8
                                    },
                                    children: '"'
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1429,
                                    columnNumber: 19
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.quote) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'quote'),
                                    children: applyTreatment(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("blockquote", {
                                        style: {
                                            fontFamily: theme.headingFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.quoteSize, typography.titleSize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                                            fontStyle: 'italic',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.4',
                                            color: 'rgba(255,255,255,0.95)',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.quote))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1442,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0)), 'quote')
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1440,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.attribution) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'attribution'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: theme.bodyFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.attributionSize, typography.subheadingSize),
                                            fontWeight: '600',
                                            color: theme.primaryColor
                                        },
                                        children: [
                                            "— ",
                                            parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.attribution))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1462,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1461,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                            lineNumber: 1428,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1427,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 1426,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            case 'cta':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: containerStyle(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: contentContainerStyle(),
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'headline'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: theme.headingFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.headlineSize, typography.titleSize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '700',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.2',
                                            color: theme.primaryColor,
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1486,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1485,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'subtext'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: theme.bodyFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.subtextSize, typography.subheadingSize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.4',
                                            color: 'rgba(255,255,255,0.9)',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1503,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1502,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.ctaText) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'ctaButton'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$cta$2f$CTAButton$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CTAButton"], {
                                        text: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.ctaText),
                                        style: slide.cta?.style || 'gradient',
                                        shape: slide.cta?.shape || 'pill',
                                        icon: slide.cta?.icon,
                                        iconPosition: slide.cta?.iconPosition || 'right',
                                        animation: slide.cta?.animation || 'pulse',
                                        pillarColor: theme.primaryColor,
                                        backgroundColor: theme.backgroundColor,
                                        size: "large"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1520,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1519,
                                    columnNumber: 21
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                            lineNumber: 1483,
                            columnNumber: 17
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1482,
                        columnNumber: 15
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 1481,
                    columnNumber: 13
                }, ("TURBOPACK compile-time value", void 0));
            case 'custom':
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    style: containerStyle(),
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ContentWrapper, {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            style: contentContainerStyle(),
                            children: [
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'headline'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        style: {
                                            fontFamily: theme.headingFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.headlineSize, typography.titleSize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '700',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.2',
                                            color: theme.primaryColor,
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.headline))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1546,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1545,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0)),
                                (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: getElementStyle({}, 'subtext'),
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        style: {
                                            fontFamily: theme.bodyFont,
                                            fontSize: getTypographySize(subTypeConfig?.typography?.subtextSize, typography.bodySize),
                                            fontWeight: subTypeConfig?.typography?.fontWeight || '400',
                                            lineHeight: subTypeConfig?.typography?.lineHeight || '1.5',
                                            color: 'rgba(255,255,255,0.95)',
                                            wordWrap: 'break-word',
                                            overflowWrap: 'break-word'
                                        },
                                        children: parseStyledText((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getContentValue"])(content.subtext))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                        lineNumber: 1563,
                                        columnNumber: 25
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                                    lineNumber: 1562,
                                    columnNumber: 23
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                            lineNumber: 1543,
                            columnNumber: 19
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1542,
                        columnNumber: 17
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 1541,
                    columnNumber: 15
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SlideErrorBoundary"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            ref: ref,
            className: "relative overflow-hidden",
            style: {
                width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"],
                height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"],
                padding: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_PADDING"],
                backgroundColor: theme.backgroundColor
            },
            "data-slide-ready": "true",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(BackgroundLayer, {
                    style: styleTemplate,
                    pillarColor: theme.primaryColor,
                    backgroundPack: carouselBackgroundPack,
                    backgroundEffects: decoratorConfig.backgroundEffects
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 1599,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ErrorBoundary$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DecoratorErrorBoundary"], {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(DecoratorElements, {
                        config: decoratorConfig,
                        pillarColor: theme.primaryColor,
                        slideNumber: slide.order + 1,
                        totalSlides: carouselTotalSlides,
                        pillarLabel: theme.label
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                        lineNumber: 1608,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
                    lineNumber: 1607,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                renderContent()
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
            lineNumber: 1587,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx",
        lineNumber: 1586,
        columnNumber: 7
    }, ("TURBOPACK compile-time value", void 0));
}, "TC+onQy6zbBtPhMhCNYGE+b9tSc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDecoratorConfig"]
    ];
})), "TC+onQy6zbBtPhMhCNYGE+b9tSc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useDecoratorConfig"]
    ];
});
_c3 = ThemedSlide;
ThemedSlide.displayName = 'ThemedSlide';
var _c, _c1, _c2, _c3;
__turbopack_context__.k.register(_c, "BackgroundLayer");
__turbopack_context__.k.register(_c1, "DecoratorElements");
__turbopack_context__.k.register(_c2, "ThemedSlide$forwardRef");
__turbopack_context__.k.register(_c3, "ThemedSlide");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=bb892_INFRASTRUCTURE_02_Codebase_carousel-generator_src_components_preview_06711b88._.js.map