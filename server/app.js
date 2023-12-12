import express from "express";
import { config } from "dotenv";
import cookieParser from "cookie-parser";



import cors from "cors";

config({
    path: "./config/config.env",
})


const app = express();



//using middlewares

app.use(express.json());
app.use(express.urlencoded({
    extended: true,
}))



app.use(cookieParser())
app.use(
    cors({
      origin: process.env.FRONTEND_URL,
      credentials: true,
      methods: ["GET", "POST", "PUT", "DELETE"],
    })
  );


//importing & Using Routes

import course from "./routes/courseRoutes.js"

import user from "./routes/userRoutes.js"
import ErrorMiddleware from "./middleware/error.js";
import superAdmin from './routes/superAdminRoutes.js'

app.use('/api/v1', course);
app.use('/api/v1', user);
app.use('/api/v1', superAdmin );



export default app;


app.use(ErrorMiddleware)