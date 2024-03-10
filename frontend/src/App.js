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
		if(theme == 'light'){
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
			{!isLoading && <div className={`App ${theme}`}>
				<Navbar></Navbar>
				<div className="Content">
					<Routes>
						<Route index element={<Home toggleTheme={toggleTheme}/>} />
						<Route path='/jobs' element={<Jobs />} />
						<Route path='/about' element={<About />} />
						<Route path='/games' element={<Games />} />
						<Route path='/hobbies' element={<Hobbies />} />
					</Routes>
				</div>
			</div>}
		</Router>
	);
}

export default App;
