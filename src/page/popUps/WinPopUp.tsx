import React from "react"
import ShareButton from "../../component/button/ShareButton"
import PopUpMenu from "../../component/popUpMenu/PopUpMenu"
import { PokemonData } from "../../logic/PokemonData"

type WinPopUpProps = {
	pokemon: PokemonData
	healthLeft: number
	close: () => void
}

const WinPopUp = ({ pokemon, healthLeft, close }: WinPopUpProps) => {
	let healthBar = "🔵"
	for (let i = 2; i <= 4; i++) {
		healthBar += healthLeft >= i ? "🔴" : "⚫"
	}
	const message = `Pokemondle #1 ${healthLeft}/4\n${healthBar}\nhttps://pokemondle.herokuapp.com/`
	return (
		<PopUpMenu title="Congratulations!" close={close} data-testid="win-popup">
			<img
				src={pokemon.sprites.front_default}
				style={{ width: 192, height: 192 }}
			/>
			<p>{pokemon.name} has been added to your pokédex!</p>
			<div style={{ flexDirection: "row", alignSelf: "stretch", margin: 15 }}>
				<ShareButton shareText={message} />
			</div>
		</PopUpMenu>
	)
}

export default WinPopUp
