import React, { useState } from "react";
import Link from "next/link";
import BabyNameSearch from "./HomeBannerComponents/BabyNameSearch";
import AdSection from "./AfterBannerComponemts/AdSection";

const FilterName = () => {
  const [activeTab, setActiveTab] = useState("filter");
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="w-11/12 m-auto pt-14">
        <div className="flex justify-between">
          <div className="w-9/12">
            <div className="text-sm text-center">
              <ul className="flex flex-wrap">
                <li className="basis-1/2">
                  <a
                    href="JavaScript:void(0)"
                    className={`w-full bg-blue-50 inline-block text-2xl rounded-t-3xl p-4 border-b-4 border-blue-200 ${
                      activeTab === "filter"
                        ? "border-blue-800 bg-blue-200"
                        : "hover:border-pink-300"
                    }`}
                    onClick={() => setActiveTab("filter")}
                  >
                    Search by Filter
                  </a>
                </li>
                <li className="basis-1/2">
                  <a
                    href="JavaScript:void(0)"
                    className={`w-full bg-blue-50 inline-block text-2xl rounded-t-3xl p-4 border-b-4 border-blue-200 ${
                      activeTab === "name"
                        ? "border-blue-800 bg-blue-200"
                        : "hover:border-pink-300"
                    }`}
                    onClick={() => setActiveTab("name")}
                  >
                    Search by Name
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-blue-50 p-5 rounded-b-3xl border-t-4 border-8 border-blue-200 ">
              <div className={activeTab === "filter" ? "block" : "hidden"}>
                <BabyNameSearch />
              </div>
              <div className={activeTab === "name" ? "block" : "hidden"}>
                <div className="grid p-9 bg-white rounded-xl grid-cols-1 ">
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </p>
                  <p className="mt-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry.
                  </p>
                  <div className="flex w-full md:order-2">
                    <div className="w-96 mt-5 relative">
                      <input
                        type="search"
                        id="default-search"
                        className="rounded-xl text-xl block bg-pink-50 w-full py-3 pr-12 text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-0 focus:border-b-2"
                        placeholder="Name..."
                        required
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                      />
                      <Link
                        className="absolute p-2 bottom-2 right-2"
                        href={`/indian/baby-name/${searchValue.toLowerCase()}`}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6 hover:stroke-pink-500 stroke-blue-500"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                          />
                        </svg>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="ml-5 bg-gray-50 rounded-3xl grid place-content-center w-1/4">
            <AdSection />
          </div>
        </div>
      </div>

      <div className="w-11/12 m-auto pt-14">
        <div class="bg-gray-50 rounded-3xl grid place-content-center w-full">
          <div class="text-xl min-h-20 grid place-content-center font-semibold">
            <p>Advertise with us</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterName;
