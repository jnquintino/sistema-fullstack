const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	post: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'Post',
		required: true
	},
	description: {
		type: String,
		required: true
	},
	enabled: {
		type: Boolean,
		required: false,
		default: true
	}
});

module.exports = mongoose.model('Comment', commentSchema);
