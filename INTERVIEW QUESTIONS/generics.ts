//WHAT ARE GENERICS IN TYPESCRIPT.

// Generics allow you to create reusable components that work with any type — while maintaining type safety.

function identity<T>(value: T): T {
  return value;
}

const num = identity<number>(42);  // T = number
const str = identity<string>("Hello");  // T = string


//Bonus Tip:--->>>Be prepared to explain why TypeScript is useful:

//  ------>>>> It improves code quality, reduces bugs, and provides excellent developer tooling (like IntelliSense & autocomplete).