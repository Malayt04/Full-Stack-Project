
import { useEffect, useRef, useState } from 'react';
import {useSelector} from 'react-redux'
import { app } from '../firebase';
import {getDownloadURL, getStorage,ref, uploadBytesResumable} from 'firebase/storage'

function Profile() {
  const fileRef=useRef(null);
  const [file,setFile]=useState(undefined);
  const [filePerc,setFilePerc]=useState(0); 
  const [fileUploadError, setFileUploadError]=useState(false);
  const [formData,setFormData]=useState({});
  const {currentUser}=useSelector((state)=>state.user);

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


  
  return (
    <div className=' max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col'>
        <input onChange={(e)=>setFile(e.target.files[0])} type='file' ref={fileRef} hidden accept='image/.*'/>
        <img onClick={()=>fileRef.current.click()} className="rounded-full h-24 w-24 object-cover cursor-pointer self-center" src={formData.avatar||currentUser.avatar} alt='Profile picture'/>
        <p className='text-small self-center'>{fileUploadError?<span className='text-red-700'>Error in uploading image</span>:filePerc>0 && filePerc<100 ?<span className='text-green-700'>{`Uploading ${filePerc}%`}</span>:filePerc===100?<span className='text-green-700'>Uploaded Successfully</span>:""}</p>
        <input type='text' placeholder='username' className='border p-3 rounded-lg' id='username'/>
        <input type='email' placeholder='email' className='border p-3 rounded-lg' id='password'/>
        <input type='password' placeholder='password' className='border p-3 rounded-lg' id='pasword'/>
        <button className='bg-slate-700 text-white rounded-lg p-3 uppercase hover:opacity-80'>Update</button>
      </form>

      <div className='flex justify-between'>
        <span className='text-red-700 cursor-pointer '>Delete Account</span>
        <span className='text-red-700 cursor-pointer '>Sign Out</span>
      </div>
    </div>
  )
}

export default Profile
