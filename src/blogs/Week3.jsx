/* eslint-disable react/no-unescaped-entities */
const Week3 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 20th January — Keyed Collections in JavaScript
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                What are Keyed Collections?
              </strong>
              <p className="text-gray-300">
                Keyed collections in JavaScript are data structures that use
                keys rather than indices for storing and accessing values. These
                are extremely useful for managing more complex data
                relationships.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Map: Flexible Key-Value Store
              </strong>
              <p className="text-gray-300">
                The <code>Map</code> object holds key-value pairs where keys can
                be of any data type. It maintains insertion order and provides
                methods like <code>set</code>, <code>get</code>,{" "}
                <code>has</code>, and <code>delete</code>.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                WeakMap: Lightweight with Garbage Collection
              </strong>
              <p className="text-gray-300">
                <code>WeakMap</code> is similar to Map, but keys must be
                objects. These objects are held weakly, meaning they do not
                prevent garbage collection, making it great for private data
                storage.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Set: Unique Values Only</strong>
              <p className="text-gray-300">
                <code>Set</code> is a collection of unique values that
                eliminates duplicates automatically. It offers methods like{" "}
                <code>add</code>, <code>has</code>, and <code>delete</code> for
                set operations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">WeakSet: Weak References</strong>
              <p className="text-gray-300">
                <code>WeakSet</code> stores only objects and removes them from
                memory when no longer needed. It's useful for keeping track of
                objects without impacting garbage collection.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Use Cases for Keyed Collections
              </strong>
              <p className="text-gray-300">
                Keyed collections are perfect for cases where the identity of
                elements matters, like caching DOM nodes or storing
                configuration data. They provide optimized performance for these
                use cases.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 21st January — Structured Data: JSON & Deep Copies
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Introduction to JSON</strong>
              <p className="text-gray-300">
                JSON (JavaScript Object Notation) is a lightweight format for
                storing and transporting data. It is widely used for server
                communication and data configuration due to its human-readable
                structure.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">JSON Syntax & Data Types</strong>
              <p className="text-gray-300">
                JSON supports basic data types like strings, numbers, arrays,
                and objects. It uses key-value pairs, where keys must be strings
                and values can be other valid JSON data types.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                JSON.parse() and JSON.stringify()
              </strong>
              <p className="text-gray-300">
                <code>JSON.stringify()</code> converts JavaScript objects to
                JSON strings, while <code>JSON.parse()</code> converts JSON
                strings back to JavaScript objects. These methods are vital in
                client-server communication.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Limitations of JSON</strong>
              <p className="text-gray-300">
                JSON doesn't support functions, <code>undefined</code>, or
                special object types like Date. Understanding these limitations
                is important when serializing and deserializing objects in
                real-world applications.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Pass by Reference in JavaScript
              </strong>
              <p className="text-gray-300">
                JavaScript passes objects by reference, meaning two variables
                can refer to the same object. Modifying one will reflect in the
                other, unless a deep copy is made.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Shallow vs Deep Copy</strong>
              <p className="text-gray-300">
                Shallow copies duplicate only the top-level of an object, while
                deep copies recursively copy all nested objects. Using{" "}
                <code>structuredClone</code> or libraries like Lodash can help
                achieve deep copies safely.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 22nd January — Expression Basics & Arithmetic
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What is an Expression?</strong>
              <p className="text-gray-300">
                An expression is any valid unit of code that resolves to a
                value. Expressions can be as simple as a literal or variable, or
                complex involving multiple operators and function calls.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Arithmetic Operators</strong>
              <p className="text-gray-300">
                JavaScript supports standard arithmetic operators like{" "}
                <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>,
                and <code>%</code>. These are used for mathematical computations
                and work with both numbers and BigInts.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Unary and Increment/Decrement
              </strong>
              <p className="text-gray-300">
                Unary operators like <code>+</code> and <code>-</code> can
                coerce types or change signs. Increment (<code>++</code>) and
                decrement (<code>--</code>) update values by one and are used in
                loops or counters.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">String Operators</strong>
              <p className="text-gray-300">
                The <code>+</code> operator also concatenates strings, often
                leading to confusion when used with numbers. Knowing when
                coercion happens can prevent unexpected results.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Comma Operator</strong>
              <p className="text-gray-300">
                The comma operator evaluates multiple expressions and returns
                the result of the last one. It's rarely used but can be handy in
                for-loops or inline operations where space is limited.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Logical Not and Type Coercion
              </strong>
              <p className="text-gray-300">
                Logical NOT (<code>!</code>) is used to coerce values to
                Boolean. Double NOT (<code>!!</code>) is a common trick to
                convert any value to its Boolean equivalent.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 23rd January — Assignment, Logical & Relational Operators
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Assignment Operators</strong>
              <p className="text-gray-300">
                These operators are used to assign values to variables.{" "}
                <code>=</code> assigns, while compound forms like{" "}
                <code>+=</code> and <code>*=</code> combine assignment with
                arithmetic operations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Logical Operators</strong>
              <p className="text-gray-300">
                <code>&&</code>, <code>||</code>, and <code>!</code> allow
                control over flow and conditions. They short-circuit, meaning
                they return early if the final result is already determined.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Nullish Coalescing</strong>
              <p className="text-gray-300">
                The <code>??</code> operator returns the right-hand side only if
                the left-hand side is null or undefined. It is useful for
                setting default values without overriding falsy ones like 0 or
                "".{" "}
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Relational Operators</strong>
              <p className="text-gray-300">
                Relational operators like <code>&lt;</code>, <code>&gt;</code>,{" "}
                <code>&lt;=</code>, and <code>&gt;=</code> compare values. Their
                behavior differs for strings and numbers, and they can coerce
                operands.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                BigInt and Mixed Operations
              </strong>
              <p className="text-gray-300">
                BigInts are not implicitly converted with regular numbers.
                Operations involving both must explicitly convert one type,
                otherwise a TypeError will be thrown.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Conditional (Ternary) Operator
              </strong>
              <p className="text-gray-300">
                The ternary operator <code>condition ? expr1 : expr2</code> is a
                concise way to handle simple conditional logic. It's commonly
                used in JSX and inline decisions in code.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 24th January — Equality Algorithms & Prototypes
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Loose vs Strict Equality</strong>
              <p className="text-gray-300">
                Loose equality (<code>==</code>) allows type coercion, while
                strict equality (<code>===</code>) checks both value and type.
                Using strict equality is recommended to avoid unexpected
                comparisons.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">SameValue Algorithm</strong>
              <p className="text-gray-300">
                The <code>SameValue</code> algorithm is used internally in
                JavaScript to compare values. It treats <code>NaN === NaN</code>{" "}
                as true and distinguishes <code>+0</code> and <code>-0</code>,
                unlike <code>===</code>.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">SameValueZero Algorithm</strong>
              <p className="text-gray-300">
                Used in collections like <code>Set</code> and <code>Map</code>,{" "}
                <code>SameValueZero</code> considers <code>+0</code> and{" "}
                <code>-0</code> equal and treats <code>NaN</code> equal to
                itself. It ensures better consistency in data structures.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Object.is()</strong>
              <p className="text-gray-300">
                The <code>Object.is()</code> method implements{" "}
                <code>SameValue</code> comparison, giving a more precise
                comparison result than <code>===</code>, especially for edge
                cases like <code>NaN</code> and <code>+0/-0</code>.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Prototypes and Inheritance
              </strong>
              <p className="text-gray-300">
                Every object in JavaScript has a prototype. Understanding the
                prototype chain helps in grasping how inheritance and shared
                methods across instances work in JavaScript.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Prototypes in Equality</strong>
              <p className="text-gray-300">
                Equality comparisons can behave differently when prototypes
                define custom <code>equals</code> or <code>valueOf</code>{" "}
                methods. This can impact how objects are treated when compared
                or stringified.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week3;
