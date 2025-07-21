import { SplitOnOptional } from ".";

const func = (a: string, b: number, c?: boolean, d?: null) => a;
type Params = Parameters<typeof func>;

type Final = SplitOnOptional<Params>;
//   ^?

type NonOpt = Final["nonOpt"];
//   ^?

type Opt = Final["opt"];
//   ^?

// TODO: preserve all names (start from the end of arr and split it with index?)
type Check = [...NonOpt, ...Opt];
//   ^?
