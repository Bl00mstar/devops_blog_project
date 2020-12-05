import React from "react";
import { connect } from "react-redux";

const Navbar = ({ title }) => {
  return (
    <div className='top-nav'>
      <h3
        className='header center blue-text text-darken-3'
        style={{ fontFamily: "Poppins" }}
      >
        {title}
      </h3>
    </div>
  );
};

const mapStateToProps = (state) => ({
  //   title: state.action.path.title,
});

export default connect(mapStateToProps)(Navbar);
