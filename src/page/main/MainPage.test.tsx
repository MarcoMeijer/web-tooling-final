jest.mock("../../hooks/useFetch")
import { fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import pokemon1 from "../../../testData/pokemon1.json"
import * as useFetchImports from "../../hooks/useFetch"
import MainPage from "./MainPage"

const useFetchSpy = jest.spyOn(useFetchImports, "useFetch")

describe("main page", () => {
	it("should show a loading state when the data hasn't arrived yet", () => {
		useFetchSpy.mockImplementation(() => undefined)
		render(<MainPage pokemonID={1} />)

		expect(screen.queryByTestId("loading-indicator")).toBeInTheDocument()
	})
	it("should show data when it has arrived.", () => {
		useFetchSpy.mockImplementation(() => pokemon1)
		render(<MainPage pokemonID={1} />)

		expect(screen.queryByTestId("loading-indicator")).not.toBeInTheDocument()
		expect(screen.queryByTestId("pokemon-image")).toBeVisible()
	})
	it("should lose after four incorrect guesses", () => {
		useFetchSpy.mockImplementation(() => pokemon1)
		render(<MainPage pokemonID={1} />)

		expect(screen.queryByTestId("lose-popup")).not.toBeInTheDocument()

		const input = screen.getByTestId("pokemon-input")
		userEvent.paste(input, "not bulbasaur")

		for (let i = 0; i < 3; i++) {
			fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
			expect(screen.queryByTestId("lose-popup")).not.toBeInTheDocument()
			expect(screen.queryByTestId("pokemon-image")).toHaveAttribute(
				"is-visible",
				JSON.stringify(i == 2),
			)
		}

		fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
		expect(screen.queryByTestId("lose-popup")).toBeInTheDocument()
		expect(screen.queryByTestId("pokemon-image")).toHaveAttribute(
			"is-visible",
			"true",
		)
	})
	it("should add pokemon to pokedex after correct guess", () => {
		useFetchSpy.mockImplementation(() => pokemon1)
		render(<MainPage pokemonID={1} />)

		expect(screen.queryByTestId("lose-popup")).not.toBeInTheDocument()
		expect(screen.queryByTestId("win-popup")).not.toBeInTheDocument()
		expect(screen.queryByTestId("pokedex-pokemon")).not.toBeInTheDocument()

		const input = screen.getByTestId("pokemon-input")

		// make two incorrect guesses
		userEvent.paste(input, "not bulbasaur")
		for (let i = 0; i < 2; i++) {
			fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })
			expect(screen.queryByTestId("lose-popup")).not.toBeInTheDocument()
			expect(screen.queryByTestId("win-popup")).not.toBeInTheDocument()
			expect(screen.queryByTestId("pokedex-pokemon")).not.toBeInTheDocument()
			expect(screen.queryByTestId("pokemon-image")).toHaveAttribute(
				"is-visible",
				"false",
			)
		}

		// guess correctly
		userEvent.clear(input)
		userEvent.paste(input, "bulbasaur")
		fireEvent.keyPress(input, { key: "Enter", code: 13, charCode: 13 })

		expect(screen.queryByTestId("lose-popup")).not.toBeInTheDocument()
		expect(screen.queryByTestId("win-popup")).toBeInTheDocument()
		expect(screen.queryAllByTestId("pokedex-pokemon")).toHaveLength(1)

		// after it is guessed correctly it should always be visible
		expect(screen.queryByTestId("pokemon-image")).toHaveAttribute(
			"is-visible",
			"true",
		)
	})
})
