import React, { useEffect } from "react";
import ChapterLayout from "./ChapterLayout";
import M from "materialize-css/dist/js/materialize.min.js";
import { handleRequest } from "../../../../../store/blog/blog.helpers";

export default function EditChapter({ goBack, chapter, updated, clearState }) {
  const handleData = (e, data) => {
    e.preventDefault();
    handleRequest("POST", `api/blog/update/chapter/${data.id}`, data)
      .then(() => {
        M.toast({ html: "Post Updated" });
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
    <div>
      <button className='btn btn-small green ' onClick={goBack}>
        Back to Chapter List
      </button>
      {chapter ? (
        <ChapterLayout
          chapter={chapter}
          name={"EDIT"}
          handleState={handleData}
        />
      ) : (
        <></>
      )}
    </div>
  );
}
