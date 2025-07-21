import { GetRemainingArgs, ParamsToPartialApplication } from "./utils";

// prettier-ignore
type GetNextArgs<
  Func extends (...args: any) => any,
  Args extends any[]
> = ParamsToPartialApplication<
  GetRemainingArgs<
    Parameters<Func>,
    Args
  >
>;

// TODO: extract to reusable type (ramda)
type Curry<
  Func extends (...args: any) => any,
  Args extends any[]
> = Args["length"] extends Parameters<Func>["length"]
  ? ReturnType<Func>
  : <NextArgs extends GetNextArgs<Func, Args>>(
      ...nextArgs: NextArgs
    ) => Curry<Func, [...Args, ...NextArgs]>;

// TODO: maybe pointers instead of static types will be better?
export function curry<Func extends (...args: any[]) => any>(func: Func) {
  return function curried<
    NextArgs extends ParamsToPartialApplication<Parameters<Func>>
  >(...nextArgs: NextArgs): Curry<Func, NextArgs> {
    //
    if (nextArgs.length >= func.length) {
      return func(...nextArgs) as ReturnType<Func>;
    } else {
      // TODO: curry (...nextArgs) => // curried(...args, ...nextArgs)
      return null as Curry<Func, NextArgs>;
    }
  };
}
