import mongoose , {Schema,Document} from "mongoose";

// whenever typescript is used we have to define the type here // 


export interface Message extends Document{
    content:string;
    createdAt:Date

}

const MessageSchema:Schema<Message> = new Schema({
    content:{
        type:String,
        required:true
    },
    createdAt:{
        type:Date,
        required:true,
        default:Date.now
    }
})