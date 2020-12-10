import React, { useState, useEffect } from "react";

import { connect } from "react-redux";
import { handleRequest } from "../../../../../store/blog/blog.helpers";

import M from "materialize-css/dist/js/materialize.min.js";
import UploadContainer from "../../../../Shared/uploadContainer";
import Select from "react-select";

const AddNewPost = ({ userNick, tools }) => {
  const [selectedTools, setSelectedTools] = useState(null);
  const [user, setUser] = useState("");
  const [postData, setPostData] = useState({
    titlePost: "",
    toolsPost: [],
    descriptionPost: "",
    image: "",
    user: "",
  });

  useEffect(() => {
    setUser(userNick);
  }, [selectedTools]);

  const options = tools.map((item) => ({
    value: item.id,
    label: item.description,
    key: item.id,
  }));

  useEffect(() => {
    handleCreate("toolsPost", selectedTools);
    handleCreate("user", user);
  }, [selectedTools]);

  const trySend = async () => {
    handleRequest("POST", `api/blog/post`, { newPost: postData })
      .then(() => {
        M.toast({ html: "Success." });
      })
      .catch(() => {
        M.toast({ html: "Failure." });
      });
  };

  const handleCreate = (name, value) => {
    setPostData((postData) => ({
      ...postData,
      [name]: value,
    }));
  };

  return (
    <div>
      <form>
        <div class='input-field col s12'>
          <label for='postTitle'>Title</label>
          <input
            id={"postTitle"}
            minLength={10}
            type={"text"}
            className='validate'
            name={"Post Title"}
            onChange={(e) => handleCreate("titlePost", e.target.value)}
          />
          <span
            class='helper-text'
            data-error='Please input minimum 10 characters.'
          ></span>
        </div>
        <div class='input-field col s12'>
          <label for='postDescription'>Description</label>
          <input
            id={"postDescription"}
            minLength={10}
            className='validate'
            type={"text"}
            name={"Description"}
            onChange={(e) => handleCreate("descriptionPost", e.target.value)}
          />
          <span
            class='helper-text'
            data-error='Please input minimum 10 characters.'
          ></span>
        </div>
        <div class='input-field col s12'>
          <UploadContainer imageUrl={handleCreate} />
        </div>
        <div class='input-field col s12'>
          <Select options={options} isMulti onChange={setSelectedTools} />
        </div>
      </form>
      <button className='btn-small blue' onClick={trySend}>
        CREATE
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  userNick: state.user.user.nick,
  posts: state.blog.posts.postsData,
  tools: state.blog.tools.toolsData,
});

export default connect(mapStateToProps)(AddNewPost);