import PostMessege from "../Models/postMessege.js";

export  async function getPosts(req,res){
   try {
    const postMesseges=await PostMessege.find();
    console.log(postMesseges);
    res.status(200).json(postMesseges);
   } catch (error) {
    res.status(404).json(error.message)
   }
}

export async function createPost(req,res){
   const post=req.body();
   const newPost=new PostMessege(post);
   try {
      await newPost.save();
      res.status(200).json(newPost);
   } catch (error) {
      res.status(404).json(error.message)
   }
}



