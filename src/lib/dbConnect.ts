import mongoose from 'mongoose'

// creating an connection object // 


type ConnectionObject = {
    isConnected?:number

}

// added our ConnectionObject here to derive that its a type 
const connection:ConnectionObject  = {

}

// its gonna contain and return a promise , also the void is different then whats used in c++ // 
async function dbConnect():Promise<void>{

    // if already connected then return //
    if(connection.isConnected){
        console.log(`Already connected to the database`); 
        return
    }

}