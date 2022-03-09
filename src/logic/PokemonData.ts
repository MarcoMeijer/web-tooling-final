type NamedAPIResource = {
	name: string
	url: string
}

type PokemonAbility = {
	is_hidden: boolean
	slot: number
	ability: NamedAPIResource
}

type PokemonMove = {
	move: NamedAPIResource
}

type PokemonSprite = {
	front_default: string
	front_shiny: string
	front_female: string
	front_shiny_female: string
	back_default: string
	back_shiny: string
	back_female: string
	back_shiny_female: string
}

type PokemonData = {
	id: number
	order: number
	name: string
	height: number // in decimeters
	sprites: PokemonSprite
	abilities: PokemonAbility[]
	moves: PokemonMove[]
}

type GrowthRateExperienceLevel = {
	level: number
	experience: number
}

type GrowthRate = {
	id: number
	name: string
	formula: string
	levels: GrowthRateExperienceLevel[]
	pokemon_species: NamedAPIResource[]
}

export type {
	NamedAPIResource,
	PokemonAbility,
	PokemonMove,
	PokemonSprite,
	PokemonData,
	GrowthRateExperienceLevel,
	GrowthRate,
}
