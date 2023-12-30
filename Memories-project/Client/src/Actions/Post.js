import {fetchPosts,createPost}  from '../api/index.js'
import { FETCH_ALL, CREATE} from '../Constants/actionTypes';


//Action Creators: functions that return actions 

export const getPosts=()=>async (dispatch)=>{

    try {
        const {data}=await fetchPosts();
        dispatch({type:FETCH_ALL , paload:data});
    } catch (error) {
        console.log(error.message);
    }

}


export const CreatePost=(post)=>async(dispatch)=>{
    try {
        const {data} =  await createPost(post);
        dispatch({type:CREATE, payload:data})
    } catch (error) {
        console.log(error)
        
    }
}



