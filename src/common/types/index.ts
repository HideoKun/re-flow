export type RemoveOptionalModifier<T> = {
  [K in keyof T]-?: T[K];
};

export type AddOptionalModifier<T> = {
  [K in keyof T]?: T[K];
};

export type AddOrConcatToArr<T, Arr extends any[]> = T extends any[]
  ? [...Arr, ...T]
  : [...Arr, T];
