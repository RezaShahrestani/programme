# Intro to Backend, Week 1

For almost any web application, it is essential to have a backend. The backend is a place where we, the developers, can store our data, communicate with users and let the users communicate with us, do smart things like calculations, data processing etc.

There are many languages for this. We might've heard of Java, C, C++, Go, Python, Ruby, PHP and the list goes on.
There are two reasons why we at HYF choose Node.JS over others:

1. You already know JavaScript, so it's easier to get started than other languages
2. Node.js is great for making web APIs because it is asynchronous by nature and thus allows for high input/output. By this we mean that it allows many users to make very light requests at the same time.

## Learning goals
- [ ] [Introduction to node js](#What-is-Nodejs)
  - [ ] [What is node and why node?](https://www.youtube.com/watch?v=pU9Q6oiQNd0)
  - [ ] V8 vs the browser that runs js?
  - [ ] What can you build with nodejs?
    - Utilities
    - Web server
    - Much more
- [ ] Simple webserver with node js
  - [ ] npm init
  - [ ] Tests
  - [ ] Modules
    - [ ] Creating and importing using `export` and `import` in modern ES6 syntax
    - [ ] [Live coding](#created-module)
    - [ ] Npm modules
      - npmjs.org
      - `npm install -s express`
      - node_modules
      - package.json
    - [.gitignore](https://github.com/HackYourFuture-CPH/teacher-live-coding/blob/main/.gitignore)
  - [ ] Nodemon
  - [ ] Simple `GET` requests (using Express)
- [ ] Sending requests
  - [ ] What is Postman
  - [ ] Making requests to APIs
- [ ] What is CRUD (Create, Read, Update, Delete)
  - [ ] CRUD vs REST
- [ ] Database interaction
  - Connecting to a database using JavaScript
  - Executing queries (i.e. CRUD)

## What is Node.js?
Node.js is software that allows you to use JavaScript to write the application part of the backend. The application is written in different .js files, and are then read and executed using the node command in the Command Line. For example, node script.js.

Read the following article and code along: Introduction into Node.js

Software builds on other software. Node.js is powerful because it allows us to use software others have written to help build our own unique applications. In Node.js these are called modules/packages/dependencies (can be used interchangeably). An easy way to get access to these is by using the Node Package Manager, also known as npm.

Read the following article and code along: A Beginner’s Guide to npm — the Node Package Manager

It is also powerful because we can use the language we already know, JavaScript, to write backend applications. Watch the following video and code along: Node.js Crash Course

## Code inspiration

### Building a simple http webserver

Go to the `teacher-live-coding` [project repository](https://github.com/HackYourFuture-CPH/teacher-live-coding), run using `nodemon ./src/backend/simple-webserver.js`. Try and implement this functionality from the bottom while explaining.

# Exercises

1. [Server](./exercises/01-server.md): Setup project and create a server with Express
1. [Database](./exercises/02-database.md): Connect to your MySQL database from Node.js and Express
1. [User routes](./exercises/03-user-routes.md): Declare new routes that interact with a `users` table