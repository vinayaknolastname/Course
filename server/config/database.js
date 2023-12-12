import mongoose from "mongoose";


export const connectDB = async() => {


   mongoose.set("strictQuery", false);
   const connection =  await  mongoose.connect( process.env.MONGO_URI);
   console.log(`MOngo DB connected with ${connection.host}`)

   
}

