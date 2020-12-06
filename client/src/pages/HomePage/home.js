import React, { useEffect } from "react";
import { connect } from "react-redux";
import ShowImages from "./showImages";
import LastReading from "./lastReading";
import { useDispatch } from "react-redux";
import { loadTitle } from "../../store/action/action.actions";

const HomePage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTitle({ title: "DevOps Notes", path: "home" }));
  }, []);
  return (
    <div>
      <ShowImages />
      <LastReading />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(HomePage);
