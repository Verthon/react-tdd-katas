import {
	createContext,
	useContext,
	useEffect,
	useReducer,
	useRef,
	type Dispatch,
	type PropsWithChildren,
} from "react";

type MatchMeta = {
	id: number;
	whenValue: boolean;
	shouldRenderChildren: boolean;
};
type State = MatchMeta[];
type Action = {
	type: "match_registered";
	payload: Omit<MatchMeta, "shouldRenderChildren">;
};

const SwitchContext = createContext<
	| {
			state: State;
			dispatch: Dispatch<Action>;
	  }
	| undefined
>(undefined);

const useSwitchContext = () => {
	const context = useContext(SwitchContext);

	if (context === undefined) {
		throw new Error("Match component has to be wrapped by the Switch");
	}
	return context;
};

const switchReducer = (state: State, action: Action) => {
	if (action.type === "match_registered") {
		// determine first id with whenValue = true
		const first =
			state.length === 0
				? true
				: state.some((match) => {
						return match.id === action.payload.id && action.payload.whenValue;
				  });

		const matchMeta = {
			id: action.payload.id,
			whenValue: action.payload.whenValue,
			shouldRenderChildren: first,
		} satisfies MatchMeta;
		return [...state, matchMeta];
	}

	return state;
};

const SwitchProvider = ({ children }: PropsWithChildren) => {
	const [state, dispatch] = useReducer(switchReducer, []);

	return (
		<SwitchContext.Provider value={{ state, dispatch }}>
			{children}
		</SwitchContext.Provider>
	);
};

export const Switch = ({ children }: PropsWithChildren) => {
	return <SwitchProvider>{children}</SwitchProvider>;
};

type MatchProps = {
	when: boolean;
} & PropsWithChildren;

const getRandomId = () => {
	return Math.floor(Math.random() * 100);
};

export const Match = ({ children, when }: MatchProps) => {
	const { dispatch, state } = useSwitchContext();
	const id = useRef(getRandomId());
	useEffect(() => {
		dispatch({
			type: "match_registered",
			payload: { id: id.current, whenValue: when },
		});
	}, []);

	console.log("state", state);

	const match = state.find((match) => {
		return match.id === id.current;
	});

	if (match?.shouldRenderChildren) {
		return children;
	}

	return null;
};
