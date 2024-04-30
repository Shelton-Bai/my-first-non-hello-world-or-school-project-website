import Pdf from './Shelton Bai Resume.pdf';
import Comments from './Comments'

function Jobs() {
	return (
		<div className="flex flex-row text-2xl w-full leading-loose">
			<div className="flex flex-col text-2xl w-full leading-loose">
				<h1 className='text-4xl font-medium mt-8 emphasis'>Hey there!</h1>

				<p className='px-4'>
					If you're on this page, you're probably a recruiter or hiring manager for a job I've applied to. You've likely seen my resume 
					already, but if not, <a href = {Pdf} target = "_blank" className='underline interactable'>here's</a> a link to it. I've also got a brief rundown of my skills below
					if you don't feel like reading it and just want a tl;dr of what I can do. Plus, some of the stuff I've used less isn't on my
					resume, as I'm not as familiar with them.
				</p>

				<h3 className='text-3xl my-4 emphasis'>Skills</h3>
				<h4 className='px-4 emphasis'>Things I'm Comfortable Using:</h4>
				<ul className='px-12 columns-2 list-disc'>
					<li>Python</li>
					<li>Java</li>
					<li>C</li>
					<li>Javascript</li>
					<li>MySQL</li>
					<li>Git and GitHub</li>
					<li>HTML</li>
					<li>CSS</li>
				</ul>
				<h4 className='px-4 emphasis'>Things I Can Use, But I Wouldn't Say I'm An Expert At:</h4>
				<ul className='px-12 columns-2 list-disc'>
					<li>C++</li>
					<li>PostgreSQL</li>
					<li>Qt</li>
					<li>React</li>
					<li>AWS</li>
					<li>Node.js</li>
					<li>Docker</li>
				</ul>
				<h4 className='px-4 emphasis'>Things I've Used For Like, One Project, But It's Still Something</h4>
				<ul className='px-12 columns-2 list-disc'>
					<li>ROS2</li>
					<li>Android Studio</li>
					<li>MQTT</li>
					<li>Objective-C</li>
					<li>JDBC</li>
				</ul>
				<br/>
				<Comments />
			</div>

		</div>
	);
}

export default Jobs;