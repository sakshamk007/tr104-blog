/* eslint-disable react/no-unescaped-entities */
const Week12 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Monday */}
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 24th March — Set Up Client CRUD
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">Defined the Client model</strong>
              <p className="text-gray-300">
                Created a Sequelize model for <code>Client</code> with fields
                such as name, email, phone, and status. Added migration and seed
                files accordingly.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Built Client CRUD routes</strong>
              <p className="text-gray-300">
                Developed POST, GET, PUT, and DELETE endpoints for clients.
                Integrated validation middleware for inputs and tested each
                route with Postman.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Connected controller logic
              </strong>
              <p className="text-gray-300">
                Mapped controller functions to handle business logic, like
                checking for existing clients before insert and soft-deleting
                client records.
              </p>
            </li>
          </ul>
        </section>

        {/* Tuesday */}
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 25th March — Implemented Project CRUD
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created the Project model
              </strong>
              <p className="text-gray-300">
                Defined a Sequelize model for <code>Project</code> with fields
                like title, description, deadline, status, and clientId. Linked
                the relationship to the Client model.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Added Project endpoints</strong>
              <p className="text-gray-300">
                Developed API routes to create, fetch, update, and delete
                projects. Included query filtering based on clientId and project
                status.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled validations and constraints
              </strong>
              <p className="text-gray-300">
                Added logic to ensure only valid clients could be assigned to
                projects and enforced deadlines not being in the past.
              </p>
            </li>
          </ul>
        </section>

        {/* Wednesday */}
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 26th March — Developed SendInvitation Entity
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Designed SendInvitation model
              </strong>
              <p className="text-gray-300">
                Created the model with fields like email, token, status, and
                expiry. Designed associations to projects for contextual
                tracking.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Implemented invitation creation
              </strong>
              <p className="text-gray-300">
                Built the POST endpoint to generate invitation tokens, associate
                them with a project, and store them in the database with an
                expiry.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Tested token structure and storage
              </strong>
              <p className="text-gray-300">
                Verified that tokens were unique, correctly hashed, and
                time-bound. Added utility functions to handle token creation and
                validation.
              </p>
            </li>
          </ul>
        </section>

        {/* Thursday */}
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 27th March — Completed CRUD for SendInvitation
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Added fetch & update endpoints
              </strong>
              <p className="text-gray-300">
                Developed GET and PUT routes for retrieving invitation details
                by token and updating invitation statuses such as "accepted",
                "expired", or "revoked".
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Built delete logic for invitations
              </strong>
              <p className="text-gray-300">
                Implemented DELETE route to allow removal of invitations either
                manually or based on expiry status. Ensured soft delete for
                audit tracking.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Verified access and restrictions
              </strong>
              <p className="text-gray-300">
                Ensured that only authenticated users could create and manage
                invitations. Handled edge cases such as repeated use of tokens
                and invalid email formats.
              </p>
            </li>
          </ul>
        </section>

        {/* Friday */}
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 28th March — Integrated and Tested All CRUD Modules
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Connected Client–Project–Invitation flow
              </strong>
              <p className="text-gray-300">
                Verified relational consistency between clients, their projects,
                and related invitations. Tested cascading logic and cleanup of
                dependent entities.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Wrote integration tests</strong>
              <p className="text-gray-300">
                Added integration tests using Supertest and Jest to simulate
                full workflows like creating a client, adding a project, and
                sending an invitation.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Documented all CRUD endpoints
              </strong>
              <p className="text-gray-300">
                Created Swagger-style documentation detailing each API route,
                parameters, validation rules, and example responses for clients,
                projects, and invitations.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week12;
