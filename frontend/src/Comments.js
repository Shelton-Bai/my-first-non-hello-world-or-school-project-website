import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
	const [comments, setComments] = useState([]);

	const [retrieved, setRetrieved] = useState(false);

	const [commenter, setCommenter] = useState('');
	const [commentText, setCommentText] = useState('');

	const fetchComments = () => {
		axios.get('http://localhost:5000/comments')
		.then(res => {
			console.log(res);
			setRetrieved(true);
			setComments(res.data);
		}).catch( err => {
			console.log(err);
		})
	}

	const postComment = async (e) => {
		e.preventDefault();
		console.log("submitted form with comment: " + commentText + " written by commenter: " + commenter);

		if(commenter.trim() === '' || commentText.trim() === ''){
			alert('Both the name and comment fields cannot be empty!');
			return;
		}

		const commentJSON = {
			commenter,
			commentText
		}

		try {
			const response = await axios.post('http://localhost:5000/comments', commentJSON);
			console.log(response.data);

			setCommenter('');
			setCommentText('');
			fetchComments();

		} catch (error) {
			console.error(error);
		}

	}

	useEffect(() => {
		fetchComments();
	}, []);

	return (
		<div>
			<form onSubmit={(e) => postComment(e)} className='commentForm'>
				<h3>Leave A Comment!</h3>
				<label>Name</label>
				<br/>
				<input type='text' value={commenter} onChange={(e) => setCommenter(e.target.value)} placeholder="Max 100 Characters"/>
				<br/>
				<label>Comment</label>
				<br/>
				<textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Max 500 Characters"/>
				<br/>
				<button type="submit">Submit Comment!</button>
			</form>

			<h2>Latest Comments</h2>

			{!retrieved && <p>Failed to retrieve comments. Whoops.</p>}

			{comments.map(comment => (
				<div className='Comment' key={comment.id}>
					<p>
					<strong>{comment.commenter}</strong> at {comment.timestamp}:
					<br/>
					{comment.comment}
					</p>
				</div>
			))}

		</div>
	);
};

export default Comments;
