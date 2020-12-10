import React, { useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

const PostLayout = ({ post }) => {
  useEffect(() => {
    M.updateTextFields();
  });

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
            value={post.title}
            className='validate'
            name={"Post Title"}
            // onChange={(e) => handleCreate("titlePost", e.target.value)}
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
            value={post.content}
            type={"text"}
            name={"Description"}
            // onChange={(e) => handleCreate("descriptionPost", e.target.value)}
          />
          <span
            class='helper-text'
            data-error='Please input minimum 10 characters.'
          ></span>
        </div>
        <div class='input-field col s12'>
          {/* <UploadContainer imageUrl={handleCreate} /> */}
        </div>
        <div class='input-field col s12'>
          {/* <Select options={options} isMulti onChange={setSelectedTools} /> */}
        </div>
        <button className='btn-small blue'>CREATE</button>
      </form>
    </div>
  );
};

export default PostLayout;
