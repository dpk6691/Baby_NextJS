import React from "react";
import AdSection from "./AfterBannerComponemts/AdSection";
import FilterName from "./FilterName";

const AfterBanner = () => {
  return (
    <div className="w-11/12 m-auto pt-5 md:pt-14">
      <div className="flex flex-col lg:flex-row justify-between">
        <div className="lg:w-9/12">
          <h1 className="text-2xl mb-2">
            Baby Name<br></br>
            <span className="text-4xl font-black pb-6 text-blue-500">
              Collection<b className="text-pink-500"> for Newborn</b>
            </span>
          </h1>
          <p className="pt-2">
            Choosing the best from the sea of baby boy names or girl names is
            one of the exciting steps you take for your little one. The task is
            no less difficult as you have many beautiful Indian names to choose
            from. You can find a number of unique baby names if you wish to
            continue with tradition, or something unique.<br></br>
            <br></br>
            We can provide you with a baby name list to help you with such an
            important decision. You can consider the latest baby girl or boy
            names, along with the description and meaning to gift your little
            munchkin with the perfect name.
          </p>
          <FilterName />
        </div>
        <div className="md:ml-5 mt-3 md:mt-0 p-5 bg-slate-50 rounded-3xl grid justify-items-stretch w-full md:w-1/4">
          <AdSection />
        </div>
      </div>
    </div>
  );
};

export default AfterBanner;
