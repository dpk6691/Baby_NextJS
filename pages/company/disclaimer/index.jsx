import React from "react";

const Disclaimer = () => {
  return (
    <>
      <section className="w-11/12 m-auto pt-32 md:pt-28">
        <div class="mx-auto format">
          <h1 class="mb-6 text-3xl font-bold text-slate-900 lg:text-4xl dark:text-white">
            Disclaimer
          </h1>
          <p class="mb-10 text-lg text-slate-600 dark:text-slate-400 lg:text-lg">
            Your privacy is important to us. This policy explains what
            information we collect when you visit First Step and how we use it.
          </p>
          <hr class="my-12 border-slate-200 dark:border-slate-800" />
          <p>
            <strong>For informational purposes only:</strong> The information on
            First Step is intended for general informational purposes only and
            should not be taken as professional medical advice.
          </p>
          <br></br>
          <p>
            <strong> Accuracy and completeness:</strong> While we make
            reasonable efforts to ensure the information on this website is
            accurate and complete, we cannot guarantee it.
          </p>
          <br></br>
          <p>
            <strong>External links:</strong> First Step may contain links to
            external websites. We are not responsible for the content or privacy
            practices of these websites.
          </p>
          <br></br>
          <p>
            <strong> Currency of information:</strong> We strive to keep the
            information on First Step up-to-date. We update the website
            regularly, and the last update was made on{" "}
            <strong>[15 days before date]</strong>.
          </p>
          <br></br>
          <p>
            <strong>User reliance:</strong> Any reliance you place on the
            information on this website is strictly at your own risk. We
            disclaim all liability and responsibility arising from any use or
            misuse of this information.
          </p>
          <br></br>
          <p>
            <strong>
              By using this website, you agree to the terms of this disclaimer.
            </strong>
            <br></br>
            This disclaimer uses clear language to inform users that the
            information on First Step is for general guidance and shouldn't
            replace professional medical advice. It also highlights your
            responsibility for how you use the information and limits your
            liability.
          </p>
        </div>
      </section>
    </>
  );
};

export default Disclaimer;
