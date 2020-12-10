import React from "react";

import ModalEffect from "../../Shared/Layout/modalEffect";

import AddNewPost from "./addNewPost";
import PostList from "./postList";

import ChapterList from "./chapterList";
import AddNewChapter from "./addNewChapter";

const PostMenu = () => {
  const postOptions = [
    {
      id: "chapter",
      label: "CHAPTERS",
      elements: [
        { label: "Chapters", name: "chapterList", content: <ChapterList /> },
        {
          label: "Add chapter",
          name: "addChapter",
          content: <AddNewChapter />,
        },
      ],
      background: ModalEffect,
    },

    {
      id: "post",
      label: "POSTS",
      elements: [
        { label: "Posts", name: "postList", content: <PostList /> },
        {
          label: "Add post",
          name: "addPost",
          content: <AddNewPost />,
        },
      ],
      background: ModalEffect,
    },
  ];

  let options = postOptions.map(({ label, id, background, elements }, key) => {
    return <div id={key}>{background(label, id, elements)}</div>;
  });

  return <div>{options}</div>;
};

export default PostMenu;
