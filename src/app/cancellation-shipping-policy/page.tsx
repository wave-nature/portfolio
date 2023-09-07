function CancellationPolicy() {
  return (
    <main className="mt-16 md:px-28 px-4 space-y-2">
      <h1 className="text-xl font-bold">Cancellation Policy</h1>
      <p>
        At GigPlaced, we understand that circumstances may change, and you may
        need to cancel a project. Please review our cancellation policy below
        for guidance on canceling a project.
      </p>

      <h2 className="text-lg font-semibold">1. Project Cancellation</h2>
      <p>If you wish to cancel a project, please follow these guidelines:</p>
      <ol className="list-decimal ml-20">
        <li>
          Contact Us: Reach out to us at{" "}
          <a href="mailto:gigplaced@gmail.com">gigplaced@gmail.com</a> to
          initiate the cancellation process.
        </li>
        <li>
          Provide Details: Include project details, the reason for cancellation,
          and any relevant information.
        </li>
        <li>
          Cancellation Approval: We will review your request and communicate the
          approval or any applicable charges for work completed up to the point
          of cancellation.
        </li>
        <li>
          Refund (if applicable): If eligible for a refund, it will be processed
          as per our <a href="/refund-policy">Refund Policy</a>.
        </li>
      </ol>

      <h2 className="text-lg font-semibold">2. Charges for Work Done</h2>
      <p>
        If work has been completed on your project before cancellation, charges
        for the completed work may apply. These charges will be communicated to
        you during the cancellation process.
      </p>

      <h2 className="text-lg font-semibold">3. Non-Refundable Situations</h2>
      <p>Cancellations may not be possible under certain circumstances:</p>
      <ul className="list-decimal ml-20">
        <li>
          Project Completion: If a project is already completed and delivered as
          per the agreed-upon scope, cancellation may not be possible.
        </li>
        <li>
          Third-Party Costs: Any third-party costs incurred for the project are
          non-refundable.
        </li>
      </ul>

      <h2 className="text-lg font-semibold">4. Contact Us</h2>
      <p>
        If you have questions, concerns, or need to request a cancellation,
        please contact us at{" "}
        <a href="mailto:gigplaced@gmail.com">gigplaced@gmail.com</a>. We aim to
        provide a fair and transparent cancellation process for our clients.
      </p>

      <p>Thank you for choosing GigPlaced for your project needs.</p>
    </main>
  );
}

export default CancellationPolicy;
