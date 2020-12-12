import React, { useState } from "react";

import PostList from "./PostList";
import NewPost from "./Posts/NewPost";
import EditPost from "./Posts/EditPost";

import ChapterList from "./Chapters/ChapterList";

const PostMenu = () => {
  const [newPost, setNewPost] = useState(false);
  const [editPost, setEditPost] = useState(0);
  const [editChapter, setEditChapter] = useState(0);

  if (editPost) {
    return <EditPost postid={editPost} goBack={() => setEditPost(0)} />;
  }

  if (newPost) {
    return (
      <NewPost
        goBack={() => setNewPost(false)}
        clearState={() => setNewPost(false)}
      />
    );
  }

  if (editChapter) {
    return (
      <ChapterList postid={editChapter} goBack={() => setEditChapter(0)} />
    );
  }

  const handleEditId = (e, val) => {
    e.preventDefault();
    setEditPost(val);
  };

  const selectedChapter = (e, id) => {
    e.preventDefault();
    setEditChapter(id);
  };

  return (
    <div style={{ overflow: "auto" }}>
      <button className='btn btn-small blue' onClick={() => setNewPost(true)}>
        Add new post
      </button>

      <PostList onEdit={handleEditId} onChapter={selectedChapter} />
    </div>
  );
};

export default PostMenu;
