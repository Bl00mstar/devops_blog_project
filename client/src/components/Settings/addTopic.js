import React, { useState, useEffect } from "react";
import axios from "axios";

import * as api from "../../services/settings.service";

import InputForm from "../Input/InputForm";
import Button from "../Button/Button";

export default function AddTopic() {
  const [reload, setReload] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [topics, setTopics] = useState([]);

  const getTopics = async () => {
    try {
      const topics = await api.fetchData("api/blog/topics", "GET");
      setTopics(topics);
    } catch (err) {
      console.error(err.message);
    }
  };

  const deleteTopic = async (id) => {
    try {
      const topics = await api.fetchData(`api/blog/topics/${id}`, "DELETE");
      setTopics(topics.filter((topic) => topic.topic_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTopics();
  }, []);

  const handleTopic = async (e) => {
    e.preventDefault();
    // setReload("");
    await api.postData(`api/blog/topics`, { newTopic: newTopic });
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
