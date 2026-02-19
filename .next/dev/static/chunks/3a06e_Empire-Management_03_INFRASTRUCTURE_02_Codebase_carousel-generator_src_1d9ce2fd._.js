(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/utils/touch-gestures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Touch Gesture Utilities
 *
 * Provides utilities for handling touch gestures in the canvas editor.
 * Supports drag, resize, rotate, and pinch-to-zoom gestures.
 *
 * @module TouchGestures
 */ __turbopack_context__.s([
    "TouchGesture",
    ()=>TouchGesture,
    "getTouchAngle",
    ()=>getTouchAngle,
    "getTouchCenter",
    ()=>getTouchCenter,
    "getTouchDistance",
    ()=>getTouchDistance,
    "getTouchSupportLevel",
    ()=>getTouchSupportLevel,
    "isMultiTouch",
    ()=>isMultiTouch,
    "isTouchDevice",
    ()=>isTouchDevice,
    "preventTouchDefault",
    ()=>preventTouchDefault,
    "stopTouchPropagation",
    ()=>stopTouchPropagation,
    "touchToCanvas",
    ()=>touchToCanvas,
    "touchToPoint",
    ()=>touchToPoint
]);
/**
 * Default configuration
 */ const DEFAULT_CONFIG = {
    tapThreshold: 10,
    tapTimeout: 300,
    doubleTapTimeout: 300,
    longPressTimeout: 500,
    swipeThreshold: 50,
    swipeVelocityThreshold: 0.5,
    pinchThreshold: 20,
    rotateThreshold: 5,
    momentumEnabled: true,
    momentumDecay: 0.95
};
class TouchGesture {
    config;
    state;
    pinchState;
    rotateState;
    lastTap = null;
    longPressTimer = null;
    gestureType = 'none';
    callbacks;
    constructor(config = {}){
        this.config = {
            ...DEFAULT_CONFIG,
            ...config
        };
        this.state = this.createInitialState();
        this.pinchState = this.createInitialPinchState();
        this.rotateState = this.createInitialRotateState();
        this.callbacks = new Map();
    }
    /**
   * Create initial touch state
   */ createInitialState() {
        return {
            isActive: false,
            touches: new Map(),
            startPoint: {
                x: 0,
                y: 0
            },
            currentPoint: {
                x: 0,
                y: 0
            },
            timestamp: 0
        };
    }
    /**
   * Create initial pinch state
   */ createInitialPinchState() {
        return {
            isActive: false,
            initialDistance: 0,
            currentDistance: 0,
            initialCenter: {
                x: 0,
                y: 0
            },
            currentCenter: {
                x: 0,
                y: 0
            },
            scale: 1
        };
    }
    /**
   * Create initial rotation state
   */ createInitialRotateState() {
        return {
            isActive: false,
            initialAngle: 0,
            currentAngle: 0,
            center: {
                x: 0,
                y: 0
            }
        };
    }
    /**
   * Register callback for gesture type
   */ on(gestureType, callback) {
        this.callbacks.set(gestureType, callback);
    }
    /**
   * Remove callback for gesture type
   */ off(gestureType) {
        this.callbacks.delete(gestureType);
    }
    /**
   * Handle touch start
   */ handleTouchStart(touches) {
        const touchArray = Array.from(touches);
        // Update touch state
        touchArray.forEach((touch)=>{
            this.state.touches.set(touch.identifier, {
                identifier: touch.identifier,
                x: touch.clientX,
                y: touch.clientY,
                clientX: touch.clientX,
                clientY: touch.clientY
            });
        });
        // Start gesture
        if (touchArray.length === 1) {
            this.state.isActive = true;
            this.state.startPoint = {
                x: touchArray[0].clientX,
                y: touchArray[0].clientY
            };
            this.state.currentPoint = {
                x: touchArray[0].clientX,
                y: touchArray[0].clientY
            };
            this.state.timestamp = Date.now();
            // Start long press timer
            this.longPressTimer = window.setTimeout(()=>{
                if (this.state.isActive && this.state.touches.size === 1) {
                    this.emitGesture({
                        type: 'long-press',
                        point: this.state.currentPoint,
                        duration: Date.now() - this.state.timestamp
                    });
                }
            }, this.config.longPressTimeout);
        } else if (touchArray.length === 2) {
            // Two-finger gesture
            this.clearLongPressTimer();
            this.state.isActive = false;
            const touch1 = this.state.touches.get(touchArray[0].identifier);
            const touch2 = this.state.touches.get(touchArray[1].identifier);
            const distance = this.calculateDistance(touch1, touch2);
            const center = this.calculateCenter(touch1, touch2);
            if (distance > this.config.pinchThreshold) {
                // Pinch gesture
                this.pinchState.isActive = true;
                this.pinchState.initialDistance = distance;
                this.pinchState.currentDistance = distance;
                this.pinchState.initialCenter = center;
                this.pinchState.currentCenter = center;
                this.pinchState.scale = 1;
            }
            const angle = this.calculateAngle(touch1, touch2);
            if (Math.abs(angle) > this.config.rotateThreshold) {
                // Rotate gesture
                this.rotateState.isActive = true;
                this.rotateState.initialAngle = angle;
                this.rotateState.currentAngle = angle;
                this.rotateState.center = center;
            }
        }
    }
    /**
   * Handle touch move
   */ handleTouchMove(touches) {
        const touchArray = Array.from(touches);
        // Update touch positions
        touchArray.forEach((touch)=>{
            const touchPoint = this.state.touches.get(touch.identifier);
            if (touchPoint) {
                touchPoint.x = touch.clientX;
                touchPoint.y = touch.clientY;
                touchPoint.clientX = touch.clientX;
                touchPoint.clientY = touch.clientY;
            }
        });
        if (touchArray.length === 1 && this.state.isActive) {
            // Single finger drag
            const touch = touchArray[0];
            const currentPoint = {
                x: touch.clientX,
                y: touch.clientY
            };
            const delta = {
                x: currentPoint.x - this.state.startPoint.x,
                y: currentPoint.y - this.state.startPoint.y
            };
            const distance = this.calculateDistance(this.state.touches.get(touch.identifier), {
                identifier: touch.identifier,
                x: this.state.startPoint.x,
                y: this.state.startPoint.y,
                clientX: this.state.startPoint.x,
                clientY: this.state.startPoint.y
            });
            this.state.currentPoint = currentPoint;
            // Determine gesture type based on distance
            if (distance > this.config.tapThreshold) {
                this.clearLongPressTimer();
                this.gestureType = 'drag';
                this.emitGesture({
                    type: 'drag',
                    startPoint: this.state.startPoint,
                    currentPoint,
                    delta,
                    distance
                });
            }
        } else if (touchArray.length === 2) {
            // Two-finger gestures
            const touch1 = this.state.touches.get(touchArray[0].identifier);
            const touch2 = this.state.touches.get(touchArray[1].identifier);
            const distance = this.calculateDistance(touch1, touch2);
            const center = this.calculateCenter(touch1, touch2);
            // Pinch gesture
            if (this.pinchState.isActive) {
                this.pinchState.currentDistance = distance;
                this.pinchState.currentCenter = center;
                this.pinchState.scale = distance / this.pinchState.initialDistance;
                this.emitGesture({
                    type: 'pinch',
                    center,
                    scale: this.pinchState.scale,
                    deltaScale: this.pinchState.scale - 1
                });
            }
            // Rotate gesture
            const angle = this.calculateAngle(touch1, touch2);
            if (this.rotateState.isActive) {
                this.rotateState.currentAngle = angle;
                this.emitGesture({
                    type: 'rotate',
                    center,
                    angle,
                    deltaAngle: angle - this.rotateState.initialAngle
                });
            }
        }
    }
    /**
   * Handle touch end
   */ handleTouchEnd(touches) {
        const touchArray = Array.from(touches);
        // Remove ended touches
        const currentIdentifiers = new Set(touchArray.map((t)=>t.identifier));
        for (const [identifier, _] of this.state.touches){
            if (!currentIdentifiers.has(identifier)) {
                this.state.touches.delete(identifier);
            }
        }
        if (touchArray.length === 0) {
            // All touches ended
            this.clearLongPressTimer();
            if (this.state.isActive) {
                // Check for tap
                const distance = this.calculateDistance({
                    identifier: 0,
                    x: this.state.startPoint.x,
                    y: this.state.startPoint.y,
                    clientX: this.state.startPoint.x,
                    clientY: this.state.startPoint.y
                }, {
                    identifier: 1,
                    x: this.state.currentPoint.x,
                    y: this.state.currentPoint.y,
                    clientX: this.state.currentPoint.x,
                    clientY: this.state.currentPoint.y
                });
                const duration = Date.now() - this.state.timestamp;
                if (distance < this.config.tapThreshold && duration < this.config.tapTimeout) {
                    const tapEvent = {
                        type: 'tap',
                        point: this.state.currentPoint,
                        timestamp: Date.now()
                    };
                    // Check for double tap
                    if (this.lastTap) {
                        const timeDiff = tapEvent.timestamp - this.lastTap.timestamp;
                        const distDiff = this.calculateDistance({
                            identifier: 0,
                            x: this.lastTap.point.x,
                            y: this.lastTap.point.y,
                            clientX: this.lastTap.point.x,
                            clientY: this.lastTap.point.y
                        }, {
                            identifier: 1,
                            x: tapEvent.point.x,
                            y: tapEvent.point.y,
                            clientX: tapEvent.point.x,
                            clientY: tapEvent.point.y
                        });
                        if (timeDiff < this.config.doubleTapTimeout && distDiff < this.config.tapThreshold) {
                            this.emitGesture({
                                type: 'double-tap',
                                point: tapEvent.point,
                                firstTapTime: this.lastTap.timestamp,
                                secondTapTime: tapEvent.timestamp
                            });
                            this.lastTap = null;
                        } else {
                            this.emitGesture(tapEvent);
                            this.lastTap = tapEvent;
                        }
                    } else {
                        this.emitGesture(tapEvent);
                        this.lastTap = tapEvent;
                    }
                } else if (this.gestureType === 'drag') {
                    // Check for swipe
                    const duration = Date.now() - this.state.timestamp;
                    const delta = {
                        x: this.state.currentPoint.x - this.state.startPoint.x,
                        y: this.state.currentPoint.y - this.state.startPoint.y
                    };
                    const velocity = this.calculateDistance({
                        identifier: 0,
                        x: 0,
                        y: 0,
                        clientX: 0,
                        clientY: 0
                    }, {
                        identifier: 1,
                        x: delta.x,
                        y: delta.y,
                        clientX: delta.x,
                        clientY: delta.y
                    }) / duration;
                    if (velocity > this.config.swipeVelocityThreshold) {
                        this.emitGesture({
                            type: 'swipe',
                            startPoint: this.state.startPoint,
                            endPoint: this.state.currentPoint,
                            direction: this.calculateSwipeDirection(delta),
                            velocity
                        });
                    }
                }
            }
            // Reset states
            this.state = this.createInitialState();
            this.pinchState = this.createInitialPinchState();
            this.rotateState = this.createInitialRotateState();
            this.gestureType = 'none';
        } else if (touchArray.length === 1) {
            // One touch remaining (from two)
            this.pinchState.isActive = false;
            this.rotateState.isActive = false;
        }
    }
    /**
   * Handle touch cancel
   */ handleTouchCancel() {
        this.clearLongPressTimer();
        this.state = this.createInitialState();
        this.pinchState = this.createInitialPinchState();
        this.rotateState = this.createInitialRotateState();
        this.gestureType = 'none';
    }
    /**
   * Clear long press timer
   */ clearLongPressTimer() {
        if (this.longPressTimer !== null) {
            clearTimeout(this.longPressTimer);
            this.longPressTimer = null;
        }
    }
    /**
   * Calculate distance between two touch points
   */ calculateDistance(touch1, touch2) {
        const dx = touch2.x - touch1.x;
        const dy = touch2.y - touch1.y;
        return Math.sqrt(dx * dx + dy * dy);
    }
    /**
   * Calculate center point between two touch points
   */ calculateCenter(touch1, touch2) {
        return {
            x: (touch1.x + touch2.x) / 2,
            y: (touch1.y + touch2.y) / 2
        };
    }
    /**
   * Calculate angle between two touch points (in degrees)
   */ calculateAngle(touch1, touch2) {
        const dx = touch2.x - touch1.x;
        const dy = touch2.y - touch1.y;
        return Math.atan2(dy, dx) * 180 / Math.PI;
    }
    /**
   * Calculate swipe direction
   */ calculateSwipeDirection(delta) {
        const absX = Math.abs(delta.x);
        const absY = Math.abs(delta.y);
        if (absX > absY) {
            return delta.x > 0 ? 'right' : 'left';
        } else {
            return delta.y > 0 ? 'down' : 'up';
        }
    }
    /**
   * Emit gesture event
   */ emitGesture(event) {
        const callback = this.callbacks.get(event.type);
        if (callback) {
            callback(event);
        }
    }
    /**
   * Check if gesture is active
   */ isGestureActive() {
        return this.state.isActive || this.pinchState.isActive || this.rotateState.isActive;
    }
    /**
   * Get current gesture type
   */ getCurrentGestureType() {
        return this.gestureType;
    }
    /**
   * Reset gesture state
   */ reset() {
        this.clearLongPressTimer();
        this.state = this.createInitialState();
        this.pinchState = this.createInitialPinchState();
        this.rotateState = this.createInitialRotateState();
        this.gestureType = 'none';
        this.lastTap = null;
    }
}
function touchToPoint(touch) {
    return {
        x: touch.clientX,
        y: touch.clientY
    };
}
function touchToCanvas(touch, stage) {
    const stagePos = stage.position();
    const stageScale = stage.scaleX();
    const touchPoint = {
        x: touch.clientX,
        y: touch.clientY
    };
    return {
        x: (touchPoint.x - stagePos.x) / stageScale,
        y: (touchPoint.y - stagePos.y) / stageScale
    };
}
function isMultiTouch(touches) {
    return touches.length > 1;
}
function getTouchDistance(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.sqrt(dx * dx + dy * dy);
}
function getTouchCenter(touch1, touch2) {
    return {
        x: (touch1.clientX + touch2.clientX) / 2,
        y: (touch1.clientY + touch2.clientY) / 2
    };
}
function getTouchAngle(touch1, touch2) {
    const dx = touch2.clientX - touch1.clientX;
    const dy = touch2.clientY - touch1.clientY;
    return Math.atan2(dy, dx) * 180 / Math.PI;
}
function preventTouchDefault(e) {
    e.preventDefault();
}
function stopTouchPropagation(e) {
    e.stopPropagation();
}
function isTouchDevice() {
    return ("TURBOPACK compile-time value", "object") !== 'undefined' && ('ontouchstart' in window || navigator.maxTouchPoints > 0 || // @ts-ignore
    navigator.msMaxTouchPoints > 0);
}
function getTouchSupportLevel() {
    if (!isTouchDevice()) return 'none';
    if (navigator.maxTouchPoints > 1) return 'multi';
    return 'basic';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/hooks/useTouchGestures.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "usePinchToZoom",
    ()=>usePinchToZoom,
    "useTouchDevice",
    ()=>useTouchDevice,
    "useTouchDrag",
    ()=>useTouchDrag,
    "useTouchGestures",
    ()=>useTouchGestures,
    "useTouchResize",
    ()=>useTouchResize,
    "useTouchRotate",
    ()=>useTouchRotate
]);
/**
 * Touch Handler Hooks
 *
 * React hooks for handling touch gestures in the canvas editor.
 * Provides hooks for drag, resize, rotate, and pinch-to-zoom gestures.
 *
 * @module UseTouchGestures
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/canvas-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/utils/touch-gestures.ts [app-client] (ecmascript)");
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature();
;
;
;
function useTouchDrag(element, onDragStart, onDragEnd, onTransform, config) {
    _s();
    const { selectElement } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])();
    const dragState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isDragging: false,
        startPoint: {
            x: 0,
            y: 0
        },
        elementStart: {
            x: 0,
            y: 0
        }
    });
    const gestureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize gesture handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTouchDrag.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])()) return;
            gestureRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TouchGesture"](config);
            const gesture = gestureRef.current;
            gesture.on('drag', {
                "useTouchDrag.useEffect": (event)=>{
                    if (event.type === 'drag') {
                        handleDragMove(event);
                    }
                }
            }["useTouchDrag.useEffect"]);
            return ({
                "useTouchDrag.useEffect": ()=>{
                    if (gestureRef.current) {
                        gestureRef.current.reset();
                    }
                }
            })["useTouchDrag.useEffect"];
        }
    }["useTouchDrag.useEffect"], [
        config
    ]);
    const handleDragStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchDrag.useCallback[handleDragStart]": (e, stage)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])()) return;
            const touch = e.touches[0];
            const canvasPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchToCanvas"])(touch, stage);
            dragState.current = {
                isDragging: true,
                startPoint: canvasPoint,
                elementStart: {
                    x: element.x,
                    y: element.y
                }
            };
            onDragStart?.();
        }
    }["useTouchDrag.useCallback[handleDragStart]"], [
        element,
        onDragStart
    ]);
    const handleDragMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchDrag.useCallback[handleDragMove]": (event)=>{
            if (!dragState.current.isDragging) return;
            const { startPoint, elementStart } = dragState.current;
            if (event.type === 'drag') {
                const deltaX = event.currentPoint.x - startPoint.x;
                const deltaY = event.currentPoint.y - startPoint.y;
                const newX = elementStart.x + deltaX;
                const newY = elementStart.y + deltaY;
                // Phase 3: Use callback instead of direct store update
                onTransform?.({
                    x: newX,
                    y: newY,
                    width: element.width,
                    height: element.height,
                    rotation: element.rotation
                });
            }
        }
    }["useTouchDrag.useCallback[handleDragMove]"], [
        element,
        onTransform
    ]);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchDrag.useCallback[handleDragEnd]": (e, stage)=>{
            if (!dragState.current.isDragging) return;
            const touch = e.touches[0] || e.changedTouches[0];
            const canvasPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchToCanvas"])(touch, stage);
            const transform = {
                x: canvasPoint.x,
                y: canvasPoint.y
            };
            dragState.current.isDragging = false;
            onDragEnd?.(transform);
        }
    }["useTouchDrag.useCallback[handleDragEnd]"], [
        onDragEnd
    ]);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchDrag.useCallback[handleTouchStart]": (e, stage)=>{
            if (!gestureRef.current || e.touches.length !== 1) return;
            gestureRef.current.handleTouchStart(e.touches);
            handleDragStart(e, stage);
        }
    }["useTouchDrag.useCallback[handleTouchStart]"], [
        handleDragStart
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchDrag.useCallback[handleTouchMove]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchMove(e.touches);
        }
    }["useTouchDrag.useCallback[handleTouchMove]"], []);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchDrag.useCallback[handleTouchEnd]": (e, stage)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchEnd(e.touches);
            handleDragEnd(e, stage);
        }
    }["useTouchDrag.useCallback[handleTouchEnd]"], [
        handleDragEnd
    ]);
    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        isDragging: dragState.current.isDragging
    };
}
_s(useTouchDrag, "z9p6kj2oDMLayJoY5GnFAharnlg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"]
    ];
});
function useTouchResize(element, handle, onResizeStart, onResizeEnd, onTransform, keepAspectRatio, config) {
    _s1();
    const resizeState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isResizing: false,
        startPoint: {
            x: 0,
            y: 0
        },
        elementStart: {
            x: 0,
            y: 0,
            width: 0,
            height: 0
        }
    });
    const gestureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize gesture handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTouchResize.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])()) return;
            gestureRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TouchGesture"](config);
            const gesture = gestureRef.current;
            gesture.on('drag', {
                "useTouchResize.useEffect": (event)=>{
                    if (event.type === 'drag') {
                        handleResizeMove(event);
                    }
                }
            }["useTouchResize.useEffect"]);
            return ({
                "useTouchResize.useEffect": ()=>{
                    if (gestureRef.current) {
                        gestureRef.current.reset();
                    }
                }
            })["useTouchResize.useEffect"];
        }
    }["useTouchResize.useEffect"], [
        config
    ]);
    const handleResizeStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchResize.useCallback[handleResizeStart]": (e, stage)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])()) return;
            const touch = e.touches[0];
            const canvasPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchToCanvas"])(touch, stage);
            resizeState.current = {
                isResizing: true,
                startPoint: canvasPoint,
                elementStart: {
                    x: element.x,
                    y: element.y,
                    width: element.width,
                    height: element.height
                }
            };
            onResizeStart?.();
        }
    }["useTouchResize.useCallback[handleResizeStart]"], [
        element,
        onResizeStart
    ]);
    const handleResizeMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchResize.useCallback[handleResizeMove]": (event)=>{
            if (!resizeState.current.isResizing) return;
            const { startPoint, elementStart } = resizeState.current;
            if (event.type === 'drag') {
                const deltaX = event.currentPoint.x - startPoint.x;
                const deltaY = event.currentPoint.y - startPoint.y;
                let newX = elementStart.x;
                let newY = elementStart.y;
                let newWidth = elementStart.width;
                let newHeight = elementStart.height;
                // Apply resize based on handle
                switch(handle){
                    case 'top-left':
                        newX = elementStart.x + deltaX;
                        newY = elementStart.y + deltaY;
                        newWidth = elementStart.width - deltaX;
                        newHeight = elementStart.height - deltaY;
                        break;
                    case 'top-center':
                        newY = elementStart.y + deltaY;
                        newHeight = elementStart.height - deltaY;
                        break;
                    case 'top-right':
                        newY = elementStart.y + deltaY;
                        newWidth = elementStart.width + deltaX;
                        newHeight = elementStart.height - deltaY;
                        break;
                    case 'middle-left':
                        newX = elementStart.x + deltaX;
                        newWidth = elementStart.width - deltaX;
                        break;
                    case 'middle-right':
                        newWidth = elementStart.width + deltaX;
                        break;
                    case 'bottom-left':
                        newX = elementStart.x + deltaX;
                        newWidth = elementStart.width - deltaX;
                        newHeight = elementStart.height + deltaY;
                        break;
                    case 'bottom-center':
                        newHeight = elementStart.height + deltaY;
                        break;
                    case 'bottom-right':
                        newWidth = elementStart.width + deltaX;
                        newHeight = elementStart.height + deltaY;
                        break;
                }
                // Maintain aspect ratio if enabled
                if (keepAspectRatio) {
                    const aspectRatio = elementStart.width / elementStart.height;
                    if (Math.abs(deltaX) > Math.abs(deltaY)) {
                        newHeight = newWidth / aspectRatio;
                    } else {
                        newWidth = newHeight * aspectRatio;
                    }
                }
                // Prevent negative dimensions
                newWidth = Math.max(20, newWidth);
                newHeight = Math.max(20, newHeight);
                // Phase 3: Use callback instead of direct store update
                onTransform?.({
                    x: newX,
                    y: newY,
                    width: newWidth,
                    height: newHeight,
                    rotation: element.rotation
                });
            }
        }
    }["useTouchResize.useCallback[handleResizeMove]"], [
        element,
        handle,
        keepAspectRatio,
        onTransform
    ]);
    const handleResizeEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchResize.useCallback[handleResizeEnd]": (e, stage)=>{
            if (!resizeState.current.isResizing) return;
            const touch = e.touches[0] || e.changedTouches[0];
            const canvasPoint = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchToCanvas"])(touch, stage);
            const transform = {
                x: canvasPoint.x,
                y: canvasPoint.y,
                width: element.width,
                height: element.height
            };
            resizeState.current.isResizing = false;
            onResizeEnd?.(transform);
        }
    }["useTouchResize.useCallback[handleResizeEnd]"], [
        element,
        onResizeEnd
    ]);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchResize.useCallback[handleTouchStart]": (e, stage)=>{
            if (!gestureRef.current || e.touches.length !== 1) return;
            gestureRef.current.handleTouchStart(e.touches);
            handleResizeStart(e, stage);
        }
    }["useTouchResize.useCallback[handleTouchStart]"], [
        handleResizeStart
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchResize.useCallback[handleTouchMove]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchMove(e.touches);
        }
    }["useTouchResize.useCallback[handleTouchMove]"], []);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchResize.useCallback[handleTouchEnd]": (e, stage)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchEnd(e.touches);
            handleResizeEnd(e, stage);
        }
    }["useTouchResize.useCallback[handleTouchEnd]"], [
        handleResizeEnd
    ]);
    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        isResizing: resizeState.current.isResizing
    };
}
_s1(useTouchResize, "5zfkMPHyeucsqVpQOWFwpgXZcME=");
function useTouchRotate(element, onRotateStart, onRotateEnd, onTransform, config) {
    _s2();
    const rotateState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isRotating: false,
        startAngle: 0,
        elementRotation: 0
    });
    const gestureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize gesture handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTouchRotate.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])()) return;
            gestureRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TouchGesture"](config);
            const gesture = gestureRef.current;
            gesture.on('rotate', {
                "useTouchRotate.useEffect": (event)=>{
                    if (event.type === 'rotate') {
                        handleRotateMove(event);
                    }
                }
            }["useTouchRotate.useEffect"]);
            return ({
                "useTouchRotate.useEffect": ()=>{
                    if (gestureRef.current) {
                        gestureRef.current.reset();
                    }
                }
            })["useTouchRotate.useEffect"];
        }
    }["useTouchRotate.useEffect"], [
        config
    ]);
    const handleRotateStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchRotate.useCallback[handleRotateStart]": (e, stage)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])() || e.touches.length !== 2) return;
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const canvasPoint1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchToCanvas"])(touch1, stage);
            const canvasPoint2 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["touchToCanvas"])(touch2, stage);
            const dx = canvasPoint2.x - canvasPoint1.x;
            const dy = canvasPoint2.y - canvasPoint1.y;
            const angle = Math.atan2(dy, dx) * 180 / Math.PI;
            rotateState.current = {
                isRotating: true,
                startAngle: angle,
                elementRotation: element.rotation
            };
            onRotateStart?.();
        }
    }["useTouchRotate.useCallback[handleRotateStart]"], [
        element.rotation,
        onRotateStart
    ]);
    const handleRotateMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchRotate.useCallback[handleRotateMove]": (event)=>{
            if (!rotateState.current.isRotating) return;
            const { startAngle, elementRotation } = rotateState.current;
            if (event.type === 'rotate') {
                const deltaAngle = event.deltaAngle;
                const newRotation = elementRotation + deltaAngle;
                // Phase 3: Use callback instead of direct store update
                onTransform?.({
                    x: element.x,
                    y: element.y,
                    width: element.width,
                    height: element.height,
                    rotation: newRotation
                });
            }
        }
    }["useTouchRotate.useCallback[handleRotateMove]"], [
        element,
        onTransform
    ]);
    const handleRotateEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchRotate.useCallback[handleRotateEnd]": (e)=>{
            if (!rotateState.current.isRotating) return;
            const currentRotation = element.rotation;
            rotateState.current.isRotating = false;
            onRotateEnd?.(currentRotation);
        }
    }["useTouchRotate.useCallback[handleRotateEnd]"], [
        element.rotation,
        onRotateEnd
    ]);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchRotate.useCallback[handleTouchStart]": (e, stage)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchStart(e.touches);
            if (e.touches.length === 2) {
                handleRotateStart(e, stage);
            }
        }
    }["useTouchRotate.useCallback[handleTouchStart]"], [
        handleRotateStart
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchRotate.useCallback[handleTouchMove]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchMove(e.touches);
        }
    }["useTouchRotate.useCallback[handleTouchMove]"], []);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchRotate.useCallback[handleTouchEnd]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchEnd(e.touches);
            if (e.touches.length === 0) {
                handleRotateEnd(e);
            }
        }
    }["useTouchRotate.useCallback[handleTouchEnd]"], [
        handleRotateEnd
    ]);
    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        isRotating: rotateState.current.isRotating
    };
}
_s2(useTouchRotate, "24WXgJ/0qfJN6GcYy3bCoMmk0Fc=");
function usePinchToZoom(stage, onZoomChange, config) {
    _s3();
    const { setZoom, setPan } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"])();
    const zoomState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        isZooming: false,
        initialZoom: 1,
        initialScale: 1,
        center: {
            x: 0,
            y: 0
        }
    });
    const gestureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize gesture handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "usePinchToZoom.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])() || !stage) return;
            gestureRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TouchGesture"](config);
            const gesture = gestureRef.current;
            gesture.on('pinch', {
                "usePinchToZoom.useEffect": (event)=>{
                    if (event.type === 'pinch') {
                        handlePinchMove(event);
                    }
                }
            }["usePinchToZoom.useEffect"]);
            return ({
                "usePinchToZoom.useEffect": ()=>{
                    if (gestureRef.current) {
                        gestureRef.current.reset();
                    }
                }
            })["usePinchToZoom.useEffect"];
        }
    }["usePinchToZoom.useEffect"], [
        config,
        stage
    ]);
    const handlePinchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePinchToZoom.useCallback[handlePinchStart]": (e)=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])() || !stage || e.touches.length !== 2) return;
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const center = {
                x: (touch1.clientX + touch2.clientX) / 2,
                y: (touch1.clientY + touch2.clientY) / 2
            };
            zoomState.current = {
                isZooming: true,
                initialZoom: stage.scaleX(),
                initialScale: 1,
                center
            };
        }
    }["usePinchToZoom.useCallback[handlePinchStart]"], [
        stage
    ]);
    const handlePinchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePinchToZoom.useCallback[handlePinchMove]": (event)=>{
            if (!zoomState.current.isZooming || !stage) return;
            if (event.type === 'pinch') {
                const { initialZoom, center } = zoomState.current;
                const newScale = initialZoom * event.scale;
                // Limit zoom
                const clampedScale = Math.max(0.1, Math.min(5, newScale));
                // Calculate new position
                const mousePointTo = {
                    x: (center.x - stage.x()) / initialZoom,
                    y: (center.y - stage.y()) / initialZoom
                };
                const newPos = {
                    x: center.x - mousePointTo.x * clampedScale,
                    y: center.y - mousePointTo.y * clampedScale
                };
                stage.scale({
                    x: clampedScale,
                    y: clampedScale
                });
                stage.position(newPos);
                stage.batchDraw();
                setZoom(clampedScale);
                setPan(newPos);
                onZoomChange?.(clampedScale);
            }
        }
    }["usePinchToZoom.useCallback[handlePinchMove]"], [
        stage,
        setZoom,
        setPan,
        onZoomChange
    ]);
    const handlePinchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePinchToZoom.useCallback[handlePinchEnd]": (e)=>{
            if (!zoomState.current.isZooming) return;
            zoomState.current.isZooming = false;
        }
    }["usePinchToZoom.useCallback[handlePinchEnd]"], []);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePinchToZoom.useCallback[handleTouchStart]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchStart(e.touches);
            if (e.touches.length === 2) {
                handlePinchStart(e);
            }
        }
    }["usePinchToZoom.useCallback[handleTouchStart]"], [
        handlePinchStart
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePinchToZoom.useCallback[handleTouchMove]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchMove(e.touches);
        }
    }["usePinchToZoom.useCallback[handleTouchMove]"], []);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "usePinchToZoom.useCallback[handleTouchEnd]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchEnd(e.touches);
            if (e.touches.length === 0) {
                handlePinchEnd(e);
            }
        }
    }["usePinchToZoom.useCallback[handleTouchEnd]"], [
        handlePinchEnd
    ]);
    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        isZooming: zoomState.current.isZooming
    };
}
_s3(usePinchToZoom, "q5OFdev9SlnNWwj/4sl9ZB56whg=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCanvasStore"]
    ];
});
function useTouchGestures(stage, onGesture, config) {
    _s4();
    const gestureRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Initialize gesture handler
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTouchGestures.useEffect": ()=>{
            if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])()) return;
            gestureRef.current = new __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TouchGesture"](config);
            const gesture = gestureRef.current;
            // Register all gesture callbacks
            const gestureTypes = [
                'tap',
                'double-tap',
                'long-press',
                'drag',
                'pinch',
                'rotate',
                'swipe'
            ];
            gestureTypes.forEach({
                "useTouchGestures.useEffect": (type)=>{
                    gesture.on(type, {
                        "useTouchGestures.useEffect": (event)=>{
                            onGesture?.(event);
                        }
                    }["useTouchGestures.useEffect"]);
                }
            }["useTouchGestures.useEffect"]);
            return ({
                "useTouchGestures.useEffect": ()=>{
                    if (gestureRef.current) {
                        gestureRef.current.reset();
                    }
                }
            })["useTouchGestures.useEffect"];
        }
    }["useTouchGestures.useEffect"], [
        config,
        onGesture
    ]);
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchGestures.useCallback[handleTouchStart]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchStart(e.touches);
        }
    }["useTouchGestures.useCallback[handleTouchStart]"], []);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchGestures.useCallback[handleTouchMove]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchMove(e.touches);
        }
    }["useTouchGestures.useCallback[handleTouchMove]"], []);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchGestures.useCallback[handleTouchEnd]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchEnd(e.touches);
        }
    }["useTouchGestures.useCallback[handleTouchEnd]"], []);
    const handleTouchCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "useTouchGestures.useCallback[handleTouchCancel]": (e)=>{
            if (!gestureRef.current) return;
            gestureRef.current.handleTouchCancel();
        }
    }["useTouchGestures.useCallback[handleTouchCancel]"], []);
    return {
        onTouchStart: handleTouchStart,
        onTouchMove: handleTouchMove,
        onTouchEnd: handleTouchEnd,
        onTouchCancel: handleTouchCancel,
        isGestureActive: gestureRef.current?.isGestureActive() ?? false,
        currentGestureType: gestureRef.current?.getCurrentGestureType() ?? 'none'
    };
}
_s4(useTouchGestures, "i7QG1nF+xrK06BnTnVml+PQ4buw=");
function useTouchDevice() {
    _s5();
    const [isTouchSupported, setIsTouchSupported] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    const [touchSupportLevel, setTouchSupportLevel] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState('none');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "useTouchDevice.useEffect": ()=>{
            setIsTouchSupported((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isTouchDevice"])());
            setTouchSupportLevel((0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$utils$2f$touch$2d$gestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getTouchSupportLevel"])());
        }
    }["useTouchDevice.useEffect"], []);
    return {
        isTouchSupported,
        touchSupportLevel
    };
}
_s5(useTouchDevice, "4d0XStKNCnMX4bpZATxAwwSPQz0=");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/core/ElementWrapper.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ElementWrapper",
    ()=>ElementWrapper
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$hooks$2f$useTouchGestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/hooks/useTouchGestures.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
;
;
;
;
const ElementWrapper = ({ element, isSelected, onSelect, onTransform, children, enableResize = true, enableRotate = true, keepAspectRatio = false })=>{
    _s();
    const shapeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Konva.Node
    const trRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Konva.Transformer
    const stageRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null); // Konva.Stage (passed from parent)
    // Touch gesture hooks
    const touchDrag = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$hooks$2f$useTouchGestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTouchDrag"])(element, {
        "ElementWrapper.useTouchDrag[touchDrag]": ()=>{
        // Drag start - No action needed
        }
    }["ElementWrapper.useTouchDrag[touchDrag]"], {
        "ElementWrapper.useTouchDrag[touchDrag]": (transform)=>{
            onTransform(transform);
        }
    }["ElementWrapper.useTouchDrag[touchDrag]"], onTransform, {
        tapThreshold: 10,
        tapTimeout: 300
    });
    const touchResize = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$hooks$2f$useTouchGestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTouchResize"])(element, 'bottom-right', {
        "ElementWrapper.useTouchResize[touchResize]": ()=>{
        // Resize start - No action needed
        }
    }["ElementWrapper.useTouchResize[touchResize]"], {
        "ElementWrapper.useTouchResize[touchResize]": (transform)=>{
            onTransform(transform);
        }
    }["ElementWrapper.useTouchResize[touchResize]"], onTransform, keepAspectRatio, {
        tapThreshold: 10,
        tapTimeout: 300
    });
    const touchRotate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$hooks$2f$useTouchGestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTouchRotate"])(element, {
        "ElementWrapper.useTouchRotate[touchRotate]": ()=>{
        // Rotate start - No action needed
        }
    }["ElementWrapper.useTouchRotate[touchRotate]"], {
        "ElementWrapper.useTouchRotate[touchRotate]": (rotation)=>{
            onTransform({
                x: element.x,
                y: element.y,
                rotation
            });
        }
    }["ElementWrapper.useTouchRotate[touchRotate]"], onTransform, {
        tapThreshold: 10,
        tapTimeout: 300
    });
    // Attach transformer when element is selected
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElementWrapper.useEffect": ()=>{
            if (isSelected && trRef.current && shapeRef.current) {
                trRef.current.nodes([
                    shapeRef.current
                ]);
                trRef.current.getLayer()?.batchDraw();
            }
        }
    }["ElementWrapper.useEffect"], [
        isSelected
    ]);
    // Get stage reference from parent
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ElementWrapper.useEffect": ()=>{
            if (shapeRef.current) {
                const stage = shapeRef.current.getStage();
                if (stage) {
                    stageRef.current = stage;
                }
            }
        }
    }["ElementWrapper.useEffect"], []);
    const handleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElementWrapper.useCallback[handleClick]": (e)=>{
            // Konva events use cancelBubble instead of stopPropagation
            if (e.cancelBubble !== undefined) {
                e.cancelBubble = true;
            }
            // Also try target.stopPropagation() if available
            if (e.target && e.target.stopPropagation) {
                e.target.stopPropagation();
            }
            onSelect(element.id);
        }
    }["ElementWrapper.useCallback[handleClick]"], [
        element.id,
        onSelect
    ]);
    const handleDragEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElementWrapper.useCallback[handleDragEnd]": (e)=>{
            const node = e.target;
            const transform = {
                x: node.x(),
                y: node.y()
            };
            console.log('[ElementWrapper] Drag end for', element.name);
            console.log('[ElementWrapper] New position:', transform.x, transform.y);
            // DISABLED: Constrain to slide bounds - was forcing elements to center
            // The constraint bounds were too restrictive, forcing elements back to
            // the center (540, 675) when dragged outside certain bounds
            // const constrainedTransform = constrainToBounds(transform, node.width(), node.height());
            // node.x(constrainedTransform.x);
            // node.y(constrainedTransform.y);
            console.log('[ElementWrapper] Calling onTransform:', transform);
            onTransform(transform);
        }
    }["ElementWrapper.useCallback[handleDragEnd]"], [
        element.name,
        onTransform
    ]);
    const handleTransformEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElementWrapper.useCallback[handleTransformEnd]": (e)=>{
            const node = e.target;
            // Get current transform
            const scaleX = node.scaleX();
            const scaleY = node.scaleY();
            // Reset scale (we store width/height instead)
            node.scaleX(1);
            node.scaleY(1);
            // Calculate new dimensions
            const newWidth = Math.max(10, node.width() * scaleX);
            const newHeight = Math.max(10, node.height() * scaleY);
            const transform = {
                x: node.x(),
                y: node.y(),
                width: newWidth,
                height: newHeight,
                rotation: node.rotation()
            };
            // DISABLED: Constrain to slide bounds - was forcing elements to center
            // const constrainedTransform = constrainToBounds(transform, newWidth, newHeight);
            onTransform(transform);
        }
    }["ElementWrapper.useCallback[handleTransformEnd]"], [
        onTransform
    ]);
    const constrainToBounds = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElementWrapper.useCallback[constrainToBounds]": (transform, width, height)=>{
            const halfWidth = width / 2;
            const halfHeight = height / 2;
            return {
                ...transform,
                x: Math.max(halfWidth, Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] - halfWidth, transform.x)),
                y: Math.max(halfHeight, Math.min(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"] - halfHeight, transform.y))
            };
        }
    }["ElementWrapper.useCallback[constrainToBounds]"], []);
    // Touch event handlers
    const handleTouchStart = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElementWrapper.useCallback[handleTouchStart]": (e)=>{
            // Konva events use cancelBubble instead of stopPropagation
            if (e.cancelBubble !== undefined) {
                e.cancelBubble = true;
            }
            if (!stageRef.current) {
                console.warn('Stage reference not available');
                return;
            }
            if (e.touches.length === 1) {
                // Single touch - drag or select
                if (isSelected) {
                    touchDrag.onTouchStart(e, stageRef.current);
                } else {
                    onSelect(element.id);
                }
            } else if (e.touches.length === 2) {
                // Two touch - rotate
                if (isSelected && enableRotate) {
                    touchRotate.onTouchStart(e, stageRef.current);
                }
            }
        }
    }["ElementWrapper.useCallback[handleTouchStart]"], [
        isSelected,
        enableRotate,
        element.id,
        onSelect,
        touchDrag,
        touchRotate
    ]);
    const handleTouchMove = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElementWrapper.useCallback[handleTouchMove]": (e)=>{
            // Konva events use cancelBubble instead of stopPropagation
            if (e.cancelBubble !== undefined) {
                e.cancelBubble = true;
            }
            if (e.touches.length === 1) {
                touchDrag.onTouchMove(e);
            } else if (e.touches.length === 2) {
                touchRotate.onTouchMove(e);
            }
        }
    }["ElementWrapper.useCallback[handleTouchMove]"], [
        touchDrag,
        touchRotate
    ]);
    const handleTouchEnd = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ElementWrapper.useCallback[handleTouchEnd]": (e)=>{
            // Konva events use cancelBubble instead of stopPropagation
            if (e.cancelBubble !== undefined) {
                e.cancelBubble = true;
            }
            if (e.touches.length === 0) {
                touchDrag.onTouchEnd(e, stageRef.current);
                touchRotate.onTouchEnd(e);
            }
        }
    }["ElementWrapper.useCallback[handleTouchEnd]"], [
        touchDrag,
        touchRotate
    ]);
    // Configure transformer anchors
    const enabledAnchors = enableResize ? [
        'top-left',
        'top-center',
        'top-right',
        'middle-left',
        'middle-right',
        'bottom-left',
        'bottom-center',
        'bottom-right'
    ] : [];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                ref: shapeRef,
                id: element.id,
                x: element.x,
                y: element.y,
                width: element.width,
                height: element.height,
                rotation: element.rotation,
                scaleX: element.scaleX,
                scaleY: element.scaleY,
                opacity: element.opacity,
                visible: element.visible,
                draggable: isSelected && !element.locked,
                onClick: handleClick,
                onTap: handleClick,
                onDragEnd: handleDragEnd,
                onTransformEnd: handleTransformEnd,
                // Touch events
                onTouchStart: handleTouchStart,
                onTouchMove: handleTouchMove,
                onTouchEnd: handleTouchEnd,
                children: children
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/core/ElementWrapper.tsx",
                lineNumber: 260,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            isSelected && !element.locked && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Transformer"], {
                ref: trRef,
                enabledAnchors: enabledAnchors,
                rotateEnabled: enableRotate,
                keepRatio: keepAspectRatio,
                boundBoxFunc: (oldBox, newBox)=>{
                    // Prevent element from becoming too small
                    if (newBox.width < 10 || newBox.height < 10) {
                        return oldBox;
                    }
                    return newBox;
                },
                // Styling
                anchorSize: 10,
                anchorStroke: "#00E5FF",
                anchorFill: "#00E5FF",
                anchorCornerRadius: 2,
                borderStroke: "#00E5FF",
                borderStrokeWidth: 2,
                borderDash: [
                    4,
                    4
                ]
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/core/ElementWrapper.tsx",
                lineNumber: 286,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true);
};
_s(ElementWrapper, "/49UzgJMcSKjgwnsg/+lEJDkyGs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$hooks$2f$useTouchGestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTouchDrag"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$hooks$2f$useTouchGestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTouchResize"],
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$hooks$2f$useTouchGestures$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTouchRotate"]
    ];
});
_c = ElementWrapper;
var _c;
__turbopack_context__.k.register(_c, "ElementWrapper");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BaseElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BaseElement",
    ()=>BaseElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$core$2f$ElementWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/core/ElementWrapper.tsx [app-client] (ecmascript)");
;
;
const BaseElement = ({ element, isSelected, onSelect, onTransform, children, enableResize = true, enableRotate = true, keepAspectRatio = false })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$core$2f$ElementWrapper$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ElementWrapper"], {
        element: element,
        isSelected: isSelected,
        onSelect: onSelect,
        onTransform: onTransform,
        enableResize: enableResize,
        enableRotate: enableRotate,
        keepAspectRatio: keepAspectRatio,
        children: children
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BaseElement.tsx",
        lineNumber: 31,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BaseElement;
var _c;
__turbopack_context__.k.register(_c, "BaseElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/StyledTextRenderer.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "StyledTextRenderer",
    ()=>StyledTextRenderer,
    "parseInlineStyles",
    ()=>parseInlineStyles
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function parseInlineStyles(text) {
    const segments = [];
    // Remove all styling markers and extract segments
    let remaining = text;
    let currentSegment = {
        text: ''
    };
    while(remaining.length > 0){
        // Check for bold **text**
        if (remaining.startsWith('**')) {
            const end = remaining.indexOf('**', 2);
            if (end !== -1) {
                if (currentSegment.text) {
                    segments.push(currentSegment);
                    currentSegment = {
                        text: ''
                    };
                }
                segments.push({
                    text: remaining.substring(2, end),
                    bold: true
                });
                remaining = remaining.substring(end + 2);
                continue;
            }
        }
        // Check for italic *text*
        if (remaining.startsWith('*') && !remaining.startsWith('**')) {
            const end = remaining.indexOf('*', 1);
            if (end !== -1) {
                if (currentSegment.text) {
                    segments.push(currentSegment);
                    currentSegment = {
                        text: ''
                    };
                }
                segments.push({
                    text: remaining.substring(1, end),
                    italic: true
                });
                remaining = remaining.substring(end + 1);
                continue;
            }
        }
        // Check for code `text`
        if (remaining.startsWith('`')) {
            const end = remaining.indexOf('`', 1);
            if (end !== -1) {
                if (currentSegment.text) {
                    segments.push(currentSegment);
                    currentSegment = {
                        text: ''
                    };
                }
                segments.push({
                    text: remaining.substring(1, end),
                    code: true
                });
                remaining = remaining.substring(end + 1);
                continue;
            }
        }
        // Check for strikethrough ~~text~~
        if (remaining.startsWith('~~')) {
            const end = remaining.indexOf('~~', 2);
            if (end !== -1) {
                if (currentSegment.text) {
                    segments.push(currentSegment);
                    currentSegment = {
                        text: ''
                    };
                }
                segments.push({
                    text: remaining.substring(2, end),
                    strikethrough: true
                });
                remaining = remaining.substring(end + 2);
                continue;
            }
        }
        // Check for color [color:text]
        if (remaining.startsWith('[') && remaining.includes(':')) {
            const end = remaining.indexOf(']', 1);
            if (end !== -1) {
                const content = remaining.substring(1, end);
                const colonIndex = content.indexOf(':');
                if (colonIndex !== -1) {
                    const type = content.substring(0, colonIndex);
                    const value = content.substring(colonIndex + 1);
                    if (type === 'color') {
                        if (currentSegment.text) {
                            segments.push(currentSegment);
                            currentSegment = {
                                text: ''
                            };
                        }
                        segments.push({
                            text: value,
                            color: value
                        });
                        remaining = remaining.substring(end + 1);
                        continue;
                    }
                    if (type === 'font') {
                        if (currentSegment.text) {
                            segments.push(currentSegment);
                            currentSegment = {
                                text: ''
                            };
                        }
                        segments.push({
                            text: remaining.substring(end + 1, remaining.indexOf(']', end + 1) + 1),
                            font: value
                        });
                        remaining = remaining.substring(remaining.indexOf(']', end + 1) + 1);
                        continue;
                    }
                }
            }
        }
        // Add character to current segment
        currentSegment.text += remaining[0];
        remaining = remaining.substring(1);
    }
    // Add last segment if it has text
    if (currentSegment.text) {
        segments.push(currentSegment);
    }
    return segments;
}
const StyledTextRenderer = ({ text, baseData, x, y, width, height, opacity })=>{
    _s();
    const segments = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "StyledTextRenderer.useMemo[segments]": ()=>parseInlineStyles(text)
    }["StyledTextRenderer.useMemo[segments]"], [
        text
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: segments.map((segment, index)=>{
            // Calculate font weight
            let fontWeight = baseData.fontWeight;
            if (segment.bold) {
                fontWeight = '700';
            }
            // Calculate font style
            let fontStyle = baseData.fontStyle || 'normal';
            if (segment.italic) {
                fontStyle = 'italic';
            }
            // Calculate font family
            let fontFamily = baseData.fontFamily;
            if (segment.font) {
                fontFamily = segment.font;
            }
            // Calculate color
            let fill = baseData.color;
            if (segment.color) {
                fill = segment.color;
            }
            // Calculate text decoration
            let textDecoration = baseData.textDecoration || 'none';
            if (segment.strikethrough) {
                textDecoration = 'line-through';
            }
            // For code, use monospace font
            if (segment.code) {
                fontFamily = 'Courier New, monospace';
            }
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                text: segment.text,
                x: x,
                y: y,
                width: width,
                height: height,
                fontSize: baseData.fontSize,
                fontFamily: fontFamily,
                fontStyle: fontStyle,
                fontWeight: fontWeight,
                fill: fill,
                align: baseData.alignment,
                lineHeight: baseData.lineHeight,
                letterSpacing: baseData.letterSpacing || 0,
                textDecoration: textDecoration,
                opacity: opacity,
                perfectDrawEnabled: false
            }, index, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/StyledTextRenderer.tsx",
                lineNumber: 225,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0));
        })
    }, void 0, false);
};
_s(StyledTextRenderer, "EvbWsum4eCE3Qen/DIDQlqqeiME=");
_c = StyledTextRenderer;
var _c;
__turbopack_context__.k.register(_c, "StyledTextRenderer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/TextElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TextElement",
    ()=>TextElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BaseElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$StyledTextRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/StyledTextRenderer.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const TextElement = ({ element, isSelected, onSelect, onTransform, onElementUpdate, enableResize = true, enableRotate = true, keepAspectRatio = false })=>{
    _s();
    // ❌ REMOVE: updateElement from canvas store
    // const { updateElement } = useCanvasStore();
    const textRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const textData = element.data;
    // Text editing state
    const [isEditing, setIsEditing] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [editText, setEditText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(textData.content);
    const [textareaPosition, setTextareaPosition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        x: 0,
        y: 0
    });
    /**
   * Handle double-click to enable text editing
   */ const handleDoubleClick = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextElement.useCallback[handleDoubleClick]": (e)=>{
            e.stopPropagation();
            setIsEditing(true);
            setEditText(textData.content);
            // Calculate textarea position
            const textNode = e.target;
            const stage = textNode.getStage();
            const transform = textNode.getAbsoluteTransform().copy();
            transform.invert();
            const pos = stage?.getPointerPosition();
            if (pos) {
                const absolutePosition = textNode.getAbsolutePosition();
                const scale = textNode.getAbsoluteScale();
                setTextareaPosition({
                    x: absolutePosition.x,
                    y: absolutePosition.y
                });
            }
        }
    }["TextElement.useCallback[handleDoubleClick]"], [
        textData.content
    ]);
    /**
 * Handle text editing completion
 */ const handleTextEditComplete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextElement.useCallback[handleTextEditComplete]": ()=>{
            setIsEditing(false);
            if (editText !== textData.content) {
                // ✅ ADD: Use onElementUpdate callback instead of updateElement
                onElementUpdate?.(element.id, {
                    data: {
                        ...textData,
                        content: editText
                    }
                });
            }
        }
    }["TextElement.useCallback[handleTextEditComplete]"], [
        editText,
        textData,
        element.id,
        onElementUpdate
    ]);
    /**
   * Handle text editing cancel
   */ const handleTextEditCancel = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextElement.useCallback[handleTextEditCancel]": ()=>{
            setIsEditing(false);
            setEditText(textData.content);
        }
    }["TextElement.useCallback[handleTextEditCancel]"], [
        textData.content
    ]);
    /**
   * Handle keyboard events during text editing
   */ const handleTextEditKeyDown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextElement.useCallback[handleTextEditKeyDown]": (e)=>{
            if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleTextEditComplete();
            } else if (e.key === 'Escape') {
                handleTextEditCancel();
            }
        }
    }["TextElement.useCallback[handleTextEditKeyDown]"], [
        handleTextEditComplete,
        handleTextEditCancel
    ]);
    /**
   * Process inline styling markers
   * Converts markdown-like syntax to styled text segments
   * Note: Konva Text doesn't support rich text natively,
   * so this is a placeholder for future implementation
   * using HTMLText or multiple Text nodes
   */ const processInlineStyles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextElement.useCallback[processInlineStyles]": (text)=>{
            // For now, just return the text as-is
            // Future implementation will parse markdown and create styled segments
            return text;
        }
    }["TextElement.useCallback[processInlineStyles]"], []);
    /**
   * Calculate text alignment for Konva
   */ const getKonvaAlignment = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextElement.useCallback[getKonvaAlignment]": (alignment)=>{
            return alignment;
        }
    }["TextElement.useCallback[getKonvaAlignment]"], []);
    /**
   * Calculate font style string
   */ const getFontStyle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextElement.useCallback[getFontStyle]": (data)=>{
            let fontStyle = data.fontStyle || 'normal';
            if (data.textDecoration === 'underline') {
                fontStyle += ' underline';
            } else if (data.textDecoration === 'line-through') {
                fontStyle += ' line-through';
            }
            return fontStyle;
        }
    }["TextElement.useCallback[getFontStyle]"], []);
    /**
   * Calculate font weight
   */ const getFontWeight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "TextElement.useCallback[getFontWeight]": (weight)=>{
            if (typeof weight === 'number') {
                return weight;
            }
            const weightMap = {
                '100': 100,
                '200': 200,
                '300': 300,
                '400': 400,
                '500': 500,
                '600': 600,
                '700': 700,
                '800': 800,
                '900': 900,
                'normal': 400,
                'bold': 700,
                'lighter': 300,
                'bolder': 800
            };
            return weightMap[weight] || 400;
        }
    }["TextElement.useCallback[getFontWeight]"], []);
    /**
   * Render text editing overlay
   */ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TextElement.useEffect": ()=>{
            if (isEditing && textRef.current) {
                const textarea = document.createElement('textarea');
                textarea.value = editText;
                // Style the textarea to match the text element
                const stage = textRef.current.getStage();
                if (!stage) return;
                const textNode = textRef.current;
                const textPosition = textNode.getAbsolutePosition();
                const stageBox = stage.container().getBoundingClientRect();
                textarea.style.position = 'absolute';
                textarea.style.top = `${textPosition.y + stageBox.top}px`;
                textarea.style.left = `${textPosition.x + stageBox.left}px`;
                textarea.style.width = `${element.width}px`;
                textarea.style.height = `${element.height}px`;
                textarea.style.fontSize = `${textData.fontSize}px`;
                textarea.style.fontFamily = textData.fontFamily;
                textarea.style.fontWeight = typeof textData.fontWeight === 'number' ? textData.fontWeight.toString() : textData.fontWeight;
                textarea.style.fontStyle = textData.fontStyle || 'normal';
                textarea.style.color = textData.color;
                textarea.style.textAlign = textData.alignment;
                textarea.style.lineHeight = textData.lineHeight.toString();
                textarea.style.padding = '0';
                textarea.style.margin = '0';
                textarea.style.border = '2px solid #00E5FF';
                textarea.style.outline = 'none';
                textarea.style.resize = 'none';
                textarea.style.overflow = 'hidden';
                textarea.style.background = 'rgba(0, 0, 0, 0.8)';
                textarea.style.zIndex = '9999';
                textarea.style.borderRadius = '4px';
                document.body.appendChild(textarea);
                textarea.focus();
                textarea.select();
                const handleBlur = {
                    "TextElement.useEffect.handleBlur": ()=>{
                        handleTextEditComplete();
                        document.body.removeChild(textarea);
                    }
                }["TextElement.useEffect.handleBlur"];
                const handleKeyDown = {
                    "TextElement.useEffect.handleKeyDown": (e)=>{
                        if (e.key === 'Enter' && !e.shiftKey) {
                            e.preventDefault();
                            handleBlur();
                        } else if (e.key === 'Escape') {
                            handleTextEditCancel();
                            document.body.removeChild(textarea);
                        }
                    }
                }["TextElement.useEffect.handleKeyDown"];
                textarea.addEventListener('blur', handleBlur);
                textarea.addEventListener('keydown', handleKeyDown);
                return ({
                    "TextElement.useEffect": ()=>{
                        if (document.body.contains(textarea)) {
                            textarea.removeEventListener('blur', handleBlur);
                            textarea.removeEventListener('keydown', handleKeyDown);
                            document.body.removeChild(textarea);
                        }
                    }
                })["TextElement.useEffect"];
            }
        }
    }["TextElement.useEffect"], [
        isEditing,
        editText,
        element.width,
        element.height,
        textData,
        handleTextEditComplete,
        handleTextEditCancel
    ]);
    // Check if inline styling is enabled
    const hasInlineStyles = textData.inlineStyles && (textData.inlineStyles.bold || textData.inlineStyles.italic || textData.inlineStyles.code || textData.inlineStyles.strikethrough);
    // Also check if text contains markdown-like syntax
    const hasMarkdownSyntax = /(\*\*.*?\*\*|\*.*?\*|`.*?`|~~.*?~~)/.test(textData.content);
    const shouldUseStyledRenderer = hasInlineStyles || hasMarkdownSyntax;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseElement"], {
            element: element,
            isSelected: isSelected,
            onSelect: onSelect,
            onTransform: onTransform,
            enableResize: enableResize,
            enableRotate: enableRotate,
            keepAspectRatio: keepAspectRatio,
            children: shouldUseStyledRenderer ? // Use StyledTextRenderer for rich text
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$StyledTextRenderer$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["StyledTextRenderer"], {
                text: textData.content,
                baseData: textData,
                x: 0,
                y: 0,
                width: element.width,
                height: element.height,
                opacity: element.opacity
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/TextElement.tsx",
                lineNumber: 282,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0)) : // Use simple Text for plain text
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                ref: textRef,
                text: textData.content,
                x: 0,
                y: 0,
                width: element.width,
                height: element.height,
                fontSize: textData.fontSize,
                fontFamily: textData.fontFamily,
                fontStyle: getFontStyle(textData),
                fontWeight: getFontWeight(textData.fontWeight).toString(),
                fill: textData.color,
                align: getKonvaAlignment(textData.alignment),
                lineHeight: textData.lineHeight,
                letterSpacing: textData.letterSpacing || 0,
                textDecoration: textData.textDecoration || 'none',
                opacity: element.opacity,
                perfectDrawEnabled: false,
                listening: true,
                onDblClick: handleDoubleClick,
                onDblTap: handleDoubleClick
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/TextElement.tsx",
                lineNumber: 293,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/TextElement.tsx",
            lineNumber: 271,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false);
};
_s(TextElement, "HMX1sFkKH7U+tgk3yKW/08N/iLo=");
_c = TextElement;
var _c;
__turbopack_context__.k.register(_c, "TextElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ImageElement",
    ()=>ImageElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$use$2d$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/use-image/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BaseElement.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ImageElement = ({ element, isSelected, onSelect, onTransform, enableResize = true, enableRotate = true, keepAspectRatio = false })=>{
    _s();
    const imageData = element.data;
    // Load image with use-image hook
    const [image, imageStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$use$2d$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(imageData.url, 'anonymous');
    // Calculate image dimensions based on object-fit
    const imageDimensions = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ImageElement.useMemo[imageDimensions]": ()=>{
            if (!image) {
                return {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
                };
            }
            const imgWidth = image.width;
            const imgHeight = image.height;
            const containerWidth = element.width;
            const containerHeight = element.height;
            let width = imgWidth;
            let height = imgHeight;
            let x = 0;
            let y = 0;
            switch(imageData.objectFit){
                case 'cover':
                    // Scale image to cover the entire container
                    const coverRatio = Math.max(containerWidth / imgWidth, containerHeight / imgHeight);
                    width = imgWidth * coverRatio;
                    height = imgHeight * coverRatio;
                    x = (containerWidth - width) / 2;
                    y = (containerHeight - height) / 2;
                    break;
                case 'contain':
                    // Scale image to fit within the container
                    const containRatio = Math.min(containerWidth / imgWidth, containerHeight / imgHeight);
                    width = imgWidth * containRatio;
                    height = imgHeight * containRatio;
                    x = (containerWidth - width) / 2;
                    y = (containerHeight - height) / 2;
                    break;
                case 'fill':
                    // Stretch image to fill the container
                    width = containerWidth;
                    height = containerHeight;
                    x = 0;
                    y = 0;
                    break;
                case 'scale-down':
                    // Scale image down if it's larger than container, otherwise use none
                    const scaleDownRatio = Math.min(containerWidth / imgWidth, containerHeight / imgHeight);
                    if (scaleDownRatio < 1) {
                        width = imgWidth * scaleDownRatio;
                        height = imgHeight * scaleDownRatio;
                        x = (containerWidth - width) / 2;
                        y = (containerHeight - height) / 2;
                    } else {
                        width = imgWidth;
                        height = imgHeight;
                        x = (containerWidth - width) / 2;
                        y = (containerHeight - height) / 2;
                    }
                    break;
                case 'none':
                default:
                    // Use original image size, centered
                    width = imgWidth;
                    height = imgHeight;
                    x = (containerWidth - width) / 2;
                    y = (containerHeight - height) / 2;
                    break;
            }
            return {
                width,
                height,
                x,
                y
            };
        }
    }["ImageElement.useMemo[imageDimensions]"], [
        image,
        element.width,
        element.height,
        imageData.objectFit
    ]);
    // Build filter array from image data
    const filters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ImageElement.useMemo[filters]": ()=>{
            const filterArray = [];
            if (imageData.filters.blur && imageData.filters.blur > 0) {
                filterArray.push({
                    name: 'Blur',
                    value: imageData.filters.blur
                });
            }
            if (imageData.filters.grayscale && imageData.filters.grayscale > 0) {
                filterArray.push({
                    name: 'Grayscale',
                    value: imageData.filters.grayscale
                });
            }
            if (imageData.filters.sepia && imageData.filters.sepia > 0) {
                filterArray.push({
                    name: 'Sepia',
                    value: imageData.filters.sepia
                });
            }
            if (imageData.filters.saturate && imageData.filters.saturate !== 100) {
                filterArray.push({
                    name: 'Saturate',
                    value: imageData.filters.saturate
                });
            }
            if (imageData.filters.brightness && imageData.filters.brightness !== 0) {
                filterArray.push({
                    name: 'Brightness',
                    value: imageData.filters.brightness
                });
            }
            if (imageData.filters.contrast && imageData.filters.contrast !== 0) {
                filterArray.push({
                    name: 'Contrast',
                    value: imageData.filters.contrast
                });
            }
            if (imageData.filters.hueRotate && imageData.filters.hueRotate !== 0) {
                filterArray.push({
                    name: 'HueRotate',
                    value: imageData.filters.hueRotate
                });
            }
            if (imageData.filters.invert && imageData.filters.invert > 0) {
                filterArray.push({
                    name: 'Invert',
                    value: imageData.filters.invert
                });
            }
            return filterArray;
        }
    }["ImageElement.useMemo[filters]"], [
        imageData.filters
    ]);
    // Clip function for border radius
    const clipFunc = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "ImageElement.useCallback[clipFunc]": (ctx)=>{
            if (imageData.borderRadius && imageData.borderRadius > 0) {
                const { width, height } = element;
                const radius = Math.min(imageData.borderRadius, Math.min(width, height) / 2);
                ctx.beginPath();
                ctx.moveTo(radius, 0);
                ctx.lineTo(width - radius, 0);
                ctx.quadraticCurveTo(width, 0, width, radius);
                ctx.lineTo(width, height - radius);
                ctx.quadraticCurveTo(width, height, width - radius, height);
                ctx.lineTo(radius, height);
                ctx.quadraticCurveTo(0, height, 0, height - radius);
                ctx.lineTo(0, radius);
                ctx.quadraticCurveTo(0, 0, radius, 0);
                ctx.closePath();
            }
        }
    }["ImageElement.useCallback[clipFunc]"], [
        element.width,
        element.height,
        imageData.borderRadius
    ]);
    // Render loading state
    const renderLoading = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: "#1a1a2e",
                    cornerRadius: imageData.borderRadius || 0
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                    lineNumber: 207,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    x: element.width / 2,
                    y: element.height / 2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                            x: -20,
                            y: -20,
                            width: 40,
                            height: 40,
                            stroke: "#00E5FF",
                            strokeWidth: 3,
                            cornerRadius: 20,
                            opacity: 0.5
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                            lineNumber: 219,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                            x: -20,
                            y: -20,
                            width: 40,
                            height: 40,
                            stroke: "#00E5FF",
                            strokeWidth: 3,
                            cornerRadius: 20,
                            rotation: 45,
                            opacity: 0.7
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                            lineNumber: 229,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                    lineNumber: 217,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: element.height / 2 + 30,
                    width: element.width,
                    height: 24,
                    fill: "transparent"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                    lineNumber: 243,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
            lineNumber: 205,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    // Render error state
    const renderError = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: "#1a1a2e",
                    cornerRadius: imageData.borderRadius || 0
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                    lineNumber: 257,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    x: element.width / 2,
                    y: element.height / 2,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                            x: -15,
                            y: -2,
                            width: 30,
                            height: 4,
                            fill: "#ff4444",
                            rotation: 45
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                            lineNumber: 269,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                            x: -15,
                            y: -2,
                            width: 30,
                            height: 4,
                            fill: "#ff4444",
                            rotation: -45
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                            lineNumber: 277,
                            columnNumber: 9
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                    lineNumber: 267,
                    columnNumber: 7
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
            lineNumber: 255,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    // Render border
    const renderBorder = ()=>{
        if (!imageData.borderWidth || imageData.borderWidth <= 0) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            stroke: imageData.borderColor || '#ffffff',
            strokeWidth: imageData.borderWidth,
            cornerRadius: imageData.borderRadius || 0,
            fillEnabled: false
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
            lineNumber: 296,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render shadow
    const renderShadow = ()=>{
        if (!imageData.shadow) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            fill: "black",
            opacity: 0.3,
            cornerRadius: imageData.borderRadius || 0,
            offsetX: 5,
            offsetY: 5
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
            lineNumber: 316,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Determine which content to render
    const renderContent = ()=>{
        if (imageStatus === 'loading') {
            return renderLoading();
        }
        if (imageStatus === 'failed') {
            return renderError();
        }
        if (!image) {
            return renderError();
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Image"], {
            image: image,
            x: imageDimensions.x,
            y: imageDimensions.y,
            width: imageDimensions.width,
            height: imageDimensions.height,
            filters: filters.map((f)=>f.name),
            blur: imageData.filters.blur || 0,
            grayscale: imageData.filters.grayscale || 0,
            sepia: imageData.filters.sepia || 0,
            saturate: imageData.filters.saturate || 100,
            brightness: imageData.filters.brightness || 0,
            contrast: imageData.filters.contrast || 0,
            hueRotate: imageData.filters.hueRotate || 0,
            invert: imageData.filters.invert || 0,
            opacity: element.opacity,
            globalCompositeOperation: imageData.blendMode || 'source-over',
            clipFunc: imageData.borderRadius && imageData.borderRadius > 0 ? clipFunc : undefined,
            perfectDrawEnabled: false
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
            lineNumber: 345,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseElement"], {
        element: element,
        isSelected: isSelected,
        onSelect: onSelect,
        onTransform: onTransform,
        enableResize: enableResize,
        enableRotate: enableRotate,
        keepAspectRatio: keepAspectRatio,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                renderShadow(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    clipFunc: imageData.borderRadius && imageData.borderRadius > 0 ? clipFunc : undefined,
                    children: renderContent()
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
                    lineNumber: 383,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                renderBorder()
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
            lineNumber: 378,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx",
        lineNumber: 369,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(ImageElement, "oCuNrjHN4VI+KtVnNVnFJ51sBzE=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$use$2d$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
    ];
});
_c = ImageElement;
var _c;
__turbopack_context__.k.register(_c, "ImageElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "BackgroundElement",
    ()=>BackgroundElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BaseElement.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
const BackgroundElement = ({ element, isSelected, onSelect, onTransform, enableResize = true, enableRotate = true, keepAspectRatio = false })=>{
    _s();
    const bgData = element.data;
    // Calculate gradient stops based on angle
    const gradientStops = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useMemo({
        "BackgroundElement.useMemo[gradientStops]": ()=>{
            if (bgData.backgroundType !== 'gradient' && bgData.backgroundType !== 'glass-gradient') {
                return [];
            }
            const angle = bgData.gradientAngle || 90;
            const primary = bgData.primaryColor || '#000000';
            const secondary = bgData.secondaryColor || '#00E5FF';
            // Calculate gradient direction based on angle
            const getGradientCoords = {
                "BackgroundElement.useMemo[gradientStops].getGradientCoords": (angle)=>{
                    const rad = angle * Math.PI / 180;
                    const x1 = 50 + 50 * Math.cos(rad);
                    const y1 = 50 + 50 * Math.sin(rad);
                    const x2 = 50 - 50 * Math.cos(rad);
                    const y2 = 50 - 50 * Math.sin(rad);
                    return `${x1}% ${y1}%, ${x2}% ${y2}%`;
                }
            }["BackgroundElement.useMemo[gradientStops].getGradientCoords"];
            return [
                0,
                getGradientCoords(angle),
                primary,
                1,
                getGradientCoords(angle + 180),
                secondary
            ];
        }
    }["BackgroundElement.useMemo[gradientStops]"], [
        bgData.backgroundType,
        bgData.primaryColor,
        bgData.secondaryColor,
        bgData.gradientAngle
    ]);
    // Calculate pattern scale
    const patternScale = bgData.patternScale || 20;
    // Render solid background
    const renderSolid = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            fill: bgData.primaryColor,
            opacity: bgData.opacity,
            globalCompositeOperation: bgData.blendMode || 'source-over',
            perfectDrawEnabled: false
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 81,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    // Render gradient background
    const renderGradient = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            fillLinearGradientStartPoint: {
                x: 0,
                y: 0
            },
            fillLinearGradientEndPoint: {
                x: element.width,
                y: element.height
            },
            fillLinearGradientColorStops: gradientStops,
            opacity: bgData.opacity,
            globalCompositeOperation: bgData.blendMode || 'source-over',
            perfectDrawEnabled: false
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 95,
            columnNumber: 5
        }, ("TURBOPACK compile-time value", void 0));
    // Render pattern background - dots
    const renderDotsPattern = ()=>{
        const dotSize = patternScale / 4;
        const spacing = patternScale;
        const cols = Math.ceil(element.width / spacing);
        const rows = Math.ceil(element.height / spacing);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 119,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Array.from({
                    length: rows
                }).map((_, rowIndex)=>Array.from({
                        length: cols
                    }).map((_, colIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                            x: colIndex * spacing + spacing / 2,
                            y: rowIndex * spacing + spacing / 2,
                            radius: dotSize / 2,
                            fill: bgData.secondaryColor || '#00E5FF',
                            opacity: bgData.opacity * 0.5,
                            globalCompositeOperation: bgData.blendMode || 'source-over'
                        }, `${rowIndex}-${colIndex}`, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                            lineNumber: 131,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 117,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render pattern background - stripes
    const renderStripesPattern = ()=>{
        const stripeWidth = patternScale / 2;
        const spacing = patternScale;
        const stripes = Math.ceil(element.height / spacing);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 155,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Array.from({
                    length: stripes
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                        x: 0,
                        y: index * spacing,
                        width: element.width,
                        height: stripeWidth,
                        fill: bgData.secondaryColor || '#00E5FF',
                        opacity: bgData.opacity * 0.3,
                        globalCompositeOperation: bgData.blendMode || 'source-over',
                        perfectDrawEnabled: false
                    }, index, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 166,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 153,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render pattern background - grid
    const renderGridPattern = ()=>{
        const lineWidth = patternScale / 10;
        const spacing = patternScale;
        const cols = Math.ceil(element.width / spacing);
        const rows = Math.ceil(element.height / spacing);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 192,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Array.from({
                    length: cols
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        x: index * spacing,
                        y: 0,
                        width: lineWidth,
                        height: element.height,
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: lineWidth,
                        opacity: bgData.opacity * 0.5,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, `v-${index}`, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 203,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                Array.from({
                    length: rows
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        x: 0,
                        y: index * spacing,
                        width: element.width,
                        height: lineWidth,
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: lineWidth,
                        opacity: bgData.opacity * 0.5,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, `h-${index}`, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 217,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 190,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render geometric background - circles
    const renderCircles = ()=>{
        const circles = [];
        const cols = 5;
        const rows = 6;
        const spacingX = element.width / cols;
        const spacingY = element.height / rows;
        const maxRadius = spacingY * 0.4;
        for(let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){
                circles.push({
                    cx: col * spacingX + spacingX / 2,
                    cy: row * spacingY + spacingY / 2,
                    radius: Math.random() * maxRadius
                });
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 255,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                circles.map((circle, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                        cx: circle.cx,
                        cy: circle.cy,
                        radius: circle.radius,
                        fill: bgData.secondaryColor || '#00E5FF',
                        opacity: bgData.opacity * 0.3,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, index, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 266,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 253,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render geometric background - squares
    const renderSquares = ()=>{
        const squares = [];
        const cols = 5;
        const rows = 6;
        const spacingX = element.width / cols;
        const spacingY = element.height / rows;
        const maxSize = spacingY * 0.35;
        for(let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){
                squares.push({
                    x: col * spacingX + spacingX / 2,
                    y: row * spacingY + spacingY / 2,
                    size: Math.random() * maxSize,
                    rotation: Math.random() * 360
                });
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 303,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                squares.map((square, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                        x: square.x,
                        y: square.y,
                        width: square.size,
                        height: square.size,
                        rotation: square.rotation,
                        offsetX: square.size / 2,
                        offsetY: square.size / 2,
                        fill: bgData.secondaryColor || '#00E5FF',
                        opacity: bgData.opacity * 0.3,
                        globalCompositeOperation: bgData.blendMode || 'source-over',
                        perfectDrawEnabled: false
                    }, index, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 314,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 301,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render geometric background - triangles
    const renderTriangles = ()=>{
        const triangles = [];
        const cols = 4;
        const rows = 5;
        const spacingX = element.width / cols;
        const spacingY = element.height / rows;
        const maxSize = spacingY * 0.4;
        for(let row = 0; row < rows; row++){
            for(let col = 0; col < cols; col++){
                const centerX = col * spacingX + spacingX / 2;
                const centerY = row * spacingY + spacingY / 2;
                const size = Math.random() * maxSize;
                // Create triangle points (equilateral)
                const height = size * Math.sqrt(3) / 2;
                const halfWidth = size / 2;
                triangles.push({
                    points: [
                        centerX,
                        centerY - height / 2,
                        centerX - halfWidth,
                        centerY + height / 2,
                        centerX + halfWidth,
                        centerY + height / 2
                    ]
                });
            }
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 365,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                triangles.map((triangle, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        points: triangle.points,
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: 2,
                        closed: true,
                        lineJoin: "round",
                        opacity: bgData.opacity * 0.3,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, index, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 376,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 363,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render glass-gradient background
    const renderGlassGradient = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fillLinearGradientStartPoint: {
                        x: element.width * 0.3,
                        y: element.height * 0.3
                    },
                    fillLinearGradientEndPoint: {
                        x: element.width * 0.7,
                        y: element.height * 0.7
                    },
                    fillLinearGradientColorStops: [
                        0,
                        bgData.primaryColor,
                        0.5,
                        bgData.secondaryColor || '#00E5FF',
                        1,
                        bgData.primaryColor
                    ],
                    opacity: bgData.opacity * 0.6,
                    globalCompositeOperation: bgData.blendMode || 'source-over',
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 396,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height * 0.4,
                    fillLinearGradientStartPoint: {
                        x: 0,
                        y: 0
                    },
                    fillLinearGradientEndPoint: {
                        x: element.width,
                        y: element.height * 0.4
                    },
                    fillLinearGradientColorStops: [
                        0,
                        'rgba(255, 255, 255, 0.3)',
                        1,
                        'rgba(255, 255, 255, 0)'
                    ],
                    opacity: 0.5,
                    globalCompositeOperation: "overlay",
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 413,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 394,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render cyber-grid background
    const renderCyberGrid = ()=>{
        const gridSize = patternScale * 2;
        const cols = Math.ceil(element.width / gridSize);
        const rows = Math.ceil(element.height / gridSize);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity * 0.8,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 441,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Array.from({
                    length: cols
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        x: index * gridSize,
                        y: 0,
                        width: 1,
                        height: element.height,
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: 1,
                        opacity: 0.3,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, `v-${index}`, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 452,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                Array.from({
                    length: rows
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        x: 0,
                        y: index * gridSize,
                        width: element.width,
                        height: 1,
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: 1,
                        opacity: 0.3,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, `h-${index}`, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 465,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                Array.from({
                    length: cols
                }).map((_, colIndex)=>Array.from({
                        length: rows
                    }).map((_, rowIndex)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                            x: colIndex * gridSize,
                            y: rowIndex * gridSize,
                            radius: 2,
                            fill: bgData.secondaryColor || '#00E5FF',
                            opacity: 0.6,
                            globalCompositeOperation: "screen"
                        }, `node-${colIndex}-${rowIndex}`, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                            lineNumber: 480,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 439,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render gradient-mesh background
    const renderGradientMesh = ()=>{
        const meshSize = patternScale * 3;
        const cols = Math.ceil(element.width / meshSize) + 1;
        const rows = Math.ceil(element.height / meshSize) + 1;
        // Generate random gradient points
        const gradientPoints = Array.from({
            length: cols * rows
        }).map((_, index)=>{
            const col = index % cols;
            const row = Math.floor(index / cols);
            return {
                x: col * meshSize,
                y: row * meshSize,
                color: index % 2 === 0 ? bgData.primaryColor : bgData.secondaryColor || '#00E5FF'
            };
        });
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 514,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                gradientPoints.map((point, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                        x: point.x,
                        y: point.y,
                        radius: meshSize * 0.8,
                        fill: point.color,
                        opacity: 0.4,
                        blur: meshSize * 0.5,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, index, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 524,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 513,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render isometric-grid background
    const renderIsometricGrid = ()=>{
        const gridSize = patternScale * 2;
        const cols = Math.ceil(element.width / gridSize) * 2;
        const rows = Math.ceil(element.height / gridSize);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity * 0.7,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 547,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Array.from({
                    length: cols
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        points: [
                            index * gridSize * 0.5,
                            0,
                            0,
                            index * gridSize * 0.866
                        ],
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: 1,
                        opacity: 0.3,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, `iso1-${index}`, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 558,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                Array.from({
                    length: cols
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        points: [
                            element.width - index * gridSize * 0.5,
                            0,
                            element.width,
                            index * gridSize * 0.866
                        ],
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: 1,
                        opacity: 0.3,
                        globalCompositeOperation: bgData.blendMode || 'source-over'
                    }, `iso2-${index}`, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 571,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 546,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render holographic background
    const renderHolographic = ()=>{
        const bands = 20;
        const bandHeight = element.height / bands;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity * 0.5,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 594,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Array.from({
                    length: bands
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                        x: 0,
                        y: index * bandHeight,
                        width: element.width,
                        height: bandHeight,
                        fill: index % 2 === 0 ? bgData.secondaryColor : bgData.primaryColor,
                        opacity: 0.3,
                        globalCompositeOperation: "overlay",
                        perfectDrawEnabled: false
                    }, index, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 604,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))),
                Array.from({
                    length: 5
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        points: [
                            0,
                            index * element.height * 0.2,
                            element.width,
                            index * element.height * 0.2 + 50
                        ],
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: 2,
                        opacity: 0.4,
                        globalCompositeOperation: "screen"
                    }, `interference-${index}`, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 618,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 593,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render vaporwave background
    const renderVaporwave = ()=>{
        const gridLines = 15;
        const perspectiveHeight = element.height;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fillLinearGradientStartPoint: {
                        x: element.width / 2,
                        y: 0
                    },
                    fillLinearGradientEndPoint: {
                        x: element.width / 2,
                        y: element.height
                    },
                    fillLinearGradientColorStops: [
                        0,
                        '#FF6B6B',
                        0.3,
                        '#FF8E53',
                        0.6,
                        '#4ECDC4',
                        1,
                        bgData.primaryColor
                    ],
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 642,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Array.from({
                    length: gridLines
                }).map((_, index)=>{
                    const y = element.height * 0.5 + index * perspectiveHeight / gridLines;
                    const width = index / gridLines * element.width * 2;
                    const x = (element.width - width) / 2;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                        points: [
                            x,
                            y,
                            x + width,
                            y
                        ],
                        stroke: bgData.secondaryColor || '#00E5FF',
                        strokeWidth: 2,
                        opacity: 0.6 - index * 0.03,
                        globalCompositeOperation: "screen"
                    }, `vapor-${index}`, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 665,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                })
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 640,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render scanlines background
    const renderScanlines = ()=>{
        const scanlineHeight = 3;
        const scanlines = Math.ceil(element.height / scanlineHeight);
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: bgData.primaryColor,
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 689,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                Array.from({
                    length: scanlines
                }).map((_, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                        x: 0,
                        y: index * scanlineHeight,
                        width: element.width,
                        height: scanlineHeight,
                        fill: "black",
                        opacity: index % 2 === 0 ? 0.1 : 0,
                        globalCompositeOperation: "multiply",
                        perfectDrawEnabled: false
                    }, index, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 699,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 688,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render noise background (standalone, not as effect)
    const renderNoiseBackground = ()=>{
        const noiseCount = 2000;
        const noise = Array.from({
            length: noiseCount
        }).map(()=>({
                x: Math.random() * element.width,
                y: Math.random() * element.height,
                width: Math.random() * 4 + 1,
                height: Math.random() * 4 + 1,
                color: Math.random() > 0.5 ? bgData.primaryColor : bgData.secondaryColor || '#00E5FF'
            }));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: "#000000",
                    opacity: bgData.opacity,
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 730,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                noise.map((rect, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                        x: rect.x,
                        y: rect.y,
                        width: rect.width,
                        height: rect.height,
                        fill: rect.color,
                        opacity: 0.15,
                        globalCompositeOperation: "overlay"
                    }, index, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                        lineNumber: 740,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 729,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render pattern background
    const renderPattern = ()=>{
        switch(bgData.backgroundType){
            case 'dots':
                return renderDotsPattern();
            case 'stripes':
                return renderStripesPattern();
            case 'grid':
                return renderGridPattern();
            default:
                return renderDotsPattern(); // Default to dots
        }
    };
    // Render geometric background
    const renderGeometric = ()=>{
        switch(bgData.backgroundType){
            case 'circles':
                return renderCircles();
            case 'squares':
                return renderSquares();
            case 'triangles':
                return renderTriangles();
            default:
                return renderCircles(); // Default to circles
        }
    };
    // Render shadow effect
    const renderShadow = ()=>{
        if (!bgData.effects?.shadow) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            fill: "black",
            opacity: 0.3,
            offsetX: 5,
            offsetY: 5,
            blur: 10
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 790,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render glow effect
    const renderGlow = ()=>{
        if (!bgData.effects?.glow) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            fill: bgData.primaryColor,
            opacity: 0.5,
            blur: 20,
            globalCompositeOperation: "screen"
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 811,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render blur effect
    const renderBlur = ()=>{
        if (!bgData.effects?.blur) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
            x: 0,
            y: 0,
            width: element.width,
            height: element.height,
            fill: bgData.primaryColor,
            opacity: bgData.opacity,
            blur: 5
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 831,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Render noise effect
    const renderNoise = ()=>{
        if (!bgData.effects?.noise) {
            return null;
        }
        // Create noise using multiple small random rectangles
        const noiseCount = 1000;
        const noise = Array.from({
            length: noiseCount
        }).map(()=>({
                x: Math.random() * element.width,
                y: Math.random() * element.height,
                width: Math.random() * 3 + 1,
                height: Math.random() * 3 + 1
            }));
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: noise.map((rect, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: rect.x,
                    y: rect.y,
                    width: rect.width,
                    height: rect.height,
                    fill: "white",
                    opacity: 0.05,
                    globalCompositeOperation: "overlay"
                }, index, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 861,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 859,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    // Determine which background type to render
    const renderBackground = ()=>{
        switch(bgData.backgroundType){
            case 'solid':
                return renderSolid();
            case 'gradient':
                return renderGradient();
            case 'pattern':
                return renderPattern();
            case 'geometric':
                return renderGeometric();
            case 'glass-gradient':
                return renderGlassGradient();
            case 'cyber-grid':
                return renderCyberGrid();
            case 'gradient-mesh':
                return renderGradientMesh();
            case 'isometric-grid':
                return renderIsometricGrid();
            case 'holographic':
                return renderHolographic();
            case 'vaporwave':
                return renderVaporwave();
            case 'scanlines':
                return renderScanlines();
            case 'noise':
                return renderNoiseBackground();
            default:
                return renderSolid(); // Default to solid
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseElement"], {
        element: element,
        isSelected: isSelected,
        onSelect: onSelect,
        onTransform: onTransform,
        enableResize: enableResize,
        enableRotate: enableRotate,
        keepAspectRatio: keepAspectRatio,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                renderBlur(),
                renderNoise(),
                renderGlow(),
                renderShadow(),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    children: renderBackground()
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
                    lineNumber: 926,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                renderNoise()
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
            lineNumber: 918,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx",
        lineNumber: 909,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(BackgroundElement, "vdIxHmi1snw/lU12qmJSFiXrSoA=");
_c = BackgroundElement;
var _c;
__turbopack_context__.k.register(_c, "BackgroundElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DecoratorElement",
    ()=>DecoratorElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$use$2d$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/use-image/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BaseElement.tsx [app-client] (ecmascript)");
'use client';
;
;
;
;
// Default fallback config for decorators
const DEFAULT_FALLBACK_CONFIG = {
    slideNumber: {
        enabled: false,
        position: 'bottom-right',
        size: 48,
        color: '#666666'
    },
    border: {
        enabled: false,
        width: 2,
        color: '#666666',
        style: 'solid'
    },
    hashtag: {
        enabled: false,
        text: undefined,
        position: 'top-left',
        size: 32,
        color: '#00E5FF'
    },
    watermark: {
        enabled: false,
        text: undefined,
        opacity: 0.3,
        position: 'center'
    },
    logo: {
        enabled: false,
        url: undefined,
        size: 80,
        position: 'top-right'
    },
    frame: {
        enabled: false,
        style: 'minimal',
        color: '#666666'
    },
    cornerAccents: {
        enabled: false
    },
    accentLines: {
        enabled: false,
        position: 'top',
        color: '#00E5FF',
        width: 4,
        offset: 40,
        thickness: 4,
        length: 80,
        gradient: false
    },
    pillarLabel: {
        enabled: false,
        position: 'bottom-right',
        size: 32
    },
    backgroundEffects: {
        shadow: false,
        glow: false,
        blur: false,
        noise: false
    }
};
// Constants
const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1350;
const DecoratorElement = ({ element, isSelected, onSelect, onTransform, enableResize = true, enableRotate = true, keepAspectRatio = false, isEditing = false, highlightColor = '#00E5FF' })=>{
    var _s = __turbopack_context__.k.signature();
    const decoData = element.data;
    // Use fallback config if config is undefined
    const config = decoData.config || DEFAULT_FALLBACK_CONFIG;
    // Log warning if using fallback config
    if (!decoData.config) {
        console.warn('[DecoratorElement] Using fallback config for element:', element.id);
    }
    // Visual feedback when editing
    const editingGlow = isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
        x: 0,
        y: 0,
        width: element.width,
        height: element.height,
        fill: highlightColor,
        opacity: 0.1,
        listening: false
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : null;
    const editingPulse = isEditing ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
        x: 0,
        y: 0,
        width: element.width,
        height: element.height,
        stroke: highlightColor,
        strokeWidth: 4,
        strokeDash: [
            10,
            10
        ],
        opacity: 0.6,
        listening: false
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
        lineNumber: 90,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0)) : null;
    /**
   * Render slide number
   */ const renderSlideNumber = ()=>{
        if (!decoData.config || !decoData.config.slideNumber) return null;
        const config = decoData.config.slideNumber;
        if (!config.enabled) return null;
        const position = config.position;
        const size = config.size || 48;
        const color = config.color || '#666666';
        // Calculate position based on position type
        let x = 0;
        let y = 0;
        let text = '1';
        switch(position){
            case 'top-left':
                x = 60;
                y = 60;
                break;
            case 'top-right':
                x = SLIDE_WIDTH - 60 - size * 2;
                y = 60;
                break;
            case 'bottom-left':
                x = 60;
                y = SLIDE_HEIGHT - 60 - size * 2;
                break;
            case 'bottom-right':
                x = SLIDE_WIDTH - 60 - size * 2;
                y = SLIDE_HEIGHT - 60 - size * 2;
                break;
            default:
                x = SLIDE_WIDTH - 60 - size * 2;
                y = SLIDE_HEIGHT - 60 - size * 2;
        }
        // Format number - simple decimal format
        let formattedNumber = text;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                x: x,
                y: y,
                width: size * 2,
                height: size * 2,
                text: formattedNumber,
                fontSize: size,
                fontFamily: "Inter",
                fontWeight: "600",
                fontStyle: "italic",
                fill: color,
                align: "center",
                verticalAlign: "middle",
                opacity: 1
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                lineNumber: 147,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
            lineNumber: 146,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    /**
   * Render border
   */ const renderBorder = ()=>{
        if (!decoData.config || !decoData.config.border) return null;
        const config = decoData.config.border;
        if (!config.enabled) return null;
        const { style, width, color } = config;
        const borderColor = color || '#666666';
        const borderStyle = style;
        const borderWidth = width || 2;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
            x: 0,
            y: 0,
            width: SLIDE_WIDTH,
            height: SLIDE_HEIGHT,
            stroke: borderColor,
            strokeWidth: borderWidth,
            strokeDash: borderStyle === 'dashed' ? [
                8,
                8
            ] : borderStyle === 'dotted' ? [
                2,
                4
            ] : [],
            opacity: 1,
            perfectDrawEnabled: false
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
            lineNumber: 181,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    /**
   * Render corner accent
   */ const renderCornerAccent = (corner)=>{
        if (!config || !config.cornerAccents) return null;
        const cornerAccents = config.cornerAccents;
        if (!cornerAccents) return null;
        const accent = cornerAccents[corner];
        if (!accent) return null;
        const style = accent.style;
        const size = accent.size || 48;
        const color = accent.color || '#00E5FF';
        const thickness = accent.thickness || 8;
        const rotation = accent.rotation || 0;
        const offset = accent.offset || {
            x: 0,
            y: 0
        };
        const secondaryColor = accent.secondaryColor;
        const cornerPositions = {
            topLeft: {
                x: 0,
                y: 0
            },
            topRight: {
                x: SLIDE_WIDTH,
                y: 0
            },
            bottomLeft: {
                x: 0,
                y: SLIDE_HEIGHT
            },
            bottomRight: {
                x: SLIDE_WIDTH,
                y: SLIDE_HEIGHT
            }
        };
        const pos = cornerPositions[corner];
        const x = pos.x + offset.x;
        const y = pos.y + offset.y;
        switch(style){
            case 'bracket':
                // Draw bracket corner
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    x: x,
                    y: y,
                    rotation: rotation,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            x: 0,
                            y: 0,
                            width: size,
                            height: thickness,
                            stroke: color,
                            strokeWidth: thickness,
                            lineCap: "round",
                            opacity: 1
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                            lineNumber: 235,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            x: 0,
                            y: 0,
                            width: thickness,
                            height: size,
                            stroke: color,
                            strokeWidth: thickness,
                            lineCap: "round",
                            opacity: 1
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                            lineNumber: 246,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 233,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'line':
                // Simple line accent
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    x: x,
                    y: y,
                    width: size,
                    height: size,
                    stroke: color,
                    strokeWidth: thickness,
                    lineCap: "round",
                    opacity: 1
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 262,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'dot':
                // Circle dot
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                    x: x,
                    y: y,
                    radius: size / 2,
                    fill: color,
                    opacity: 1
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 277,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'triangle':
                // Triangle
                const h = size * Math.sqrt(3) / 2;
                const halfSize = size / 2;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    points: [
                        x,
                        y - h / 2,
                        x - halfSize,
                        y + h / 2,
                        x + halfSize,
                        y + h / 2
                    ],
                    closed: true,
                    fill: color,
                    stroke: color,
                    strokeWidth: 2,
                    opacity: 1
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 291,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'circle':
                // Circle
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Circle"], {
                    x: x,
                    y: y,
                    radius: size / 2,
                    stroke: color,
                    strokeWidth: 2,
                    opacity: 1
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 308,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'cross':
                // Cross
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            x: x - size / 2,
                            y: y - size / 2,
                            width: size,
                            height: size,
                            stroke: color,
                            strokeWidth: thickness,
                            opacity: 1
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                            lineNumber: 322,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            x: x - size / 2,
                            y: y - size / 2,
                            width: size,
                            height: size,
                            stroke: color,
                            strokeWidth: thickness,
                            opacity: 1
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                            lineNumber: 331,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 321,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'star':
                // Star
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Star"], {
                    x: x,
                    y: y,
                    numPoints: 5,
                    innerRadius: size / 4,
                    outerRadius: size / 2,
                    fill: color,
                    stroke: color,
                    strokeWidth: 2,
                    opacity: 1
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 346,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'diamond':
                // Diamond
                const diamondH = size * 0.7;
                const halfW = size / 2;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    points: [
                        x,
                        y - diamondH / 2,
                        x + halfW,
                        y,
                        x,
                        y + diamondH / 2,
                        x - halfW,
                        y
                    ],
                    closed: true,
                    fill: color,
                    stroke: color,
                    strokeWidth: 2,
                    opacity: 1
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 364,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'arrow':
                // Arrow
                const arrowH = size * 0.7;
                const arrowHalfW = size / 6;
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            x: x,
                            y: y - arrowH / 2,
                            width: size,
                            height: arrowH,
                            stroke: color,
                            strokeWidth: thickness,
                            opacity: 1
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                            lineNumber: 385,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                            x: x + size,
                            y: y,
                            width: arrowHalfW,
                            height: arrowHalfW,
                            stroke: color,
                            strokeWidth: thickness,
                            opacity: 1
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                            lineNumber: 394,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 384,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'wave':
                // Wave
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
                    x: x,
                    y: y,
                    width: size,
                    height: size * 0.3,
                    stroke: color,
                    strokeWidth: thickness,
                    opacity: 1
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 409,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return null;
        }
    };
    /**
   * Render accent line
   */ const renderAccentLine = (position)=>{
        if (!decoData.config || !decoData.config.accentLines) return null;
        const accentLines = decoData.config.accentLines;
        if (!accentLines || !accentLines.enabled) return null;
        const { offset, thickness, length, color, gradient } = accentLines;
        const accentColor = color || '#00E5FF';
        const positions = {
            top: {
                x: 0,
                y: offset || 40
            },
            bottom: {
                x: 0,
                y: SLIDE_HEIGHT - (offset || 40)
            },
            left: {
                x: offset || 40,
                y: 0
            },
            right: {
                x: SLIDE_WIDTH - (offset || 40),
                y: 0
            }
        };
        const pos = positions[position];
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Line"], {
            x: pos.x,
            y: pos.y,
            width: position === 'top' || position === 'bottom' ? SLIDE_WIDTH : length || 80,
            height: position === 'left' || position === 'right' ? SLIDE_HEIGHT : length || 80,
            stroke: accentColor,
            strokeWidth: thickness,
            opacity: 1,
            dash: gradient ? [
                4,
                4
            ] : undefined
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
            lineNumber: 446,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    /**
   * Render watermark
   */ const renderWatermark = ()=>{
        if (!decoData.config || !decoData.config.watermark) return null;
        const config = decoData.config.watermark;
        if (!config.enabled || !config.text) return null;
        const size = 120;
        const opacity = config.opacity ?? 0.3;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            x: SLIDE_WIDTH / 2,
            y: SLIDE_HEIGHT / 2,
            offsetX: size,
            offsetY: size,
            rotation: -45,
            opacity: opacity,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                width: size * 2,
                height: size * 2,
                text: config.text,
                fontSize: size * 0.4,
                fontFamily: "Arial",
                fill: "#ffffff",
                align: "center",
                verticalAlign: "middle"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                lineNumber: 479,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
            lineNumber: 471,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    /**
   * Render logo
   */ const renderLogo = ()=>{
        _s();
        if (!decoData.config || !decoData.config.logo) return null;
        const config = decoData.config.logo;
        if (!config.enabled || !config.url) return null;
        const position = config.position;
        const size = config.size || 80;
        let x = 0;
        let y = 0;
        switch(position){
            case 'top-left':
                x = 60;
                y = 60;
                break;
            case 'top-right':
                x = SLIDE_WIDTH - 60;
                y = 60;
                break;
            case 'bottom-left':
                x = 60;
                y = SLIDE_HEIGHT - 60;
                break;
            case 'bottom-right':
                x = SLIDE_WIDTH - 60;
                y = SLIDE_HEIGHT - 60;
                break;
            default:
                x = SLIDE_WIDTH - 60;
                y = SLIDE_HEIGHT - 60;
        }
        // Use-image hook for logo
        const [image] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$use$2d$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"])(config.url, 'anonymous');
        if (!image) {
            return null;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            x: x,
            y: y,
            width: size,
            height: size,
            offsetX: size / 2,
            offsetY: size / 2,
            opacity: 1,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                width: size,
                height: size,
                fillPatternImage: image
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                lineNumber: 546,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
            lineNumber: 537,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    _s(renderLogo, "7iHFm+4ZQcY3NOZmuC1Wyv6gdJ4=", false, function() {
        return [
            __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$use$2d$image$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"]
        ];
    });
    /**
   * Render hashtag
   */ const renderHashtag = ()=>{
        if (!decoData.config || !decoData.config.hashtag) return null;
        const config = decoData.config.hashtag;
        if (!config.enabled || !config.text) return null;
        const position = config.position;
        const size = config.size || 32;
        const color = config.color || '#00E5FF';
        let x = 0;
        let y = 0;
        switch(position){
            case 'top-left':
                x = 60;
                y = 60;
                break;
            case 'top-right':
                x = SLIDE_WIDTH - 60;
                y = 60;
                break;
            case 'bottom-left':
                x = 60;
                y = SLIDE_HEIGHT - 60;
                break;
            case 'bottom-right':
                x = SLIDE_WIDTH - 60;
                y = SLIDE_HEIGHT - 60;
                break;
            default:
                x = 60;
                y = 60;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                x: x,
                y: y,
                text: `#${config.text}`,
                fontSize: size,
                fontFamily: "Arial",
                fontWeight: "600",
                fill: color,
                align: "center",
                verticalAlign: "middle"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                lineNumber: 594,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
            lineNumber: 593,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    /**
   * Render pillar label
   */ const renderPillarLabel = ()=>{
        if (!decoData.config || !decoData.config.pillarLabel) return null;
        const config = decoData.config.pillarLabel;
        if (!config || !config.enabled) return null;
        const position = config.position;
        const size = config.size || 32;
        const color = '#00E5FF';
        let x = 0;
        let y = 0;
        switch(position){
            case 'top-left':
                x = 60;
                y = 60;
                break;
            case 'top-right':
                x = SLIDE_WIDTH - 60;
                y = 60;
                break;
            case 'bottom-left':
                x = 60;
                y = SLIDE_HEIGHT - 60;
                break;
            case 'bottom-right':
                x = SLIDE_WIDTH - 60;
                y = SLIDE_HEIGHT - 60;
                break;
            default:
                x = SLIDE_WIDTH - 60;
                y = SLIDE_HEIGHT - 60;
        }
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                x: x,
                y: y,
                text: "Pillar",
                fontSize: size,
                fontFamily: "Inter",
                fontWeight: "700",
                fill: color,
                align: "center",
                verticalAlign: "middle"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                lineNumber: 648,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
            lineNumber: 647,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    /**
   * Render frame
   */ const renderFrame = ()=>{
        if (!decoData.config || !decoData.config.frame) return null;
        const config = decoData.config.frame;
        if (!config.enabled) return null;
        const { style, color } = config;
        const frameColor = color || '#666666';
        // Simple frame rendering based on available config
        if (style === 'minimal') {
            return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                x: 0,
                y: 0,
                width: SLIDE_WIDTH,
                height: SLIDE_HEIGHT,
                stroke: frameColor,
                strokeWidth: 4,
                opacity: 1,
                perfectDrawEnabled: false
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                lineNumber: 677,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0));
        }
        return null;
    };
    /**
    * Render background effects
    */ const renderBackgroundEffects = ()=>{
        if (!decoData.config || !decoData.config.backgroundEffects) return null;
        const effects = decoData.config.backgroundEffects;
        if (!effects) return null;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                effects.shadow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: "black",
                    opacity: 0.3,
                    offsetX: 0,
                    offsetY: 0,
                    blur: 10
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 704,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                effects.glow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: "#00E5FF",
                    opacity: 0.3,
                    blur: 20,
                    globalCompositeOperation: "screen"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 717,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                effects.blur && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: "transparent",
                    opacity: 1,
                    blur: 5
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 729,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                effects.noise && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: 0,
                    y: 0,
                    width: element.width,
                    height: element.height,
                    fill: "white",
                    opacity: 0.05,
                    globalCompositeOperation: "overlay",
                    perfectDrawEnabled: false
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                    lineNumber: 740,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true);
    };
    /**
   * Render decorator based on type
   */ const renderDecorator = ()=>{
        try {
            switch(decoData.decoratorType){
                case 'corner':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            renderCornerAccent('topLeft'),
                            renderCornerAccent('topRight'),
                            renderCornerAccent('bottomLeft'),
                            renderCornerAccent('bottomRight')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                        lineNumber: 763,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                case 'border':
                    return renderBorder();
                case 'frame':
                    return renderFrame();
                case 'slideNumber':
                    return renderSlideNumber();
                case 'logo':
                    return renderLogo();
                case 'hashtag':
                    return renderHashtag();
                case 'watermark':
                    return renderWatermark();
                case 'pillarLabel':
                    return renderPillarLabel();
                case 'line':
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
                        children: [
                            renderAccentLine('top'),
                            renderAccentLine('bottom'),
                            renderAccentLine('left'),
                            renderAccentLine('right')
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
                        lineNumber: 794,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0));
                default:
                    console.warn(`[DecoratorElement] Unknown decorator type: ${decoData.decoratorType}`);
                    return null;
            }
        } catch (error) {
            console.error('[DecoratorElement] Error rendering decorator:', error);
            return null;
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseElement"], {
        element: element,
        isSelected: isSelected,
        onSelect: onSelect,
        onTransform: onTransform,
        enableResize: enableResize,
        enableRotate: enableRotate,
        keepAspectRatio: keepAspectRatio,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                editingGlow,
                editingPulse,
                renderBackgroundEffects(),
                renderDecorator()
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
            lineNumber: 822,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx",
        lineNumber: 813,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = DecoratorElement;
var _c;
__turbopack_context__.k.register(_c, "DecoratorElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "CTAElement",
    ()=>CTAElement
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonva$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonva.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/react-konva/es/ReactKonvaCore.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BaseElement.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
// Constants
const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1350;
/**
 * Helper function to darken a hex color by a percentage
 */ function darkenColor(hexColor, percent) {
    // Remove hash if present
    const hex = hexColor.replace('#', '');
    // Parse hex values
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // Darken by percentage
    const factor = 1 - percent / 100;
    const newR = Math.round(r * factor);
    const newG = Math.round(g * factor);
    const newB = Math.round(b * factor);
    // Convert back to hex
    return `#${newR.toString(16).padStart(2, '0')}${newG.toString(16).padStart(2, '0')}${newB.toString(16).padStart(2, '0')}`;
}
const CTAElement = ({ element, isSelected, onSelect, onTransform, enableResize = true, enableRotate = true, keepAspectRatio = false })=>{
    _s();
    const ctaData = element.data;
    const [isHovered, setIsHovered] = __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].useState(false);
    /**
   * Calculate button dimensions based on shape
   */ const getButtonDimensions = ()=>{
        const { width, height } = element;
        switch(ctaData.shape){
            case 'pill':
                // Pill shape: curved sides
                return {
                    width,
                    height,
                    radius: height / 2
                };
            case 'rounded':
                // Rounded shape: moderate radius
                return {
                    width,
                    height,
                    radius: ctaData.borderRadius || Math.min(width, height) / 8
                };
            case 'square':
                // Square shape: no radius or custom
                return {
                    width,
                    height,
                    radius: ctaData.borderRadius || 0
                };
            case 'custom':
                // Custom radius from data
                return {
                    width,
                    height,
                    radius: ctaData.borderRadius || Math.min(width, height) / 8
                };
            default:
                // Default to pill
                return {
                    width,
                    height,
                    radius: height / 2
                };
        }
    };
    /**
   * Get button background color based on style
   */ const getButtonBackground = ()=>{
        const { backgroundColor, style, textColor } = ctaData;
        switch(style){
            case 'solid':
                // Darken on hover
                return isHovered ? darkenColor(backgroundColor, 20) : backgroundColor;
            case 'outline':
                // Show background on hover
                return isHovered ? `${backgroundColor}33` : 'transparent'; // 20% opacity
            case 'gradient':
                // Create gradient from primary to secondary color
                // For gradient style, use secondary color as the gradient end
                return isHovered ? darkenColor(backgroundColor, 10) : backgroundColor;
            case 'glowing':
                // Glowing effect will be handled in effects
                return isHovered ? darkenColor(backgroundColor, 10) : backgroundColor;
            case 'minimal':
                // Show background on hover
                return isHovered ? `${textColor}1A` : 'transparent'; // 10% opacity
            default:
                return backgroundColor;
        }
    };
    /**
   * Get button border color based on style
   */ const getButtonBorderColor = ()=>{
        const { backgroundColor, textColor, style } = ctaData;
        switch(style){
            case 'solid':
                return 'transparent';
            case 'outline':
                return backgroundColor;
            case 'gradient':
                return 'transparent';
            case 'glowing':
                return backgroundColor;
            case 'minimal':
                return textColor;
            default:
                return 'transparent';
        }
    };
    /**
   * Get button text color based on style
   */ const getButtonTextColor = ()=>{
        const { textColor, style, backgroundColor } = ctaData;
        switch(style){
            case 'solid':
                return textColor;
            case 'outline':
                return backgroundColor;
            case 'gradient':
                return textColor;
            case 'glowing':
                return textColor;
            case 'minimal':
                return backgroundColor;
            default:
                return textColor;
        }
    };
    /**
   * Get button shadow configuration
   */ const getButtonShadow = ()=>{
        const { style, shadow, backgroundColor } = ctaData;
        // Only shadows for solid, gradient, glowing styles
        switch(style){
            case 'solid':
                if (shadow) {
                    return {
                        color: 'rgba(0, 0, 0, 0.2)',
                        blur: 10,
                        offsetX: 0,
                        offsetY: 4
                    };
                }
                return undefined;
            case 'gradient':
                if (shadow) {
                    return {
                        color: 'rgba(0, 0, 0, 0.15)',
                        blur: 20,
                        offsetX: 0,
                        offsetY: 8
                    };
                }
                return undefined;
            case 'glowing':
                // Glowing effect is handled separately
                return undefined;
            case 'minimal':
                return undefined;
            default:
                return undefined;
        }
    };
    /**
   * Get glow effect (for glowing style)
   */ const getGlowEffect = ()=>{
        const { style, textColor } = ctaData;
        const pillarColor = textColor;
        switch(style){
            case 'glowing':
                return {
                    color: pillarColor,
                    blur: 20,
                    offsetX: 0,
                    offsetY: 0,
                    opacity: 0.6
                };
            case 'gradient':
                // Gradient has subtle glow too
                return {
                    color: pillarColor,
                    blur: 15,
                    offsetX: 0,
                    offsetY: 0,
                    opacity: 0.3
                };
            default:
                return undefined;
        }
    };
    /**
   * Get animation configuration
   */ const getAnimationConfig = ()=>{
        const { animation } = ctaData;
        switch(animation){
            case 'pulse':
                return {
                    keyframes: 'pulse',
                    duration: 1.5,
                    timing: 'ease-in-out',
                    iterationCount: 'infinite',
                    direction: 'alternate'
                };
            case 'glow':
                return {
                    keyframes: 'glow',
                    duration: 2,
                    timing: 'ease-in-out',
                    iterationCount: 'infinite',
                    direction: 'alternate'
                };
            case 'bounce':
                return {
                    keyframes: 'bounce',
                    duration: 1,
                    timing: 'ease-in-out',
                    iterationCount: 'infinite',
                    direction: 'alternate'
                };
            case 'shake':
                return {
                    keyframes: 'shake',
                    duration: 0.5,
                    timing: 'ease-in-out',
                    iterationCount: 'infinite',
                    direction: 'alternate'
                };
            case 'none':
                return undefined;
            default:
                return undefined;
        }
    };
    /**
   * Get icon position coordinates
   */ const getIconPosition = ()=>{
        const { iconPosition } = ctaData;
        const iconSize = 24; // Default icon size
        switch(iconPosition){
            case 'left':
                return {
                    x: -element.width / 2 + 24,
                    y: 0
                };
            case 'right':
                return {
                    x: element.width / 2 - 24,
                    y: 0
                };
            case 'center':
                return {
                    x: 0,
                    y: 0
                };
            default:
                return {
                    x: 0,
                    y: 0
                };
        }
    };
    /**
   * Render button background
   */ const renderButtonBackground = ()=>{
        const { style, backgroundColor } = ctaData;
        const { radius } = getButtonDimensions();
        const bgColor = getButtonBackground();
        const borderColor = getButtonBorderColor();
        switch(style){
            case 'solid':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: -element.width / 2,
                    y: -element.height / 2,
                    width: element.width,
                    height: element.height,
                    fill: bgColor,
                    cornerRadius: radius,
                    shadow: getButtonShadow()
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                    lineNumber: 375,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'gradient':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: -element.width / 2,
                    y: -element.height / 2,
                    width: element.width,
                    height: element.height,
                    fill: bgColor,
                    cornerRadius: radius,
                    shadow: getButtonShadow()
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                    lineNumber: 388,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'outline':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: -element.width / 2,
                    y: -element.height / 2,
                    width: element.width,
                    height: element.height,
                    fill: "transparent",
                    stroke: borderColor,
                    strokeWidth: 3,
                    cornerRadius: radius
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                    lineNumber: 401,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            case 'glowing':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                            x: -element.width / 2,
                            y: -element.height / 2,
                            width: element.width,
                            height: element.height,
                            fill: bgColor,
                            cornerRadius: radius,
                            shadow: getButtonShadow()
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                            lineNumber: 416,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                            x: -element.width / 2,
                            y: -element.height / 2,
                            width: element.width,
                            height: element.height,
                            fill: "transparent",
                            cornerRadius: radius,
                            shadow: getGlowEffect()
                        }, void 0, false, {
                            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                            lineNumber: 425,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true);
            case 'minimal':
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: -element.width / 2,
                    y: -element.height / 2,
                    width: element.width,
                    height: element.height,
                    fill: "transparent",
                    stroke: borderColor,
                    strokeWidth: 2,
                    cornerRadius: radius
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                    lineNumber: 439,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
            default:
                return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Rect"], {
                    x: -element.width / 2,
                    y: -element.height / 2,
                    width: element.width,
                    height: element.height,
                    fill: bgColor,
                    cornerRadius: radius
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                    lineNumber: 453,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0));
        }
    };
    /**
   * Render button text and icon
   */ const renderButtonContent = ()=>{
        const { text, textColor, icon, iconPosition } = ctaData;
        const iconSize = 24; // Default icon size
        const iconPos = getIconPosition();
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            children: [
                icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    x: iconPos.x,
                    y: iconPos.y,
                    text: icon,
                    fontSize: iconSize,
                    fontFamily: "Arial",
                    fill: textColor,
                    align: "center",
                    verticalAlign: "middle",
                    offsetX: iconPos.x,
                    offsetY: iconPos.y,
                    fontStyle: "bold"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                    lineNumber: 477,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0)),
                text && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Text"], {
                    x: icon ? iconPosition === 'center' ? 4 : 0 : 0,
                    y: 0,
                    text: text,
                    fontSize: Math.min(element.width / 10, 32),
                    fontFamily: "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                    fontWeight: "600",
                    fill: textColor,
                    align: iconPosition === 'center' ? 'center' : 'left',
                    verticalAlign: "middle",
                    offsetY: 1,
                    fontStyle: "bold"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                    lineNumber: 494,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
            lineNumber: 474,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    };
    /**
   * Render glow animation keyframes
   */ const renderGlowAnimation = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes glow {
            0%, 100% {
              opacity: 0.3;
            }
            50% {
              opacity: 0.8;
            }
          }
        `
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                lineNumber: 518,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
    };
    /**
   * Render pulse animation keyframes
   */ const renderPulseAnimation = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes pulse {
            0%, 100% {
              opacity: 1;
            }
            50% {
              opacity: 0.8;
            }
          }
        `
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                lineNumber: 538,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
    };
    /**
   * Render bounce animation keyframes
   */ const renderBounceAnimation = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes bounce {
            0%, 100% {
              transform: translateY(0);
            }
            25% {
              transform: translateY(-10px);
            }
            50% {
              transform: translateY(0);
            }
            75% {
              transform: translateY(-5px);
            }
          }
        `
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                lineNumber: 558,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
    };
    /**
   * Render shake animation keyframes
   */ const renderShakeAnimation = ()=>{
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
          @keyframes shake {
            0%, 100% {
              transform: translateX(0);
            }
            10%, 30%, 50%, 70%, 90% {
              transform: translateX(-4px);
            }
            20%, 40%, 60%, 80% {
              transform: translateX(4px);
            }
          }
        `
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
                lineNumber: 584,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false);
    };
    /**
   * Render animation keyframes based on style
   */ const renderAnimationKeyframes = ()=>{
        const { animation } = ctaData;
        switch(animation){
            case 'pulse':
                return renderPulseAnimation();
            case 'glow':
                return renderGlowAnimation();
            case 'bounce':
                return renderBounceAnimation();
            case 'shake':
                return renderShakeAnimation();
            default:
                return null;
        }
    };
    /**
   * Render CTA button
   */ return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BaseElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BaseElement"], {
        element: element,
        isSelected: isSelected,
        onSelect: onSelect,
        onTransform: onTransform,
        enableResize: enableResize,
        enableRotate: enableRotate,
        keepAspectRatio: keepAspectRatio,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$react$2d$konva$2f$es$2f$ReactKonvaCore$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Group"], {
            x: element.x,
            y: element.y,
            width: element.width,
            height: element.height,
            rotation: element.rotation,
            scaleX: element.scaleX,
            scaleY: element.scaleY,
            opacity: element.opacity,
            visible: element.visible,
            draggable: isSelected && !element.locked,
            onMouseEnter: ()=>setIsHovered(true),
            onMouseLeave: ()=>setIsHovered(false),
            onClick: (e)=>{
                e.cancelBubble = true;
                onSelect(element.id);
                // Handle CTA click if URL is set
                if (ctaData.url) {
                    window.open(ctaData.url, '_blank');
                }
            },
            onTap: (e)=>{
                e.cancelBubble = true;
                onSelect(element.id);
                // Handle CTA tap if URL is set
                if (ctaData.url) {
                    window.open(ctaData.url, '_blank');
                }
            },
            children: [
                renderAnimationKeyframes(),
                renderButtonBackground(),
                renderButtonContent()
            ]
        }, void 0, true, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
            lineNumber: 638,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx",
        lineNumber: 629,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CTAElement, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c = CTAElement;
var _c;
__turbopack_context__.k.register(_c, "CTAElement");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/slide-subtypes/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "allSubTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["allSubTypes"],
    "getDefaultSubType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultSubType"],
    "getDefaultSubTypeForSlideType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getDefaultSubTypeForSlideType"],
    "getDefaultSubTypeId",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getDefaultSubTypeId"],
    "getSubType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSubType"],
    "getSubTypesByTags",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSubTypesByTags"],
    "getSubTypesForSlideType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSubTypesForSlideType"],
    "getSubTypesForTemplate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getSubTypesForTemplate"],
    "hasSubType",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["hasSubType"],
    "isSubTypeCompatible",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSubTypeCompatible"],
    "searchSubTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["searchSubTypes"],
    "slideSubTypes",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["slideSubTypes"],
    "subTypeMap",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["subTypeMap"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$slide$2d$subtypes$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/slide-subtypes/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)");
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPillarTheme",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["getPillarTheme"],
    "p1Framework",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p1$2d$framework$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p1Framework"],
    "p2Strategy",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p2$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p2Strategy"],
    "p3Systems",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p3$2d$systems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p3Systems"],
    "p4Capital",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p4$2d$capital$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p4Capital"],
    "p5Vitality",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p5$2d$vitality$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p5Vitality"],
    "p6Sovereignty",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p6$2d$sovereignty$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p6Sovereignty"],
    "pillarList",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pillarList"],
    "pillars",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["pillars"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$index$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p1$2d$framework$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p1-framework.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p2$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p2-strategy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p3$2d$systems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p3-systems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p4$2d$capital$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p4-capital.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p5$2d$vitality$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p5-vitality.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p6$2d$sovereignty$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p6-sovereignty.ts [app-client] (ecmascript)");
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
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/constants.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$hooks$2f$useDecoratorConfig$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/hooks/useDecoratorConfig.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$canvas$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/canvas-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$store$2f$carousel$2d$store$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/store/carousel-store.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$TextElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/TextElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$ImageElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/ImageElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$BackgroundElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/BackgroundElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$DecoratorElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/DecoratorElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$canvas$2d$editor$2f$elements$2f$CTAElement$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/canvas-editor/elements/CTAElement.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)");
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
/**
 * Convert canvas element to slide content
 *
 * Converts a single canvas element update to slide content format.
 * This is used for immediate sync when elements are updated in canvas mode.
 */ function convertCanvasElementToSlideContent(element) {
    // Only sync text and image elements (background, decorator, CTA are handled separately)
    if (element.type === 'text') {
        const textData = element.data;
        if (element.name === 'Headline') {
            return {
                headline: {
                    value: textData.content,
                    position: {
                        mode: 'absolute',
                        x: element.x,
                        y: element.y
                    }
                }
            };
        } else if (element.name === 'Subtext') {
            return {
                subtext: {
                    value: textData.content,
                    position: {
                        mode: 'absolute',
                        x: element.x,
                        y: element.y
                    }
                }
            };
        } else if (element.name === 'Bullets') {
            const bulletLines = textData.content.split('\n');
            const bullets = bulletLines.map((line)=>line.replace(/^[•\-*]\s*/, '').trim()).filter((line)=>line.length > 0);
            return {
                bullets: {
                    value: bullets,
                    position: {
                        mode: 'absolute',
                        x: element.x,
                        y: element.y
                    }
                }
            };
        } else if (element.name === 'Quote') {
            const quoteValue = textData.content.replace(/^"|"$/g, '');
            return {
                quote: {
                    value: quoteValue,
                    position: {
                        mode: 'absolute',
                        x: element.x,
                        y: element.y
                    }
                }
            };
        } else if (element.name === 'Attribution') {
            const attributionValue = textData.content.replace(/^-\s*/, '');
            return {
                attribution: {
                    value: attributionValue,
                    position: {
                        mode: 'absolute',
                        x: element.x,
                        y: element.y
                    }
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
                rotation: element.rotation,
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
    return null;
}
/**
 * Create canvas elements from slide data
 *
 * This is a simplified version that creates canvas elements directly from slide data
 * without using the deprecated translation layer.
 */ function createCanvasElementsFromSlide(slide, pillar, subTypeConfig, decoratorConfig) {
    const elements = [];
    const content = slide.content;
    const style = slide.style;
    // Helper to get element position
    const getElementPosition = (field)=>{
        if (field && typeof field === 'object' && 'position' in field) {
            const pos = field.position;
            if (pos && typeof pos === 'object' && 'x' in pos && 'y' in pos) {
                return {
                    x: pos.x,
                    y: pos.y
                };
            }
        }
        return {
            x: 0,
            y: 0
        };
    };
    // Helper to get element style
    const getElementStyle = (field, defaultStyle)=>{
        if (field && typeof field === 'object' && 'style' in field) {
            const fieldStyle = field.style;
            if (fieldStyle && typeof fieldStyle === 'object') {
                return {
                    ...defaultStyle,
                    ...fieldStyle
                };
            }
        }
        return defaultStyle;
    };
    // Create headline element
    if (content.headline && typeof content.headline === 'object' && 'value' in content.headline) {
        const headline = content.headline;
        const pos = getElementPosition(headline);
        const theme = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript)").getPillarTheme(pillar);
        const defaultStyle = theme?.headline || {
            fontSize: 64,
            color: '#000000',
            fontWeight: 'bold'
        };
        const style = getElementStyle(headline, defaultStyle);
        elements.push({
            id: `${slide.id}-headline`,
            type: 'text',
            name: 'Headline',
            x: pos.x,
            y: pos.y,
            width: 800,
            height: 100,
            rotation: 0,
            zIndex: 10,
            locked: false,
            visible: true,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                content: headline.value,
                fontSize: style.fontSize,
                fontFamily: style.fontFamily || 'Arial',
                fontWeight: style.fontWeight || 'bold',
                color: style.color || '#000000',
                lineHeight: style.lineHeight || 1.2,
                letterSpacing: style.letterSpacing || 0
            }
        });
    }
    // Create subtext element
    if (content.subtext && typeof content.subtext === 'object' && 'value' in content.subtext) {
        const subtext = content.subtext;
        const pos = getElementPosition(subtext);
        const theme = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript)").getPillarTheme(pillar);
        const defaultStyle = theme?.subtext || {
            fontSize: 32,
            color: '#333333',
            fontWeight: 'normal'
        };
        const style = getElementStyle(subtext, defaultStyle);
        elements.push({
            id: `${slide.id}-subtext`,
            type: 'text',
            name: 'Subtext',
            x: pos.x,
            y: pos.y,
            width: 800,
            height: 80,
            rotation: 0,
            zIndex: 10,
            locked: false,
            visible: true,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                content: subtext.value,
                fontSize: style.fontSize,
                fontFamily: style.fontFamily || 'Arial',
                fontWeight: style.fontWeight || 'normal',
                color: style.color || '#333333',
                lineHeight: style.lineHeight || 1.4,
                letterSpacing: style.letterSpacing || 0
            }
        });
    }
    // Create bullets element
    if (content.bullets && typeof content.bullets === 'object' && 'value' in content.bullets) {
        const bullets = content.bullets;
        const pos = getElementPosition(bullets);
        const theme = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript)").getPillarTheme(pillar);
        const defaultStyle = theme?.bullets || {
            fontSize: 28,
            color: '#333333',
            fontWeight: 'normal'
        };
        const style = getElementStyle(bullets, defaultStyle);
        elements.push({
            id: `${slide.id}-bullets`,
            type: 'text',
            name: 'Bullets',
            x: pos.x,
            y: pos.y,
            width: 800,
            height: 200,
            rotation: 0,
            zIndex: 10,
            locked: false,
            visible: true,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                content: Array.isArray(bullets.value) ? bullets.value.join('\n') : bullets.value,
                fontSize: style.fontSize,
                fontFamily: style.fontFamily || 'Arial',
                fontWeight: style.fontWeight || 'normal',
                color: style.color || '#333333',
                lineHeight: style.lineHeight || 1.6,
                letterSpacing: style.letterSpacing || 0
            }
        });
    }
    // Create quote element
    if (content.quote && typeof content.quote === 'object' && 'value' in content.quote) {
        const quote = content.quote;
        const pos = getElementPosition(quote);
        const theme = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript)").getPillarTheme(pillar);
        const defaultStyle = theme?.quote || {
            fontSize: 48,
            color: '#000000',
            fontWeight: 'normal',
            fontStyle: 'italic'
        };
        const style = getElementStyle(quote, defaultStyle);
        elements.push({
            id: `${slide.id}-quote`,
            type: 'text',
            name: 'Quote',
            x: pos.x,
            y: pos.y,
            width: 800,
            height: 150,
            rotation: 0,
            zIndex: 10,
            locked: false,
            visible: true,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                content: `"${quote.value}"`,
                fontSize: style.fontSize,
                fontFamily: style.fontFamily || 'Georgia',
                fontWeight: style.fontWeight || 'normal',
                color: style.color || '#000000',
                lineHeight: style.lineHeight || 1.4,
                letterSpacing: style.letterSpacing || 0,
                fontStyle: style.fontStyle || 'italic'
            }
        });
    }
    // Create attribution element
    if (content.attribution && typeof content.attribution === 'object' && 'value' in content.attribution) {
        const attribution = content.attribution;
        const pos = getElementPosition(attribution);
        const theme = __turbopack_context__.r("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript)").getPillarTheme(pillar);
        const defaultStyle = theme?.attribution || {
            fontSize: 24,
            color: '#666666',
            fontWeight: 'normal'
        };
        const style = getElementStyle(attribution, defaultStyle);
        elements.push({
            id: `${slide.id}-attribution`,
            type: 'text',
            name: 'Attribution',
            x: pos.x,
            y: pos.y,
            width: 800,
            height: 50,
            rotation: 0,
            zIndex: 10,
            locked: false,
            visible: true,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                content: `- ${attribution.value}`,
                fontSize: style.fontSize,
                fontFamily: style.fontFamily || 'Arial',
                fontWeight: style.fontWeight || 'normal',
                color: style.color || '#666666',
                lineHeight: style.lineHeight || 1.4,
                letterSpacing: style.letterSpacing || 0
            }
        });
    }
    // Create image element
    if (content.imageConfig && typeof content.imageConfig === 'object') {
        const imageConfig = content.imageConfig;
        elements.push({
            id: `${slide.id}-image`,
            type: 'image',
            name: 'Image',
            x: 800,
            y: 200,
            width: 400,
            height: 400,
            rotation: imageConfig.rotation || 0,
            zIndex: 5,
            locked: false,
            visible: true,
            opacity: imageConfig.opacity || 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                url: imageConfig.imageUrl || '',
                objectFit: imageConfig.objectFit || 'cover',
                filters: {
                    blur: imageConfig.filters?.blur || 0,
                    grayscale: imageConfig.filters?.grayscale || 0,
                    sepia: imageConfig.filters?.sepia || 0,
                    saturate: imageConfig.filters?.saturate || 100,
                    brightness: imageConfig.filters?.brightness || 100,
                    contrast: imageConfig.filters?.contrast || 100
                },
                borderRadius: imageConfig.borderRadius || 0,
                borderWidth: imageConfig.borderWidth || 0,
                borderColor: imageConfig.borderColor || '#000000',
                shadow: imageConfig.shadow || false,
                blendMode: imageConfig.blendMode || 'normal'
            }
        });
    }
    // Create background element
    if (style && 'backgroundColor' in style && style.backgroundColor) {
        elements.push({
            id: `${slide.id}-background`,
            type: 'background',
            name: 'Background',
            x: 0,
            y: 0,
            width: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"],
            height: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_HEIGHT"],
            rotation: 0,
            zIndex: 0,
            locked: true,
            visible: true,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                backgroundType: 'solid',
                primaryColor: style.backgroundColor,
                opacity: 1
            }
        });
    }
    // Create decorator element (if enabled)
    if (decoratorConfig?.logo?.enabled) {
        elements.push({
            id: `${slide.id}-decorator-logo`,
            type: 'decorator',
            name: 'Logo',
            x: decoratorConfig.logo.position === 'top-right' ? __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$constants$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SLIDE_WIDTH"] - 100 : 20,
            y: 20,
            width: decoratorConfig.logo.size || 80,
            height: decoratorConfig.logo.size || 80,
            rotation: 0,
            zIndex: 20,
            locked: true,
            visible: true,
            opacity: decoratorConfig.logo.opacity || 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                decoratorType: 'logo',
                url: decoratorConfig.logo.imageUrl || '/default-logo.png'
            }
        });
    }
    // Create CTA element (if exists)
    if (slide.cta && typeof slide.cta === 'object' && 'text' in slide.cta && slide.cta.text) {
        const cta = slide.cta;
        elements.push({
            id: `${slide.id}-cta`,
            type: 'cta',
            name: 'CTA',
            x: 100,
            y: 700,
            width: 300,
            height: 60,
            rotation: 0,
            zIndex: 15,
            locked: false,
            visible: true,
            opacity: 1,
            scaleX: 1,
            scaleY: 1,
            data: {
                text: cta.text || 'Learn More',
                style: cta.style || 'solid',
                shape: cta.shape || 'pill',
                backgroundColor: cta.backgroundColor || '#00E5FF',
                textColor: cta.textColor || '#000000',
                borderRadius: cta.borderRadius || 8,
                shadow: cta.shadow || true
            }
        });
    }
    return elements;
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
                        lineNumber: 487,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "Please select a slide to edit"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 488,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                lineNumber: 486,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
            lineNumber: 485,
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
                        lineNumber: 500,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-sm",
                        children: "Slide is missing required ID"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                        lineNumber: 501,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                lineNumber: 499,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
            lineNumber: 498,
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
    // Create canvas elements from slide data (simplified, no translation layer)
    const computedElements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CanvasSlide.useMemo[computedElements]": ()=>{
            try {
                return createCanvasElementsFromSlide(slide, pillar, subTypeConfig, decoratorConfig);
            } catch (error) {
                console.error('[CanvasSlide] Element creation failed:', error);
                return [];
            }
        }
    }["CanvasSlide.useMemo[computedElements]"], [
        slide,
        pillar,
        subTypeConfig,
        decoratorConfig
    ]);
    // Merge computed elements with local modifications
    const elements = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "CanvasSlide.useMemo[elements]": ()=>{
            const merged = new Map();
            // Start with computed elements
            computedElements.forEach({
                "CanvasSlide.useMemo[elements]": (element)=>{
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
                        merged.set(id, {
                            ...merged.get(id),
                            ...element
                        });
                    }
                }
            }["CanvasSlide.useMemo[elements]"]);
            // Expose elements to parent
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
            if (!elementId) {
                console.warn('[CanvasSlide] Element update called with invalid element ID');
                return;
            }
            // Update local state (for immediate feedback)
            const existingUpdate = localElementsRef.current.get(elementId) || {};
            localElementsRef.current.set(elementId, {
                ...existingUpdate,
                ...updates
            });
            const element = elements.get(elementId);
            if (!element) {
                console.warn('[CanvasSlide] Element not found:', elementId);
                return;
            }
            if (isPreview) {
                console.log('[CanvasSlide] Skipping update in preview mode');
                return;
            }
            if (!updates || Object.keys(updates).length === 0) {
                console.warn('[CanvasSlide] Skipping empty update');
                return;
            }
            try {
                const updatedElement = {
                    ...element,
                    ...updates
                };
                const slideContent = convertCanvasElementToSlideContent(updatedElement);
                if (slideContent) {
                    console.log('[CanvasSlide] Writing to carousel-store:', slide.id, slideContent);
                    updateSlideRef.current(slide.id, slideContent);
                }
            } catch (error) {
                console.error('[CanvasSlide] Error updating slide:', error);
            }
        }
    }["CanvasSlide.useCallback[handleElementUpdate]"], [
        elements,
        slide.id,
        isPreview
    ]);
    // Handle element deletion
    const handleElementDelete = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useCallback"])({
        "CanvasSlide.useCallback[handleElementDelete]": (elementId)=>{
            console.log('[CanvasSlide] Element delete:', elementId);
            if (!elementId) {
                console.warn('[CanvasSlide] Element delete called with invalid element ID');
                return;
            }
            if (isPreview) {
                console.log('[CanvasSlide] Skipping delete in preview mode');
                return;
            }
            const element = elements.get(elementId);
            if (!element) {
                console.warn('[CanvasSlide] Element not found for deletion:', elementId);
                return;
            }
            const contentFieldMap = {
                'Headline': 'headline',
                'Subtext': 'subtext',
                'Bullets': 'bullets',
                'Quote': 'quote',
                'Attribution': 'attribution'
            };
            const field = contentFieldMap[element.name];
            if (field) {
                updateSlideRef.current(slide.id, {
                    [field]: undefined
                });
            } else {
                console.warn('[CanvasSlide] Cannot delete element type:', element.name);
            }
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
                        lineNumber: 684,
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
                        lineNumber: 694,
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
                        lineNumber: 704,
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
                        lineNumber: 714,
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
                        lineNumber: 724,
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
                        lineNumber: 754,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                    lineNumber: 753,
                    columnNumber: 11
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
                lineNumber: 752,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
            lineNumber: 745,
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
            lineNumber: 769,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/components/preview/CanvasSlide.tsx",
        lineNumber: 762,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(CanvasSlide, "FO+B0Q7hjyYiWOK2M8yJMh+mlOg=", false, function() {
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
        lineNumber: 789,
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
        lineNumber: 805,
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

//# sourceMappingURL=3a06e_Empire-Management_03_INFRASTRUCTURE_02_Codebase_carousel-generator_src_1d9ce2fd._.js.map