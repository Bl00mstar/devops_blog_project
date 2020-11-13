import React, { useState, useEffect } from "react";
import axios from "axios";

import * as api from "../../services/settings.service";

import InputForm from "../Input/InputForm";
import Button from "../Button/Button";

export default function AddTool() {
  const [tools, setTools] = useState([]);

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

  useEffect(() => {
    getTools();
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
                  <button
                    className='btn btn-small red'
                    onClick={() => deleteTool(tool.tool_id)}
                  >
                    <i className=' tiny material-icons '>delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </div>
  );
}
