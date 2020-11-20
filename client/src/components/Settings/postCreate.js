import React, { useEffect, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";

import * as api from "../../services/settings.service";

import AddChapter from "./addChapter";

import UploadContainer from "./uploadContainer";

import InputForm from "../Input/InputForm";
import SelectForm from "../Select/SelectForm";

const PostCreate = () => {
  const [showModal, setShowModal] = useState(false);
  const [tools, setTools] = useState([]);
  const [selectedTools, setSelectedTools] = useState(null);
  const [name, setName] = useState("");
  const [value, setValue] = useState(0);
  const [fields, setFields] = useState();

  useEffect(() => {
    getTools();
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
    const modal = document.querySelectorAll(".amount");
    M.Modal.init(modal, options);
    if (showModal) {
      modal[1].M_Modal.close();

      setShowModal(false);
    }
  }, [showModal]);

  useEffect(() => {
    console.log(selectedTools);
  }, [selectedTools]);

  const getTools = async () => {
    try {
      const tools = await api.fetchData("api/blog/tools", "GET");
      setTools(tools);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className='row center'>
      <a
        className='btn black waves-effect waves-light modal-trigger'
        data-target='add-amount'
      >
        Create Post
      </a>
      <div id='add-amount' className='modal amount'>
        <div className='modal-content'>
          <form id='add_amount'>
            <h5>Create post:</h5>
            <div class='input-field col s12'>
              <InputForm
                label={"post-title"}
                type={"text"}
                name={"Topic Title"}
                onChange={(e) => console.log(e.target.value)}
              />
            </div>

            <div class='input-field col s12'>
              <SelectForm
                data={tools}
                value={"tool_id"}
                name={"description"}
                key={"tool_id"}
                onChange={setSelectedTools}
              />
            </div>
            <div class='input-field col s12'>
              <UploadContainer />
            </div>
            {/* <button class='btn-small'>add chapter</button> */}

            <AddChapter></AddChapter>
          </form>
          <button className='btn-small'>CREATE</button>
        </div>
      </div>
    </div>
  );
};

export default PostCreate;
