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