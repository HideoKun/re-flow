import { ParamsToPartialApplication } from ".";

const func = (a: string, b: number, c?: boolean, d?: null) => a;
type Params = Parameters<typeof func>;

type Test = ParamsToPartialApplication<Params>;
//   ^?
