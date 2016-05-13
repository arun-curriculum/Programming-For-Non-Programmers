# Programming for Non Programmers

## Installation
- Install [Node JS](http://nodejs.org/)
- Install command line tools: 

##### Mac:

```bash
xcode-select --install
```

##### Windows:

- Visit the [Windows Git installation page](https://git-scm.com/downloads).

## Setup

- Create an account on [Heroku.com](https://www.heroku.com/).
- Install the [Heroku toolbelt](https://toolbelt.heroku.com/).

## Introduction to Back End Development

##### Introduction
- Why is a back end language needed?
- How do back end languages interact with the front end?
- Back end language examples:
	- Ruby on Rails
	- PHP
	- Python
	- NodeJS

##### Databases
- Difference between SQL and NoSQL databases.
	- MySQL
	- PostgresSQL
	- MongoDB
	- Redis

## Architecture Design Lab

Let's look at some popular sites and determine what technologies could be used. Think about the interaction between backend and frontend and how they fit together.

Your answer doesn't have to be the "right" one (the technology they actually use), but we just want you to demonstrate you understand how each piece fits together. You can choose your own site to analyze, but here are some examples:
- Twitter
- Facebook
- Instagram
- Medium

## Introduction to Algorithms
- Algorithms are step-by-step procedures for various calculations.
- They are generally used for data processing and automated reasoning.
- Algorithms are used in programming to perform calculations useful to the application.
- Examples of algorithms:
	- Search for values in a database by location.
	- Find the shortest path between two points.
	- Determine the most popular songs for a given demographic.
	- Suggest friends that you may know based on certain criteria.

## Algorithm Lab

Problem: Given an array list of letters and/or numbers, how can we find out where a certain value is located?

Sample array:

```javascript
[1, 44, 23, 5, "a", "b", "n", 87, 7]
```

How can we find which place "n" is located?

Bonus: Solve the algorithm with a JavaScript function. You will have to look up [if-else statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/if...else) to accomplish this.

P.S. The JavaScript function [indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) is off-limits for this exercise!

## NodeJS
- We will be using NodeJS to understand how the backend interacts with the frontend.
- NodeJS enables us to use JavaScript on the server-side.

## JavaScript Runtime
- Node operates on the V8 Google Chrome JavaScript runtime.
- This runtime is what is responsible for interpreting the JavaScript and mapping it over to machine commands.
- Commands are executed through an architecture known as the "call stack." Currently-processing requests are part of the call stack, and come from the process queue.

## What is Node?
- Node JS is an interface that allows you to write server-side code in JavaScript.
- This interface provides the ability to handle requests and issue responses.
- It is asynchronous, and as a result, can be written in a way that will not block the call stack.
- Node is also a server that will allow your code to be accessible to the public and be able to issue responses for certain requests.

## Chirp! Social Network
- We will be learning some basic node in the context of a small Twitter clone called Chirp!
- Please refer to the project linked above.

## Introduction to Version Control Systems
- [Git](http://git-scm.com/) and [GitHub](https://github.com/)
- [SVN](https://subversion.apache.org/)
- [Mercurial](http://mercurial.selenic.com/)

## Cloud Platforms and Deployment Infrastructure
- [Amazon Web Services (AWS)](http://aws.amazon.com/)
- [Rackspace](http://www.rackspace.com/)
- [Heroku](https://www.heroku.com/)

## Chirp! Deployment

- We will be deploying your Chirp! application to Heroku using Git.
- Here are the steps we will be following:

##### Step 1: Add project to Git

```bash
git init

git add -A

git commit -m "Deploying site"
```

##### Step 2: Create a new Heroku project and rename it

```bash
heroku create

heroku apps:rename newname
```

##### Step 3: Add the Postgresql addon to Heroku

- Visit your Heroku dashboard and add the Postgresql addon.

##### Step 4: Deploy application to Heroku

```bash
git push heroku master
```

##### Step 5: Install software on Heroku

```bash
heroku run bash

npm install sequelize-cli -g
```

##### Step 6: Create chirp database on Heroku

```bash
sequelize db:migrate
```

## Overview of Mobile App Development
- Overview of iOS platform and XCode
- Objective C
- Swift
- Overview of Android platform and ADT
- Java
- Hybrid apps with jQuery Mobile, Phonegap, and Ionic.
- API call structure

## Design Your Own Project Lab
- In this lab you will have the chance to practice your conceptual skills to virtually create the next big startup.
- Your task is to come up with a great idea in groups and then discuss how it can be implemented with the technologies we have discussed.
- Make sure to:
	- Discuss idea testing possibilities.
	- Design simple UX.
	- List all technologies that you will use.
	- Create simple goals for development and deployment.