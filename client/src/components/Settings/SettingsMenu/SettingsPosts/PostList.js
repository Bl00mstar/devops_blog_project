import React from "react";
import { getPosts } from "../../../../store/blog/blog.actions";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { handleRequest } from "../../../../store/blog/blog.helpers";

const PostList = ({ posts, onEdit, onGetPosts, onChapter }) => {
  const deletePost = async (id) => {
    handleRequest("DELETE", `api/blog/post/${id}`)
      .then((data) => {
        M.toast({ html: data });
      })
      .catch((err) => {
        M.toast({ html: err });
      })
      .finally(() => {
        onGetPosts();
      });
  };

  const list = posts.map((post) => {
    return (
      <tr key={post._id}>
        <th>{post.title}</th>
        <th>
          <button
            className='btn btn-small blue'
            value={post.id}
            onClick={(e) => onEdit(e, post.id)}
          >
            <i className='tiny material-icons'>edit</i>
          </button>
        </th>
        <th>
          <button
            className='btn btn-small red'
            onClick={() => deletePost(post.id)}
          >
            <i className=' tiny material-icons '>delete</i>
          </button>
        </th>
        <th>
          <button
            className='btn btn-small green'
            onClick={(e) => onChapter(e, post.id)}
          >
            <i className=' tiny material-icons '>reorder</i>
          </button>
        </th>
      </tr>
    );
  });
  return (
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Edit</th>
          <th>Delete</th>
          <th>Chapters</th>
        </tr>
      </thead>
      <tbody>{list}</tbody>
    </table>
  );
};

const mapStateToProps = (state) => ({
  posts: state.blog.posts.postsData,
});

const mapDispatchToProps = (dispatch) => {
  return {
    onGetPosts: () => {
      dispatch(getPosts());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostList);
