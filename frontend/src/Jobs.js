import Pdf from './Shelton Bai Resume 2024.pdf';
import Comments from './Comments'

function Jobs() {
	return (
		<div className="Jobs">
			<h1>Hey there!</h1>

			<p>
				If you're on this page, you're probably a recruiter or hiring manager for a job I've applied to. You've likely seen my resume 
				already, but if not, <a href = {Pdf} target = "_blank">here's</a> a link to it. I've also got a brief rundown of my skills below
				if you don't feel like reading it, or if the ATS system you ran it through didn't like my formatting.
			</p>

			<h3>Skills</h3>
			<h4>Things I'm Comfortable Using:</h4>
			<ul>
				<li>Python</li>
				<li>Java</li>
				<li>C</li>
				<li>Javascript</li>
				<li>MySQL</li>
				<li>Git and GitHub</li>
				<li>HTML</li>
				<li>CSS</li>
			</ul>
			<h4>Things I Can Use, But I Wouldn't Say I'm An Expert At:</h4>
			<ul>
				<li>C++</li>
				<li>PostgreSQL</li>
				<li>Qt</li>
				<li>React</li>
				<li>AWS</li>
				<li>Node.js</li>
				<li>Docker</li>
			</ul>
			<h4>Things I've Used For Like, One Project, But It's Still Something</h4>
			<ul>
				<li>ROS2</li>
				<li>Android Studio</li>
				<li>MQTT</li>
				<li>Objective-C</li>
				<li>JDBC</li>
			</ul>
			<br/>
			<p>
				Here are links to my LinkedIn and GitHub, where you can find more information on me and the projects I've worked on. Alternatively,
				you can head to my About page to learn more. When you're done checking out this website, leaving a comment would be greatly appreciated!
				<br/>
				<br/><a href='https://www.linkedin.com/in/shelton-bai2002/' target='_blank'>LinkedIn</a>
				<br/><a href='https://github.com/Shelton-Bai' target='_blank'>GitHub</a>
			</p>
			

			
			<br/>
			<Comments />
			

		</div>
	);
}

export default Jobs;