import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import PostLayout from "./PostLayout";

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

  useEffect(() => {
    handleCreate("toolsPost", selectedTools);
    handleCreate("user", user);
  }, [selectedTools]);

  // const trySend = async () => {
  //   handleRequest("POST", `api/blog/post`, { newPost: postData })
  //     .then(() => {
  //       M.toast({ html: "Success." });
  //     })
  //     .catch(() => {
  //       M.toast({ html: "Failure." });
  //     })
  //     .finally(() => {
  //       dispatch(getPosts());
  //     });
  // };

  const handleCreate = (name, value) => {
    setPostData((postData) => ({
      ...postData,
      [name]: value,
    }));
  };
  const handleData = (e, val) => {
    e.preventDefault();
    console.log(val);
  };

  return (
    <div>
      <PostLayout post={""} name={"CREATE"} handleState={handleData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  userNick: state.user.user.nick,
  posts: state.blog.posts.postsData,
});

export default connect(mapStateToProps)(AddNewPost);
