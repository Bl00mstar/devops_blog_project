import React from 'react';
import PostLayout from './PostLayout';
import { getPosts } from '@store/blog/blog.actions';
import { handleRequest } from '@store/blog/blog.helpers';
import M from 'materialize-css/dist/js/materialize.min.js';
import { connect } from 'react-redux';

const NewPost = ({ goBack, user, clearState, onGetPosts }) => {
  const handleData = (e, data) => {
    e.preventDefault();
    data['nick'] = user;
    handleRequest('POST', `api/blog/post`, data)
      .then(() => {
        M.toast({ html: 'Post was added.' });
      })
      .catch((err) => {
        M.toast({ html: err });
      })
      .finally(() => {
        clearState();
        onGetPosts();
      });
  };
  return (
    <div>
      <button className="btn btn-small green " onClick={goBack}>
        Back to List
      </button>
      <PostLayout post={''} name={'CREATE'} handleState={handleData} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user.user.nick,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => {
      dispatch(getPosts());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(NewPost);
