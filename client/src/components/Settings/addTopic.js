import React, { useState, useEffect } from "react";

import M from "materialize-css/dist/js/materialize.min.js";

import * as api from "../../services/settings.service";

import InputForm from "../Input/InputForm";
import Button from "../Button/Button";

export default function AddTopic() {
  const [newTopic, setNewTopic] = useState("");
  const [topics, setTopics] = useState([]);

  const getTopics = async () => {
    try {
      const topics = await api.fetchData("api/blog/topics", "GET");
      setTopics(topics);
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  const deleteTopic = async (id) => {
    try {
      const deleteTopic = await api.fetchData(
        `api/blog/topics/${id}`,
        "DELETE"
      );
      if (deleteTopic.success) {
        getTopics() && M.toast({ html: deleteTopic.msg });
      } else {
        M.toast({ html: deleteTopic.msg });
      }
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  useEffect(() => {
    getTopics();
  }, []);

  const handleTopic = async (e) => {
    e.preventDefault();
    try {
      await api
        .postData(`api/blog/topics`, { newTopic: newTopic })
        .then((data) => {
          data.success
            ? getTopics() && M.toast({ html: newTopic + " was added" })
            : M.toast({ html: "Failure." });
        });
    } catch (err) {
      M.toast({ html: err.message });
    }
  };

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='col s7'>
          <thead></thead>
          <tbody>
            {topics.map((topic) => (
              <tr key={topic.topic_id}>
                <td>{topic.description}</td>
                <td>
                  <button
                    className='btn btn-small red'
                    onClick={() => deleteTopic(topic.topic_id)}
                  >
                    <i className=' tiny material-icons '>delete</i>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </div>
        <div className='col s5'>
          <form onSubmit={handleTopic}>
            <InputForm
              label={"addTopic"}
              name={"NewTopic"}
              type={"text"}
              onChange={(e) => setNewTopic(e.target.value)}
            />
            <Button type={"submit"} value={"Add"} />
          </form>
        </div>
      </div>
    </div>
  );
}
