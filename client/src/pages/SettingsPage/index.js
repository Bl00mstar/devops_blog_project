import React, { useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { useNavigate } from "react-router-dom";

import UploadContainer from "../../components/Settings/uploadContainer";
import Tool from "../../components/Settings/addTool";
import Post from "../../components/Settings/addPost";
import Topic from "../../components/Settings/addTopic";
import Chapter from "../../components/Settings/addChapter";

const Settings = ({ isUserAuthenticated }) => {
  let navigate = useNavigate();

  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }, []);

  if (!isUserAuthenticated) {
    navigate("/login");
  }

  const tools = [
    { name: "Topic", element: <Topic /> },
    { name: "Tool", element: <Tool /> },
    { name: "Post", element: <Post /> },
    // { name: "Chapter", element: <Chapter /> },
  ];

  let settingsTools;
  settingsTools = tools.map(({ name, element }, key) => {
    return (
      <li key={key}>
        <div id='name' className='collapsible-header'>
          {name}
        </div>
        <div className='collapsible-body'>{element}</div>
      </li>
    );
  });

  return (
    <div className='valign' style={{ width: "100%" }}>
      <span className='card-title black-text center'></span>
      <ul className='collapsible'>{settingsTools}</ul>
      <UploadContainer />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(Settings);