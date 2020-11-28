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
      <tr key={post.topic_id}>
        <th>{post.title}</th>
        <th>edit</th>
        <th>delete</th>
      </tr>
    );
  });

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
