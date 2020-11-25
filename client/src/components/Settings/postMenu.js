import React, { useEffect, useState } from "react";

import Modal from "../Layout/modalEffect";

const PostMenu = () => {
  const postOptions = [
    {
      id: "post",
      label: "POSTS",
      elements: [
        { label: "Show all", name: "list", content: "list of posts" },
        {
          label: "Add post",
          name: "Add",
          content: "Dodaj nowy",
        },
      ],
      background: Modal,
    },
    {
      id: "chapter",
      label: "CHAPTERS",
      elements: [
        { label: "Show all", name: "list", content: "list of chapters" },
        {
          label: "Add chapter",
          name: "Add",
          content: "Dodaj nowy",
        },
      ],
      background: Modal,
    },
  ];

  let options = postOptions.map(({ label, id, background, elements }, key) => {
    return <div id={key}>{background(label, id, elements)}</div>;
  });

  return <div>{options}</div>;
};

export default PostMenu;
