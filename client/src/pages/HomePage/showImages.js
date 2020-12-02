import React, { useState, useEffect } from "react";

import { connect } from "react-redux";

import Preloader from "../../components/Preloader/linearPreloader";

const ShowImages = ({ postsLoading, posts }) => {
  if (postsLoading) {
    return <Preloader />;
  }

  const list = posts.map((post) => {
    return (
      <div class='col s12 m6 l4'>
        <div class='card'>
          <div class='card-image waves-effect waves-block waves-light'>
            <img class='activator' src={post.photo_url} />
          </div>
          <div class='card-content'>
            <span class='card-title activator grey-text text-darken-4'>
              {post.title}
              <i class='material-icons right'>more_vert</i>
            </span>
            <p>
              <a href='#'>Continue...</a>
            </p>
          </div>
          <div class='card-reveal'>
            <span class='card-title grey-text text-darken-4'>
              {post.title}
              <i class='material-icons right'>close</i>
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
      <div>SHOW MORE....</div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postsLoading: state.blog.posts.isLoading,
  posts: state.blog.posts.postsData,
});

export default connect(mapStateToProps)(ShowImages);
