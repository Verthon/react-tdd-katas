# useSessionStorage

## Requirements
Create useSessionStorage hook which handles the operations based on `window.sessionStorage` API

1. Accepts required parameter `key` and optional `initialValue`
- Example: `useSessionStorage({ key: 'myKey' })`

2. Always returns object with `value`, `setValue` and `clearValue`
- Example: `{ value, setValue, clearValue } = useSessionStorage()`

3. Hook accepts optional initial `initialValue` 

- Example: `useSessionStorage({ key: 'myKey', initialValue: 123 })`

4. Calling `setValue` should set the `value`

- Example: `setValue(123), toggle('newValue')`

5. Calling `clearValue` should clear the given `key` and `value` will return `null`

- Example: `clearValue()`

Solution is provided inside of the `solution` folder
