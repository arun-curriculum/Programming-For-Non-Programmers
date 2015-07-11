#Programming for Non Programmers

##Installation
- Install [Node JS](http://nodejs.org/)
- Install [Nodemon](https://github.com/remy/nodemon)
- Download this repository for all class files.

##Share Out
- What is programming and why should I care?
- Should I learn programming or should I hire someone else to do it?
- Come up with two ideas and discuss how technology could make them a reality.

##Typical Web Development Cycle
1. User experience design
2. Information architecture
3. Visual design
4. Development

##Introduction to UX Design
- Two well-known tools:
	- Omnigraffle
	- Balsamiq
- User experience design is all about enhancing user satisfaction while interacting with products.
- It is heavy on research and flow design.

##UX Design Lab
- Take a few minutes to research an online business of your choice.
- Write down at least 5 examples of good UX design, and at least 2 examples of bad UX design / improvements for the product.
- Present to the class your findings.

##Introduction to HTML and CSS

#####HTML and CSS
- HTML and CSS work together to create the front end structure and design.
- Front end frameworks and the grid system.

#####Tags:
- Tags allow you to set up your document's structure.
- Attributes allow you to add additional information to a tag.
- Attributes also allow you to bridge the gap between HTML and CSS.

#####Div:
- Divs are like empty rectangles.
- They help organize content on the page.

```html
<div class="margin-top-20 logo">
	My Text Inside
</div>
```

#####Input:
- Inputs allow users to enter data to be saved to a database.
- They come in different forms to facilitate the specific data entry type.

```html
<input type="text" class="form-control" />
```

#####Select list:
- Select lists allow users to select options from a dropdown menu.

```html
<select>
	<option value="USA">United States</option>
</select>
```

#####Button:
- Buttons are HTML elements that give users the ability to submit the data entered as well as transition to new pages.

```html
<button>My Button</button>
```

##CSS Stylesheets
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

#####Linking CSS with HTML
- In order to run external CSS you need to link it to the HTML. This usually goes in the `head` tag:

```html
<link rel="stylesheet" href="css/mystyle.css" />
```

#####Linking JS with HTML
- JavaScript enables interaction with the page.
- In order to run external JS you need to link it to the HTML. This usually goes before the closing `body` tag:

```html
<script src="js/app.js"></script>
```

##HTML Markup Lab
- Open the `html_form` folder and open `index.html`.
- For each comment denoted by `<!-- -->` replace the comment text with the correct HTML as per the instruction to create the form.
- Alter the CSS file to use a Google Fonts font. You will need to use the `font-family` CSS property.
- Bonus: Use CSS to change the background color of the page. Experiment with using images as backgrounds as well.
- Double Bonus: Review the CSS `transition` property documentation and try to create a small animation anywhere on the form. An example may be to highlight a border around a form field when it is clicked.

##Introduction to JavaScript

JavaScript helps with page interactions such as animations and dynamic loading of content. Let's take a look at a few aspects of the language.

#####Strings

Strings are simply pieces of text denoted by quotation marks. An example may be:

```javascript
"Hello World!"
```

#####Integers

Integers are simply whole numbers without any decimals. An example may be `45` or `2`.

#####Variables

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

#####Arrays

Arrays allow us to be able to store a set of data in one place. Let's say we want to look up information about a particular user. An array of a user's information may look like this:

```javascript
var arun = ["Arun", "Instructor", 27, "San Francisco"];
```

We can access pieces of this information through the index value:

- First Name: `arun[0]`
- Age: `arun[2]`

#####Functions

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

#####Loops

Loops allow you to perform an operation a set number of times. This is very widely used in most programming languages. A simple `for` loop can be written like this:

```javascript
for (var i = 0; i < 20; i++) {
	console.log(i);
}
```

##JavaScript Game Lab
- [TicTacToe](https://github.com/arsood/TicTacToe)
- [Memory Game](https://github.com/arsood/Memory)

##Introduction to Back End Development

#####Introduction
- Why is a back end language needed?
- How do back end languages interact with the front end?
- Back end language examples:
	- Ruby on Rails
	- PHP
	- Python
	- NodeJS

#####Databases
- Difference between SQL and NoSQL databases.
	- MySQL
	- PostgresSQL
	- MongoDB
	- Redis

##Architecture Design Lab

Let's look at some popular sites and determine what technologies could be used. Think about the interaction between backend and frontend and how they fit together.

Your answer doesn't have to be the "right" one (the technology they actually use), but we just want you to demonstrate you understand how each piece fits together. You can choose your own site to analyze, but here are some examples:
- Twitter
- Facebook
- Instagram
- Medium

##Introduction to Algorithms
- Algorithms are step-by-step procedures for various calculations.
- They are generally used for data processing and automated reasoning.
- Algorithms are used in programming to perform calculations useful to the application.
- Examples of algorithms:
	- Search for values in a database by location.
	- Find the shortest path between two points.
	- Determine the most popular songs for a given demographic.
	- Suggest friends that you may know based on certain criteria.

##Algorithm Lab

Problem: Given an array list of letters and/or numbers, how can we find out where a certain value is located?

Sample array:

```javascript
[1, 44, 23, 5, "a", "b", "n", 87, 7]
```

How can we find which place "n" is located?

Bonus: Solve the algorithm with a JavaScript function. You will have to look up [if-else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) to accomplish this.

##NodeJS
- We will be using NodeJS to understand how the backend interacts with the frontend.
- NodeJS enables us to use JavaScript on the server-side.

##JavaScript Runtime
- Node operates on the V8 Google Chrome JavaScript runtime.
- This runtime is what is responsible for interpreting the JavaScript and mapping it over to machine commands.
- Commands are executed through an architecture known as the "call stack." Currently-processing requests are part of the call stack, and come from the process queue.

##What is Node?
- Node JS is an interface that allows you to write server-side code in JavaScript.
- This interface provides the ability to handle requests and issue responses.
- It is asynchronous, and as a result, can be written in a way that will not block the call stack.
- Node is also a server that will allow your code to be accessible to the public and be able to issue responses for certain requests.

##Chirp! Social Network
- We will be learning some basic node in the context of a small Twitter clone called Chirp!
- You can find the starter application [here](chirp_social_network_starter_app/).

##Overview of Mobile App Development
- Overview of iOS platform and XCode
- Objective C
- Swift
- Overview of Android platform and ADT
- Java
- Hybrid apps with jQuery Mobile, Phonegap, and Ionic.
- API call structure

##Introduction to Version Control Systems
- [Git](http://git-scm.com/) and [GitHub](https://github.com/)
- [SVN](https://subversion.apache.org/)
- [Mercurial](http://mercurial.selenic.com/)

##Cloud Platforms and Deployment Infrastructure
- [Amazon Web Services (AWS)](http://aws.amazon.com/)
- [Rackspace](http://www.rackspace.com/)

##Design Your Own Project Lab
- In this lab you will have the chance to practice your conceptual skills to virtually create the next big startup.
- Your task is to come up with a great idea in groups and then discuss how it can be implemented with the technologies we have discussed.
- Make sure to:
	- Discuss idea testing possibilities.
	- Design simple UX.
	- List all technologies that you will use.
	- Create simple goals for development and deployment.