
import type {
    CoverCompositionCatalog,
} from "./cover.composition-types";

export const COVER_COMPOSITIONS = {
    framed: {
        textZone: "interior",

        slots: {
            hero: {
                role: "hero",
                placementZones: [
                    "left",
                    "top-left",
                    "bottom-left",
                ],
                sizeRange: ["medium", "large"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                    "abstract",
                ],
                bleed: "allowed",
            },

            supporting: {
                role: "supporting",
                placementZones: [
                    "right",
                    "top-right",
                    "bottom",
                    "bottom-right",
                ],
                sizeRange: ["small", "medium"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                ],
                bleed: "allowed",
            },

            accent: {
                role: "accent",
                placementZones: [
                    "top",
                    "bottom-left",
                    "bottom-right",
                ],
                sizeRange: ["small", "small"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                    "abstract",
                ],
                bleed: "forbidden",
            },
        },
    },

    anchored: {
        textZone: "right",

        slots: {
            hero: {
                role: "hero",
                placementZones: [
                    "bottom-left",
                    "left",
                    "top-left",
                ],
                sizeRange: ["medium", "large"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                    "abstract",
                ],
                bleed: "allowed",
            },

            supporting: {
                role: "supporting",
                placementZones: [
                    "bottom",
                    "bottom-left",
                    "left",
                ],
                sizeRange: ["small", "medium"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                ],
                bleed: "allowed",
            },

            accent: {
                role: "accent",
                placementZones: [
                    "top-right",
                    "right",
                    "top",
                ],
                sizeRange: ["small", "small"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                    "abstract",
                ],
                bleed: "forbidden",
            },
        },
    },

    diagonal: {
        textZone: "right",

        slots: {
            hero: {
                role: "hero",
                placementZones: [
                    "top-left",
                    "left",
                    "bottom-left",
                ],
                sizeRange: ["medium", "large"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                    "abstract",
                ],
                bleed: "allowed",
            },

            supporting: {
                role: "supporting",
                placementZones: [
                    "top",
                    "center",
                    "bottom-right",
                ],
                sizeRange: ["small", "medium"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                ],
                bleed: "allowed",
            },

            accent: {
                role: "accent",
                placementZones: [
                    "top-right",
                    "right",
                    "bottom",
                ],
                sizeRange: ["small", "small"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                    "abstract",
                ],
                bleed: "forbidden",
            },
        },
    },

    horizon: {
        textZone: "top",

        slots: {
            hero: {
                role: "hero",
                placementZones: [
                    "bottom",
                    "bottom-left",
                    "bottom-right",
                ],
                sizeRange: ["medium", "large"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                    "abstract",
                ],
                bleed: "allowed",
            },

            supporting: {
                role: "supporting",
                placementZones: [
                    "center",
                    "left",
                    "right",
                ],
                sizeRange: ["small", "medium"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                ],
                bleed: "allowed",
            },

            accent: {
                role: "accent",
                placementZones: [
                    "top-left",
                    "top-right",
                    "top",
                ],
                sizeRange: ["small", "small"],
                allowedFamilies: [
                    "botanical",
                    "organic",
                    "geometric",
                    "abstract",
                ],
                bleed: "forbidden",
            },
        },
    },
} as const satisfies CoverCompositionCatalog;
