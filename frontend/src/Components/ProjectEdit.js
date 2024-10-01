import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const ProjectEdit = () => {
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

	const onDelete = async (id) => {
		try {
			await axios.delete(`${apiUrl}/projects/${id}`);
			alert('Project deleted successfully');
		} catch (error) {
			console.error('Error deleting project:', error);
		}
		fetchProjects();
	}
	
	return (
		<div className="">
			<div className='bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen'>
				<div className=''>
					<ProjectsView projects={projects} onDelete={onDelete} fetchProjects={fetchProjects}/>
				</div>
			</div>
		</div>
	);
	
};

const ProjectCard = ({project, fetchProjects, onDelete, projects}) => {
	const [name, setName] = useState(project.name);
	const [description, setDescription] = useState(project.description);
	const [link, setLink] = useState(project.link);
	const [image, setImage] = useState(project.image ? `data:image/png;base64,${project.image}` : null);
	const [id, setId] = useState(project.id);

	const [editing, setEditing] = useState(false);

	useEffect(() => {
		setImage(project.image ? `data:image/png;base64,${project.image}` : null);
	}, [projects]);

	const handleFileChange = (event) => {
		setImage(event.target.files[0]);
	};

	const submitProject = async (e) => {
		e.preventDefault();
		if(name.trim() === '' || link.trim() === '' || description.trim() === ''){
			alert('Fields cannot be empty!');
			return;
		}

		const formData = new FormData();
		formData.append('name', name);
		formData.append('link', link);
		formData.append('description', description);
		formData.append('image', image);
		
		try {
			const response = await axios.put(`${apiUrl}/projects/${id}`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			alert('Successfully Updated Project!');
		} catch (error) {
			console.error(error);
		}

		fetchProjects();
		setEditing(false);
	}

	const onEdit = (project) => {
		setEditing(!editing);
		setName(project.name);
		setLink(project.link);
		setDescription(project.description);
		setImage(project.image ? `data:image/png;base64,${project.image}` : null);
		setId(project.id);
	}

	const resetForm = (e) => {
		e.preventDefault();
		setEditing(false);
	}

	const reorderProject = async (direction) => {
		const currentIndex = projects.findIndex((p) => p.id === project.id);
		let previous = null;
		let next = null;

		if (direction === 'up') {
			previous = projects[currentIndex - 2] ? projects[currentIndex - 2].id : null;
			next = projects[currentIndex - 1] ? projects[currentIndex - 1].id : null;
		} else if (direction === 'down') {
			previous = projects[currentIndex + 1] ? projects[currentIndex + 1].id : null;
			next = projects[currentIndex + 2] ? projects[currentIndex + 2].id : null;
		}

		try {
			await axios.post(`${apiUrl}/projects/${project.id}/reorder`, null, {
				params: { previous, next },
			});
			fetchProjects(); // Refresh the projects after reordering
		} catch (error) {
			console.error('Error reordering project:', error);
		}
	}

	return (
		<div className='mb-6'>
			<div className='flex flex-row'>
				<p className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1'>ID: {project.id}</p>
				<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => {reorderProject("up")}}>
					🔼
				</button>
				<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => {reorderProject("down")}}>
					🔽
				</button>
				<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => {onEdit(project)}}>
					Edit
				</button>
				<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => onDelete(project.id)}>
					Delete
				</button>
			</div>
			{!editing && (
				<div className='flex flex-row mt-2'>
					<div className='flex-shrink-0'>
						{image && (
							<img className='w-96 border border-white' src={image} alt="image here"/>
						)}
					</div>
					<div className='ml-4'>
						<p className='text-grayscale-900 text-2xl'>{project.name}</p>
						<p className='text-grayscale-900 text-lg'>Link: {project.link}</p>
						<p className='text-grayscale-700 text-lg'>{project.description}</p>
					</div>
					
				</div>
			)}
			{editing && (
				<div className='flex-col flex'>
					<form onSubmit={(e) => {submitProject(e)}} onReset={(e) => {resetForm(e)}}>
						<input type='text' placeholder='Project Name' value={name} onChange={(e) => {setName(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
						<br/>
						<input type='text' placeholder='Project Link' value={link} onChange={(e) => {setLink(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
						<br/>
						<textarea placeholder='Description' value={description} onChange={(e) => {setDescription(e.target.value)}} rows={3} className='bg-inherit border-2 p-2 rounded-lg w-full my-1'/>
						<input type='file' accept='image/*' onChange={handleFileChange} />
						
						<button type='submit' className='bg-inherit border-2 p-2 rounded-lg my-1 mr-2'>
							Save
						</button>
						<button type='reset' className='bg-inherit border-2 p-2 rounded-lg my-1'>
							Cancel
						</button>
					</form>
				</div>
			)}
			
			
		</div>
	);
};

const ProjectsView = ({projects, onDelete, fetchProjects}) => {
	const [adding, setAdding] = useState(false);
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [link, setLink] = useState('');
	const [id, setId] = useState(-1);
	const [image, setImage] = useState(null);

	const handleFileChange = (event) => {
		setImage(event.target.files[0]);
	};

	const submitProject = async (e) => {
		e.preventDefault();
		if(name.trim() === '' || link.trim() === '' || description.trim() === ''){
			alert('Fields cannot be empty!');
			return;
		}

		const formData = new FormData();
		formData.append('name', name);
		formData.append('link', link);
		formData.append('description', description);
		formData.append('image', image);

		try {
			// const response = await axios.post(`${apiUrl}/projects`, projectJSON);
			const response = await axios.post(`${apiUrl}/projects`, formData, {
				headers: {
					'Content-Type': 'multipart/form-data',
				},
			});
			alert('Successfully Posted Project!');
		} catch (error) {
			console.error(error);
		}

		fetchProjects();
		setAdding(false);
		setName('');
		setDescription('');
		setLink('');
		setImage(null);
		setId(-1);

	}

	const resetForm = (e) => {
		e.preventDefault();
		setAdding(false);
		setName('');
		setDescription('');
		setLink('');
		setImage(null);
		setId(-1);
	}

	return (
		<div className='text-grayscale-900 px-32'>
			{projects.map(project => (
				<div key={project.id}>
					<ProjectCard project={project} onDelete={onDelete} fetchProjects={fetchProjects} projects={projects}/>
				</div>
			))}
			{!adding && (
				<button type='reset' className='bg-inherit border-2 p-2 rounded-lg my-4' onClick={() => {setAdding(!adding)}}>
					Add Project
				</button>
			)}
			{adding && (
				<div className='my-4'>
					<form onSubmit={(e) => {submitProject(e)}} onReset={(e) => {resetForm(e)}}>
						<input type='text' placeholder='Project Name' value={name} onChange={(e) => {setName(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
						<br/>
						<input type='text' placeholder='Project Link' value={link} onChange={(e) => {setLink(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
						<br/>
						<textarea placeholder='Description' value={description} onChange={(e) => {setDescription(e.target.value)}} rows={3} className='bg-inherit border-2 p-2 rounded-lg w-full my-1'/>
						<input type='file' accept='image/*' onChange={handleFileChange} />
						
						<button type='submit' className='bg-inherit border-2 p-2 rounded-lg my-1 mr-2'>
							Save
						</button>
						<button type='reset' className='bg-inherit border-2 p-2 rounded-lg my-1'>
							Cancel
						</button>
					</form>
				</div>
			)}
		</div>
	);

};

export default ProjectEdit;
