const Week17 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 28th April — Drafted isETAbreached Documentation & Payload
            Analysis
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Documented isETAbreached functionality
              </strong>
              <p className="text-gray-300">
                Outlined the purpose and workflow of the isETAbreached check,
                including input expectations and output conditions.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Analyzed on_cancel payload structure
              </strong>
              <p className="text-gray-300">
                Reviewed payload schema to identify required fields for
                evaluating whether the order ETA was violated at the time of
                cancellation.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Outlined edge cases and invalid input scenarios
              </strong>
              <p className="text-gray-300">
                Compiled examples of incomplete, malformed, or ambiguous
                payloads to guide validation logic development.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 29th April — Developed isETAbreached Utility Logic
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Wrote initial isETAbreached function
              </strong>
              <p className="text-gray-300">
                Created core logic to determine if the current timestamp exceeds
                the provided ETA, based on parsed input payload.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Added error handling and logging
              </strong>
              <p className="text-gray-300">
                Implemented checks for missing fields and invalid timestamps,
                logging meaningful error messages for debugging.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Modularized utility for reuse
              </strong>
              <p className="text-gray-300">
                Structured the function for independent testing and potential
                use across cancellation and audit flows.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 30th April — Added Validation Rules and Edge Case
            Handling
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Implemented strict payload validation
              </strong>
              <p className="text-gray-300">
                Validated presence and format of fields like ETA timestamp,
                order ID, and cancellation time.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled time zone differences
              </strong>
              <p className="text-gray-300">
                Accounted for varying time formats and ensured consistent
                comparison using UTC.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Updated function to handle missing ETA gracefully
              </strong>
              <p className="text-gray-300">
                Added fallback logic to bypass breach check or return null when
                ETA is not provided.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 1st May — Wrote Unit Tests and Edge Case Coverage
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Created test suite for isETAbreached
              </strong>
              <p className="text-gray-300">
                Developed multiple test cases to verify logic correctness under
                normal, edge, and invalid conditions.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Used mock payloads with different time formats
              </strong>
              <p className="text-gray-300">
                Ensured function could correctly interpret and compare
                timestamps across ISO, Unix, and string formats.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Validated outputs using assertion-based testing
              </strong>
              <p className="text-gray-300">
                Confirmed boolean outputs (true/false) based on test scenarios,
                ensuring predictability and clarity.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 2nd May — QA Review, Fixes & Final Approval
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Shared module with QA for testing
              </strong>
              <p className="text-gray-300">
                Delivered code for quality assurance review, along with test
                results and usage documentation.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Addressed QA feedback and edge case suggestions
              </strong>
              <p className="text-gray-300">
                Fixed bugs related to missing timestamps and improved clarity of
                log messages and error paths.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Received final QA approval
              </strong>
              <p className="text-gray-300">
                Passed all functional and edge case scenarios, confirming the
                isETAbreached utility was production-ready.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week17;
