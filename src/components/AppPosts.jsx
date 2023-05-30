import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deletePost, getPosts } from "../services/postsService";
import SinglePost from "./SinglePost";

const AppPosts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts().then(({ data }) => setPosts(data));
  }, []);

  const deleteAPost = (id) => {
    deletePost(id);
    setPosts((prevState) => prevState.filter((post) => post.id !== id));
  };
  return (
    <div>
    {posts.map((post)=>(
    <SinglePost post={post} deleteAPost={deleteAPost}></SinglePost>
    ))}
    </div>


    //Ne dirati donju tabelu dok ne vidim kako ocu da mi sve bude uredjeno


    // <table className="table container mt-5">
    //   <thead>
    //     <tr>
    //       <th>Id</th>
    //       <th>Title</th>
    //       <th>Text</th>
    //       <th>View</th>
    //       <th>Edit</th>
    //       <th>Delete</th>
    //     </tr>
    //   </thead>
    //   <tbody>
    //     {posts.map((post, index) => (
    //       <tr key={index}>
    //         <td>{post.id}</td>
    //         <td>{post.title}</td>
    //         <td>{post.text}</td>
    //         <td>
    //           <Link className="btn btn-primary" to={`/posts/${post.id}`}>
    //             View Post
    //           </Link>
    //         </td>
    //         <td>
    //           <Link className="btn btn-primary" to={`/edit/${post.id}`}>
    //             Edit Post
    //           </Link>
    //         </td>
    //         <td>
    //           <button
    //             className="btn btn-primary"
    //             onClick={() => deleteAPost(post.id)}
    //           >
    //             Delete post
    //           </button>
    //         </td>
    //       </tr>
    //     ))}
    //   </tbody>
    // </table>
  );
};
export default AppPosts;
