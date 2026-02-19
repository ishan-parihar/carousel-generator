(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/carousel-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCarouselStore",
    ()=>useCarouselStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/zustand/esm/middleware.mjs [app-client] (ecmascript)");
;
;
const generateId = ()=>Math.random().toString(36).substring(2, 11);
const defaultExportSettings = {
    pixelRatio: 2,
    format: 'png',
    quality: 1
};
const useCarouselStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])()((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$middleware$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["persist"])((set, get)=>({
        carousel: null,
        selectedSlideId: null,
        exportSettings: defaultExportSettings,
        presets: [],
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
            set({
                carousel,
                selectedSlideId: null
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
            set({
                carousel: {
                    ...carousel,
                    slides: carousel.slides.map((slide)=>slide.id === id ? {
                            ...slide,
                            content: {
                                ...slide.content,
                                ...content
                            }
                        } : slide),
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
                presets: []
            });
        }
    }), {
    name: 'carousel-storage',
    partialize: (state)=>({
            carousel: state.carousel,
            exportSettings: state.exportSettings,
            presets: state.presets
        })
}));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/canvas-store.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCanvasStore",
    ()=>useCanvasStore
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/zustand/esm/react.mjs [app-client] (ecmascript)");
;
const useCanvasStore = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$zustand$2f$esm$2f$react$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["create"])((set, get)=>({
        // Initial state
        elements: new Map(),
        selectedIds: [],
        zoom: 1,
        pan: {
            x: 0,
            y: 0
        },
        activeTool: 'select',
        history: [],
        historyIndex: -1,
        /**
   * Add an element to the canvas
   */ addElement: (element)=>{
            set((state)=>{
                const newElements = new Map(state.elements);
                newElements.set(element.id, element);
                return {
                    elements: newElements
                };
            });
            get().saveToHistory();
        },
        /**
   * Update an existing element
   */ updateElement: (id, updates)=>{
            set((state)=>{
                const element = state.elements.get(id);
                if (!element) return state;
                const updatedElement = {
                    ...element,
                    ...updates
                };
                const newElements = new Map(state.elements);
                newElements.set(id, updatedElement);
                return {
                    elements: newElements
                };
            });
            get().saveToHistory();
        },
        /**
   * Delete an element by ID
   */ deleteElement: (id)=>{
            set((state)=>{
                const newElements = new Map(state.elements);
                newElements.delete(id);
                // Remove from selection if selected
                const newSelectedIds = state.selectedIds.filter((selectedId)=>selectedId !== id);
                return {
                    elements: newElements,
                    selectedIds: newSelectedIds
                };
            });
            get().saveToHistory();
            get().persistSelection(); // Update persisted selection
        },
        /**
   * Delete all selected elements
   */ deleteSelected: ()=>{
            set((state)=>{
                const newElements = new Map(state.elements);
                state.selectedIds.forEach((id)=>{
                    newElements.delete(id);
                });
                return {
                    elements: newElements,
                    selectedIds: []
                };
            });
            get().saveToHistory();
            get().persistSelection(); // Update persisted selection
        },
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
   * Save current state to history
   */ saveToHistory: ()=>{
            set((state)=>{
                const currentElements = Array.from(state.elements.values());
                // Check if state has changed from last history entry
                const lastHistoryEntry = state.history[state.historyIndex];
                const hasChanged = lastHistoryEntry ? JSON.stringify(currentElements) !== JSON.stringify(lastHistoryEntry) : true;
                if (!hasChanged) {
                    return state; // Don't save if state hasn't changed
                }
                // Remove any future history if we're not at the end
                const newHistory = state.history.slice(0, state.historyIndex + 1);
                newHistory.push(currentElements);
                // Limit history to 50 states
                if (newHistory.length > 50) {
                    newHistory.shift();
                }
                return {
                    history: newHistory,
                    historyIndex: newHistory.length - 1
                };
            });
        },
        /**
   * Undo last action
   */ undo: ()=>{
            set((state)=>{
                if (state.historyIndex <= 0) return state;
                const newIndex = state.historyIndex - 1;
                const previousElements = state.history[newIndex];
                const newElements = new Map();
                previousElements.forEach((element)=>{
                    newElements.set(element.id, element);
                });
                return {
                    elements: newElements,
                    historyIndex: newIndex
                };
            });
        },
        /**
   * Redo last undone action
   */ redo: ()=>{
            set((state)=>{
                if (state.historyIndex >= state.history.length - 1) return state;
                const newIndex = state.historyIndex + 1;
                const nextElements = state.history[newIndex];
                const newElements = new Map();
                nextElements.forEach((element)=>{
                    newElements.set(element.id, element);
                });
                return {
                    elements: newElements,
                    historyIndex: newIndex
                };
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
   */ restoreSelection: ()=>{
            try {
                const savedSelection = localStorage.getItem('canvas-selection');
                if (savedSelection) {
                    const selectedIds = JSON.parse(savedSelection);
                    // Filter out IDs that no longer exist in elements
                    const validSelection = selectedIds.filter((id)=>get().elements.has(id));
                    set({
                        selectedIds: validSelection
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
        },
        /**
 * Clear all elements from the canvas
 */ clearElements: ()=>{
            set({
                elements: new Map(),
                selectedIds: []
            });
        }
    }));
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/canvas/element-migration.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
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
    ()=>migrateSubtext
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)");
/**
 * Element Migration Functions
 *
 * Converts existing slide structure to canvas elements.
 * Provides backward compatibility while enabling new canvas-based editing.
 *
 * @module lib/canvas/element-migration
 */ /**
 * Generate unique ID for canvas element
 */ function generateId(prefix) {
    return `${prefix}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
}
;
// Constants
const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1350;
function migrateHeadline(slide) {
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
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'headline', headlineValue);
    // Get styling from slide style
    const styling = getSlideStyling(slide, 'headline');
    // Create TextElement
    const textElement = {
        id: generateId('headline'),
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
            textDecoration: 'none',
            fontStyle: 'normal'
        }
    };
    return textElement;
}
function migrateSubtext(slide) {
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
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'subtext', subtextValue);
    // Get styling from slide style
    const styling = getSlideStyling(slide, 'subtext');
    // Create TextElement
    const textElement = {
        id: generateId('subtext'),
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
            textDecoration: 'none',
            fontStyle: 'normal'
        }
    };
    return textElement;
}
function migrateBullets(slide) {
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
    const position = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["hasPositionConfig"])(bulletsContent) ? bulletsContent.position : undefined;
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'bullets', formattedBullets);
    // Get styling from slide style
    const styling = getSlideStyling(slide, 'bullets');
    // Create TextElement
    const textElement = {
        id: generateId('bullets'),
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
            textDecoration: 'none',
            fontStyle: 'normal'
        }
    };
    return textElement;
}
function migrateQuote(slide) {
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
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'quote', formattedQuote);
    // Get styling from slide style
    const styling = getSlideStyling(slide, 'quote');
    // Create TextElement with italic font style
    const textElement = {
        id: generateId('quote'),
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
            textDecoration: 'none',
            fontStyle: 'italic'
        }
    };
    return textElement;
}
function migrateAttribution(slide) {
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
    // Calculate element position and size
    const { x, y, width, height, zIndex, alignment } = calculateElementPosition(position, 'attribution', attributionValue);
    // Get styling from slide style
    const styling = getSlideStyling(slide, 'attribution');
    // Create TextElement
    const textElement = {
        id: generateId('attribution'),
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
            textDecoration: 'none',
            fontStyle: 'normal'
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
        id: generateId('image'),
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
function migrateBackground(slide) {
    // Background is not stored in Slide.style, it's handled separately
    // Return null for now - background will be added via other means
    return null;
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
        id: generateId('decorator'),
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
        id: generateId('cta'),
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
function migrateAllTextElements(slide) {
    const elements = [];
    // Migrate headline
    const headline = migrateHeadline(slide);
    if (headline) {
        elements.push(headline);
    }
    // Migrate subtext
    const subtext = migrateSubtext(slide);
    if (subtext) {
        elements.push(subtext);
    }
    // Migrate bullets
    const bullets = migrateBullets(slide);
    if (bullets) {
        elements.push(bullets);
    }
    // Migrate quote
    const quote = migrateQuote(slide);
    if (quote) {
        elements.push(quote);
    }
    // Migrate attribution
    const attribution = migrateAttribution(slide);
    if (attribution) {
        elements.push(attribution);
    }
    return elements;
}
function migrateAllElements(slide) {
    const elements = [];
    // Migrate background element (always first, zIndex 0)
    const backgroundElement = migrateBackground(slide);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Migrate decorators (on top of background, zIndex 0)
    const decoratorElement = migrateDecorators(slide);
    if (decoratorElement) {
        elements.push(decoratorElement);
    }
    // Migrate text elements
    const textElements = migrateAllTextElements(slide);
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
function migrateSlideToCanvas(slide, theme, styleTemplate, subTypeConfig, decoratorConfig) {
    // Use the existing migrateAllElements function
    return migrateAllElements(slide);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/export/png-exporter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "downloadDataUrl",
    ()=>downloadDataUrl,
    "exportAllSlides",
    ()=>exportAllSlides,
    "exportSlideAsPng",
    ()=>exportSlideAsPng
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/html-to-image/es/index.js [app-client] (ecmascript)");
;
async function exportSlideAsPng(element, filename, settings) {
    const options = {
        pixelRatio: settings.pixelRatio,
        quality: settings.quality,
        cacheBust: true,
        style: {
            transform: 'scale(1)',
            transformOrigin: 'top left'
        }
    };
    let dataUrl;
    if (settings.format === 'jpeg') {
        dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toJpeg"])(element, {
            ...options,
            backgroundColor: '#000000'
        });
    } else {
        dataUrl = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$html$2d$to$2d$image$2f$es$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toPng"])(element, options);
    }
    return {
        dataUrl,
        filename: `${filename}.${settings.format}`
    };
}
async function exportAllSlides(elements, baseName, settings, onProgress) {
    const results = [];
    for(let i = 0; i < elements.length; i++){
        const element = elements[i];
        const filename = `${baseName}_${String(i + 1).padStart(2, '0')}`;
        onProgress?.(i + 1, elements.length);
        const result = await exportSlideAsPng(element, filename, settings);
        results.push(result);
    }
    return results;
}
function downloadDataUrl(dataUrl, filename) {
    const link = document.createElement('a');
    link.download = filename;
    link.href = dataUrl;
    link.click();
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/lib/export/batch-exporter.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createZipFromExports",
    ()=>createZipFromExports,
    "dataUrlToBlob",
    ()=>dataUrlToBlob
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/jszip/lib/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/file-saver/dist/FileSaver.min.js [app-client] (ecmascript)");
;
;
async function createZipFromExports(exports, zipName) {
    const zip = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$jszip$2f$lib$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]();
    for (const exportItem of exports){
        // Convert data URL to blob
        const response = await fetch(exportItem.dataUrl);
        const blob = await response.blob();
        zip.file(exportItem.filename, blob);
    }
    const content = await zip.generateAsync({
        type: 'blob'
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$file$2d$saver$2f$dist$2f$FileSaver$2e$min$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveAs"])(content, `${zipName}.zip`);
}
function dataUrlToBlob(dataUrl) {
    const arr = dataUrl.split(',');
    const mime = arr[0].match(/:(.*?);/)?.[1] || 'image/png';
    const bstr = atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([
        u8arr
    ], {
        type: mime
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
    "DEFAULT_ELEMENT_POSITION",
    ()=>DEFAULT_ELEMENT_POSITION,
    "DEFAULT_IMAGE_CONFIG",
    ()=>DEFAULT_IMAGE_CONFIG,
    "getArrayContent",
    ()=>getArrayContent,
    "getContentPosition",
    ()=>getContentPosition,
    "getContentValue",
    ()=>getContentValue,
    "getDefaultSubTypeForSlideType",
    ()=>getDefaultSubTypeForSlideType,
    "hasPositionConfig",
    ()=>hasPositionConfig,
    "isSubTypeCompatible",
    ()=>isSubTypeCompatible
]);
const DEFAULT_ELEMENT_POSITION = {
    mode: 'auto',
    alignment: 'center',
    marginBottom: 16
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/decorators.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/hooks/useDecoratorConfig.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/decorators.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$unified$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/decorators/unified.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
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
    _s();
    const { carouselConfig, pillarId, slideConfig, styleTemplateId, applyTemplateSuggestions = false } = params;
    const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "useDecoratorConfig.useMemo[result]": ()=>{
            // Step 1: Start with default configuration
            let config = {
                ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"]
            };
            // Step 2: Apply carousel-level configuration (base)
            if (carouselConfig) {
                config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])(config, carouselConfig);
            }
            // Store carousel-level config for reference
            const carouselLevelConfig = {
                ...config
            };
            // Step 3: Apply pillar-level configuration (override carousel)
            const pillarConfig = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$unified$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPillarDecoratorConfig"])(pillarId);
            config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])(config, pillarConfig);
            // Store pillar-level config for reference
            const pillarLevelConfig = {
                ...config
            };
            // Step 4: Apply slide-level configuration (override EVERYTHING)
            // This MUST happen before template suggestions
            if (slideConfig) {
                config = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["mergeDecoratorConfig"])(config, slideConfig);
            }
            // Step 5: Apply style template suggestions (only where NOT manually configured)
            // Template suggestions are suggestions only, not overrides
            if (applyTemplateSuggestions && styleTemplateId) {
                const templateSuggestion = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$unified$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STYLE_TEMPLATE_DECORATORS"][styleTemplateId];
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
                Object.keys(carouselConfig).forEach({
                    "useDecoratorConfig.useMemo[result]": (key)=>{
                        decoratorSources.carousel[key] = true;
                    }
                }["useDecoratorConfig.useMemo[result]"]);
            }
            // Track pillar-level decorators (only those not overridden by carousel)
            Object.keys(pillarConfig).forEach({
                "useDecoratorConfig.useMemo[result]": (key)=>{
                    // Only mark as pillar source if not already set by carousel
                    if (!decoratorSources.carousel[key]) {
                        decoratorSources.pillar[key] = true;
                    }
                }
            }["useDecoratorConfig.useMemo[result]"]);
            // Track template-suggested decorators (only those not manually configured)
            if (applyTemplateSuggestions && styleTemplateId) {
                const templateSuggestion = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$decorators$2f$unified$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["STYLE_TEMPLATE_DECORATORS"][styleTemplateId];
                if (templateSuggestion) {
                    Object.keys(templateSuggestion).forEach({
                        "useDecoratorConfig.useMemo[result]": (key)=>{
                            // Only mark as template source if not manually configured at slide level
                            if (!slideConfig || !(key in slideConfig)) {
                                decoratorSources.template[key] = true;
                            }
                        }
                    }["useDecoratorConfig.useMemo[result]"]);
                }
            }
            // Track slide-level manually configured decorators
            if (slideConfig) {
                Object.keys(slideConfig).forEach({
                    "useDecoratorConfig.useMemo[result]": (key)=>{
                        decoratorSources.slide[key] = true;
                    }
                }["useDecoratorConfig.useMemo[result]"]);
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
        }
    }["useDecoratorConfig.useMemo[result]"], [
        carouselConfig,
        pillarId,
        slideConfig,
        styleTemplateId,
        applyTemplateSuggestions
    ]);
    return result;
}
_s(useDecoratorConfig, "eHS1hgZid6BW1PbfBVPzAMIpSIg=");
function usePositionStyles(position) {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "usePositionStyles.useMemo": ()=>{
            const positions = {
                'top-left': 'top-8 left-8',
                'top-right': 'top-8 right-8',
                'bottom-left': 'bottom-8 left-8',
                'bottom-right': 'bottom-8 right-8'
            };
            return positions[position] || 'bottom-8 right-8';
        }
    }["usePositionStyles.useMemo"], [
        position
    ]);
}
_s1(usePositionStyles, "nwk+m61qLgjDVUp4IGV/072DDN4=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HomePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/carousel-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$editor$2f$CarouselEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/editor/CarouselEditor.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$export$2f$ExportDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/export/ExportDialog.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/download.js [app-client] (ecmascript) <export default as Download>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/lucide-react/dist/esm/icons/folder-open.js [app-client] (ecmascript) <export default as FolderOpen>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
function HomePage() {
    _s();
    const { carousel, createCarousel, reset } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarouselStore"])();
    const [showExport, setShowExport] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [showNewCarousel, setShowNewCarousel] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [newName, setNewName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [newPillar, setNewPillar] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('p1');
    // Auto-show new carousel dialog if none exists
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HomePage.useEffect": ()=>{
            if (!carousel) {
                setShowNewCarousel(true);
            }
        }
    }["HomePage.useEffect"], [
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
                __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarouselStore"].getState().loadCarousel(data);
            } catch (error) {
                alert('Invalid JSON file');
            }
        };
        reader.readAsText(file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen flex flex-col overflow-hidden",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "flex-shrink-0 border-b border-white/10 px-6 py-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent",
                                    children: "Carousel Generator"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 67,
                                    columnNumber: 13
                                }, this),
                                carousel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowNewCarousel(true),
                                    className: "flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors cursor-pointer",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$folder$2d$open$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__FolderOpen$3e$__["FolderOpen"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this),
                                        "Import",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                carousel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: handleExportJSON,
                                            className: "flex items-center gap-2 px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-lg transition-colors",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>setShowExport(true),
                                            className: "flex items-center gap-2 px-4 py-2 text-sm bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:opacity-90 transition-opacity",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$download$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Download$3e$__["Download"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 p-6 overflow-hidden min-h-0",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$editor$2f$CarouselEditor$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CarouselEditor"], {}, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                lineNumber: 121,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$components$2f$export$2f$ExportDialog$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ExportDialog"], {
                isOpen: showExport,
                onClose: ()=>setShowExport(false)
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                lineNumber: 126,
                columnNumber: 7
            }, this),
            showNewCarousel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/80",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "bg-gray-900 rounded-2xl w-full max-w-md p-6",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-white mb-6",
                            children: "Create New Carousel"
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                            lineNumber: 132,
                            columnNumber: 13
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-white/70 mb-2",
                                            children: "Carousel Name"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 138,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-white/70 mb-2",
                                            children: "Pillar Theme"
                                        }, void 0, false, {
                                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                            lineNumber: 152,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "grid grid-cols-3 gap-2",
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pillarList"].map((pillar)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                    onClick: ()=>setNewPillar(pillar.id),
                                                    className: `px-3 py-2 rounded-lg text-sm transition-all border-2 ${newPillar === pillar.id ? 'border-white text-white' : 'border-transparent text-white/60 hover:text-white hover:bg-white/5'}`,
                                                    style: {
                                                        backgroundColor: newPillar === pillar.id ? pillar.primaryColor + '20' : undefined
                                                    },
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex justify-end gap-3 mt-6",
                            children: [
                                carousel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setShowNewCarousel(false),
                                    className: "px-4 py-2 text-white/70 hover:text-white transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/app/page.tsx",
                                    lineNumber: 185,
                                    columnNumber: 17
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
_s(HomePage, "Ft9KN8Dl7Ijc0s5wi9s1bIhMEKA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCarouselStore"]
    ];
});
_c = HomePage;
var _c;
__turbopack_context__.k.register(_c, "HomePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=3a06e_Empire-Management_03_INFRASTRUCTURE_02_Codebase_carousel-generator_src_7f5142b1._.js.map