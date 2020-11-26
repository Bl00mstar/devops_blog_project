import M from "materialize-css/dist/js/materialize.min.js";

import React, { useEffect } from "react";

export default function TabsEffect({ tabsContent }) {
  useEffect(() => {
    var el = document.querySelectorAll(".tabs");
    M.Tabs.init(el);
    console.log(tabsContent);
    console.log(tabsContent);
  });

  //   let arr = [
  //     { label: "Show all", name: "list", content: "list of chapters" },
  //     {
  //       label: "Add chapter",
  //       name: "Add",
  //       content: "Dodaj nowy",
  //     },
  //   ];
  //   console.log(arr);

  let li_options = tabsContent.map((tab, index) => (
    <li key={index} class='tab'>
      <a href={"#" + tab.name}>{tab.label}</a>
    </li>
  ));

  let li_content = tabsContent.map((tab, index) => (
    <div id={tab.name} class='col s12'>
      <p>{tab.content}</p>
    </div>
  ));

  let tab_content = (
    <div>
      <ul class='tabs tabs-fixed-width tab-demo z-depth-1'>{li_options}</ul>
      {li_content}
    </div>
  );

  console.log(tab_content);

  return <div>{tab_content}</div>;
}
