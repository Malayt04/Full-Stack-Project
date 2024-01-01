import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import userRouter from './routes/router.js'
import authRoute from './routes/auth.routes.js'

dotenv.config();



const port=process.env.PORT 
const uri=process.env.MONGO_URI

const app=express();


app.use(express.json());

app.use('/api/user',userRouter);
app.use('/api/auth',authRoute);

app.use((err,req,res,next)=>{
    const statusCode=err.statusCode||500;
    const message=err.message||'Internal Server Error';
    return res.status(statusCode).json({
        success:false,
        statusCode,
        message
    })
});


mongoose.connect(uri).then(()=>app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})).catch((error)=>console.log(error.message))
