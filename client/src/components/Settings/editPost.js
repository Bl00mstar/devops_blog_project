import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import * as api from "../../services/settings.service";

const EditPost = ({ postId, clearId }) => {
  const [postData, setPostData] = useState("");

  useEffect(() => {
    getPost(postId);
  }, []);
  useEffect(() => {
    console.log(postData);
  }, [postData]);

  const getPost = async (id) => {
    try {
      const post = await api.fetchData(`api/blog/post/${id}`, "GET");
      console.log(post.message);
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  return (
    <div>
      <div>
        <button className='btn btn-small blue left' onClick={clearId}>
          <i className=' tiny material-icons '>chevron_left</i>
        </button>
        <div>{postId}</div>
      </div>
    </div>
  );
};

export default EditPost;
