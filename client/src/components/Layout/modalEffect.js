import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import Tabs from "./tabsEffect";

export default function ModalEffect(label, id, element) {
  const [showModal, setShowModal] = useState(false);
  useEffect(() => {
    const options = {
      inDuration: 250,
      outDuration: 250,
      opacity: 0.8,
      dismissible: true,
      startingTop: "4%",
      endingTop: "5%",
    };
    var elems = document.querySelectorAll(".collapsible");
    M.Collapsible.init(elems, {});
    const modal = document.querySelectorAll("." + id);
    M.Modal.init(modal, options);
    // console.log(element);
    if (showModal) {
      modal[1].M_Modal.close();

      setShowModal(false);
    }
  }, [showModal]);

  let options = <Tabs tabsContent={element} />;

  return (
    <div className='row center'>
      <a
        className='btn blue waves-effect waves-light modal-trigger'
        data-target={id}
      >
        Create {label}
      </a>
      <div id={id} className={"modal " + id}>
        <div className='modal-content'>{options}</div>
      </div>
    </div>
  );
}
