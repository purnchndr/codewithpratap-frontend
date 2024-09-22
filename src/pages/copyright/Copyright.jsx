import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';

import style from './Copyright.module.css';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <>
      <Header />
      <div className={style.copyright}>
        <h1>Copyright Policy for Code with Pratap</h1>
        <ol>
          <li>Ownership of Content</li>
          <p>
            All content provided on the Code with Pratap platform, including but
            not limited to:
          </p>
          <ul>
            <li>
              Online courses (videos, text, images, and supplementary materials)
            </li>
            <li>Website design and layout</li>
            <li>Logos, trademarks, and branding</li>
            <li>Any other digital products or services</li>
            <p>
              is the exclusive intellectual property of Code with Pratap or its
              content creators. This content is protected under applicable
              copyright laws and international treaties. Unauthorized use,
              reproduction, or distribution of any content is strictly
              prohibited.
            </p>
            <li>User License for Course Content</li>
            <p>
              Upon purchasing a course from Code with Pratap, you are granted a
              limited, non-transferable, non-exclusive license to access the
              course materials for personal use. This license does not transfer
              any ownership rights of the content to you, and it is subject to
              the following restrictions:
            </p>
            <li>
              <strong>Personal Use Only:</strong> Course materials are for your
              individual use and may not be shared, redistributed, or resold to
              third parties.
            </li>
            <li>
              <strong>No Reproduction or Distribution:</strong> You may not
              copy, distribute, display, broadcast, perform, modify, or create
              derivative works based on the course content without prior written
              consent from Code with Pratap or the respective copyright holder.
            </li>
            <li>
              <strong>No Commercial Use:</strong> Course content may not be used
              for any commercial purposes, including but not limited to teaching
              others, conducting workshops, or offering consulting services,
              unless expressly permitted by <strong>Code with Pratap</strong>.
            </li>
          </ul>
          <li>Content Submission by Users</li>
          <ul>
            <p>
              If you upload or submit any content (such as comments, feedback,
              or project files) to Code with Pratap, you affirm that you either
              own the rights to the content or have been granted the necessary
              permissions to share it. By submitting content, you grant Code
              with Pratap a worldwide, non-exclusive, royalty-free license to
              use, reproduce, display, distribute, and modify the content for
              platform-related purposes.
            </p>
          </ul>
          <li>Copyright Infringement</li>
          <ul>
            <p>
              <strong>Code with Pratap</strong> respects the intellectual
              property rights of others and expects the same from its users. If
              you believe that your copyrighted material has been infringed on
              the platform, you may file a written complaint (DMCA takedown
              notice) with the following information:
            </p>
            <li>
              A description of the copyrighted work that you claim has been
              infringed
            </li>
            <li>
              A description of the copyrighted work that you claim has been
              infringedA description of the material on our platform that you
              believe infringes your copyright, with sufficient detail to allow
              us to locate it
            </li>
            <li>
              Your contact information, including your name, address, email, and
              phone number
            </li>
            <li>
              A statement that you have a good-faith belief that the use of the
              copyrighted material is not authorized by the copyright owner, its
              agent, or the law
            </li>
            <li>
              A statement, under penalty of perjury, that the information in the
              complaint is accurate and that you are authorized to act on behalf
              of the copyright owner
            </li>
            <p>
              You may send your copyright infringement notice to: Email:{' '}
              <a href='mailto:codewithpratap@gmail.com'>
                codewithpratap@gmail.com
              </a>{' '}
              Address: "62B, Bodarwar, Kushinagar, Uttar Pradesh, India, 274149"
              Upon receipt of a valid DMCA notice, Code with Pratap will
              promptly remove or disable access to the infringing material and
              notify the user who posted the content.
            </p>
          </ul>
          <li>Consequences of Copyright Violation</li>
          <ul>
            <p>
              Violation of this copyright policy, including unauthorized use or
              distribution of course materials, may result in:
            </p>
            <li>
              Termination of your account and access to the platform without
              refund
            </li>
            <li>
              Legal action, including claims for damages and injunctive relief
            </li>
            <li>Reporting of the violation to appropriate legal authorities</li>
          </ul>
          <li>Changes to Copyright Policy</li>
          <ul>
            <p>
              <strong>Code with Pratap</strong> reserves the right to modify or
              update this copyright policy at any time. Any changes will be
              effective immediately upon posting, and your continued use of the
              platform constitutes your acceptance of the new terms.
            </p>
          </ul>
        </ol>
        <h2>
          By accessing or using the Code with Pratap platform, you acknowledge
          and agree to comply with this copyright policy.
        </h2>
      </div>
      <Footer />
    </>
  );
}

export default Copyright;
