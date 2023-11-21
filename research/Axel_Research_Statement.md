## REACT-Calendar Interaction Overview 

## Why you are doing it?

I'll be using REACT as a front-end to interact with the project website. Understanding REACT will first be needed. Knowning the 
methods provided by the pre-defined package and how they can be incorporated will be needed. 

## What you expect to learn/do? Be specific by identifying what code/modules will be affected by the research/training.

First understand the basic components to creating a REACT application and how it's connected to HTML in developing a web application. 

Next, I'll find a REACT-Calendar Package/Library that will do the following: 

* Display a Calendar 
* Add/Delete/Modify Events 

The focus for this step will be to understand the pre-defined code in the package and see how object-oriented principles can be applied. 

## What do you expect to do with it, including any code you expect to write?  Be specific. For example, "Writing the UI" is not sufficient. "Writing the Login class" is.

* Create an instance of a calendar to be displayed to the user in REACT. 
* Provide options for user to add/modify/delete events to their calendar. 

## What task(s) in Jira represent the work you will do that was/is dependent on the research/training?

* Investigate different calendar libraries or plugins suitable for beginners
* Choose one library/plugin and implement it in a basic HTML page.

----------------------------------------------------------------------------------------------------------------------------------

# React-Big-Calendar 

[Big-React-Calendar](https://www.npmjs.com/package/react-big-calendar) is a calendar package that builds on [React-Calendar](https://www.npmjs.com/package/react-calendar) to add more to the user interaction. 

These improvements include:

* Adding events to the calendar 
* Specify the start/end dates and time (hour and minutes).   

Events that will be added to the calendar and are already inside the calendar are managed via `useState` hooks.  

To access the code, enter the following command: `npm i react-big-calendar`

For more details, refer to the big-calendar on how methods are supported. 

# DatePicker

[DatePicker](https://www.npmjs.com/package/react-datepicker) is a component that allows the user to select a date by having a mini-dropdown calendar available to select a date. For a simple demo on how DatePicker is used, [click here](https://www.npmjs.com/package/react-datepicker) to interact with a calendar. 

This package will be used in having a user select a start and end date to create an event in a calendar. Time (e.g. hours and minutes) are not provided here (based on documentation). That's all managed by using `useState` hooks. 

To access the code, enter the following command: `npm i react-datepicker`

For more details, refer to the big-calendar on how methods are supported. 

# useState Hooks

`useState` hook statements are used in managing an event that will be added to the calendar in addition to the events that already exist inside the calendar. 

Below is a sample code: 

`const [newEvent, setNewEvent] = useState({...})`

`newEvent` is a state variable that's used to keep track of information as the data changes inside a textbox, for example. Note that `null` or information inside brackets (`{}`) can be sent as a/an argument(s) to your state function. The contents inside `{}` can have any variable with assigned values. Here's a demonstration:

`useState({title : "", day : "", month : ""})` 

where title, day, and month are variables that are set to empy strings. 

`setNewEvent` is a function that's used to update the contents of the state variable `newEvent`.

# Further Research 

Deleting and modifying events are not provided by the react-big-calendar, so more research is needed to understand how these operations can be performed.  