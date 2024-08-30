import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Admin = () => {
	const [languages, setLanguages] = useState([]);
	const [frameworks, setFrameworks] = useState([]);
	const [tools, setTools] = useState([]);
	const [misc, setMisc] = useState([]);

	//form fields
	const [formType, setFormType] = useState('skill');
	const [formAction, setFormAction] = useState('add');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [level, setLevel] = useState('');
	const [priority, setPriority] = useState(0);
	const [category, setCategory] = useState('language');
	const [id, setId] = useState(0);

	useEffect(() => {
		fetchSkills();
	}, []);

	//fetches all skills
	const fetchSkills = () => {
		axios.get('http://localhost:8080/api/skills/languages')
		.then(res => {
			setLanguages(res.data)
		}).catch( err => {
			console.log(err);
		})
		axios.get('http://localhost:8080/api/skills/frameworks')
		.then(res => {
			setFrameworks(res.data)
		}).catch( err => {
			console.log(err);
		})
		axios.get('http://localhost:8080/api/skills/tools')
		.then(res => {
			setTools(res.data)
		}).catch( err => {
			console.log(err);
		})
		axios.get('http://localhost:8080/api/skills/misc')
		.then(res => {
			setMisc(res.data)
		}).catch( err => {
			console.log(err);
		})
	}

	const changeSkills = async (e) => {
		e.preventDefault();

		if(name.trim() === '' || description.trim() === '' || level.trim() === ''){
			alert('Cannot have empty fields!');
			return;
		}

		const skillJSON = {
			name,
			description,
			level,
			priority,
			category
		}

		if(formAction === 'add'){ //adding a skill
			try{
				const response = await axios.post('http://localhost:8080/api/skills/addskill', skillJSON);
				console.log(response.data);

				setName('');
				setDescription('');
				setLevel('');
				setPriority(0);
				setId(0);

				alert('Successfully added skill!');
				fetchSkills();

			} catch (error) {
				console.log(error);
			}
		} else { //updating a skill
			try{
				const response = await axios.put(`http://localhost:8080/api/skills/update?id=${id}`, skillJSON);
				console.log(response.data);

				setName('');
				setDescription('');
				setLevel('');
				setPriority(0);
				setId(0);

				alert('Successfully updated skill!');
				fetchSkills();

			} catch (error) {
				console.log(error);
			}
		}

	}

	const editSkill = (skill) => {
		setId(skill.id);
		setFormAction('edit');
		setName(skill.name);
		setPriority(skill.priority);
		setCategory(skill.category);
		setLevel(skill.level);
		setDescription(skill.description);

	}

	const deleteSkill = async (id) => {
		try {
			const response = await axios.delete(`http://localhost:8080/api/skills/delete?id=${id}`);
			console.log('Skill deleted:', response.data);
			fetchSkills();
		} catch (error) {
			console.error('Error deleting skill:', error);
		}
	};
	
	return (
		<div className="bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen px-32 py-20">
			<div className='flex justify-start'>
				<div className='flex-1'>
					<SkillsView skills={languages} category={"Languages"} onEdit={editSkill} onDelete={deleteSkill}/>
					<SkillsView skills={frameworks} category={"Frameworks"} onEdit={editSkill} onDelete={deleteSkill}/>
					<SkillsView skills={tools} category={"Tools"} onEdit={editSkill} onDelete={deleteSkill}/>
					<SkillsView skills={misc} category={"Misc"} onEdit={editSkill} onDelete={deleteSkill}/>
				</div>
				<div className='flex-1 border border-grayscale-900 rounded-lg p-1'>
					
				</div>
			</div>
			
			
			
			
			
			
		</div>
	);
	
};



const SkillsView = ({skills, category, onEdit, onDelete}) => {

	return (
		<div className='text-grayscale-900 flex-1 mx-2'>
				<p className='text-3xl'>{category}</p>
				{skills.map(skill => (
					<div key={skill.id} className='rounded-lg border-grayscale-900 border border-solid p-2 my-2'>
						<div>
							
						</div>
						<div className='flex justify-start'>
							<p className='text-xl flex-1'>{skill.name}</p>
							<p className='text-xl flex-1'>Level: {skill.level}</p>
							<p className='text-xl flex-1'>Prio: {skill.priority}</p>
							<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mx-2' onClick={() => onEdit(skill)}>
								Edit
							</button>
							<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mx-2' onClick={() => onDelete(skill.id)}>
								Delete
							</button>
						</div>
						<div>
							<p className='text-xl text-grayscale-700'>{skill.description}</p>
						</div>
						
					</div>
				))}
		</div>
	);
};

export default Admin;
