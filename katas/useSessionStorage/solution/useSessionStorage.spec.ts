import { describe, it, expect } from "vitest";

import { renderHook, act, waitFor } from "@testing-library/react";

import { useSessionStorage } from "./useSessionStorage";

describe("useSessionStorage", () => {
	it("should require a key parameter", () => {
		const { result } = renderHook(() => useSessionStorage({ key: "myKey" }));

		expect(result.current).toBeDefined();
	});

	it("should return a current value of given sessionStorage key", () => {
		const { result } = renderHook(() =>
			useSessionStorage({ key: "anotherKey" }),
		);

		expect(result.current.value).toBe(undefined);
	});

	it("should return a initial vaule of given sessionStorage key", () => {
		const { result } = renderHook(() =>
			useSessionStorage({ key: "initExample", initialValue: "initialValue" }),
		);

		expect(result.current.value).toBe("initialValue");
	});

	it("should set a new value for given key", async () => {
		const { result } = renderHook(() =>
			useSessionStorage({ key: "test-set-value" }),
		);

		act(() => {
			result.current.setValue(123);
		});

		expect(result.current.value).toEqual(123);
	});

	it("should clear a value for given key", () => {
		const { result } = renderHook(() =>
			useSessionStorage({ key: "test-clear-value" }),
		);

		act(() => {
			result.current.setValue("test");
		});

		expect(result.current.value).toEqual("test");

		act(() => {
			result.current.clearValue();
		});

		expect(result.current.value).toBe(undefined);
	});
});
