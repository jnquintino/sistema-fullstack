const mongoose = require('mongoose');

const previousSchema = new mongoose.Schema({
	user: String,
	title: String,
	description: String,
	image: String,
	version: Number,
	views: Number,
	likes: Number,
	dislikes: Number,
	enabled: Boolean,

}, { _id: false });

const postSchema = new mongoose.Schema({
	user: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: true
	},
	title: {
		type: String,
		maxlength: 100,
		required: true
	},
	description: {
		type: String,
		required: false
	},
	image: {
		type: String,
		required: false
	},
	version: {
		type: Number,
		required: false,
		default: 1
	},
	history: [previousSchema],
	views: {
		type: Number,
		required: false,
		default: 0
	},
	likes: {
		type: Number,
		required: false,
		default: 0
	},
	dislikes: {
		type: Number,
		required: false,
		default: 0
	},
	enabled: {
		type: Boolean,
		required: false,
		default: true
	},
	removedBy: {
		type: mongoose.Schema.Types.ObjectId,
		ref: 'User',
		required: false
	},
});

module.exports = mongoose.model('Post', postSchema);
