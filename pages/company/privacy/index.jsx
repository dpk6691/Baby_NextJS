import React from "react";

const Privacy = () => {
  return (
    <>
      <section className="w-11/12 m-auto pt-32 md:pt-28">
        <div className="mx-auto format">
          <h1 className="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl dark:text-white">
            Privacy Policy
          </h1>
          <p className="mb-10 text-lg text-slate-600 dark:text-slate-400 lg:text-lg">
            Your privacy is important to us. This policy explains what
            information we collect when you visit First Step and how we use it.
          </p>
          <hr className="my-12 border-slate-200 dark:border-slate-800" />
          <p>
            <strong>What We Don't Collect:</strong>
          </p>
          <p>
            We don't ask you to create an account or fill out any forms.
            <br></br>
            We don't collect any personal information about you, such as your
            name, email address, or phone number.<br></br>
            We don't connect to any social media accounts.
          </p>
          <br></br>
          <p>
            <strong>What We Do Collect (Limited):</strong>
          </p>
          <p>
            <strong>Cookies:</strong> These are small files stored on your
            computer by our website. They help us understand how you use the
            site and improve your experience. For example, cookies can remember
            your preferences so you don't have to re-enter them each visit.
            <br></br>
            <strong>Log Data:</strong> Our servers may automatically collect
            some basic information, like your IP address (a unique number
            assigned to your device), browser type, and the pages you visit on
            First Step.
          </p>
          <br></br>
          <p>
            <strong>How We Use This Information:</strong>
          </p>
          <p>
            We use cookies and log data to analyze how people use First Step.
            This helps us improve the website, make it more user-friendly, and
            deliver relevant content.
            <br></br>
            We may use third-party cookies for things like website analytics and
            remarketing. Remarketing allows us to show you ads for First Step on
            other websites you visit.
          </p>
          <br></br>
          <p>
            <strong>Third-Party Disclosures:</strong>
          </p>
          <p>
            We use some third-party services on First Step. These services may
            collect their own data according to their privacy policies.
            <br></br>
            We recommend reviewing the privacy policies of any third-party
            services you encounter online, including those used by First Step.
          </p>
          <br></br>
          <p>
            <strong>Security:</strong>
          </p>
          <p>
            We take reasonable steps to protect any information we collect from
            unauthorized access or disclosure.
          </p>
          <br></br>
          <p>
            <strong>Changes to this Policy:</strong>
          </p>
          <p>
            We may update this privacy policy from time to time. We will post
            any changes on this page.
          </p>
          <br></br>

          <p>
            <strong>Contact Us:</strong>
          </p>
          <p>
            If you have any questions about this privacy policy, please contact
            us at
            <a
              className="mx-2 font-normal text-blue-500 no-underline hover:underline"
              href="mailto:aww@firststep.baby"
            >
              aww@firststep.baby
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Privacy;
