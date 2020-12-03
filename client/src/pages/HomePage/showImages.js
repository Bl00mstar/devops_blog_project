import React, { useState } from "react";

import { connect } from "react-redux";

import Preloader from "../../components/Preloader/linearPreloader";

import ReadPost from "./readPost";

const ShowImages = ({ postsLoading, posts }) => {
  const [readPost, setReadPost] = useState("");

  if (postsLoading) {
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
            <span className='card-title activator grey-text text-darken-4'>
              {post.title}
              <i className='material-icons right'>more_vert</i>
            </span>
            <p>
              <a onClick={() => setReadPost(post.id)}>Continue...</a>
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
  postsLoading: state.blog.posts.isLoading,
  posts: state.blog.posts.postsData,
});

export default connect(mapStateToProps)(ShowImages);
