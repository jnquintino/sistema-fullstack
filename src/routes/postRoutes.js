const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');
const authenticateJWT = require("../authenticateJWT");

router.get('/', authenticateJWT, postController.getAllPosts);
router.get('/:id', authenticateJWT, postController.getPostById);
router.get('/like/:id', authenticateJWT, postController.likePostById);
router.get('/dislike/:id', authenticateJWT, postController.dislikePostById);
router.post('/', authenticateJWT, postController.createPost);
router.put('/:id', authenticateJWT, postController.updatePost);
router.delete('/:id', authenticateJWT, postController.deletePost);

module.exports = router;
