import { Match, Switch } from "./Switch";

describe("Switch and match", () => {
	it("should accept mandatory when field in Match component", () => {
		cy.mount(
			<Switch>
				<Match when={true}>
					<p>test</p>
				</Match>
			</Switch>,
		);

		cy.get("p").should("contain", "test");
	});

	it("should render the children of Match component if its when parameter is truthy", () => {
		cy.mount(
			<Switch>
				<Match when={true}>
					<p>I'm visible</p>
				</Match>
				<Match when={false}>
					<strong>I'm not visible</strong>
				</Match>
			</Switch>,
		);

		cy.get("p").should("contain", "I'm visible");
		cy.contains("I'm not visible").should("not.exist");
	});

	it("should render the children of the first Match component if multiple of them has when truthy", () => {
		cy.mount(
			<Switch>
				<Match when={true}>
					<p>I'm visible because I'm first with the [when] equal to true</p>
				</Match>
				<Match when={true}>
					<strong>I'm not visible even the when is truthy</strong>
				</Match>
				<Match when={false}>
					<strong>I'm not visible</strong>
				</Match>
			</Switch>,
		);

		cy.get("p").should(
			"contain",
			"I'm visible because I'm first with the [when] equal to true",
		);
		cy.contains("I'm not visible even the when is truthy").should("not.exist");
	});
});
