import React from "react"
import ContainerHeader from "../../component/containerHeader/ContainerHeader"
import PokemonFrame from "../../component/pokemonFrame/PokemonFrame"
import "./Pokedex.css"

type PokedexProps = {
	close: () => void
}

const Pokedex = ({ close }: PokedexProps) => {
	return (
		<div className="pokedex">
			<ContainerHeader title="pokédex" onClose={close} />
			<div className="pokedex-scroll">
				{Array.from(Array(151).keys()).map((i: number) => (
					<PokemonFrame key={i} pokemon={i + 1} />
				))}
			</div>
		</div>
	)
}

export default Pokedex
