const Comment = require('../models/Comment');
const Post = require('../models/Post');
const User = require('../models/User');
const sendEmailToUser = require("../utils/sendEmailToUser");

exports.getAllComments = async (req, res) => {
	try {
		const comments = await Comment.find();
		res.status(200).json(comments);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getCommentById = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.id);
		if (!comment) {
			return res.status(404).json({ error: 'Comment not found' });
		}
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getCommentByPostId = async (req, res) => {
	try {
		const comment = await Comment.find({post: req.params.id });
		if (!comment) {
			return res.status(404).json({ error: 'Comment not found' });
		}
		const result = [];
		for (const item of comment) {
			item.post = await Post.findById(item.post);
			result.push(item);
		}
		res.status(200).json(result);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.createComment = async (req, res) => {
	try {
		const { user, post, description } = req.body;
		const newComment = new Comment({ user, post, description });
		await newComment.save();
		const postToUpdate = await Post.findById(post);
		if (postToUpdate && postToUpdate.user) {
			const postUser = User.findById(postToUpdate.user);
			if (postUser && postUser.email) {
				await sendEmailToUser(postUser.email, postToUpdate.title);
			}
		}
		res.status(201).json(newComment);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.updateComment = async (req, res) => {
	try {
		const { description } = req.body;
		const comment = await Comment.findById(req.params.id);
		if (!comment) {
			return res.status(404).json({ error: 'Comment not found' });
		}
		if (req.user && comment.user && req.user.userId !== comment.user.toString()) {
			return res.status(403).json({ error: 'Unauthorized' });
		}
		comment.description = description || comment.description;
		await comment.save();
		res.status(200).json(comment);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteComment = async (req, res) => {
	try {
		const comment = await Comment.findById(req.params.id);
		if (!comment) {
			return res.status(404).json({ error: 'Comment not found' });
		}
		const post = await Post.findById(comment.post);
		if (req.user && comment.user && post && post.user && req.user.userId !== comment.user.toString() && req.user.userId !== post.user.toString()) {
			return res.status(403).json({ error: 'Unauthorized' });
		}
		await comment.remove();
		res.status(200).json({ message: 'Comment deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
