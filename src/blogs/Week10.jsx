/* eslint-disable react/no-unescaped-entities */
const Week10 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 10th March — Working with Files & Introduction to Express.js
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Understanding process.cwd()
              </strong>
              <p className="text-gray-300">
                The <code>process.cwd()</code> method in Node.js returns the
                current working directory of the Node.js process. It's
                particularly useful when dealing with file paths, ensuring that
                file operations are relative to the directory from which the
                process was initiated, thus avoiding issues with relative paths.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Utilizing the path Module
              </strong>
              <p className="text-gray-300">
                Node.js's built-in <code>path</code> module provides utilities
                for working with file and directory paths. It helps in
                constructing path strings that are compatible across different
                operating systems, thereby preventing common errors related to
                path separators and relative paths.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Working with the fs Module
              </strong>
              <p className="text-gray-300">
                The <code>fs</code> (File System) module in Node.js allows for
                interacting with the file system. It enables reading from and
                writing to files, creating directories, and performing other
                file-related operations, both synchronously and asynchronously,
                facilitating efficient file management in applications.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Introduction to Express.js
              </strong>
              <p className="text-gray-300">
                Express.js is a minimal and flexible Node.js web application
                framework that provides a robust set of features for building
                web and mobile applications. It simplifies the process of
                setting up a server and handling HTTP requests and responses.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Creating an Express.js Application
              </strong>
              <p className="text-gray-300">
                To create an Express.js application, you can use the Express
                application generator or set it up manually. This involves
                initializing a Node.js project, installing Express, and setting
                up basic routing to handle incoming requests.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Setting Up Middleware in Express
              </strong>
              <p className="text-gray-300">
                Middleware functions in Express are functions that have access
                to the request and response objects. They can execute code,
                modify the request and response, end the request-response cycle,
                or call the next middleware in the stack, enabling modular and
                organized code.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 11th March — Working with APIs & Authentication
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Understanding RESTful APIs
              </strong>
              <p className="text-gray-300">
                RESTful APIs adhere to the principles of Representational State
                Transfer, providing a standardized way for clients and servers
                to communicate. They use HTTP methods like GET, POST, PUT, and
                DELETE to perform operations on resources, ensuring stateless
                interactions and scalability.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Implementing Routes in Express
              </strong>
              <p className="text-gray-300">
                In Express.js, routes define the endpoints of your application.
                By setting up routes, you can determine how your application
                responds to client requests for specific URLs and HTTP methods,
                enabling organized handling of different functionalities.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handling Query and Route Parameters
              </strong>
              <p className="text-gray-300">
                Express.js allows you to access query parameters via{" "}
                <code>req.query</code> and route parameters via{" "}
                <code>req.params</code>. This facilitates dynamic routing and
                the ability to capture values from the URL, enhancing the
                flexibility of your API endpoints.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Introduction to Authentication
              </strong>
              <p className="text-gray-300">
                Authentication is the process of verifying the identity of a
                user or system. In web applications, it's crucial for ensuring
                that users are who they claim to be, typically implemented using
                methods like sessions, tokens, or third-party services.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Implementing JWT Authentication
              </strong>
              <p className="text-gray-300">
                JSON Web Tokens (JWT) are a compact and self-contained way for
                securely transmitting information between parties. In
                Express.js, JWTs can be used to authenticate users by issuing a
                token upon login and verifying it on subsequent requests to
                protected routes.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Securing Routes with Middleware
              </strong>
              <p className="text-gray-300">
                Middleware functions can be used to protect routes by checking
                for valid authentication tokens before granting access. This
                ensures that only authenticated users can access certain parts
                of your application, enhancing security and access control.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 12th March — Introduction to Databases
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">What is a Database?</strong>
              <p className="text-gray-300">
                A database is an organized collection of data that can be easily
                accessed, managed, and updated. Databases are essential for
                storing persistent data in applications, enabling efficient
                retrieval and manipulation of information.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Types of Databases</strong>
              <p className="text-gray-300">
                Databases can be broadly categorized into relational and
                non-relational types. Relational databases, like MySQL and
                PostgreSQL, store data in tables with predefined schemas, while
                non-relational databases, like MongoDB, store data in flexible,
                document-based formats.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Introduction to Prisma</strong>
              <p className="text-gray-300">
                Prisma is a modern ORM (Object-Relational Mapping) tool that
                simplifies database access in Node.js and TypeScript
                applications. It provides a type-safe and intuitive API for
                querying databases, enhancing developer productivity and
                reducing errors.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Setting Up Prisma in a Project
              </strong>
              <p className="text-gray-300">
                To integrate Prisma into your project, you need to install the
                Prisma CLI, initialize Prisma, define your data models in the
                schema file, and generate the Prisma Client. This setup
                streamlines database interactions in your application.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Understanding Prisma Schema
              </strong>
              <p className="text-gray-300">
                The Prisma schema is a central configuration file where you
                define your application's data models, database connections, and
                generators. It serves as the blueprint for generating the Prisma
                Client and managing your database schema.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Performing Migrations with Prisma
              </strong>
              <p className="text-gray-300">
                Prisma's migration system allows you to evolve your database
                schema over time. By creating and applying migrations, you can
                version control your database changes and ensure consistency
                across different environments.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 13th March — Working with Relational Databases
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Understanding Relational Databases
              </strong>
              <p className="text-gray-300">
                Relational databases organize data into tables with rows and
                columns, enforcing relationships through foreign keys. They are
                ideal for structured data and support complex queries using SQL,
                ensuring data integrity and consistency.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Introduction to Sequelize
              </strong>
              <p className="text-gray-300">
                Sequelize is a promise-based ORM for Node.js that supports
                various relational databases. It allows you to define models,
                manage associations, and perform CRUD operations, simplifying
                database interactions in your application.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Defining Models in Sequelize
              </strong>
              <p className="text-gray-300">
                Sequelize models represent tables in a database. You define each
                model with its attributes and data types, allowing Sequelize to
                map these to SQL tables and perform operations like creation,
                updates, and deletions seamlessly.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Associations in Sequelize
              </strong>
              <p className="text-gray-300">
                Sequelize supports defining associations between models, such as
                one-to-one, one-to-many, and many-to-many relationships. These
                associations help maintain data integrity and allow you to
                perform join queries with ease.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Running Queries with Sequelize
              </strong>
              <p className="text-gray-300">
                Sequelize provides built-in methods to perform common database
                operations like `findAll`, `findOne`, `create`, `update`, and
                `destroy`. These methods abstract SQL syntax into
                JavaScript-friendly functions, making development more
                intuitive.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Sequelize Migrations</strong>
              <p className="text-gray-300">
                Migrations in Sequelize help manage changes to your database
                schema over time. By generating and running migrations, you can
                version control table structures and ensure consistency between
                development and production environments.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 14th March — Working with Document Databases
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Understanding Document Databases
              </strong>
              <p className="text-gray-300">
                Document databases like MongoDB store data as JSON-like
                documents, allowing for flexible schemas and nested data. They
                are ideal for applications with evolving data structures or
                where denormalized data access is preferred.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Getting Started with Mongoose
              </strong>
              <p className="text-gray-300">
                Mongoose is an ODM (Object Data Modeling) library for MongoDB
                and Node.js. It provides a schema-based solution to model your
                application data and includes built-in type casting, validation,
                and query building.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Defining Schemas and Models in Mongoose
              </strong>
              <p className="text-gray-300">
                With Mongoose, you define schemas that outline the structure of
                your documents, including field types and validation rules.
                Models are then created from these schemas to interact with the
                documents in your MongoDB collections.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                CRUD Operations with Mongoose
              </strong>
              <p className="text-gray-300">
                Mongoose simplifies Create, Read, Update, and Delete operations
                by providing powerful model methods. These methods allow
                developers to interact with MongoDB documents using familiar
                JavaScript syntax and intuitive queries.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Using Prisma with MongoDB
              </strong>
              <p className="text-gray-300">
                Prisma now supports MongoDB, offering a type-safe and
                auto-completing API for interacting with your collections. It
                provides a modern alternative to Mongoose and integrates well
                into TypeScript-heavy projects for greater safety and clarity.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Comparing Sequelize, Prisma, and Mongoose
              </strong>
              <p className="text-gray-300">
                While Sequelize is tailored for SQL databases, Mongoose is
                designed for MongoDB, and Prisma bridges both worlds with modern
                tooling. Choosing between them depends on your project's
                database, performance needs, and desired developer experience.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week10;
