const pool = require("../config/db");

exports.getAbout = async (req, res) => {
  try {
    const about = await pool.query("SELECT * FROM about;");
    return res.status(200).json({
      message: about.rows,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

exports.editAbout = async (req, res) => {
  const { id } = req.params;
  const { content, photo_url } = req.body;
  try {
    await pool.query(
      "UPDATE about SET content=$2, photo_url=$3 WHERE id = $1",
      [id, content, photo_url]
    );
    return res.status(200).json({
      message: "About updated!",
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
