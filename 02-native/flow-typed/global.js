declare type Promise$All = <Elem, T: Iterable<Elem>>(promises: T) => Promise<$TupleMap<T, typeof $await>>;

