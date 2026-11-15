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