const express = require('express');
const connectDB = require('./db');
const cors = require('cors');

const app = express();

app.use(cors({
	origin: '*'
}));

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');
const reportRoutes = require('./routes/reportRoutes');

app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/comments', commentRoutes);
app.use('/api/reports', reportRoutes);

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
