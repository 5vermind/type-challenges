type Equal<A, B> = (<T>() => T extends A ? 1 : 2)
    extends (<T>() => extends B ? 1 : 2)
    ? true
    : false
 
// A와 B가 같은지를 T가 extends 가능한지로 비교
  
type Includes<T extends readonly any[], U> = 
    T extends [infer First, ...infer Rest] 
      ? Equal<First, U>
      extends true
        ? true
        : Includes<Rest, U>
      :false
    
 
