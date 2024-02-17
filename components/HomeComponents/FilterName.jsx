import React, { useState } from "react";
import BabyNameSearch from "./HomeBannerComponents/BabyNameSearch";

const FilterName = () => {
  const [activeTab, setActiveTab] = useState("filter");

  return (
    <div className="w-11/12 m-auto pt-20">
      <div className="text-sm font-medium text-center">
        <ul className="flex flex-wrap">
          <li className="basis-1/2">
            <a
              href="JavaScript:void(0)"
              className={`w-full inline-block text-xl rounded-t-3xl p-4 border-b-2 border-transparent hover:text-gray-700 hover:border-pink-500 ${
                activeTab === "filter"
                  ? "text-blue-500 border-blue-500 bg-blue-50 hover:text-blue-500 hover:border-blue-500"
                  : ""
              }`}
              onClick={() => setActiveTab("filter")}
            >
              Search by Filter
            </a>
          </li>
          <li className="basis-1/2">
            <a
              href="JavaScript:void(0)"
              className={`w-full inline-block text-xl rounded-t-3xl p-4 border-b-2  border-transparent hover:text-gray-700 hover:border-pink-500 ${
                activeTab === "name"
                  ? "text-blue-500 border-blue-500 bg-blue-50 hover:text-blue-500 hover:border-blue-500"
                  : ""
              }`}
              onClick={() => setActiveTab("name")}
            >
              Search by Name
            </a>
          </li>
        </ul>
      </div>
      <div className="bg-blue-50 p-10 rounded-b-3xl">
        <div className={activeTab === "filter" ? "block" : "hidden"}>
          <BabyNameSearch />
        </div>
        <div className={activeTab === "name" ? "block" : "hidden"}>Name</div>
      </div>
    </div>
  );
};

export default FilterName;
