import { renderHook, act } from "@testing-library/react";
import { describe, it, expect } from "vitest";

import { useToggle } from "./useToggle";

describe("useToggle", () => {
	it('should return "off" as status as a default', () => {
		const { result } = renderHook(() => useToggle());
		const { status } = result.current;

		expect(status).toBe("off");
	});

	it('should accept initial state instead of the default "off" state', () => {
		const { result } = renderHook(() => useToggle("on"));
		const { status } = result.current;

		expect(status).toBe("on");
	});

	it("should flip the status", () => {
		const { result } = renderHook(() => useToggle("on"));

    expect(result.current.status).toBe('on')

		act(() => {
			result.current.toggle();
		});

		expect(result.current.status).toBe("off");
	});

  it("should toggle the status back and forth", () => {
    const { result } = renderHook(() => useToggle());

    act(() => {
      result.current.toggle();
    });
    expect(result.current.status).toBe("on");

    act(() => {
      result.current.toggle();
    });
    expect(result.current.status).toBe("off");

    act(() => {
      result.current.toggle();
    });
    expect(result.current.status).toBe("on");
  });
});
