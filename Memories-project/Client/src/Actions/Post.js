import * as api from '../api'

//Action Creators: functions that return actions 

const getPosts=()=>async (dispatch)=>{

    try {
        const {data}=await api.fetchPosts();
        dispatch({type:'FETCH_ALL',paload:data});
    } catch (error) {
        console.log(error.message);
    }

}

export default getPosts;

