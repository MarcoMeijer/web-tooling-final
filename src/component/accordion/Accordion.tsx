import React, { useState } from "react"
import "./accordion.css"

interface AccordionProps {
	children: JSX.Element
	title: string
}

const Accordion = ({ children, title }: AccordionProps) => {
	const [open, setOpen] = useState(false)
	const [hasOpened, setHasOpened] = useState(open) // only create the children the first time it is openend

	const toggle = () => {
		setOpen(!open)
		if (!hasOpened) setHasOpened(true)
	}

	return (
		<div className="accordion">
			<div
				className="accordion-title"
				onClick={toggle}
				data-testid="accordion-title"
			>
				<p>{title}</p>
			</div>
			<div className="accordion-content" aria-expanded={open}>
				<div className="accordion-content-padding">{hasOpened && children}</div>
			</div>
		</div>
	)
}

export default Accordion
