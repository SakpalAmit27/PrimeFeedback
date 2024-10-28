// for fixing the user._id error . gonna define the types here // 

import "next-auth"

declare module "next-auth"{
    interface User{
        _id?:string
        isVerified:string
        isAcceptingMessages?:boolean
        username?:string

    }
}