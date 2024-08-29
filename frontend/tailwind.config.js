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
				light: {
					100: '#ffffff',
					200: '#cccccc',
					300: '#bbbbbb',
				},
				dark: {
					100: '#000000',
					200: '#222222',
					300: '#666666',
				},
				grayscale: {
					100: '#131313',
					150: '#191919',
					200: '#222222',
					300: '#444444',
					400: '#666666',
					500: '#828282',
					600: '#999999',
					700: '#bbbbbb',
					800: '#dddddd',
					900: '#ffffff',
				}
			},
			backgroundImage: {
				'hexagons': "url('hexagons.jpg')",
				'hexagonsdark': "url('hexagonsdark.jpg')"
			},
		},
	},
	plugins: [],
}

