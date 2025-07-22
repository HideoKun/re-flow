import { curry } from "curry";
import { curry as ramdaCurry } from "ramda";

function multiply(a: number, b: string, c?: boolean): string {
  return `${a}_${b}_${c}`;
}

// --------------------------------

const curriedMultiply = curry(multiply);
//    ^?

const AllArgsPassed = curriedMultiply(1 as number, "a" as string, true);
//    ^?

const A = curriedMultiply(1 as number); // wider + why func is tracking literals?
//    ^?

const B = A("1" as string, true as boolean);
//    ^?

const C_withOpt = B(true);
//    ^?

const C_withoutOpt = B(true);
//    ^?

// TODO: add test for all variants
// TODO: fix casting params in usage

// RAMDA ------------------------

const ramdaCurriedMultiply = ramdaCurry(multiply);
//    ^?

const ramdaAllArgsPassed = ramdaCurriedMultiply(
  1 as number,
  "a" as string,
  true
);
//    ^?

const ramdaA = ramdaCurriedMultiply(1 as number); // wider + why func is tracking literals?
//    ^?

const ramdaB = ramdaA("1" as string, true);
//    ^?
