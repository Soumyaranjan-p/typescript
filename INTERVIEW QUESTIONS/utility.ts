//  ----What are Utility Types in TypeScript?





interface User {
  name: string;
  age: number;
  email: string;
}

type PartialUser = Partial<User>;
const u1: PartialUser = { name: "Soumya" }; // ✅ Only name provided

type ReadonlyUser = Readonly<User>;
const u2: ReadonlyUser = { name: "Amit", age: 25, email: "a@b.com" };
//u2.age = 26; // ❌ Error: cannot modify readonly property



// Partial<T> – makes all properties optional

// Readonly<T> – makes all properties read-only

// Pick<T, K> – picks selected keys from type

// Omit<T, K> – removes selected keys
