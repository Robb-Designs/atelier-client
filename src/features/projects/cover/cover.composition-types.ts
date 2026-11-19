
import type { CoverElementFamily } from "./cover.element-types";


export type CoverPlacementZone =
    | "top-left"
    | "top"
    | "top-right"
    | "right"
    | "bottom-right"
    | "bottom"
    | "bottom-left"
    | "left"
    | "center"
    | "interior";

export type CoverElementSize =
    | "small"
    | "medium"
    | "large";

export type CoverCompositionSlot = {
    role: "hero" | "supporting" | "accent";
    placementZones: readonly CoverPlacementZone[];
    sizeRange: readonly [
        CoverElementSize,
        CoverElementSize
    ];
    allowedFamilies: readonly CoverElementFamily[];
    bleed: "allowed" | "forbidden";
};

export type CoverCompositionDefinition = {
    textZone: CoverPlacementZone;
    slots: {
        hero: CoverCompositionSlot & {
            role: "hero";
        };
        supporting: CoverCompositionSlot & {
            role: "supporting";
        };
        accent: CoverCompositionSlot & {
            role: "accent";
        };
    };
};

export type CoverCompositionCatalog = Record<
    string,
    CoverCompositionDefinition
>;

export type ResolvedCompositionSlot<Element> = {
    element: Element;
    placement: CoverPlacementZone;
    size: CoverElementSize;
    bleed: "allowed" | "forbidden";
};
