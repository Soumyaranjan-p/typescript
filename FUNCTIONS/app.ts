function add(x: number, y: number): number {
  return x + y;
}
// let myAdd = function (x: number, y: number): number {
//   return x + y;
// };

// let myAdd: (baseValue: number, increment: number) => number = function (
//   x: number,
//   y: number
// ): number {
//   return x + y;
// };


   

function abcd(name:string,age:number,cb:(arg:string)=>void){
    cb("hey")
   }  

   abcd ("hey",56, (arg:string)=>{
    console.log("hey");
   })

   
