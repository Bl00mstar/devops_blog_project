const pool = require("../db");

exports.getTopics = async (req, res) => {
  try {
    const topics = await pool.query("SELECT * FROM topics;");
    res.json(topics.rows);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.postTopics = async (req, res) => {
  console.log(req.body);
  const { newTopic } = req.body;
  try {
    const topics = await pool.query(
      "INSERT INTO topics (description) VALUES($1)",
      [newTopic]
    );
    if (topics) {
      return res.status(200).json({
        success: true,
        message: topics,
      });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};

exports.deleteTopic = async (req, res) => {
  console.log("asd");
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM topics WHERE topic_id = $1",
      [id]
    );
    if (deleteTodo) {
      return res.status(200).json({
        success: true,
        msg: "Topic was deleted.",
      });
    }
  } catch (error) {
    return res.status(400).json({ success: false, msg: error.message });
  }
};

exports.getTools = async (req, res) => {
  try {
    const topics = await pool.query("SELECT * FROM tools;");
    res.json(topics.rows);
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
exports.postTools = async (req, res) => {
  const { tool, topic } = req.body;
  try {
    const tools = await pool.query(
      "INSERT INTO tools(topic_id,description) VALUES($1,$2) RETURNING *",
      [topic, tool]
    );
    if (tools) {
      return res.status(200).json({
        success: true,
        message: tools,
      });
    }
  } catch (error) {
    return res.status(400).json({ msg: error.message });
  }
};
exports.deleteTool = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteTodo = await pool.query(
      "DELETE FROM topics WHERE topic_id = $1",
      [id]
    );
    res.json("Todo was deleted!");
  } catch (err) {
    console.log(err.message);
  }
};