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
  const handleImage = (name, value, a) => {
    console.log(name, value, a);
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
    setCounter(1);
    setIndexes([]);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div class='row'>
        <div class='col s4'>
          <a
            className='waves-effect waves-light btn-small blue'
            onClick={addChapter}
          >
            Add Chapter
          </a>
        </div>
        <div class='col s4'>
          <a
            className='waves-effect waves-light btn-small blue'
            onClick={clearChapters}
          >
            Clear Chapters
          </a>
        </div>
        <div class='col s4'>
          <a className='waves-effect waves-light btn-small blue'>Submit?</a>
        </div>
      </div>
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

                  <UploadContainer imageUrl={handleImage} />
                  <label>
                    Image {index} Url:
                    <input
                      type='text'
                      name={`${fieldName}.imageUrl`}
                      ref={register}
                    />
                  </label>
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
