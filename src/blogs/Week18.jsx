/* eslint-disable react/no-unescaped-entities */
const Week18 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 5th May — Documented isCancellable Logic and Payload
            Requirements
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Defined purpose of isCancellable utility
              </strong>
              <p className="text-gray-300">
                Explained the utility's role in determining whether an order can
                be cancelled based on item-level flags.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Analyzed on_cancel payload structure
              </strong>
              <p className="text-gray-300">
                Reviewed item array data to identify necessary fields like
                is_cancellable and item status.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Outlined decision rules and edge cases
              </strong>
              <p className="text-gray-300">
                Clarified that if any single item is non-cancellable, the entire
                order is marked as not cancellable.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 6th May — Developed isCancellable Function and Initial
            Logic
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Implemented item-level check logic
              </strong>
              <p className="text-gray-300">
                Iterated over the item list to determine if all items are
                cancellable using strict boolean comparisons.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled empty or missing item lists
              </strong>
              <p className="text-gray-300">
                Added validation to handle missing or malformed payloads by
                returning null or default values.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Built modular structure for reuse
              </strong>
              <p className="text-gray-300">
                Separated core logic from surrounding integration points to
                enable isolated testing and reuse.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 7th May — Added Input Validation and Fail-Safe Defaults
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Validated item structure within payload
              </strong>
              <p className="text-gray-300">
                Ensured each item contained the is_cancellable flag before
                proceeding with evaluation.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled non-boolean values gracefully
              </strong>
              <p className="text-gray-300">
                Coerced or rejected unexpected values like strings or nulls to
                prevent unpredictable behavior.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Set default return values for invalid input
              </strong>
              <p className="text-gray-300">
                Returned false for obviously corrupted or missing data to ensure
                system stability.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 8th May — Developed Tests and Simulated Item Scenarios
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Wrote tests for all item combinations
              </strong>
              <p className="text-gray-300">
                Tested all-items-cancellable, some-items-cancellable, and
                none-cancellable variations.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Tested edge cases with malformed items
              </strong>
              <p className="text-gray-300">
                Simulated payloads with missing fields, wrong types, and empty
                lists to confirm fail-safes worked.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Validated accuracy using assertions
              </strong>
              <p className="text-gray-300">
                Ensured isCancellable returned the expected boolean outcomes in
                every test scenario.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 9th May — QA Testing, Final Updates and Approval
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Submitted code for QA review
              </strong>
              <p className="text-gray-300">
                Delivered utility along with test results and documentation for
                testing by QA engineers.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Addressed feedback on edge behavior
              </strong>
              <p className="text-gray-300">
                Fixed minor issues around unexpected input formats and added
                explanatory comments to the logic.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                QA signed off utility for production
              </strong>
              <p className="text-gray-300">
                Function passed all manual and automated tests and was marked
                ready for deployment.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week18;
