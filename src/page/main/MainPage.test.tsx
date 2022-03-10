jest.mock("../../hooks/useFetch")
import { render, screen } from "@testing-library/react"
import React from "react"
import * as pokemon1 from "../../../testData/pokemon1.json"
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
		expect(screen.queryByTestId("pokemon-image")).toBeVisible()
	})
})
