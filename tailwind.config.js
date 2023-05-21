/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				...colors,
				"main-background": "#111b21",
				"secondary-background": "#222e35",
				"chats-background": "#111b21",
				"main-green": "#00a884",
				"lighter-green": "#25d366",
				"chat-green": "#005c4b",
				icon: "#9ca8af",
				"blue-input": "#083045",
			},
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
				chats:
					"url('https://i.pinimg.com/originals/3e/e2/bc/3ee2bc042a4b739dffe83b5ad47b4dd4.jpg')",
			},
		},
	},
	plugins: [],
};
