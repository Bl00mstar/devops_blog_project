import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadTitle } from "../../store/action/action.actions";

const AboutContent = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTitle({ title: "About", path: "about", site: "true" }));
  }, []);
  return <div>About content</div>;
};

export default AboutContent;
