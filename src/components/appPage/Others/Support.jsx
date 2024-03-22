import React from "react";
import "../app.css";
function Support() {
  return (
    <>
      <article className="row support justify-content-center align-items-center mt-5 pt-5">
        <section className="col-lg-6">
          <div className="card">
            <header className=" card-header py-2 text-center bg-orange supportHead">
              <h5 className="m-0 font-weight-bold text-white">
                Customer Support
              </h5>
            </header>
            <main className="card-body">
              <span>
                Welcome to our customer support center. If you have any
                questions, concerns, or need assistance, feel free to reach out
                to us.
              </span>
              <span>Our support team is available to assist you with:</span>
              <ul>
                <li>Order tracking and status</li>
                <li>Delivery-related inquiries</li>
                <li>Product information and assistance</li>
                <li>General inquiries and support</li>
              </ul>
              <span>
                You can contact our customer support via email at{" "}
                <a href="mailto:support@example.com">support@example.com</a> or
                call us at <a href="tel:+123456789">+123 456 789</a>.
              </span>
              <br />
              <br />
              <span>
                Our support hours are Monday to Friday, 9:00 AM to 5:00 PM. We
                aim to respond to your inquiries as quickly as possible.
              </span>
            </main>
          </div>
        </section>
      </article>
    </>
  );
}

export default Support;
