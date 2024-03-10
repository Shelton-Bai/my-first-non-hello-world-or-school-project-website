import Pdf from './Shelton Bai Resume 2024.pdf';
import Comments from './Comments'

function Jobs() {
	return (
		<div className="Jobs">
			<h1>Hey there!</h1>

			<p>
				{"\t"}If you're on this page, you're probably a recruiter, or hiring manager, or something along those lines, and I've included
				a link to this site in my application. If not, what are you doing here? Shoo. Go on, get. Okay, back to business. I could talk
				about my skills or whatever here, but you've likely seen my resume already, and unless I've forgotten to update it in a while,
				I'd only be telling you what you already know. In case you haven't seen it, <a href = {Pdf} target = "_blank">here's</a> a link.
				If you don't feel like looking through it or you've already ran it through some kind of ATS system, I'll include a tl;dr at the
				bottom of the page.<br/><br/>

				{"\t"}So, if not my skills and experience, what am I going to talk about here? Well, I'd like to use this space to bring a more
				personal, informal aspect to the job application. Be a <em>candid</em>ate, if you will (eh? no?). Bad puns aside, I do feel like
				a large part of finding a job is dependent on how well you can, for lack of a better word, brag about yourself. And sure, I'll 
				play the game. I'll show off my AWS certification, I'll say I'm "proficient" in Java, or C, or Python, or whatever language is 
				applicable to the role, and I'll talk about my projects I've worked on in the past. But at the end of the day, I don't really
				like doing all that boasting. Besides, it's better and easier to just show you some of my side projects to give you an idea of
				my skills. So <a>here's</a> the link to my Github page, scroll down to see some components that might be interactive (there
				aren't any right now; I'm working on stuff to put there), and why not leave a comment at the end?
			</p>
			<br></br>
			<Comments />
			

		</div>
	);
}

export default Jobs;