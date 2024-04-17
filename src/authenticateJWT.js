const jwt = require('jsonwebtoken');

const authenticateJWT = (req, res, next) => {
	const token = req.headers.authorization;
	if (!token) {
		return res.status(401).json({ error: 'Token de autenticacao nao fornecido' });
	}
	jwt.verify(token.substring(7), 'chave-segredo', (err, decoded) => {
		if (err) {
			return res.status(403).json({ error: 'Falha na autenticacao do token' });
		}
		req.user = decoded;
		next();
	});
};

module.exports = authenticateJWT;
