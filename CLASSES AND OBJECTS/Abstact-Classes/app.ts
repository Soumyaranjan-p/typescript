class Payment{
    constructor (protected amount:number,
              protected account:number,) {}

    isPaymentValid(amount:number){

        return this.amount>0;
    }

}

//THIS IS ENOUGH FOR ABSTRACT CLASSES

//OPTIONAL PARAMETERS --->>??

//..rest--//spread
 
function abcd(...args:string[]){
 
}
 abcd("aman","hey","hey");

 //SPREAD OPERATOR

 var arr=[1,2,3]
var arr2=[...arr] //if u want to make a duplicate of one thing u have to use spread operator


//OVERLOADING

function abcd(a:string):void;
function abcd(a:string,b:number):number