import React, { useContext, createContext, FC, useState } from 'react'
import color from 'color'

type ThemeContext = [string, React.Dispatch<React.SetStateAction<string>>]

const darken = (c: string, v: number) => color(c).darken(v).rgb().string()
const lighten = (c: string, v: number) => color(c).lighten(v).rgb().string()
const whiten = (c: string, v: number) => color(c).lightness(v).string()
const saturate = (c: string, v: number) => color(c).saturationl(v).string()

const ThemeProvider: FC = ({ children, ...props }) => {
	const [theme, setTheme] = useState<string>('#1473C8')

	const variables = {
		'--theme': theme,
		'--theme-dark': darken(theme, 0.1),
		'--theme-darker': darken(theme, 0.2),
		'--theme-darkest': darken(theme, 0.3),
		'--theme-light': lighten(theme, 0.1),
		'--theme-lighter': lighten(theme, 0.2),
		'--theme-lightest': lighten(theme, 0.3),
		'--theme-white': whiten(theme, 90),
		'--theme-whiter': whiten(theme, 94),
		'--theme-whitest': whiten(theme, 98),
		'--theme-black': whiten(saturate(theme, 30), 20)
	}

	return (
		<Theme.Provider value={[theme, setTheme]} {...props}>
			<div style={variables as any}>{children}</div>
		</Theme.Provider>
	)
}

const Theme = createContext<ThemeContext>(null)

const useTheme = (): ThemeContext => useContext<ThemeContext>(Theme)

export { ThemeProvider, useTheme }
