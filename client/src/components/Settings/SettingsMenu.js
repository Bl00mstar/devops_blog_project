import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import { loadTitle } from "../../store/action/action.actions";

import M from "materialize-css/dist/js/materialize.min.js";

import AddDeleteTool from "./SettingsMenu/SettingsTools";
import AddDeleteTopic from "./SettingsMenu/SettingsTopics";
import Create from "./SettingsMenu/SettingsPosts/postMenu";

const SettingsMenu = ({ isUserAuthenticated }) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    dispatch(loadTitle({ title: "Settings", path: "settings", site: "true" }));
  }, []);

  useEffect(() => {
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
  }, []);

  if (!isUserAuthenticated) {
    navigate("/login");
  }

  const tools = [
    { name: "Topic", element: <AddDeleteTopic /> },
    { name: "Tool", element: <AddDeleteTool /> },
    { name: "Create", element: <Create /> },
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
    </div>
  );
};

const mapStateToProps = (state) => ({
  isUserLoading: state.user.isLoading,
  isUserAuthenticated: state.user.isAuthenticated,
});

export default connect(mapStateToProps)(SettingsMenu);
