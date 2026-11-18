import type { CoverElementCatalog } from "./cover.element-types.ts";


export const COVER_ELEMENTS = {
  botanical: {
    leaf: {
      variants: ["broad", "elongated", "rounded"],
      details: ["veins"],
    },
    petal: {
      variants: ["single", "overlapping", "clustered"],
      details: ["center"],
    },
    stem: {
      variants: ["curved", "branching", "minimal"],
    },
  },
  organic: {
    blob: {
      variants: ["rounded", "irregular", "elongated"],
      details: ["grain"],
    },
    wave: {
      variants: ["horizontal", "vertical", "flowing"],
    },
    pebble: {
      variants: ["single", "overlapping", "clustered"],
      details: ["shading"],
    },
  },

  geometric: {
    circle: {
      variants: ["solid", "outlined", "nested"],
      details: ["inner-ring"],
    },
    arch: {
      variants: ["rounded", "tall", "layered"],
    },
    rectangle: {
      variants: ["solid", "outlined", "grid"],
      details: ["grid-lines"],
    },
  },

  abstract: {
    sculpture: {
      variants: ["rounded", "angular", "irregular"],
      details: ["shading"],
    },
    fold: {
      variants: ["single", "layered", "curved"],
    },
    silhouette: {
      variants: ["overlapping", "offset", "nested"],
      details: ["grain"],
    },
  },

} as const satisfies CoverElementCatalog;