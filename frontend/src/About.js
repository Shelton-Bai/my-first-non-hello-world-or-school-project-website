function About() {
	return (
		<div className="flex flex-col text-2xl w-full px-16 leading-loose whitespace-pre-wrap">
			<h1 className="text-4xl">About This Website:</h1>
			<p>
				{"\t"}This website is built mostly using React, with other node packages like Express, Axios, and CORS to handle API requests. It's 
				hosted on an Oracle Cloud Instance, run from 3 Docker containers (one for the frontend, one for the API, and one for the SQL 
				database). The SQL database is just there to store comments, and has a single table which stores the commenter, the comment, and
				the timestamp of the comment. 
			</p>
			<h1 className="text-4xl">About Me:</h1>
			<p>
				{"\t"}My name is Shelton Bai, and I'm a 21 year old fresh college graduate with a bachelor's in Computer Science. I've been coding since
				I was in 8th grade, starting with very basic Javascript tutorials on Khan Academy. In high school I decided to expand this curiosity
				by taking some of the computer science classes offered, which lead me to major in it at the University of Pittsburgh.<br/>
				{"\t"}In my free time, I mostly like to read and play video games with friends. I'd even say that I'm quite good at some
				video games, especially competitive Pokémon. I've picked up many other hobbies throughout the years, such as Taekwondo, blacksmithing,
				and drawing, but they were mostly fleeting and I stopped for one reason or another. I would like to use this website as an excuse to
				get back into some of them, though.
			</p>
		</div>
	);
}

export default About;