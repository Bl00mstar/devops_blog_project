import React from "react";
import { connect } from "react-redux";

import PostLayout from "./PostLayout";

const EditPost = ({ postId, clearId, posts }) => {
  const editLayout = Object.entries(posts).map(([key, value], index) => {
    if (postId === value.id) {
      return <PostLayout post={value} />;
    }
  });

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='col s1'>
          <button className='btn btn-small blue left' onClick={clearId}>
            <i className=' tiny material-icons '>chevron_left</i>
          </button>
        </div>
        <div className='col s11'>
          <div>EDIT:</div>
          {editLayout}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts.postsData,
});

export default connect(mapStateToProps)(EditPost);
