interface User {
    readonly dbId: number
<<<<<<< HEAD
    email: string,
    userId: number,
    googleId?: string
    // startTrail: () => string
    startTrail(): string
    getCoupon(couponname: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: "admin" | "ta" | "learner"
}

const hitesh: Admin = { dbId: 22, email: "h@h.com", userId: 2211,
role: "admin",
githubToken: "github",
startTrail: () => {
    return "trail started"
},
getCoupon: (name: "hitesh10", off: 10) => {
    return 10
}
}
hitesh.email = "h@hc.com"
// hitesh.dbId = 33
=======
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
>>>>>>> 1747477537416c5d7cf3aee6808c2fdf0d43de12
