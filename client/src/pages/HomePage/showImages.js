import React, { useState } from "react";

import { connect } from "react-redux";

import Preloader from "../../components/Preloader/linearPreloader";

import ReadPost from "./readPost";
import { useDispatch } from "react-redux";
import { setPost } from "../../store/action/action.actions";

const ShowImages = ({ loading, posts, readPost }) => {
  // const [readPost, setReadPost] = useState("");
  const dispatch = useDispatch();
  if (loading) {
    return <Preloader />;
  }

  if (readPost) {
    return <ReadPost id={readPost} />;
  }

  const list = posts.map((post, key) => {
    return (
      <div className='col s12 m6 l4' key={key}>
        <div className='card'>
          <div className='card-image waves-effect waves-block waves-light'>
            <img className='activator' src={post.photo_url} />
          </div>
          <div className='card-content'>
            <span
              className='card-title activator grey-text text-darken-4 '
              style={{ overflow: "hidden" }}
            >
              {post.title}
              <i className='material-icons right'>more_vert</i>
            </span>
            <p>
              <a
                onClick={() =>
                  dispatch(setPost({ postId: post.id, title: post.title }))
                }
              >
                Continue...
              </a>
            </p>
          </div>
          <div className='card-reveal'>
            <span className='card-title grey-text text-darken-4'>
              {post.title}
              <i className='material-icons right'>close</i>
            </span>
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className='row'>
      <div className='col s12 '>{list}</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  readPost: state.action.post.postId,
  loading: state.action.path.isLoading,
  posts: state.action.path.content,
});

export default connect(mapStateToProps)(ShowImages);
