/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				main: { //main text color
					light: '#666666',
					dark: '#88a0b3',
				},
				body: { //background color
					light: '#ffffff',
					dark: '#00213b',
				},
				emphasis: { //title and important color
					light: '#000000',
					dark: '#e8f5ff',
				},
				component: { //button and hover color
					light: '#1ccceb',
					dark: '#1ccceb',
				},
				navbar: { //navbar bg
					light: '#f0f0f0',
					dark: '#002745',
				},
			},
		},
	},
	plugins: [],
}

