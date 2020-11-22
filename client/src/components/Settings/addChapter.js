import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useForm } from "react-hook-form";

import UploadContainer from "./uploadContainer";
export default function NewPost() {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(1);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const addChapter = () => {
    setIndexes((prevIndexes) => [...prevIndexes, counter]);
    setCounter((prevCounter) => prevCounter + 1);
  };

  const removeChapter = (index) => () => {
    setIndexes((prevIndexes) => [
      ...prevIndexes.filter((item) => item !== index),
    ]);
    setCounter((prevCounter) => prevCounter - 1);
  };

  const clearChapters = () => {
    setIndexes([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <button type='button' onClick={addChapter}>
        Add Chapter
      </button>
      <button type='button' onClick={clearChapters}>
        Clear Chapters
      </button>
      <input type='submit' />
      {indexes.map((index) => {
        const fieldName = `chapters[${index}]`;
        return (
          <div className='row center'>
            <ul className='collapsible'>
              <li>
                <div id={index} className='collapsible-header'>
                  Chapter {index}
                </div>
                <div className='collapsible-body'>
                  <button
                    className='btn-small right red'
                    type='button'
                    onClick={removeChapter(index)}
                  >
                    Remove
                  </button>
                  <label>
                    Chapter {index} Title:
                    <input
                      type='text'
                      name={`${fieldName}.chapterTitle`}
                      ref={register}
                    />
                  </label>
                  <UploadContainer></UploadContainer>
                  {/* <form action='#'>
                    <div class='file-field input-field'>
                      <div class='btn-small'>
                        <span>Chapter image</span>
                        <input type='file'></input>
                      </div>
                      <div class='file-path-wrapper'>
                        <input class='file-path validate' type='text'></input>
                      </div>
                    </div>
                  </form> */}
                  <div class='row'>
                    <form class='col s12'>
                      <div class='row'>
                        <div class='input-field col s12'>
                          <textarea
                            class='materialize-textarea'
                            name={`${fieldName}.chapterContent`}
                            ref={register}
                          ></textarea>
                          <label for='textarea1'>Content</label>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        );
      })}
    </form>
  );
}
