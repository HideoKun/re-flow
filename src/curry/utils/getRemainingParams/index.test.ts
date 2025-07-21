import { GetRemainingArgs } from ".";

type Test_A = GetRemainingArgs<[1, 2, 3], [1]>;
//   ^?

type Test_B = GetRemainingArgs<[1, 2, 3], [1, 2]>;
//   ^?

type Test_C = GetRemainingArgs<[1, 2, 3], [1, 2, 3]>;
//   ^?

type Test_D = GetRemainingArgs<[], [1, 2, 3]>;
//   ^?

type Test_E = GetRemainingArgs<[1, 2, 3], []>;
//   ^?

type Test_F = GetRemainingArgs<[], []>;
//   ^?

// -----------------------------

type Test_G = GetRemainingArgs<[1, 2, 3], ["a", "b", "c"]>;
//   ^?
