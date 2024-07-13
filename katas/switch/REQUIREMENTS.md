# Switch and Match

## Requirements
Create a Switch and Match component which acts similarly to Solid.js version  
It is an alternative to the `switch` in your JSX
[Official docs of the show switch and match](https://docs.solidjs.com/concepts/control-flow/conditional-rendering#switch-and-match)

1. Match component accepts mandatory `when` prop which has to be a boolean

- Example:

```tsx
<Switch>
	<Match when={something}>
		<p>option 1</p>
	</Match>
	<Match when={somethingElse}>I'm not visible</Match>
</Switch>
```

2. Renders the children of the `Match` if it's `when` is truthy

- Example:

```tsx
<Switch>
	<Match when={true}>
		<p>I'm visible</p>
	</Match>
	<Match when={false}>I'm not visible</Match>
</Switch>
```

3. Renders only first Match children if there are multiple Match that `when` is truthy

- Example:

```tsx
<Switch>
	<Match when={true}>
		<p>I'm visible</p>
	</Match>
	<Match when={true}>I'm NOT visible even if when is truthy</Match>
  <Match when={false}>I'm NOT visible</Match>
</Switch>
```

4. Switch does not render the children if `when` is falsy for every Match

- Example:

```tsx
<Switch>
	<Match when={false}>
		<p>I'm not visible</p>
	</Match>
	<Match when={false}>I'm not visible as well</Match>
</Switch>
```

5. Switch accept optional parameter `fallback` to display something whenever each of the Match `when` is falsy

- Example:

```tsx
<Switch fallback={<p>This fallback will be visible instead</p>}>
	<Match when={false}>
		<p>I'm not visible</p>
	</Match>
	<Match when={false}>I'm not visible as well</Match>
</Switch>
```

Solution is provided inside of the `solution` folder
