import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { useForm } from "react-hook-form";
import Select from "react-select";
import UploadContainer from "./uploadContainer";

import { postChapter } from "../../store/blog/blog.helpers";

const NewChapter = ({ posts }) => {
  const [indexes, setIndexes] = React.useState([]);
  const [counter, setCounter] = React.useState(1);
  const { register, handleSubmit } = useForm();
  const [post, setPost] = useState("");

  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  });

  const onSubmit = (formData) => {
    let chapters = { postId: post, chaptersContent: formData };
    console.log(formData);
    try {
      postChapter(chapters).then((data) => console.log(data));
    } catch (error) {
      console.log(error.data);
    }
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

  const handleImage = () => {
    console.log("asd");
  };

  const options = posts.map((post) => ({
    value: post.id,
    label: post.title,
    key: post.id,
  }));

  if (!post) {
    return (
      <div style={{ height: "400px" }}>
        <Select
          options={options}
          onChange={setPost}
          placeholder='Select post'
        />
        After selecting a post you will be redirected.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='row center'>
        <div className='col s12'>
          <div className='col s3'>
            <button
              className='waves-effect waves-light btn'
              onClick={() => setPost(null)}
            >
              <i class='material-icons'>arrow_back</i>
            </button>
          </div>
          <div className='col s3'>
            <button
              className='waves-effect waves-light btn'
              onClick={addChapter}
            >
              Add Chapter
            </button>
          </div>
          <div className='col s3'>
            <button
              className='waves-effect waves-light btn'
              onClick={clearChapters}
            >
              Clear Chapters
            </button>
          </div>
          <div className='col s3'>
            <button className='waves-effect waves-light btn' type='submit'>
              submit
            </button>
          </div>
        </div>
        <div className='container'>
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
                        <UploadContainer imageUrl={handleImage} />
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </form>
  );
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts.postsData,
});

export default connect(mapStateToProps)(NewChapter);
