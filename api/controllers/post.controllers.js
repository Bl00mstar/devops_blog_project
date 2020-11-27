// /api/blog/post
exports.postPost = async (req, res) => {
  try {
    // const topics = await pool.query("SELECT * FROM topics;");
    console.log("asd");
    console.log(req.body);
    return res.status(200).json({
      success: true,
      message: "post ok",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "post fail",
    });
    // return res.status(400).json({ msg: error.message });
  }
};
