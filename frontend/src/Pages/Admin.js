import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SkillEdit from '../Components/SkillEdit';
import Navbar from '../Components/Navbar';
import ProjectEdit from '../Components/ProjectEdit';

const Admin = () => {

	const [editCategory, setEditCategory] = useState('skills');

	return (
		<div className="bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150">
			<Navbar/>
			<button className='mx-32 my-2 text-grayscale-900 text-lg rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={() => {
				if(editCategory === 'skills'){
					setEditCategory('projects');
				} else {
					setEditCategory('skills');
				}
			}}>
				Switch Category
			</button>
			{editCategory === 'skills' && (
				<SkillEdit/>
			)}
			{editCategory === 'projects' && (
				<ProjectEdit/>
			)}
			
		</div>
	);
	
};


export default Admin;
