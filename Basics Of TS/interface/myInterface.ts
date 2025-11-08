interface User {
    readonly dbId: number
    email:string,
    userid:number,
    startTrail():string,
    getCoupon(coupon:string,value:number) :number
}

const hitesh :User= {    dbId:22,   email:"h@.com",userid:2211,
    startTrail:()=>{
        return "trail started"
    },
    getCoupon:(name:"hitesh10") =>{
        return 10
    }
}

hitesh.email="h@.com"