import React from "react";
import { connect } from "react-redux";
import LoginForm from "./LoginForm";

import { useNavigate } from "react-router-dom";

const Login = ({ isUserAuthenticated }) => {
  let navigate = useNavigate();

  if (isUserAuthenticated) {
    navigate("/settings");
  }

  return <LoginForm />;
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Login);
