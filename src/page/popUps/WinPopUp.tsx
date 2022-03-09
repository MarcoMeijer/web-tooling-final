import React from "react"
import ShareButton from "../../component/button/ShareButton"
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
			<div style={{ flexDirection: "row", alignSelf: "stretch", margin: 15 }}>
				<ShareButton shareText="I have caught todays pokemon on https://pokemondle.herokuapp.com/" />
			</div>
		</PopUpMenu>
	)
}

export default WinPopUp
