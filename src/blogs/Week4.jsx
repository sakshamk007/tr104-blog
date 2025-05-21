/* eslint-disable react/no-unescaped-entities */
const Week4 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 27th January — Introduction to Loops and Basic Iteration
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">For Loop</strong>
              <p className="text-gray-300">
                The <code>for</code> loop is a basic iteration construct that
                executes a block of code a specific number of times. It's
                commonly used when the number of iterations is known in advance.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">While Loop</strong>
              <p className="text-gray-300">
                A <code>while</code> loop continues executing a block as long as
                the condition remains true. It's ideal when you don't know how
                many times the loop should run beforehand.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Do...While Loop</strong>
              <p className="text-gray-300">
                The <code>do...while</code> loop guarantees the block is
                executed at least once before checking the condition. This is
                useful when at least one iteration must always happen.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Use Cases of Basic Loops</strong>
              <p className="text-gray-300">
                Basic loops are useful for counting, collecting values, or
                performing repetitive tasks. Choosing the right loop type
                depends on the task and whether the iteration count is known.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 28th January — Advanced Iteration Techniques
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">For...in Loop</strong>
              <p className="text-gray-300">
                The <code>for...in</code> loop iterates over the enumerable
                properties of an object. It's commonly used for traversing
                object keys, but should be used cautiously with arrays.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">For...of Loop</strong>
              <p className="text-gray-300">
                The <code>for...of</code> loop iterates over iterable values
                such as arrays, strings, and sets. It's a clean and readable
                alternative to traditional loops.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Break and Continue</strong>
              <p className="text-gray-300">
                <code>break</code> exits a loop immediately, while{" "}
                <code>continue</code> skips to the next iteration. These
                keywords are useful for controlling loop execution more
                precisely.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Performance Considerations
              </strong>
              <p className="text-gray-300">
                Iteration method impacts performance. For large datasets, using
                indexed loops or optimized data access patterns can
                significantly improve efficiency and speed.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 29th January — Conditional Statements in Depth
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">If...Else Statement</strong>
              <p className="text-gray-300">
                The <code>if...else</code> statement executes blocks of code
                based on boolean expressions. It provides the most direct way to
                handle decision-making in JavaScript.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Nested Conditions</strong>
              <p className="text-gray-300">
                Nested <code>if</code> statements allow complex logical
                branching. However, too much nesting can hurt readability, so
                consider refactoring when logic becomes too deep.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Switch Statement</strong>
              <p className="text-gray-300">
                A <code>switch</code> statement offers a clean way to compare a
                value against multiple options. It's ideal when many specific
                value checks are needed in sequence.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Choosing Between If and Switch
              </strong>
              <p className="text-gray-300">
                Use <code>if</code> for complex conditions and{" "}
                <code>switch</code> for handling multiple static cases. Choosing
                wisely improves clarity and reduces bugs in decision-making code
                blocks.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 30th January — Error Handling in JavaScript
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Try...Catch Block</strong>
              <p className="text-gray-300">
                <code>try...catch</code> is used to handle runtime errors. The
                code inside <code>try</code> is executed, and if an error
                occurs, it's caught in the <code>catch</code> block.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Finally Clause</strong>
              <p className="text-gray-300">
                The <code>finally</code> block runs after <code>try</code> and{" "}
                <code>catch</code>, regardless of the outcome. It's useful for
                cleanup tasks like closing files or releasing resources.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Throwing Custom Errors</strong>
              <p className="text-gray-300">
                Use the <code>throw</code> statement to trigger custom errors.
                This helps in identifying and differentiating problems in
                different parts of the application.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Built-in Error Types</strong>
              <p className="text-gray-300">
                JavaScript includes standard error types like{" "}
                <code>TypeError</code>, <code>ReferenceError</code>, and
                <code>SyntaxError</code>. Understanding them helps in better
                debugging and writing more stable code.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 31st January — Defensive Programming & Error Best Practices
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Input Validation</strong>
              <p className="text-gray-300">
                Always validate input before processing. This prevents type
                errors and malicious inputs from corrupting logic or causing
                security vulnerabilities in both client and server environments.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Failing Gracefully</strong>
              <p className="text-gray-300">
                Code should be designed to fail without crashing the entire
                application. Catch errors, notify users meaningfully, and ensure
                fallback behaviors are in place to keep the app running.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Logging and Debugging</strong>
              <p className="text-gray-300">
                Logging provides critical insights during development and in
                production. Tools like <code>console.log</code>
                and external logging services help trace issues when bugs occur.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Using Error Objects Effectively
              </strong>
              <p className="text-gray-300">
                Error objects can include stack traces and custom messages.
                Passing these through the application stack can help identify
                where and why an error occurred, streamlining debugging.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week4;
