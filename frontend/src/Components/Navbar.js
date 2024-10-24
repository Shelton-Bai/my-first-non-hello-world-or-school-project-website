const iconSize = 32;

function Navbar() {
	return (
		<nav className="flex p-2 lg:px-32 lg:py-5 bg-gradient-to-bl from-grayscale-150 via-grayscale-200 to-grayscale-200 text-grayscale-900">
			<div className="flex flex-row lg:flex-row w-2/3 lg:w-1/2">
				<a className="navbar-link" href="/">Home</a>
				<a className="navbar-link" href="/skills">Skills</a>
				<a className="navbar-link" href="/projects">Projects</a>
				{/* <a className="navbar-link" href="/events">Events</a> */}
				{/* <a className="navbar-link" href="/admin">Admin</a> */}
			</div>
			<div className="flex flex-row w-1/3 lg:w-1/2 justify-end items-center gap-1 lg:gap-8">
				<a target="_blank" href="https://github.com/Shelton-Bai" rel="noreferrer">
					<GitHubIcon/>
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/shelton-bai2002/" rel="noreferrer">
					<LinkedInIcon/>
				</a>
			</div>
			
		</nav>
	);
}

const GitHubIcon = () => {
	return (
		<svg width={iconSize} height={iconSize} viewBox="0 0 98 96" xmlns="http://www.w3.org/2000/svg" className="navbar-button">
			<path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
		</svg>
	);
};

const LinkedInIcon = () => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" width={iconSize} height={iconSize} viewBox="0 0 24 24" className='navbar-button'>
			<path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-2 8c0 .557-.447 1.008-1 1.008s-1-.45-1-1.008c0-.557.447-1.008 1-1.008s1 .452 1 1.008zm0 2h-2v6h2v-6zm3 0h-2v6h2v-2.861c0-1.722 2.002-1.881 2.002 0v2.861h1.998v-3.359c0-3.284-3.128-3.164-4-1.548v-1.093z"/>
		</svg>
	);
};

export default Navbar;