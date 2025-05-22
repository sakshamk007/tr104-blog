const Week15 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 14th April — Implemented getAllIssueExcel Export Feature
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created route <code>GET /issues/export</code>
              </strong>
              <p className="text-gray-300">
                Developed a route to generate an Excel file containing all ONDC
                issue records with relevant metadata like issueId, status,
                transactionId, and timestamps.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Used ExcelJS to build export
              </strong>
              <p className="text-gray-300">
                Generated dynamic workbooks using ExcelJS with formatted headers
                and cell styles. Included both issue and on_issue snapshot
                fields.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Streamed Excel as a download
              </strong>
              <p className="text-gray-300">
                Sent Excel file as a stream with appropriate headers and content
                disposition for easy download via browser or Postman.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 15th April — Integrated Protocol Layer Connection
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Connected to ONDC gateway endpoints
              </strong>
              <p className="text-gray-300">
                Wired up POST requests from the backend to ONDC BAP/BPP protocol
                endpoints. Used Axios to make signed HTTP requests to external
                services.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Created protocolRequest utility
              </strong>
              <p className="text-gray-300">
                Built a reusable helper function to attach headers like
                authorization, X-Gateway-Id, and generate cryptographic
                signatures as per ONDC specs.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Validated response and fallback flow
              </strong>
              <p className="text-gray-300">
                Handled gateway failures gracefully and logged both protocol
                request and response payloads. Ensured full traceability.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 16th April — Built Mock Server Logging Layer
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Set up mock endpoints for testing
              </strong>
              <p className="text-gray-300">
                Created internal mock BAP and BPP endpoints to simulate IGM
                issue and callback flows. Used Express routes to accept and
                store simulated traffic.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Logged all mock interactions
              </strong>
              <p className="text-gray-300">
                Stored incoming requests and outgoing responses from mock
                endpoints into a dedicated logs table in the database.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Captured headers and bodies
              </strong>
              <p className="text-gray-300">
                Logged full HTTP headers and payloads for each interaction,
                enabling full visibility for protocol debugging and sandbox
                testing.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 17th April — Enhanced Audit and Query Tools
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Added mock log viewer API
              </strong>
              <p className="text-gray-300">
                Created a paginated API route to retrieve mock server logs by
                date, action, or source. Returned structured JSON for
                integration with audit tools.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Linked logs with issue references
              </strong>
              <p className="text-gray-300">
                Associated mock server logs with actual issueId or transactionId
                for easy cross-referencing with main issue flow.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Implemented log expiration policy
              </strong>
              <p className="text-gray-300">
                Set up a cron-based cleanup job to archive and purge logs older
                than 30 days, ensuring lightweight database operation.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 18th April — Final Validation and Issue Replay Utility
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Tested protocol round-trip via mock
              </strong>
              <p className="text-gray-300">
                Simulated end-to-end issue and callback using mock endpoints,
                and verified log creation, Excel export, and DB linkage.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Developed issue replay tool
              </strong>
              <p className="text-gray-300">
                Built a utility to replay any logged issue payload to a target
                endpoint for debugging and reprocessing purposes.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Finalized tests and documentation
              </strong>
              <p className="text-gray-300">
                Completed backend tests for all new routes and documented
                expected Excel columns, mock response formats, and error codes.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week15;
