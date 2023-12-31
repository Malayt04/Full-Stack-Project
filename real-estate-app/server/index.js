import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/router.js'

dotenv.config();



const port=process.env.PORT 
const uri=process.env.MONGO_URI

const app=express();


app.use('/',userRouter);



mongoose.connect(uri).then(()=>app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})).catch((error)=>console.log(error.message))
