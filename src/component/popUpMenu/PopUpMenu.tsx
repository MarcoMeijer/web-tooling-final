import React, { ReactChild } from "react"
import ContainerHeader from "../containerHeader/ContainerHeader"
import "./PopUpMenu.css"

type PopUpMenuProps = {
	title: string
	children: ReactChild | ReactChild[]
	close: () => void
}

const PopUpMenu = ({ title, children, close }: PopUpMenuProps) => (
	<div className="pop-up-center">
		<div className="background" />
		<div className="pop-up-menu">
			<ContainerHeader title={title} onClose={close} />
			<div className="content">{children}</div>
		</div>
	</div>
)

export default PopUpMenu
