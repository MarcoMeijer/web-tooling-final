import React from "react"
import ShareButton from "../../component/button/ShareButton"
import Countdown from "../../component/countdown/Countdown"
import PopUpMenu from "../../component/popUpMenu/PopUpMenu"
import { PokemonData } from "../../logic/PokemonData"

type WinPopUpProps = {
	pokemon: PokemonData
	close: () => void
}

const LosePopUp = ({ pokemon, close }: WinPopUpProps) => {
	const message = `Pokémondle #1 0/4\n⚫⚫⚫⚫\nhttps://pokemondle.herokuapp.com/`
	return (
		<PopUpMenu title="Too bad!" close={close} data-testid="lose-popup">
			<img
				src={pokemon.sprites.front_default}
				style={{ width: 192, height: 192 }}
			/>
			<p>{pokemon.name} has gotten away!</p>
			<div style={{ flexDirection: "row", alignSelf: "stretch", margin: 25 }}>
				<Countdown />
				<ShareButton shareText={message} />
			</div>
		</PopUpMenu>
	)
}

export default LosePopUp
