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

export const comparePokemonName = (userName: string, realName: string) => {
	if (userName.toLowerCase() === realName.toLowerCase()) return true
	if ((userName + "-m").toLowerCase() === realName.toLowerCase()) return true
	if ((userName + "-f").toLowerCase() === realName.toLowerCase()) return true
	return false
}

export default Pokemon
