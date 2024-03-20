function Navbar() {
	return (
		<nav className="sticky top-0 w-full h-20 place-content-center p-4 z-50 shadow-md flex flex-row justify-items-center
						bg-secondary-light dark:bg-secondary-dark">
			{/* <h1>Shelton's Website</h1> */}
			<div className="flex flex-row justify-around">
				<a className="navbar-link" href="/">Home</a>
				<a className="navbar-link" href="/jobs">Jobs</a>
				<a className="navbar-link" href="/games">Games</a>
				<a className="navbar-link" href="/hobbies">Hobbies</a>
				<a className="navbar-link" href="/about">About</a>

			</div>
		</nav>
	);
}

export default Navbar;