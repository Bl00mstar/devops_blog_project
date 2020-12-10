import React, { useState } from "react";
import { connect } from "react-redux";
import { useDispatch } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";

import { handleRequest } from "../../../store/blog/blog.helpers";
import { getTopicsTools } from "../../../store/blog/blog.actions";

const AddTopic = ({ topics }) => {
  const [topic, setTopic] = useState("");

  const dispatch = useDispatch();

  const handleDeleteTopic = (id) => {
    handleRequest("DELETE", `api/blog/topics/${id}`)
      .then(() => M.toast({ html: `Topic was deleted.` }))
      .catch((err) => M.toast({ html: err }))
      .finally(() => {
        dispatch(getTopicsTools());
      });
  };

  const handleAddTopic = () => {
    if (topic.length > 4) {
      handleRequest("POST", "api/blog/topics", { newTopic: topic })
        .then(() => M.toast({ html: `${topic} was added.` }) && setTopic(""))
        .catch((err) => M.toast({ html: err }))
        .finally(() => {
          dispatch(getTopicsTools());
        });
    } else {
      M.toast({ html: "Field required minimum 5 characters." });
    }
  };

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='col s7'>
          <tbody>
            {topics.map((topic) => (
              <tr key={topic.id}>
                <td>{topic.description}</td>
                <td>
                  <button
                    className='btn btn-small red'
                    onClick={() => handleDeleteTopic(topic.id)}
                  >
                    <i className=' tiny material-icons '>delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
        <div className='col s5'>
          <div className='input-field col s12'>
            <input
              id='newTopic'
              value={topic}
              type='text'
              className='validate'
              onChange={(e) => setTopic(e.target.value)}
            ></input>
            <label for='newTopic'>New Topic</label>
            <a
              className='waves-effect waves-light btn'
              onClick={() => handleAddTopic()}
            >
              ADD
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  topics: state.blog.topics.topicsData,
});

export default connect(mapStateToProps)(AddTopic);
