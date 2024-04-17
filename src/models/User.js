const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		maxlength: 100,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true,
		maxlength: 191
	},
	password: {
		type: String,
		required: true
	},
	profile: {
		type: String,
		required: true
	},
	enabled: {
		type: Boolean,
		required: false,
		default: true
	}
});

module.exports = mongoose.model('User', userSchema);
