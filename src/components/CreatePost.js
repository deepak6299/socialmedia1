import React, { useContext, useState } from 'react'

import UserContext from '../store/postListStore'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
const[userId,setUserId]=useState("")
const[postTitle,setPostTitle]=useState("")
const[postContent,setPostContent]=useState("")
const[reaction,setReaction]=useState("")
const[tags,setTags]=useState("")

const { createPost } = useContext(UserContext);

const navigate=useNavigate()

const handleSubmitForm = (e) => {
  e.preventDefault();
  navigate("/")
  
  // Call the createPost function from context
  createPost(userId, postTitle, postContent, reaction, tags);

  // Clear form fields
  setUserId(" ");
  setPostTitle(" ");
  setPostContent(" ");
  setReaction(" ");
  setTags(" ");
};

  return (
    <form className='createPost' onSubmit={handleSubmitForm}>
       <div className="mb-3">
    <label htmlFor="userId" className="form-label">UserId</label>
    <input type="text" className="form-control" id="title" placeholder='please enter userid' onChange={(e)=>setUserId(e.target.value)} />
   
  </div>
  <div className="mb-3">
    <label htmlFor="title" className="form-label">Post Title</label>
    <input type="text" className="form-control" id="title" placeholder='How are you feeling taday' onChange={(e)=>setPostTitle(e.target.value)}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="body" className="form-label">Post Content</label>
    <textarea type="text" rows="4" className="form-control" id="body" placeholder='Tell us more about it' onChange={(e)=>setPostContent(e.target.value)}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="reaction" className="form-label">Reaction</label>
    <input type="text" className="form-control" id="reaction" placeholder='How many people reacted to this post' onChange={(e)=>setReaction(e.target.value)}/>
   
  </div>
  <div className="mb-3">
    <label htmlFor="tags" className="form-label">Tags</label>
    <input type="text" className="form-control" id="tags" placeholder='Please enter tags using space' onChange={(e)=>setTags(e.target.value)}/>
   
  </div>
  
 
 
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
  )
}
