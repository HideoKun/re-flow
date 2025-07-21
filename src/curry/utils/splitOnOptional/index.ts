import {
  AddOptionalModifier,
  AddOrConcatToArr,
  RemoveOptionalModifier,
} from "common/types";

type Accumulator = { nonOpt: any[]; opt: any[] };
type UpdateOpt<T, Acc extends Accumulator> = {
  nonOpt: Acc["nonOpt"];
  opt: AddOrConcatToArr<T, Acc["opt"]>;
};
type UpdateNonOpt<T, Acc extends Accumulator> = {
  nonOpt: AddOrConcatToArr<T, Acc["nonOpt"]>;
  opt: Acc["opt"];
};

// -------------------------------------------------------------

type _SplitOnOptional<
  NonOptionalArgs extends any[],
  OptionalArgs extends any[],
  Acc extends Accumulator = { nonOpt: []; opt: [] }
> = NonOptionalArgs extends [infer NonOptional_F, ...infer NonOptional_R] // TODO: how to iterate to preserve named tuple keys?
  ? OptionalArgs extends [infer Optional_F, ...infer Optional_R]
    ? undefined extends Optional_F
      ? _SplitOnOptional<
          NonOptional_R,
          Optional_R,
          // INFO: switch
          UpdateOpt<NonOptional_F, Acc>
        >
      : _SplitOnOptional<
          NonOptional_R,
          Optional_R,
          // INFO: switch
          UpdateNonOpt<NonOptional_F, Acc>
        >
    : // INFO: no more optional args - add leftovers from NonOptionalArgs to optional ones
      UpdateOpt<RemoveOptionalModifier<NonOptionalArgs>, Acc>
  : Acc; // both arrays has same length

// -------------------------------------------------------------

export type SplitOnOptional<
  Params extends any[],
  Acc extends Accumulator = { nonOpt: []; opt: [] }
> = _SplitOnOptional<
  //
  AddOptionalModifier<Params>,
  Params,
  Acc
>;
