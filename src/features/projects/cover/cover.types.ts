import type { COVER_ELEMENTS } from "./cover.elements";



export type BackgroundTreatment =
    | "flat"
    | "tonal";

export type CoverSurface = {
    background: string;
    textPrimary: string;
    textSecondary: string;
};


export type CoverPaletteId =
    | "olive-linen"
    | "terracotta-cream"
    | "botanical-sage"
    | "dusty-blue"
    | "charcoal-sand";


export type CoverPalette = {
    id: CoverPaletteId;
    base: CoverSurface;
    supporting: CoverSurface;
    accent?: string;
};


export type CoverElementId = {
  [Family in keyof typeof COVER_ELEMENTS]:
    keyof (typeof COVER_ELEMENTS)[Family];
}[keyof typeof COVER_ELEMENTS];
