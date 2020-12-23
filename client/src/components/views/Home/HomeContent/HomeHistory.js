import React from 'react';
import { connect } from 'react-redux';
import { useDispatch } from 'react-redux';
import { setPost } from '@store/action/action.actions';

export const HomeHistory = ({ value, posts }) => {
  const dispatch = useDispatch();

  const choosenPost = posts.map(({ id, title }, key) => {
    if (parseInt(value) === parseInt(id)) {
      return (
        <tr key={key}>
          <td>{title}</td>
          <td className="center">
            {' '}
            <a
              className="btn-floating btn-small blue"
              onClick={() => dispatch(setPost({ postId: id, title: title }))}
            >
              <i className="material-icons">arrow_forward</i>
            </a>
          </td>
        </tr>
      );
    }
  });

  return choosenPost;
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts.postsData,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHistory);
