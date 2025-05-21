/* eslint-disable react/no-unescaped-entities */
const Week2 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 13th January — Variables — Declarations & Hoisting
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Variable Declarations - var, let, const
              </strong>
              <p className="text-gray-300">
                JavaScript offers three ways to declare variables:{" "}
                <code>var</code>, <code>let</code>, and <code>const</code>. Each
                differs in scope and mutability, affecting how and where you can
                use these variables effectively.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Hoisting Explained</strong>
              <p className="text-gray-300">
                Hoisting is JavaScript's default behavior of moving declarations
                to the top of their scope before code execution, which means
                variables declared with <code>var</code> are accessible before
                their definition but with undefined value.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Differences Between var and let
              </strong>
              <p className="text-gray-300">
                Unlike <code>var</code>, variables declared with{" "}
                <code>let</code> are block scoped, meaning they only exist
                within the nearest enclosing curly braces, helping avoid
                accidental variable clashes.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Using const for Immutable Variables
              </strong>
              <p className="text-gray-300">
                Variables declared with <code>const</code> cannot be reassigned,
                which is useful for defining constants or objects you don't want
                to accidentally overwrite, but note their contents can still be
                mutable.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Temporal Dead Zone (TDZ)</strong>
              <p className="text-gray-300">
                Variables declared with <code>let</code> and <code>const</code>{" "}
                are in a temporal dead zone until their declaration is reached
                during execution, causing a ReferenceError if accessed before
                initialization.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Best Practices for Variable Declaration
              </strong>
              <p className="text-gray-300">
                Use <code>const</code> by default to prevent reassignment,
                switch to <code>let</code> when you need to reassign, and avoid{" "}
                <code>var</code> due to its confusing hoisting and scope
                behaviors to write safer and cleaner code.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 14th January — Variable Naming Rules & Scopes
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Variable Naming Rules</strong>
              <p className="text-gray-300">
                Variable names must start with a letter, underscore (_), or
                dollar sign ($). They cannot start with numbers, cannot use
                JavaScript reserved keywords, and are case-sensitive to avoid
                conflicts.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Best Practices for Naming
              </strong>
              <p className="text-gray-300">
                Use descriptive, camelCase names that clearly indicate the
                variable's purpose. Avoid single-letter names unless in loops,
                and steer clear of ambiguous abbreviations to maintain readable
                and maintainable code.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Global Scope Variables</strong>
              <p className="text-gray-300">
                Variables declared outside any function or block are global and
                accessible anywhere in your code, which can lead to unexpected
                behaviors if overused or accidentally overwritten by other
                scripts.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Local (Function) Scope Variables
              </strong>
              <p className="text-gray-300">
                Variables declared inside functions are local to those functions
                and cannot be accessed from outside, allowing for encapsulation
                and reducing interference between parts of the code.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Block Scope with let and const
              </strong>
              <p className="text-gray-300">
                Block scope confines variables within curly braces like loops or
                conditional statements, making <code>let</code> and{" "}
                <code>const</code> safer than <code>var</code> for preventing
                scope leaks and unintended side effects.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Scope Chain and Variable Lookup
              </strong>
              <p className="text-gray-300">
                JavaScript resolves variables by looking up the scope chain
                starting from the innermost block/function to outer scopes,
                finally reaching global scope if not found earlier, affecting
                variable shadowing and accessibility.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 15th January — Data Types — Primitive & Objects
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Primitive Data Types Overview
              </strong>
              <p className="text-gray-300">
                JavaScript has seven primitive data types: <code>string</code>,{" "}
                <code>number</code>, <code>bigInt</code>, <code>boolean</code>,{" "}
                <code>null</code>, <code>undefined</code>, and{" "}
                <code>Symbol</code>. Each represents a single immutable value.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Strings</strong>
              <p className="text-gray-300">
                Strings represent sequences of characters enclosed in single,
                double, or backtick quotes. They are immutable, meaning methods
                return new strings without changing the original.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Numbers and BigInt</strong>
              <p className="text-gray-300">
                Numbers include both integers and floating-point values. BigInt
                allows representation of integers larger than the Number type
                can safely hold, useful for precise large integer calculations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Boolean, Null, and Undefined
              </strong>
              <p className="text-gray-300">
                Boolean represents true/false values, <code>null</code> denotes
                intentional absence of any value, and <code>undefined</code>{" "}
                means a variable has been declared but not assigned a value.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Symbols — Unique Identifiers
              </strong>
              <p className="text-gray-300">
                Symbols create unique identifiers useful for object property
                keys, ensuring no name collisions and enabling hidden or
                private-like properties in objects.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Objects and the typeof Operator
              </strong>
              <p className="text-gray-300">
                Objects are collections of key-value pairs and can hold multiple
                values or functions. Using <code>typeof</code> on objects
                returns "object", and built-in objects like <code>Array</code>{" "}
                and <code>Date</code> provide useful methods.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 16th January — Typecasting — Conversion vs Coercion
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Type Conversion vs Coercion
              </strong>
              <p className="text-gray-300">
                Type conversion is explicitly done by the programmer to convert
                data from one type to another, while coercion happens
                automatically in expressions involving different types,
                sometimes causing unexpected results.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Explicit Typecasting</strong>
              <p className="text-gray-300">
                You can explicitly convert types using functions like{" "}
                <code>String()</code>, <code>Number()</code>, and{" "}
                <code>Boolean()</code>, which help avoid bugs caused by implicit
                conversions.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Implicit Typecasting Examples
              </strong>
              <p className="text-gray-300">
                JavaScript automatically coerces types in expressions, such as
                when adding a number and a string, resulting in string
                concatenation, which requires careful understanding to avoid
                logic errors.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Falsy and Truthy Values</strong>
              <p className="text-gray-300">
                During coercion, some values convert to <code>false</code> (like
                0, "", null, undefined), while others convert to{" "}
                <code>true</code>, influencing conditional statements and
                logical expressions.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Using the + Operator and Coercion
              </strong>
              <p className="text-gray-300">
                The plus operator concatenates strings but adds numbers. If one
                operand is a string, JavaScript coerces the other to string,
                which can cause unexpected string concatenations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Avoiding Type Coercion Pitfalls
              </strong>
              <p className="text-gray-300">
                It's best to use strict equality (<code>===</code>) to prevent
                type coercion bugs and explicitly convert types when needed to
                ensure your code behaves predictably.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 17th January — Data Structures — Arrays
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What Are Arrays?</strong>
              <p className="text-gray-300">
                Arrays are ordered collections of values, accessible by
                numerical indices starting at zero. They can hold elements of
                any type, including other arrays, allowing for complex data
                structures.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Common Array Methods</strong>
              <p className="text-gray-300">
                Arrays provide many built-in methods such as <code>push()</code>
                , <code>pop()</code>, <code>shift()</code>, and{" "}
                <code>unshift()</code> to add or remove elements, and{" "}
                <code>map()</code>, <code>filter()</code>, and{" "}
                <code>reduce()</code> for functional operations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Iterating Over Arrays</strong>
              <p className="text-gray-300">
                You can iterate arrays using loops like <code>for</code>,{" "}
                <code>for...of</code>, or array iterator methods such as{" "}
                <code>forEach()</code>, allowing you to process or transform
                each element efficiently.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Multidimensional Arrays</strong>
              <p className="text-gray-300">
                Arrays can contain other arrays as elements, creating
                multidimensional arrays useful for representing matrices or
                grids, with access through multiple indices.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Array Length Property</strong>
              <p className="text-gray-300">
                The <code>length</code> property indicates the number of
                elements in an array and can be modified to truncate or expand
                the array, although this is not commonly recommended.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Arrays vs Objects</strong>
              <p className="text-gray-300">
                While arrays are ordered lists indexed by numbers, objects store
                key-value pairs with string or symbol keys. Arrays are preferred
                for ordered data, whereas objects suit unordered data.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week2;
