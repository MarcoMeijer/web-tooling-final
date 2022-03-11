import React, { useEffect, useState } from "react"
import "./Countdown.css"

const zeroPad = (num: number, places: number) =>
	String(num).padStart(places, "0")

const calculateRemainingTime = () => {
	const now = new Date()
	const tomorrow = new Date(now)
	tomorrow.setDate(tomorrow.getDate() + 1)
	tomorrow.setHours(0, 0, 0, 0)
	const diff = Math.floor(Math.abs(tomorrow.valueOf() - now.valueOf()) / 1000)

	return `${zeroPad(Math.floor(diff / 3600), 2)}:${zeroPad(
		Math.floor(diff / 60) % 60,
		2,
	)}:${zeroPad(diff % 60, 2)}`
}

const Countdown = () => {
	const [time, setTime] = useState(calculateRemainingTime())

	useEffect(() => {
		const interval = setInterval(() => setTime(calculateRemainingTime()), 100)
		return () => clearInterval(interval)
	}, [])

	return (
		<div className="countdown">
			<p className="next">Next pokémon in:</p>
			<p className="timer">{time}</p>
		</div>
	)
}

export default Countdown
