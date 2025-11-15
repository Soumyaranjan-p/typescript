class Payment{
    constructor (protected amount:number,
              protected account:number,) {}

    isPaymentValid(amount:number){

        return this.amount>0;
    }

}

//THIS IS ENOUGH FOR ABSTRACT CLASSES