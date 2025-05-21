/* eslint-disable react/no-unescaped-entities */
const Week9 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 3rd March — Node.js Introduction & npm Basics
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What is Node.js?</strong>
              <p className="text-gray-300">
                Node.js is a runtime environment that lets you execute
                JavaScript on the server-side, built on Chrome's V8 engine,
                ideal for building scalable network applications.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Why Use Node.js?</strong>
              <p className="text-gray-300">
                Node.js offers non-blocking I/O, event-driven architecture, and
                fast performance, making it a preferred choice for real-time
                applications like chats and streaming services.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Node.js vs Browser JavaScript
              </strong>
              <p className="text-gray-300">
                Unlike browser JavaScript, Node.js can access the file system,
                network, and OS-level APIs, which makes it more powerful but
                also restricted to server-side tasks.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Global vs Local Installation
              </strong>
              <p className="text-gray-300">
                Global packages are available across your system, while local
                packages are project-specific. Use global for tools and local
                for dependencies your project requires to run.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">npx and Running Packages</strong>
              <p className="text-gray-300">
                npx is a package runner tool that executes Node.js packages
                without globally installing them, useful for testing packages or
                running CLI tools temporarily.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Updating and Managing Packages
              </strong>
              <p className="text-gray-300">
                Use commands like <code>npm update</code> or specify versions in{" "}
                <code>package.json</code> to manage package versions. Keeping
                dependencies up-to-date is vital for security and stability.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 4th March — npm Scripts, Workspaces, and Git Intro
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Using Installed Packages</strong>
              <p className="text-gray-300">
                Once packages are installed, you can import and use them in your
                code. Common packages include <code>express</code> for servers
                and <code>dotenv</code> for environment configuration.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Running npm Scripts</strong>
              <p className="text-gray-300">
                Define custom commands in <code>scripts</code> section of{" "}
                <code>package.json</code>. These scripts help automate
                repetitive tasks like testing, linting, or running dev servers
                easily.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">npm Workspaces</strong>
              <p className="text-gray-300">
                Workspaces enable managing multiple packages in a single
                repository. It's ideal for monorepos, allowing shared
                dependencies and better project organization.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Introduction to Git</strong>
              <p className="text-gray-300">
                Git is a version control system that tracks code changes and
                collaboration. It helps manage history, create branches, and
                resolve merge conflicts efficiently in teams.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                nodemon for Live Reloading
              </strong>
              <p className="text-gray-300">
                Nodemon is a utility that monitors file changes and
                automatically restarts your Node.js app, speeding up development
                by eliminating manual restarts after every edit.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Creating and Publishing Packages
              </strong>
              <p className="text-gray-300">
                You can create custom packages and publish them to npm using{" "}
                <code>npm publish</code>. This allows code sharing and reuse
                across different projects or by other developers.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 5th March — Error Handling in Node.js
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Uncaught Exceptions</strong>
              <p className="text-gray-300">
                Uncaught exceptions can crash your Node.js app. Use global error
                handlers or wrap risky code blocks to prevent entire process
                failures.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Types of Errors</strong>
              <p className="text-gray-300">
                Common errors include syntax errors, runtime errors, and logic
                errors. Proper handling ensures robustness and better user
                experience by catching issues before they affect functionality.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Handling Async Errors</strong>
              <p className="text-gray-300">
                For asynchronous operations, errors must be caught using{" "}
                <code>try/catch</code> inside async functions or handled in
                callbacks to avoid unhandled rejections.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Call Stack and Stack Trace
              </strong>
              <p className="text-gray-300">
                Understanding the call stack helps trace where an error
                originated. Stack traces show the exact sequence of function
                calls leading to the error, aiding debugging.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Using Debugger</strong>
              <p className="text-gray-300">
                Node.js offers debugging via Chrome DevTools or VS Code. Placing{" "}
                <code>debugger</code> in your code allows pausing execution and
                examining variables to troubleshoot issues.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Graceful Error Handling</strong>
              <p className="text-gray-300">
                Implement proper error-handling patterns like middleware in
                Express or domain objects to isolate failures and maintain app
                stability under unexpected conditions.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 6th March — Asynchronous Programming in Node.js — Part
            1
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Event Loop</strong>
              <p className="text-gray-300">
                The event loop is the core of Node.js's non-blocking
                architecture. It allows handling many operations concurrently by
                deferring callbacks to the event queue for later execution.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Event Emitter</strong>
              <p className="text-gray-300">
                Node.js has an <code>EventEmitter</code> class that enables
                handling custom events. This design pattern helps build
                decoupled components that communicate via emitted and listened
                events.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Callbacks</strong>
              <p className="text-gray-300">
                Callbacks are functions passed as arguments to be executed
                later. They are widely used in asynchronous tasks but can lead
                to nested structures, known as callback hell.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">setTimeout</strong>
              <p className="text-gray-300">
                setTimeout schedules a function to run after a specified delay.
                It's useful for time-based operations, such as deferring
                execution or simulating asynchronous behavior during
                development.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">setInterval</strong>
              <p className="text-gray-300">
                setInterval repeatedly runs a function at specified intervals.
                It's ideal for polling or periodic tasks, but requires clearing
                intervals to avoid performance issues.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Managing Asynchronous Tasks
              </strong>
              <p className="text-gray-300">
                Managing async tasks requires structured approaches. Use
                patterns like chaining, async libraries, or move toward promises
                and async/await for cleaner and more maintainable codebases.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 7th March — Asynchronous Programming in Node.js — Part 2
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Promises</strong>
              <p className="text-gray-300">
                Promises represent future values of async operations. They offer
                methods like <code>.then()</code> and <code>.catch()</code> for
                chaining results and handling errors without nesting.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Async/Await</strong>
              <p className="text-gray-300">
                Async/await syntax simplifies working with promises. It allows
                writing asynchronous code that looks synchronous, improving
                readability and reducing nested chains or error-prone callbacks.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">setImmediate</strong>
              <p className="text-gray-300">
                setImmediate queues a function to run after the current poll
                phase completes. It's faster than setTimeout(0) and ensures
                immediate execution once pending I/O callbacks finish.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Handling Promise Errors</strong>
              <p className="text-gray-300">
                Handle errors using <code>.catch()</code> or try/catch in async
                functions. This avoids unhandled promise rejections and ensures
                app stability even when async operations fail.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Async Patterns and Best Practices
              </strong>
              <p className="text-gray-300">
                Use async functions with await for clarity, avoid deeply nested
                callbacks, and prefer promise-based libraries to keep code
                modular, readable, and easier to debug or test.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Error First Callbacks</strong>
              <p className="text-gray-300">
                Traditional Node.js callbacks follow an error-first pattern.
                Always check the first parameter for errors and handle them
                appropriately to prevent crashes or inconsistent behavior.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week9;
