import { Dispatch, useEffect, useState } from "react"
import { getDaysSinceStart } from "../logic/TimeLogic"

// state that resets after each day
const useDayState = <T,>(key: string, def: T): [T, Dispatch<T>] => {
	const lastDay = localStorage.getItem("lastDay")
	let reset = false

	if (lastDay === null || JSON.parse(lastDay) !== getDaysSinceStart()) {
		reset = true
	}

	const localStorageItem = localStorage.getItem(key)

	const [value, setValue] = useState(
		localStorageItem === null || reset ? def : JSON.parse(localStorageItem),
	)

	useEffect(() => {
		localStorage.setItem(key, JSON.stringify(value))
	}, [value, key])

	return [value, setValue]
}

export default useDayState
