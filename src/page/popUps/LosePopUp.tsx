import React from "react"
import PopUpMenu from "../../component/popUpMenu/PopUpMenu"
import { PokemonData } from "../../logic/PokemonData"

type WinPopUpProps = {
	pokemon: PokemonData
	close: () => void
}

const LosePopUp = ({ pokemon, close }: WinPopUpProps) => {
	return (
		<PopUpMenu title="Too bad!" close={close}>
			<img
				src={pokemon.sprites.front_default}
				style={{ width: 192, height: 192 }}
			/>
			<p>{pokemon.name} has gotten away!</p>
		</PopUpMenu>
	)
}

export default LosePopUp
