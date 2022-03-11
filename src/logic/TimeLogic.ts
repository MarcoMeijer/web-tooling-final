const nextDay = (date: Date) => {
	const tomorrow = new Date(date)
	tomorrow.setDate(tomorrow.getDate() + 1)
	tomorrow.setHours(0, 0, 0, 0)
	return tomorrow
}

export const getDaysSinceStart = () => {
	const firstDate = new Date(2022, 2, 11, 0, 0, 0, 0)
	const now = new Date()

	let currentDate = firstDate
	let result = 1
	while (
		now.getFullYear() !== currentDate.getFullYear() ||
		now.getMonth() !== currentDate.getMonth() ||
		now.getDate() !== currentDate.getDate()
	) {
		result += 1
		currentDate = nextDay(currentDate)
	}

	return result
}

function xmur3(str: string): () => number {
	let h = 1779033703 ^ str.length
	for (let i = 0; i < str.length; i++) {
		h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
		h = (h << 13) | (h >>> 19)
	}
	return () => {
		h = Math.imul(h ^ (h >>> 16), 2246822507)
		h = Math.imul(h ^ (h >>> 13), 3266489909)
		return (h ^= h >>> 16) >>> 0
	}
}
export const getTodaysPokemon = (): number => {
	const currentDay = getDaysSinceStart()
	const rng = xmur3("seeds")
	const differentRange = 30
	const numberOfPokemons = 151
	const lastPokemons: number[] = []
	for (let i = 0; i < currentDay; i++) {
		let newPokemon = 0
		do {
			newPokemon = (rng() % numberOfPokemons) + 1
		} while (lastPokemons.includes(newPokemon))

		lastPokemons.push(newPokemon)
		if (lastPokemons.length > differentRange) lastPokemons.shift()
	}
	return lastPokemons[lastPokemons.length - 1]
}

const zeroPad = (num: number, places: number) =>
	String(num).padStart(places, "0")

export const calculateRemainingTimeDay = () => {
	const now = new Date()
	const tomorrow = nextDay(now)
	const diff = Math.floor(Math.abs(tomorrow.valueOf() - now.valueOf()) / 1000)

	return `${zeroPad(Math.floor(diff / 3600), 2)}:${zeroPad(
		Math.floor(diff / 60) % 60,
		2,
	)}:${zeroPad(diff % 60, 2)}`
}
