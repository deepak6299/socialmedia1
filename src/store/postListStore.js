
import { createContext,useState,useEffect } from "react";

// const initialUsers=[
//     {
//         id:"1",
//         title:"Going to Bihar",
//         body:"Hi friends.....i am going to bihar",reaction:"2",
//         tags:["Bihar","bhagalpur"]
//     },
//     {
//         id:"2",
//         title:"Going to gym",
//         body:"Hi friends.....i am going to Gym",reaction:"22",
//         tags:["fitness","healthyfood","gyming"]
//     }
    
// ]





const UserContext = createContext();

export const UserProvider = ({ children }) => {

    useEffect(() => {
        fetch('https://dummyjson.com/posts')
          .then(res => res.json())
          .then(data => setUsers(data.posts)) // Adjust according to your data structure
          .catch(err => console.error('Fetch error:', err));
      }, []);

    

    const [users, setUsers] = useState([]);

    const createPost = (userId, postTitle, postContent, reaction, tags) => {
        const newPost = {
          id:userId,
          title: postTitle,
          body: postContent,
          reaction,
          tags: tags.split(" ") // Convert tags from space-separated string to array
        };
    const newPostUser=[...users, newPost]
        setUsers(newPostUser )
      };

    const handleDeleteButton=(userId)=>{
        const updatedUser=users.filter(user=> user.id !== userId)
    setUsers(updatedUser)
    console.log(updatedUser);

    
    }

   
  
    return (
      <UserContext.Provider value={{ users, setUsers,handleDeleteButton,createPost }}>
        {children}
      </UserContext.Provider>
    );
  };
  
  export default UserContext;


