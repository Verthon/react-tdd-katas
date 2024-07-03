# useToggle

## Requirements
Create useToggle hook which turns `on` and `off` value in place

1. Always returns object with status: `on` or `off` (defaults to `off`) and toggle function

  - Example: `{ status, toggle } = useToggle()`

2. Hook accepts optional initial state that could be either `on` or `off`

  - Example: `{ status, toggle } = useToggle('on')`

3. Calling `toggle` should flip the current `status` to `on` or `off` depending on the previous `status`

  - Example: `toggle('on'), toggle('off')`

Solution is provided inside of the `solution` folder
