const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.getAllUsers = async (req, res) => {
	try {
		const users = await User.find({}, "-password");
		res.status(200).json(users);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.getUserById = async (req, res) => {
	try {
		const user = await User.findById(req.params.id, "-password");
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.createUser = async (req, res) => {
	try {
		const { name, email, password, profile, enabled } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const newUser = new User({ name, email, profile, enabled, password: hashedPassword });
		await newUser.save();
		res.status(201).json(newUser);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.updateUser = async (req, res) => {
	try {
		const { name, email, password, profile, enabled } = req.body;
		const hashedPassword = await bcrypt.hash(password, 10);
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		user.name = name || user.name;
		user.email = email || user.email;
		user.password = hashedPassword || user.password;
		user.profile = profile || user.profile;
		user.enabled = enabled || user.enabled;
		await user.save();
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.deleteUser = async (req, res) => {
	try {
		const user = await User.findById(req.params.id);
		if (!user) {
			return res.status(404).json({ error: 'User not found' });
		}
		user.enabled = false;
		await user.save();
		res.status(200).json({ message: 'User deleted successfully' });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};

exports.login = async (req, res) => {
	const { email, password } = req.body;
	try {
		const user = await User.findOne({ email, enabled: true });
		if (!user) {
			return res.status(401).json({ error: 'Credenciais invalidas' });
		}
		const passwordMatch = await bcrypt.compare(password, user.password);
		if (!passwordMatch) {
			return res.status(401).json({ error: 'Credenciais invalidas' });
		}
		const token = jwt.sign({ userId: user._id }, 'chave-segredo', { expiresIn: '1h' });
		res.status(200).json({ token });
	} catch (error) {
		res.status(500).json({ error: error.message });
	}
};
