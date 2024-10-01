const axios = require('axios');

const API_BASE_URL = 'http://localhost:8080/api'; // Change to your actual API URL

// Create dummy users
const users = [
	{ name: 'Alice Airy', phoneNumber: '1234567890' },
	{ name: 'Bob Brown', phoneNumber: '0987654321' },
	{ name: 'Carol Charles', phoneNumber: '1123456789' },
	{ name: 'Dan David', phoneNumber: '1987654321' }
];

// Create dummy events
const events = [
	{
		name: 'Birthday Party',
		description: 'Birthday dinner for Alice',
		time: '2024-12-01T18:00:00',
		place: '1234 Oak Street, Springfield'
	},
	{
		name: 'Conference',
		description: 'Tech conference for developers',
		time: '2024-11-20T09:00:00',
		place: '5678 Pine Avenue, Springfield'
	}
];

// Add attendees
const attendees = [
	{ eventId: 1, userId: 1, name: 'Alice Airy', role: 'DRIVER', carCapacity: 4 },  // Alice as driver
	{ eventId: 1, userId: 2, name: 'Bob Brown', role: 'ATTENDEE', carCapacity: 0 }, // Bob as attendee
	{ eventId: 2, userId: 3, name: 'Carol Charles', role: 'ATTENDEE', carCapacity: 0 }, // Carol as attendee
	{ eventId: 2, userId: 4, name: 'Dan David', role: 'DRIVER', carCapacity: 3 }    // Dan as driver
];

// Function to create users
async function createUsers() {
	for (let user of users) {
		try {
			const response = await axios.post(`${API_BASE_URL}/users`, user);
			console.log('User created:', response.data);
		} catch (error) {
			console.error('Error creating user:', error);
		}
	}
}

// Function to create events
async function createEvents() {
	for (let event of events) {
		try {
			const response = await axios.post(`${API_BASE_URL}/events`, event);
			console.log('Event created:', response.data);
		} catch (error) {
			console.error('Error creating event:', error);
		}
	}
}

// Function to add attendees to events
async function addAttendees() {
	for (let attendee of attendees) {
		try {
			const response = await axios.post(`${API_BASE_URL}/events/${attendee.eventId}/attendees`, attendee);
			console.log('Attendee added:', response.data);
		} catch (error) {
			console.error('Error adding attendee:', error);
		}
	}
}

// Populate the database
async function populateDatabase() {
	await createUsers();
	await createEvents();
	await addAttendees();
}

// Run the population script
populateDatabase();
