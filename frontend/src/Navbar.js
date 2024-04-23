function Navbar({toggleTheme}) {
	return (
		<nav className="sticky top-0 w-full h-20 px-10 z-50 flex flex-row
						bg-navbar-light dark:bg-navbar-dark
						shadow-lg shadow-gray-300 dark:shadow-gray-600
						transition-all duration-200">
			<div className="flex flex-row w-1/2">
				<a className="navbar-link" href="/">Home</a>
				<a className="navbar-link" href="/jobs">Jobs</a>
				<a className="navbar-link" href="/games">Games</a>
				<a className="navbar-link" href="/hobbies">Hobbies</a>
				<a className="navbar-link" href="/about">About</a>
			</div>
			<div className="flex flex-row w-1/2 justify-end items-center gap-8">
				<a target="_blank" href="https://github.com/Shelton-Bai">
					<button className="component-button p-2 hover:p-3">GitHub</button>
				</a>
				<a target="_blank" href="https://www.linkedin.com/in/shelton-bai2002/">
					<button className="component-button p-2 hover:p-3">LinkedIn</button>
				</a>
				<a>
					<button onClick={toggleTheme} className="component-button p-2 hover:p-3">Toggle Theme</button>
				</a>
			</div>
			
		</nav>
	);
}

export default Navbar;