import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import style from './RefundConditions.module.css';

function RefundConditions() {
  return (
    <>
      <Header />
      <div className={style.refunds}>
        <h1>
          Refund and Cancellation Policy for Online Course Purchase on Code with
          Pratap Platform
        </h1>
        <ol>
          <li>Refund Policy</li>
          <ul>
            <p>
              Once the purchase of an online course is completed, all sales are
              final. We do not offer refunds, partial or full, for any reason,
              including but not limited to:
            </p>
            <li>Change of mind after purchase</li>
            <li>Inability to complete or attend the course</li>
            <li>
              Technical issues or difficulties that are outside our control
              (e.g., issues related to the user's computer, internet connection,
              or other external factors)
            </li>
            <p>
              Please ensure you have thoroughly reviewed the course content,
              system requirements, and other relevant information before making
              your purchase.
            </p>
          </ul>
          <li> Cancellation Policy</li>
          <ul>
            <p>
              Once your online course purchase is successful, cancellations are
              not allowed. This applies to both individual course purchases and
              bundled courses. By purchasing, you acknowledge that you have
              understood and agreed to this policy.
            </p>
          </ul>
          <li>Course Access</li>
          <ul>
            <p>
              Upon successful purchase, you will be granted access to the course
              materials as per the terms of the course. Access to the course is
              typically available immediately after the purchase is confirmed.
            </p>
          </ul>
          <li>Exceptions</li>
          <ul>
            <p>
              In very limited cases, exceptions may be made solely at our
              discretion, where a refund or cancellation may be granted in the
              case of:
            </p>
            <li>Duplicate purchase of the same course</li>
            <li>
              Serious technical failure on our side that prevents you from
              accessing the course material
            </li>
            <p>
              In such cases, any request for exceptions must be submitted in
              writing within 48 hours of purchase, along with appropriate
              documentation to support your claim.
            </p>
          </ul>
        </ol>
        <h2>
          By proceeding with your purchase, you agree to these terms and
          conditions.
        </h2>
      </div>
      <Footer />
    </>
  );
}

export default RefundConditions;
