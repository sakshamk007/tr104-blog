/* eslint-disable react/no-unescaped-entities */
const Week6 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 10th February — Understanding "this" in JavaScript
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">"this" in a Method</strong>
              <p className="text-gray-300">
                When used inside an object method, <code>this</code> refers to
                the object that owns the method. It allows methods to access and
                modify the object's own properties.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">"this" in a Function</strong>
              <p className="text-gray-300">
                In regular functions, <code>this</code> refers to the global
                object (window in browsers). However, in strict mode, it is{" "}
                <code>undefined</code>, which can affect function behavior.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">"this" in Event Handlers</strong>
              <p className="text-gray-300">
                In event handlers, <code>this</code> typically refers to the
                HTML element that received the event, unless it's an arrow
                function or manually bound context.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Arrow Functions and "this"
              </strong>
              <p className="text-gray-300">
                Arrow functions do not bind their own <code>this</code>.
                Instead, they inherit <code>this</code> from the surrounding
                lexical context, which can prevent common scoping issues.
              </p>
            </li>
          </ul>
        </section>
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 11th February — Explicit Binding with call, apply, and bind
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Using call()</strong>
              <p className="text-gray-300">
                The <code>call()</code> method allows you to call a function
                with a specified <code>this</code> context and arguments
                provided one by one. It's useful for borrowing methods.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Using apply()</strong>
              <p className="text-gray-300">
                <code>apply()</code> is similar to <code>call()</code> but takes
                arguments as an array. This can be convenient when working with
                variable arguments or spreading arrays.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Using bind()</strong>
              <p className="text-gray-300">
                <code>bind()</code> creates a new function with a bound{" "}
                <code>this</code> context. Unlike <code>call</code> or
                <code>apply</code>, it doesn't execute immediately but returns a
                reusable bound function.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Choosing the Right Binding Method
              </strong>
              <p className="text-gray-300">
                Use <code>call</code> or <code>apply</code> when invoking a
                function immediately. Use <code>bind</code> when you need to
                preserve context for later use, like in callbacks or event
                handlers.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 12th February — Introduction to Asynchronous JavaScript
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                What is Asynchronous Programming?
              </strong>
              <p className="text-gray-300">
                Asynchronous code allows tasks to run in the background while
                other operations continue. This helps keep applications
                responsive, especially during I/O or API calls.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">setTimeout()</strong>
              <p className="text-gray-300">
                The <code>setTimeout()</code> function executes code after a
                specified delay. It's useful for deferring actions or simulating
                asynchronous behavior in simple examples.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">setInterval()</strong>
              <p className="text-gray-300">
                <code>setInterval()</code> repeatedly runs code at defined
                intervals. It's ideal for polling, animations, or periodic
                updates, but be careful to clear it when no longer needed.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Callback Functions</strong>
              <p className="text-gray-300">
                Callbacks are functions passed as arguments to be executed after
                another function finishes. They are the foundation of
                asynchronous patterns in JavaScript.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 13th February — Promises for Managing Asynchronous Flow
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What is a Promise?</strong>
              <p className="text-gray-300">
                A Promise represents a value that might not be available yet but
                will be resolved in the future. It allows chaining actions and
                handling success or failure with clarity.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Creating Promises</strong>
              <p className="text-gray-300">
                You can create a promise using the <code>new Promise()</code>{" "}
                constructor. Inside, use <code>resolve</code>
                and <code>reject</code> to control its outcome based on async
                operations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Using .then() and .catch()
              </strong>
              <p className="text-gray-300">
                The <code>.then()</code> method processes resolved results,
                while <code>.catch()</code> handles errors. They make async
                flows easier to manage than nested callbacks.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Promise Chaining</strong>
              <p className="text-gray-300">
                Promise chaining lets you run multiple async operations in
                sequence. Each <code>.then()</code> returns a new promise,
                simplifying complex workflows cleanly.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 14th February — Comparing Callbacks and Promises
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Callback Hell</strong>
              <p className="text-gray-300">
                Using many nested callbacks can lead to unreadable and
                error-prone code, known as callback hell. This issue prompted
                the evolution of promises and async/await.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Advantages of Promises</strong>
              <p className="text-gray-300">
                Promises simplify asynchronous code, allowing easier error
                handling and cleaner syntax. They're better suited for chaining
                and modular async flows than raw callbacks.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Error Handling in Async Code
              </strong>
              <p className="text-gray-300">
                In promises, error propagation is simpler with{" "}
                <code>.catch()</code>. Centralized error handling helps reduce
                bugs and improves maintainability of async operations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">When to Use Each</strong>
              <p className="text-gray-300">
                Use callbacks for simple, single operations. Choose promises for
                complex or multiple steps. For modern projects, promises and
                async/await are typically preferred.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week6;
