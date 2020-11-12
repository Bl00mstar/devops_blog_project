import React, { useState, useEffect } from "react";
import axios from "axios";

import InputForm from "../Input/InputForm";
import Button from "../Button/Button";

export default function AddTopic() {
  const [reload, setReload] = useState("");
  const [newTopic, setNewTopic] = useState("");
  const [topics, setTopics] = useState([]);

  const deleteTopic = async (id) => {
    try {
      const deleteTopic = await fetch(
        `http://localhost:5000/api/blog/topics/${id}`,
        {
          method: "DELETE",
        }
      );
      setTopics(topics.filter((topic) => topic.topic_id !== id));
    } catch (err) {
      console.error(err.message);
    }
  };

  const getTopics = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/blog/topics");
      const jsonData = await response.json();
      setTopics(jsonData);
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getTopics();
  }, [reload]);

  const handleTopic = (e) => {
    e.preventDefault();
    setReload("");
    axios
      .post("http://192.168.55.200:5000/api/blog/topics", { newTopic })
      .then((response) => {
        response.data.success ? setReload("Success") : alert("Cannot add");
      })
      .catch((err) => alert("Error: " + err));
  };

  return (
    <div className='row'>
      <div className='col s12'>
        <div className='col s7'>
          <tbody>
            {topics.map((topic) => (
              <tr key={topic.topic_id}>
                <td>{topic.description}</td>
                <td>
                  <button
                    className='btn btn-small red'
                    onClick={() => deleteTopic(topic.topic_id)}
                  >
                    <i class=' tiny material-icons '>delete</i>
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
