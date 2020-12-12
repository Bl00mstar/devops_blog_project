import React, { useState, useEffect } from "react";
import PostLayout from "./PostLayout";
import { connect } from "react-redux";

const EditPost = ({ goBack, postid, posts }) => {
  const [post, setPost] = useState("");

  useEffect(() => {
    Object.entries(posts).map(([key, value], index) => {
      if (postid === value.id) {
        setPost(value);
      }
    });
  }, [postid]);

  const handleData = (e, val) => {
    e.preventDefault();
    console.log(val);
  };
  return (
    <div>
      <button className='btn btn-small green ' onClick={goBack}>
        Back to List
      </button>
      {post ? (
        <PostLayout post={post} name={"EDIT"} handleState={handleData} />
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts.postsData,
});

export default connect(mapStateToProps)(EditPost);
