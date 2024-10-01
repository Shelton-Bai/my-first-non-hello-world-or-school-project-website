import Comments from "../Components/Comments";
import Navbar from "../Components/Navbar";

function About() {
	return (
		<div className="bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen">
			<Navbar/>
			<div className='p-20 px-32'>
				<Comments/>
			</div>
			
		</div>
	);
}

export default About;