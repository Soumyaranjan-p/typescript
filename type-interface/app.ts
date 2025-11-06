  
  interface User {
    name:String,
    email:string,
    password:string
  }
       
function abcd(obj:User){


}

 abcd({name:"hey",email:"gey@gmail.com", password:"123"})

// ---------------------//EXTENDING INTERFACE

 interface User {
    name:String,
    email:string,
    password:string
  }
  interface Admin extends User{
    admin:boolean
  }
       
function abcd(obj:User){


}

 abcd({name:"hey",email:"gey@gmail.com", password:"123"})

 //---TYPE - ALIASES
 