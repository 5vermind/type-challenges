typeof Last<T extends any[]> = T extends [...infer REST, infer TAIL] ? TAIL : never
