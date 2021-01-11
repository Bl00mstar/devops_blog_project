import React, { useState, useEffect } from "react";
import PostLayout from "./PostLayout";
import { connect } from "react-redux";
import { getPosts } from "../../../../../store/blog/blog.actions";
import M from "materialize-css/dist/js/materialize.min.js";
import { handleRequest } from "../../../../../store/blog/blog.helpers";

const EditPost = ({ goBack, postid, posts, onGetPosts }) => {
  const [toolsDB, setToolsDB] = useState("");
  const [post, setPost] = useState("");

  useEffect(() => {
    handleRequest("GET", `api/blog/toolsByPost/${postid}`).then((data) => {
      setToolsDB(data);
    });
    Object.entries(posts).map(([key, value], index) => {
      if (postid === value.id) {
        setPost(value);
      }
    });
  }, [postid]);

  const handleData = (e, data) => {
    e.preventDefault();
    handleRequest("POST", `api/blog/update/post/${postid}`, data)
      .then(() => {
        M.toast({ html: "Post was edited." });
      })
      .catch((err) => {
        M.toast({ html: err });
      })
      .finally(() => {
        onGetPosts();
        goBack();
      });
  };

  return (
    <div>
      <button className='btn btn-small green ' onClick={goBack}>
        Back to List
      </button>
      {post ? (
        <PostLayout
          post={post}
          name={"EDIT"}
          handleState={handleData}
          toolsDB={toolsDB}
        />
      ) : (
        <></>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts.postsData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => {
      dispatch(getPosts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditPost);
