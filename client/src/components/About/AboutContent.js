import React, { useEffect, useState } from "react";

import { useDispatch } from "react-redux";
import { loadTitle } from "../../store/action/action.actions";

import { handleRequest } from "../../store/blog/blog.helpers";

import Preloader from "../Shared/Layout/linearPreloader";

const AboutContent = () => {
  const [about, setAbout] = useState({});
  const [loading, isLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTitle({ title: "About", path: "about", site: "true" }));
    handleRequest("GET", "api/about/1")
      .then((data) => {
        setAbout(data[0]);
      })
      .then(() => isLoading(false));
  }, []);
  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <>
          <div>photo</div>
          <div>description</div>
        </>
      )}
    </div>
  );
};

export default AboutContent;
