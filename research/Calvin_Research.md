SQL Research

Learning SQL will be critical in the development of a database used for user login to our calendar app.

I expect to learn how to set up a simple SQL database that can store user login information such as Username and Password. This will allow us to create a login module which will later be used to load a user's calendar information.

I will be writing the login class, as well as the database to store user information. I will begin by creating a simple database that I will expand on in order to improve user experience.

This research is represented by my first task (researching) in Jira, as well as my second task (constructing a basic database).

^^^^^^^^^^^^^^^^NOT APPLICABLE ANYMORE^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

1. ReactJS and JavaScript research
2. I am conducting research on ReactJs and Javascript because I have never used these technologies before and I need to build a baseline understanding of them before I can effectively work on this project.
3. I expect to learn the basic syntax and functionalities of JavaScript and ReactJS. All of the API calls and formatting will be dependent on this research as I am the one responsible for writing that code.
4. I will be writing the component responsible for calling the API as well as code that formats the data that has been aquired into a standard format readable by the rest of the trivia app.
5. All of the tasks that I will complete are reliant on this research, including SCRUM-53, SCRUM-55, SCRUM-59, and SCRUM-61.

Research on ReactJS
ReactJS is a javascript library used to build UI

JSX is a javascript extension syntax to write html and javascript together
JSX is later compiled and translated into browser understandaable Javascript

Component - independent and reusable piece of a UI
components are composed together to build an entire UI
Root component is the component where the layout structure of the UI is defined.
All other components are child nodes of root
a react app is a tree of components

Component definition
the name of the component must be CAPITALIZED and correspond to the file name
const App = () => {
return (
<p>This is first JSX Element!</p>
<p>This is another JSX Element</p>
);
};

    export default App;

    this file would be named App.jsx

    inside of the component, there needs to be a return statement
    the return statement returns a description of what the DOM should look like, and react updates the real DOM

    Export default exports a single method or component from a module, allowing it to be imported by another part of the application

    curly braces
    used to add javascript logic or reference a dynamic property inside html
    only used in 2 ways inside JSX
    1. as text directly inside a JSX tag
        <h1>{name}'s To Do List</ h1>
    2. as attributes immediately following the = sign
        <img src ={imgURL} />

    props
    react components use props to communicate with eachother
    every parent component can pass information to its child components by giving them props
    you can pass any javascript value through props, including strings, numbers, objects, arrays, and functions
    the syntax for passing props is similar to passing attributes to HTML elements
        <ExampleA city={"NYC"} temp={75} />
        <ExampleA city={"LA"} temp={84} />

    you can read these props by passing prop as a single parameter to a component
    to access the value, use dot notation
    const ExampleA = (props) => {
        return (
            <p>Welcome to {props.city}</p>
            <p>The temperature is {props.temp}</p>
        );
    };


    div is the default container to specify heirarchy

OPENAI_API_KEY=‘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’
