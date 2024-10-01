import { useState, useEffect } from "react";
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

function EventsDisplay({user, setLoggedIn, setUser}) {

	const [events, setEvents] = useState([]); //array of all events going on
	const [selectedEvent, setSelectedEvent] = useState(null); //either an event object, or an index for the array
	const [attendees, setAttendees] = useState([]); //list of attendees to the selected event
	const [drivers, setDrivers] = useState([]); //list of drivers to the selected event

	const [isAttending, setIsAttending] = useState(false);
	const [isDriver, setIsDriver] = useState(false);
	const [carCapacity, setCarCapacity] = useState(0);

	const fetchEvents = async () => {
		try {
			const response = await axios.get(`${apiUrl}/events`);
			setEvents(response.data);
		} catch (error) {
			console.error("Error fetching events:", error);
		}
	};

	useEffect(() => {
		fetchEvents();
	},[]);

	useEffect(() => { //fetch drivers and attendees on event select
		if (selectedEvent) {
			const fetchAttendeesAndDrivers = async () => {
				try {
					const attendeeResponse = await axios.get(`${apiUrl}/events/${selectedEvent.id}/attendees`);
					setAttendees(attendeeResponse.data);

					const driverResponse = await axios.get(`${apiUrl}/events/${selectedEvent.id}/drivers`);
					setDrivers(driverResponse.data);

					setIsAttending(attendeeResponse.data.some((attendee) => attendee.userId === user.id));

					console.table(driverResponse.data);
				} catch (error) {
					console.error("Error fetching attendees/drivers:", error);
				}
			};
			fetchAttendeesAndDrivers();
		}
	}, [selectedEvent, isAttending]);

	const handleSignup = async () => {
		try {
			const attendee = {
				userId: user.id,
				eventId: selectedEvent.id,
				name: user.name,
				role: isDriver ? "DRIVER" : "ATTENDEE",
				carCapacity: isDriver ? carCapacity : 0,
			};
			await axios.post(`${apiUrl}/events/${selectedEvent.id}/attendees`, attendee);
			setIsAttending(true);
			fetchEvents();
		} catch (error) {
			console.error("Error signing up:", error);
		}
	};

	const handleDropOut = async () => {
		try {
			await axios.delete(`${apiUrl}/events/${selectedEvent.id}/attendees/${user.id}`);
			setIsAttending(false);
			fetchEvents();
		} catch (error) {
			console.error("Error dropping out:", error);
		}
	};
	
	return (
		<div className="text-grayscale-900 p-4 py-6 lg:px-32 lg:p-20">

			<p className="text-6xl mb-4">
				Hello, {user.name}
			</p>
			<div>
				{events.map((event) => (
					<div key={event.id}>
						<p className="text-xl">{event.name}</p>
						<p className="text-xl">{event.description}</p>
						<p className="text-xl">{formatDateTime(event.time)}</p>
						<p className="text-xl">{event.place}</p>
						<button className='text-2xl rounded-lg border-grayscale-900 border border-solid p-1 mr-1 mb-2' onClick={() => {setSelectedEvent(event)}}>
							Expand Event
						</button>
						{selectedEvent && selectedEvent.id === event.id && (
							<div>
								{!isAttending && (
									<div>
										<label>
											<input
												type="checkbox"
												checked={isDriver}
												onChange={() => setIsDriver(!isDriver)}
											/>
											Sign up as a driver
										</label>
										{isDriver && (
											<div className="mt-2">
												<label>Car Capacity:</label>
												<input
													type="number"
													value={carCapacity}
													onChange={(e) => setCarCapacity(Number(e.target.value))}
													min="1"
													className="bg-inherit border-2 p-2 rounded-lg my-1"
												/>
											</div>
										)}
										<button
											className="mt-4 border p-2 rounded"
											onClick={handleSignup}
										>
											Sign Up for Event
										</button>
									</div>
								)}

								{isAttending && (
									<button
										className="mt-4 border p-2 rounded"
										onClick={handleDropOut}
									>
										Drop Out of Event
									</button>
								)}

								<p className="text-xl">Attendees:</p>
								<ul>
									{attendees.map((attendee) => (
										<li key={attendee.id} className="text-xl">- {attendee.name}</li>
									))}
								</ul>
								<p className="text-xl">Drivers:</p>
								<ul>
									{drivers.map((driver) => (
										<li key={driver.id} className="text-xl">- {driver.name}: {driver.carCapacity} seats</li>
									))}
								</ul>
							</div>
						)}
					</div>
				))}
			</div>

		</div>
	);
}

function formatDateTime(isoString) {
	const options = {
		year: 'numeric',
		month: 'long',
		day: 'numeric',
		hour: 'numeric',
		minute: 'numeric',
		hour12: true, // 12-hour format
	};
	const date = new Date(isoString);
	return date.toLocaleString(undefined, options); // 'undefined' uses the default locale
}

export default EventsDisplay;