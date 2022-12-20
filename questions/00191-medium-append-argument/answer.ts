type AppendArgument<Fn, A> = Fn extends (...args: infer ARGUMENT) => infer RETURN
  ? (...args: [...ARGUMENT, A]) => RETURN : never
 
