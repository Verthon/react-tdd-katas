import { expect, describe, it } from "vitest";
import { renderHook, act, waitFor } from "@testing-library/react";

import { useState } from "./useState";

describe("useState", () => {
	it("should return array with current state and setter for that state", () => {
		const { result } = renderHook(() => useState());
		const [state, setState] = result.current;

		expect(state).toBeUndefined();
		expect(setState).toBeInstanceOf(Function);

		act(() => {
			setState((prevState) => prevState);
		});
	});

	it("should accept initial state and return it form the hook if there was no state update performed", () => {
		const initialState = "mariusz";
		const { result } = renderHook(() => useState(initialState));
		const [state, _setState] = result.current;

		expect(state).toBe(initialState);
	});

	it("should change the state with setter for primitive value", async () => {
		const initialState = 2;
		const { result } = renderHook(() => useState(initialState));
		const [_state, setState] = result.current;

		act(() => {
			setState(4);
		});

		await waitFor(() => {
			const [state] = result.current;
			expect(state).toBe(4);
		});
	});

	it("should change the state with setter for object value", async () => {
		const { result } = renderHook(() =>
			useState<{ complex: { type: string; value: number } }>(),
		);
		const [_state, setState] = result.current;

		act(() => {
			setState({ complex: { type: "test", value: 2 } });
		});

		await waitFor(() => {
			const [state] = result.current;
			expect(state).toStrictEqual({ complex: { type: "test", value: 2 } });
		});
	});

	it("should change the state with setter for array value", async () => {
		const { result } = renderHook(() => useState<string[]>([]));
		const [_state, setState] = result.current;

		act(() => {
			setState(["mariusz", "dariusz"]);
		});

		await waitFor(() => {
			const [state] = result.current;
			expect(state).toStrictEqual(["mariusz", "dariusz"]);
		});
	});

	it("should update the state using callback approach", async () => {
		const { result } = renderHook(() => useState<string[]>([]));
		const [_state, setState] = result.current;

		act(() => {
			setState(() => ["mariusz", "dariusz"]);
		});

		await waitFor(() => {
			const [state] = result.current;
			expect(state).toStrictEqual(["mariusz", "dariusz"]);
		});
	});

	it("should accept lazy initiator as initial state parameter", async () => {
		const { result } = renderHook(() => useState(() => 1));
		const [state, setState] = result.current;

		expect(state).toBe(1);

		act(() => {
			setState((previousCount) => previousCount + 1);
		});

		await waitFor(() => {
			const [state] = result.current;
			expect(state).toBe(2);
		});
	});
});
