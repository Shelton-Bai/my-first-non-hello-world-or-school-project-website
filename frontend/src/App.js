import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Games from './Games';
import Jobs from './Jobs';
import Hobbies from './Hobbies';

import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');
	const [isLoading, setLoading] = useState(true);

	const toggleTheme = () => {
		if(theme === 'light'){
			setTheme('dark');
		} else {
			setTheme('light');
		}
	}

	useEffect(() => {
		localStorage.setItem('theme', theme);
			document.body.className = theme;
			setLoading(false);
		}, [theme]);

	return (
		<Router>
			{!isLoading && <div className={`${theme} transition-all font-sans min-h-screen flex flex-col`}>
				<Navbar></Navbar>
				<div className="flex-1 flex-col w-full bg-primary-light dark:bg-primary-dark dark:text-primary-darkText">
					<Routes>
						<Route index element={<Home toggleTheme={toggleTheme}/>} />
						<Route path='/jobs' element={<Jobs />} />
						<Route path='/about' element={<About />} />
						<Route path='/games' element={<Games />} />
						<Route path='/hobbies' element={<Hobbies />} />
					</Routes>
				</div>
				<footer className="w-full bg-secondary-light z-50 dark:bg-secondary-dark dark:text-secondary-darkText">
					<div className='h-12'>
						<p>Phone: 484-688-3796</p>
						<p>Email: sb.sheltonbai@gmail.com</p>
					</div>
				</footer>
			</div>}
		</Router>
	);
}

export default App;
