const express = require('express');
const router = express.Router();
const commentController = require('../controllers/commentController');
const authenticateJWT = require("../authenticateJWT");

router.get('/', authenticateJWT, commentController.getAllComments);
router.get('/:id', authenticateJWT, commentController.getCommentById);
router.get('/post/:id', authenticateJWT, commentController.getCommentByPostId);
router.post('/', authenticateJWT, commentController.createComment);
router.put('/:id', authenticateJWT, commentController.updateComment);
router.delete('/:id', authenticateJWT, commentController.deleteComment);

module.exports = router;
