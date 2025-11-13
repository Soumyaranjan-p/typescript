"use strict";
//  ----What are Utility Types in TypeScript?
Object.defineProperty(exports, "__esModule", { value: true });
const u1 = { name: "Soumya" }; // ✅ Only name provided
const u2 = { name: "Amit", age: 25, email: "a@b.com" };
//u2.age = 26; // ❌ Error: cannot modify readonly property
// Partial<T> – makes all properties optional
// Readonly<T> – makes all properties read-only
// Pick<T, K> – picks selected keys from type
// Omit<T, K> – removes selected keys
//# sourceMappingURL=utility.js.map