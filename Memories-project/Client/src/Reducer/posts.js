import { FETCH_ALL, CREATE } from '../Constants/actionTypes';


export default (posts=[],action)=>{
   switch(action.type){
    case FETCH_ALL:
          return action.payload;
    case CREATE:
          return [...posts,action.payload];
    default:
           return posts;
   }
}