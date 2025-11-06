"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
TUPLES;
let arr = [1, "harsh"];
console.log(arr);
ENUMERATION;
var User;
(function (User) {
    User["ADMIN"] = "ADMMIN";
    User["GUEST"] = "hey";
})(User || (User = {}));
ANY-- -  > IF;
SOMEONE;
DOESNOT;
TAKE;
ANY;
VALUE;
IT;
SETS;
AS;
ANY;
let a = 10;
let b = 10;
a = "Soumya"; // ✅ allowed
b = "Soumya"; // ✅ allowed
REAL;
WORLD;
CASE;
OF--;
--;
--;
-- >> ANY;
function parseApiResponse(response) {
    console.log(response.data.id); // ❌ Could crash if data is undefined
}
UNKNOWN;
let a = "Soumya";
let b = "Soumya";
let str;
str = a; // ✅ Works (no check)
str = b; // ❌ Error — need to verify first
REAL;
WORLD;
USE;
CASE-- - UNKNOWN-- -
    function parseApiResponse(response) {
        if (typeof response === "object" && response !== null) {
            console.log("Safe to access:", response);
        }
        else {
            console.error("Unexpected type!");
        }
    };
--;
--;
--;
--;
--;
--VOID;
function abcd() {
    console.log("hey"); //void returns nothing
}
--;
--;
--;
--;
--;
--;
--NULL; //
let user = null; // user intentionally has no value yet
user = "Soumya"; // ✅ valid
user = null; // ✅ valid
function findUser(id) {
    if (id === 1)
        return "Soumya";
    return null; // ❌ No user found
}
--;
--UNDEFINED;
--;
--;
--;
--;
--;
--undefined;
Value;
hasn;
t;
been;
assigned;
yet;
let age;
console.log(age); // undefined (no value yet)
age = 25; // ✅ works fine
--;
--;
-- - FUNTION;
EXAMPLE;
function greetUser(name) {
    console.log(`Hello ${name}`);
}
greetUser(); // name is undefined
greetUser("Soumya");
--;
--;
--;
--;
-- - EXAMPLE;
SHOWING;
BOTH;
let username;
console.log(username); // undefined (not assigned)
username = null;
console.log(username); // null (intentionally cleared)
username = "Soumya";
console.log(username); // Soumya
/------------------never — “This code should never happen” 🚫;
function throwError(message) {
    throw new Error(message);
}
// Exhaustiveness checking (real-world use):
///REAL  WORLD USE
null;
Empty;
on;
purpose.
    undefined;
Empty;
by;
accident(not, initialized).
    never;
Impossible;
to;
reach;
or;
never;
returns.;
//# sourceMappingURL=arr.js.map