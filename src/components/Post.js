
import { useContext } from "react"
import UserContext from "../store/postListStore"

export default function Post({item}) {

const {handleDeleteButton}=useContext(UserContext)
  
  return (
    <div className="card postCard" style={{width: "30rem"}}>
    
    <div className="card-body">
      <h5 className="card-title">{item.title}</h5>
      <p className="card-text">{item.body}</p>
      <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
      <button type="button" className="btn-close" aria-label="Close" onClick={()=>handleDeleteButton(item.id)}></button>
    
  </span>
      {
        item.tags.map((tag)=>
          <span className="badge text-bg-primary hashtag" key={tag}>{tag}</span>
        )
      }
      <div className="alert alert-success" role="alert" style={{margin:"15px 0px"}}>
  This post has been reacted by {item.reaction}.
</div>
     
    </div>
  </div>
  )
}
