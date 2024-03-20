import React from "react";
import AdSection from "../../../components/HomeComponents/AfterBannerComponemts/AdSection";

const index = () => {
  return (
    <div className="w-11/12 m-auto pt-32 md:pt-28">
      <div className="flex justify-between flex-col md:flex-row">
        <div className="bg-pink-50 p-10 rounded-3xl md:w-9/12">
          <h1 className="text-2xl mb-8 text-center">
            {" "}
            For advertising enquiries contact:
          </h1>
          <p className="text-center mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>

          <dl class="text-slate-900 divide-y text-center divide-slate-200">
            <div class="flex flex-col pb-3">
              <dt class="mb-1 text-slate-500">Email address</dt>
              <dd class="text-md font-semibold">advertise@firststep.baby</dd>
            </div>
            <div class="flex flex-col py-3">
              <dt class="mb-1 text-slate-500">Home address</dt>
              <dd class="text-md font-semibold">Bengaluru, India</dd>
            </div>
            <div class="flex flex-col pt-3">
              <dt class="mb-1 text-slate-500">Phone number</dt>
              <dd class="text-md font-semibold">
                +00 123 456 789 / +12 345 678
              </dd>
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
