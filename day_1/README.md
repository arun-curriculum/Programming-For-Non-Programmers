# Programming for Non Programmers

## Share Out

- What is programming and why should I care?
- Should I learn programming or should I hire someone else to do it?
- Come up with two ideas and discuss how technology could make them a reality.

## Typical Web Development Cycle

1. User experience design
2. Information architecture
3. Visual design
4. Development

## Introduction to UX Design

- Two well-known tools:
	- Omnigraffle
	- Balsamiq
- User experience design is all about enhancing user satisfaction while interacting with products.
- It is heavy on research and flow design.

## UX Design Lab

- Take a few minutes to research an online business of your choice.
- Write down at least 5 examples of good UX design, and at least 2 examples of bad UX design / improvements for the product.
- Present to the class your findings.

## Introduction to HTML and CSS

##### HTML and CSS

- HTML and CSS work together to create the front end structure and design.
- Front end frameworks and the grid system.

##### Tags

- Tags allow you to set up your document's structure.
- Attributes allow you to add additional information to a tag.
- Attributes also allow you to bridge the gap between HTML and CSS.

##### Div

- Divs are like empty rectangles.
- They help organize content on the page.

```html
<div class="margin-top-20 logo">
	My Text Inside
</div>
```

##### Input

- Inputs allow users to enter data to be saved to a database.
- They come in different forms to facilitate the specific data entry type.

```html
<input type="text" class="form-control" />
```

##### Select list

- Select lists allow users to select options from a dropdown menu.

```html
<select>
	<option value="USA">United States</option>
</select>
```

##### Button

- Buttons are HTML elements that give users the ability to submit the data entered as well as transition to new pages.

```html
<button>My Button</button>
```

## CSS Stylesheets

- CSS stylesheets provide the look and feel of the website.
- There are two main ways of referencing CSS in the HTML so you can apply styles - classes and IDs.
- Consider this HTML:

```html
<div class="header">
	My Header
</div>
```

- Here we have a class attribute that can serve as the bridge between the HTML and CSS code.
- Here is how we would reference this class in the stylesheet:

```css
.header {
	font-size:20px;
	background-color:blue;
}
```

- We could also use IDs to reference the style:

HTML

```html
<div id="header">
	My Header
</div>
```

CSS

```css
#header {
	font-size:20px;
	background-color:blue;
}
```

> **The main difference between classes and IDs is that classes can be used multiple times in the HTML document whereas IDs should only be used once.**

##### Linking CSS with HTML

- In order to run external CSS you need to link it to the HTML. This usually goes in the `head` tag:

```html
<link rel="stylesheet" href="css/mystyle.css" />
```

##### Linking JS with HTML

- JavaScript enables interaction with the page.
- In order to run external JS you need to link it to the HTML. This usually goes before the closing `body` tag:

```html
<script src="js/app.js"></script>
```

## HTML Markup Lab

- Please refer to [the project linked here.](https://github.com/arun-projects/HTML-Form)

## Introduction to JavaScript

JavaScript helps with page interactions such as animations and dynamic loading of content. Let's take a look at a few aspects of the language.

##### Strings

Strings are simply pieces of text denoted by quotation marks. An example may be:

```javascript
"Hello World!"
```

##### Integers

Integers are simply whole numbers without any decimals. An example may be `45` or `2`.

##### Variables

Variables allow us to represent information by a specific set of characters. Therefore we do not have to keep typing the same code over and over:

```javascript
var saying = "Hello World!";

alert(saying);
```

Variables can be overwritten by referring to them without the `var` keyword:

```javascript
var saying = "Hello World!";

saying = "Hey Arun!";

alert(saying); //Gives us "Hey Arun!"
```

##### Arrays

Arrays allow us to be able to store a set of data in one place. Let's say we want to look up information about a particular user. An array of a user's information may look like this:

```javascript
var arun = ["Arun", "Instructor", 27, "San Francisco"];
```

We can access pieces of this information through the index value:

- First Name: `arun[0]`
- Age: `arun[2]`

##### Functions

Functions allow us to write code once and call it a number of times throughout our program. This helps us keep code maintainable and also helps to make it dynamic.

```javascript
function sayHello() {
	alert("Hello World!");
}
```

We can also pass in data to perform a dynamic operation:

```javascript
function addTwo(num1, num2) {
	alert(num1 + num2);
}
```

When using JavaScript to perform operations, you may need to `return` the data outside of the function. You can do this like so:

```javascript
function addTwo(num1, num2) {
	return num1 + num2;
}
```

To call a function after it is written, you refer to it by its name:

```javascript
sayHello();

addTwo(1, 2);
```

##### Loops

Loops allow you to perform an operation a set number of times. This is very widely used in most programming languages. A simple `for` loop can be written like this:

```javascript
for (var i = 0; i < 20; i++) {
	console.log(i);
}
```

## JavaScript Game Lab

- [TicTacToe](https://github.com/arun-projects/TicTacToe)
- [Memory Game](https://github.com/arun-projects/Memory)