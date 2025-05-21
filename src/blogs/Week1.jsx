/* eslint-disable react/no-unescaped-entities */
const Week1 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 6th January — Introduction to Web Development
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What is Web Development?</strong>
              <p className="text-gray-300">
                Web development is the process of creating websites and web apps
                for the internet. It involves coding, design, and deploying
                interactive, functional digital experiences.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Difference between Frontend, Backend, and Full-Stack
              </strong>
              <p className="text-gray-300">
                Frontend handles the user interface, backend manages data and
                server-side logic, and full-stack combines both to create
                complete applications from end to end.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Understanding the Client-Server Model
              </strong>
              <p className="text-gray-300">
                This model defines how clients (browsers) communicate with
                servers to request and exchange data, forming the basis of
                internet communication protocols like HTTP.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Web Development Frameworks Overview
              </strong>
              <p className="text-gray-300">
                Frameworks like React, Angular, and Django offer reusable
                structures and libraries to simplify building complex
                applications with efficiency and scalability.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Common Tools: Browsers, Editors (VS Code), and Dev Tools
              </strong>
              <p className="text-gray-300">
                Web developers use tools like Chrome DevTools and VS Code to
                write, debug, and test code efficiently, boosting productivity
                and debugging capabilities.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 7th January — Frontend Fundamentals
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                HTML Basics: Elements, Tags, Attributes
              </strong>
              <p className="text-gray-300">
                HTML is the foundation of the web, consisting of elements and
                tags used to structure content like headings, paragraphs,
                images, and links.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                CSS Fundamentals: Styling, Selectors, Layout
              </strong>
              <p className="text-gray-300">
                CSS adds style to HTML, allowing control over colors, fonts,
                layouts, and responsiveness using rules and selectors targeting
                HTML elements.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                JavaScript Introduction: Syntax, Variables, Functions
              </strong>
              <p className="text-gray-300">
                JavaScript adds interactivity to web pages. Learn how to declare
                variables, use functions, and control logic with conditions and
                loops.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">DOM Manipulation Basics</strong>
              <p className="text-gray-300">
                The DOM represents the page structure. JavaScript can
                dynamically update content and styles by targeting and modifying
                DOM elements.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Introduction to Responsive Design
              </strong>
              <p className="text-gray-300">
                Responsive design ensures websites look great on all screen
                sizes using flexible layouts, media queries, and fluid grids.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 8th January — Backend Basics
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                What is a Backend? Role in Web Apps
              </strong>
              <p className="text-gray-300">
                The backend powers the logic, authentication, and database
                operations, making it possible for the frontend to request and
                display dynamic content.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Node.js Introduction</strong>
              <p className="text-gray-300">
                Node.js is a runtime for executing JavaScript on the server
                side. It's lightweight, fast, and widely used for building
                scalable backend services.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Using Express.js to Build Simple APIs
              </strong>
              <p className="text-gray-300">
                Express.js simplifies server-side routing and HTTP handling,
                allowing you to quickly set up endpoints for your application
                logic.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handling HTTP Requests and Responses
              </strong>
              <p className="text-gray-300">
                Learn how servers receive requests, process them, and send back
                responses—often containing data, HTML, or error messages.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">RESTful APIs Overview</strong>
              <p className="text-gray-300">
                REST is a set of principles for designing APIs. It uses standard
                HTTP methods like GET, POST, PUT, and DELETE to interact with
                data.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Environment Setup and Running a Local Server
              </strong>
              <p className="text-gray-300">
                Setting up Node.js and Express locally allows you to build and
                test applications directly on your computer before deploying.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 9th January — Databases & Data Handling
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Introduction to Databases
              </strong>
              <p className="text-gray-300">
                Databases store, retrieve, and manage data efficiently. They are
                crucial for saving user inputs, posts, orders, and other dynamic
                content.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">SQL vs NoSQL</strong>
              <p className="text-gray-300">
                SQL databases are structured and relational, while NoSQL
                databases like MongoDB are flexible and document-based, ideal
                for modern applications.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Basics of MongoDB</strong>
              <p className="text-gray-300">
                MongoDB is a NoSQL database that stores data in flexible,
                JSON-like documents. It&apos;s schema-less and great for rapid
                development.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Connecting MongoDB with Node.js
              </strong>
              <p className="text-gray-300">
                Use MongoDB drivers or Mongoose to connect your Node.js app to a
                database and start reading or writing data programmatically.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Performing CRUD Operations
              </strong>
              <p className="text-gray-300">
                CRUD stands for Create, Read, Update, and Delete—core operations
                used in any application to manage data effectively.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Intro to Mongoose (ODM for MongoDB)
              </strong>
              <p className="text-gray-300">
                Mongoose is a popular ODM for MongoDB, helping you define data
                schemas, enforce validation, and simplify database interactions
                in Node.js apps.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 10th January — Git, GitHub & Project Workflow
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What is Version Control?</strong>
              <p className="text-gray-300">
                Version control systems track code changes, enabling
                collaboration, rollback, and efficient team development without
                losing work history.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Introduction to Git: init, clone, add, commit, push
              </strong>
              <p className="text-gray-300">
                Git allows you to initialize repositories, stage changes, commit
                updates, and push them to remote repositories like GitHub.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Understanding Branches and Merging
              </strong>
              <p className="text-gray-300">
                Branches let you experiment without breaking main code. Merging
                helps integrate changes smoothly into production-ready versions.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Using GitHub to Host and Collaborate
              </strong>
              <p className="text-gray-300">
                GitHub is a cloud-based Git platform for hosting code, managing
                pull requests, and collaborating on open source or team
                projects.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Git Best Practices and .gitignore
              </strong>
              <p className="text-gray-300">
                Follow best practices like writing clear commit messages,
                creating .gitignore files, and pushing only necessary code to
                repositories.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Basic Project Workflow with Git + GitHub
              </strong>
              <p className="text-gray-300">
                Learn how to fork, clone, work on branches, push changes, and
                create pull requests in a typical GitHub project cycle.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week1;
