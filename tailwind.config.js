module.exports = {
	purge: ['./src/**/*.{ts,tsx}'],
	mode: 'jit',
	darkMode: 'media',
	theme: {
		extend: {
			colors: {
				theme: {
					DEFAULT: 'var(--theme)',
					dark: 'var(--theme-dark)',
					darker: 'var(--theme-darker)',
					darkest: 'var(--theme-darkest)',
					light: 'var(--theme-light)',
					lighter: 'var(--theme-lighter)',
					lightest: 'var(--theme-lightest)',
					white: 'var(--theme-white)',
					whiter: 'var(--theme-whiter)',
					whitest: 'var(--theme-whitest)',
					black: 'var(--theme-black)'
				}
			}
		}
	},
	variants: {},
	plugins: []
}
