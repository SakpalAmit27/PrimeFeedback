import dbConnect from "@/lib/dbConnect";

import UserModel from "@/model/User";

import bcrypt from "bcryptjs"

import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";


export async function POST(request : Request){
    await dbConnect(); 

    try{
        // taking the username email and pass from user through request // 
        const {username,email,password} = await request.json();

        const exisitingUserVerifiedByUsername = await UserModel.find({
            username,
            isVerified:true
        })

        if(exisitingUserVerifiedByUsername)

    }catch(error){
        console.error(`Error registering the user : ${error}`)
        return Response.json(
            {
                success:false,
                message:"Error registering user"
            },
            {
                status:500
            }
        )
    }
}