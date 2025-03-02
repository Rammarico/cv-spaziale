/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		
		extend: {
			colors: {
				'background': '#050505',
				'base': '#191919',
				'violet-dark': '#191935',
				'violet-light': '#25274A',
				'purple-dark': '#6339D6',
				'purple-light': '#7E58E0',
				'orange-light': '#FFB266',
				'orange-dark': '#E8746E',
				'green-cyber': '#93fe0e'
			},
			backgroundImage: {
				'noise': "url('https://grainy-gradients.vercel.app/noise.svg')",
			},
			borderColor: {
				'base': '#191919'
			}
		},
	},
	plugins: [],
}
