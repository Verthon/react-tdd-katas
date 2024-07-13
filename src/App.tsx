import { Match, Switch } from "../katas/switch/solution/Switch";

export const App = () => {
	return (
		<div>
			<p>you can treat it as runtime playground</p>
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
			</Switch>
		</div>
	);
};
