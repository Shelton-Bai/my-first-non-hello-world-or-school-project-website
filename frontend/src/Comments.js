import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
	const [comments, setComments] = useState([]);

	const [retrieved, setRetrieved] = useState(false);

	const [commenter, setCommenter] = useState('');
	const [commentText, setCommentText] = useState('');

	var Filter = require('bad-words'),
		filter = new Filter();

	const fetchComments = () => {
		axios.get('http://129.213.85.104:5000/comments')
		// axios.get('http://localhost:5000/comments')
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

		if(filter.isProfane(commenter) || filter.isProfane(commentText)){
			alert("Please don't use profanity. If this was caused by the Scunthorpe Problem, just tweak your message a bit.");
			return;
		}

		const commentJSON = {
			commenter,
			commentText
		}

		try {
			// const response = await axios.post('http://129.213.85.104:5000/comments', commentJSON);
			const response = await axios.post('http://localhost:5000/comments', commentJSON);
			console.log(response.data);

			setCommenter('');
			setCommentText('');
			alert('Successfully Posted Comment!');
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
				<h3 className='emphasis text-3xl'>Leave A Comment!</h3>
				<label>Name</label>
				<br/>
				<input type='text' value={commenter} onChange={(e) => setCommenter(e.target.value)} placeholder="Max 100 Characters"
				className='border-solid border-2 border-component-light text-component-light placeholder:text-component-light m-2 p-2 rounded-lg w-1/3 bg-inherit'/>
				<br/>
				<label>Comment</label>
				<br/>
				<textarea value={commentText} onChange={(e) => setCommentText(e.target.value)} placeholder="Max 500 Characters" 
				className='border-solid border-2 border-component-light placeholder:text-component-light m-2 p-2 rounded-lg w-1/3 bg-inherit'/>
				<br/>
				<button type="submit" className='component-button 
				border-component-light text-component-light placeholder:text-component-light
				dark:border-component-dark dark:text-component-dark'>Submit Comment!</button>
			</form>

			<h2 className='emphasis text-3xl py-4'>Latest Comments</h2>

			{!retrieved && <p>Failed to retrieve comments. Whoops.</p>}

			{comments.map(comment => (
				<div className='border-solid border-2 border-component-light m-2 p-2 rounded-lg' key={comment.id}>
					<p>
					<strong className='emphasis'>{comment.commenter}</strong> at {comment.timestamp}:
					<br/>
					{comment.comment}
					</p>
				</div>
			))}

		</div>
	);
};

export default Comments;
