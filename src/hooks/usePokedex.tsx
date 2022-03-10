import { Dispatch, useReducer } from "react"

export type PokedexData = number[]

type CatchPokemonAction = {
	type: "catch"
	pokemon: number
}

type PokedexAction = CatchPokemonAction

const pokedexReducer = (
	state: PokedexData,
	action: PokedexAction,
): PokedexData => {
	switch (action.type) {
		case "catch":
			return [...state, action.pokemon]
		default:
			throw new Error(`Unknown action '${action.type}'`)
	}
}

const usePokedex = (): [PokedexData, Dispatch<PokedexAction>] => {
	const pokedexJson = localStorage.getItem("pokedex")
	const initialState = JSON.parse(pokedexJson === null ? "[]" : pokedexJson)
	return useReducer(pokedexReducer, initialState)
}

export default usePokedex
