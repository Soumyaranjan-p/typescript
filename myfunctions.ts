//-------------->>>> FUNCTIONS----->

function signUp(name:String, email :String,password:String){
  
             

}
 
 signUp("hey","hey","hey")


const heros =["thor","boka"]

 heros.map(hero=>{
    return    `hero is ${heros}`
 })

 




 export {}



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