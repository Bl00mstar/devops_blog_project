const pool = require("../db");
const { body, validationResult, Result } = require("express-validator");

exports.postPost = async (req, res) => {
  const errorFormatter = ({ msg }) => {
    return `${msg}`;
  };
  const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    return res.status(422).json({
      success: false,
      message: { errors: result.array() },
    });
  }
  try {
    const {
      titlePost,
      image,
      descriptionPost,
      toolsPost,
      user,
    } = req.body.newPost;

    console.log(toolsPost);

    const post = await pool.query(
      "INSERT INTO posts(title, content, photo_url,user_nick) VALUES($1,$2,$3,$4) RETURNING(id) ",
      [titlePost, descriptionPost, image, user]
    );
    let post_id = post.rows[0].id;

    if (post_id) {
      for (const key in toolsPost) {
        if (user.hasOwnProperty(key)) {
          let tool_id = `${toolsPost[key].value}`;
          await pool.query(
            "INSERT INTO tools_posts(tool_id, post_id) VALUES ($1,$2)",
            [tool_id, post_id]
          );
        }
      }
    }

    return res.status(200).json({
      success: true,
      message: "post ok",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "post fail",
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await pool.query("SELECT * FROM posts;");
    return res.status(200).json({
      success: true,
      message: posts.rows,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "post fail",
    });
  }
};

exports.deletePost = async (req, res) => {
  console.log(req.body);
  try {
    const { id } = req.params;
    const delPost = await pool.query("DELETE FROM posts WHERE id=$1", [id]);
    return res.status(200).json("deleted");
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    console.log(req.params);
    const { id } = req.params;
    const selectPost = await pool.query("SELECT * FROM posts WHERE id = $1", [
      id,
    ]);
    console.log(selectPost);
    return res.status(200).json({
      success: true,
      message: selectPost.rows,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  try {
    const updPost = await pool.query(
      "UPDATE posts SET title=newtitle where id=$1",
      [13]
    );
    return res.status(200).json("updated");
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.validate = (method) => {
  switch (method) {
    case "addPost": {
      return [
        body("newPost.titlePost", "Please input correct title.")
          .not()
          .isEmpty(),
        body("newPost.image", "Please upload image.").not().isEmpty(),
        body("newPost.descriptionPost", "Please input correct description.")
          .not()
          .isEmpty(),
        body("newPost.toolsPost", "Please select at least one tool.")
          .not()
          .isEmpty(),
        body("newPost.user", "Not authorized.").not().isEmpty(),
      ];
    }
  }
};
