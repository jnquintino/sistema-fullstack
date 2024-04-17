const nodemailer = require('nodemailer');

// Configura��o do transporte de e-mail caso necess�rio
/*
const transporter = nodemailer.createTransport({
	service: 'seu provedor de e-mail', // Por exemplo, 'gmail', 'hotmail', etc.
	auth: {
		user: 'seu_email@example.com',
		pass: 'sua_senha'
	}
});

 */
// Configura��o do transporte de e-mail para o Sendmail
const transporter = nodemailer.createTransport({
	sendmail: true,
	newline: 'unix',
	path: '/usr/sbin/sendmail'
});

const sendEmailToUser = async (userEmail, postTitle) => {
	const mailOptions = {
		from: 'nobody@example.com',
		to: userEmail,
		subject: 'Novo coment�rio em sua postagem',
		text: `Ol�,\n\nVoc� recebeu um novo coment�rio em sua postagem "${postTitle}".\n\nAtenciosamente, \nSistema Fullstack`
	};
	try {
		await transporter.sendMail(mailOptions);
		console.log('E-mail enviado com sucesso');
	} catch (error) {
		console.error('Erro ao enviar e-mail:', error);
	}
};

module.exports = sendEmailToUser;
