// class Device{

//    name="lg";
//    price=12000;
//    category="digital";
// }

// let d1= new Device();
// let d2= new Device();

// class Point {
//   x: number;
//   y: number;
// }
 
// const pt = new Point();
// pt.x = 0;
// pt.y = 0;

class Point {
  x = 0;
  y = 0;
}
 
const pt = new Point();
// Prints 0, 0
console.log(`${pt.x}, ${pt.y}`);

// let x: number = 0;
 
// class C {
//   x: string = "hello";
 
//   m() {
//     // This is trying to modify 'x' from line 1, not the class property
//     x = "world";
// Type 'string' is not assignable to type 'number'.
// class Thing {
//   _size = 0;
 
//   get size(): number {
//     return this._size;
//   }
 
//   set size(value: string | number | boolean) {
//     let num = Number(value);
 
//     // Don't allow NaN, Infinity, etc
 
//     if (!Number.isFinite(num)) {
//       this._size = 0;
//       return;
//     }
 
//     this._size = num;
//   }
// }