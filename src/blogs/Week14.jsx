/* eslint-disable react/no-unescaped-entities */
const Week14 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 7th April — Set Up ONDC IGM Issue Creation Flow
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Defined issue model and schema
              </strong>
              <p className="text-gray-300">
                Created a Sequelize model for storing ONDC IGM issues with
                fields like issueId, context, status, and payload snapshots.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Built initial <code>/issue</code> endpoint
              </strong>
              <p className="text-gray-300">
                Developed POST API to accept issue payloads following ONDC
                schema. Parsed context data and saved the issue entry in the
                database.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Validated and stored metadata
              </strong>
              <p className="text-gray-300">
                Extracted transactionId, action, and domain info from context
                for traceability. Persisted the full request payload as JSON.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 8th April — Handled <code>on_issue</code> Callback Logic
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Implemented <code>/on_issue</code> POST route
              </strong>
              <p className="text-gray-300">
                Created a separate route for handling the ONDC issue callback
                from the BAP/BPP. Linked the callback to the original issue by
                transaction ID.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Stored response payload</strong>
              <p className="text-gray-300">
                Saved the incoming on_issue response JSON in a new field on the
                issue model for future audits and resolution tracking.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Updated issue status</strong>
              <p className="text-gray-300">
                Changed the issue's state from 'open' to 'responded' and
                recorded response timestamps for SLA compliance.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 9th April — Developed Get Issue by ID API
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created <code>GET /issue/:id</code> route
              </strong>
              <p className="text-gray-300">
                Built an endpoint to fetch a single issue record by its internal
                ID or ONDC transaction ID. Fetched associated metadata and
                response payload.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Handled error scenarios</strong>
              <p className="text-gray-300">
                Managed cases where issues were not found, and returned
                appropriate HTTP 404 responses with context information.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Returned full JSON snapshot
              </strong>
              <p className="text-gray-300">
                Provided both the original issue request and the on_issue
                response in the API response for easy debugging and tracking.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 10th April — Built Get All Issues API
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Implemented <code>GET /issues</code> listing route
              </strong>
              <p className="text-gray-300">
                Added support for fetching all issues in paginated format with
                sorting and filtering by status, date range, or domain.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">Optimized query filters</strong>
              <p className="text-gray-300">
                Used Sequelize scopes and raw queries to optimize the
                performance of bulk issue retrieval for large datasets.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Tested filtering edge cases
              </strong>
              <p className="text-gray-300">
                Verified all combinations of status filters, time-based queries,
                and sorting logic to ensure robustness of the issue retrieval
                API.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 11th April — Final Testing and Logging Enhancements
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Wrote unit and integration tests
              </strong>
              <p className="text-gray-300">
                Covered test cases for issue creation, callbacks, single issue
                fetch, and all-issue listing. Validated DB consistency and field
                integrity.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Enabled structured logging
              </strong>
              <p className="text-gray-300">
                Integrated Winston logger to capture incoming payloads and API
                responses. Tagged logs with context for audit trails.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Reviewed end-to-end trace flow
              </strong>
              <p className="text-gray-300">
                Simulated full ONDC IGM cycle from /issue to /on_issue and
                verified all logs, DB entries, and API behavior.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week14;
