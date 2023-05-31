import { Link } from "react-router-dom";
import { getPostById } from "../services/postsService";
import AddComment from "./AddComment";

const SinglePost = ({post, deleteAPost}) => {
  return (
    <div key={post.id} className="p-4 p-md-5 mb-4 rounded text-bg-dark">
            <div className="col-md-6 px-0">
                <h1 className="display-4 fst-italic">{post.title}</h1>
                <p className="lead my-3">{post.text}</p>
                <Link to={`/posts/${post.id}`}><p className="lead mb-0">View Post</p></Link>
                <Link className="btn btn-primary" to={`/edit/${post.id}`}>Edit Post </Link>
                <button className="btn btn-primary" onClick={() => deleteAPost(post.id)}> Delete post </button>
            </div>
            <AddComment/>
      </div>  
  )
};
export default SinglePost;
