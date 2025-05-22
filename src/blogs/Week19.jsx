const Week19 = () => {
  return (
    <div className="text-gray-800">
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Monday, 12th May — Planned Refund Structure Across Scenarios
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Mapped refund conditions for cancellation and return
              </strong>
              <p className="text-gray-300">
                Identified refund logic paths for seller and buyer actions —
                both full and partial — across cancellation and return flows.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Defined treatment for coupon and discount adjustments
              </strong>
              <p className="text-gray-300">
                Decided rules on prorating discounts and reversing
                platform-funded coupons only on returned/cancelled items.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Established refund exclusions for platform fees
              </strong>
              <p className="text-gray-300">
                Outlined that platform fees (e.g., convenience or service fees)
                will not be refunded under most return/cancellation scenarios.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Tuesday, 13th May — Implemented Refund Logic for Seller
            Cancellations
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Built full refund flow for full order cancellation
              </strong>
              <p className="text-gray-300">
                Ensured full refund amount includes item price, applied
                discounts, and reversed coupon value if fully unused.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled partial refund for item-level cancellations
              </strong>
              <p className="text-gray-300">
                Prorated coupon and discount only for cancelled items; untouched
                items retained their share of applied offers.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Excluded platform fees from refund
              </strong>
              <p className="text-gray-300">
                Logic ensured platform-level fees were deducted from the final
                refundable amount unless business rules allowed exception.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Wednesday, 14th May — Added Return Handling for Seller-Initiated
            Returns
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Implemented full return refund logic
              </strong>
              <p className="text-gray-300">
                Triggered complete refund including proportional coupon and
                discount values where applicable.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled partial return refund by seller
              </strong>
              <p className="text-gray-300">
                Applied item-level proration and removed refund eligibility for
                already consumed platform coupons on fulfilled items.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Adjusted refund for platform fee exclusions
              </strong>
              <p className="text-gray-300">
                Added logic to ensure fixed platform charges were not mistakenly
                refunded during seller-side returns.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Thursday, 15th May — Developed Buyer Return Refund Handling
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Wrote logic for buyer-initiated full return
              </strong>
              <p className="text-gray-300">
                Processed complete refund amount minus platform fees; adjusted
                coupon amount based on business refund policy.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Handled buyer partial return case
              </strong>
              <p className="text-gray-300">
                Refunded value of returned items with split discount and coupon
                rollback calculations, preserving rest of the order.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Configured refund triggers for wallet or original method
              </strong>
              <p className="text-gray-300">
                Finalized refund routing rules depending on order origin (e.g.,
                COD, wallet, card) and buyer preference.
              </p>
            </li>
          </ul>
        </section>

        <section className="p-6 rounded-2xl shadow-md">
          <h2 className="text-2xl font-semibold text-green-600 mb-4">
            Friday, 16th May — Testing Refund Scenarios and QA Feedback
          </h2>
          <ul className="space-y-4">
            <li>
              <strong className="text-sky-400">
                Wrote test cases for all refund paths
              </strong>
              <p className="text-gray-300">
                Created unit and integration tests to validate refund accuracy
                across all six cases with varying payloads.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Simulated discount-heavy and coupon-heavy scenarios
              </strong>
              <p className="text-gray-300">
                Verified correct refund behavior when orders had deep discounts
                or platform coupons influencing price heavily.
              </p>
            </li>
            <li>
              <strong className="text-sky-400">
                Addressed QA suggestions and finalized logic
              </strong>
              <p className="text-gray-300">
                Fixed refund rounding issues, improved breakdown clarity, and
                got QA approval for production readiness.
              </p>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Week19;
