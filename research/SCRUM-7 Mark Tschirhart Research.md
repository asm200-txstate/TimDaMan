# Pre-statement (before completion)

### Title or name of research/training.
- Modular Panel Layout Research

---

### Why you are doing it.
- To familiarize myself with tools for planning frontend solutions.

---

### What you expect to learn/do. Be specific by identifying what code/modules will be affected by the research/training.
- How to use tools like Figma and Hoppscotch to sketch wireframes of our application UI.
- Design principles for easier readability with accessibility in mind.
- Gather quick guides to CSS/HTML formatting for future reference.

---

### What do you expect to do with it, including any code you expect to write. Be specific. For example, "Writing the UI" is not sufficient. "Writing the Login class" is.
- Styling a User Interface template to bring to the rest of the team to decide which direction to go.
- Export the template to html files for use in the project.

---

### What task(s) in Jira represent the work you will do that was/is dependent on the research/training.
- SCRUM-7 Research what "modular panel layout" means and find examples online.
- SCRUM-19 Sketch a design of how the modular panels should look interact by hand and then by using a tool such as Figma.

---
# Post Statement (after completion)

### Modular Panel Layout
- The panel layout design I want to create is a multi-panel layout. This is a layout with one large frame in which panel elements can be arranged.
- There are a few ways of doing accomplishing this:
	- Creating fixed windows that elements can be moved in and out of. An example of this is how GIMP uses docked modules that are locked into either windows or sections of a window. These act like tabs on a browser that can be switched between.
		- Pros: easy to use.
		- Cons: limited flexibility in overarching layout.
	- Allowing a window to be docked to any of the four sides of an area, then allowing the new space to also be split by anotheer module. VS2019 employs this method, where in theory you could stack as many windows on one side as you want.
		- Pros: quick to use.
		- Cons: sometimes difficult to arrange multiple elements properly.
	- Having elements that have a fixed shape, that can be arranged freely or side-by-side.
		- Pros: flexibility of layouts and ease of use.
		- Cons: difficult to implement.

### Conclusion going forward
- Starting out, I'd like to make a simplified layout to get things functional
- Going forward, I want to strive a layout similar to how Blender accomplishes modularity.

### Examples of Layouts
GIMP's docker layout:<br>
<img src="https://bitbucket.org/cs3398f23borgs/calendar_app/raw/3b364b85913594b694ea178829ca3e993232fef7/research/assets/GIMP%20Layout.png" alt="GIMP Layout"><br>

Visual Studio 2019's modular layout:<br>
<img src="https://bitbucket.org/cs3398f23borgs/calendar_app/raw/3b364b85913594b694ea178829ca3e993232fef7/research/assets/VS2019%20Layout%201.png" alt="VS2019 Layout 1">
<img src="https://bitbucket.org/cs3398f23borgs/calendar_app/raw/3b364b85913594b694ea178829ca3e993232fef7/research/assets/VS2019%20Layout%202.png" alt="VS2019 Layout 2">
<img src="https://bitbucket.org/cs3398f23borgs/calendar_app/raw/3b364b85913594b694ea178829ca3e993232fef7/research/assets/VS2019%20Layout%203.png" alt="VS2019 Layout 3"><br>

Blender's layout:<br>
<img src="https://bitbucket.org/cs3398f23borgs/calendar_app/raw/fed7d1ea15a381f43c22fb06499e1ba5a5c2d764/research/assets/Blender%20Layout.png" alt="Blender Layout">