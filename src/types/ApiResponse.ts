// this file will derive the type of response we want to show // 
import { Message } from "@/model/User";

export interface ApiResponse{
    success:boolean;
    message:string;
    isAcceptingMessages?:boolean
    messages?:Array<Message>
}