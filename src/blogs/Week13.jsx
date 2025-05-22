const Week13 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 31st March — Implemented Worker Threads for Password Hashing
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Set up worker thread structure
              </strong>
              <p className="text-gray-300">
                Created a Node.js worker using the <code>worker_threads</code>{" "}
                module and moved bcrypt password hashing logic into it.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Refactored user registration process
              </strong>
              <p className="text-gray-300">
                Modified the registration controller to offload password hashing
                to the worker thread, improving main thread responsiveness.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Tested concurrency and thread performance
              </strong>
              <p className="text-gray-300">
                Simulated high user registration load and confirmed reduced
                blocking. Validated hashed passwords for correctness.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 1st April — Developed Excel Upload Utility for Users
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Added file upload endpoint
              </strong>
              <p className="text-gray-300">
                Created a backend route for uploading Excel files using{" "}
                <code>multer</code> and validated file type and size.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Parsed Excel file using xlsx library
              </strong>
              <p className="text-gray-300">
                Implemented logic to read and convert uploaded Excel content to
                JSON using <code>xlsx</code>. Validated each row for required
                fields.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled basic error reporting
              </strong>
              <p className="text-gray-300">
                Captured parsing errors, invalid data rows, and reported them
                with clear feedback in the API response.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 2nd April — Implemented Bulk Add of Users
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Wrote service for batch inserts
              </strong>
              <p className="text-gray-300">
                Created a batch user creation function that iterated through
                parsed Excel rows, hashed passwords in parallel using worker
                threads, and saved users.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Optimized worker usage in loops
              </strong>
              <p className="text-gray-300">
                Used a controlled worker pool to prevent spawning too many
                threads. Managed hash requests with a queue system.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Logged successful and failed entries
              </strong>
              <p className="text-gray-300">
                Saved logs of successful user creations and detailed errors for
                failed rows due to missing fields or duplicates.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 3rd April — Developed Bulk Edit Logic from Excel
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Extended parser to support edit mode
              </strong>
              <p className="text-gray-300">
                Added support to distinguish between add and edit operations
                using a mode flag in the Excel sheet. Checked for existing users
                before update.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled conditional password rehash
              </strong>
              <p className="text-gray-300">
                Rehashed the password only if a new one was provided. Skipped
                hashing if the field was left blank for existing users.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Updated records and logged changes
              </strong>
              <p className="text-gray-300">
                Performed updates in bulk using Sequelize transactions. Logged
                updated fields and ignored rows with no changes.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 4th April — Final Integration & Testing
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Integrated full upload flow
              </strong>
              <p className="text-gray-300">
                Connected Excel upload, parsing, worker hashing, and database
                insertion into one cohesive flow. Ensured that it supported both
                add and edit operations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Wrote unit and integration tests
              </strong>
              <p className="text-gray-300">
                Added tests to verify file upload, Excel parsing, row
                validation, worker hashing, and correct database output. Covered
                edge cases and failure scenarios.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Documented bulk upload API
              </strong>
              <p className="text-gray-300">
                Finalized documentation for the bulk upload API including
                supported Excel formats, validation rules, response structure,
                and known limitations.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week13;
