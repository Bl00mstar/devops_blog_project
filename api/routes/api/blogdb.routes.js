const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const blogController = require("../../controllers/blog.controllers");
const postController = require("../../controllers/post.controllers");

router.get("/topics", [blogController.getTopics]);
router.post("/topics", [blogController.postTopics]);
router.delete("/topics/:id", [blogController.deleteTopic]);

router.get("/tools", [blogController.getTools]);
router.post("/tools", [blogController.postTools]);
router.delete("/tools/:id", [blogController.deleteTool]);

// PATH /api/blog

router.post("/post", auth, [
  postController.validate("addPost"),
  postController.postPost,
]);

module.exports = router;
