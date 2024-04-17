const Post = require('../models/Post');

exports.getAllPosts = async (req, res) => {
	try {
		const posts = await Post.find();
		res.status(200).json(posts);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.likePostById = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ error: 'Post not found' });
		}
		post.likes = post.likes + 1;
		await post.save();
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.dislikePostById = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ error: 'Post not found' });
		}
		post.dislikes = post.dislikes + 1;
		await post.save();
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getPostById = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ error: 'Post not found' });
		}
		post.views = post.views + 1;
		await post.save();
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.createPost = async (req, res) => {
	try {
		const { user, title, description, image } = req.body;
		const newPost = new Post({ user, title, description, image });
		await newPost.save();
		res.status(201).json(newPost);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.updatePost = async (req, res) => {
	try {
		const { title, description, image } = req.body;
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ error: 'Post not found' });
		}
		if (req.user && post.user && req.user.userId !== post.user.toString()) {
			return res.status(403).json({ error: 'Unauthorized' });
		}
		const clone = JSON.parse(JSON.stringify(post));
		post.title = title || post.title;
		post.description = description || post.description;
		post.image = image || post.image;
		post.version = post.version + 1;
		post.history.push(clone);
		await post.save();
		res.status(200).json(post);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deletePost = async (req, res) => {
	try {
		const post = await Post.findById(req.params.id);
		if (!post) {
			return res.status(404).json({ error: 'Post not found' });
		}
		if (req.user && post.user && req.user.userId !== post.user.toString()) {
			return res.status(403).json({ error: 'Unauthorized' });
		}
		await post.remove();
		res.status(200).json({ message: 'Post deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
