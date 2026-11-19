export function createSeededRandom(seed: string) {
  let hash = 2166136261;

  for (let i = 0; i < seed.length; i++) {
    hash ^= seed.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }

  let state = hash >>> 0;

  return function random() {
    state += 0x6D2B79F5;

    let value = state;

    value = Math.imul(
      value ^ (value >>> 15),
      value | 1,
    );

    value ^= value + Math.imul(
      value ^ (value >>> 7),
      value | 61,
    );

    return ((value ^ (value >>> 14)) >>> 0) / 4294967296;
  };
}


export function pickFrom<T>(
  items: readonly T[],
  random: () => number,
): T {
  if (items.length === 0) {
    throw new Error("Cannot select from an empty array.");
  }

  const index = Math.floor(random() * items.length);

  return items[index]!;
}