import M from "materialize-css/dist/js/materialize.min.js";

import React, { useEffect } from "react";

import "./index.css";

export default function TabsEffect({ tabsContent }) {
  useEffect(() => {
    var el = document.querySelectorAll(".tabs");
    M.Tabs.init(el);
  });

  //list of available labels from postOptions
  let li_options = tabsContent.map((tab, index) => (
    <li key={index} className='tab'>
      <a href={"#" + tab.name}>{tab.label}</a>
    </li>
  ));

  //
  let div_content = tabsContent.map((div, index) => (
    <div key={index} id={div.name} className='col s12'>
      <p>{div.content}</p>
    </div>
  ));

  let tab_content = (
    <div>
      <ul className='tabs tabs-fixed-width tab-demo z-depth-1 '>
        {li_options}
      </ul>
      {div_content}
    </div>
  );

  return <div>{tab_content}</div>;
}
