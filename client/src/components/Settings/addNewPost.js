import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import * as api from "../../services/settings.service";

import M from "materialize-css/dist/js/materialize.min.js";

import UploadContainer from "./uploadContainer";

import Select from "react-select";

const AddNewPost = ({ userNick }) => {
  const [tools, setTools] = useState([]);
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
    getTools();
    setUser(userNick);
  }, [selectedTools]);

  const getTools = async () => {
    try {
      const tools = await api.fetchData("api/blog/tools", "GET");
      setTools(tools);
    } catch (err) {
      console.error(err.message);
    }
  };

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
    try {
      await api
        .postData(`api/blog/post`, { newPost: postData })
        .then((data) => {
          data.success
            ? M.toast({ html: "Success." })
            : M.toast({ html: "Failure." });
        });
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  const handleCreate = (name, value) => {
    console.log("asd" + name + value);
    setPostData((postData) => ({
      ...postData,
      [name]: value,
    }));
    // trySend(postData);
  };

  return (
    <div className='App'>
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
});

export default connect(mapStateToProps)(AddNewPost);
