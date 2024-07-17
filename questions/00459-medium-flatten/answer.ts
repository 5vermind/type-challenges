type Flatten<T extends any[], R extends any[] = []> = 
  T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? Flatten<[...First, ...Rest], R>
    : Flatten<[...Rest], [...R, First]>
  : R
