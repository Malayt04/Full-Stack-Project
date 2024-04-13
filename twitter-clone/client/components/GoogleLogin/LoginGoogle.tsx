'use client';
import {GoogleLogin} from '@react-oauth/google'

// Define a function to handle successful login
const handleLoginSuccess = (cred) => {
  console.log(cred);
};

// Inside your component render the GoogleLogin component
const LoginGoogle = () => {
  return (
    <div className='border p-5 rounded-lg bg-slate-700'>
   <h1 className='text-2xl my-2'>New to Twitter?</h1>
    
    <GoogleLogin 
      onSuccess={handleLoginSuccess}
      
    />
    </div>
  );
};

export default LoginGoogle;