import React from "react";
import { useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setPost } from "../../../store/action/action.actions";
import HomePostChapters from "./HomePostChapters";
import Preloader from "../../Shared/Layout/linearPreloader";
import "./index.css";

const HomePosts = ({ isLoading, posts, selectedPost }) => {
  const dispatch = useDispatch();
  if (isLoading) {
    return <Preloader />;
  }

  if (selectedPost) {
    return <HomePostChapters id={selectedPost} />;
  }

  const list = posts.map((post, key) => {
    return (
      <div className='col s12 m6 l4' key={key}>
        <div className='card'>
          <div className='card-image waves-effect waves-block waves-light'>
            <img className='activator' src={post.photo_url} />
          </div>
          <div className='card-content'>
            <span className='card-title activator grey-text text-darken-4 post-title'>
              {post.title}
              <i className='material-icons right'>more_vert</i>
              <br></br>
              <a
                onClick={() =>
                  dispatch(setPost({ postId: post.id, title: post.title }))
                }
              >
                Continue...
              </a>
            </span>
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
  selectedPost: state.action.post.postId,
  isLoading: state.action.path.isLoading,
  posts: state.action.path.content,
});

export default connect(mapStateToProps)(HomePosts);
