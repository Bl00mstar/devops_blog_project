import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import Preloader from "../../components/Preloader/linearPreloader";

import "./index.css";

import { getChapters } from "../../store/blog/blog.helpers";

const ReadPost = ({ posts, id }) => {
  const [loading, setLoading] = useState(true);
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    getChapters(id).then((data) =>
      data.success ? setChapters(data.message) : console.log("falure")
    );
  }, []);

  //   const choosenChapters = chapters.map((chapter) => {
  //     if (chapter) {
  //       setLoading(false);
  //     } else {
  //       return <Preloader />;
  //     }
  //   });

  const choosenPost = posts.map((post, key) => {
    if (post.id === id) {
      return (
        <div className='center-align' key={key}>
          <div>{post.title}</div>
          <div>{post.content}</div>
          <img width='300' src={post.photo_url}></img>
        </div>
      );
    }
  });

  return (
    <div>
      {choosenPost}
      <div>
        {chapters.map((chapter, key) => (
          <div key={key}>
            <div className='divider'></div>
            <div className='section'>
              <div className='center-align'>
                <h5>{chapter.topic}</h5>
                <img
                  width='300'
                  className='materialboxed'
                  src={chapter.photo_url}
                ></img>
              </div>
              <p>{chapter.content}</p>
              <pre className=' language-markup'>
                <code className=' language-markup '>{chapter.code}</code>
              </pre>

              <h2>{chapter.priority}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts.postsData,
});

export default connect(mapStateToProps)(ReadPost);
