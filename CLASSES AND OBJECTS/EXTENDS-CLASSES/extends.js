"use strict";
// extends
//  Clauses
// Background Reading:
// extends keyword (MDN)
Object.defineProperty(exports, "__esModule", { value: true });
// Classes may extend from a base class. A derived class has all the properties and methods of its base class, and can also define additional members.
class Animal {
    move() {
        console.log("Moving along!");
    }
}
class Dog extends Animal {
    woof(times) {
        for (let i = 0; i < times; i++) {
            console.log("woof!");
        }
    }
}
const d = new Dog();
// Base class method
d.move();
// Derived class method
d.woof(3);
//# sourceMappingURL=extends.js.map