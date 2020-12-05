import React, { useEffect } from "react";
import { connect } from "react-redux";
import ShowImages from "./showImages";
import { useDispatch } from "react-redux";
import { loadTitle } from "../../store/action/action.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTitle("DevOps Notes"));
  }, []);
  return (
    <div>
      <ShowImages />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
