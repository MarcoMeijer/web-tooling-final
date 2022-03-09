import React from "react"
import PopUpMenu from "../../component/popUpMenu/PopUpMenu"
import { PokemonData } from "../../logic/PokemonData"

type WinPopUpProps = {
	pokemon: PokemonData
	close: () => void
}

const WinPopUp = ({ pokemon, close }: WinPopUpProps) => {
	return (
		<PopUpMenu title="Congratulations!" close={close}>
			<img
				src={pokemon.sprites.front_default}
				style={{ width: 192, height: 192 }}
			/>
			<p>{pokemon.name} has been added to your pokédex!</p>
		</PopUpMenu>
	)
}

export default WinPopUp
