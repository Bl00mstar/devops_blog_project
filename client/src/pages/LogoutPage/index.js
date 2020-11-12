import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../store/user/user.actions";
import { useNavigate } from "react-router-dom";
import { connect } from "react-redux";

const Logout = ({ isUserAuthenticated }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(logoutUser());
  });

  if (!isUserAuthenticated) {
    navigate("/");
  }
  return <div>Logout</div>;
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Logout);
