import { useReducer, type SetStateAction } from "react";

type Action<Payload = unknown> = {
	type: "updateState";
	payload: Payload;
};

const isFunction = (x: unknown): x is Function => typeof x === "function";

type Initializer<State> = State | (() => State);

const createInitialState = <State = undefined>(
	initialState: Initializer<State>
): State => {
	return isFunction(initialState) ? initialState() : initialState;
};

export const useState = <State = undefined>(
	initialStateInput?: Initializer<State>
) => {
	const initialState = createInitialState(initialStateInput) as State;
	const reducer = (state: State, action: Action<State>) => {
		if (action.type === "updateState") {
			return action.payload;
		}

		return state;
	};
	const [state, dispatch] = useReducer(reducer, initialState);

	const setState = (value: SetStateAction<State>) => {
		if (isFunction(value)) {
			dispatch({ type: "updateState", payload: value(initialState) });
		} else {
			dispatch({ type: "updateState", payload: value });
		}
	};

	return [state, setState] as const;
};
