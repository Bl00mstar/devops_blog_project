import React from "react";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";

const Settings = ({ isUserAuthenticated }) => {
  let navigate = useNavigate();

  if (!isUserAuthenticated) {
    navigate("/login");
  }

  return <div>Settings</div>;
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Settings);
