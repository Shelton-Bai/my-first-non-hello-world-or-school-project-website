import React, {useState, useEffect} from 'react';

function Home({toggleTheme}) {

	const [count, setCount] = useState(0);

	const incCount = () => {
		setCount(count + 1);
	}

	return (
		<div className="Home">
			<h1>Welcome!</h1>
			<p>
				This is a website I built mostly to show off my skills, but also partially 
				because I was bored of LeetCode and needed to do something "productive".
			</p>
			<br/>
			<h2>"What are you using this website for?"</h2>

			<ul>
				<li><u>To show off to employers</u></li>
					<p>Ok, well not really "show off", more just to demonstrate that I do have, y'know, some web development skills. If you <i>are</i> an 
					employer, head over to the "Jobs" page for my resume, my Github page, and a brief rundown of my skills.</p>
					<p>Oh wow, would you look at that? It's a light/dark mode toggle button!</p>
					<button onClick={toggleTheme}>Toggle Light/Dark Mode</button>
					<p>This website is a React application, so I can have stuff like this counter:</p>
					<button onClick={incCount}>Click Me!</button>
					<p>Clicked {count} time(s)!<br /></p>
					{count == 69 && <p>Nice 😎</p>}
					<p>Unlike the theme, the variable being incremented isn't stored in localStorage, so it'll reset to 0 when you refresh the page.</p>
				<li><u>Any miscellaneous hobbies I might have</u></li>
					<p>A while back I got into drawing for a bit, and even further back I tried my hand at blacksmithing, so I might 
					put my experiences with any future hobbies here too. Knowing myself, however, it'll probably mostly stuff about video games.</p>
				<li><u>I gotta do <i>something</i> with my Oracle Cloud instance</u></li>
					<p>I managed to snag one of those Ampere A1 instances on the Oracle Cloud Free Tier because I wanted to host a modded Minecraft
					server. However, the mod is still in development, and I'm afraid that if I don't do anything with the instance Oracle is going to
					take it away to free up space for new instances, so just to err on the side of caution, I'll host this website on it.</p>
			</ul>
			
			

			

			


		</div>
	);
}

export default Home;