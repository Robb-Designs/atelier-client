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

export type CoverElementFamily =
  | "botanical"
  | "organic"
  | "geometric"
  | "abstract";

export type CoverElementDefinition = {
  variants: readonly string[];
  details?: readonly string[];
};

export type CoverElementCatalog = Record<
  CoverElementFamily,
  Record<string, CoverElementDefinition>
>;