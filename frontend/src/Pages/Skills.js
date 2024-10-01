import React from 'react';
import Pdf from './Shelton Bai Resume.pdf';
import SkillDisplay from '../Components/SkillDisplay';
import Navbar from '../Components/Navbar';

function Skills() {

	return (
		<div className='bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen'>
			<Navbar/>
			<div className='p-4 py-6 lg:p-20 lg:px-32 lg:w-3/4'>
				<p className='text-grayscale-900 text-4xl lg:text-6xl'>
					Skills
				</p>
				<p className='text-grayscale-700 text-lg lg:text-xl'>
					<br/>
					Click <a href = {Pdf} target = "_blank" rel="noreferrer" className='underline hover:text-grayscale-900'>here</a> for my full and formal resume. Otherwise, feel free to browse through my list of skills, sorted by category and ordered by proficiency. Listed along side each skill is a brief description of how I learned and/or utilized said skill.
				</p>
			</div>
			<SkillDisplay/>
			
		</div>
	);
}

export default Skills;
