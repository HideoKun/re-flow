/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-return */

export function when<
  //
  Args,
  Truthy extends (...args: Args[]) => any,
  Falsy = "error-str"
>(
  predicate: (...args: Args[]) => boolean,
  truthy: Truthy,
  falsy?: Falsy extends (...args: Args[]) => any ? Falsy : "error-str"
): (...args: Args[]) => //
| ReturnType<Truthy>
  | (Falsy extends (...args: Args[]) => any
      ? //
        ReturnType<Falsy>
      : undefined) {
  return (...args: Args[]) =>
    predicate(...args)
      ? //
        truthy(...args)
      : falsy
      ? (falsy as unknown as (...args: Args[]) => any)(...args)
      : undefined;
}

const pred = (x: number): boolean => !!x;
const truthy = (x: number): number => x;
const falsy = (x: number): string => `${x}-`;

// Test with falsy function provided
const _testA = when(pred, truthy, falsy)(1);
//    ^?

// Test without falsy function
const _testB = when(pred, truthy)(1);
//    ^?

// Another test with falsy function to verify
const _testC = when(pred, truthy, falsy)(0);
//    ^?
