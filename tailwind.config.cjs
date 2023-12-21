/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		backgroundColor: (theme) => ({
			...theme('colors')
		}),
		fontFamily: {
			neuropol: ['Neuropol'],
			binaria_regular: ['Binaria-Regular'],
			binaria_bold: ['Binaria-Bold'],
		},
		extend: {
			colors: {
				primary: '#005393',
				secondary: '#494949',
				third: "#333333",
				white: '#fff',
				link: '#005393',
				link2: '#7accc7',
				border: "#D8D8D8",
				gray: '#f9f9f9',
				cyan: "#7accc7",
				hydro: "#0032d0",
				divide: "#D8D8D8",
				gray2: "#707070"
			}
		}
	},
	plugins: []
};

module.exports = config;
