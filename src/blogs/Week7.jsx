/* eslint-disable react/no-unescaped-entities */
const Week7 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 17th February — Introduction to APIs and Fetch
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What is an API?</strong>
              <p className="text-gray-300">
                An API (Application Programming Interface) allows communication
                between different software systems. It defines rules for data
                requests and responses, facilitating integration with external
                services or internal modules.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Using XMLHTTPRequest</strong>
              <p className="text-gray-300">
                XMLHTTPRequest is a legacy method for making HTTP requests in
                JavaScript. It supports GET, POST, and other methods, but its
                syntax is verbose and harder to manage than modern alternatives.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">The Fetch API</strong>
              <p className="text-gray-300">
                The Fetch API simplifies HTTP requests using promises. It's used
                for sending and receiving data asynchronously and is a modern
                replacement for XMLHTTPRequest in most scenarios.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Handling JSON Responses</strong>
              <p className="text-gray-300">
                Fetch returns a promise that resolves to a Response object. You
                can use the <code>.json()</code> method to parse the body as
                JSON, allowing easy access to structured API data.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 18th February — Fetch in Practice and Error Handling
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Making a GET Request</strong>
              <p className="text-gray-300">
                GET requests are used to retrieve data. With fetch, you simply
                call <code>fetch(url)</code> and handle the returned promise to
                work with the data and update the DOM accordingly.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Making a POST Request</strong>
              <p className="text-gray-300">
                POST requests send data to a server. You can pass a second
                argument to fetch with method, headers, and body to submit JSON
                or form data to the backend.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Handling Errors in Fetch</strong>
              <p className="text-gray-300">
                Fetch doesn't reject on HTTP errors. You need to check the{" "}
                <code>response.ok</code> property manually and throw an error to
                handle 404 or 500 status codes properly in your logic.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Async/Await with Fetch</strong>
              <p className="text-gray-300">
                Using <code>async</code> and <code>await</code> with fetch
                provides cleaner syntax and better readability. It allows
                writing asynchronous code that looks synchronous, improving
                debugging and error tracking.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 19th February — JavaScript Classes
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What are Classes?</strong>
              <p className="text-gray-300">
                Classes in JavaScript are syntactic sugar over constructor
                functions. They provide a clear and concise way to create
                objects and implement inheritance using the <code>class</code>{" "}
                keyword.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Constructor Method</strong>
              <p className="text-gray-300">
                The <code>constructor</code> method is a special function inside
                a class that gets called when a new object is created. It
                initializes the object's properties and prepares it for use.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Inheritance in Classes</strong>
              <p className="text-gray-300">
                JavaScript classes support inheritance using the{" "}
                <code>extends</code> keyword. Subclasses can inherit methods and
                properties from parent classes, allowing code reuse and
                extending base functionality.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Static Methods</strong>
              <p className="text-gray-300">
                Static methods are defined using the <code>static</code>{" "}
                keyword. They belong to the class itself, not instances, and are
                typically used for utility functions related to the class.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 20th February — Class Features and Memory Lifecycle
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Class Fields and Methods</strong>
              <p className="text-gray-300">
                Classes can define fields and methods that describe object
                behavior. Public and private fields control visibility, helping
                to encapsulate logic and prevent external modifications to
                internal data.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Super Keyword</strong>
              <p className="text-gray-300">
                The <code>super</code> keyword is used inside a subclass to call
                methods from its parent class, including the constructor. It
                ensures proper initialization in an inheritance hierarchy.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Memory Lifecycle in JS</strong>
              <p className="text-gray-300">
                JavaScript's memory lifecycle includes allocation, usage, and
                release. Developers must be mindful of memory leaks and free up
                resources by dereferencing unused variables or using weak
                collections.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Common Memory Pitfalls</strong>
              <p className="text-gray-300">
                Closures, unused DOM references, and forgotten timers can cause
                memory leaks. Identifying and resolving these issues is key to
                maintaining app performance and responsiveness.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 21st February — Garbage Collection and Best Practices
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                What is Garbage Collection?
              </strong>
              <p className="text-gray-300">
                Garbage collection is an automatic process in JavaScript that
                reclaims memory by removing objects that are no longer
                reachable. This helps manage memory and prevents unnecessary
                consumption.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Reference Counting</strong>
              <p className="text-gray-300">
                One algorithm used in garbage collection is reference counting,
                which deallocates objects once no references remain. However,
                circular references can still cause memory to persist
                unnecessarily.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Mark-and-Sweep Algorithm</strong>
              <p className="text-gray-300">
                The mark-and-sweep algorithm identifies reachable objects by
                marking them, then sweeping unmarked ones away. It's widely used
                in JavaScript engines like V8 to manage memory efficiently.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Memory Management Best Practices
              </strong>
              <p className="text-gray-300">
                Avoid global variables, clean up timers, and dereference unused
                objects to ensure efficient memory use. Profiling tools like
                Chrome DevTools help identify leaks and optimize memory usage.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week7;
