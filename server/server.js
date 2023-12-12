import app from "./App.js";
import { connectDB } from "./config/database.js";
import cloudinary from 'cloudinary'
import { config } from "dotenv";
import nodeCron  from "node-cron"
import { Stats } from "./models/stats.js";


connectDB();


config({
    path: "./config/config.env",
})

cloudinary.v2.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME ,
    api_key: process.env.CLOUDINARY_CLIENT_API ,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET
})



nodeCron.schedule("0 0 0 1 * *",async ()=> {
    try{
  await Stats.create();
    }
    catch (error) {
console.log(error)
    }
});

// const temp = async ()=> {
  
//         await Stats.create({})
// }


// temp();

app.listen(process.env.PORT, () => {

    console.log(`server is working on port: ${process.env.PORT}`)
})


