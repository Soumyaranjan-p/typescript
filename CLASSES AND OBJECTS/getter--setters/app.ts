//   Getters & Setters in TypeScript
//They look like properties, but work like methods.
//    Getter (get)

// A getter is a method used to read a property.

// Why use a getter? -- To protect internal data
 //To compute a value before returning it

// To add conditions/logic while reading a property
class Person {
  private _age: number;

  constructor(age: number) {
    this._age = age;
  }

  get age() {
    return this._age;        // returns private value
  }
}

const p = new Person(20);
console.log(p.age);          // ✔ NO brackets, looks like a property


// Setter (set)--->>A setter is used to update a property with validation.

// Why use a setter?-- To validate input

// To modify the data before saving

// To prevent invalid assignments

class Person {
  private _age: number = 0;

  set age(value: number) {
    if (value < 0) {
      throw new Error("Age cannot be negative");
    }
    this._age = value;
  }

  get age() {
    return this._age;
  }
}

const p = new Person();
p.age = 25;       // ✔ setter is called
console.log(p.age);
p.age = -5;       // ❌ Error: Age cannot be negative


// Real Life Example (Very Important for Interviews)

class Employee {
  private _salary: number = 0;

  get salary() {
    return this._salary;
  }

  set salary(value: number) {
    if (value < 10000) {
      throw new Error("Minimum salary is 10,000");
    }
    this._salary = value;
  }
}

const emp = new Employee();
emp.salary = 15000;     // setter
console.log(emp.salary); // getter
