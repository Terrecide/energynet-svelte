/** @type {import('tailwindcss').Config}*/
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		backgroundColor: (theme) => ({
			...theme('colors')
		}),
		fontFamily: {
			/* manrope_bold: ['Manrope-Bold'],
			manrope_semi_bold: ['Manrope-SemiBold'],
			manrope_extra_bold: ['Manrope-ExtraBold'],
			manrope_extra_light: ['Manrope-ExtraLight'],
			manrope_light: ['Manrope-Light'],
			manrope_medium: ['Manrope-Medium'],
			manrope_regular: ['Manrope-Regular'], */
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
				cyan: "#7accc7"
			}
		}
	},
	plugins: []
};

module.exports = config;
