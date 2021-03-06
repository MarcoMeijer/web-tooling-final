import React, { useEffect } from "react"
import LoadingIndicator from "../../component/LoadingIndicator"
import PokeballBar from "../../component/PokeballBar"
import useDayState from "../../hooks/useDayState"
import { useFetch } from "../../hooks/useFetch"
import usePokedex from "../../hooks/usePokedex"
import { comparePokemonName } from "../../logic/Pokemon"
import { PokemonData } from "../../logic/PokemonData"
import { getDaysSinceStart } from "../../logic/TimeLogic"
import NavigationBar from "../NavigationBar"
import Pokedex from "../pokedex/Pokedex"
import LosePopUp from "../popUps/LosePopUp"
import WinPopUp from "../popUps/WinPopUp"
import "./MainPage.css"

const MainPage = ({ pokemonID }: { pokemonID: number }) => {
	const [pokedexOpen, setPokedexOpen] = useDayState("pokedexOpen", false)
	const [winPopUpOpen, setWinPopUpOpen] = useDayState("winPopUpOpen", false)
	const [losePopUpOpen, setLosePopUpOpen] = useDayState("losePopUpOpen", false)
	const [pokemonVisible, setPokemonVisible] = useDayState(
		"pokemonVisible",
		false,
	)
	const [inputValue, setInputValue] = useDayState("inputValue", "")
	const [health, setHealth] = useDayState("health", 4)
	const [pokedex, dispatchPokedex] = usePokedex()

	const pokemon = useFetch<PokemonData>(
		`https://pokeapi.co/api/v2/pokemon/${pokemonID}`,
	)

	useEffect(() => {
		localStorage.setItem("lastDay", JSON.stringify(getDaysSinceStart()))
	}, [])
	useEffect(() => {
		localStorage.setItem("pokedex", JSON.stringify(pokedex))
	}, [pokedex])

	const switchPokedexOpen = () => setPokedexOpen(!pokedexOpen)

	const makeGuess = (guessName: string) => {
		if (health === 0) return
		if (pokemon === undefined) return

		if (comparePokemonName(guessName, pokemon.name)) {
			setPokemonVisible(true)
			setWinPopUpOpen(true)
			dispatchPokedex({
				type: "catch",
				pokemon: pokemonID,
			})
		} else {
			if (health === 2) setPokemonVisible(true)
			if (health === 1) setLosePopUpOpen(true)
			setHealth(health - 1)
		}
	}

	return (
		<div style={{ alignItems: "center" }}>
			{winPopUpOpen && pokemon && (
				<WinPopUp
					pokemon={pokemon}
					close={() => setWinPopUpOpen(false)}
					healthLeft={health}
				/>
			)}
			{losePopUpOpen && pokemon && (
				<LosePopUp pokemon={pokemon} close={() => setLosePopUpOpen(false)} />
			)}

			<NavigationBar switchPokedexOpen={switchPokedexOpen} />

			{pokemon === undefined ? (
				<LoadingIndicator />
			) : (
				<div style={{ flex: 1, alignSelf: "stretch", alignItems: "center" }}>
					<Pokedex
						isOpen={pokedexOpen}
						close={() => setPokedexOpen(false)}
						pokedex={pokedex}
					/>
					<img
						className="pokemon-image"
						src={pokemon?.sprites.front_default}
						data-testid="pokemon-image"
						is-visible={pokemonVisible ? "true" : "false"}
					/>
					<PokeballBar healthLeft={health} />
					<input
						className="pokemon-input"
						data-testid="pokemon-input"
						value={inputValue}
						onChange={event => setInputValue(event.target.value)}
						onKeyPress={event => {
							if (event.key === "Enter") makeGuess(inputValue)
						}}
					/>
				</div>
			)}
		</div>
	)
}

export default MainPage
