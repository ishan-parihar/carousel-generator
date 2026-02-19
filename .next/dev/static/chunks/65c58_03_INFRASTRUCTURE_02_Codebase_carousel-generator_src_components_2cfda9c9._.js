(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselErrorBoundary",
    ()=>CarouselErrorBoundary,
    "DecoratorErrorBoundary",
    ()=>DecoratorErrorBoundary,
    "ErrorBoundary",
    ()=>ErrorBoundary,
    "SlideErrorBoundary",
    ()=>SlideErrorBoundary
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-client] (ecmascript) <export default as RefreshCw>");
/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in child component tree,
 * logs those errors, and displays a fallback UI.
 */ 'use client';
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Component"] {
    constructor(props){
        super(props);
        this.state = {
            hasError: false
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error('ErrorBoundary caught an error:', error, errorInfo);
        this.setState({
            errorInfo
        });
        // Call custom error handler if provided
        if (this.props.onError) {
            this.props.onError(error, errorInfo);
        }
    }
    handleReset = ()=>{
        this.setState({
            hasError: false,
            error: undefined,
            errorInfo: undefined
        });
    };
    render() {
        if (this.state.hasError) {
            // Use custom fallback if provided
            if (this.props.fallback) {
                return this.props.fallback;
            }
            // Default fallback UI
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center min-h-[400px] p-8 bg-red-500/10 border border-red-500/30 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-16 h-16 text-red-500 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    this.props.componentName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-gray-400 mb-4",
                        children: [
                            "Error in: ",
                            this.props.componentName
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                        lineNumber: 65,
                        columnNumber: 13
                    }, this),
                    this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-400 mb-4 font-mono max-w-md text-center",
                        children: this.state.error.message
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: this.handleReset,
                        className: "flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
                                className: "w-4 h-4"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                                lineNumber: 78,
                                columnNumber: 13
                            }, this),
                            "Try again"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                        lineNumber: 74,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                lineNumber: 59,
                columnNumber: 9
            }, this);
        }
        return this.props.children;
    }
}
function DecoratorErrorBoundary({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        componentName: "Decorator System",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-yellow-500/20 border border-yellow-500/40 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-yellow-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-medium",
                            children: "Decorator system encountered an error"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                            lineNumber: 101,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 99,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400 mt-2",
                    children: "Some decorators may not display correctly. Try refreshing the page."
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 105,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
            lineNumber: 98,
            columnNumber: 9
        }, void 0),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
        lineNumber: 95,
        columnNumber: 5
    }, this);
}
_c = DecoratorErrorBoundary;
function SlideErrorBoundary({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        componentName: "Slide Rendering",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[600px] bg-gray-800/50 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-12 h-12 text-red-500 mb-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300 font-medium",
                    children: "Failed to render slide"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-500 mt-2",
                    children: "There was an error rendering this slide. Try checking your content."
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 128,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
            lineNumber: 125,
            columnNumber: 9
        }, void 0),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
        lineNumber: 122,
        columnNumber: 5
    }, this);
}
_c1 = SlideErrorBoundary;
function CarouselErrorBoundary({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        componentName: "Carousel Management",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 bg-red-500/10 border border-red-500/30 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 text-red-400 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "font-semibold text-lg",
                            children: "Carousel Error"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                            lineNumber: 151,
                            columnNumber: 13
                        }, void 0)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 149,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-sm text-gray-400",
                    children: "The carousel encountered an unexpected error. Please try refreshing the page."
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 155,
                    columnNumber: 11
                }, void 0)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
            lineNumber: 148,
            columnNumber: 9
        }, void 0),
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
        lineNumber: 145,
        columnNumber: 5
    }, this);
}
_c2 = CarouselErrorBoundary;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "DecoratorErrorBoundary");
__turbopack_context__.k.register(_c1, "SlideErrorBoundary");
__turbopack_context__.k.register(_c2, "CarouselErrorBoundary");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportProgress",
    ()=>ExportProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function ExportProgress({ current, total, label }) {
    const percentage = Math.round(current / total * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-white/70",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 bg-white/10 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "h-full bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300",
                    style: {
                        width: `${percentage}%`
                    }
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx",
                    lineNumber: 20,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx",
                lineNumber: 19,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-white/50 text-center",
                children: [
                    current,
                    " / ",
                    total,
                    " slides (",
                    percentage,
                    "%)"
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx",
                lineNumber: 25,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx",
        lineNumber: 15,
        columnNumber: 5
    }, this);
}
_c = ExportProgress;
var _c;
__turbopack_context__.k.register(_c, "ExportProgress");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportDialog",
    ()=>ExportDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/shared/lib/app-dynamic.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/carousel-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$bridge$2f$dom$2d$to$2d$canvas$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/bridge/dom-to-canvas-bridge.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$export$2f$ExportProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/archive.js [app-client] (ecmascript) <export default as Archive>");
;
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
// Dynamically import CarouselRenderer with SSR disabled to prevent Konva SSR issue
const CarouselRenderer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$shared$2f$lib$2f$app$2d$dynamic$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(_c = ()=>__turbopack_context__.A("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx [app-client] (ecmascript, next/dynamic entry, async loader)").then((mod)=>({
            default: mod.CarouselRenderer
        })), {
    loadableGenerated: {
        modules: [
            "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx [app-client] (ecmascript, next/dynamic entry)"
        ]
    },
    ssr: false
});
_c1 = CarouselRenderer;
function ExportDialog({ isOpen, onClose }) {
    _s();
    const { carousel, exportSettings, setExportSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarouselStore"])();
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        total: 0
    });
    const [exportedImages, setExportedImages] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    // Phase 4: Use Canvas-based export via CarouselRenderer
    const handleExportAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ExportDialog.useCallback[handleExportAll]": async ()=>{
            if (!carousel) return;
            setIsExporting(true);
            const total = carousel.slides.length;
            setProgress({
                current: 0,
                total
            });
            try {
                // Create template and content from DOM carousel
                const template = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$bridge$2f$dom$2d$to$2d$canvas$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createTemplateFromDOMCarousel"])(carousel);
                const content = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$bridge$2f$dom$2d$to$2d$canvas$2d$bridge$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContentFromDOMCarousel"])(carousel);
                // Export all slides using Canvas renderer
                // Note: This is a simplified approach. In production, we'd need a headless renderer.
                // For now, we'll show a message that Canvas export is not yet fully implemented.
                alert('Canvas export is not yet fully implemented. Please use the CarouselRenderer component directly for export.');
            } catch (error) {
                console.error('Export failed:', error);
                alert('Export failed. Please try again.');
            } finally{
                setIsExporting(false);
            }
        }
    }["ExportDialog.useCallback[handleExportAll]"], [
        carousel
    ]);
    if (!isOpen || !carousel) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-white",
                            children: "Export Carousel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                            lineNumber: 62,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                lineNumber: 67,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                            lineNumber: 63,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 61,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/70 mb-2",
                                        children: "Pixel Ratio"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 75,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            1,
                                            2,
                                            3
                                        ].map((ratio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setExportSettings({
                                                        pixelRatio: ratio
                                                    }),
                                                className: `px-4 py-2 rounded-lg text-sm transition-colors ${exportSettings.pixelRatio === ratio ? 'bg-white text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'}`,
                                                children: [
                                                    ratio,
                                                    "x"
                                                ]
                                            }, ratio, true, {
                                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                lineNumber: 80,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 78,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                lineNumber: 74,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/70 mb-2",
                                        children: "Format"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 96,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            'png',
                                            'jpg'
                                        ].map((format)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setExportSettings({
                                                        format
                                                    }),
                                                className: `px-4 py-2 rounded-lg text-sm uppercase transition-colors ${exportSettings.format === format ? 'bg-white text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'}`,
                                                children: format
                                            }, format, false, {
                                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                lineNumber: 101,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 99,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                lineNumber: 95,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                        lineNumber: 73,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 72,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-4 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-2 md:grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "col-span-full bg-blue-500/20 border border-blue-500/30 rounded-lg p-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-blue-400 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                            children: "Note:"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                            lineNumber: 123,
                                            columnNumber: 17
                                        }, this),
                                        " Canvas-based export is now enabled. Export functionality will use the Canvas renderer instead of DOM renderer."
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                    lineNumber: 122,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                lineNumber: 121,
                                columnNumber: 13
                            }, this),
                            carousel.slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative group",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "aspect-[4/5] bg-gray-800 rounded-lg overflow-hidden flex items-center justify-center",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "text-white/50 text-sm text-center px-2",
                                                children: [
                                                    "Slide ",
                                                    index + 1,
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                        lineNumber: 131,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "text-xs text-white/30",
                                                        children: "Preview in Canvas mode"
                                                    }, void 0, false, {
                                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                        lineNumber: 132,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                lineNumber: 129,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                            lineNumber: 128,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "absolute top-2 left-2 px-2 py-1 bg-black/70 rounded text-xs text-white",
                                            children: index + 1
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, slide.id, true, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, this),
                isExporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$export$2f$ExportProgress$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportProgress"], {
                        current: progress.current,
                        total: progress.total,
                        label: "Exporting slides..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                        lineNumber: 146,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 145,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-white/10 flex justify-end gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-6 py-2 text-white/70 hover:text-white transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                            lineNumber: 156,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleExportAll,
                            disabled: isExporting,
                            className: "flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                    lineNumber: 167,
                                    columnNumber: 13
                                }, this),
                                "Export All as ZIP"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                            lineNumber: 162,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
            lineNumber: 59,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
        lineNumber: 58,
        columnNumber: 5
    }, this);
}
_s(ExportDialog, "ap+raOLuNQvPLmeqEkw5wQBKzPc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarouselStore"]
    ];
});
_c2 = ExportDialog;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "CarouselRenderer$dynamic");
__turbopack_context__.k.register(_c1, "CarouselRenderer");
__turbopack_context__.k.register(_c2, "ExportDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=65c58_03_INFRASTRUCTURE_02_Codebase_carousel-generator_src_components_2cfda9c9._.js.map