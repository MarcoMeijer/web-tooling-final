import React from "react"

interface ThemeSwitchProps {
	switchTheme: () => void
}

const ThemeSwitch = ({ switchTheme }: ThemeSwitchProps) => {
	return (
		<button onClick={switchTheme} data-testid="theme-switch">
			Toggle theme
		</button>
	)
}

export default ThemeSwitch
