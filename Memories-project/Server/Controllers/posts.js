import PostMessage from "../Models/postMessege.js";

export  async function getPosts(req,res){
   try {
    const postMessages=await PostMessage.find();
    console.log(postMessages);
    res.status(200).json(postMessages);
   } catch (error) {
    res.status(404).json(error.message)
   }
}


export const createPost = async (req, res) => {
   const { title, message, selectedFile, creator, tags } = req.body;

   const newPostMessage = new PostMessage({ title, message, selectedFile, creator, tags })

   try {
       await newPostMessage.save();
       console.log(newPostMessage)
       res.status(201).json(newPostMessage );
   } catch (error) {
       res.status(404).json({ message: error.message });
   }
}



