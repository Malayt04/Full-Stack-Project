import {Container,AppBar,Typography, Grow, Grid} from '@material-ui/core'
import memories from './images/memories.png'
import { useDispatch} from 'react-redux'
import Form from './Components/Form/form'
import Posts from './Components/Posts/posts'
import useStyles from './styles.js';
import { useEffect } from 'react'
import {getPosts} from './Actions/Post.js'

function App() {
  const classes=useStyles();
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  },[])

  return (
  <Container maxidth='lg'>
      <AppBar className={classes.appBar} position='static' color='inherit'>
        <Typography className={classes.heading} variant='h2' align='center'>Memories</Typography>
        <img src={memories}  className={classes.image} alt='memories' height={60}/>
      </AppBar>
      <Grow in>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                      <Grid item xs={12} sm={7}>
                           <Posts/>
                      </Grid>
                      <Grid item xs={12} sm={4}>
                                <Form/>
                      </Grid>
          </Grid>
        </Container>
      </Grow>
  </Container>
  )
}

export default App
