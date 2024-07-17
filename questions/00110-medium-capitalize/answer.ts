type MyCapitalize<S extends string>  = S extends `${infer C}${infer F}` ? `${Capitalize<C>}${F}` : S
