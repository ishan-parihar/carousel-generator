(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/arc-templates/titan-arc.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "arcTemplateList",
    ()=>arcTemplateList,
    "arcTemplates",
    ()=>arcTemplates,
    "quickArc",
    ()=>quickArc,
    "titanArc",
    ()=>titanArc
]);
const titanArc = {
    id: 'titan-arc',
    name: 'Titan Arc',
    description: 'A 10-slide story arc for maximum engagement and authority',
    slides: [
        {
            type: 'title',
            label: 'Hook',
            description: 'Attention-grabbing opening statement',
            defaultContent: {
                headline: 'The One Thing Nobody Tells You About...',
                subtext: 'Swipe to discover the truth →'
            }
        },
        {
            type: 'content',
            label: 'Problem',
            description: 'State the pain point',
            defaultContent: {
                headline: 'The Problem',
                subtext: 'Most people struggle with this because...'
            }
        },
        {
            type: 'content',
            label: 'Agitation',
            description: 'Amplify the pain',
            defaultContent: {
                headline: 'Why It Gets Worse',
                subtext: 'Without addressing this, you will...'
            }
        },
        {
            type: 'content',
            label: 'Insight',
            description: 'Share your unique perspective',
            defaultContent: {
                headline: 'The Hidden Truth',
                subtext: 'What I discovered after years of research...'
            }
        },
        {
            type: 'bullets',
            label: 'Framework',
            description: 'Present your framework or solution',
            defaultContent: {
                headline: 'The 3-Step Framework',
                bullets: [
                    'Step 1: Foundation',
                    'Step 2: Implementation',
                    'Step 3: Optimization'
                ]
            }
        },
        {
            type: 'content',
            label: 'Proof',
            description: 'Provide evidence or social proof',
            defaultContent: {
                headline: 'The Results',
                subtext: 'This framework has helped hundreds of...'
            }
        },
        {
            type: 'content',
            label: 'Story',
            description: 'Share a transformation story',
            defaultContent: {
                headline: 'Before & After',
                subtext: 'Here\'s what changed when I applied this...'
            }
        },
        {
            type: 'quote',
            label: 'Quote',
            description: 'Powerful quote or testimonial',
            defaultContent: {
                quote: 'The best time to plant a tree was 20 years ago. The second best time is now.',
                attribution: '— Ancient Proverb'
            }
        },
        {
            type: 'bullets',
            label: 'Summary',
            description: 'Key takeaways',
            defaultContent: {
                headline: 'Key Takeaways',
                bullets: [
                    'Takeaway 1',
                    'Takeaway 2',
                    'Takeaway 3'
                ]
            }
        },
        {
            type: 'cta',
            label: 'Call to Action',
            description: 'Clear next step',
            defaultContent: {
                headline: 'Ready to Transform?',
                subtext: 'Follow for more insights',
                ctaText: 'Save this post →'
            }
        }
    ]
};
const quickArc = {
    id: 'quick-arc',
    name: 'Quick Arc',
    description: 'A 5-slide condensed version for quick consumption',
    slides: [
        {
            type: 'title',
            label: 'Hook',
            description: 'Attention-grabbing opener',
            defaultContent: {
                headline: 'Stop Making This Mistake',
                subtext: 'Swipe →'
            }
        },
        {
            type: 'content',
            label: 'Problem',
            description: 'State the issue',
            defaultContent: {
                headline: 'The Problem',
                subtext: 'Here\'s what most people get wrong...'
            }
        },
        {
            type: 'bullets',
            label: 'Solution',
            description: 'Your solution framework',
            defaultContent: {
                headline: 'The Solution',
                bullets: [
                    'Do this first',
                    'Then do this',
                    'Finally, do this'
                ]
            }
        },
        {
            type: 'content',
            label: 'Result',
            description: 'Expected outcome',
            defaultContent: {
                headline: 'The Result',
                subtext: 'When you follow this, you will...'
            }
        },
        {
            type: 'cta',
            label: 'CTA',
            description: 'Call to action',
            defaultContent: {
                headline: 'Take Action Now',
                ctaText: 'Follow for more →'
            }
        }
    ]
};
const arcTemplates = {
    'titan-arc': titanArc,
    'quick-arc': quickArc
};
const arcTemplateList = Object.values(arcTemplates);
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/styles/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "TEMPLATE_DECORATOR_SUGGESTIONS",
    ()=>TEMPLATE_DECORATOR_SUGGESTIONS,
    "getAllStyleTemplates",
    ()=>getAllStyleTemplates,
    "getStyleTemplate",
    ()=>getStyleTemplate,
    "getTemplateDecoratorSuggestions",
    ()=>getTemplateDecoratorSuggestions,
    "styleTemplates",
    ()=>styleTemplates
]);
const TEMPLATE_DECORATOR_SUGGESTIONS = {
    glassmorphism: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 2,
            color: 'rgba(255,255,255,0.3)'
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'dot',
                size: 24
            }
        },
        frame: {
            enabled: false
        }
    },
    cyberpunk: {
        border: {
            enabled: true,
            style: 'dashed',
            thickness: 4,
            color: '#00E5FF'
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'bracket',
                size: 40
            }
        },
        frame: {
            enabled: true,
            style: 'tech',
            thickness: 8
        }
    },
    swissMinimal: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 4,
            color: '#000000'
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'square',
                size: 32
            }
        },
        frame: {
            enabled: false
        }
    },
    brutalist: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 8,
            color: '#000000'
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'bracket',
                size: 64
            }
        },
        frame: {
            enabled: false
        }
    },
    gradientMesh: {
        border: {
            enabled: false
        },
        cornerAccents: {
            enabled: false
        },
        frame: {
            enabled: false
        }
    },
    isometric3d: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 2,
            color: 'rgba(255,255,255,0.2)'
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'bracket',
                size: 32
            }
        },
        frame: {
            enabled: true,
            style: 'tech',
            thickness: 4
        }
    },
    holographic: {
        border: {
            enabled: true,
            style: 'gradient',
            thickness: 3
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'dot',
                size: 28
            }
        },
        frame: {
            enabled: true,
            style: 'minimal',
            thickness: 2
        }
    },
    vaporwave: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 4,
            color: '#ff00ff'
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'triangle',
                size: 40
            }
        },
        frame: {
            enabled: true,
            style: 'film',
            thickness: 8
        }
    },
    editorial: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 1,
            color: 'rgba(255,255,255,0.3)'
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'line',
                size: 32
            }
        },
        frame: {
            enabled: true,
            style: 'photo',
            thickness: 4
        }
    },
    techData: {
        border: {
            enabled: true,
            style: 'dashed',
            thickness: 2,
            color: 'rgba(255,255,255,0.4)'
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'bracket',
                size: 28
            }
        },
        frame: {
            enabled: true,
            style: 'tech',
            thickness: 6
        }
    },
    organic: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 2,
            color: 'rgba(255,255,255,0.2)',
            cornerRadius: 16
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'dot',
                size: 24
            }
        },
        frame: {
            enabled: true,
            style: 'minimal',
            thickness: 2
        }
    },
    abstractArt: {
        border: {
            enabled: false
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'triangle',
                size: 48
            }
        },
        frame: {
            enabled: false
        }
    }
};
const styleTemplates = {
    // ===== OLD TEMPLATES (kept for backward compatibility) =====
    minimal: {
        id: 'minimal',
        name: 'Minimal Clean',
        description: 'Clean, minimalist design with subtle depth and modern aesthetics',
        background: {
            type: 'solid',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 80
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '32px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'decimal',
            numberPosition: 'bottom-right',
            accentLines: true,
            accentLinePosition: 'top',
            border: true,
            borderStyle: 'solid',
            borderColor: 'rgba(255,255,255,0.1)',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: false,
            blur: false,
            noise: true
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'quote',
            'cta'
        ],
        recommendedTreatments: [
            'gradient-text',
            'outline',
            'glass'
        ]
    },
    gradient: {
        id: 'gradient',
        name: 'Gradient Flow',
        description: 'Modern gradient mesh with smooth transitions and depth',
        background: {
            type: 'gradient-mesh',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 85
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'circle',
            numberPosition: 'top-right',
            accentLines: true,
            accentLinePosition: 'both',
            border: true,
            borderStyle: 'gradient',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: true,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'cta'
        ],
        recommendedTreatments: [
            'gradient-text',
            'holographic',
            'neon'
        ]
    },
    geometric: {
        id: 'geometric',
        name: 'Geometric Shapes',
        description: 'Bold geometric patterns with depth and modern aesthetics',
        background: {
            type: 'isometric-grid',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 1
        },
        layout: {
            position: 'left',
            maxWidth: 70
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '48px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'square',
            numberPosition: 'top-left',
            accentLines: true,
            accentLinePosition: 'left',
            border: true,
            borderStyle: 'dashed',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: true
        },
        compatibleWith: [
            'title',
            'content',
            'bullets'
        ],
        recommendedTreatments: [
            '3d-block',
            'stroke-gradient',
            'glitch'
        ]
    },
    pattern: {
        id: 'pattern',
        name: 'Pattern Overlay',
        description: 'Subtle pattern overlays with texture and depth',
        background: {
            type: 'noise',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 80
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '32px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'decimal',
            numberPosition: 'bottom-left',
            accentLines: true,
            accentLinePosition: 'both',
            border: true,
            borderStyle: 'dotted',
            cornerAccents: false
        },
        effects: {
            shadow: false,
            glow: false,
            blur: false,
            noise: true
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'quote'
        ],
        recommendedTreatments: [
            'glass',
            'pattern-fill',
            'outline'
        ]
    },
    modern: {
        id: 'modern',
        name: 'Modern Tech',
        description: 'Contemporary tech-inspired design with glass effects',
        background: {
            type: 'glass-gradient',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 0.9
        },
        layout: {
            position: 'split-horizontal',
            maxWidth: 90
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'circle',
            numberPosition: 'top-right',
            accentLines: true,
            accentLinePosition: 'both',
            border: true,
            borderStyle: 'dashed',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: true,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'cta'
        ],
        recommendedTreatments: [
            'neon',
            'glass',
            'holographic'
        ]
    },
    bold: {
        id: 'bold',
        name: 'Bold Statement',
        description: 'High-impact design with large typography and depth',
        background: {
            type: 'solid',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 95
        },
        typography: {
            headlineSize: '84px',
            subtextSize: '56px',
            bulletSize: '32px',
            spacing: '48px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'square',
            numberPosition: 'top-left',
            accentLines: true,
            accentLinePosition: 'top',
            border: true,
            borderStyle: 'double',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'cta'
        ],
        recommendedTreatments: [
            '3d-block',
            'stroke-gradient',
            'outline'
        ]
    },
    elegant: {
        id: 'elegant',
        name: 'Elegant Serif',
        description: 'Sophisticated design with refined typography and gradients',
        background: {
            type: 'gradient-mesh',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 75
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'roman',
            numberPosition: 'bottom-right',
            accentLines: true,
            accentLinePosition: 'bottom',
            border: true,
            borderStyle: 'gradient',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: false,
            blur: true,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'quote',
            'cta'
        ],
        recommendedTreatments: [
            'gradient-text',
            'glass',
            'stroke-gradient'
        ]
    },
    playful: {
        id: 'playful',
        name: 'Playful Creative',
        description: 'Fun, creative design with holographic effects',
        background: {
            type: 'holographic',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 1
        },
        layout: {
            position: 'diagonal',
            maxWidth: 85
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '32px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'circle',
            numberPosition: 'top-left',
            accentLines: true,
            accentLinePosition: 'both',
            border: false,
            borderStyle: 'dotted',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'cta'
        ],
        recommendedTreatments: [
            'holographic',
            'glitch',
            'pattern-fill'
        ]
    },
    // ===== NEW TEMPLATES =====
    glassmorphism: {
        id: 'glassmorphism',
        name: 'Glassmorphism',
        description: 'Frosted glass effect with backdrop blur and transparency',
        background: {
            type: 'glass-gradient',
            primary: '#0F172A',
            opacity: 0.8
        },
        layout: {
            position: 'center',
            maxWidth: 80
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'circle',
            numberPosition: 'top-right',
            accentLines: true,
            accentLinePosition: 'both',
            border: true,
            borderStyle: 'solid',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: false,
            blur: true,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'quote',
            'cta'
        ],
        recommendedTreatments: [
            'glass',
            'holographic',
            'gradient-text'
        ]
    },
    cyberpunk: {
        id: 'cyberpunk',
        name: 'Cyberpunk',
        description: 'Neon and glitch aesthetic with grid patterns',
        background: {
            type: 'cyber-grid',
            primary: '#0F172A',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 85
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'square',
            numberPosition: 'top-left',
            accentLines: true,
            accentLinePosition: 'both',
            border: true,
            borderStyle: 'dashed',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: true
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'cta'
        ],
        recommendedTreatments: [
            'neon',
            'glitch',
            'holographic'
        ]
    },
    'swiss-minimal': {
        id: 'swiss-minimal',
        name: 'Swiss Minimal',
        description: 'Swiss design principles with grid and geometric shapes',
        background: {
            type: 'solid',
            primary: '#F5F5F5',
            secondary: '#E5E5E5',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 75
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '48px',
            textColor: '#000000',
            subtextColor: '#333333'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'decimal',
            numberPosition: 'bottom-right',
            accentLines: true,
            accentLinePosition: 'top',
            border: true,
            borderStyle: 'solid',
            borderColor: '#000000',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: false,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'quote'
        ],
        recommendedTreatments: [
            'outline',
            'stroke-gradient',
            '3d-block'
        ]
    },
    brutalist: {
        id: 'brutalist',
        name: 'Brutalist',
        description: 'Raw and bold aesthetic with thick borders and high contrast',
        background: {
            type: 'solid',
            primary: '#000000',
            opacity: 1
        },
        layout: {
            position: 'left',
            maxWidth: 90
        },
        typography: {
            headlineSize: '84px',
            subtextSize: '56px',
            bulletSize: '32px',
            spacing: '48px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'square',
            numberPosition: 'top-left',
            accentLines: true,
            accentLinePosition: 'top',
            border: true,
            borderStyle: 'solid',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: false,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'cta'
        ],
        recommendedTreatments: [
            '3d-block',
            'stroke-gradient',
            'outline'
        ]
    },
    'gradient-mesh': {
        id: 'gradient-mesh',
        name: 'Gradient Mesh',
        description: 'Complex gradient backgrounds with overlapping radial gradients',
        background: {
            type: 'gradient-mesh',
            primary: '#0F172A',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 85
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'circle',
            numberPosition: 'top-right',
            accentLines: false,
            accentLinePosition: 'none',
            border: false,
            borderStyle: 'solid',
            cornerAccents: false
        },
        effects: {
            shadow: false,
            glow: false,
            blur: true,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'quote'
        ],
        recommendedTreatments: [
            'holographic',
            'gradient-text',
            'glass'
        ]
    },
    'isometric-3d': {
        id: 'isometric-3d',
        name: 'Isometric 3D',
        description: '3D perspective design with isometric grid and depth',
        background: {
            type: 'isometric-grid',
            primary: '#0F172A',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 80
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'square',
            numberPosition: 'top-left',
            accentLines: true,
            accentLinePosition: 'left',
            border: true,
            borderStyle: 'solid',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets'
        ],
        recommendedTreatments: [
            '3d-block',
            'neon',
            'outline'
        ]
    },
    holographic: {
        id: 'holographic',
        name: 'Holographic',
        description: 'Iridescent effect with conic gradients and blend modes',
        background: {
            type: 'holographic',
            primary: '#0F172A',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 85
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'circle',
            numberPosition: 'top-right',
            accentLines: true,
            accentLinePosition: 'both',
            border: true,
            borderStyle: 'gradient',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'cta'
        ],
        recommendedTreatments: [
            'holographic',
            'neon',
            'gradient-text'
        ]
    },
    vaporwave: {
        id: 'vaporwave',
        name: 'Vaporwave',
        description: '80s/90s retro aesthetic with sunset gradients and scanlines',
        background: {
            type: 'vaporwave',
            primary: '#0F172A',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 85
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'circle',
            numberPosition: 'top-right',
            accentLines: true,
            accentLinePosition: 'both',
            border: true,
            borderStyle: 'solid',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: true
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'cta'
        ],
        recommendedTreatments: [
            'neon',
            'gradient-text',
            'holographic'
        ]
    },
    editorial: {
        id: 'editorial',
        name: 'Editorial',
        description: 'Elegant magazine style with serif fonts and generous whitespace',
        background: {
            type: 'gradient',
            primary: '#0F172A',
            secondary: '#1E293B',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 70
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '48px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'roman',
            numberPosition: 'bottom-right',
            accentLines: true,
            accentLinePosition: 'bottom',
            border: true,
            borderStyle: 'solid',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: false,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'quote',
            'cta'
        ],
        recommendedTreatments: [
            'outline',
            'gradient-text',
            'reflection'
        ]
    },
    'tech-data': {
        id: 'tech-data',
        name: 'Tech Data',
        description: 'Code and data aesthetic with monospace fonts and grid lines',
        background: {
            type: 'scanlines',
            primary: '#0F172A',
            opacity: 1
        },
        layout: {
            position: 'left',
            maxWidth: 85
        },
        typography: {
            headlineSize: '68px',
            subtextSize: '44px',
            bulletSize: '26px',
            spacing: '32px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'decimal',
            numberPosition: 'top-right',
            accentLines: true,
            accentLinePosition: 'left',
            border: true,
            borderStyle: 'dashed',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets'
        ],
        recommendedTreatments: [
            'neon',
            'stroke-gradient',
            '3d-block'
        ]
    },
    organic: {
        id: 'organic',
        name: 'Organic',
        description: 'Natural and soft aesthetic with soft gradients and rounded borders',
        background: {
            type: 'gradient',
            primary: '#1C1917',
            secondary: '#292524',
            opacity: 1
        },
        layout: {
            position: 'center',
            maxWidth: 80
        },
        typography: {
            headlineSize: '72px',
            subtextSize: '48px',
            bulletSize: '28px',
            spacing: '40px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'circle',
            numberPosition: 'top-right',
            accentLines: true,
            accentLinePosition: 'both',
            border: true,
            borderStyle: 'solid',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: false,
            blur: true,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'bullets',
            'quote'
        ],
        recommendedTreatments: [
            'glass',
            'gradient-text',
            'holographic'
        ]
    },
    'abstract-art': {
        id: 'abstract-art',
        name: 'Abstract Art',
        description: 'Bold artistic compositions with bold colors and abstract shapes',
        background: {
            type: 'gradient-mesh',
            primary: '#0F172A',
            opacity: 1
        },
        layout: {
            position: 'diagonal',
            maxWidth: 90
        },
        typography: {
            headlineSize: '84px',
            subtextSize: '56px',
            bulletSize: '32px',
            spacing: '48px'
        },
        decorators: {
            showSlideNumber: true,
            slideNumberStyle: 'square',
            numberPosition: 'top-left',
            accentLines: true,
            accentLinePosition: 'both',
            border: false,
            borderStyle: 'solid',
            cornerAccents: true
        },
        effects: {
            shadow: true,
            glow: true,
            blur: false,
            noise: false
        },
        compatibleWith: [
            'title',
            'content',
            'cta'
        ],
        recommendedTreatments: [
            'glitch',
            'holographic',
            '3d-block'
        ]
    }
};
function getStyleTemplate(id) {
    return styleTemplates[id];
}
function getAllStyleTemplates() {
    return Object.values(styleTemplates);
}
function getTemplateDecoratorSuggestions(templateId) {
    return TEMPLATE_DECORATOR_SUGGESTIONS[templateId] || {};
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/decorators/corner-symbols.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Corner Symbol Library
 *
 * A comprehensive collection of 30+ corner symbols organized by category:
 * - Geometric: Basic shapes and patterns
 * - Decorative: Ornamental and artistic elements
 * - Tech: Modern, futuristic, and technical symbols
 * - Nature: Organic and natural elements
 *
 * Each symbol is defined as an SVG path string that can be rendered
 * at any corner position (top-left, top-right, bottom-left, bottom-right)
 */ __turbopack_context__.s([
    "CORNER_SYMBOLS",
    ()=>CORNER_SYMBOLS,
    "DECORATIVE_SYMBOLS",
    ()=>DECORATIVE_SYMBOLS,
    "GEOMETRIC_SYMBOLS",
    ()=>GEOMETRIC_SYMBOLS,
    "NATURE_SYMBOLS",
    ()=>NATURE_SYMBOLS,
    "SYMBOL_CATEGORIES",
    ()=>SYMBOL_CATEGORIES,
    "TECH_SYMBOLS",
    ()=>TECH_SYMBOLS,
    "getSymbolById",
    ()=>getSymbolById,
    "getSymbolsByCategory",
    ()=>getSymbolsByCategory
]);
const GEOMETRIC_SYMBOLS = [
    {
        id: 'geometric-bracket',
        name: 'Bracket',
        category: 'geometric',
        path: 'M0,0 L40,0 L40,10 L10,10 L10,40 L0,40 Z',
        description: 'Classic L-shaped bracket corner'
    },
    {
        id: 'geometric-triangle',
        name: 'Triangle',
        category: 'geometric',
        path: 'M0,0 L40,0 L0,40 Z',
        description: 'Simple right triangle'
    },
    {
        id: 'geometric-double-bracket',
        name: 'Double Bracket',
        category: 'geometric',
        path: 'M0,0 L35,0 L35,8 L8,8 L8,35 L0,35 Z M8,8 L40,8 L40,40 L35,40 L35,15 L15,15 L15,40 L8,40 Z',
        description: 'Nested L-brackets'
    },
    {
        id: 'geometric-chevron',
        name: 'Chevron',
        category: 'geometric',
        path: 'M0,40 L20,20 L0,0 L8,0 L28,20 L8,40 Z',
        description: 'V-shaped chevron pointing inward'
    },
    {
        id: 'geometric-diamond',
        name: 'Diamond',
        category: 'geometric',
        path: 'M20,0 L40,20 L20,40 L0,20 Z',
        description: 'Four-sided diamond shape'
    },
    {
        id: 'geometric-hexagon',
        name: 'Hexagon',
        category: 'geometric',
        path: 'M20,0 L40,10 L40,30 L20,40 L0,30 L0,10 Z',
        description: 'Six-sided hexagon'
    },
    {
        id: 'geometric-octagon',
        name: 'Octagon',
        category: 'geometric',
        path: 'M10,0 L30,0 L40,10 L40,30 L30,40 L10,40 L0,30 L0,10 Z',
        description: 'Eight-sided octagon'
    },
    {
        id: 'geometric-star',
        name: 'Star',
        category: 'geometric',
        path: 'M20,0 L25,15 L40,15 L28,25 L32,40 L20,30 L8,40 L12,25 L0,15 L15,15 Z',
        description: 'Five-pointed star'
    }
];
const DECORATIVE_SYMBOLS = [
    {
        id: 'decorative-flourish',
        name: 'Flourish',
        category: 'decorative',
        path: 'M0,0 C10,0 20,5 25,15 C30,25 35,30 40,30 C35,30 30,25 25,15 C20,5 10,0 0,0 Z',
        description: 'Elegant curved flourish'
    },
    {
        id: 'decorative-scroll',
        name: 'Scroll',
        category: 'decorative',
        path: 'M0,0 Q20,0 20,20 Q20,40 40,40 Q20,40 20,20 Q20,0 0,0 Z',
        description: 'Classic scrollwork pattern'
    },
    {
        id: 'decorative-ornament',
        name: 'Ornament',
        category: 'decorative',
        path: 'M0,0 C5,0 10,5 10,10 C10,15 15,20 20,20 C25,20 30,15 30,10 C30,5 35,0 40,0 C35,0 30,5 30,10 C30,15 25,20 20,20 C15,20 10,15 10,10 C10,5 5,0 0,0 Z',
        description: 'Victorian-style ornament'
    },
    {
        id: 'decorative-vine',
        name: 'Vine',
        category: 'decorative',
        path: 'M0,40 C10,30 15,20 15,15 C15,10 20,5 25,5 C30,5 35,10 35,15 C35,20 40,25 40,30 C40,20 35,15 35,10 C35,5 30,0 25,0 C20,0 15,5 15,10 C15,15 10,25 0,35 Z',
        description: 'Organic vine with leaves'
    },
    {
        id: 'decorative-fleur-de-lis',
        name: 'Fleur-de-lis',
        category: 'decorative',
        path: 'M20,0 L20,10 C25,10 30,15 30,20 C30,25 25,30 20,30 C15,30 10,25 10,20 C10,15 15,10 20,10 L20,0 Z M20,30 L20,40 M10,40 L30,40',
        description: 'Classic fleur-de-lis symbol'
    },
    {
        id: 'decorative-ribbon',
        name: 'Ribbon',
        category: 'decorative',
        path: 'M0,0 L10,0 L15,10 L20,0 L30,0 L20,20 L30,40 L20,40 L15,30 L10,40 L0,40 L10,20 Z',
        description: 'Flowing ribbon design'
    },
    {
        id: 'decorative-lace',
        name: 'Lace',
        category: 'decorative',
        path: 'M0,0 L5,0 L10,10 L15,0 L20,0 L25,10 L30,0 L35,0 L40,0 L40,5 L30,20 L40,35 L40,40 L35,40 L30,30 L25,40 L20,40 L15,30 L10,40 L5,40 L0,40 L0,35 L10,20 L0,5 Z',
        description: 'Intricate lace pattern'
    },
    {
        id: 'decorative-crown',
        name: 'Crown',
        category: 'decorative',
        path: 'M0,40 L0,25 L10,25 L15,15 L20,25 L25,15 L30,25 L40,25 L40,40 Z',
        description: 'Royal crown design'
    }
];
const TECH_SYMBOLS = [
    {
        id: 'tech-circuit',
        name: 'Circuit',
        category: 'tech',
        path: 'M0,0 L20,0 L20,10 L30,10 L30,20 L40,20 L40,30 L30,30 L30,40 L20,40 L20,30 L10,30 L10,20 L0,20 Z M20,20 L25,20 M15,20 L15,25 M25,20 L25,15 M15,20 L15,15',
        description: 'Electronic circuit pattern'
    },
    {
        id: 'tech-matrix',
        name: 'Matrix',
        category: 'tech',
        path: 'M0,0 L10,0 L10,10 L20,10 L20,0 L30,0 L30,10 L40,10 L40,20 L30,20 L30,30 L40,30 L40,40 L30,40 L30,30 L20,30 L20,40 L10,40 L10,30 L0,30 L0,20 L10,20 L10,10 L0,10 Z',
        description: 'Digital matrix grid'
    },
    {
        id: 'tech-cyber',
        name: 'Cyber',
        category: 'tech',
        path: 'M0,0 L15,0 L15,10 L25,10 L25,0 L40,0 L40,15 L30,15 L30,25 L40,25 L40,40 L25,40 L25,30 L15,30 L15,40 L0,40 L0,25 L10,25 L10,15 L0,15 Z M20,20 L15,15 M20,20 L25,15 M20,20 L15,25 M20,20 L25,25',
        description: 'Cyberpunk angular design'
    },
    {
        id: 'tech-data',
        name: 'Data',
        category: 'tech',
        path: 'M0,0 L10,0 L10,40 L0,40 Z M15,0 L25,0 L25,40 L15,40 Z M30,0 L40,0 L40,40 L30,40 Z',
        description: 'Data storage bars'
    },
    {
        id: 'tech-antenna',
        name: 'Antenna',
        category: 'tech',
        path: 'M0,40 L0,30 L10,30 L10,40 Z M20,40 L20,20 C25,20 30,15 30,10 C30,5 25,0 20,0 C15,0 10,5 10,10 C10,15 15,20 20,20 L20,40 Z M30,40 L30,30 L40,30 L40,40 Z',
        description: 'Broadcast antenna'
    },
    {
        id: 'tech-hex-grid',
        name: 'Hex Grid',
        category: 'tech',
        path: 'M0,0 L10,0 L15,8 L10,16 L0,16 L-5,8 Z M15,8 L25,8 L30,16 L25,24 L15,24 L10,16 Z M30,16 L40,16 L45,24 L40,32 L30,32 L25,24 Z M0,16 L10,16 L15,24 L10,32 L0,32 L-5,24 Z M15,24 L25,24 L30,32 L25,40 L15,40 L10,32 Z',
        description: 'Hexagonal honeycomb pattern'
    },
    {
        id: 'tech-pulse',
        name: 'Pulse',
        category: 'tech',
        path: 'M0,20 L10,20 L15,10 L20,30 L25,20 L40,20 M20,30 L20,40 M20,10 L20,0',
        description: 'Electrical pulse waveform'
    },
    {
        id: 'tech-satellite',
        name: 'Satellite',
        category: 'tech',
        path: 'M20,0 L20,10 C30,10 40,15 40,20 C40,25 30,30 20,30 L20,40 L15,40 L15,30 C5,30 0,25 0,20 C0,15 5,10 15,10 L15,0 Z M20,15 L20,25 M15,20 L25,20',
        description: 'Satellite dish design'
    }
];
const NATURE_SYMBOLS = [
    {
        id: 'nature-leaf',
        name: 'Leaf',
        category: 'nature',
        path: 'M0,40 Q20,40 20,20 Q20,0 40,0 Q20,0 20,20 Q20,40 0,40 Z M20,20 L20,40',
        description: 'Simple leaf shape'
    },
    {
        id: 'nature-branch',
        name: 'Branch',
        category: 'nature',
        path: 'M0,40 C10,30 15,20 15,15 C15,10 20,5 30,5 C35,5 40,10 40,15 C40,20 35,25 30,25 C25,25 20,20 20,15 C20,10 25,5 30,5 M15,15 L10,20 M25,15 L30,20',
        description: 'Tree branch with twigs'
    },
    {
        id: 'nature-flower',
        name: 'Flower',
        category: 'nature',
        path: 'M20,20 L20,10 C25,10 30,15 30,20 C30,25 25,30 20,30 C15,30 10,25 10,20 C10,15 15,10 20,10 Z M20,20 L10,10 M20,20 L30,10 M20,20 L10,30 M20,20 L30,30 M20,20 L20,40',
        description: 'Four-petal flower'
    },
    {
        id: 'nature-wave',
        name: 'Wave',
        category: 'nature',
        path: 'M0,40 Q10,30 20,30 Q30,30 40,20 Q30,10 20,10 Q10,10 0,20 Z M0,20 Q10,10 20,10 Q30,10 40,0',
        description: 'Ocean wave pattern'
    },
    {
        id: 'nature-sun',
        name: 'Sun',
        category: 'nature',
        path: 'M20,20 L20,5 M20,20 L35,20 M20,20 L20,35 M20,20 L5,20 M20,20 L30,10 M20,20 L30,30 M20,20 L10,30 M20,20 L10,10',
        description: 'Radiating sun rays'
    },
    {
        id: 'nature-mountain',
        name: 'Mountain',
        category: 'nature',
        path: 'M0,40 L10,20 L20,30 L30,10 L40,40 Z M10,40 L10,30 L15,35 L20,30 L25,35 L30,30 L30,40 Z',
        description: 'Mountain range silhouette'
    },
    {
        id: 'nature-shell',
        name: 'Shell',
        category: 'nature',
        path: 'M0,40 C5,40 10,35 15,30 C20,25 25,20 30,15 C35,10 40,5 40,0 C35,5 30,10 25,15 C20,20 15,25 10,30 C5,35 0,40 0,40 Z',
        description: 'Spiral seashell'
    },
    {
        id: 'nature-butterfly',
        name: 'Butterfly',
        category: 'nature',
        path: 'M20,20 L20,10 C15,10 10,15 10,20 C10,25 15,30 20,30 C25,30 30,25 30,20 C30,15 25,10 20,10 Z M20,20 L10,5 M20,20 L30,5 M20,20 L10,35 M20,20 L30,35 M20,20 L20,40',
        description: 'Butterfly wings'
    }
];
const CORNER_SYMBOLS = [
    ...GEOMETRIC_SYMBOLS,
    ...DECORATIVE_SYMBOLS,
    ...TECH_SYMBOLS,
    ...NATURE_SYMBOLS
];
function getSymbolsByCategory(category) {
    return CORNER_SYMBOLS.filter((symbol)=>symbol.category === category);
}
function getSymbolById(id) {
    return CORNER_SYMBOLS.find((symbol)=>symbol.id === id);
}
const SYMBOL_CATEGORIES = [
    'geometric',
    'decorative',
    'tech',
    'nature'
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/decorators/presets.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Decorator Presets
 *
 * Pre-defined decorator configurations that users can quickly apply.
 * Each preset represents a specific design aesthetic or use case.
 *
 * Presets:
 * - minimal: Clean, uncluttered design with minimal decorators
 * - professional: Balanced design suitable for business content
 * - bold: High-impact design with strong visual elements
 * - creative: Artistic design with expressive decorators
 */ __turbopack_context__.s([
    "DECORATOR_PRESETS",
    ()=>DECORATOR_PRESETS,
    "applyDecoratorPreset",
    ()=>applyDecoratorPreset,
    "getDecoratorPreset",
    ()=>getDecoratorPreset,
    "getPresetsByCategory",
    ()=>getPresetsByCategory
]);
const DECORATOR_PRESETS = [
    {
        id: 'minimal',
        name: 'Minimal',
        description: 'Clean, uncluttered design with minimal decorators',
        category: 'minimal',
        config: {
            slideNumber: {
                enabled: true,
                style: 'minimal',
                position: 'bottom-right',
                size: 36,
                showBackground: false
            },
            border: {
                enabled: false,
                style: 'solid',
                thickness: 6,
                position: 'full'
            },
            hashtag: {
                enabled: false,
                position: 'top-left',
                size: 32
            },
            watermark: {
                enabled: false,
                x: 75,
                y: 75
            },
            logo: {
                enabled: true,
                position: 'top-right',
                size: 60,
                opacity: 0.9
            },
            frame: {
                enabled: false,
                style: 'minimal'
            },
            cornerAccents: {
                enabled: false
            },
            accentLines: {
                enabled: false,
                positions: {}
            }
        }
    },
    {
        id: 'professional',
        name: 'Professional',
        description: 'Balanced design suitable for business content',
        category: 'professional',
        config: {
            slideNumber: {
                enabled: true,
                style: 'decimal',
                position: 'bottom-right',
                size: 48,
                showBackground: true
            },
            border: {
                enabled: true,
                style: 'solid',
                thickness: 4,
                position: 'top-bottom'
            },
            hashtag: {
                enabled: true,
                position: 'top-left',
                size: 28,
                showBackground: true
            },
            watermark: {
                enabled: true,
                x: 75,
                y: 75,
                opacity: 0.25,
                size: 80,
                rotation: -45
            },
            logo: {
                enabled: true,
                position: 'top-right',
                size: 80,
                opacity: 1
            },
            frame: {
                enabled: false,
                style: 'minimal'
            },
            cornerAccents: {
                enabled: true,
                topLeft: {
                    enabled: true,
                    style: 'bracket',
                    size: 40,
                    thickness: 6,
                    rotation: 0,
                    effects: {
                        shadow: true,
                        glow: false,
                        blur: false
                    }
                },
                topRight: {
                    enabled: true,
                    style: 'bracket',
                    size: 40,
                    thickness: 6,
                    rotation: 0,
                    effects: {
                        shadow: true,
                        glow: false,
                        blur: false
                    }
                },
                bottomLeft: {
                    enabled: false,
                    style: 'bracket',
                    size: 40,
                    thickness: 6,
                    rotation: 0,
                    effects: {
                        shadow: true,
                        glow: false,
                        blur: false
                    }
                },
                bottomRight: {
                    enabled: true,
                    style: 'bracket',
                    size: 40,
                    thickness: 6,
                    rotation: 0,
                    effects: {
                        shadow: true,
                        glow: false,
                        blur: false
                    }
                }
            },
            accentLines: {
                enabled: true,
                positions: {
                    bottom: {
                        enabled: true,
                        offset: 40,
                        thickness: 3,
                        length: 60,
                        gradient: true
                    }
                }
            }
        }
    },
    {
        id: 'bold',
        name: 'Bold',
        description: 'High-impact design with strong visual elements',
        category: 'bold',
        config: {
            slideNumber: {
                enabled: true,
                style: 'circle',
                position: 'bottom-right',
                size: 64,
                showBackground: true
            },
            border: {
                enabled: true,
                style: 'double',
                thickness: 8,
                position: 'full',
                cornerRadius: 16
            },
            hashtag: {
                enabled: true,
                position: 'top-left',
                size: 36,
                showBackground: true
            },
            watermark: {
                enabled: true,
                x: 50,
                y: 50,
                opacity: 0.15,
                size: 150,
                rotation: -45
            },
            logo: {
                enabled: true,
                position: 'top-right',
                size: 100,
                opacity: 1
            },
            frame: {
                enabled: true,
                style: 'tech',
                thickness: 12,
                innerPadding: 16
            },
            cornerAccents: {
                enabled: true,
                topLeft: {
                    enabled: true,
                    style: 'triangle',
                    size: 56,
                    thickness: 10,
                    rotation: 0,
                    effects: {
                        shadow: true,
                        glow: true,
                        blur: false
                    }
                },
                topRight: {
                    enabled: true,
                    style: 'triangle',
                    size: 56,
                    thickness: 10,
                    rotation: 0,
                    effects: {
                        shadow: true,
                        glow: true,
                        blur: false
                    }
                },
                bottomLeft: {
                    enabled: true,
                    style: 'triangle',
                    size: 56,
                    thickness: 10,
                    rotation: 180,
                    effects: {
                        shadow: true,
                        glow: true,
                        blur: false
                    }
                },
                bottomRight: {
                    enabled: true,
                    style: 'triangle',
                    size: 56,
                    thickness: 10,
                    rotation: 180,
                    effects: {
                        shadow: true,
                        glow: true,
                        blur: false
                    }
                }
            },
            accentLines: {
                enabled: true,
                positions: {
                    top: {
                        enabled: true,
                        offset: 40,
                        thickness: 6,
                        length: 100,
                        gradient: true
                    },
                    bottom: {
                        enabled: true,
                        offset: 40,
                        thickness: 6,
                        length: 100,
                        gradient: true
                    },
                    left: {
                        enabled: true,
                        offset: 40,
                        thickness: 4,
                        length: 80,
                        gradient: false
                    },
                    right: {
                        enabled: true,
                        offset: 40,
                        thickness: 4,
                        length: 80,
                        gradient: false
                    }
                }
            }
        }
    },
    {
        id: 'creative',
        name: 'Creative',
        description: 'Artistic design with expressive decorators',
        category: 'creative',
        config: {
            slideNumber: {
                enabled: true,
                style: 'roman',
                position: 'bottom-left',
                size: 56,
                showBackground: false
            },
            border: {
                enabled: true,
                style: 'dashed',
                thickness: 5,
                position: 'corners'
            },
            hashtag: {
                enabled: true,
                position: 'top-right',
                size: 32,
                showBackground: false
            },
            watermark: {
                enabled: true,
                x: 25,
                y: 75,
                opacity: 0.2,
                size: 120,
                rotation: 30
            },
            logo: {
                enabled: true,
                position: 'top-left',
                size: 90,
                opacity: 0.95,
                blendMode: 'overlay'
            },
            frame: {
                enabled: true,
                style: 'photo',
                thickness: 16,
                innerPadding: 24
            },
            cornerAccents: {
                enabled: true,
                topLeft: {
                    enabled: true,
                    style: 'star',
                    size: 48,
                    thickness: 8,
                    rotation: 0,
                    effects: {
                        shadow: false,
                        glow: true,
                        blur: true
                    }
                },
                topRight: {
                    enabled: true,
                    style: 'circle',
                    size: 48,
                    thickness: 6,
                    rotation: 0,
                    effects: {
                        shadow: false,
                        glow: true,
                        blur: true
                    }
                },
                bottomLeft: {
                    enabled: true,
                    style: 'diamond',
                    size: 48,
                    thickness: 8,
                    rotation: 45,
                    effects: {
                        shadow: false,
                        glow: true,
                        blur: true
                    }
                },
                bottomRight: {
                    enabled: true,
                    style: 'wave',
                    size: 48,
                    thickness: 6,
                    rotation: 0,
                    effects: {
                        shadow: false,
                        glow: true,
                        blur: true
                    }
                }
            },
            accentLines: {
                enabled: true,
                positions: {
                    top: {
                        enabled: true,
                        offset: 50,
                        thickness: 4,
                        length: 70,
                        gradient: true
                    },
                    bottom: {
                        enabled: true,
                        offset: 50,
                        thickness: 4,
                        length: 70,
                        gradient: true
                    }
                }
            }
        }
    }
];
function getDecoratorPreset(id) {
    return DECORATOR_PRESETS.find((preset)=>preset.id === id);
}
function applyDecoratorPreset(currentConfig, presetId) {
    const preset = getDecoratorPreset(presetId);
    if (!preset) {
        console.warn(`Decorator preset "${presetId}" not found`);
        return currentConfig;
    }
    // Merge preset with current config (preset takes precedence for defined values)
    // We preserve the structure of currentConfig and override with preset values
    const result = {
        ...currentConfig,
        ...preset.config
    };
    return result;
}
function getPresetsByCategory(category) {
    return DECORATOR_PRESETS.filter((preset)=>preset.category === category);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SOCIAL_ICONS",
    ()=>SOCIAL_ICONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const SOCIAL_ICONS = {
    instagram: {
        id: 'instagram',
        type: 'social',
        name: 'instagram',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "2",
                        width: "20",
                        height: "20",
                        rx: "5",
                        ry: "5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "17.5",
                        y1: "6.5",
                        x2: "17.51",
                        y2: "6.5"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                        lineNumber: 13,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    linkedin: {
        id: 'linkedin',
        type: 'social',
        name: 'linkedin',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("rect", {
                        x: "2",
                        y: "9",
                        width: "4",
                        height: "12"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "4",
                        cy: "4",
                        r: "2"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    twitter: {
        id: 'twitter',
        type: 'social',
        name: 'twitter',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
    },
    tiktok: {
        id: 'tiktok',
        type: 'social',
        name: 'tiktok',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                    lineNumber: 45,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
    },
    youtube: {
        id: 'youtube',
        type: 'social',
        name: 'youtube',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2.18C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2.18C1 8.34 1 12 1 12s0 3.66.46 5.58a2.78 2.78 0 0 0 1.94 2.18c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2.18C23 15.66 23 12 23 12s0-3.66-.46-5.58zM9.75 15.02l5.75-3.27-5.75-3.27v6.54z"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                    lineNumber: 55,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
    },
    facebook: {
        id: 'facebook',
        type: 'social',
        name: 'facebook',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx",
                    lineNumber: 65,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "REACTION_ICONS",
    ()=>REACTION_ICONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const REACTION_ICONS = {
    heart: {
        id: 'heart',
        type: 'reaction',
        name: 'heart',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 0 5.5 5.5 0 0 0 0 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                lineNumber: 10,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    fire: {
        id: 'fire',
        type: 'reaction',
        name: 'fire',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                d: "M8.5 14.5A2.5 2.5 0 0 0 6 12c0 1.5.5 3 1.5 4.5a5.5 5.5 0 0 0 7 5.5c0 .5.5 1 1 1.5 1.5a5.5 5.5 0 0 0 7 5.5c0 .5-.5 1-1 1.5-1.5A2.5 2.5 0 0 0 8.5 14.5Z"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                lineNumber: 18,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    sparkle: {
        id: 'sparkle',
        type: 'reaction',
        name: 'sparkle',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M12 3v3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m5.6 5.6 2.1 2.1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18.4 5.6-2.1 2.1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                        lineNumber: 29,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 12h-3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                        lineNumber: 30,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M18.4 18.4l-2.1-2.1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                        lineNumber: 31,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "m5.6 18.4 2.1-2.1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M3 12h3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                        lineNumber: 33,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "12",
                        cy: "12",
                        r: "1"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    star: {
        id: 'star',
        type: 'reaction',
        name: 'star',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polygon", {
                points: "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    thumbsUp: {
        id: 'thumbsUp',
        type: 'reaction',
        name: 'thumbsUp',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "UI_ICONS",
    ()=>UI_ICONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
const UI_ICONS = {
    arrowRight: {
        id: 'arrowRight',
        type: 'ui',
        name: 'arrowRight',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "5",
                        y1: "12",
                        x2: "19",
                        y2: "12"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "12 5 19 12 12 19"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 12,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    download: {
        id: 'download',
        type: 'ui',
        name: 'download',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 22,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                        points: "7 10 12 15 17 10"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 23,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "12",
                        y1: "15",
                        x2: "12",
                        y2: "3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    link: {
        id: 'link',
        type: 'ui',
        name: 'link',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 34,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                        d: "M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    share: {
        id: 'share',
        type: 'ui',
        name: 'share',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "18",
                        cy: "5",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 45,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "6",
                        cy: "12",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        cx: "18",
                        cy: "19",
                        r: "3"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "8.59",
                        y1: "13.51",
                        x2: "15.42",
                        y2: "17.49"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 48,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "15.41",
                        y1: "6.51",
                        x2: "8.59",
                        y2: "10.49"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 49,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    comment: {
        id: 'comment',
        type: 'ui',
        name: 'comment',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                    d: "M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
                }, void 0, false, {
                    fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false)
    },
    menu: {
        id: 'menu',
        type: 'ui',
        name: 'menu',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "4",
                        y1: "6",
                        x2: "20",
                        y2: "6"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 69,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "4",
                        y1: "12",
                        x2: "20",
                        y2: "12"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 70,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "4",
                        y1: "18",
                        x2: "20",
                        y2: "18"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 71,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    close: {
        id: 'close',
        type: 'ui',
        name: 'close',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "18",
                        y1: "6",
                        x2: "6",
                        y2: "18"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 81,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                        x1: "6",
                        y1: "6",
                        x2: "18",
                        y2: "18"
                    }, void 0, false, {
                        fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                        lineNumber: 82,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true)
    },
    check: {
        id: 'check',
        type: 'ui',
        name: 'check',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "20 6 9 17 4 12"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    chevronRight: {
        id: 'chevronRight',
        type: 'ui',
        name: 'chevronRight',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "9 18 15 12 9 6"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                lineNumber: 99,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    },
    chevronLeft: {
        id: 'chevronLeft',
        type: 'ui',
        name: 'chevronLeft',
        component: ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                points: "15 18 9 12 15 6"
            }, void 0, false, {
                fileName: "[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx",
                lineNumber: 107,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/index.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ICON_REGISTRY",
    ()=>ICON_REGISTRY,
    "getIcon",
    ()=>getIcon,
    "getReactionIcons",
    ()=>getReactionIcons,
    "getSocialIcons",
    ()=>getSocialIcons,
    "getUIIcons",
    ()=>getUIIcons
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$social$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/social.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$reactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/reactions.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/icons/ui.tsx [app-client] (ecmascript)");
;
;
;
const ICON_REGISTRY = {
    // Social icons
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$social$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL_ICONS"],
    // Reaction icons
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$reactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REACTION_ICONS"],
    // UI icons
    ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI_ICONS"]
};
function getIcon(name) {
    return ICON_REGISTRY[name];
}
function getSocialIcons() {
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$social$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SOCIAL_ICONS"]);
}
function getReactionIcons() {
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$reactions$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["REACTION_ICONS"]);
}
function getUIIcons() {
    return Object.values(__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$icons$2f$ui$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["UI_ICONS"]);
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/decorators/unified.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PILLAR_DECORATOR_CONFIG",
    ()=>PILLAR_DECORATOR_CONFIG,
    "STYLE_TEMPLATE_DECORATORS",
    ()=>STYLE_TEMPLATE_DECORATORS,
    "getPillarDecoratorConfig",
    ()=>getPillarDecoratorConfig
]);
/**
 * Unified Decorator Configuration
 *
 * This file provides pillar-specific decorator configurations that serve as the
 * foundation for all decorator settings. It replaces the old PILLAR_DECORATOR_STYLES
 * system with a more comprehensive and type-safe approach.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/decorators.ts [app-client] (ecmascript)");
;
const PILLAR_DECORATOR_CONFIG = {
    // P1: Empire/Framework - Cyan (#00E5FF) - Cinzel font
    p1: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"],
        slideNumber: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].slideNumber,
            style: 'circle',
            position: 'bottom-right',
            size: 28,
            showBackground: true
        },
        border: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].border,
            enabled: true,
            style: 'solid',
            thickness: 3,
            position: 'full'
        },
        accentLines: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].accentLines,
            enabled: true,
            positions: {
                top: {
                    enabled: true,
                    offset: 40,
                    thickness: 3,
                    length: 80,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 80,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 80,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 80,
                    gradient: false
                }
            }
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'bracket',
                size: 20,
                thickness: 3,
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
                size: 20,
                thickness: 3,
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
                size: 20,
                thickness: 3,
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
                enabled: true,
                style: 'bracket',
                size: 20,
                thickness: 3,
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
        }
    },
    // P2: Capital/Strategy - Amber (#F59E0B) - Inter font
    p2: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"],
        slideNumber: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].slideNumber,
            style: 'square',
            position: 'bottom-right',
            size: 26,
            showBackground: true
        },
        border: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].border,
            enabled: true,
            style: 'dashed',
            thickness: 3,
            position: 'full'
        },
        accentLines: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].accentLines,
            enabled: true,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 100,
                    gradient: false
                },
                bottom: {
                    enabled: true,
                    offset: 40,
                    thickness: 2,
                    length: 100,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 100,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 100,
                    gradient: false
                }
            }
        },
        hashtag: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].hashtag,
            enabled: true,
            text: '#P2Strategy',
            position: 'top-left',
            size: 16,
            showBackground: true
        }
    },
    // P3: Media/Systems - Emerald (#10B981) - JetBrains Mono font
    p3: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"],
        slideNumber: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].slideNumber,
            style: 'decimal',
            position: 'bottom-right',
            size: 24,
            font: 'JetBrains Mono',
            showBackground: false
        },
        border: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].border,
            enabled: true,
            style: 'dotted',
            thickness: 2,
            position: 'corners'
        },
        accentLines: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].accentLines,
            enabled: true,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 60,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 60,
                    gradient: false
                },
                left: {
                    enabled: true,
                    offset: 40,
                    thickness: 2,
                    length: 60,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 60,
                    gradient: false
                }
            }
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: false,
                style: 'triangle',
                size: 16,
                thickness: 3,
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
                style: 'triangle',
                size: 16,
                thickness: 3,
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
                style: 'triangle',
                size: 16,
                thickness: 3,
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
                style: 'triangle',
                size: 16,
                thickness: 3,
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
        hashtag: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].hashtag,
            enabled: true,
            text: '#P3Systems',
            position: 'top-right',
            size: 14,
            showBackground: false
        }
    },
    // P4: Strategy/Capital - Cyan (#06B6D4) - Inter font
    p4: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"],
        slideNumber: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].slideNumber,
            style: 'circle',
            position: 'bottom-right',
            size: 26,
            showBackground: true
        },
        border: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].border,
            enabled: true,
            style: 'solid',
            thickness: 4,
            position: 'full'
        },
        accentLines: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].accentLines,
            enabled: true,
            positions: {
                top: {
                    enabled: true,
                    offset: 40,
                    thickness: 2,
                    length: 90,
                    gradient: false
                },
                bottom: {
                    enabled: true,
                    offset: 40,
                    thickness: 2,
                    length: 90,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 90,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 90,
                    gradient: false
                }
            }
        },
        frame: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].frame,
            enabled: true,
            style: 'tech',
            thickness: 3,
            innerPadding: 12
        }
    },
    // P5: Forge/Vitality - Blue (#2A4B7C) - Georgia font
    p5: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"],
        slideNumber: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].slideNumber,
            style: 'roman',
            position: 'bottom-right',
            size: 28,
            font: 'Georgia',
            showBackground: true
        },
        border: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].border,
            enabled: true,
            style: 'double',
            thickness: 6,
            position: 'full'
        },
        accentLines: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].accentLines,
            enabled: true,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 70,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 70,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 70,
                    gradient: false
                },
                right: {
                    enabled: true,
                    offset: 40,
                    thickness: 3,
                    length: 70,
                    gradient: false
                }
            }
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'line',
                size: 24,
                thickness: 4,
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
                enabled: true,
                style: 'line',
                size: 24,
                thickness: 4,
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
                enabled: true,
                style: 'line',
                size: 24,
                thickness: 4,
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
                enabled: true,
                style: 'line',
                size: 24,
                thickness: 4,
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
        hashtag: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].hashtag,
            enabled: true,
            text: '#P5Vitality',
            position: 'top-left',
            size: 18,
            showBackground: true
        }
    },
    // P6: Vitruvius/Sovereignty - Lavender (#E6E6FA) - Playfair Display font
    p6: {
        ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"],
        slideNumber: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].slideNumber,
            style: 'minimal',
            position: 'bottom-right',
            size: 20,
            font: 'Playfair Display',
            showBackground: false
        },
        border: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].border,
            enabled: false,
            style: 'solid',
            thickness: 2,
            position: 'full'
        },
        accentLines: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].accentLines,
            enabled: false,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 1,
                    length: 50,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 1,
                    length: 50,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 1,
                    length: 50,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 1,
                    length: 50,
                    gradient: false
                }
            }
        },
        watermark: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].watermark,
            enabled: true,
            text: 'Vitruvius',
            x: 75,
            y: 75,
            opacity: 0.2,
            size: 16,
            rotation: -30
        },
        hashtag: {
            ...__TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"].hashtag,
            enabled: true,
            text: '#P6Sovereignty',
            position: 'top-right',
            size: 16,
            showBackground: false
        }
    }
};
function getPillarDecoratorConfig(pillarId) {
    return PILLAR_DECORATOR_CONFIG[pillarId] || __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$decorators$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DEFAULT_DECORATOR_CONFIG"];
}
const STYLE_TEMPLATE_DECORATORS = {
    minimal: {
        border: {
            enabled: false,
            style: 'solid',
            thickness: 2,
            position: 'full'
        },
        accentLines: {
            enabled: false,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 1,
                    length: 50,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 1,
                    length: 50,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 1,
                    length: 50,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 1,
                    length: 50,
                    gradient: false
                }
            }
        },
        cornerAccents: {
            enabled: false
        }
    },
    gradient: {
        border: {
            enabled: false,
            style: 'solid',
            thickness: 2,
            position: 'full'
        },
        accentLines: {
            enabled: true,
            positions: {
                top: {
                    enabled: true,
                    offset: 40,
                    thickness: 2,
                    length: 100,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 100,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 100,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 100,
                    gradient: false
                }
            }
        }
    },
    geometric: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 3,
            position: 'full'
        },
        accentLines: {
            enabled: false,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 50,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 50,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 50,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 50,
                    gradient: false
                }
            }
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'triangle',
                size: 20,
                thickness: 4,
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
                style: 'triangle',
                size: 20,
                thickness: 4,
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
                style: 'triangle',
                size: 20,
                thickness: 4,
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
                enabled: true,
                style: 'triangle',
                size: 20,
                thickness: 4,
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
        }
    },
    pattern: {
        border: {
            enabled: false,
            style: 'dashed',
            thickness: 2,
            position: 'full'
        },
        accentLines: {
            enabled: true,
            positions: {
                top: {
                    enabled: true,
                    offset: 40,
                    thickness: 2,
                    length: 80,
                    gradient: false
                },
                bottom: {
                    enabled: true,
                    offset: 40,
                    thickness: 2,
                    length: 80,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 80,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 80,
                    gradient: false
                }
            }
        }
    },
    modern: {
        border: {
            enabled: true,
            style: 'dashed',
            thickness: 3,
            position: 'full'
        },
        accentLines: {
            enabled: true,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 100,
                    gradient: false
                },
                bottom: {
                    enabled: true,
                    offset: 40,
                    thickness: 3,
                    length: 100,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 100,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 100,
                    gradient: false
                }
            }
        }
    },
    bold: {
        border: {
            enabled: true,
            style: 'double',
            thickness: 6,
            position: 'full'
        },
        accentLines: {
            enabled: true,
            positions: {
                top: {
                    enabled: true,
                    offset: 40,
                    thickness: 4,
                    length: 100,
                    gradient: false
                },
                bottom: {
                    enabled: true,
                    offset: 40,
                    thickness: 4,
                    length: 100,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 4,
                    length: 100,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 4,
                    length: 100,
                    gradient: false
                }
            }
        }
    },
    elegant: {
        border: {
            enabled: true,
            style: 'solid',
            thickness: 2,
            position: 'full'
        },
        accentLines: {
            enabled: false,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 50,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 50,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 50,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 2,
                    length: 50,
                    gradient: false
                }
            }
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'bracket',
                size: 24,
                thickness: 3,
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
                size: 24,
                thickness: 3,
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
                size: 24,
                thickness: 3,
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
                enabled: true,
                style: 'bracket',
                size: 24,
                thickness: 3,
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
        }
    },
    playful: {
        border: {
            enabled: false,
            style: 'dotted',
            thickness: 3,
            position: 'full'
        },
        accentLines: {
            enabled: false,
            positions: {
                top: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 50,
                    gradient: false
                },
                bottom: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 50,
                    gradient: false
                },
                left: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 50,
                    gradient: false
                },
                right: {
                    enabled: false,
                    offset: 40,
                    thickness: 3,
                    length: 50,
                    gradient: false
                }
            }
        },
        cornerAccents: {
            enabled: true,
            topLeft: {
                enabled: true,
                style: 'dot',
                size: 16,
                thickness: 3,
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
                enabled: true,
                style: 'dot',
                size: 16,
                thickness: 3,
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
                enabled: true,
                style: 'dot',
                size: 16,
                thickness: 3,
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
                enabled: true,
                style: 'dot',
                size: 16,
                thickness: 3,
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
        }
    }
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/slide-subtypes/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

/**
 * Slide Sub-Type Configurations
 *
 * This file defines all preset layout configurations for slide types.
 * Each sub-type provides default element positions, layout settings, and typography defaults.
 *
 * Sub-Types by Slide Type:
 * - Title: 5 sub-types (classic, large, minimal, statement, hero)
 * - Content: 4 sub-types (standard, two-column, sidebar, card)
 * - Bullets: 4 sub-types (vertical, horizontal, grid, numbered)
 * - Quote: 3 sub-types (classic, large, pullout)
 * - CTA: 3 sub-types (standard, minimal, large)
 * - Image: 10 sub-types (full-bleed, half-left, half-right, card, gradient, frame, polaroid, diagonal, masonry-2, masonry-3)
 *
 * @module config/slide-subtypes
 */ __turbopack_context__.s([
    "allSubTypes",
    ()=>allSubTypes,
    "getDefaultSubType",
    ()=>getDefaultSubType,
    "getDefaultSubTypeId",
    ()=>getDefaultSubTypeId,
    "getSubType",
    ()=>getSubType,
    "getSubTypesByTags",
    ()=>getSubTypesByTags,
    "getSubTypesForSlideType",
    ()=>getSubTypesForSlideType,
    "getSubTypesForTemplate",
    ()=>getSubTypesForTemplate,
    "hasSubType",
    ()=>hasSubType,
    "searchSubTypes",
    ()=>searchSubTypes,
    "slideSubTypes",
    ()=>slideSubTypes,
    "subTypeMap",
    ()=>subTypeMap
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$types$2f$slide$2d$subtypes$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/types/slide-subtypes.ts [app-client] (ecmascript)");
// ============================================================================
// TITLE SLIDE SUB-TYPES (5)
// ============================================================================
/**
 * title-classic: Headline + subtext, centered with standard spacing
 * Best for: Standard title slides with supporting text
 */ const titleClassic = {
    id: 'title-classic',
    name: 'Classic Title',
    description: 'Headline + subtext, centered with standard spacing',
    slideType: 'title',
    isDefault: true,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 24,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 80,
        spacing: {
            elementGap: 16,
            sectionGap: 32
        }
    },
    typography: {
        headlineSize: '72px',
        subtextSize: '48px',
        fontWeight: '700',
        lineHeight: '1.1'
    },
    tags: [
        'classic',
        'centered',
        'standard'
    ]
};
/**
 * title-large: Headline only, very large, centered
 * Best for: Bold, impactful single-line titles
 */ const titleLarge = {
    id: 'title-large',
    name: 'Large Title',
    description: 'Headline only, very large, centered',
    slideType: 'title',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 90,
        spacing: {
            elementGap: 0,
            sectionGap: 0
        }
    },
    typography: {
        headlineSize: '96px',
        fontWeight: '700',
        lineHeight: '1.0'
    },
    tags: [
        'large',
        'bold',
        'single-line'
    ]
};
/**
 * title-minimal: Headline only, small, top-left aligned
 * Best for: Minimalist, editorial-style titles
 */ const titleMinimal = {
    id: 'title-minimal',
    name: 'Minimal Title',
    description: 'Headline only, small, top-left aligned',
    slideType: 'title',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'left',
        containerMaxWidth: 75,
        spacing: {
            elementGap: 0,
            sectionGap: 0
        }
    },
    typography: {
        headlineSize: '64px',
        fontWeight: '400',
        lineHeight: '1.2'
    },
    tags: [
        'minimal',
        'left-aligned',
        'editorial'
    ]
};
/**
 * title-statement: Headline only, full-width, bottom aligned
 * Best for: Bold statements, call-to-action titles
 */ const titleStatement = {
    id: 'title-statement',
    name: 'Statement',
    description: 'Headline only, full-width, bottom aligned',
    slideType: 'title',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'bottom',
        containerMaxWidth: 95,
        spacing: {
            elementGap: 0,
            sectionGap: 0
        }
    },
    typography: {
        headlineSize: '72px',
        fontWeight: '700',
        lineHeight: '1.1'
    },
    tags: [
        'statement',
        'bottom-aligned',
        'bold'
    ]
};
/**
 * title-hero: Headline + subtext with dramatic spacing
 * Best for: Hero slides, opening slides
 */ const titleHero = {
    id: 'title-hero',
    name: 'Hero Title',
    description: 'Headline + subtext with dramatic spacing',
    slideType: 'title',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 48,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 85,
        spacing: {
            elementGap: 32,
            sectionGap: 64
        }
    },
    typography: {
        headlineSize: '84px',
        subtextSize: '52px',
        fontWeight: '700',
        lineHeight: '1.1'
    },
    tags: [
        'hero',
        'dramatic',
        'spacious'
    ]
};
// ============================================================================
// CONTENT SLIDE SUB-TYPES (4)
// ============================================================================
/**
 * content-standard: Headline + subtext, vertical stack
 * Best for: Standard content slides
 */ const contentStandard = {
    id: 'content-standard',
    name: 'Standard Content',
    description: 'Headline + subtext, vertical stack',
    slideType: 'content',
    isDefault: true,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'left',
            marginBottom: 24,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 80,
        spacing: {
            elementGap: 16,
            sectionGap: 32
        }
    },
    typography: {
        headlineSize: '64px',
        subtextSize: '40px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'standard',
        'vertical',
        'balanced'
    ]
};
/**
 * content-two-column: Headline top, subtext in 2 columns
 * Best for: Content that fits well in columns
 */ const contentTwoColumn = {
    id: 'content-two-column',
    name: 'Two Column',
    description: 'Headline top, subtext in 2 columns',
    slideType: 'content',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 32,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 90,
        spacing: {
            elementGap: 24,
            sectionGap: 40
        }
    },
    typography: {
        headlineSize: '60px',
        subtextSize: '36px',
        fontWeight: '600',
        lineHeight: '1.5'
    },
    tags: [
        'two-column',
        'grid',
        'organized'
    ]
};
/**
 * content-sidebar: Headline left, subtext right
 * Best for: Side-by-side content layout
 */ const contentSidebar = {
    id: 'content-sidebar',
    name: 'Sidebar',
    description: 'Headline left, subtext right',
    slideType: 'content',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'split-horizontal',
        containerMaxWidth: 100,
        spacing: {
            elementGap: 20,
            sectionGap: 32
        }
    },
    typography: {
        headlineSize: '56px',
        subtextSize: '38px',
        fontWeight: '600',
        lineHeight: '1.4'
    },
    tags: [
        'sidebar',
        'split',
        'side-by-side'
    ]
};
/**
 * content-card: Content in card with padding
 * Best for: Highlighted content, featured information
 */ const contentCard = {
    id: 'content-card',
    name: 'Card Content',
    description: 'Content in card with padding',
    slideType: 'content',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 20,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 75,
        spacing: {
            elementGap: 16,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '56px',
        subtextSize: '36px',
        fontWeight: '600',
        lineHeight: '1.4'
    },
    tags: [
        'card',
        'highlighted',
        'featured'
    ]
};
// ============================================================================
// BULLETS SLIDE SUB-TYPES (4)
// ============================================================================
/**
 * bullets-vertical: Standard vertical list
 * Best for: Traditional bullet point lists
 */ const bulletsVertical = {
    id: 'bullets-vertical',
    name: 'Vertical List',
    description: 'Standard vertical list',
    slideType: 'bullets',
    isDefault: true,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'left',
            marginBottom: 32,
            zIndex: 10
        },
        bullets: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'left',
        containerMaxWidth: 80,
        spacing: {
            elementGap: 16,
            sectionGap: 32
        }
    },
    typography: {
        headlineSize: '64px',
        bulletSize: '32px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'vertical',
        'standard',
        'traditional'
    ]
};
/**
 * bullets-horizontal: Horizontal pill-style bullets
 * Best for: Short bullet points, tags
 */ const bulletsHorizontal = {
    id: 'bullets-horizontal',
    name: 'Horizontal Pills',
    description: 'Horizontal pill-style bullets',
    slideType: 'bullets',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 32,
            zIndex: 10
        },
        bullets: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 90,
        spacing: {
            elementGap: 12,
            sectionGap: 32
        }
    },
    typography: {
        headlineSize: '60px',
        bulletSize: '28px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'horizontal',
        'pills',
        'tags'
    ]
};
/**
 * bullets-grid: 2x2 or 3x2 grid
 * Best for: Organized bullet points in grid
 */ const bulletsGrid = {
    id: 'bullets-grid',
    name: 'Grid Layout',
    description: '2x2 or 3x2 grid',
    slideType: 'bullets',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 32,
            zIndex: 10
        },
        bullets: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 85,
        spacing: {
            elementGap: 20,
            sectionGap: 32
        }
    },
    typography: {
        headlineSize: '56px',
        bulletSize: '30px',
        fontWeight: '600',
        lineHeight: '1.4'
    },
    tags: [
        'grid',
        'organized',
        'structured'
    ]
};
/**
 * bullets-numbered: Numbered list instead of bullets
 * Best for: Sequential information, steps
 */ const bulletsNumbered = {
    id: 'bullets-numbered',
    name: 'Numbered List',
    description: 'Numbered list instead of bullets',
    slideType: 'bullets',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'left',
            marginBottom: 32,
            zIndex: 10
        },
        bullets: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'left',
        containerMaxWidth: 80,
        spacing: {
            elementGap: 16,
            sectionGap: 32
        }
    },
    typography: {
        headlineSize: '64px',
        bulletSize: '32px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'numbered',
        'sequential',
        'steps'
    ]
};
// ============================================================================
// QUOTE SLIDE SUB-TYPES (3)
// ============================================================================
/**
 * quote-classic: Quote + attribution
 * Best for: Standard quote slides
 */ const quoteClassic = {
    id: 'quote-classic',
    name: 'Classic Quote',
    description: 'Quote + attribution',
    slideType: 'quote',
    isDefault: true,
    defaults: {
        quote: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 24,
            zIndex: 10
        },
        attribution: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 80,
        spacing: {
            elementGap: 24,
            sectionGap: 32
        }
    },
    typography: {
        quoteSize: '72px',
        attributionSize: '40px',
        fontWeight: '400',
        lineHeight: '1.4'
    },
    tags: [
        'classic',
        'centered',
        'standard'
    ]
};
/**
 * quote-large: Quote only, very large
 * Best for: Bold, impactful quotes
 */ const quoteLarge = {
    id: 'quote-large',
    name: 'Large Quote',
    description: 'Quote only, very large',
    slideType: 'quote',
    isDefault: false,
    defaults: {
        quote: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 90,
        spacing: {
            elementGap: 0,
            sectionGap: 0
        }
    },
    typography: {
        quoteSize: '96px',
        fontWeight: '400',
        lineHeight: '1.2'
    },
    tags: [
        'large',
        'bold',
        'single-line'
    ]
};
/**
 * quote-pullout: Quote in decorative box
 * Best for: Highlighted quotes, featured content
 */ const quotePullout = {
    id: 'quote-pullout',
    name: 'Pullout Quote',
    description: 'Quote in decorative box',
    slideType: 'quote',
    isDefault: false,
    defaults: {
        quote: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 20,
            zIndex: 10
        },
        attribution: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 75,
        spacing: {
            elementGap: 20,
            sectionGap: 24
        }
    },
    typography: {
        quoteSize: '64px',
        attributionSize: '36px',
        fontWeight: '400',
        lineHeight: '1.4'
    },
    tags: [
        'pullout',
        'highlighted',
        'featured'
    ]
};
// ============================================================================
// CTA SLIDE SUB-TYPES (3)
// ============================================================================
/**
 * cta-standard: Headline + subtext + button
 * Best for: Standard call-to-action slides
 */ const ctaStandard = {
    id: 'cta-standard',
    name: 'Standard CTA',
    description: 'Headline + subtext + button',
    slideType: 'cta',
    isDefault: true,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 24,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 32,
            zIndex: 10
        },
        ctaButton: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 85,
        spacing: {
            elementGap: 24,
            sectionGap: 32
        }
    },
    typography: {
        headlineSize: '72px',
        subtextSize: '48px',
        fontWeight: '700',
        lineHeight: '1.2'
    },
    tags: [
        'standard',
        'complete',
        'balanced'
    ]
};
/**
 * cta-minimal: Button only, centered
 * Best for: Minimal call-to-action
 */ const ctaMinimal = {
    id: 'cta-minimal',
    name: 'Minimal CTA',
    description: 'Button only, centered',
    slideType: 'cta',
    isDefault: false,
    defaults: {
        ctaButton: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 60,
        spacing: {
            elementGap: 0,
            sectionGap: 0
        }
    },
    typography: {
        fontWeight: '700',
        lineHeight: '1.0'
    },
    tags: [
        'minimal',
        'button-only',
        'simple'
    ]
};
/**
 * cta-large: Large button, full-width
 * Best for: Prominent call-to-action
 */ const ctaLarge = {
    id: 'cta-large',
    name: 'Large CTA',
    description: 'Large button, full-width',
    slideType: 'cta',
    isDefault: false,
    defaults: {
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 32,
            zIndex: 10
        },
        ctaButton: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 90,
        spacing: {
            elementGap: 32,
            sectionGap: 40
        }
    },
    typography: {
        headlineSize: '64px',
        fontWeight: '700',
        lineHeight: '1.2'
    },
    tags: [
        'large',
        'full-width',
        'prominent'
    ]
};
// ============================================================================
// IMAGE SLIDE SUB-TYPES (10)
// ============================================================================
/**
 * image-full-bleed: Image covers entire slide, text overlay
 * Best for: Hero images, dramatic impact
 */ const imageFullBleed = {
    id: 'image-full-bleed',
    name: 'Full Bleed',
    description: 'Image covers entire slide, text overlay',
    slideType: 'image',
    isDefault: true,
    defaults: {
        image: {
            mode: 'absolute',
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            zIndex: 1
        },
        headline: {
            mode: 'absolute',
            x: 50,
            y: 40,
            alignment: 'center',
            marginBottom: 16,
            zIndex: 10
        },
        subtext: {
            mode: 'absolute',
            x: 50,
            y: 60,
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 80,
        spacing: {
            elementGap: 16,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '72px',
        subtextSize: '48px',
        fontWeight: '700',
        lineHeight: '1.1'
    },
    tags: [
        'full-bleed',
        'overlay',
        'hero'
    ]
};
/**
 * image-half-left: Image 50% left, text 50% right
 * Best for: Product showcases, comparisons
 */ const imageHalfLeft = {
    id: 'image-half-left',
    name: 'Half Left',
    description: 'Image 50% left, text 50% right',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'absolute',
            x: 25,
            y: 50,
            width: 50,
            height: 100,
            zIndex: 1
        },
        headline: {
            mode: 'auto',
            alignment: 'left',
            marginBottom: 24,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'split-horizontal',
        containerMaxWidth: 100,
        spacing: {
            elementGap: 16,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '56px',
        subtextSize: '36px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'half-left',
        'split',
        'product'
    ]
};
/**
 * image-half-right: Image 50% right, text 50% left
 * Best for: Product showcases, comparisons
 */ const imageHalfRight = {
    id: 'image-half-right',
    name: 'Half Right',
    description: 'Image 50% right, text 50% left',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'absolute',
            x: 75,
            y: 50,
            width: 50,
            height: 100,
            zIndex: 1
        },
        headline: {
            mode: 'auto',
            alignment: 'left',
            marginBottom: 24,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'split-horizontal',
        containerMaxWidth: 100,
        spacing: {
            elementGap: 16,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '56px',
        subtextSize: '36px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'half-right',
        'split',
        'product'
    ]
};
/**
 * image-card: Image in centered card with caption
 * Best for: Portraits, featured content
 */ const imageCard = {
    id: 'image-card',
    name: 'Card Image',
    description: 'Image in centered card with caption',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 20,
            zIndex: 10
        },
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 16,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 70,
        spacing: {
            elementGap: 16,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '48px',
        subtextSize: '32px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'card',
        'centered',
        'portrait'
    ]
};
/**
 * image-gradient: Image with gradient overlay at bottom
 * Best for: Text readability on images
 */ const imageGradient = {
    id: 'image-gradient',
    name: 'Gradient Overlay',
    description: 'Image with gradient overlay at bottom for text',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'absolute',
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            zIndex: 1
        },
        headline: {
            mode: 'absolute',
            x: 50,
            y: 75,
            alignment: 'center',
            marginBottom: 16,
            zIndex: 10
        },
        subtext: {
            mode: 'absolute',
            x: 50,
            y: 85,
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'bottom',
        containerMaxWidth: 90,
        spacing: {
            elementGap: 16,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '64px',
        subtextSize: '40px',
        fontWeight: '700',
        lineHeight: '1.2'
    },
    tags: [
        'gradient',
        'overlay',
        'readable'
    ]
};
/**
 * image-frame: Image in decorative frame with text below
 * Best for: Artistic presentations
 */ const imageFrame = {
    id: 'image-frame',
    name: 'Framed Image',
    description: 'Image in decorative frame with text below',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 24,
            zIndex: 10
        },
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 16,
            zIndex: 10
        },
        subtext: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 75,
        spacing: {
            elementGap: 16,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '52px',
        subtextSize: '36px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'frame',
        'artistic',
        'decorative'
    ]
};
/**
 * image-polaroid: Polaroid style with caption
 * Best for: Retro aesthetic, casual content
 */ const imagePolaroid = {
    id: 'image-polaroid',
    name: 'Polaroid',
    description: 'Polaroid style with caption',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 16,
            zIndex: 10
        },
        headline: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 65,
        spacing: {
            elementGap: 16,
            sectionGap: 20
        }
    },
    typography: {
        headlineSize: '36px',
        fontWeight: '400',
        lineHeight: '1.4'
    },
    tags: [
        'polaroid',
        'retro',
        'casual'
    ]
};
/**
 * image-diagonal-split: Diagonal split between image and text
 * Best for: Creative layouts, dynamic designs
 */ const imageDiagonalSplit = {
    id: 'image-diagonal-split',
    name: 'Diagonal Split',
    description: 'Diagonal split between image and text',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'absolute',
            x: 50,
            y: 50,
            width: 100,
            height: 100,
            zIndex: 1
        },
        headline: {
            mode: 'absolute',
            x: 25,
            y: 30,
            alignment: 'left',
            marginBottom: 16,
            zIndex: 10
        },
        subtext: {
            mode: 'absolute',
            x: 25,
            y: 40,
            alignment: 'left',
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'diagonal',
        containerMaxWidth: 100,
        spacing: {
            elementGap: 16,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '56px',
        subtextSize: '36px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'diagonal',
        'creative',
        'dynamic'
    ]
};
/**
 * image-masonry-2: 2 images stacked
 * Best for: Multiple images, galleries
 */ const imageMasonry2 = {
    id: 'image-masonry-2',
    name: 'Masonry 2',
    description: '2 images stacked',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        },
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 16,
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 85,
        spacing: {
            elementGap: 20,
            sectionGap: 24
        }
    },
    typography: {
        headlineSize: '48px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'masonry',
        'stacked',
        'gallery'
    ]
};
/**
 * image-masonry-3: 3 images in grid
 * Best for: Multiple images, galleries
 */ const imageMasonry3 = {
    id: 'image-masonry-3',
    name: 'Masonry 3',
    description: '3 images in grid',
    slideType: 'image',
    isDefault: false,
    defaults: {
        image: {
            mode: 'auto',
            alignment: 'center',
            zIndex: 10
        },
        headline: {
            mode: 'auto',
            alignment: 'center',
            marginBottom: 16,
            zIndex: 10
        }
    },
    layout: {
        containerPosition: 'center',
        containerMaxWidth: 90,
        spacing: {
            elementGap: 16,
            sectionGap: 20
        }
    },
    typography: {
        headlineSize: '48px',
        fontWeight: '600',
        lineHeight: '1.3'
    },
    tags: [
        'masonry',
        'grid',
        'gallery'
    ]
};
const slideSubTypes = {
    title: [
        titleClassic,
        titleLarge,
        titleMinimal,
        titleStatement,
        titleHero
    ],
    content: [
        contentStandard,
        contentTwoColumn,
        contentSidebar,
        contentCard
    ],
    bullets: [
        bulletsVertical,
        bulletsHorizontal,
        bulletsGrid,
        bulletsNumbered
    ],
    quote: [
        quoteClassic,
        quoteLarge,
        quotePullout
    ],
    cta: [
        ctaStandard,
        ctaMinimal,
        ctaLarge
    ],
    custom: [
        contentStandard
    ],
    image: [
        imageFullBleed,
        imageHalfLeft,
        imageHalfRight,
        imageCard,
        imageGradient,
        imageFrame,
        imagePolaroid,
        imageDiagonalSplit,
        imageMasonry2,
        imageMasonry3
    ]
};
const allSubTypes = Object.values(slideSubTypes).flat();
const subTypeMap = allSubTypes.reduce((map, subType)=>{
    map[subType.id] = subType;
    return map;
}, {});
function getSubType(subTypeId) {
    return subTypeMap[subTypeId];
}
function getSubTypesForSlideType(slideType) {
    return slideSubTypes[slideType] || [];
}
function getDefaultSubType(slideType) {
    const subTypes = getSubTypesForSlideType(slideType);
    return subTypes.find((st)=>st.isDefault) || subTypes[0];
}
function getDefaultSubTypeId(slideType) {
    return getDefaultSubType(slideType)?.id;
}
function hasSubType(subTypeId) {
    return subTypeId in subTypeMap;
}
function getSubTypesByTags(tags) {
    return allSubTypes.filter((subType)=>tags.some((tag)=>subType.tags?.includes(tag)));
}
function searchSubTypes(query) {
    const lowerQuery = query.toLowerCase();
    return allSubTypes.filter((subType)=>subType.name.toLowerCase().includes(lowerQuery) || subType.description.toLowerCase().includes(lowerQuery) || subType.id.toLowerCase().includes(lowerQuery));
}
function getSubTypesForTemplate(templateId) {
    return allSubTypes.filter((subType)=>{
        if (!subType.compatibleWith || subType.compatibleWith.length === 0) {
            return true; // Compatible with all templates
        }
        return subType.compatibleWith.includes(templateId);
    });
}
;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p1-framework.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "p1Framework",
    ()=>p1Framework
]);
const p1Framework = {
    id: 'p1',
    name: 'Framework',
    label: 'Framework',
    hashtag: '#P1Framework',
    primaryColor: '#00E5FF',
    backgroundColor: '#0A0A1A',
    headingFont: 'Cinzel',
    bodyFont: 'Inter',
    headingFontClass: 'font-cinzel',
    bodyFontClass: 'font-inter',
    typography: {
        titleSize: '72px',
        subheadingSize: '48px',
        bodySize: '32px',
        bulletSize: '28px'
    },
    googleFonts: [
        {
            family: 'Cinzel',
            weights: [
                400,
                700,
                900
            ]
        },
        {
            family: 'Inter',
            weights: [
                300,
                400,
                600,
                700
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p2-strategy.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "p2Strategy",
    ()=>p2Strategy
]);
const p2Strategy = {
    id: 'p2',
    name: 'Strategy',
    label: 'Strategy',
    hashtag: '#P2Strategy',
    primaryColor: '#F59E0B',
    backgroundColor: '#0F172A',
    headingFont: 'Inter',
    bodyFont: 'Inter',
    headingFontClass: 'font-inter',
    bodyFontClass: 'font-inter',
    // Typography scaling for PNG output (1080x1350)
    typography: {
        titleSize: '72px',
        subheadingSize: '48px',
        bodySize: '32px',
        bulletSize: '28px'
    },
    // Google Fonts configuration
    googleFonts: [
        {
            family: 'Inter',
            weights: [
                300,
                400,
                600,
                700,
                900
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p3-systems.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "p3Systems",
    ()=>p3Systems
]);
const p3Systems = {
    id: 'p3',
    name: 'Systems',
    label: 'Systems',
    hashtag: '#P3Systems',
    primaryColor: '#10B981',
    backgroundColor: '#121212',
    headingFont: 'JetBrains Mono',
    bodyFont: 'JetBrains Mono',
    headingFontClass: 'font-jetbrains-mono',
    bodyFontClass: 'font-jetbrains-mono',
    typography: {
        titleSize: '68px',
        subheadingSize: '44px',
        bodySize: '30px',
        bulletSize: '26px'
    },
    googleFonts: [
        {
            family: 'JetBrains Mono',
            weights: [
                400,
                600,
                700
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p4-capital.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "p4Capital",
    ()=>p4Capital
]);
const p4Capital = {
    id: 'p4',
    name: 'Capital',
    label: 'Capital',
    hashtag: '#P4Capital',
    primaryColor: '#06B6D4',
    backgroundColor: '#0A0A0A',
    headingFont: 'Inter',
    bodyFont: 'Inter',
    headingFontClass: 'font-inter',
    bodyFontClass: 'font-inter',
    typography: {
        titleSize: '72px',
        subheadingSize: '48px',
        bodySize: '32px',
        bulletSize: '28px'
    },
    googleFonts: [
        {
            family: 'Inter',
            weights: [
                300,
                400,
                600,
                700
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p5-vitality.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "p5Vitality",
    ()=>p5Vitality
]);
const p5Vitality = {
    id: 'p5',
    name: 'Vitality',
    label: 'Vitality',
    hashtag: '#P5Vitality',
    primaryColor: '#2A4B7C',
    backgroundColor: '#1C1917',
    headingFont: 'Georgia',
    bodyFont: 'Inter',
    headingFontClass: 'font-georgia',
    bodyFontClass: 'font-inter',
    typography: {
        titleSize: '70px',
        subheadingSize: '46px',
        bodySize: '32px',
        bulletSize: '28px'
    },
    googleFonts: [
        {
            family: 'Georgia',
            weights: [
                400,
                700
            ]
        },
        {
            family: 'Inter',
            weights: [
                300,
                400,
                600,
                700
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p6-sovereignty.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "p6Sovereignty",
    ()=>p6Sovereignty
]);
const p6Sovereignty = {
    id: 'p6',
    name: 'Sovereignty',
    label: 'Sovereignty',
    hashtag: '#P6Sovereignty',
    primaryColor: '#E6E6FA',
    backgroundColor: '#1A1A2E',
    accentColor: '#C44536',
    headingFont: 'Playfair Display',
    bodyFont: 'Lato',
    headingFontClass: 'font-playfair-display',
    bodyFontClass: 'font-lato',
    typography: {
        titleSize: '72px',
        subheadingSize: '48px',
        bodySize: '32px',
        bulletSize: '28px'
    },
    googleFonts: [
        {
            family: 'Playfair Display',
            weights: [
                400,
                700,
                900
            ]
        },
        {
            family: 'Lato',
            weights: [
                300,
                400,
                700
            ]
        }
    ]
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/index.ts [app-client] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getPillarTheme",
    ()=>getPillarTheme,
    "pillarList",
    ()=>pillarList,
    "pillars",
    ()=>pillars
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p1$2d$framework$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p1-framework.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p2$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p2-strategy.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p3$2d$systems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p3-systems.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p4$2d$capital$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p4-capital.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p5$2d$vitality$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p5-vitality.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p6$2d$sovereignty$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/pillars/p6-sovereignty.ts [app-client] (ecmascript)");
;
;
;
;
;
;
const pillars = {
    p1: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p1$2d$framework$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p1Framework"],
    p2: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p2$2d$strategy$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p2Strategy"],
    p3: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p3$2d$systems$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p3Systems"],
    p4: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p4$2d$capital$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p4Capital"],
    p5: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p5$2d$vitality$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p5Vitality"],
    p6: __TURBOPACK__imported__module__$5b$project$5d2f$Documents$2f$Obsidian$2d$Vault$2f$Ishan$2d$Parihar$2f$00_Empire$2d$Management$2f$03_INFRASTRUCTURE$2f$02_Codebase$2f$carousel$2d$generator$2f$src$2f$config$2f$pillars$2f$p6$2d$sovereignty$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["p6Sovereignty"]
};
const pillarList = Object.values(pillars);
function getPillarTheme(id) {
    return pillars[id];
}
;
;
;
;
;
;
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
"[project]/Documents/Obsidian-Vault/Ishan-Parihar/00_Empire-Management/03_INFRASTRUCTURE/02_Codebase/carousel-generator/src/config/constants.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Slide dimensions for 4:5 aspect ratio (Instagram carousel)
__turbopack_context__.s([
    "ASPECT_RATIO",
    ()=>ASPECT_RATIO,
    "DEFAULT_BULLET_SIZE",
    ()=>DEFAULT_BULLET_SIZE,
    "DEFAULT_HEADLINE_SIZE",
    ()=>DEFAULT_HEADLINE_SIZE,
    "DEFAULT_PIXEL_RATIO",
    ()=>DEFAULT_PIXEL_RATIO,
    "DEFAULT_SUBTEXT_SIZE",
    ()=>DEFAULT_SUBTEXT_SIZE,
    "ELEMENT_SCALES",
    ()=>ELEMENT_SCALES,
    "MAX_SLIDES",
    ()=>MAX_SLIDES,
    "PREVIEW_HEIGHT",
    ()=>PREVIEW_HEIGHT,
    "PREVIEW_SCALE",
    ()=>PREVIEW_SCALE,
    "PREVIEW_WIDTH",
    ()=>PREVIEW_WIDTH,
    "SLIDE_HEIGHT",
    ()=>SLIDE_HEIGHT,
    "SLIDE_PADDING",
    ()=>SLIDE_PADDING,
    "SLIDE_WIDTH",
    ()=>SLIDE_WIDTH
]);
const SLIDE_WIDTH = 1080;
const SLIDE_HEIGHT = 1350;
const ASPECT_RATIO = 4 / 5;
const PREVIEW_SCALE = 0.5;
const PREVIEW_WIDTH = SLIDE_WIDTH * PREVIEW_SCALE;
const PREVIEW_HEIGHT = SLIDE_HEIGHT * PREVIEW_SCALE;
const DEFAULT_PIXEL_RATIO = 2;
const MAX_SLIDES = 10;
const DEFAULT_HEADLINE_SIZE = 'text-5xl';
const DEFAULT_SUBTEXT_SIZE = 'text-2xl';
const DEFAULT_BULLET_SIZE = 'text-xl';
const SLIDE_PADDING = 64;
const ELEMENT_SCALES = {
    slideNumber: 32,
    pillarLabel: 20,
    borderThin: 3,
    borderThick: 6,
    cornerAccent: 24,
    bulletPoint: 14,
    ctaButtonHeight: 64,
    hashtagSize: 20,
    watermarkSize: 16
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=65c58_03_INFRASTRUCTURE_02_Codebase_carousel-generator_src_config_e8537b63._.js.map