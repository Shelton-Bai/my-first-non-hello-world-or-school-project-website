import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SkillEdit from './SkillEdit';
import Navbar from './Navbar';

const Admin = () => {	
	return (
		<div className="">
			<Navbar/>
			<SkillEdit/>
		</div>
	);
	
};


export default Admin;
