import React, { useState } from "react"
import "./app.css"
import MainPage from "./page/main/MainPage"

function getRandomInt(max: number): number {
	return Math.floor(Math.random() * max)
}

const App = () => {
	const [pokemonID] = useState(getRandomInt(151) + 1)
	// const [theme, setTheme] = useState("light")
	// const switchTheme = () => {
	// 	setTheme(theme === "light" ? "dark" : "light")
	// 	window.document.body.classList.toggle("dark-mode")
	// }

	return (
		<div className="app">
			<MainPage pokemonID={pokemonID} />
		</div>
	)
}

export default App
