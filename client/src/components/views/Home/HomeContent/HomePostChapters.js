import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToHistory } from '@store/action/action.actions';
import { handleRequest } from '@store/blog/blog.helpers';
import './index.css';

const ReadPost = ({ posts, id }) => {
  const dispatch = useDispatch();
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    dispatch(addToHistory(id));
    handleRequest('GET', `api/blog/chapter/${id}`).then((data) =>
      setChapters(data)
    );
  }, []);

  const choosenPost = posts.map((post, key) => {
    if (post.id === id) {
      return (
        <>
          <h6>{post.content}</h6>

          <img className="post-image" src={post.photo_url}></img>
          <div className="divider"></div>
        </>
      );
    }
  });

  return (
    <div>
      {choosenPost}
      <div>
        {chapters.map((chapter, key) => (
          <div key={key}>
            <div className="section">
              <h5>{chapter.topic}</h5>
              <img className="materialboxed" src={chapter.photo_url}></img>

              <p>{chapter.content}</p>
              <pre className=" language-markup ">
                <code className=" language-markup ">{chapter.code}</code>
              </pre>
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
