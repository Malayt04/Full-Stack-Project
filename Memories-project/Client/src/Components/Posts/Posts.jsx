
import {useSelector} from 'react-redux'
import useStyles from './styles.js';



function Posts() {  

  const posts=useSelector((state)=>state.posts)
const classes=useStyles();

console.log(posts);
  return (
    <>
      <h1>POSTS</h1>
    </>
  )
}

export default Posts
