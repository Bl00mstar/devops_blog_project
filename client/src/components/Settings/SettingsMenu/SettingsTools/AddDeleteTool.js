import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { handleRequest } from "../../../../store/blog/blog.helpers";
import { getTopicsTools } from "../../../../store/blog/blog.actions";

const AddDeleteTool = ({ tools, topics }) => {
  const [tool, setTool] = useState("");
  const [selectedTopic, setSelectedTopic] = useState("select");

  const dispatch = useDispatch();

  const handleDeleteTool = (id) => {
    handleRequest("DELETE", `api/blog/tools/${id}`)
      .then(() => M.toast({ html: `Tool was deleted.` }))
      .catch((err) => M.toast({ html: err }))
      .finally(() => {
        dispatch(getTopicsTools());
      });
  };
  const handleAddTool = (e) => {
    e.preventDefault();
    if (tool.length > 2) {
      const newTool = { tool: tool, topic: selectedTopic };
      handleRequest("POST", `api/blog/tools`, { newTool })
        .then(() => M.toast({ html: `${tool} was added.` }) && setTool(""))
        .catch((err) => M.toast({ html: err }))
        .finally(() => {
          dispatch(getTopicsTools());
        });
    } else {
      M.toast({ html: "Field required minimum 3 characters." });
    }
  };

  const handleChange = (e) => {
    setSelectedTopic(e.target.value);
  };

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='col s7'>
          <tbody>
            {tools.map((tool, key) => (
              <tr key={key}>
                <td>{tool.description}</td>
                <td>
                  <button
                    className='btn btn-small red'
                    onClick={() => handleDeleteTool(tool.id)}
                  >
                    <i className=' tiny material-icons '>delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
        <div className='col s5'>
          <card>
            <form onSubmit={handleAddTool}>
              <div>
                <label>Select topic</label>
                <select
                  className='browser-default'
                  onChange={handleChange}
                  value={selectedTopic}
                >
                  <option value='select' disabled selected>
                    Choose your option
                  </option>
                  {topics.map(({ description, id }, key) => (
                    <option key={key} id={id} value={id}>
                      {description}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label for='newTool'>New tool</label>
                <input
                  id='newTool'
                  value={tool}
                  type='text'
                  className='validate'
                  onChange={(e) => setTool(e.target.value)}
                ></input>
              </div>
              <button type='submit' className='waves-effect waves-light btn'>
                ADD
              </button>
            </form>
          </card>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  topics: state.blog.topics.topicsData,
  tools: state.blog.tools.toolsData,
});

export default connect(mapStateToProps)(AddDeleteTool);
