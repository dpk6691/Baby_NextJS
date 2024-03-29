import React from "react";
import AdSection from "../../../components/HomeComponents/AfterBannerComponemts/AdSection";

const index = () => {
  return (
    <div className="w-11/12 m-auto pt-32 md:pt-28">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="bg-pink-50 p-10 rounded-3xl md:w-9/12">
          <h1 className="text-2xl mb-8 text-center">
            Advertise With FirstStep.Baby
          </h1>
          <p className="text-center mb-2">
            With over 10000+ page views a month, we provide advertisers a strong
            platform to reach a high profile and engaged user base in India as
            well as abroad. Our 90% visitors come from a niche background of
            parents all around the world and organic.
          </p>
          <p className="text-center mb-10">
            Our aim is not to charge you only money but drive you benefit.
          </p>

          <dl class="text-slate-900 text-center">
            <h2 className="text-2xl mb-8 text-center">
              For advertising Enquiries Contact:
            </h2>
            <div class="flex flex-col pb-3">
              <dt class="mb-1 text-slate-500">Email address</dt>
              <dd class="text-md font-semibold">
                <a
                  className="mx-2 text-md font-semibold no-underline hover:underline"
                  href="mailto:advertise@firststep.baby"
                >
                  advertise@firststep.baby
                </a>
              </dd>
            </div>
            <div class="flex flex-col py-3">
              <dt class="mb-1 text-slate-500">Address</dt>
              <dd class="text-md font-semibold">Bengaluru, India</dd>
            </div>
          </dl>
        </div>
        <div className="md:ml-5 mt-5 md:mt-0 bg-slate-50 rounded-3xl grid place-content-center md:w-1/4">
          <AdSection />
        </div>
      </div>
    </div>
  );
};

export default index;
