import React, { useState } from "react"
import "./app.css"
import "./fonts.css"
import MainPage from "./page/main/MainPage"

function xmur3(str: string): number {
	let h = 1779033703 ^ str.length
	for (let i = 0; i < str.length; i++) {
		h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
		h = (h << 13) | (h >>> 19)
	}
	h = Math.imul(h ^ (h >>> 16), 2246822507)
	h = Math.imul(h ^ (h >>> 13), 3266489909)
	return (h ^= h >>> 16) >>> 0
}

function getRandomInt(str: string, max: number): number {
	return xmur3(str) % max
}
const App = () => {
	const date = new Date()
	const dateString = date.toLocaleDateString()
	const unsued = ""
	const [pokemonID] = useState(getRandomInt(dateString, 151) + 1)
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
