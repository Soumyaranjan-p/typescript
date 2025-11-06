
TUPLES
let arr :[number,String] =[1, "harsh"]
console.log(arr)


ENUMERATION

enum User{
    ADMIN="ADMMIN",
    GUEST="hey",

}


ANY---> IF SOMEONE DOESNOT TAKE ANY VALUE IT SETS AS ANY

let a: any = 10;
let b: unknown = 10;

a = "Soumya"; // ✅ allowed
b = "Soumya"; // ✅ allowed

        REAL WORLD CASE OF -------->>ANY
        function parseApiResponse(response: any) {
  console.log(response.data.id); // ❌ Could crash if data is undefined
}




  UNKNOWN 

  let a: any = "Soumya";
let b: unknown = "Soumya";

let str: string;

str = a; // ✅ Works (no check)
str = b; // ❌ Error — need to verify first

    REAL WORLD USE CASE---UNKNOWN---

    function parseApiResponse(response: unknown) {
  if (typeof response === "object" && response !== null) {
    console.log("Safe to access:", response);
  } else {
    console.error("Unexpected type!");
  }
}

------------VOID

 function abcd(): void{
    console.log("hey")  //void returns nothing
 }

   --------------NULL//
let user: string | null = null; // user intentionally has no value yet

user = "Soumya"; // ✅ valid
user = null;     // ✅ valid

 function findUser(id: number): string | null {
  if (id === 1) return "Soumya";
  return null; // ❌ No user found
}

    
----UNDEFINED ------------undefined — “Value hasn’t been assigned yet”

              let age: number | undefined;

console.log(age); // undefined (no value yet)
age = 25; // ✅ works fine


     -------FUNTION EXAMPLE

     function greetUser(name?: string) {
  console.log(`Hello ${name}`);
}

greetUser();      // name is undefined
greetUser("Soumya");

          -----------EXAMPLE SHOWING BOTH

           let username: string | null | undefined;

console.log(username); // undefined (not assigned)

username = null;
console.log(username); // null (intentionally cleared)

username = "Soumya";
console.log(username); // Soumya

         
/------------------never — “This code should never happen” 🚫

 function throwError(message: string): never {
  throw new Error(message);
}


 // Exhaustiveness checking (real-world use):
 ///REAL  WORLD USE

  null → Empty on purpose.

undefined → Empty by accident (not initialized).

never → Impossible to reach or never returns.