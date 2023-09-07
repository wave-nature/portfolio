function RefundPolicy() {
  return (
    <main className="mt-16 md:px-28 px-4 space-y-2">
      <h1 className="text-xl font-bold">Refund Policy</h1>
      <p>
        At GigPlaced, we strive to provide excellent services to our clients. In
        the event that you are not satisfied with our services or there is a
        need for a refund, please review our refund policy below.
      </p>

      <h2 className="text-lg font-semibold">1. Eligibility for Refund</h2>
      <p>We offer refunds under the following conditions:</p>
      <ul className="list-decimal ml-20">
        <li>
          Project Cancellation: If a project is canceled before work has
          commenced, a full refund may be issued.
        </li>
        <li>
          Unsatisfactory Service: If you are not satisfied with the quality of
          our services, please contact us within [X days] of project completion
          to discuss your concerns and eligibility for a partial or full refund.
        </li>
        <li>
          Payment Error: If there has been an overcharge or payment error,
          please notify us immediately for resolution.
        </li>
      </ul>

      <h2 className="text-lg font-semibold">2. Refund Process</h2>
      <p>
        If you meet the eligibility criteria for a refund, please follow these
        steps:
      </p>
      <ol className="list-decimal ml-20">
        <li>
          Contact Us: Reach out to us at{" "}
          <a href="mailto:gigplaced@gmail.com">gigplaced@gmail.com</a> to
          discuss your refund request.
        </li>
        <li>
          Provide Details: Include project details, payment information, and the
          reason for the refund request.
        </li>
        <li>
          Review and Resolution: We will review your request and aim to provide
          a resolution within [X business days].
        </li>
        <li>
          Refund Issuance: If a refund is approved, it will be processed using
          the original payment method.
        </li>
      </ol>

      <h2 className="text-lg font-semibold">3. Non-Refundable Situations</h2>
      <p>Refunds are not available under the following circumstances:</p>
      <ul>
        <li>
          Project Completion: Once a project is completed and delivered as per
          the agreed-upon scope, refunds will not be issued.
        </li>
        <li>
          Change of Mind: Refunds will not be granted if the request is based on
          a change of mind or preferences after project completion.
        </li>
        <li>
          Third-Party Costs: Any third-party costs incurred for the project are
          non-refundable.
        </li>
      </ul>

      <h2 className="text-lg font-semibold">4. Contact Us</h2>
      <p>
        If you have questions, concerns, or need to request a refund, please
        contact us at{" "}
        <a href="mailto:gigplaced@gmail.com">gigplaced@gmail.com</a>. We are
        committed to providing a fair and transparent refund process to our
        valued clients.
      </p>

      <p>Thank you for choosing GigPlaced for your project needs.</p>
    </main>
  );
}

export default RefundPolicy;
