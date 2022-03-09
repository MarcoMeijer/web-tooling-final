jest.mock("./hooks/useFetch")
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import React from "react"
import App from "./App"
import * as useFetchImports from "./hooks/useFetch"

const useFetchSpy = jest.spyOn(useFetchImports, "useFetch")

describe("app", () => {
	it("should have a themeswitch button", () => {
		render(<App />)
		expect(screen.getByTestId("theme-switch")).toBeVisible()
	})

	it("should show a loading state when the data haven’t arrived yet", () => {
		useFetchSpy.mockImplementation(() => undefined)
		render(<App />)
		expect(screen.queryByTestId("loading-pokemon-info")).not.toBeInTheDocument()
		userEvent.click(screen.getByTestId("accordion-title"))
		expect(screen.queryByTestId("loading-pokemon-info")).toBeInTheDocument()
		expect(screen.queryByTestId("pokemon-info")).not.toBeInTheDocument()
	})

	it("should not load the content of the accordion at the start", () => {
		render(<App />)
		expect(screen.queryByTestId("accordion-content")).not.toBeInTheDocument()
		userEvent.click(screen.getByTestId("accordion-title"))
		expect(screen.queryByTestId("accordion-content")).toBeVisible()
		userEvent.click(screen.getByTestId("accordion-title"))
		expect(screen.queryByTestId("accordion-content")).toBeInTheDocument()
	})
})
