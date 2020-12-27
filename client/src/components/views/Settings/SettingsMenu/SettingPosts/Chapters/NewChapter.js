import React from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import ChapterLayout from "./ChapterLayout";
import { handleRequest } from "../../../../../store/blog/blog.helpers";

export default function NewChapter({ goBack, postId, updated, clearState }) {
  const handleData = (e, data) => {
    e.preventDefault();
    handleRequest("POST", `api/blog/chapter/${postId}`, data)
      .then(() => {
        M.toast({ html: "Post was added." });
      })
      .catch((err) => {
        M.toast({ html: err });
      })
      .finally(() => {
        updated();
        clearState();
      });
  };

  return (
    <div className='row'>
      <button className='btn btn small green ' onClick={goBack}>
        Back to Chapter List
      </button>
      <ChapterLayout name={"ADD"} chapter={""} handleState={handleData} />
    </div>
  );
}
