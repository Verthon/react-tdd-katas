import { useReducer } from "react";

type UseCounterParams = {
	initialCount?: number;
	min?: number;
	max?: number;
};

type Action =
	| { type: "incremented"; payload: { max: number } }
	| { type: "decremented"; payload: { min: number } }
	| { type: "reseted"; payload: { initialCount: number } };

const reducer = (count: number, action: Action) => {
	if (action.type === "incremented") {
		return Math.min(count + 1, action.payload.max);
	}

	if (action.type === "decremented") {
		return Math.max(count - 1, action.payload.min);
	}

	if (action.type === "reseted") {
		return action.payload.initialCount;
	}

	return count;
};

export const useCounter = ({
	initialCount = 0,
	min = -Number.NEGATIVE_INFINITY,
	max = Number.POSITIVE_INFINITY,
}: UseCounterParams) => {
	const [count, dispatch] = useReducer(reducer, initialCount);

	const increment = () => {
		dispatch({ type: "incremented", payload: { max } });
	};

	const decrement = () => {
		dispatch({ type: "decremented", payload: { min } });
	};

	const reset = () => {
		dispatch({ type: "reseted", payload: { initialCount } });
	};

	return {
		increment,
		decrement,
		reset,
		count,
	};
};
