import { useState } from "react";
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

function EventsLogin({setLoggedIn, setUser}) {

	const [registered, setRegistered] = useState(true);

	const [phone, setPhone] = useState('');
	const [name, setName] = useState('');

	const handleLogin = async () => {
		if(registered){ //if the user is logging in
			if (phone.trim() === '' || phone.length !== 10) {
                alert('Please enter a valid 10-digit phone number.');
                return;
            }
			try {
				const response = await axios.post(`${apiUrl}/users/login/${phone}`);
				const user = response.data;
				setUser(user);
				setLoggedIn(true);
			} catch (error) {
				console.error('Login failed:', error);
				alert('Login failed. Please check your phone number.');
			}

		} else { //if the user is making a new account
			if (name.trim() === '' || phone.trim() === '' || phone.length !== 10) {
                alert('Please enter both name and a valid 10-digit phone number.');
                return;
            }
			try {
				const response = await axios.post(`${apiUrl}/users`, { name, phoneNumber: phone });
				const user = response.data;
				setUser(user);
				setLoggedIn(true);
			} catch (error) {
				console.error('Registration failed:', error);
				alert('Registration failed. Please try again.');
			}
		}
	}
	
	return (
		<div className="text-grayscale-900 p-4 py-6 lg:px-32 lg:p-20">

			<p className="text-6xl mb-4">
				Login or Register
			</p>

			{!registered && (
				<div>
					<p className="text-2xl">Name</p>
					<input type="text" value={name} onChange={(e) => {setName(e.target.value)}} className='bg-inherit border-2 p-2 rounded-lg my-1'/>
				</div>
			)}

			<p className="text-2xl">Phone Number</p>
			<input 
				type="tel" 
				value={phone}
				onChange={(e) => {
					const cleaned = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
                    if (cleaned.length <= 10) {
                        setPhone(cleaned); // Set phone only if it's 10 digits or less
                    }
				}}
				className='bg-inherit border-2 p-2 rounded-lg my-1 mb-2'
			/>
			<br/>

			<button className='text-2xl rounded-lg border-grayscale-900 border border-solid p-1 mr-1 mb-2' onClick={() => {setRegistered(!registered)}}>
				{registered && ("I don't have an account")}
				{!registered && ("I already have an account")}
			</button>
			<br/>
			
			<button className='text-2xl rounded-lg border-grayscale-900 border border-solid p-1 mr-1' onClick={handleLogin}>
				{registered && ("Login")}
				{!registered && ("Register")}
			</button>

		</div>
	);
}

export default EventsLogin;