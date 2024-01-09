
import { Link, useNavigate} from 'react-router-dom'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import { signInStart,signInFailure,signInSuccess } from '../redux/user/userSlice.js';
import OAuth from '../components/OAuth.jsx';


function Signin() {



    const [formData,setFormData]=useState({
        email:'',password:''
      })
      const {loading, error}= useSelector((state)=>state.user);

      const navigate=useNavigate();
      const dispatch=useDispatch();
    
    
      const handleChange=(e)=>{
        setFormData({
          ...formData,
          [e.target.id]:e.target.value
        })
        console.log(formData);
      }


      const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          dispatch(signInStart()); // Use signInStart from userSlice
          const res = await fetch('/api/auth/signin', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
          const data = await res.json();
          if (data.success === false) {
            dispatch(signInFailure(data.message)); // Use signInFailure from userSlice
            return;
          }
          dispatch(signInSuccess(data)); // Use signInSuccess from userSlice
          navigate('/');
        } catch (error) {
          dispatch(signInFailure(error.message)); // Use signInFailure from userSlice
        }
      }
           
      
      
      return (
       
          <div className="p-3 max-w-lg mx-auto">
          <h1 className='text-3xl text-center font-semibold my-7'>Sign In</h1>
          <form className="flex flex-col gap-4 " onSubmit={handleSubmit}>
            <input type="email" placeholder="email" className="border p-3 rounded-lg" id="email" onChange={handleChange} />
            <input type="password" placeholder="password" className="border p-3 rounded-lg" id="password"  onChange={handleChange}/>
            <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">{loading?"Loading":"Sign in"}</button>
            <OAuth/>
          </form>
          <div className="flex gap-2 mt-5">
          <p> Don't have an account? </p>
          <Link to="/signup" className='text-blue-500 hover:underline'>Sign up</Link>
          </div>
          {error && <p className='text-red-700'>{error}</p>}
        </div>
        
  
      )
      }

export default Signin
