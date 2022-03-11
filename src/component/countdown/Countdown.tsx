import React, { useEffect, useState } from "react"
import { calculateRemainingTimeDay } from "../../logic/TimeLogic"
import "./Countdown.css"

const Countdown = () => {
	const [time, setTime] = useState(calculateRemainingTimeDay())

	useEffect(() => {
		const interval = setInterval(
			() => setTime(calculateRemainingTimeDay()),
			100,
		)
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
