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

        if(exisitingUserVerifiedByUsername){
            return Response.json({
                success:false, 
                message:"Username is already taken"
            },{status:400})
        }

       const existingUserByEmail = await UserModel.findOne({email})

       const VerifyCode = Math.floor(100000 + Math.random() * 900000).toString()

       if(existingUserByEmail){
        return Response.json({
            success:false,
            message:"Email is already registered"
        },{
            status:400
        })
       }
       else{
        const hashedPassword = await bcrypt.hash(password,10)
        const expiryDate = new Date(); 

        expiryDate.setHours(expiryDate.getHours() + 1)


        // saving our user here // 
        const newUser = new UserModel({
            username, 
            email, 
            password:hashedPassword, 
            verifyCode:VerifyCode,
            verifyCodeExpiry:expiryDate,
            isVerified:false,
            isAcceptingMessage:true,
            messages:[]
        })

        await newUser.save();
       }

    

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