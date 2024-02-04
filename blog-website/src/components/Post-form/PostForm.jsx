import React from 'react'
import { useCallback } from 'react'
import {Button, Input,Select} from '../index'
import { useForm } from 'react-hook-form'
import service from '../../appwrite/config'
import {useNavigate} from 'react-router-dom'
import {userSelector} from 'react-redux'

function PostForm() {
    const {register, handleSubmit, watch, setValue, control, getValue} = useForm({
        defaultValues:{
                  title:post?.title||"",
                  slug:post?.slug||"",
                  
        }
    })
  return (
    <div>
      
    </div>
  )
}

export default PostForm
