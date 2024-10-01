import Navbar from "../Components/Navbar";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => {
		fetchProjects();
	}, []);

	const fetchProjects = () => {
		axios.get(apiUrl + '/projects')
		.then(res => {
			setProjects(res.data);
			console.log("fetched projects:");
			console.log(res.data);
		}).catch( err => {
			console.log(err);
		})
	}

	return (
		<div className="bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen">
			<Navbar/>
			<div className='bg-hexagonsdark bg-cover bg-fixed border-t-2 border-b-2 border-grayscale-150 border-solid'>
				<div className='p-4 py-6 lg:p-20 lg:px-32 lg:w-3/4'>
					<p className='text-grayscale-900 text-4xl lg:text-6xl'>
						Projects
					</p>
					<p className='text-grayscale-800 text-lg lg:text-xl'>
						<br/>
						Below I've selected a few projects that I think are decent and showcase some of my skills. I've included a link to where it's hosted or the source code for each, as well as a description that aims to show the tech stack and motivation behind each project.
					</p>
				</div>
			</div>

			<div className='p-4 py-6 lg:p-20 lg:px-32 lg:pr-40'>
			{projects.map(project => (
				<div key={project.id}>
					<div className='flex flex-col lg:flex-row mb-10'>
					<div className='flex-shrink-0'>
						{project.image && (
							<img className='w-96 border border-white' src={`data:image/png;base64,${project.image}`} alt="image here"/>
						)}
					</div>
					<div className='lg:ml-4'>
						<p className='text-grayscale-900 text-xl lg:text-2xl'>{project.name}</p>
						<p className='text-grayscale-900 text-sm lg:text-lg'>Link: {project.link}</p>
						<p className='text-grayscale-900 text-sm lg:text-lg'>{project.description}</p>
					</div>
					
				</div>
				</div>
			))}
			</div>
			
		</div>
	);
}

export default Projects;