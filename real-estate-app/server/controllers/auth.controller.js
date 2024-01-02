import bcryptjs from 'bcryptjs';
import User from '../models/user.model.js'
import handleError from '../utils/error.js'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();
const secretKey=process.env.SECRET_KEY

export const signUp=async(req,res,next)=>{

    const {username,email,password}=req.body;
    const hashedPassword=bcryptjs.hashSync(password,10);
    const newUser=new User({username,email,password:hashedPassword});
    try {
        await newUser.save();
        res.status(201).json("user created successfully")
    } catch (error) {
        next(error);
    }
   
}

export const signIn=async(req,res,next)=>{
    const {email,password} = req.body;
    try {
        const validUser=await User.findOne({email}) 
        if(!validUser) {
            return next(handleError(404,"User not found"));
        }
        const validPassword=bcryptjs.compareSync(password,validUser.password)
        if(!validPassword){
            return next(handleError(401,"Wrong credentials"));
        }
        const token=jwt.sign({id:validUser.id},secretKey)
        const {password:pass, ...userInfo}=validUser._doc;
        res.cookie('access_token',token,{httpOnly:true, expires:new Date(Date.now()+24*60*60*1000)}).status(200).json(userInfo);
    } catch (error) {
        next(error);
    }
}