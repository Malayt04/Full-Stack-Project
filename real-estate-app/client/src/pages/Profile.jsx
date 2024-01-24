
import { useEffect, useRef, useState } from 'react';
import {useSelector,useDispatch} from 'react-redux'
import { app } from '../firebase';
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage'
import { updateUserStart,updateUserSuccess,updateUserFailure } from '../redux/user/userSlice.js';



function Profile() {

  const dispatch=useDispatch();
  const fileRef=useRef(null);
  const [file,setFile]=useState(undefined);
  const [filePerc,setFilePerc]=useState(0); 
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [fileUploadError, setFileUploadError]=useState(false);

  const {currentUser,error,loading}=useSelector((state)=>state.user);
  const [formData,setFormData]=useState({})
  console.log(formData);
  console.log(currentUser._id);

useEffect(()=>{
if(file){
  handleFileUpload(file);
}
},[file])

const handleFileUpload=(file)=>{
const storage=getStorage(app);
const fileName=new Date().getTime()+file.name;

const storageRef=ref(storage,fileName);
const uploadTask=uploadBytesResumable(storageRef,file);
uploadTask.on('state_changed', (snapshot) =>{
  const progress = (snapshot.bytesTransferred/snapshot.totalBytes)*100;
  setFilePerc(Math.round(progress));
},
(error)=>{
  setFileUploadError(true);
  console.log(error);
},
()=>{
  getDownloadURL(uploadTask.snapshot.ref)
  .then((downloadURL)=>{
     setFormData({...formData, avatar:downloadURL});
  });
}
);


}

const handleChange=(e)=>{
  setFormData({
    ...formData, 
    [e.target.id]:e.target.value
  })

}

const handleSubmit=async (e)=>{
e.preventDefault();

try {
  dispatch(updateUserStart());
  const res=await fetch(`/api/user/update/${currentUser._id}`,{
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  });

  const data= await res.json();

  if(data.success===false){
    dispatch(updateUserFailure(data.message));

    return;
  }

  
  dispatch(updateUserSuccess(data));

  setUpdateSuccess(true);

} catch (error) {
  console.log(error)
  dispatch(updateUserFailure(error.message));
}
}



  
  return (
    <div className=' max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col' onSubmit={handleSubmit}>
        <input onChange={(e)=>setFile(e.target.files[0])} type='file' ref={fileRef} hidden accept='image/.*'/>
        <img onClick={()=>fileRef.current.click()} className="rounded-full h-24 w-24 object-cover cursor-pointer self-center" src={formData.avatar||currentUser.avatar} alt='Profile picture'/>
        <p className='text-small self-center'>{fileUploadError?<span className='text-red-700'>Error in uploading image</span>:filePerc>0 && filePerc<100 ?<span className='text-green-700'>{`Uploading ${filePerc}%`}</span>:filePerc===100?<span className='text-green-700'>Uploaded Successfully</span>:""}</p>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username' onChange={handleChange} defaultValue={currentUser.username}/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='email' onChange={handleChange} defaultValue={currentUser.email}/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' onChange={handleChange} id='pasword'/>
        <button disabled={loading} className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-80'>{loading ? 'Loading...' : 'Update'}</button>
      </form>

      <div className='flex justify-between'>
        <span className='text-red-700 cursor-pointer '>Delete Account</span>
        <span className='text-red-700 cursor-pointer '>Sign Out</span>
      </div>
      <p className='text-red-700 mt-5'>{error ? error : ''}</p>
      <p className='text-green-700 mt-5'>
        {updateSuccess ? 'User is updated successfully!' : ''}
      </p>
    </div>
  )
}

export default Profile
