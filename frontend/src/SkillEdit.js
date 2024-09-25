import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SkillEdit = () => {
	//skill object arrays
	const [languages, setLanguages] = useState([]);
	const [frameworks, setFrameworks] = useState([]);
	const [tools, setTools] = useState([]);
	const [misc, setMisc] = useState([]);

	const [selectedCategory, setSelectedCategory] = useState("Programming Languages");
	const categoryMapping = {
		"Programming Languages": languages,
		"Frameworks/Libraries": frameworks,
		"Database/Cloud/Dev Tools": tools,
		"Miscellaneous": misc,
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

	

	const onDelete = async (id) => {
		try {
			await axios.delete(`http://localhost:8080/api/skills/${id}`);
			alert('Skill deleted successfully');
		} catch (error) {
			console.error('Error deleting skill:', error);
		}
		fetchSkills();
	}
	
	return (
		<div className="">
			<div className='flex space-x-6 px-32 py-10 bg-gradient-to-bl from-grayscale-150 via-grayscale-200 to-grayscale-200'>
				{Object.keys(categoryMapping).map((category, index) => (
					<div className='' key={category}>
						<p
							
							onClick={() => setSelectedCategory(category)}
							className={`cursor-pointer transition-all mt-3 ${
								category === selectedCategory
									? 'text-3xl text-light-100'
									: 'text-2xl text-light-200 hover:text-3xl hover:text-light-100'
							}`}
						>
							{category}
						</p>
					</div>
				))}
			</div>
			<div className='bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen'>
				<div className=''>
					{/* <div className='flex-1 border-yellow-600 border text-grayscale-900 mt-4'>
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
					</div> */}
					
					<div className=''>
						<SkillsView skills={categoryMapping[selectedCategory]} category={selectedCategory} onDelete={onDelete} fetchSkills={fetchSkills} selectedCategory={selectedCategory}/>
					</div>
				</div>
			</div>
				
			
		</div>
	);
	
};

const SkillCard = ({skill, fetchSkills, onDelete, skills}) => {
	const [name, setName] = useState(skill.name);
	const [description, setDescription] = useState(skill.description);
	const [level, setLevel] = useState(skill.level);
	const [category, setCategory] = useState(skill.category);
	const [id, setId] = useState(skill.id);

	const [editing, setEditing] = useState(false);

	const formCatMap = {
		"Programming Languages": 'LANGUAGES',
		"Frameworks/Libraries": 'FRAMEWORKS',
		"Database/Cloud/Dev Tools": 'TOOLS',
		"Miscellaneous": 'MISC',
	};

	const submitSkill = async (e) => {
		e.preventDefault();
		if(name.trim() === '' || level.trim() === '' || description.trim() === ''){
			alert('Fields cannot be empty!');
			return;
		}

		const skillJSON = {
			name,
			level,
			description,
			category
		}
		
		try {
			const response = await axios.put(`http://localhost:8080/api/skills/${id}`, skillJSON);
			// alert('Successfully Updated Skill!');
		} catch (error) {
			console.error(error);
		}

		fetchSkills();
		setEditing(false);
	}

	const onEdit = (skill) => {
		setEditing(!editing);
		setName(skill.name);
		setLevel(skill.level);
		setDescription(skill.description);
		setId(skill.id);
	}

	const resetForm = (e) => {
		e.preventDefault();
		setEditing(false);
	}

	const reorderSkill = async (direction) => {
		const currentIndex = skills.findIndex((s) => s.id === skill.id);
		let previousSkillId = null;
		let nextSkillId = null;

		if (direction === 'up') {
			previousSkillId = skills[currentIndex - 2] ? skills[currentIndex - 2].id : null;
			nextSkillId = skills[currentIndex - 1] ? skills[currentIndex - 1].id : null;
		} else if (direction === 'down') {
			previousSkillId = skills[currentIndex + 1] ? skills[currentIndex + 1].id : null;
			nextSkillId = skills[currentIndex + 2] ? skills[currentIndex + 2].id : null;
		}

		try {
			await axios.post(`http://localhost:8080/api/skills/${skill.id}/reorder`, null, {
				params: { previousSkillId, nextSkillId },
			});
			fetchSkills(); // Refresh the skills after reordering
		} catch (error) {
			console.error('Error reordering skill:', error);
		}
	}

	return (
		<div className='mb-6 w-10/12'>
			<div className='flex flex-row'>
				<p className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1'>ID: {skill.id}</p>
				<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => {reorderSkill("up")}}>
					🔼
				</button>
				<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => {reorderSkill("down")}}>
					🔽
				</button>
				<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => {onEdit(skill)}}>
					Edit
				</button>
				<button className='text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => onDelete(skill.id)}>
					Delete
				</button>
			</div>
			{!editing && (
				<div>
					<p className='text-grayscale-900 text-2xl'>{skill.name}</p>
					<p className='text-grayscale-900 text-lg'>Skill Level: {skill.level}</p>
					<p className='text-grayscale-700 text-lg'>{skill.description}</p>
				</div>
			)}
			{editing && (
				<div className='flex-col flex'>
					<form onSubmit={(e) => {submitSkill(e)}} onReset={(e) => {resetForm(e)}}>
						<input type='text' placeholder='Skill Name' value={name} onChange={(e) => {setName(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
						<br/>
						<input type='text' placeholder='Skill Level' value={level} onChange={(e) => {setLevel(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
						<br/>
						<textarea placeholder='Description' value={description} onChange={(e) => {setDescription(e.target.value)}} rows={3} className='bg-inherit border-2 p-2 rounded-lg w-full my-1'/>
						
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

const SkillsView = ({skills, onDelete, fetchSkills, selectedCategory}) => {

	const formCatMap = {
		"Programming Languages": 'LANGUAGES',
		"Frameworks/Libraries": 'FRAMEWORKS',
		"Database/Cloud/Dev Tools": 'TOOLS',
		"Miscellaneous": 'MISC',
	};

	const [adding, setAdding] = useState(false);

	const [name, setName] = useState('');
	const [description, setDescription] = useState('');
	const [level, setLevel] = useState('');
	const [category, setCategory] = useState(formCatMap[selectedCategory]);
	const [id, setId] = useState(-1);

	useEffect(() =>{
		setCategory(formCatMap[selectedCategory]);
	}, [selectedCategory]);
	
	const submitSkill = async (e) => {
		e.preventDefault();
		if(name.trim() === '' || level.trim() === '' || description.trim() === ''){
			alert('Fields cannot be empty!');
			return;
		}

		const skillJSON = {
			name,
			level,
			description,
			category,
		}
		
		try {
			const response = await axios.post(`http://localhost:8080/api/skills`, skillJSON);
			// alert('Successfully Updated Skill!');
		} catch (error) {
			console.error(error);
		}

		fetchSkills();
		setAdding(false);
		setName('');
		setDescription('');
		setLevel('');
		setId(-1);
		
	}

	const resetForm = (e) => {
		e.preventDefault();
		setAdding(false);
		setName('');
		setDescription('');
		setLevel('');
		setId(-1);
	}

	return (
		<div className='text-grayscale-900 px-32'>
				{skills.map(skill => (
					<div key={skill.id}>
						<SkillCard skill={skill} onDelete={onDelete} fetchSkills={fetchSkills} skills={skills}/>
					</div>
				))}
				{!adding && (
					<button type='reset' className='bg-inherit border-2 p-2 rounded-lg my-4' onClick={() => {setAdding(!adding)}}>
						Add Skill
					</button>
				)}
				{adding && (
					<div className='my-4'>
						<form onSubmit={(e) => {submitSkill(e)}} onReset={(e) => {resetForm(e)}}>
							<input type='text' placeholder='Skill Name' value={name} onChange={(e) => {setName(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
							<br/>
							<input type='text' placeholder='Skill Level' value={level} onChange={(e) => {setLevel(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
							<br/>
							<textarea placeholder='Description' value={description} onChange={(e) => {setDescription(e.target.value)}} rows={3} className='bg-inherit border-2 p-2 rounded-lg w-full my-1'/>
							
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

export default SkillEdit;
