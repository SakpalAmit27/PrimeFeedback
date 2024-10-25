// importing our actual resend made in resend.ts from lib // 
import { resend } from "@/lib/resend";


import VerificationEmail from "../../emails/VerificationEmail";

import { ApiResponse } from "@/types/ApiResponse";

export async function sendVerificationEmail(
    email:string,
    username:string,
    verifyCode:string
):Promise<ApiResponse>{
    try{
    // took this from docs of resend // 
    await resend.emails.send({
        from: 'Acme <onboarding@resend.dev>',
        to: email,
        subject: 'PrimeFeedback message | Verification code',
        react:VerificationEmail({username,otp:verifyCode})
    });
    // ended here // 
        return {success:true,message:'Verification email sent successfully'}

    }catch(emailError){
        console.error(`error sending verification email : ${emailError}`)
        return {success:false , message:'Failed to send verification email'}
    }
}