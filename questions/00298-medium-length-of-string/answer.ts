type LengthOfString<S extends string, T extends string[] = []> = S extends `${infer First}${infer Rest}` 
  ? LengthOfString<Rest, [...T, First]>
  : T['length'] 
