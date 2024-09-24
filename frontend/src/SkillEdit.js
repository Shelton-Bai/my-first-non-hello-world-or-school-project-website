import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SkillEdit = () => {
	//skill object arrays
	const [languages, setLanguages] = useState([]);
	const [frameworks, setFrameworks] = useState([]);
	const [tools, setTools] = useState([]);
	const [misc, setMisc] = useState([]);

	//form fields
	const [formAction, setFormAction] = useState('none');
	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [level, setLevel] = useState('');
	const [priority, setPriority] = useState(0);
	const [id, setId] = useState(-1);
	

	const [selectedCategory, setSelectedCategory] = useState("Programming Languages");
	const categoryMapping = {
		"Programming Languages": languages,
		"Frameworks/Libraries": frameworks,
		"Database/Cloud/Dev Tools": tools,
		"Miscellaneous": misc,
	};
	const formCatMap = {
		"Programming Languages": 'LANGUAGES',
		"Frameworks/Libraries": 'FRAMEWORKS',
		"Database/Cloud/Dev Tools": 'TOOLS',
		"Miscellaneous": 'MISC',
	};

	useEffect(() => {
		fetchSkills();
	}, []);

	//fetches all skills
	const fetchSkills = () => {
		axios.get('http://localhost:8080/api/skills/category/LANGUAGES')
		.then(res => {
			setLanguages(res.data)
		}).catch( err => {
			console.log(err);
		})
		axios.get('http://localhost:8080/api/skills/category/FRAMEWORKS')
		.then(res => {
			setFrameworks(res.data)
		}).catch( err => {
			console.log(err);
		})
		axios.get('http://localhost:8080/api/skills/category/TOOLS')
		.then(res => {
			setTools(res.data)
		}).catch( err => {
			console.log(err);
		})
		axios.get('http://localhost:8080/api/skills/category/MISC')
		.then(res => {
			setMisc(res.data)
		}).catch( err => {
			console.log(err);
		})
	}

	const onEdit = (skill) => {
		setFormAction('edit');
		setName(skill.name);
		setLevel(skill.level);
		setDescription(skill.description);
		setId(skill.id);
	}

	const onDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:8080/api/skills/${id}`);
			alert('Skill deleted successfully');
		} catch (error) {
			console.error('Error deleting skill:', error);
		}
		fetchSkills();
	}

	const submitSkill = async (e) => {
		e.preventDefault();
		console.log(priority === null);
		if(name.trim() === '' || level.trim() === '' || description.trim() === ''){
			alert('Fields cannot be empty!');
			return;
		}

		const skillJSON = {
			name,
			level,
			priority,
			description,
			category: formCatMap[selectedCategory]
		}
		
		try {
			if (formAction === 'add') {
				const response = await axios.post('http://localhost:8080/api/skills', skillJSON);
				alert('Successfully Added Skill!');
			} else if (formAction === 'edit') {
				const response = await axios.put(`http://localhost:8080/api/skills/${id}`, skillJSON);
				alert('Successfully Updated Skill!');
			}
		} catch (error) {
			console.error(error);
		}

		fetchSkills();
		
	}

	const resetForm = (e) => {
		e.preventDefault();
		setFormAction('none');
		setName('');
		setLevel('');
		setDescription('');
		setId(-1);
	}
	
	return (
		<div className="bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col max-h-screen">
			<div className='flex justify-start border-red-600 border'>
				<div className='flex-1 border-green-600 flex-col pr-4 border relative'>
					<div className='flex-1'>
						{Object.keys(categoryMapping).map((category) => (
							<div className='flex-1 flex-row'>
								<p
									key={category}
									onClick={() => setSelectedCategory(category)}
									className={`cursor-pointer transition-all mt-3 ${
										category === selectedCategory
											? 'text-3xl text-light-100'
											: 'text-3xl text-light-200 hover:text-3xl hover:text-light-100'
									}`}
								>
									{category}
								</p>
							</div>
						))}
					</div>
					<div className='flex-1 border-yellow-600  text-grayscale-900 mt-4'>
						{formAction !== 'add' && (
							<button onClick={() => setFormAction('add')} className='text-2xl rounded-lg border-grayscale-900 border p-1 mb-4'>
								Add Skill
							</button>
						)}
						{formAction !== 'none' && (
							<div>
								<form onSubmit={(e) => submitSkill(e)} onReset={(e) => resetForm(e)} className='text-xl text-grayscale-900 bg-inherit'>
									{formAction === 'add' && (
										<p className='text-2xl'>Category: {selectedCategory}</p>
									)}
									{formAction === 'edit' && (
										<p className='text-2xl'>Editing Skill with ID: {id}</p>
									)}
									<p>Name</p>
									<input type='text' placeholder='Skill Name' value={name} onChange={(e) => setName(e.target.value)} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
									<p>Level</p>
									<input type='text' placeholder='Skill Level' value={level} onChange={(e) => setLevel(e.target.value)} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
									<p>Description</p>
									<textarea placeholder='Description' value={description} onChange={(e) => setDescription(e.target.value)} rows={5} className='bg-inherit border-2 p-2 rounded-lg w-full my-1'/>
									<br/>
									<button type='submit' className='bg-inherit border-2 p-2 rounded-lg my-1 mr-2'>{formAction === 'add' && (
										"Add Skill To Category"
									)}{formAction === 'edit' && (
										"Update Skill"
									)}</button>
									<button type='reset' className='bg-inherit border-2 p-2 rounded-lg my-1'>Cancel</button>
								</form>
							</div>
						)}
					</div>
					
				</div>
				
				<div className='flex-1 pl-4'>
					<SkillsView skills={categoryMapping[selectedCategory]} category={selectedCategory} onDelete={onDelete} onEdit={onEdit}/>
				</div>
			</div>
			
		</div>
	);
	
};

const SkillsView = ({skills, onDelete, onEdit}) => {
	return (
		<div className='text-grayscale-900 flex-1 mx-2 overflow-y-scroll max-h-96'>
				{skills.map(skill => (
					<div key={skill.id} className='rounded-lg border-grayscale-900 border border-solid p-2 my-2'>
						<div className='flex flex-row'>
							<p className='text-2xl flex-1 '>{skill.name}</p>
							
							<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mx-1' onClick={() => onEdit(skill)}>
								Edit
							</button>
							<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mx-1' onClick={() => onDelete(skill.id)} >
								Delete
							</button>
						</div>
						<div>
							<p>ID: {skill.id}</p>
							<p className='text-xl'>Level: {skill.level}</p>
							<p className='text-xl text-grayscale-700'>{skill.description}</p>
						</div>
						
					</div>
				))}
		</div>
	);
};

export default SkillEdit;
