import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import { handleRequest } from "../../../store/blog/blog.helpers";

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
      const post = await handleRequest("GET", `api/blog/post/${id}`);
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
