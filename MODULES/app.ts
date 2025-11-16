// What Is a Module in TypeScript?

// A file becomes a module when it contains at least one of these keywords:

// export

// import

// If a file has no export/import, it is considered a script, not a module.

// file: math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;
//IMPORT 
import { add, PI } from "./math";


//EPORTING WITH ALIAS
export { add as sum };
//IMPORT
import { sum } from "./math";

//DEFAULT EXPORT
// file: greet.ts
export default function greet(name: string) {
  return `Hello ${name}`;
}
//IMPORT 
import greet from "./greet";
