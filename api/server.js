const express = require('express');
const mysql = require('mysql2/promise');
const cors = require('cors'); // Import the CORS middleware

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// MySQL database connection configuration
const dbConfig = {
	host: process.env.MYSQL_HOST || 'backend', //localhost or backend?
	user: process.env.MYSQL_USER || 'root',
	password: process.env.MYSQL_PASSWORD || 'shabloink',
	database: process.env.MYSQL_DATABASE || 'shabingus',
};

// Create a MySQL pool
const pool = mysql.createPool(dbConfig);

// API endpoint to fetch comments
app.get('/comments', async (req, res) => {
	try {
		const connection = await pool.getConnection();
		const [rows] = await connection.query('SELECT * FROM comments ORDER BY timestamp DESC LIMIT 5');
		connection.release();
		res.json(rows);
	} catch (error) {
		console.error('Error fetching comments:', error);
		res.status(500).send('Error fetching comments');
	}
});

app.post('/comments', async (req, res) => {
	try {
		console.log(req.body);
		const {commenter, commentText} = req.body;
		const connection = await pool.getConnection();
		const query = 'INSERT INTO comments (commenter, comment) VALUES (?, ?)';
		const [result] = await connection.query(query, [commenter, commentText]);
		connection.release();

		res.status(201).json({ message: 'Comment created successfully!' });
	} catch (error) {
		console.error('Error posting comment:', error);
		res.status(500).send('Error posting comment')
	}
})

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
