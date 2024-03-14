import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import BabyNameSearch from "./HomeBannerComponents/BabyNameSearch";

const FilterName = () => {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("filter");
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="w-full m-auto pt-14">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="md:w-full">
            <div className="text-sm text-center">
              <ul className="flex flex-wrap">
                <li className="basis-1/2">
                  <a
                    href="JavaScript:void(0)"
                    className={`w-full inline-block text-xl md:text-2xl rounded-t-3xl px-2 py-4 md:px-4 border-b-4 border-blue-200 ${
                      activeTab === "filter"
                        ? "border-blue-200 bg-blue-200"
                        : "hover:border-pink-300 bg-blue-50"
                    }`}
                    onClick={() => setActiveTab("filter")}
                  >
                    Search by Filter
                  </a>
                </li>
                <li className="basis-1/2">
                  <a
                    href="JavaScript:void(0)"
                    className={`w-full inline-block text-xl md:text-2xl rounded-t-3xl px-2 py-4 md:px-4 border-b-4 border-blue-200 ${
                      activeTab === "name"
                        ? "border-blue-200 bg-blue-200"
                        : "hover:border-pink-300 bg-blue-50 "
                    }`}
                    onClick={() => setActiveTab("name")}
                  >
                    Search by Name
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-pink-50 p-5 rounded-b-3xl border-t-4 border-8 border-blue-200 ">
              <div className={activeTab === "filter" ? "block" : "hidden"}>
                <BabyNameSearch />
              </div>
              <div className={activeTab === "name" ? "block" : "hidden"}>
                <div className="grid p-5 md:p-9 bg-white rounded-xl grid-cols-1 ">
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
                        id="default-search-filter"
                        className="rounded-xl text-xl block bg-pink-50 w-full py-3 pr-12 text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-0 focus:border-b-2"
                        placeholder="Search by name..."
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            router.push(
                              `/indian/baby-name/${searchValue.toLowerCase()}`
                            );
                          }
                        }}
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
        </div>
      </div>
    </>
  );
};

export default FilterName;
