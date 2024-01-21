import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser';

import userRouter from './routes/user.route.js'  //stores all the user routes 
import authRoute from './routes/auth.routes.js'  //stores all the auth routes


dotenv.config();



const port=process.env.PORT 
const uri=process.env.MONGO_URI

const app=express();


app.use(express.json());  //read json data
app.use('/api/user',userRouter);
app.use('/api/auth',authRoute);
app.use(cookieParser());

//handelling error in server
app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});


//connecting to database and listining on port
mongoose.connect(uri).then(()=>app.listen(3000,()=>{
    console.log(`Server is running on port ${port}`);
})).catch((error)=>console.log(error.message))
