const Post = require('../models/Post');
const Comment = require('../models/Comment');

const getPostsAndComments = async () => {
	const aggregateQuery = Post.aggregate([
		{
			$lookup: {
				from: 'comments', // Coleção de onde buscar os comentários
				localField: 'comments', // Campo no documento Post que faz referência aos comentários
				foreignField: '_id', // Campo no documento Comment que faz referência aos IDs dos comentários
				as: 'comments' // Nome do campo no resultado onde os comentários serão armazenados
			}
		}
	]);
	return await aggregateQuery.exec();
};

const calculateCommentsSize = async (posts) => {
	for (const item of posts) {
		item.comments = await Comment.find({ post: item._id }, null, {});
		if (item.comments) {
			item.commentsSize = item.comments.length;
		}
	}
	return posts;
};

const formatReportData = (posts) => {
	const result = [];
	for (const item of posts) {
		const { title, commentsSize, views, likes, dislikes } = item;
		result.push({ title, commentsSize, views, likes, dislikes });
	}
	return result;
};

exports.generatePostReport = async (req, res) => {
	try {
		let posts = await getPostsAndComments();
		posts = await calculateCommentsSize(posts);
		res.json(posts);
	} catch (error) {
		console.error('Erro ao gerar relatório de posts:', error);
		res.status(500).json({ error: 'Erro interno do servidor' });
	}
};

exports.generateSmallReport = async (req, res) => {
	try {
		let posts = await getPostsAndComments();
		posts = await calculateCommentsSize(posts);
		const result = formatReportData(posts);
		res.json(result);
	} catch (error) {
		console.error('Erro ao gerar relatório de posts:', error);
		res.status(500).json({ error: 'Erro interno do servidor' });
	}
};
