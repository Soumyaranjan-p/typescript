// interface User {
//   name: string;
//   age: number;
//   isAdmin?: boolean; // optional property
// }

// const user1: User = {
//   name: "Saroj",
//   age: 22
// };


 //DIFFERNCE BETWEEN INTERFACE && TYPE.

// Using type
type Status = "active" | "inactive";

// Using interface
interface User {
  name: string;
}

// Extend interface
interface Admin extends User {
  permissions: string[];
}


  //Rule of thumb:

// Use interface for objects and classes.

// Use type for unions/intersections or complex compositions.