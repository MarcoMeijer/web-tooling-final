import React from "react"
import "./PokemonFrame.css"

type PokemonFrameProps = {
	pokemon?: number
}

const PokemonFrame = ({ pokemon }: PokemonFrameProps) => {
	const getSource = (pokemon: number) =>
		`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon}.png`
	const dittoSource = getSource(132)

	return (
		<div
			style={{
				padding: 7,
				margin: 3,
				backgroundColor: "#f3f3f3",
				borderRadius: 10,
			}}
		>
			{pokemon === undefined ? (
				<div style={{ position: "relative" }}>
					<img className="ditto" src={dittoSource} />
					<p className="ditto-question">?</p>
				</div>
			) : (
				<img src={getSource(pokemon)} />
			)}
		</div>
	)
}

export default PokemonFrame
