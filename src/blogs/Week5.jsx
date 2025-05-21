/* eslint-disable react/no-unescaped-entities */
const Week5 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 3rd February — Function Basics & Parameters
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Function Parameters</strong>
              <p className="text-gray-300">
                Function parameters allow us to pass input values to functions.
                They act as placeholders and are essential for making reusable
                and dynamic functions tailored to specific needs.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Default Parameters</strong>
              <p className="text-gray-300">
                Default parameters provide fallback values for function
                arguments when none are supplied. They help prevent errors and
                ensure consistent behavior in function execution.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Rest Parameters</strong>
              <p className="text-gray-300">
                Rest parameters collect all remaining arguments into an array.
                This is especially useful when working with functions that
                accept an unknown number of arguments.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Return Values</strong>
              <p className="text-gray-300">
                Functions can return values back to the caller. This allows
                results to be stored, reused, or passed into other functions for
                more complex operations.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 4th February — Arrow Functions & IIFEs
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Arrow Functions</strong>
              <p className="text-gray-300">
                Arrow functions provide a shorter syntax for writing functions.
                They are concise, especially for small tasks, and do not have
                their own <code>this</code> context.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Syntax Differences</strong>
              <p className="text-gray-300">
                Arrow functions differ from traditional functions in syntax and
                behavior. They lack the <code>arguments</code> object and cannot
                be used as constructors.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                IIFE — Immediately Invoked Function Expression
              </strong>
              <p className="text-gray-300">
                IIFEs run as soon as they are defined. They're wrapped in
                parentheses and executed instantly, making them useful for
                creating private scopes and avoiding variable collisions.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Use Cases for IIFEs</strong>
              <p className="text-gray-300">
                IIFEs are often used to encapsulate code and avoid polluting the
                global namespace. They're common in modules and configuration
                wrappers.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 5th February — Arguments and Execution Context
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Arguments Object</strong>
              <p className="text-gray-300">
                The <code>arguments</code> object holds all arguments passed to
                a function. It's array-like but not an actual array, and helps
                access passed data when parameter names aren't known.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Function Scope</strong>
              <p className="text-gray-300">
                Each function in JavaScript has its own scope. Variables
                declared inside a function cannot be accessed outside, ensuring
                modularity and preventing name conflicts.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Function Stack</strong>
              <p className="text-gray-300">
                The function stack represents the sequence of active function
                calls. Understanding the call stack helps in tracing function
                execution and identifying stack overflow errors.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Stack Traces in Errors</strong>
              <p className="text-gray-300">
                Stack traces show the path of function calls that led to an
                error. They are vital in debugging and identifying where things
                went wrong in the call hierarchy.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 6th February — Recursion, Lexical Scope & Closures
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Recursion</strong>
              <p className="text-gray-300">
                Recursion is when a function calls itself to solve a problem.
                It's especially useful for problems that can be broken into
                similar subproblems, like traversing trees or computing
                factorials.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Lexical Scoping</strong>
              <p className="text-gray-300">
                Lexical scope means a function can access variables from the
                scope in which it was defined. This provides a clear,
                predictable scope chain for variable resolution.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Closures</strong>
              <p className="text-gray-300">
                Closures are functions that remember the variables from their
                outer lexical scope even after that scope has closed. They're
                fundamental for creating private variables and callback
                functions.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Practical Use of Closures
              </strong>
              <p className="text-gray-300">
                Closures are used in event handlers, async code, and functional
                programming. They enable state preservation across calls and
                allow creation of more expressive and powerful APIs.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 7th February — Built-in Functions and Functional Design
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Common Built-in Functions
              </strong>
              <p className="text-gray-300">
                JavaScript provides many built-in functions such as{" "}
                <code>parseInt</code>, <code>isNaN</code>, and <code>eval</code>
                . These are available globally and simplify tasks like parsing
                and evaluating expressions.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                String and Math Utilities
              </strong>
              <p className="text-gray-300">
                Functions like <code>Math.random()</code> and{" "}
                <code>String.prototype.toUpperCase()</code> help manipulate
                numbers and strings. Learning these boosts productivity by
                eliminating the need to write basic utilities.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Functional Programming Concepts
              </strong>
              <p className="text-gray-300">
                JavaScript supports functional programming techniques like
                higher-order functions and immutability. These concepts enable
                cleaner, more modular, and testable code structures.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Using Functions Effectively
              </strong>
              <p className="text-gray-300">
                Functions are the foundation of JavaScript. Writing reusable,
                pure functions and combining them effectively leads to better
                application architecture and reduced bugs.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week5;
