import { describe, it, expect } from "vitest";

import { useSessionStorage } from "./useSessionStorage";
import { renderHook } from "@testing-library/react";

describe("useSessionStorage", () => {
	it("should require a key parameter", () => {
		const { result } = renderHook(() => useSessionStorage({ key: "myKey" }));

		expect(result.current).toBeDefined();
	});

	it("should return a current value of given sessionStorage key", () => {
		const { result } = renderHook(() =>
			useSessionStorage({ key: "anotherKey" })
		);

		expect(result.current.value).toBe(undefined);
	});

	it("should return a initial vaule of given sessionStorage key", () => {
		const { result } = renderHook(() =>
			useSessionStorage({ key: "initExample", initialValue: "initialValue" })
		);

		expect(result.current.value).toBe("initialValue");
	});
});
