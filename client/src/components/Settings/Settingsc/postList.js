import React, { useEffect, useState } from "react";
import { handleRequest } from "../../../store/blog/blog.helpers";
import M from "materialize-css/dist/js/materialize.min.js";
import EditPost from "./editPost";

export default function PostList() {
  const [posts, setPosts] = useState([]);
  const [id, setId] = useState("");

  const handleId = () => {
    setId("");
  };

  const handleEdit = async (id) => {
    setId(id);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const posts = await handleRequest("GET", `api/blog/post`);
      setPosts(posts);
    } catch (err) {
      M.toast({ html: err });
    }
  };
  const list = posts.map((post) => {
    return (
      <tr key={post._id}>
        <th>{post.title}</th>
        <th>
          <button
            className='btn btn-small blue'
            value={post.id}
            onClick={() => handleEdit(post.id)}
          >
            <i className='tiny material-icons'>edit</i>
          </button>
        </th>
        <th>
          {" "}
          <button
            className='btn btn-small red'
            onClick={() => deletePost(post.id)}
          >
            <i className=' tiny material-icons '>delete</i>
          </button>
        </th>
      </tr>
    );
  });

  const deletePost = async (id) => {
    try {
      const deletePost = await handleRequest("DELETE", `api/blog/post/${id}`);
      if (deletePost.success) {
        getPosts() && M.toast({ html: deletePost.msg });
      } else {
        M.toast({ html: deletePost.msg });
      }
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  return (
    <div id='postList'>
      {id ? (
        <EditPost postId={id} clearId={handleId} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      )}
    </div>
  );
}
