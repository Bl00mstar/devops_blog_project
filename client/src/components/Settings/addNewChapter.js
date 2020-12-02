import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { useForm } from "react-hook-form";

import UploadContainer from "./uploadContainer";

export default function NewPost() {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(0);
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

                  <div class='row'>
                    <div class='row'>
                      <div class='input-field col s12'>
                        <textarea
                          class='materialize-textarea'
                          name={`${fieldName}.chapterTitle`}
                          ref={register}
                        ></textarea>
                        <label for='textarea1'>Title</label>
                      </div>
                    </div>
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
                    <div class='row'>
                      <div class='input-field col s12'>
                        <textarea
                          class='materialize-textarea'
                          name={`${fieldName}.chapterCode`}
                          ref={register}
                        ></textarea>
                        <label for='textarea1'>Code</label>
                      </div>
                    </div>
                    <div class='row'>
                      <div class='input-field col s12'>
                        <textarea
                          class='materialize-textarea'
                          name={`${fieldName}.chapterImage`}
                          ref={register}
                        ></textarea>
                        <label for='textarea1'>Image</label>
                      </div>
                    </div>
                    <UploadContainer />
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
