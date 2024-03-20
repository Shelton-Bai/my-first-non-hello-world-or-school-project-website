/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,jsx,ts,tsx}",
	],
	darkMode: 'class',
	theme: {
		extend: {
			// colors: {
			// 	primary: '#cbd5d7',
			// 	secondary: '#101010',
			// 	component: '#000078',
			// 	textprimary: '#000078',
			// 	textsecondary: '#100000',
			// 	textcomponent: '#cbd5d7',
			// 	darkprimary: '#101010',
			// 	darksecondary: '#100000',
			// 	darkcomponent: '#64ffff',
			// 	darktextprimary: '#64ffff',
			// 	darktextsecondary: '#100000',
			// 	darktextcomponent: '#101010',
			// },
			colors: {
				primary: {
					darkText: '#00c6e0',	//Dark Text
					lightText: '#000000',	//Light Text
					dark: '#02101a',		//Dark BG
					light: '#FFFFFF', 	//Light BG
				},
				secondary: {
					darkText: '#00c6e0',	//Dark Text
					lightText: '#000000',	//Light Text
					dark: '#00417a',		//Dark BG
					light: '#2199ff', 	//Light BG
				},
				component: {
					darkText: '#F0F0F0',	//Dark Text
					lightText: '#000000',	//Light Text
					dark: '#00c6e0',		//Dark BG
					light: '#6bbbff', 	//Light BG
				},
			},
		},
	},
	plugins: [],
}

