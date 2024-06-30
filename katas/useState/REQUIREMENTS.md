# useState

## Requirements
Create your own useState hook, that works exactly the same as React one does.
Docs: https://react.dev/reference/react/useState
You can use requirements list or (preferably) define your own based on [docs](https://react.dev/reference/react/useState) 

1. Always returns an array with state and setter for that state

  - Example: `[state, setState] = useState(initialState)`

2. Hook accepts optional initial state that could be of any type (e.g., number, string, object, array)

  - Example: `useState(0), useState('initial'), useState({}), useState([])`

3. Calling setter should update the state for primitive values

  - Example: `setState(10), setState('updated'), setState(true)`

4. Calling setter should update the state for objects

  - Example: `setState({ key: 'value' })`

5. Optionally should accept a callback for setter instead of plain newState value to update the state

  - Example: `setState(prevState => prevState + 1)`

6. Optionally instead of initial state user can pass lazy initiator

  - Example: `useState(() => expensiveComputation())`

Solution is provided inside of the `solution` folder

## Gotchas

- you may run into weird issues in `Typescript` when determining if initialState is an function https://github.com/microsoft/TypeScript/issues/37663#issuecomment-1053831482
- make sure you check the state at the correct point in time, during your tests to avoid incorrect test results
- Use `act` and `waitFor` from `React Testing Library` to correctly handle asynchronous state updates in your tests

## Hints

- you can import React useState in tests to determine if your test cases address proper use-cases
- it is okay and kinda expected to rely on another `React` hook when implementing the `useState`
- it is recommended to approach problem case by case