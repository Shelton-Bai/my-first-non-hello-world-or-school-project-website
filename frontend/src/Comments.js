import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Comments = () => {
	const [comments, setComments] = useState([]);

	const [retrieved, setRetrieved] = useState(false);

	const [commenter, setCommenter] = useState('');
	const [comment, setcomment] = useState('');

	var Filter = require('bad-words'),
		filter = new Filter();

	const fetchComments = () => {
		axios.get('https://sheltonbai.com/springapiget/')
		// axios.get('http://129.213.85.104:5000/comments')
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
		console.log("submitted form with comment: " + comment + " written by commenter: " + commenter);

		if(commenter.trim() === '' || comment.trim() === ''){
			alert('Both the name and comment fields cannot be empty!');
			return;
		}

		if(filter.isProfane(commenter) || filter.isProfane(comment)){
			alert("Please don't use profanity. If this was caused by the Scunthorpe Problem, just tweak your message a bit.");
			return;
		}

		const commentJSON = {
			commenter,
			comment
		}

		try {
			// const response = await axios.post('https://sheltonbai.com/springapipost/', commentJSON);
			// const response = await axios.post('http://129.213.85.104:5000/comments', commentJSON);
			const response = await axios.post('http://localhost:5000/comments', commentJSON);
			console.log(response.data);

			setCommenter('');
			setcomment('');
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
		<div className='text-grayscale-900 flex flex-row'>
			<div className='pr-4 w-4/12 flex-shrink-0'>
				<form onSubmit={(e) => postComment(e)} className='commentForm'>
					<h3 className='text-5xl mb-5'>Leave A Comment!</h3>
					<label className='text-3xl'>Name</label>
					<br/>
					<input type='text' value={commenter} onChange={(e) => setCommenter(e.target.value)} placeholder="Max 100 Characters"
					className='border-solid border-2 p-2 rounded-lg bg-inherit my-2 text-2xl w-5/6'/>
					<br/>
					<label className='text-3xl'>Comment</label>
					<br/>
					<textarea value={comment} onChange={(e) => setcomment(e.target.value)} placeholder="Max 500 Characters" 
					className='border-solid border-2 p-2 rounded-lg bg-inherit my-2 text-2xl w-5/6'/>
					<br/>
					<button type="submit" className='border-solid border-2 p-2 rounded-lg bg-inherit text-2xl'>Submit Comment!</button>
				</form>
			</div>
			<div className='pl-10'>
				<h2 className='text-5xl'>Latest Comments</h2>

				{!retrieved && <p className='text-2xl mt-5'>Failed to retrieve comments. Whoops.</p>}

				{comments.map(comment => (
					<div className='border-solid border-2 border-grayscale-900 my-2 p-2 rounded-lg' key={comment.id}>
						<p className='text-3xl'>
							{comment.commenter}:
						</p>
						<p className='text-2xl text-grayscale-700'>
							{comment.comment}
						</p>						
					</div>
				))}
			</div>

			

		</div>
	);
};

export default Comments;
