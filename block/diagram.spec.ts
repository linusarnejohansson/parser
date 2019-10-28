import { Error, IO } from "@cogneco/mend"
import { Source } from "../Source"
import { parse } from "."

describe("block.diagram", () => {
	it("simple", () => {
		const result = parse(new Source(IO.StringReader.create("++\n<svg></svg>++\nFigure Caption."), new Error.ConsoleHandler())) || []
		expect(result.map(node => node.toObject())).toEqual([
			{
				class: "Block.Diagram",
				value: "<svg></svg>",
				content: [
					{
						class: "Inline.Text",
						value: "Figure Caption.",
					},
				],
			},
		])
	})
})
