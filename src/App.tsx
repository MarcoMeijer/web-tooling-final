import React, { useState } from "react"
import "./app.css"
import "./fonts.css"
import { getDaysSinceStart, getTodaysPokemon } from "./logic/TimeLogic"
import MainPage from "./page/main/MainPage"

const App = () => {
	const day = getDaysSinceStart()
	const [pokemonID] = useState(getTodaysPokemon())

	return (
		<div className="app">
			<MainPage key={day} pokemonID={pokemonID} />
		</div>
	)
}

export default App
