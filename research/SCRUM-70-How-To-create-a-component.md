# How to Create a Component In React

### What is a component? 

- A component is a piece of the UI that is reusable and independent from other parts


### Component Anatomy:

- Import Statements
- Component Definition
- Return Statement
- JS Elements
- Default


## Defintions: 
### Import Statements: 
- These are the dependencies and user defined components. If we want to use these we must use imports to bring them into scope
- At a min we most likely we need to import React and ReactDOM
- The reactDOM is imported because React does not have a DOM by default 



## Component Def: 
- Can use Arrow notation to define a specific component, here the component and the funciton are interlinked. When you call a function it brings the code from function into scope. 
- The arrow syntax helps clean up the code
- if you use paraenthiss you mush use the explict return 
- the arrow syntax is so you can have an implicit return 
- 


## Return and best practices: 
- Only needed if you uses curly braces and have a larger defined component 
- Smaller componentes can use the simple implicit return 
- The return statement is the description or our defined code that defines what the specific DOM should look like.

## JS Element: 
- HTML, CSS, Javascript combination

## Default Export: 
- The default method/component that is called when another component exports this component.
- It is the primary function or component that will be made available for import in other parts of the application. 


## Example:

```javascript
improt react from "react";

const App = () => {

    return 
        (
           <p> Javascript Element </p> 
        );

} 

export default App; 
```


### JSX Element: 
- JSX is a syntax extension that allows you to write elements that look like HTML within your JavaScript code.

## Making Components Extendable and Reusable:

When building components, designing them to be extendable and reusable not only saves time but also helps maintain consistency across a project. Extendable components are flexible and allow for future growth or changes in requirements without the need to rewrite them.

### Principles of Extendability:

- **Props**: Props are properties that can be passed to components, allowing them to behave differently based on provided values or functions.
- **Composition**: Leveraging the compositional nature of React, components can accept children, making them more versatile and nestable within other components.
- **Higher-Order Components (HOCs)**: An advanced technique for reusing component logic, HOCs are functions that take a component and return a new component with extended functionalities.
