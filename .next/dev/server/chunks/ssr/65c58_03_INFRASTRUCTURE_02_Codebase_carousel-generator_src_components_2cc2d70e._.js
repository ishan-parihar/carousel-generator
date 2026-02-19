module.exports = [
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/refresh-cw.js [app-ssr] (ecmascript) <export default as RefreshCw>");
/**
 * Error Boundary Component
 *
 * Catches JavaScript errors anywhere in child component tree,
 * logs those errors, and displays a fallback UI.
 */ 'use client';
;
;
;
class ErrorBoundary extends __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Component"] {
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
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col items-center justify-center min-h-[400px] p-8 bg-red-500/10 border border-red-500/30 rounded-xl",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                        className: "w-16 h-16 text-red-500 mb-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-xl font-semibold text-white mb-2",
                        children: "Something went wrong"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                        lineNumber: 61,
                        columnNumber: 11
                    }, this),
                    this.props.componentName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    this.state.error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm text-red-400 mb-4 font-mono max-w-md text-center",
                        children: this.state.error.message
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                        lineNumber: 70,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: this.handleReset,
                        className: "flex items-center gap-2 px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$refresh$2d$cw$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RefreshCw$3e$__["RefreshCw"], {
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        componentName: "Decorator System",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-4 bg-yellow-500/20 border border-yellow-500/40 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-2 text-yellow-400",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "w-5 h-5"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                            lineNumber: 100,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function SlideErrorBoundary({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        componentName: "Slide Rendering",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col items-center justify-center min-h-[600px] bg-gray-800/50 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                    className: "w-12 h-12 text-red-500 mb-4"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 126,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-gray-300 font-medium",
                    children: "Failed to render slide"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                    lineNumber: 127,
                    columnNumber: 11
                }, void 0),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
function CarouselErrorBoundary({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(ErrorBoundary, {
        componentName: "Carousel Management",
        fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "p-6 bg-red-500/10 border border-red-500/30 rounded-lg",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 text-red-400 mb-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ErrorBoundary.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, void 0),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ui/Button.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Button",
    ()=>Button
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/utils.ts [app-ssr] (ecmascript)");
;
;
function Button({ variant = 'primary', size = 'md', className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])('inline-flex items-center justify-center gap-2 font-medium transition-all rounded-lg disabled:opacity-50 disabled:cursor-not-allowed', {
            'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:opacity-90': variant === 'primary',
            'bg-white/10 text-white hover:bg-white/20 border border-white/20': variant === 'secondary',
            'text-white/70 hover:text-white hover:bg-white/5': variant === 'ghost',
            'bg-red-500/20 text-red-400 hover:bg-red-500/30 border border-red-500/30': variant === 'danger'
        }, {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-4 py-2 text-sm': size === 'md',
            'px-6 py-3 text-base': size === 'lg'
        }, className),
        ...props,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ui/Button.tsx",
        lineNumber: 18,
        columnNumber: 5
    }, this);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CarouselRenderer",
    ()=>CarouselRenderer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
/**
 * Carousel Renderer Component
 * Renders a carousel from a template with content filled in
 *
 * This component is responsible for:
 * - Rendering template elements with applied content
 * - Mapping content fields to canvas elements
 * - Exporting to PNG format
 * - Responsive preview scaling
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/ui/Button.tsx [app-ssr] (ecmascript)");
// Import element renderers
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$TextElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/TextElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$ImageElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BackgroundElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$DecoratorElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$CTAElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
function CarouselRenderer({ template, content, showControls = true, showSlideNumbers = true, autoPlay = false, autoPlayInterval = 3000, onExport, onSlideChange }) {
    // State
    const [currentSlideIndex, setCurrentSlideIndex] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(0);
    const [isPlaying, setIsPlaying] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(autoPlay);
    const [scale, setScale] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(1);
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Refs
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Get current slide content
    const currentSlide = content.slides[currentSlideIndex];
    /**
   * Handle responsive scaling
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleResize = ()=>{
            if (!containerRef.current) return;
            const containerWidth = containerRef.current.offsetWidth;
            const templateWidth = template.settings.width;
            // Calculate scale to fit container
            const newScale = Math.min(1, (containerWidth - 32) / templateWidth); // 32px for padding
            setScale(newScale);
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return ()=>window.removeEventListener('resize', handleResize);
    }, [
        template.settings.width
    ]);
    /**
   * Auto-play functionality
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!isPlaying) return;
        const interval = setInterval(()=>{
            setCurrentSlideIndex((prev)=>{
                const nextIndex = (prev + 1) % content.slides.length;
                if (onSlideChange) {
                    onSlideChange(nextIndex);
                }
                return nextIndex;
            });
        }, autoPlayInterval);
        return ()=>clearInterval(interval);
    }, [
        isPlaying,
        content.slides.length,
        autoPlayInterval,
        onSlideChange
    ]);
    /**
   * Callback when slide changes
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (onSlideChange) {
            onSlideChange(currentSlideIndex);
        }
    }, [
        currentSlideIndex,
        onSlideChange
    ]);
    /**
   * Navigate to specific slide
   */ const goToSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((index)=>{
        setCurrentSlideIndex(index);
        setIsPlaying(false);
    }, []);
    /**
   * Navigate to next slide
   */ const goToNextSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCurrentSlideIndex((prev)=>{
            const nextIndex = (prev + 1) % content.slides.length;
            return nextIndex;
        });
    }, [
        content.slides.length
    ]);
    /**
   * Navigate to previous slide
   */ const goToPreviousSlide = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        setCurrentSlideIndex((prev)=>{
            const prevIndex = (prev - 1 + content.slides.length) % content.slides.length;
            return prevIndex;
        });
    }, [
        content.slides.length
    ]);
    /**
   * Apply content to template elements
   * Maps content field values to canvas elements
   */ const applyContentToElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((elements, slideContent)=>{
        const contentFieldMap = new Map(Object.entries(slideContent.contentFields));
        return elements.map((element)=>{
            // Check if this element is linked to a content field
            const linkedField = template.settings.contentFields.find((field)=>field.elementId === element.id);
            if (!linkedField) {
                return element;
            }
            // Get the content value for this field
            const contentValue = contentFieldMap.get(linkedField.id);
            if (contentValue === undefined || contentValue === null) {
                // Use default value if no content provided
                return element;
            }
            // Apply content to element based on element type
            const updatedElement = {
                ...element
            };
            switch(element.type){
                case 'text':
                    updatedElement.data = {
                        ...element.data,
                        content: contentValue
                    };
                    break;
                case 'image':
                    updatedElement.data = {
                        ...element.data,
                        src: contentValue
                    };
                    break;
                case 'background':
                    if (linkedField.type === 'color') {
                        updatedElement.data = {
                            ...element.data,
                            color: contentValue
                        };
                    } else if (linkedField.type === 'image') {
                        updatedElement.data = {
                            ...element.data,
                            image: contentValue
                        };
                    }
                    break;
                case 'cta':
                    updatedElement.data = {
                        ...element.data,
                        text: contentValue
                    };
                    break;
                default:
                    // For other element types, try to apply content generically
                    if (updatedElement.data) {
                        updatedElement.data = {
                            ...updatedElement.data,
                            content: contentValue
                        };
                    }
                    break;
            }
            return updatedElement;
        });
    }, [
        template.settings.contentFields
    ]);
    /**
   * Get elements for current slide with content applied
   */ const currentElements = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].useMemo(()=>{
        if (!currentSlide) return [];
        return applyContentToElements(template.elements, currentSlide);
    }, [
        template.elements,
        currentSlide,
        applyContentToElements
    ]);
    /**
   * Render element based on type
   */ const renderElement = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((element)=>{
        const commonProps = {
            key: element.id,
            element,
            onSelect: ()=>{},
            onUpdate: ()=>{}
        };
        switch(element.type){
            case 'text':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$TextElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextElement"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                    lineNumber: 253,
                    columnNumber: 16
                }, this);
            case 'image':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$ImageElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ImageElement"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                    lineNumber: 255,
                    columnNumber: 16
                }, this);
            case 'background':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BackgroundElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundElement"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                    lineNumber: 257,
                    columnNumber: 16
                }, this);
            case 'decorator':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$DecoratorElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DecoratorElement"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                    lineNumber: 259,
                    columnNumber: 16
                }, this);
            case 'cta':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$CTAElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CTAElement"], {
                    ...commonProps
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                    lineNumber: 261,
                    columnNumber: 16
                }, this);
            default:
                console.warn(`Unknown element type: ${element.type}`);
                return null;
        }
    }, []);
    /**
   * Export as PNG
   */ const exportAsPNG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!stageRef.current) return;
        setIsExporting(true);
        try {
            // Export current slide as data URL
            const dataURL = stageRef.current.toDataURL({
                pixelRatio: 2,
                mimeType: 'image/png',
                quality: 1
            });
            // Create download link
            const link = document.createElement('a');
            link.download = `slide-${currentSlideIndex + 1}-${template.name.toLowerCase().replace(/\s+/g, '-')}.png`;
            link.href = dataURL;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
            // Callback
            if (onExport) {
                onExport('png', {
                    dataURL,
                    slideIndex: currentSlideIndex
                });
            }
        } catch (error) {
            console.error('Failed to export PNG:', error);
            alert('Failed to export PNG');
        } finally{
            setIsExporting(false);
        }
    }, [
        template.name,
        currentSlideIndex,
        onExport
    ]);
    /**
   * Export as JSON
   */ const exportAsJSON = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        const exportData = {
            templateId: template.id,
            templateVersion: template.metadata.version,
            templateName: template.name,
            content,
            exportedAt: new Date().toISOString()
        };
        const blob = new Blob([
            JSON.stringify(exportData, null, 2)
        ], {
            type: 'application/json'
        });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.download = `carousel-${template.name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}.json`;
        link.href = url;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        // Callback
        if (onExport) {
            onExport('json', exportData);
        }
    }, [
        template,
        content,
        onExport
    ]);
    /**
   * Export all slides as PNG
   */ const exportAllSlidesAsPNG = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!stageRef.current) return;
        setIsExporting(true);
        try {
            const images = [];
            // Export each slide
            for(let i = 0; i < content.slides.length; i++){
                // Update current slide
                setCurrentSlideIndex(i);
                // Wait for render
                await new Promise((resolve)=>setTimeout(resolve, 100));
                // Export
                const dataURL = stageRef.current.toDataURL({
                    pixelRatio: 2,
                    mimeType: 'image/png',
                    quality: 1
                });
                images.push({
                    slideIndex: i,
                    dataURL
                });
            }
            // Download each image
            images.forEach(({ slideIndex, dataURL })=>{
                const link = document.createElement('a');
                link.download = `slide-${slideIndex + 1}-${template.name.toLowerCase().replace(/\s+/g, '-')}.png`;
                link.href = dataURL;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
            });
            // Restore original slide
            setCurrentSlideIndex(0);
            // Callback
            if (onExport) {
                onExport('png', {
                    images,
                    allSlides: true
                });
            }
        } catch (error) {
            console.error('Failed to export all slides:', error);
            alert('Failed to export all slides');
        } finally{
            setIsExporting(false);
        }
    }, [
        template.name,
        content.slides.length,
        onExport
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-col gap-4",
        children: [
            showControls && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: goToPreviousSlide,
                                disabled: content.slides.length <= 1,
                                children: "←"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                lineNumber: 393,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex gap-1",
                                children: content.slides.map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>goToSlide(index),
                                        className: cn('w-8 h-8 rounded-full text-sm font-medium transition-colors', index === currentSlideIndex ? 'bg-blue-500 text-white' : 'bg-white/10 text-white/60 hover:bg-white/20'),
                                        children: index + 1
                                    }, index, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                        lineNumber: 403,
                                        columnNumber: 17
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                lineNumber: 401,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "ghost",
                                size: "sm",
                                onClick: goToNextSlide,
                                disabled: content.slides.length <= 1,
                                children: "→"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                lineNumber: 417,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                        lineNumber: 392,
                        columnNumber: 11
                    }, this),
                    content.slides.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                        variant: "ghost",
                        size: "sm",
                        onClick: ()=>setIsPlaying(!isPlaying),
                        children: isPlaying ? '⏸ Pause' : '▶ Play'
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                        lineNumber: 429,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-2",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                variant: "secondary",
                                size: "sm",
                                onClick: exportAsJSON,
                                disabled: isExporting,
                                children: "Export JSON"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                lineNumber: 440,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: exportAsPNG,
                                disabled: isExporting,
                                children: "Export PNG"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                lineNumber: 448,
                                columnNumber: 13
                            }, this),
                            content.slides.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$ui$2f$Button$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Button"], {
                                size: "sm",
                                onClick: exportAllSlidesAsPNG,
                                disabled: isExporting,
                                children: "Export All"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                lineNumber: 456,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                        lineNumber: 439,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                lineNumber: 390,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: containerRef,
                className: "flex items-center justify-center bg-black/30 rounded-lg overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Stage"], {
                    ref: stageRef,
                    width: template.settings.width * scale,
                    height: template.settings.height * scale,
                    scale: {
                        x: scale,
                        y: scale
                    },
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Layer"], {
                        children: [
                            template.settings.backgroundColor && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BackgroundElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["BackgroundElement"], {
                                element: {
                                    id: 'template-background',
                                    type: 'background',
                                    x: 0,
                                    y: 0,
                                    width: template.settings.width,
                                    height: template.settings.height,
                                    rotation: 0,
                                    zIndex: -1,
                                    locked: true,
                                    visible: true,
                                    data: {
                                        color: template.settings.backgroundColor
                                    }
                                },
                                onSelect: ()=>{},
                                onUpdate: ()=>{}
                            }, "template-background", false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                lineNumber: 479,
                                columnNumber: 15
                            }, this),
                            currentElements.map(renderElement),
                            showSlideNumbers && content.slides.length > 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$TextElement$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TextElement"], {
                                element: {
                                    id: 'slide-number',
                                    type: 'text',
                                    x: template.settings.width - 50,
                                    y: template.settings.height - 30,
                                    width: 40,
                                    height: 20,
                                    rotation: 0,
                                    zIndex: 1000,
                                    locked: true,
                                    visible: true,
                                    data: {
                                        content: `${currentSlideIndex + 1}/${content.slides.length}`,
                                        fontFamily: 'Arial',
                                        fontSize: 14,
                                        fontWeight: 'normal',
                                        fontStyle: 'normal',
                                        color: '#FFFFFF',
                                        textAlign: 'right',
                                        verticalAlign: 'middle',
                                        opacity: 0.7
                                    }
                                },
                                onSelect: ()=>{},
                                onUpdate: ()=>{}
                            }, "slide-number", false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                                lineNumber: 506,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                        lineNumber: 476,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                    lineNumber: 470,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                lineNumber: 469,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between text-sm text-white/60 px-2",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            template.name,
                            " - Slide ",
                            currentSlideIndex + 1,
                            " of ",
                            content.slides.length
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                        lineNumber: 541,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            template.settings.width,
                            " × ",
                            template.settings.height,
                            "px"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
                lineNumber: 540,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/carousel/CarouselRenderer.tsx",
        lineNumber: 387,
        columnNumber: 5
    }, this);
}
/**
 * Utility function for class name merging
 */ function cn(...classes) {
    return classes.filter(Boolean).join(' ');
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/icons/Icon.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Icon",
    ()=>Icon
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/index.ts [app-ssr] (ecmascript)");
;
;
const Icon = ({ name, size = 24, color = 'currentColor', variant = 'filled', className = '', style = {} })=>{
    const iconConfig = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$index$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ICON_REGISTRY"][name];
    if (!iconConfig) {
        console.warn(`Icon "${name}" not found in icon registry`);
        return null;
    }
    const iconStyle = {
        width: `${size}px`,
        height: `${size}px`,
        color,
        ...style
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        viewBox: "0 0 24 24",
        fill: variant === 'filled' ? 'currentColor' : 'none',
        stroke: variant === 'outline' ? 'currentColor' : 'none',
        strokeWidth: variant === 'outline' ? 2 : 0,
        strokeLinecap: "round",
        strokeLinejoin: "round",
        className: className,
        style: iconStyle,
        children: iconConfig.component()
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/icons/Icon.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
Icon.displayName = 'Icon';
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/cta/CTAButton.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTAButton",
    ()=>CTAButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/icons/Icon.tsx [app-ssr] (ecmascript)");
;
;
const CTAButton = ({ text, style = 'solid', shape = 'pill', icon, iconPosition = 'right', animation = 'pulse', pillarColor, backgroundColor, size = 'large' })=>{
    const sizes = {
        small: {
            padding: '12px 24px',
            fontSize: 24,
            iconSize: 20
        },
        medium: {
            padding: '16px 32px',
            fontSize: 28,
            iconSize: 24
        },
        large: {
            padding: '20px 48px',
            fontSize: 32,
            iconSize: 28
        }
    };
    const currentSize = sizes[size];
    const getButtonStyle = ()=>{
        switch(style){
            case 'solid':
                return {
                    backgroundColor: pillarColor,
                    color: backgroundColor,
                    border: 'none'
                };
            case 'outline':
                return {
                    backgroundColor: 'transparent',
                    color: pillarColor,
                    border: `2px solid ${pillarColor}`
                };
            case 'gradient':
                return {
                    background: `linear-gradient(135deg, ${pillarColor}, ${backgroundColor})`,
                    color: backgroundColor,
                    border: 'none'
                };
            case 'glowing':
                return {
                    backgroundColor: pillarColor,
                    color: backgroundColor,
                    border: 'none',
                    boxShadow: `0 0 20px ${pillarColor}80`
                };
            case 'minimal':
                return {
                    backgroundColor: 'transparent',
                    color: pillarColor,
                    border: 'none',
                    borderBottom: `2px solid ${pillarColor}`,
                    borderRadius: '0'
                };
            default:
                return {};
        }
    };
    const getButtonShape = ()=>{
        switch(shape){
            case 'pill':
                return {
                    borderRadius: '9999px'
                };
            case 'rounded':
                return {
                    borderRadius: '12px'
                };
            case 'square':
                return {
                    borderRadius: '0px'
                };
            case 'custom':
                return {
                    borderRadius: '4px'
                };
            default:
                return {};
        }
    };
    const getAnimationStyle = ()=>{
        switch(animation){
            case 'pulse':
                return {
                    animation: 'pulse 2s infinite'
                };
            case 'glow':
                return {
                    animation: 'glow 2s infinite'
                };
            case 'bounce':
                return {
                    animation: 'bounce 2s infinite'
                };
            case 'shake':
                return {
                    animation: 'shake 2s infinite'
                };
            case 'none':
                return {};
            default:
                return {};
        }
    };
    const buttonStyle = {
        ...getButtonStyle(),
        ...getButtonShape(),
        ...getAnimationStyle(),
        padding: currentSize.padding,
        fontSize: `${currentSize.fontSize}px`,
        display: 'inline-flex',
        alignItems: 'center',
        gap: '12px',
        fontWeight: 700,
        cursor: 'pointer',
        transition: 'all 0.3s ease'
    };
    const iconColor = getButtonStyle().color || pillarColor;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: buttonStyle,
        children: [
            icon && iconPosition === 'left' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: icon,
                size: currentSize.iconSize,
                color: iconColor
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/cta/CTAButton.tsx",
                lineNumber: 129,
                columnNumber: 43
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                children: text
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/cta/CTAButton.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            icon && iconPosition === 'right' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$icons$2f$Icon$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Icon"], {
                name: icon,
                size: currentSize.iconSize,
                color: iconColor
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/cta/CTAButton.tsx",
                lineNumber: 131,
                columnNumber: 44
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/cta/CTAButton.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "VisualTreatment",
    ()=>VisualTreatment
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
const VisualTreatment = ({ treatment, intensity = 'medium', pillarColor, children, target = 'all' })=>{
    const treatments = {
        // Keep existing working treatments
        'gradient-text': {
            low: {
                background: `linear-gradient(135deg, ${pillarColor}, ${pillarColor}80)`,
                WebkitBackgroundClip: 'text',
                color: 'transparent'
            },
            medium: {
                background: `linear-gradient(135deg, ${pillarColor}, #fff)`,
                WebkitBackgroundClip: 'text',
                color: 'transparent'
            },
            high: {
                background: `linear-gradient(135deg, #fff, ${pillarColor}, #fff)`,
                WebkitBackgroundClip: 'text',
                color: 'transparent'
            }
        },
        outline: {
            low: {
                textShadow: `0 0 1px ${pillarColor}, 0 0 2px ${pillarColor}`
            },
            medium: {
                textShadow: `0 0 2px ${pillarColor}, 0 0 4px ${pillarColor}, 0 0 6px ${pillarColor}`
            },
            high: {
                textShadow: `0 0 3px ${pillarColor}, 0 0 6px ${pillarColor}, 0 0 9px ${pillarColor}, 0 0 12px ${pillarColor}`
            }
        },
        neon: {
            low: {
                textShadow: `0 0 5px ${pillarColor}, 0 0 10px ${pillarColor}`
            },
            medium: {
                textShadow: `0 0 10px ${pillarColor}, 0 0 20px ${pillarColor}, 0 0 30px ${pillarColor}`
            },
            high: {
                textShadow: `0 0 15px ${pillarColor}, 0 0 30px ${pillarColor}, 0 0 45px ${pillarColor}, 0 0 60px ${pillarColor}`
            }
        },
        // NEW TREATMENTS
        // Holographic - Iridescent rainbow effect
        holographic: {
            low: {
                background: `linear-gradient(135deg, ${pillarColor}aa, ${pillarColor}80, ${pillarColor}aa)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
            },
            medium: {
                background: `linear-gradient(135deg, ${pillarColor}, #fff, ${pillarColor}, #fff, ${pillarColor})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
            },
            high: {
                background: `conic-gradient(${pillarColor}, #ff00ff, #00ffff, #ff00ff, ${pillarColor})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                animation: 'holographicRotate 3s linear infinite'
            }
        },
        // Glass - Frosted glass effect
        glass: {
            low: {
                background: `linear-gradient(135deg, rgba(255,255,255,0.1), rgba(255,255,255,0.05))`,
                backdropFilter: 'blur(5px)',
                WebkitBackdropFilter: 'blur(5px)',
                color: 'rgba(255,255,255,0.9)',
                border: '1px solid rgba(255,255,255,0.2)',
                padding: '4px 8px',
                borderRadius: '4px'
            },
            medium: {
                background: `linear-gradient(135deg, rgba(255,255,255,0.15), rgba(255,255,255,0.08))`,
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
                color: 'rgba(255,255,255,0.95)',
                border: '2px solid rgba(255,255,255,0.3)',
                padding: '6px 12px',
                borderRadius: '6px'
            },
            high: {
                background: `linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.1))`,
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                color: 'rgba(255,255,255,1)',
                border: '3px solid rgba(255,255,255,0.4)',
                padding: '8px 16px',
                borderRadius: '8px',
                boxShadow: '0 0 20px rgba(255,255,255,0.2)'
            }
        },
        // Stroke Gradient - Gradient stroke with fill
        'stroke-gradient': {
            low: {
                WebkitTextStroke: '2px transparent',
                WebkitTextFillColor: pillarColor,
                background: `linear-gradient(135deg, #fff, ${pillarColor})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextStrokeColor: 'transparent'
            },
            medium: {
                WebkitTextStroke: '4px transparent',
                WebkitTextFillColor: pillarColor,
                background: `linear-gradient(135deg, #fff, ${pillarColor}, #fff)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextStrokeColor: 'transparent'
            },
            high: {
                WebkitTextStroke: '6px transparent',
                WebkitTextFillColor: pillarColor,
                background: `conic-gradient(${pillarColor}, #fff, ${pillarColor})`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextStrokeColor: 'transparent',
                filter: 'drop-shadow(0 0 10px rgba(0,0,0,0.3))'
            }
        },
        // Glitch - Offset layers with chromatic aberration
        glitch: {
            low: {
                position: 'relative'
            },
            medium: {
                position: 'relative'
            },
            high: {
                position: 'relative',
                animation: 'glitch 0.3s infinite'
            }
        },
        // 3D Block - Stacked layers for 3D extrusion
        '3d-block': {
            low: {
                position: 'relative'
            },
            medium: {
                position: 'relative'
            },
            high: {
                position: 'relative'
            }
        },
        // Pattern Fill - Pattern backgrounds clipped to text
        'pattern-fill': {
            low: {
                background: `radial-gradient(circle, ${pillarColor} 2px, transparent 2px)`,
                backgroundSize: '20px 20px',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
            },
            medium: {
                background: `linear-gradient(${pillarColor} 2px, transparent 2px), linear-gradient(90deg, ${pillarColor} 2px, transparent 2px)`,
                backgroundSize: '15px 15px',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent'
            },
            high: {
                background: `repeating-linear-gradient(45deg, ${pillarColor}, ${pillarColor} 2px, transparent 2px, transparent 10px)`,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                mixBlendMode: 'screen'
            }
        },
        // Reflection - Mirror effect below text
        reflection: {
            low: {
                WebkitBoxReflect: 'below 0px linear-gradient(transparent, rgba(255,255,255,0.2))'
            },
            medium: {
                WebkitBoxReflect: 'below 10px linear-gradient(transparent, rgba(255,255,255,0.4))'
            },
            high: {
                WebkitBoxReflect: 'below 20px linear-gradient(transparent 50%, rgba(255,255,255,0.6))',
                filter: 'blur(1px)'
            }
        },
        none: {}
    };
    // Early return for 'none' treatment
    if (treatment === 'none' || !treatment) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    const treatmentStyles = treatments[treatment];
    // Check if treatment exists and has intensity
    if (!treatmentStyles || !intensity) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    const intensityStyles = treatmentStyles[intensity];
    // Check if intensity styles exist
    if (!intensityStyles) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
            children: children
        }, void 0, false);
    }
    const isGradientText = treatment === 'gradient-text' || treatment === 'holographic';
    const isPatternFill = treatment === 'pattern-fill';
    const isGlass = treatment === 'glass';
    const isStrokeGradient = treatment === 'stroke-gradient';
    const isGlitch = treatment === 'glitch';
    const is3DBlock = treatment === '3d-block';
    const isReflection = treatment === 'reflection';
    // Get text content for special treatments
    const textContent = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Children.toArray(children).join('');
    // Glitch effect - multiple layers with offset
    if (isGlitch) {
        const offset = intensity === 'high' ? 6 : intensity === 'medium' ? 4 : 2;
        const glitchY = Math.random() * 100;
        const glitchY2 = Math.random() * 100;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'relative',
                display: 'inline-block'
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: 'relative',
                        color: pillarColor
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
                    lineNumber: 246,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: 'absolute',
                        left: `${offset}px`,
                        top: '0',
                        color: '#0ff',
                        clipPath: `polygon(0 ${glitchY}%, 100% ${glitchY}%, 100% ${glitchY + 10}%, 0 ${glitchY + 10}%)`,
                        opacity: 0.8
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
                    lineNumber: 248,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: 'absolute',
                        left: `-${offset}px`,
                        top: '0',
                        color: '#f0f',
                        clipPath: `polygon(0 ${glitchY2}%, 100% ${glitchY2}%, 100% ${glitchY2 + 10}%, 0 ${glitchY2 + 10}%)`,
                        opacity: 0.8
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
                    lineNumber: 261,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
            lineNumber: 244,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // 3D Block effect - stacked layers
    if (is3DBlock) {
        const layerCount = intensity === 'high' ? 10 : intensity === 'medium' ? 6 : 3;
        const offset = intensity === 'high' ? 2 : 1;
        const layers = Array.from({
            length: layerCount
        }).map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                style: {
                    position: 'absolute',
                    left: `${i * offset}px`,
                    top: `${i * offset}px`,
                    color: pillarColor,
                    opacity: 1 - i / layerCount * 0.5,
                    zIndex: layerCount - i,
                    pointerEvents: 'none'
                },
                children: children
            }, i, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
                lineNumber: 283,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                position: 'relative',
                display: 'inline-block'
            },
            children: [
                layers,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    style: {
                        position: 'relative',
                        color: '#fff',
                        zIndex: layerCount + 1
                    },
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
                    lineNumber: 302,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
            lineNumber: 300,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    // Stroke Gradient - needs special handling for WebkitTextStroke
    if (isStrokeGradient) {
        const strokeWidth = intensity === 'high' ? 6 : intensity === 'medium' ? 4 : 2;
        const gradient = intensity === 'high' ? `conic-gradient(${pillarColor}, #fff, ${pillarColor})` : intensity === 'medium' ? `linear-gradient(135deg, #fff, ${pillarColor}, #fff)` : `linear-gradient(135deg, #fff, ${pillarColor})`;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            style: {
                ...intensityStyles,
                WebkitTextStroke: `${strokeWidth}px transparent`,
                WebkitTextFillColor: pillarColor,
                background: gradient,
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                display: 'inline-block'
            },
            children: children
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
            lineNumber: 317,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            ...intensityStyles,
            WebkitTextFillColor: isGradientText || isPatternFill ? 'transparent' : undefined,
            display: 'inline-block'
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/visual-treatments/VisualTreatment.tsx",
        lineNumber: 334,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
// Add keyframes for animations (client-side only)
if (typeof document !== 'undefined') {
    const style = document.createElement('style');
    style.textContent = `
    @keyframes holographicRotate {
      0% { filter: hue-rotate(0deg); }
      100% { filter: hue-rotate(360deg); }
    }

    @keyframes glitch {
      0% { transform: translate(0); }
      20% { transform: translate(-2px, 2px); }
      40% { transform: translate(-2px, -2px); }
      60% { transform: translate(2px, 2px); }
      80% { transform: translate(2px, -2px); }
      100% { transform: translate(0); }
    }
  `;
    document.head.appendChild(style);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportProgress",
    ()=>ExportProgress
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
'use client';
;
function ExportProgress({ current, total, label }) {
    const percentage = Math.round(current / total * 100);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "space-y-2",
        children: [
            label && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-sm text-white/70",
                children: label
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx",
                lineNumber: 17,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "h-2 bg-white/10 rounded-full overflow-hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ExportDialog",
    ()=>ExportDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/carousel-store.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$preview$2f$ThemedSlide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/ThemedSlide.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$export$2f$ExportProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportProgress.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$export$2f$png$2d$exporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/export/png-exporter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$export$2f$batch$2d$exporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/export/batch-exporter.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/image.js [app-ssr] (ecmascript) <export default as Image>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/archive.js [app-ssr] (ecmascript) <export default as Archive>");
'use client';
;
;
;
;
;
;
;
;
function ExportDialog({ isOpen, onClose }) {
    const { carousel, exportSettings, setExportSettings } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCarouselStore"])();
    const [isExporting, setIsExporting] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [progress, setProgress] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({
        current: 0,
        total: 0
    });
    const slideRefs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])([]);
    const handleExportSingle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (index)=>{
        if (!carousel) return;
        const element = slideRefs.current[index];
        if (!element) return;
        setIsExporting(true);
        setProgress({
            current: 0,
            total: 1
        });
        try {
            const filename = `${carousel.name}_slide_${String(index + 1).padStart(2, '0')}`;
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$export$2f$png$2d$exporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSlideAsPng"])(element, filename, exportSettings);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$export$2f$png$2d$exporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["downloadDataUrl"])(result.dataUrl, result.filename);
            setProgress({
                current: 1,
                total: 1
            });
        } catch (error) {
            console.error('Export failed:', error);
            alert('Export failed. Please try again.');
        } finally{
            setIsExporting(false);
        }
    }, [
        carousel,
        exportSettings
    ]);
    const handleExportAll = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        if (!carousel) return;
        setIsExporting(true);
        const total = carousel.slides.length;
        setProgress({
            current: 0,
            total
        });
        try {
            const exports = [];
            for(let i = 0; i < carousel.slides.length; i++){
                const element = slideRefs.current[i];
                if (!element) continue;
                setProgress({
                    current: i + 1,
                    total
                });
                const filename = `${carousel.name}_slide_${String(i + 1).padStart(2, '0')}`;
                const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$export$2f$png$2d$exporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["exportSlideAsPng"])(element, filename, exportSettings);
                exports.push(result);
                // Small delay for UI update
                await new Promise((resolve)=>setTimeout(resolve, 100));
            }
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$lib$2f$export$2f$batch$2d$exporter$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createZipFromExports"])(exports, `${carousel.name}_carousel`);
        } catch (error) {
            console.error('Export failed:', error);
            alert('Export failed. Please try again.');
        } finally{
            setIsExporting(false);
        }
    }, [
        carousel,
        exportSettings
    ]);
    if (!isOpen || !carousel) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-gray-900 rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-4 border-b border-white/10",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-white",
                            children: "Export Carousel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                            lineNumber: 85,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                lineNumber: 90,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                            lineNumber: 86,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 84,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-b border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-wrap gap-6",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/70 mb-2",
                                        children: "Pixel Ratio"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 98,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            1,
                                            2,
                                            3
                                        ].map((ratio)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                                                lineNumber: 103,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                lineNumber: 97,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-white/70 mb-2",
                                        children: "Format"
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            'png',
                                            'jpeg'
                                        ].map((format)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: ()=>setExportSettings({
                                                        format
                                                    }),
                                                className: `px-4 py-2 rounded-lg text-sm uppercase transition-colors ${exportSettings.format === format ? 'bg-white text-black' : 'bg-white/10 text-white/70 hover:bg-white/20'}`,
                                                children: format
                                            }, format, false, {
                                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                lineNumber: 124,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 122,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                lineNumber: 118,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                        lineNumber: 96,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 95,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex-1 p-4 overflow-y-auto",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-3 md:grid-cols-5 gap-4",
                        children: carousel.slides.map((slide, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "relative group",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "aspect-[4/5] bg-gray-800 rounded-lg overflow-hidden",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            style: {
                                                transform: 'scale(0.1)',
                                                transformOrigin: 'top left'
                                            },
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                ref: (el)=>{
                                                    slideRefs.current[index] = el;
                                                },
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$preview$2f$ThemedSlide$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ThemedSlide"], {
                                                    slide: slide,
                                                    pillar: carousel.pillar,
                                                    carouselTotalSlides: carousel.slides.length,
                                                    carouselBackgroundPack: carousel.carouselBackgroundPack
                                                }, void 0, false, {
                                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 23
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                lineNumber: 150,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                            lineNumber: 147,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 146,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>handleExportSingle(index),
                                            disabled: isExporting,
                                            className: "p-2 bg-white text-black rounded-lg hover:bg-white/90 transition-colors disabled:opacity-50",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Image$3e$__["Image"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                                lineNumber: 170,
                                                columnNumber: 21
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                            lineNumber: 165,
                                            columnNumber: 19
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 164,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute top-2 left-2 px-2 py-1 bg-black/70 rounded text-xs text-white",
                                        children: index + 1
                                    }, void 0, false, {
                                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                        lineNumber: 173,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, slide.id, true, {
                                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                lineNumber: 145,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                        lineNumber: 143,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 142,
                    columnNumber: 9
                }, this),
                isExporting && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-white/10",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$export$2f$ExportProgress$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["ExportProgress"], {
                        current: progress.current,
                        total: progress.total,
                        label: "Exporting slides..."
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                        lineNumber: 184,
                        columnNumber: 13
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 183,
                    columnNumber: 11
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-4 border-t border-white/10 flex justify-end gap-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "px-6 py-2 text-white/70 hover:text-white transition-colors",
                            children: "Cancel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                            lineNumber: 194,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: handleExportAll,
                            disabled: isExporting,
                            className: "flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$archive$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Archive$3e$__["Archive"], {
                                    className: "w-4 h-4"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                                    lineNumber: 205,
                                    columnNumber: 13
                                }, this),
                                "Export All as ZIP"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                            lineNumber: 200,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
                    lineNumber: 193,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
            lineNumber: 82,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx",
        lineNumber: 81,
        columnNumber: 5
    }, this);
}
}),
];

//# sourceMappingURL=65c58_03_INFRASTRUCTURE_02_Codebase_carousel-generator_src_components_2cc2d70e._.js.map