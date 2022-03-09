import React, { useState } from "react"
import PokeballBar from "../../component/PokeballBar"
import { useFetch } from "../../hooks/useFetch"
import { PokemonData } from "../../logic/PokemonData"
import NavigationBar from "../NavigationBar"
import Pokedex from "../pokedex/Pokedex"
import LosePopUp from "../popUps/LosePopUp"
import WinPopUp from "../popUps/WinPopUp"
import "./MainPage.css"

const MainPage = ({ pokemonID }: { pokemonID: number }) => {
	const [pokedexOpen, setPokedexOpen] = useState(false)
	const [winPopUpOpen, setWinPopUpOpen] = useState(false)
	const [losePopUpOpen, setLosePopUpOpen] = useState(false)
	const [inputValue, setInputValue] = useState("")
	const [health, setHealth] = useState(4)

	const pokemon = useFetch<PokemonData>(
		`https://pokeapi.co/api/v2/pokemon/${pokemonID}`,
	)

	const switchPokedexOpen = () => setPokedexOpen(!pokedexOpen)

	const makeGuess = (guessName: string) => {
		if (health === 0) return
		if (guessName.toLocaleLowerCase() !== pokemon?.name.toLocaleLowerCase()) {
			if (health === 1) setLosePopUpOpen(true)
			setHealth(health - 1)
		} else setWinPopUpOpen(true)
	}

	return (
		<div style={{ alignItems: "center" }}>
			<div
				style={{
					position: "absolute",
					width: 480,
					top: 55,
					bottom: 0,
					left: pokedexOpen ? 0 : -480,
					transition: "0.3s",
				}}
			>
				<Pokedex close={() => setPokedexOpen(false)} />
			</div>
			{winPopUpOpen && pokemon && (
				<WinPopUp pokemon={pokemon} close={() => setWinPopUpOpen(false)} />
			)}
			{losePopUpOpen && pokemon && (
				<LosePopUp pokemon={pokemon} close={() => setLosePopUpOpen(false)} />
			)}
			<NavigationBar switchPokedexOpen={switchPokedexOpen} />
			<img className="pokemon-image" src={pokemon?.sprites.front_default} />
			<PokeballBar healthLeft={health} />
			<input
				className="pokemon-input"
				value={inputValue}
				onChange={event => setInputValue(event.target.value)}
				onKeyPress={event => {
					if (event.key === "Enter") makeGuess(inputValue)
				}}
			></input>
		</div>
	)
}

export default MainPage
