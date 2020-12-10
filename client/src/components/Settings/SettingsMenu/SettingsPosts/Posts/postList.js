import React, { useState } from "react";
import { handleRequest } from "../../../../../store/blog/blog.helpers";
import M from "materialize-css/dist/js/materialize.min.js";
import EditPost from "./editPost";

import { getPosts } from "../../../../../store/blog/blog.actions";
import { connect } from "react-redux";

const PostList = ({ posts, onGetPosts }) => {
  const [id, setId] = useState("");
  const handleId = () => {
    setId("");
  };

  const handleEdit = async (id) => {
    setId(id);
  };

  const deletePost = async (id) => {
    await handleRequest("DELETE", `api/blog/post/${id}`)
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
            onClick={() => handleEdit(post.id)}
          >
            <i className='tiny material-icons'>edit</i>
          </button>
        </th>
        <th>
          {" "}
          <button
            className='btn btn-small red'
            onClick={() => deletePost(post.id)}
          >
            <i className=' tiny material-icons '>delete</i>
          </button>
        </th>
      </tr>
    );
  });

  return (
    <div id='postList'>
      {id ? (
        <EditPost postId={id} clearId={handleId} />
      ) : (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>{list}</tbody>
        </table>
      )}
    </div>
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
