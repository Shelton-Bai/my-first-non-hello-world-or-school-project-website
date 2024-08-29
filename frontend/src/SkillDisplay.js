import {React, useState} from 'react';

const skillsData = {
	"Programming Languages": [
		{ 
			name: "Java",
			level: "Oracle Certified",
			description: "Learned freshman year in high school during an introductory computer science course, and used throughout high school and college in various courses. My most proficient language, and the only one I have a certification in. Still one of my favorites to this day due to a mix of \"nostalgia\" and the fact that I like object oriented programming." 
		},
		{ 
			name: "Python",
			level: "Pretty good, I think",
			description: "Learned in my free time during high school, but didn't see much use academically, even in college. Mainly used in small scripts here and there, although it did come in handy during my college internships, and during my senior project, where I used it in building some ROS2 nodes for a small robot." 
		},
		{ 
			name: "C",
			level: "C for Competent",
			description: "Learned the basics through college courses, and accounted for roughly half of my coursework in college (the other half being mostly Java). Utilized during my college internships, where C was used to write the embedded code in dental LCUs (Light Curing Units)." 
		},
		{ 
			name: "Javascript",
			level: "I made this website, and more",
			description: "First learned in middle school through Khan Academy's programming courses, although I didn't reach any semblance of competency until I relearned it in college (this time actually learning it for a web dev course and not just watching some videos and then copying other's code and changing it until it worked). This website itself was built using Javascript (React)." 
		},
		{ 
			name: "C++",
			level: "Competent--",
			description: "Learned on the fly during my college internships, where it was used along with Qt to make the user interfaces for the dental LCUs. Also used a little during my senior capstone project, but discarded in favor of Python." 
		},
		{ 
			name: "R",
			level: "It still counts, right?",
			description: "I have used R for one semester in two courses, one of which was a statistics course, and the other was an Intro to Machine Learning course, which was basically a statistics course. Still, it's techincally something, although it's not on my resume because that would be misleading to employers." 
		},
	],
	"Frameworks/Libraries": [
		{ 
			name: "React", 
			level: "Decently good at",
			description: "This website is built using React. I learned it during a group project my sophomore year of college when one of my group members suggested we build our project using it. I didn't really know much about frontend web development at the time, so I just went along with it and learned React to finish the project. I liked it better than writing pure HTML and CSS though, and nowadays whenever I need a web frontend, React is my first choice." 
		},
		{ 
			name: "React Native", 
			level: "Also decently good at",
			description: "I wanted to make a mobile application for both iOS and Android, and I already knew React, so React Native was an obvious choice. I personally like Expo with how easy it makes it to test and develop React Native apps."
		},
		{ 
			name: "Spring/Spring Boot", 
			level: "I need the training wheels",
			description: "I have a confession to make. I've never used Spring without Spring Boot. I do like the fact that it uses Java, so most future APIs I make will probably use Spring Boot, unless there is a compelling reason to use another language. The comments section of this website currently runs off of a Spring API."
		},
		{ 
			name: "Flask/Express", 
			level: "I can make APIs with these",
			description: "I've lumped Flask and Express together even though they are pretty different in language, architecture, and many other aspects, because the most I've done with either is build various APIs. Flask has been used in college courses, and Express was used to make the first iteration of the comments section API, but since using Spring Boot I have mostly stopped using these two because I like Java."
		},
		{ 
			name: "Qt/PyQt", 
			level: "Better at the Python version, ngl",
			description: "I learned Qt for an internship, using it for the screens on dental LCUs. After the internship, I learned about PyQt, the Python bindings for Qt, and since Python is a much easier language to program in (cuz of no memory management and the ability to just install whatever packages you wanted), so PyQt is my go-to for desktop applications for now."
		},
		{ 
			name: "ROS2", 
			level: "I got it working, at least",
			description: "ROS2 was used during my senior capstone project in college, during which my group and I were tasked with controlling a robot using an Android app. The issue, we quickly found, was that ROS2 had Python and C++ as languages, whereas Android Studio has Java and Kotlin (yeah I know we could have used the Android NDK to use C++, but we didn't really consider that). In the end, we just made the Android app send messages to a ROS2 node over MQTT, which is admittedly a pretty scuffed solution."
		},
	],
	"Database/Cloud/Dev Tools": [
		{ 
			name: "Amazon Web Services", 
			level: "Amazon Certified",
			description: "To be perfectly candid, I really only started learning to use AWS to improve my chances at finding a job. But I studied and practiced a bit, and now I have a Solutions Architect Associate certification (the Developer Associate probably would have been a more suitable certification but I was coming from no experience in cloud computing and wanted a more broad overview). And what's more, I found that a lot of the concepts used were very transferrable to other cloud services, such as Oracle's Cloud Infrastructure." 
		},
		{ 
			name: "Oracle Cloud Infrastructure", 
			level: "It's not too different from AWS",
			description: "Although my cloud certification is in AWS, I prefer using Oracle's cloud services for two reasons: A) It's not too different, and B) The Free Tier is actually free and not \"12-month free trial free\" (I like saving money, sue me). This website is actually served from an Oracle Cloud Instance." 
		},
		{ 
			name: "Docker", 
			level: "Everything I do is in a container",
			description: "I'm \"self taught\" (YouTube videos and Stack Overflow) when it comes to Docker, so I'm bound to have picked up a few bad habits when using it, but man, if it doesn't make my life a hundred times easier. You'd be hard pressed to find a project of mine nowadays that doesn't have a Dockerfile, even if sometimes I don't really need to use it." 
		},
		{ 
			name: "MySQL", 
			level: "Not bad at, for my purposes",
			description: "One of two flavors of SQL databases I have used, MySQL is common in my projects due to its simplicity and the fact that my projects aren't exactly enterprise-level and need complex queries. Still, I do try and follow what I learned in my DBMS course in college, like trying to normalize my databases." 
		},
		{ 
			name: "Git", 
			level: "I use it",
			description: "I've never actually learned how to use Git beyond cloning a repository, making a branch, and then making a pull request after I'm done with that branch. That said, I recognize the usefulness of having version histories for my projects, and use Git in all of my projects (although I avoid using the command line whenever I can, opting for GUIs like GitHub Desktop)." 
		},
		{ 
			name: "PostgreSQL", 
			level: "Learned it in college",
			description: "Though I don't use it as commonly as MySQL, Postgres was actually what I learned to use first, through an elective course in college. I also learned a bit of JDBC in that course, but I don't think I would be very good at either PostgreSQL or JDBC without a refresher." 
		},
	],
	// "Everything Else": [
	// 	{ 
	// 		name: "[NAME]", 
	// 		level: "[LEVEL]",
	// 		description: "[DESCRIPTION]" 
	// 	},
	// ],
};

function SkillDisplay() {

	const [selectedCategory, setSelectedCategory] = useState("Programming Languages");

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
	};

	return (
		<div className=''>
			<div className='flex space-x-6 px-32 py-10 bg-gradient-to-bl from-grayscale-150 via-grayscale-200 to-grayscale-200'>
				{Object.keys(skillsData).map((category) => (
					<p
						key={category}
						onClick={() => handleCategoryClick(category)}
						className={`cursor-pointer transition-all ${
							category === selectedCategory
								? 'text-3xl text-light-100'
								: 'text-2xl text-light-200 hover:text-3xl hover:text-light-100'
						}`}
					>
						{category}
					</p>
				))}
			</div>

			<div className='mt-10 px-32 w-10/12'>
				{skillsData[selectedCategory].map((skill, index) => (
					<div key={index} className='mb-6'>
						<p className='text-grayscale-900 text-2xl'>{skill.name}</p>
						<p className='text-grayscale-900 text-lg'>Skill Level: {skill.level}</p>
						<p className='text-grayscale-700 text-lg'>{skill.description}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default SkillDisplay;