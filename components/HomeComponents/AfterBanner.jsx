import React from "react";
import AdSection from "./AfterBannerComponemts/AdSection";
import FilterName from "./FilterName";

const AfterBanner = () => {
  return (
    <div className="w-11/12 m-auto pt-5 md:pt-14">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="md:w-9/12">
          <h1 className="text-2xl mb-2">
            Largest Collection of<br></br>
            <span className="text-4xl font-black pb-6 text-blue-500">
              Baby <b className="text-pink-500">Names</b>
            </span>
          </h1>
          <p className="pt-2">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <FilterName />
        </div>
        <div className="ml-0 md:ml-5 mt-5 md:mt-0 bg-gray-50 rounded-3xl grid place-content-center md:w-1/4">
          <AdSection />
        </div>
      </div>
    </div>
  );
};

export default AfterBanner;
