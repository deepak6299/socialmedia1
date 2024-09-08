import React, { useContext } from 'react'
import Post from './Post'
import UserContext from '../store/postListStore'
import WelcomeMsg from './WelcomeMsg'

export default function PostList() {

  const {users}=useContext(UserContext)
  return (
    <>  
    
      {users.length===0 && <WelcomeMsg/>}
      {
      users.map((item)=>
        <Post key={item.id} item={item} />
      )
    }
      
    </>
  )
}
