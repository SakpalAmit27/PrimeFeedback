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

    // connecting to the db (using try and catch)

    try{
       const db = await mongoose.connect(process.env.MONGO_URI || '',{})

       connection.isConnected = db.connections[0].readyState

       console.log(`connected to database success`)


    }catch(error){

        console.log(`connection to database failed !`,error)
        process.exit()
    }

}

export default dbConnect;