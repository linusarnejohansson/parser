import { Error, IO } from "@cogneco/mend"
import { Source } from "../Source"
import { parse } from "."

describe("inline.math", () => {
	it("basic", () => {
		const result = parse(new Source(IO.StringReader.create("$a^2 + b^2 = c^2$"), new Error.ConsoleHandler())) || []
		expect(result.map(node => node.toObject())).toEqual([ { class: "Inline.Math", value: "a^2 + b^2 = c^2" } ])
	})
	it("in text", () => {
		const result = parse(new Source(IO.StringReader.create("This is a text with an $a^2 + b^2 = c^2$ in it."), new Error.ConsoleHandler())) || []
		expect(result.map(node => node.toObject())).toEqual([
			{ class: "Inline.Text", value: "This is a text with an " },
			{ class: "Inline.Math", value: "a^2 + b^2 = c^2" },
			{ class: "Inline.Text", value: " in it." },
		])
	})
})
