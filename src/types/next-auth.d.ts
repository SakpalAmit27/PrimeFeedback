// for fixing the user._id error . gonna define the types here // 

import "next-auth"

declare module "next-auth"{
    interface User{
        _id?:string
        isVerified:string
        isAcceptingMessages?:boolean
        username?:string

    }

    interface Session{
        user:{
            _id?:string
            isVerified:string
            isAcceptingMessages?:boolean
            username?:string


        } & DefaultSession['user']
    }
}

declare module 'next-auth/jwt'{
    interface JWT{
        _id?:string
        isVerified:string
        isAcceptingMessages?:boolean
        username?:string
    }
}