import React, {useState} from 'react';

function Home({toggleTheme}) {

	const [count, setCount] = useState(0);

	const incCount = () => {
		setCount(count + 1);
	}

	return (
		<div className="flex flex-col text-2xl w-full leading-loose">
			<h1 className="self-center text-6xl mt-12 mb-2 text-center emphasis">Shelton's Site</h1>
			<p className='self-center text-center mb-2 w-2/3'>
				I'm pretty alright with computers, I guess.
			</p>
			<h2 className='text-4xl py-6 emphasis'>"What are you using this website for?" <span className='text-xl text-main-light dark:text-main-dark font-normal'>- you, probably</span></h2>

			<ul className='py-2 px-4'>
				<li className="text-3xl emphasis"><u>To show off to employers</u></li>
					<div className='px-4'>
						<p>Ok, well not really "show off", more just to demonstrate that I do have, y'know, some web development skills. If you <i>are</i> an 
						employer, head over to the "Jobs" page for my resume, my Github page, and a brief rundown of my skills.</p>
						{/* <p>Oh wow, would you look at that? It's a light/dark mode toggle button!</p>
						<button onClick={toggleTheme} className="component-button">Toggle Light/Dark Mode</button>
						<p>This website is a React application, so I can have stuff like this counter:</p>
						<button onClick={incCount} className='component-button'>Click Me!</button>
						<p>Clicked {count} time(s)!<br /></p>
						{count === 69 && <p>Nice 😎</p>}
						<p>Unlike the theme, the variable being incremented isn't stored in localStorage, so it'll reset to 0 when you refresh the page.</p> */}
					</div>
				<li className="text-3xl emphasis"><u>Any miscellaneous hobbies I might have</u></li>
					<div className='px-4'>
						<p>A while back I got into drawing for a bit, and even further back I tried my hand at blacksmithing, so I might 
						put my experiences with any future hobbies here too. Knowing myself, however, it'll probably mostly stuff about video games.</p>
					</div>
				<li className="text-3xl emphasis"><u>I gotta do <i>something</i> with my Oracle Cloud instance</u></li>
					<div className='px-4'>
						<p>I managed to snag one of those Ampere A1 instances on the Oracle Cloud Free Tier because I wanted to host a modded Minecraft
						server using it. However, the mod is still in development, and I'd rather wait until the mod has an official release
						to set up the server, but I'm afraid that if I don't do anything with the instance Oracle is going to
						take it away to free up space for new instances, so just to err on the side of caution, I'll host this website on it.</p>
					</div>
			</ul>
			
			

			

			


		</div>
	);
}

export default Home;