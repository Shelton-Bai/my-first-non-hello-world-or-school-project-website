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
				because I was bored of LeetCode and needed to do something "productive".<br /> <br />
				Oh wow, would you look at that? It's a light/dark mode toggle button!
			</p>
			
			<button onClick={toggleTheme}>Toggle Light/Dark Mode</button>

			<p>
				This website is a React application, so I can have stuff like this counter:
			</p>

			<button onClick={incCount}>Click Me!</button>
			<p>Clicked {count} time(s)!<br /></p>
			{count == 69 && <p>Nice 😎</p>}
			
			<p>
				Unlike the theme, the variable being incremented isn't stored in localStorage, so it'll reset to 0 when you refresh the page.<br/><br/>
			</p>

			<h2>"What are you using this website for?"</h2>

			<p>
				Excellent question, hypothetical visitor! <br/><br/>
				{"\t"}First off, I wanted to have some kind of project that I could easily show off to employers so I might stand out a little bit.
				A website is probably one of the simplest projects I could use, so I went with that. The only difference between this website and
				Shakespeare is that this site only needed one monkey, one keyboard and a finite amount of time to complete. <br/><br/>

				{"\t"}Secondly, I figured why not use this as a portfolio, not just for work and software-related projects, but also for any other 
				hobby-level things I feel like doing. Maybe I'll put one of my drawings that I think isn't half bad here. Maybe I'll start trying
				to blacksmith again and document my process of destroying my parents' garden to make a forge again. Who knows? It'll probably
				just be me uploading clips of my gameplay that I think are cool though. <br/><br/>

				{"\t"}Finally, there is no final reason, but I wanted three paragraphs. Can't deny the rule of three, you know. If you're a
				recruiter for a company I applied to, why not head over to the Jobs page? If you're looking to check out some (debatably) sick
				clips, or maybe play Minecraft or Palworld with me on a private server, the Games page is for you. If you're curious about me
				personally or the website, try the About page.


			</p>


		</div>
	);
}

export default Home;