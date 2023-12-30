import axios from 'axios';

const url = 'http://localhost:5173/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, {newPost}).then((res)=>console.log(res)).catch((error)=>console.log(error));