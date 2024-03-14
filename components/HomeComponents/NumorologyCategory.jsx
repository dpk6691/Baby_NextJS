import React, { useState } from "react";
import CategoriesList from "./CategoriesList";
import Link from "next/link";
import { useRouter } from "next/router";

const NumorologyCategory = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  return (
    <div className="text-center w-11/12 m-auto pt-14 md:pt-24">
      <span className="grid gap-10 lg:grid-cols-3 place-items-center h-full w-full rounded-3xl">
        <div className="col-span-1 ">
          <h1 className="text-2xl mb-2">Name Numerology Calculator </h1>
          <p className="pt-2 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <div className="mt-5 m-auto relative">
            <input
              type="search"
              id="default-search-filter"
              className="rounded-xl text-xl block bg-pink-50 w-full py-3 pr-12 text-gray-900 border-0 border-b-2 border-blue-300 focus:ring-0 focus:border-0 focus:border-b-2"
              placeholder="Enter a name..."
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  router.push(`/indian/baby-name/${searchValue.toLowerCase()}`);
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
        <div className="col-span-1 w-full lg:col-span-2">
          <CategoriesList />
        </div>
      </span>
    </div>
  );
};

export default NumorologyCategory;
