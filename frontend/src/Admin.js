import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SkillEdit from './SkillEdit';

const Admin = () => {	
	return (
		<div className="bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen px-32 py-4">
			<SkillEdit/>
		</div>
	);
	
};


export default Admin;
