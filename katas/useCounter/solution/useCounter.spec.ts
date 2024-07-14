import { act, renderHook } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import { useCounter } from "./useCounter";

describe("useCounter", () => {
	it("should accept optional initialCount parameter", () => {
		const { result } = renderHook(() => useCounter({ initialCount: 1 }));

		expect(result.current.count).toBe(1);
	});

	it("should accept optional min and max parameters", () => {
		const { result } = renderHook(() => useCounter({ min: 0, max: 5 }));

		expect(result.current.count).toBe(0);
	});

	it("should increment current value", async () => {
		const { result } = renderHook(() => useCounter({}));

		expect(result.current.count).toBe(0);

		act(() => {
			result.current.increment();
		});

		expect(result.current.count).toBe(1);
	});

	it("should decrement current value", async () => {
		const { result } = renderHook(() => useCounter({ initialCount: 5 }));

		expect(result.current.count).toBe(5);

		act(() => {
			result.current.decrement();
		});

		expect(result.current.count).toBe(4);
	});

	it("should reset current value to the initial one", async () => {
		const { result } = renderHook(() => useCounter({}));

		expect(result.current.count).toBe(0);

		act(() => {
			result.current.decrement();
			result.current.increment();
			result.current.increment();
			result.current.reset();
		});

		expect(result.current.count).toBe(0);
	});

	it("should not increase the count above max value", () => {
		const { result } = renderHook(() =>
			useCounter({ initialCount: 3, max: 4 }),
		);

		act(() => {
			result.current.increment();
			result.current.increment();
		});

		expect(result.current.count).toBe(4);
	});

	it("should not decrease the count above min value", () => {
		const { result } = renderHook(() =>
			useCounter({ initialCount: -9, min: -10 }),
		);

		act(() => {
			result.current.decrement();
			result.current.decrement();
		});

		expect(result.current.count).toBe(-10);
	});
});
