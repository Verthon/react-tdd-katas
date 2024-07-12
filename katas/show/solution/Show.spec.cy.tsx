import { Show } from "./Show";

describe("Show", () => {
	it("should accept mandatory field 'when'", () => {
		cy.mount(
			<Show when={true}>
				<p>I'm visible</p>
			</Show>
		);

		cy.get("p").should("contain", "I'm visible");
	});

	it("should render children if 'when' is truthy", () => {
		const name = "test";
		cy.mount(
			<Show when={name === "test"}>
				<strong>Children is visible</strong>
			</Show>
		);

		cy.get("strong").should("contain", "Children is visible");
	});

	it("should NOT render children if 'when' is falsy", () => {
		cy.mount(
			<Show when={false}>
				<button>Children is not visible</button>
			</Show>
		);

		cy.contains("Children is not visible").should("not.exist");
	});

	it("should render fallback not children if 'when' is falsy and fallback is provided", () => {
		cy.mount(
			<Show when={false} fallback={<cite>fallback</cite>}>
				<button>Children is not visible</button>
			</Show>
		);

		cy.get("cite").should("contain", "fallback");
	});
});
