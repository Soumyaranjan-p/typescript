"use strict";
//-------------->>>> FUNCTIONS----->
Object.defineProperty(exports, "__esModule", { value: true });
function signUp(name, email, password) {
}
signUp("hey", "hey", "hey");
const heros = ["thor", "boka"];
heros.map(hero => {
    return `hero is ${heros}`;
});
//  function  getvalue(myval:number)     {
//     if(myval>5){
//         return true
//     }
//     return "200k"
//  }
class MyClass {
    name = "MyClass";
    getName = () => {
        return this.name;
    };
}
const c = new MyClass();
const g = c.getName;
// Prints "MyClass" instead of crashing
console.log(g());
//# sourceMappingURL=myfunctions.js.map