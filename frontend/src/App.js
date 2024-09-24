import Navbar from './Navbar';
import Home from './Home';
import Skills from './Skills';
import Projects from './Projects';
import About from './About';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './Admin';

function App() {

	return (
		<Router>
			<Navbar></Navbar>
				<div className="">
					<Routes>
						<Route index element={<Home/>} />
						<Route path='/skills' element={<Skills />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/comments' element={<About />} />
						<Route path='/admin' element={<Admin />} />
					</Routes>
				</div>
		</Router>
	);
}

export default App;
