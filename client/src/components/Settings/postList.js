import React, { useEffect, useState } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import * as api from "../../services/settings.service";

export default function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const posts = await api.fetchData("api/blog/post", "GET");
      setPosts(posts.message);
    } catch (err) {
      M.toast({ html: err.message });
    }
  };
  const list = posts.map((post) => {
    return (
      <tr key={post._id}>
        <th>{post.title}</th>
        <th>edit</th>
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
      const deletePost = await api.fetchData(`api/blog/post/${id}`, "DELETE");
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
    </div>
  );
}
