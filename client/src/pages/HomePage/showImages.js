import React, { useState, useEffect } from "react";
import axios from "axios";

import M from "materialize-css/dist/js/materialize.min.js";
import * as api from "../../services/settings.service";

export default function ShowImages() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      const posts = await api.fetchData("api/blog/post", "GET");
      setPosts(posts.message);
      console.log(posts);
    } catch (err) {
      M.toast({ html: err.message });
    }
  };
  // console.log(posts);

  const list = posts.map((post) => {
    return (
      <div class='col s12 m6 l4'>
        <div class='card'>
          <div class='card-image waves-effect waves-block waves-light'>
            <img class='activator' src={post.photo_url} />
          </div>
          <div class='card-content'>
            <span class='card-title activator grey-text text-darken-4'>
              {post.title}
              <i class='material-icons right'>more_vert</i>
            </span>
            <p>
              <a href='#'>Continue...</a>
            </p>
          </div>
          <div class='card-reveal'>
            <span class='card-title grey-text text-darken-4'>
              {post.title}
              <i class='material-icons right'>close</i>
            </span>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='row'>
      <div className='col s12 '>{list}</div>
      <div>SHOW MORE....</div>
    </div>
  );
}
