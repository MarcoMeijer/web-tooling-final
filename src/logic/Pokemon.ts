import { PokemonData } from "./PokemonData"

class Pokemon {
	data: PokemonData
	level: number
	exp: number
	hp: number
	name: string

	constructor(data: PokemonData) {
		this.data = data
		this.level = 1
		this.exp = 0
		this.hp = 0
		this.name = data.name
	}
}

export default Pokemon
