import type { CoverPalette, CoverPaletteId } from "./cover.types";



export const COVER_PALETTES: Record<CoverPaletteId, CoverPalette> = {
    "olive-linen": {
        id: "olive-linen",
        base: {
            background: "#667553",
            textPrimary: "#FAF9F5",
            textSecondary: "#E8E6DC",
        },
        supporting: {
            background: "#F4F0E8",
            textPrimary: "#34372E",
            textSecondary: "#667553",
        },
        accent: "#D97757",
    },
    "terracotta-cream": {
        id: "terracotta-cream",
        base: {
            background: "#B9654B",
            textPrimary: "#FFFCF8",
            textSecondary: "#F4DED2",
        },
        supporting: {
            background: "#FAF1E6",
            textPrimary: "#38302A",
            textSecondary: "#8B6252",
        },
        accent: "#667553",
    },
    "botanical-sage": {
        id: "botanical-sage",
        base: {
            background: "#435B49",
            textPrimary: "#FAF9F5",
            textSecondary: "#DCE5D5",
        },
        supporting: {
            background: "#DCE5D5",
            textPrimary: "#26372D",
            textSecondary: "#526B57",
        },
        accent: "#C99A72",
    },
    "dusty-blue": {
        id: "dusty-blue",
        base: {
            background: "#526F86",
            textPrimary: "#FAF9F5",
            textSecondary: "#DCE5EA",
        },
        supporting: {
            background: "#E8EDF0",
            textPrimary: "#293B48",
            textSecondary: "#526F86",
        },
        accent: "#C58F78",
    },
    "charcoal-sand": {
  id: "charcoal-sand",
  base: {
    background: "#343632",
    textPrimary: "#FAF9F5",
    textSecondary: "#D5D0C6",
  },
  supporting: {
    background: "#E8E2D7",
    textPrimary: "#343632",
    textSecondary: "#68675E",
  },
  accent: "#A5A18F",
},
};