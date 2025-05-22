/* eslint-disable react/no-unescaped-entities */
const Week11 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 17th March — Project Initialization & User Model
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Initialized the Health Project
              </strong>
              <p className="text-gray-300">
                Started by creating a new Node.js project using{" "}
                <code>npm init -y</code>. Installed dependencies like{" "}
                <code>express</code>, <code>mongoose</code>, <code>dotenv</code>
                , and <code>cors</code>. Set up a modular folder structure with
                directories for routes, controllers, models, and middleware.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Defined the User Schema</strong>
              <p className="text-gray-300">
                Created <code>models/User.js</code> using Mongoose with fields
                such as <code>name</code>, <code>email</code>,{" "}
                <code>password</code>, and <code>role</code>. Added validation
                and default roles like "patient", "doctor", and "admin" for RBAC
                purposes.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Connected to MongoDB</strong>
              <p className="text-gray-300">
                Established a connection to MongoDB using Mongoose and
                environment variables. Verified the connection and logged
                success/failure states in the terminal.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 18th March — Authentication with JWT
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created Register and Login Endpoints
              </strong>
              <p className="text-gray-300">
                Built <code>/register</code> and <code>/login</code> endpoints
                in <code>controllers/authController.js</code>. Used{" "}
                <code>bcrypt</code> to hash passwords and{" "}
                <code>jsonwebtoken</code> to generate JWTs on successful login.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Secured Passwords</strong>
              <p className="text-gray-300">
                Applied <code>bcrypt.hash()</code> to store passwords securely
                and <code>bcrypt.compare()</code> during login to verify
                credentials.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Generated and Verified JWTs
              </strong>
              <p className="text-gray-300">
                Issued JWTs using a secret key from the <code>.env</code> file.
                Also created a middleware to verify these tokens and
                authenticate users before granting access to protected routes.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Built Authentication Middleware
              </strong>
              <p className="text-gray-300">
                Wrote an <code>authMiddleware.js</code> to parse and validate
                JWTs. It checked for valid tokens in the headers and appended
                the user object to the request.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 19th March — Role-Based Access Control (RBAC)
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Defined Roles in the Health App
              </strong>
              <p className="text-gray-300">
                Identified and established user roles: "patient", "doctor", and
                "admin". These roles were stored as part of the user schema and
                used for access control throughout the app.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Implemented RBAC Middleware
              </strong>
              <p className="text-gray-300">
                Built a middleware function called{" "}
                <code>authorizeRoles(...roles)</code> to verify whether a user's
                role matched the roles allowed for accessing specific routes.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Secured Admin-Only Routes
              </strong>
              <p className="text-gray-300">
                Applied RBAC checks to admin-specific routes such as user
                management and system configuration endpoints. Only users with
                the "admin" role were permitted access.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Enabled Role Assignment During Registration
              </strong>
              <p className="text-gray-300">
                Allowed optional role assignment at registration while
                defaulting to "patient" if no role was provided. Also validated
                roles to prevent abuse.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 20th March — CRUD Operations for Users
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created RESTful User Routes
              </strong>
              <p className="text-gray-300">
                Set up user management routes with endpoints like{" "}
                <code>GET /users</code>, <code>GET /users/:id</code>,{" "}
                <code>PUT /users/:id</code>, and <code>DELETE /users/:id</code>{" "}
                using Express Router.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Built Controller Logic</strong>
              <p className="text-gray-300">
                Wrote controller functions in{" "}
                <code>controllers/userController.js</code> to handle fetching,
                updating, and deleting user data using Mongoose methods.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Applied Security to CRUD Endpoints
              </strong>
              <p className="text-gray-300">
                Protected user routes using both authentication and role-based
                access checks. For example, users could update only their own
                data, while only admins could delete users.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Tested APIs with Postman</strong>
              <p className="text-gray-300">
                Used Postman to thoroughly test the CRUD endpoints, validating
                both successful operations and error handling with invalid or
                missing JWTs.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 21st March — Frontend Integration & Review
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Integrated Backend with Frontend
              </strong>
              <p className="text-gray-300">
                Connected the Node.js backend to a React frontend using Axios
                for API calls. Managed JWTs by storing them in{" "}
                <code>localStorage</code> for session persistence.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Built Role-Based UI Logic
              </strong>
              <p className="text-gray-300">
                Displayed UI components conditionally based on user roles. For
                example, rendered admin dashboards only when the logged-in user
                had the "admin" role.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled Token Expiry and Errors
              </strong>
              <p className="text-gray-300">
                Implemented frontend checks for expired or invalid tokens.
                Redirected users to login and displayed meaningful messages on
                API failures.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Conducted Final Review</strong>
              <p className="text-gray-300">
                Reviewed the complete implementation of authentication, RBAC,
                and user CRUD in the Health project. Verified secure use of
                environment variables and prepared the app for production
                deployment.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week11;
