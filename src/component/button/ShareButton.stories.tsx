import { ComponentMeta, ComponentStory } from "@storybook/react"
import React from "react"
import ShareButton from "./ShareButton"

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: "Example/ShareButton",
	component: ShareButton,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
	argTypes: {
		backgroundColor: { control: "color" },
	},
} as ComponentMeta<typeof ShareButton>

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
export const Template: ComponentStory<typeof ShareButton> = args => (
	<ShareButton {...args} />
)
