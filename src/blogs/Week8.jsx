/* eslint-disable react/no-unescaped-entities */
const Week8 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 24th February — TypeScript Introduction and Setup
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What is TypeScript?</strong>
              <p className="text-gray-300">
                TypeScript is a statically typed superset of JavaScript that
                adds optional type safety and powerful tooling. It helps
                developers catch errors early and write more maintainable,
                scalable applications.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">TypeScript vs JavaScript</strong>
              <p className="text-gray-300">
                Unlike JavaScript, TypeScript enforces type-checking at
                compile-time and supports modern language features like
                interfaces and generics. This makes TypeScript ideal for larger
                codebases and collaborative development.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Installing TypeScript</strong>
              <p className="text-gray-300">
                TypeScript can be installed globally using npm:{" "}
                <code>npm install -g typescript</code>. It allows compiling{" "}
                <code>.ts</code> files into JavaScript and includes useful tools
                like <code>tsc</code> for checking types.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Configuration File (tsconfig.json)
              </strong>
              <p className="text-gray-300">
                The <code>tsconfig.json</code> file lets you define compiler
                options like target version, module system, and paths. It helps
                ensure consistent compilation across teams and environments.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 25th February — Working with TypeScript Types
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Primitive and Custom Types
              </strong>
              <p className="text-gray-300">
                TypeScript supports primitive types like <code>string</code>,{" "}
                <code>number</code>, <code>boolean</code>, and also allows
                defining custom types using <code>type</code> or{" "}
                <code>interface</code> keywords for complex structures.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Type Inference</strong>
              <p className="text-gray-300">
                TypeScript infers types from assigned values when no explicit
                annotation is given. This enables flexibility and reduces
                redundancy while still benefiting from type safety.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Union and Literal Types</strong>
              <p className="text-gray-300">
                Union types allow a variable to hold multiple specified types.
                Literal types restrict variables to a set of predefined values,
                enhancing predictability in code logic.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Arrays and Tuples</strong>
              <p className="text-gray-300">
                Arrays can be typed with element types, and tuples define
                fixed-length arrays with specific types at each position. This
                ensures predictable data structures and stronger validation.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 26th February — Functions and Overloads in TypeScript
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Typing Functions</strong>
              <p className="text-gray-300">
                Functions can have typed parameters and return types. This
                ensures clarity in expected input and output, preventing runtime
                issues and improving code documentation and IntelliSense.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Optional and Default Parameters
              </strong>
              <p className="text-gray-300">
                Optional parameters use <code>?</code>, and default values
                simplify function usage by allowing arguments to be skipped
                without breaking the logic or requiring additional checks.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Function Overloading</strong>
              <p className="text-gray-300">
                Overloading allows defining multiple function signatures for the
                same implementation, enabling flexible APIs with clear
                input-output expectations and compile-time validation of
                arguments.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Rest Parameters</strong>
              <p className="text-gray-300">
                Rest parameters enable handling a variable number of arguments
                in functions using an array structure. This adds flexibility
                while maintaining type safety for the arguments.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 27th February — Interfaces and Classes in TypeScript
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Understanding Interfaces</strong>
              <p className="text-gray-300">
                Interfaces define the shape of an object. They can include
                properties and method signatures, enabling consistent structure
                across different parts of an application.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Extending Interfaces</strong>
              <p className="text-gray-300">
                Interfaces can extend other interfaces, combining multiple
                definitions. This promotes modular and DRY (Don't Repeat
                Yourself) principles in designing object contracts.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Classes with Interfaces</strong>
              <p className="text-gray-300">
                Classes can implement interfaces to ensure they conform to a
                specific structure. This reinforces consistency and makes
                large-scale systems easier to understand and maintain.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Hybrid and ReadOnly Types
              </strong>
              <p className="text-gray-300">
                Hybrid types combine callable signatures with properties, and
                readonly modifiers prevent mutation. These patterns are useful
                in libraries and utilities that require strict control over data
                handling.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 28th February — Generics, Operators, and Modules
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Understanding Generics</strong>
              <p className="text-gray-300">
                Generics allow creating reusable components that work with any
                data type while preserving type safety. They're often used in
                functions, classes, and collections to improve flexibility.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">TypeScript Operators</strong>
              <p className="text-gray-300">
                TypeScript supports all standard JavaScript operators, along
                with type guards and type assertions to ensure more controlled
                and predictable expressions in complex logic structures.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Modules and Namespaces</strong>
              <p className="text-gray-300">
                Modules in TypeScript allow code to be split across multiple
                files. Using <code>import</code> and <code>export</code> makes
                code reusable and manageable, especially in large projects.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Working with External Libraries
              </strong>
              <p className="text-gray-300">
                TypeScript supports type definitions for third-party libraries
                via <code>@types</code> packages. This allows developers to
                safely use libraries like React or Lodash with full IntelliSense
                support.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week8;
