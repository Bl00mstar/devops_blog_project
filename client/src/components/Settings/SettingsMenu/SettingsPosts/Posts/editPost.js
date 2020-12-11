import React from "react";
import { connect } from "react-redux";
import PostLayout from "./PostLayout";

import { handleRequest } from "../../../../../store/blog/blog.helpers";

const EditPost = ({ postId, clearId, posts }) => {
  handleRequest("GET", `api/blog/toolsByPost/${postId}`);

  const handleData = (e, val) => {
    e.preventDefault();
    console.log(val);
  };

  const editLayout = Object.entries(posts).map(([key, value], index) => {
    if (postId === value.id) {
      return <PostLayout post={value} name={"EDIT"} handleState={handleData} />;
    }
  });

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='col s12'>
          <button className='btn btn-small blue left' onClick={clearId}>
            <i className=' tiny material-icons '>chevron_left</i>
          </button>
        </div>
        <div className='col s12'>
          <div>EDIT:</div>
          {editLayout}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts.postsData,
  tools: state.blog.tools.toolsData,
});

export default connect(mapStateToProps)(EditPost);
