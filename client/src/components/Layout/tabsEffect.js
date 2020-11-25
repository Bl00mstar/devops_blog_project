import M from "materialize-css/dist/js/materialize.min.js";

import React, { useEffect } from "react";

export default function TabsEffect({ tabsContent }) {
  useEffect(() => {
    var el = document.querySelectorAll(".tabs");
    M.Modal.init(el);
    console.log(tabsContent);
    console.log(tabsContent);
  });

  //   let ul_options = tabsContent.map((tab, index) => (
  //     <li class="tab col s6" key={index}> {tab.label} </li>
  //   ));

  return (
    <div class='row'>
      <div class='col s12'>
        <ul class='tabs'>
          {tabsContent.map((tab, index) => (
            <li class='tab col s6' key={index}>
              <a href={"#" + tab.name}>{tab.label}</a>
            </li>
          ))}
        </ul>
      </div>
      <div id={"#Add"} class='col s12'>
        asdasddsa
      </div>
      <div id={"#list"} class='col s12'>
        dddddddddddddd
      </div>
    </div>
  );
}
