import React from "react";
import { connect } from "react-redux";
import ShowImages from "./showImages";

const HomePage = ({ title }) => {
  return (
    <div>
      <navbar className='top-nav'>
        {/* <navbar className='nav-wrapper'> */}
        <h3
          className='header center blue-text text-darken-3'
          style={{ fontFamily: "Poppins" }}
        >
          {title}
        </h3>
        {/* </navbar> */}
      </navbar>
      {/* <header className='center'>DevOps Journal</header> */}
      <ShowImages />
      <footer>FOOTERHERE</footer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  title: state.action.path.title,
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
