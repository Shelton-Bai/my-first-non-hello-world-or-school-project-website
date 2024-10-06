import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Admin from './Pages/Admin';
import Events from './Pages/Events';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

	return (
		<Router>
				<div className="">
					<Routes>
						<Route index element={<Home/>} />
						<Route path='/skills' element={<Skills />} />
						<Route path='/projects' element={<Projects />} />
						<Route path='/events' element={<Events />} />
						<Route path='/admin' element={<Admin />} />
					</Routes>
				</div>
		</Router>
	);
}

export default App;
