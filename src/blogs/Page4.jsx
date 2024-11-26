import React from 'react';
import '../App.css';

const Day4 = () => {
  return (
    <div className="px-10">

      <div className="heading">1. File Structure</div>
      <div className="description">
        I reviewed a typical project file structure, breaking it down as follows:
        <ul>
          <li><strong>app:</strong> Contains models, views (layouts, partials), controllers, routers, database, helper functions, middleware, startup configurations, and utils.</li>
          <li><strong>config:</strong> Configuration files for various environments (e.g., <code>default.json</code> and <code>production.json</code>).</li>
          <li><strong>log:</strong> Log files for application events and errors.</li>
          <li><strong>public:</strong> Publicly accessible files, such as assets.</li>
          <li><strong>src:</strong> Source code for the application.</li>
          <li><strong>package.json:</strong> Defines project dependencies, scripts, and metadata.</li>
          <li><strong>package-lock.json:</strong> Locks the exact versions of installed packages.</li>
          <li><strong>app.js:</strong> Main application file to initialize the server and routes.</li>
          <li><strong>index.html:</strong> The starting point for rendering web pages.</li>
          <li><strong>node_modules:</strong> Directory where all project dependencies are installed.</li>
          <li><strong>readme.md:</strong> Provides project documentation and setup instructions.</li>
          <li><strong>.env:</strong> Contains environment variables for development, production, etc.</li>
        </ul>
      </div>

      <div className="heading">2. Key Packages Used</div>
      <div className="description">
        I explored various useful packages for the project:
        <ul>
          <li><strong>joi:</strong> For schema design and input validation.</li>
          <li><strong>joi-password-complexity:</strong> Defines password strength requirements (e.g., lowercase, uppercase, special chars).</li>
          <li><strong>config/rc:</strong> For managing configuration files like <code>default.json</code> and <code>production.json</code>.</li>
          <li><strong>debug:</strong> A better alternative to <code>console.log</code> for debugging.</li>
          <li><strong>.env:</strong> Loads environment variables into <code>process.env</code>.</li>
          <li><strong>module_alias:</strong> Creates directory aliases and custom module paths using <code>@</code>.</li>
          <li><strong>lodash:</strong> A utility library for working with arrays, objects, and strings.</li>
          <li><strong>express-async-errors:</strong> Handles async errors in Express without try/catch.</li>
          <li><strong>winston:</strong> A logging library to create custom logs stored locally.</li>
          <li><strong>compression:</strong> Compresses response bodies to reduce load times.</li>
          <li><strong>jsonwebtoken:</strong> Used for secure data transmission through encrypted tokens.</li>
          <li><strong>mongoose:</strong> ODM (Object Data Modeling) for MongoDB, used for creating and managing schemas.</li>
        </ul>
      </div>

    </div>
  );
};

export default Day4;
