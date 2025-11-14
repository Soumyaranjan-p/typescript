// What Are Static Members in TypeScript?

// static members belong to the class itself, NOT to the object (instance).

// Meaning:

// You access them using ClassName, not this

// They are shared by all objects

// Useful for utility functions, counters, constants, helpers, etc.
class Counter {
  static count: number = 0;

  constructor() {
    Counter.count++;  // access static using ClassName
  }
}

new Counter();
new Counter();
new Counter();

console.log(Counter.count);  // 3
