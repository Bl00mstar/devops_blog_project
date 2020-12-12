import React, { useEffect, useState } from "react";
import UploadContainer from "../../../../Shared/uploadContainer";
import M from "materialize-css/dist/js/materialize.min.js";

const ChapterLayout = ({ name, chapter, handleState }) => {
  const [data, setData] = useState(chapter);
  useEffect(() => {
    M.updateTextFields();
  });
  const handleData = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setData((data) => ({
      ...data,
      [name]: value,
    }));
  };
  return (
    <div>
      <form>
        <div className='input-field col s12'>
          <label className='active' for='chapterTitle'>
            Topic
          </label>
          <input
            id={"postTitle"}
            minLength={10}
            type={"text"}
            value={data.topic}
            className='validate'
            name={"topic"}
            onChange={(e) => handleData(e)}
          />
          <span
            className='helper-text'
            data-error='Please input minimum 10 characters.'
          ></span>
        </div>
        <div className='row'>
          <form className='col s12'>
            <div className='row'>
              <div className='input-field col s12'>
                <textarea
                  id='Content'
                  name='content'
                  value={data.content}
                  className='materialize-textarea'
                  onChange={(e) => handleData(e)}
                ></textarea>
                <label for='Content'>Content</label>
              </div>
            </div>
          </form>
        </div>
        <div className='row'>
          <form className='col s12'>
            <div className='row'>
              <div className='input-field col s12'>
                <textarea
                  id='Code'
                  name='code'
                  value={data.code}
                  className='materialize-textarea'
                  onChange={(e) => handleData(e)}
                ></textarea>
                <label for='Code'>Code</label>
              </div>
            </div>
          </form>
        </div>
        <div className='input-field col s12'>
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
            className='helper-text'
            data-error='Please input minimum 10 characters.'
          ></span>
        </div>
        <div className='input-field col s12'>
          <UploadContainer />
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

export default ChapterLayout;
