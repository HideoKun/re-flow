type _GetRemainingArgs<
  All extends any[],
  Partial extends any[]
> = Partial extends [infer Partial_First, ...infer Partial_Rest]
  ? All extends [infer All_First, ...infer All_Rest]
    ? All_First extends Partial_First
      ? _GetRemainingArgs<All_Rest, Partial_Rest>
      : never // INFO: type mismatch error
    : [] // INFO: dead branch?
  : All;

export type GetRemainingArgs<
  All extends any[],
  Partial extends any[]
> = Partial["length"] extends 0
  ? [] // INFO: nothing to do
  : _GetRemainingArgs<All, Partial>;
