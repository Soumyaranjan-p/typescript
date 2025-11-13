"use strict";
//WHAT ARE GENERICS IN TYPESCRIPT.
Object.defineProperty(exports, "__esModule", { value: true });
// Generics allow you to create reusable components that work with any type — while maintaining type safety.
function identity(value) {
    return value;
}
const num = identity(42); // T = number
const str = identity("Hello"); // T = string
//Bonus Tip:--->>>Be prepared to explain why TypeScript is useful:
//  ------>>>> It improves code quality, reduces bugs, and provides excellent developer tooling (like IntelliSense & autocomplete).
//# sourceMappingURL=generics.js.map