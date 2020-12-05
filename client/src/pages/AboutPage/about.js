import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import { loadTitle } from "../../store/action/action.actions";

const AboutPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTitle("About"));
  }, []);
  return <div>About content</div>;
};

export default AboutPage;
