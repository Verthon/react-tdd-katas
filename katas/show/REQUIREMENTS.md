# Show component

## Requirements
Create a Show component which acts similarly to Solid.js version  
It is an alternative to ternaries in your JSX
[Official docs of the show component](https://docs.solidjs.com/concepts/control-flow/conditional-rendering#show)

1. Accepts mandatory `when` prop which has to be a boolean

  - Example: `<Show when={shouldShowGreeting}><p>hello world</p></Show>`

2. Renders the children if `when` is truthy

  - Example: `<Show when={true}><p>I'm displayed</p></Show>`

3. Does not render the children if `when` is falsy

  - Example: `<Show when={false}><p>I'm not displayed</p></Show>`

4. Accept optional parameter `fallback` to display something whenever `when` is falsy 

  - Example: `<Show when={false} fallback={<p>I'm displayed instead!<p>}><p>I'm not displayed</p></Show>`

Solution is provided inside of the `solution` folder
