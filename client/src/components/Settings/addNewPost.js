import React, { useState, useEffect } from "react";
import InputForm from "../Input/InputForm";
import SelectForm from "../Select/SelectForm";
import * as api from "../../services/settings.service";

import M from "materialize-css/dist/js/materialize.min.js";

import UploadContainer from "./uploadContainer";

export default function AddNewPost() {
  const [tools, setTools] = useState([]);
  const [selectedTools, setSelectedTools] = useState(null);
  const [postData, setPostData] = useState({
    titlePost: "",
    toolsPost: [],
    image: "",
  });

  useEffect(() => {
    getTools();
  });

  const getTools = async () => {
    try {
      const tools = await api.fetchData("api/blog/tools", "GET");
      setTools(tools);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    handleCreate("toolsPost", selectedTools);
  }, [selectedTools]);

  const trySend = async () => {
    try {
      await api
        .postData(`api/blog/post`, { newTopic: postData })
        .then((data) => {
          data.success ? console.log("success") : M.toast({ html: "Failure." });
        });
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  const handleCreate = (name, value) => {
    console.log("asd" + name + value);
    setPostData((postData) => ({
      ...postData,
      [name]: value,
    }));
    // trySend(postData);
  };

  return (
    <div className='App'>
      <form>
        <div class='input-field col s12'>
          <InputForm
            id={"postTitle"}
            label={"post-title"}
            type={"text"}
            name={"Post Title"}
            onChange={(e) => handleCreate("titlePost", e.target.value)}
          />
        </div>
        <div class='input-field col s12'>
          {/* <UploadContainer imageUrl={handleCreate} /> */}
          asd
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
      </form>
      <button className='btn-small blue' onClick={trySend}>
        CREATE
      </button>
    </div>
  );
}
