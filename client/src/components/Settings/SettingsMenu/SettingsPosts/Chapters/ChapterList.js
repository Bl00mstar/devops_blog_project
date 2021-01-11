import React, { useState, useEffect } from "react";
import { handleRequest } from "../../../../../store/blog/blog.helpers";
import NewChapter from "./NewChapter";
import EditChapter from "./EditChapter";
import M from "materialize-css/dist/js/materialize.min.js";
import "./index.css";

const ChapterList = ({ goBack, postid }) => {
  const [updated, isUpdated] = useState(false);
  const [editChapter, setEditChapter] = useState("");
  const [chapters, setChapters] = useState([]);
  const [newChapter, setNewChapter] = useState(false);

  const handleEditChapter = (e, val) => {
    e.preventDefault();
    setEditChapter(val);
  };

  const deleteChapter = async (id) => {
    handleRequest("DELETE", `api/blog/chapter/${id}`)
      .then((data) => {
        M.toast({ html: data });
      })
      .catch((err) => {
        M.toast({ html: err });
      })
      .finally(() => {
        //get chapters
      });
  };

  const chapterList = chapters.map((chapter) => {
    return (
      <tr key={chapter.id}>
        <td>{chapter.topic}</td>
        <td>{chapter.content}</td>
        <td>
          {" "}
          <button
            className='btn btn-small blue'
            onClick={(e) => handleEditChapter(e, chapter)}
          >
            <i className='tiny material-icons'>edit</i>
          </button>
        </td>
        <td>
          <button
            className='btn btn-small red'
            onClick={() => deleteChapter(chapter.id)}
          >
            <i className=' tiny material-icons '>delete</i>
          </button>
        </td>
      </tr>
    );
  });

  useEffect(() => {
    handleRequest("GET", `api/blog/chapter/${postid}`).then((data) => {
      setChapters(data);
      isUpdated(false);
    });
  }, [updated]);

  if (newChapter) {
    return (
      <NewChapter
        goBack={() => setNewChapter(false)}
        postId={postid}
        updated={() => isUpdated(true)}
        clearState={() => setNewChapter(false)}
      />
    );
  }

  if (editChapter) {
    return (
      <EditChapter
        chapter={editChapter}
        goBack={() => setEditChapter("")}
        updated={() => isUpdated(true)}
        clearState={() => setEditChapter("")}
      />
    );
  }

  return (
    <div className='row center'>
      <div className='col s12' style={{ overflow: "hidden" }}>
        <div className='col s6'>
          <button className='btn btn small green ' onClick={goBack}>
            Back to Post List
          </button>
        </div>
        <div className='col s6'>
          <button
            className='btn btn small blue '
            onClick={() => setNewChapter(true)}
          >
            Add new chapter
          </button>
        </div>
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Content</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{chapterList}</tbody>
        </table>
      </div>
    </div>
  );
};

export default ChapterList;
