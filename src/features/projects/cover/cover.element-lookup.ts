import { COVER_ELEMENTS } from "./cover.elements.ts";
import type { CoverElementId } from "./cover.types.ts";
import type { CoverElementFamily } from "./cover.element-types.ts";



function createElementFamilyLookup() {
  const lookup: Partial<Record<CoverElementId, CoverElementFamily>> = {};

  for (const [family, elements] of Object.entries(COVER_ELEMENTS)) {
    for (const elementId of Object.keys(elements)) {
      if (elementId in lookup) {
        throw new Error(
          `Duplicate cover element "${elementId}" found in family "${family}".`,
        );
      }

      lookup[elementId as CoverElementId] =
        family as CoverElementFamily;
    }
  }

  return lookup as Record<CoverElementId, CoverElementFamily>;
}

export const ELEMENT_FAMILY_BY_ID = createElementFamilyLookup();
