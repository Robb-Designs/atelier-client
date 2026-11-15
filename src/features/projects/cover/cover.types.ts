export type BackgroundTreatment =
    | "flat"
    | "gradient"
    | "tonal";


export type CoverPaletteId =
    | "olive-linen"
    | "terracotta-cream"
    | "botanical-sage"
    | "dusty-blue"
    | "charcoal-sand";

    
export type CoverPalette = {
    id: CoverPaletteId;
    base: string;
    supporting: string;
    accent?: string;
    textPrimary: string;
    textSecondary: string;
};