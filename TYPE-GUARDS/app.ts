function printValue(value: string | number) {
  // TS doesn't know if value is string or number
}



//type of TYPE GUARD 
function print(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
}
//instanceof Type Guard

class Dog {
  bark() {}
}
class Cat {
  meow() {}
}

function checkAnimal(a: Dog | Cat) {
  if (a instanceof Dog) {
    a.bark();
  } else {
    a.meow();
  }
}

//3. in Type Guard
interface User {
  name: string;
}
interface Admin {
  role: string;
}

function identify(person: User | Admin) {
  if ("role" in person) {
    console.log("Admin:", person.role);
  } else {
    console.log("User:", person.name);
    console.log("User:", person.name);
  }
}


//RIGHT NO EVERYTHING IS DONE NOW