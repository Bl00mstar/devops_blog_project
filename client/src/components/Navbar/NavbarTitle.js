import React from "react";
import { connect } from "react-redux";
import "./index.css";

const Navbar = ({ selectedPath, pageTitle, isSite, postTitle }) => {
  let title;

  if (postTitle) {
    title = postTitle;
  } else {
    if (isSite) {
      title = pageTitle;
    } else {
      if (selectedPath) {
        title = selectedPath;
      } else {
        title = pageTitle;
      }
    }
  }

  return (
    <div className='top-nav'>
      <h3 className='header center blue-text text-darken-3'>{title}</h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  postTitle: state.action.post.title,
  selectedPath: state.action.path.selectedPath,
  isSite: state.action.route.site,
  pageTitle: state.action.route.title,
});

export default connect(mapStateToProps)(Navbar);
