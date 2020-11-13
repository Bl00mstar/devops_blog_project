import React, { useState, useEffect } from "react";
import axios from "axios";

import * as api from "../../services/settings.service";
import M from "materialize-css/dist/js/materialize.min.js";
import InputForm from "../Input/InputForm";
import Button from "../Button/Button";

export default function AddTool() {
  const [tools, setTools] = useState([]);
  const [topics, setTopics] = useState([]);
  const [newTool, setNewTool] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("select");

  const getTopics = async () => {
    try {
      const topics = await api.fetchData("api/blog/topics", "GET");
      setTopics(topics);
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  const getTools = async () => {
    try {
      const tools = await api.fetchData("api/blog/tools", "GET");
      setTools(tools);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTool = async (id) => {
    try {
      const tools = await api.fetchData(`api/blog/tools/${id}`, "DELETE");
      setTools(tools.filter((tool) => tool.tool_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let topicId = parseInt(selectedTopic);
    try {
      await api
        .postData(`api/blog/tools`, { tool: newTool, topic: topicId })
        .then((data) => {
          data.success
            ? getTopics() && M.toast({ html: newTool + " was added" })
            : M.toast({ html: "Failure." });
        });
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  const handleChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  useEffect(() => {
    getTools();
    getTopics();
  }, []);

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='col s7'>
          <thead></thead>
          <tbody>
            {tools.map((tool) => (
              <tr key={tool.tool_id}>
                <td>{tool.description}</td>
                <td>
                  <button className='btn btn-small red'>
                    <i className=' tiny material-icons '>delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
        <div className='col s5'>
          <card>
            <form onSubmit={handleSubmit}>
              <div>
                <label>Select your topic</label>
                <select
                  className='browser-default'
                  onChange={handleChange}
                  value={selectedTopic}
                >
                  <option value='select' disabled selected>
                    Choose your option
                  </option>
                  {topics.map(({ description, topic_id }) => (
                    <option id={topic_id} value={topic_id}>
                      {description}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <InputForm
                  label={"addTool"}
                  name={"AddTool"}
                  type={"text"}
                  onChange={(e) => setNewTool(e.target.value)}
                />
              </div>
              <div>
                <Button type={"submit"} value={"Add"} />
              </div>
            </form>
          </card>
        </div>
      </div>
    </div>
  );
}
