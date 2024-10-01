import { useState } from "react";
import Navbar from "../Components/Navbar";
import EventsLogin from "../Components/EventsLogin";
import EventsDisplay from "../Components/EventsDisplay";

function Events() {

	const [loggedIn, setLoggedIn] = useState(false);

	const [user, setUser] = useState(null);

	return (
		<div className="bg-gradient-to-tl from-grayscale-150 via-grayscale-100 to-grayscale-150 flex flex-col min-h-screen">
			<Navbar/>
			{!loggedIn && (
				<div>
					<EventsLogin setLoggedIn={setLoggedIn} setUser={setUser}/>
				</div>
			)}
			{loggedIn && (
				<div>
					<EventsDisplay user={user} setLoggedIn={setLoggedIn} setUser={setUser}/>
				</div>
			)}
			
		</div>
	);
}

export default Events;