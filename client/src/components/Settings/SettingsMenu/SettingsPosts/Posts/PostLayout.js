import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import UploadContainer from "../../SettingsImages/uploadContainer";
import Select from "react-select";

const PostLayout = ({ post, name, handleState, tools, toolsDB }) => {
  const [selectedTools, setSelectedTools] = useState(null);
  const [data, setData] = useState(post);

  useEffect(() => {
    setSelectedTools(toolsDB);
  }, [toolsDB]);

  useEffect(() => {
    M.updateTextFields();
  });

  useEffect(() => {
    setData((data) => ({
      ...data,
      toolsPost: selectedTools,
    }));
  }, [selectedTools]);

  const handleData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  const options = tools.map((item) => ({
    value: item.id,
    label: item.description,
  }));

  return (
    <div>
      <form>
        <div class='input-field col s12'>
          <label className='active' for='postTitle'>
            Title
          </label>
          <input
            id={"postTitle"}
            minLength={10}
            type={"text"}
            value={data.title}
            className='validate'
            name={"title"}
            onChange={(e) => handleData(e)}
          />
          <span
            class='helper-text'
            data-error='Please input minimum 10 characters.'
          ></span>
        </div>
        <div class='input-field col s12'>
          <label className='active' for='postDescription'>
            Description
          </label>
          <input
            id={"postDescription"}
            minLength={10}
            className='validate'
            value={data.content}
            type={"text"}
            name={"content"}
            onChange={(e) => handleData(e)}
          />
          <span
            class='helper-text'
            data-error='Please input minimum 10 characters.'
          ></span>
        </div>
        <div class='input-field col s12'>
          <label className='active' for='photoURL'>
            Photo URL
          </label>
          <input
            id={"photoURL"}
            minLength={10}
            className='validate'
            value={data.photo_url}
            type={"text"}
            name={"photo_url"}
            onChange={(e) => handleData(e)}
          />
          <span
            class='helper-text'
            data-error='Please input minimum 10 characters.'
          ></span>
        </div>
        <div class='input-field col s12'>
          <UploadContainer />
        </div>
        <div class='input-field col s12'>
          <Select
            value={selectedTools}
            options={options}
            isMulti
            onChange={setSelectedTools}
          />
        </div>
        <button
          className='btn-small blue'
          onClick={(e) => handleState(e, data)}
        >
          {name}
        </button>
      </form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tools: state.blog.tools.toolsData,
});

export default connect(mapStateToProps)(PostLayout);
