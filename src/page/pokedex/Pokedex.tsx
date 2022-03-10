import React from "react"
import ContainerHeader from "../../component/containerHeader/ContainerHeader"
import PokemonFrame from "../../component/pokemonFrame/PokemonFrame"
import { PokedexData } from "../../hooks/usePokedex"
import "./Pokedex.css"

type PokedexProps = {
	close: () => void
	pokedex: PokedexData
}

const Pokedex = ({ close, pokedex }: PokedexProps) => {
	return (
		<div className="pokedex">
			<ContainerHeader title="pokédex" onClose={close} />
			<div className="pokedex-scroll">
				{Array.from(Array(151).keys()).map((i: number) =>
					pokedex.includes(i + 1) ? (
						<PokemonFrame key={i} pokemon={i + 1} />
					) : (
						<PokemonFrame key={i} />
					),
				)}
			</div>
		</div>
	)
}

export default Pokedex
