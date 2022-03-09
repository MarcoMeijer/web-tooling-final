import React from "react"

type PokeballBarProps = {
	healthLeft: number
}

const PokeballBar = ({ healthLeft }: PokeballBarProps) => {
	const pokeBallUrl =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/poke-ball.png"
	const greatBallUrl =
		"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/great-ball.png"

	const imageSize = 30 * 5

	const balls = [greatBallUrl, pokeBallUrl, pokeBallUrl, pokeBallUrl]

	return (
		<div style={{ flexDirection: "row" }}>
			{balls.map((url, i) => (
				<img
					key={i}
					src={url}
					style={{
						width: imageSize,
						height: imageSize,
						marginLeft: -25,
						marginRight: -25,
						filter: i < healthLeft ? "" : "brightness(0)",
						opacity: i < healthLeft ? 1 : 0.5,
					}}
				/>
			))}
		</div>
	)
}

export default PokeballBar
