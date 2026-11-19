import type { COVER_ELEMENTS } from "./cover.elements";
import type { COVER_COMPOSITIONS } from "./cover.compositions";
import type { CoverPlacementZone, ResolvedCompositionSlot, } from "./cover.composition-types";


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


export type CoverCompositionId =
  keyof typeof COVER_COMPOSITIONS;


type CoverElementDefinitionFor<
  ElementId extends CoverElementId
> = {
  [Family in keyof typeof COVER_ELEMENTS]:
  ElementId extends keyof (typeof COVER_ELEMENTS)[Family]
  ? (typeof COVER_ELEMENTS)[Family][
  ElementId & keyof (typeof COVER_ELEMENTS)[Family]
  ]
  : never;
}[keyof typeof COVER_ELEMENTS];

type VariantsOf<Definition> =
  Definition extends {
    readonly variants: readonly (infer Variant)[];
  }
  ? Variant
  : never;

type DetailsOf<Definition> =
  Definition extends {
    readonly details?: readonly (infer Detail)[];
  }
  ? Detail
  : never;


export type CoverElementVariant<
  ElementId extends CoverElementId
> = VariantsOf<CoverElementDefinitionFor<ElementId>>;


export type CoverElementDetail<
  ElementId extends CoverElementId
> = DetailsOf<CoverElementDefinitionFor<ElementId>>;


export type CoverElementInstance<
  ElementId extends CoverElementId
> = {
  id: ElementId;
  variant: CoverElementVariant<ElementId>;
  details?: CoverElementDetail<ElementId>[];
};


export type CoverElement =
  {
    [ElementId in CoverElementId]:
    CoverElementInstance<ElementId>;
  }[CoverElementId];


export type CoverCompositionElements = {
  hero: CoverElement;
  supporting?: CoverElement;
  accent?: CoverElement;
};

export type CoverRecipe = {
  version: 1;
  seed: string;
  palette: CoverPaletteId;
  background: BackgroundTreatment;
  composition: CoverCompositionId;
  elements: CoverCompositionElements;
};


export type ResolvedCoverComposition = {
  composition: CoverCompositionId;
  textZone: CoverPlacementZone;
  hero: ResolvedCompositionSlot<CoverElement>;
  supporting?: ResolvedCompositionSlot<CoverElement>;
  accent?: ResolvedCompositionSlot<CoverElement>;
};
