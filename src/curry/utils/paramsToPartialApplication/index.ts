type _ParamsToPartialApplication<
  Params extends any[],
  Acc_First extends any[],
  Acc_UnionOfTuples,
  Acc_Params extends any[]
> = Params extends [infer Params_First, ...infer Params_Rest]
  ? _ParamsToPartialApplication<
      Params_Rest,
      [...Acc_First, Params_First],
      // dirty
      Params | Acc_UnionOfTuples | [...Acc_First, Params_First],
      Params
    >
  : Acc_UnionOfTuples;

export type ParamsToPartialApplication<Params extends any[]> =
  _ParamsToPartialApplication<
    Params,
    [],
    never, // empty union
    Params
  >;
