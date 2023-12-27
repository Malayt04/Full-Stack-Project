import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import postRoutes from './Routes/posts.js';

dotenv.config();

const app=express();

app.use('/posts',postRoutes);
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use(cors());

const uri=process.env.MONGO_URI;
const port=process.env.PORT

mongoose.connect(uri)
.then(()=>app.listen(port,()=>{console.log(`Server is running on port ${port}`)}))
.catch((err)=>console.log(err.message));


 