# useCounter

## Requirements
Create useCounter hook which handles the increasing and decreasing the initial count

1. Accepts optional parameter `initialCount` (defaults to 0) and optional `min` (defaults to -Inifinity) and `max` (defaults to Inifinity) values

- Example: `useCounter({ min: 0, max: 5 })`

2. Always returns object with `count`, `increment`, `decrement` and `reset`

- Example: `{ count, increment, decrement, reset } = useCounter()`

3. Hook accepts optional initial `initialCount`

- Example: `useCounter({  initialCount: 5 })`

4. Calling `increment` should increase the `count` by 1

- Example: `increment()`

5. Calling `decrement` should decrease the `count` by 1

- Example: `decrement()`

6. Calling `reset` should reset `count` to the `initialCount` or to the 0

- Example: `reset()`

7. Ensure strict enforcement of `min` prop, prevent counter going below `min` 

- Example: `useCounter({ min: 0, max: 5 }) // count=0 decrement() //count still should be 0`

8. Ensure strict enforcement of `max` prevent counter going above `max`

- Example: `useCounter({ min: 0, max: 5 }) // count=5 increment() //count still should be 5`

Solution is provided inside of the `solution` folder
