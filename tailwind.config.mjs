/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'zinc': {
				'50': '#09090b',
				'100': '#18181b',
				'200': '#27272a',
				'300': '#3f3f46',
				'400': '#52525b',
				'500': '#71717a',
				'600': '#a1a1aa',
				'700': '#d4d4d8',
				'800': '#e4e4e7',
				'900': '#f4f4f5',
				'950': '#fafafa',
			},
		},
	},
	plugins: [],
}
