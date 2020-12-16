const pool = require("../config/db");
const { body, validationResult, Result } = require("express-validator");

exports.postChapter = async (req, res) => {
  const { id } = req.params;
  const { topic, content, code, photo_url } = req.body;

  pool.query(
    "INSERT INTO chapters(post_id,topic,content,code,photo_url) VALUES ($1,$2,$3,$4,$5)",
    [id, topic, content, code, photo_url]
  );

  try {
    const addChapter = await pool.query(
      "SELECT * FROM chapters WHERE id = $1",
      [id]
    );
    return res.status(200).json({
      success: true,
      message: addChapter.rows,
    });
  } catch (error) {
    res.status(400);
  }
};

exports.getChapterById = async (req, res) => {
  try {
    const { id } = req.params;
    const selectedChapter = await pool.query(
      "SELECT * FROM chapters WHERE id = $1",
      [id]
    );
    return res.status(200).json({
      success: true,
      message: selectedChapter.rows,
    });
  } catch (error) {
    res.status(400);
  }
};

exports.getChaptersByPostId = async (req, res) => {
  try {
    const { id } = req.params;

    const selectChapters = await pool.query(
      "SELECT * FROM chapters WHERE post_id = $1",
      [id]
    );
    return res.status(200).json({
      success: true,
      message: selectChapters.rows,
    });
  } catch (error) {
    res.status(400);
  }
};

exports.postPost = async (req, res) => {
  const { title, content, photo_url, toolsPost, nick } = req.body;
  try {
    const post = await pool.query(
      "INSERT INTO posts(title, content, photo_url,user_nick) VALUES($1,$2,$3,$4) RETURNING(id) ",
      [title, content, photo_url, nick]
    );
    const returnedPostId = post.rows[0].id;
    if (returnedPostId) {
      for (const key in toolsPost) {
        await pool.query(
          "INSERT INTO tools_posts(tool_id, post_id) VALUES ($1,$2)",
          [toolsPost[key].value, returnedPostId]
        );
      }
    }
    return res.status(200).json({
      success: true,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
    });
  }
};

exports.getPost = async (req, res) => {
  try {
    const posts = await pool.query(
      "SELECT * FROM posts ORDER BY created_at desc;"
    );
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

exports.getToolsByPostId = async (req, res) => {
  try {
    const { id } = req.params;
    const tools = await pool.query(
      "SELECT tools.id as value,  tools.description as label FROM tools \
      LEFT JOIN tools_posts on (tools_posts.tool_id = tools.id) \
      LEFT JOIN posts on (posts.id = tools_posts.tool_id) where tools_posts.post_id=$1",
      [id]
    );
    console.log(tools.rows);
    return res.status(200).json({
      success: true,
      message: tools.rows,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "post fail",
    });
  }
};

exports.deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    const delConn = await pool.query(
      "DELETE FROM tools_posts WHERE post_id=$1",
      [id]
    );
    const delPost = await pool.query("DELETE FROM posts WHERE id=$1", [id]);
    return res.status(200).json({
      success: true,
      message: "Post deleted.",
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const selectPost = await pool.query("SELECT * FROM posts WHERE id = $1", [
      id,
    ]);
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

exports.findPostByToolName = async (req, res) => {
  const { payload } = req.body;
  try {
    const selectedPosts = await pool.query(
      "SELECT posts.id,posts.title, posts.content,posts.photo_url, tools.description FROM posts left join tools_posts on (tools_posts.post_id = posts.id) LEFT JOIN tools ON (tools.id = tools_posts.tool_id) WHERE tools.description LIKE $1",
      [payload]
    );
    return res.status(200).json({
      success: true,
      message: selectedPosts.rows,
    });
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: error.message,
    });
  }
};

exports.updatePost = async (req, res) => {
  const { id } = req.params;
  const { content, photo_url, title, toolsPost } = req.body;

  await pool
    .query("UPDATE posts SET title=$2, content=$3, photo_url=$4 WHERE id=$1", [
      id,
      title,
      content,
      photo_url,
    ])
    .then(() => {
      pool.query("DELETE from tools_posts WHERE post_id=$1", [id]);
    })
    .then(() => {
      for (const key in toolsPost) {
        pool.query("INSERT INTO tools_posts(tool_id, post_id) VALUES ($1,$2)", [
          toolsPost[key].value,
          id,
        ]);
      }
    })
    .then(() => {
      return res.status(200).json({
        success: true,
      });
    })
    .catch((err) => {
      return res.status(400).json({
        success: false,
        message: err,
      });
    });
};

exports.updateChapter = async (req, res) => {
  const { id, topic, content, code, photo_url } = req.body;

  try {
    const updatedChapter = await pool.query(
      "UPDATE chapters SET topic=$2, content=$3, code=$4,photo_url=$5 WHERE id=$1",
      [id, topic, content, code, photo_url]
    );
    return res.status(200).json({
      success: true,
      message: updatedChapter.rows,
    });
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
