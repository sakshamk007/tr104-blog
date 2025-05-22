/* eslint-disable react/no-unescaped-entities */
const Week20 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 19th May — Outlined Refund Strategy for Buyer-Initiated
            Cancellations
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Defined refund behaviors for ETA vs Non-ETA breach
              </strong>
              <p className="text-gray-300">
                Separated refund logic paths for cancellations triggered due to
                breached ETAs versus user-initiated changes without breach.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Established rules for coupon and discount rollbacks
              </strong>
              <p className="text-gray-300">
                Mapped logic to reverse only the portion of coupon and discount
                that applied to cancelled items, with special rules for
                full-order refund cases.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Clarified treatment of platform fees
              </strong>
              <p className="text-gray-300">
                Marked platform fees as refundable only under ETA breach
                scenarios; otherwise excluded by default.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 20th May — Implemented Refund Logic for Full Cancellation
            due to ETA Breach
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Processed full refund including coupon and platform fees
              </strong>
              <p className="text-gray-300">
                Refunded complete order value, reversed full coupon amount, and
                included platform fee refund as breach was from seller's side.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Added breach check utility integration
              </strong>
              <p className="text-gray-300">
                Tied refund trigger to isETAbreached utility to ensure refunds
                are only classified as ETA-breach-based when eligible.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Wrote test cases for ETA-breach full cancellations
              </strong>
              <p className="text-gray-300">
                Created refund validation flows for cases where 100% of the
                order was undelivered due to missed ETA.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 21st May — Handled Partial Cancellations due to ETA
            Breach
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Computed partial refund with prorated discounts and coupon
              </strong>
              <p className="text-gray-300">
                Refunded amount for cancelled items and recalculated remaining
                coupon/discount shares on delivered ones.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Platform fees partially refunded when applicable
              </strong>
              <p className="text-gray-300">
                Applied proportional refund of fixed fees if cancellation
                involved a major chunk of the order.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Validated refund correctness via automated test cases
              </strong>
              <p className="text-gray-300">
                Verified amounts against item cost, coupon value, and breached
                delivery timeline to confirm eligibility.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 22nd May — Applied Logic for Full Cancellation without ETA
            Breach
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Refunded item value and eligible coupon portions only
              </strong>
              <p className="text-gray-300">
                Reversed product and discount value, but withheld platform fees
                as breach had not occurred from seller's end.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled wallet and coupon reversals accordingly
              </strong>
              <p className="text-gray-300">
                Refunded wallet credits where applicable and re-issued coupon if
                unused; otherwise marked it as consumed.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Excluded fees from refund and updated documentation
              </strong>
              <p className="text-gray-300">
                Documented all non-refundable cases in technical notes and
                flagged for customer support awareness.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 23rd May — Finalized Refunds for Buyer Partial Cancellations
            (Non-ETA Breach)
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Prorated refund for cancelled items
              </strong>
              <p className="text-gray-300">
                Applied item-level refund with partial coupon/discount rollback
                based on cancelled SKU value.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Retained platform fees and updated refund breakdown
              </strong>
              <p className="text-gray-300">
                Ensured platform-level charges remained untouched and reflected
                in refund summary shown to user.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Ran QA flows and closed refund testing
              </strong>
              <p className="text-gray-300">
                Completed end-to-end refund tests with mock cancellations,
                confirmed results with QA, and marked ready for production.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week20;
