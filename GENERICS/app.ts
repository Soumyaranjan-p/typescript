
// Generics in TypeScript let you create reusable, flexible, and type-safe code.
// They allow a function, class, or interface to work with any data type while still preserving type information.
function abcd<H>(a:H){
 console.log(a)   
}
abcd<string>("harsjh");


function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([1, 2, 3]);  // number
getFirstElement(["a", "b"]);         // string (inferred)

    //INTERFACE
interface ApiResponse<T> {
  data: T;
  success:boolean;
}

const userResponse: ApiResponse<{ name: string; age: number }> = {
  data: { name: "Soumya", age: 22 },
  success: true,
};
//---------CLASS----------

class Box<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }
}

const numberBox = new Box<number>(100);
const stringBox = new Box("Hello");

