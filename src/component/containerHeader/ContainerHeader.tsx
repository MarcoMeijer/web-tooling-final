import React from "react"
import CloseButton from "../button/CloseButton"
import "./ContainerHeader.css"

type ContainerHeaderProps = {
	title: string
	onClose: () => void
}

const ContainerHeader = ({ title, onClose }: ContainerHeaderProps) => (
	<div className="container-header">
		<p className="header-title">{title}</p>
		<CloseButton onClose={onClose} />
	</div>
)

export default ContainerHeader
