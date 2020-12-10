const express = require("express");
const router = express.Router();

const { auth } = require("../../middleware/auth");
const blogController = require("../../controllers/blog.controllers");
const postController = require("../../controllers/post.controllers");

router.get("/topics", [blogController.getTopics]);
router.post("/topics", [blogController.postTopics]);
router.delete("/topics/:id", [blogController.deleteTopic]);

router.get("/tools", [blogController.getTools]);
router.get("/tools/:id", [blogController.getToolsByTopicId]);
router.post("/tools", auth, [blogController.postTools]);
router.delete("/tools/:id", auth, [blogController.deleteTool]);

// PATH /api/blog

router.post("/post", auth, [postController.postPost]);
router.get("/post", [postController.getPost]);
router.get("/post/:id", [postController.getPostById]);
router.delete("/post/:id", auth, [postController.deletePost]);

router.post("/toolpost", [postController.findPostByToolName]);

// /api/blog/chapter

router.post("/chapter", auth, [postController.postChapter]);
router.get("/chapter/:id", [postController.getChaptersByPostId]);

module.exports = router;
