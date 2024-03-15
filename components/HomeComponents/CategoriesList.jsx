import React, { useMemo } from "react";
import India from "./../../pages/api/India";
import { useRouter } from "next/router";

const CategoriesList = () => {
  const { IndiaData, isLoading } = India();
  const allEntries = useMemo(() => {
    return IndiaData ? IndiaData.flat() : [];
  }, [IndiaData]);

  const allCultures = useMemo(
    () => allEntries.map((entry) => entry.culture),
    [allEntries]
  );
  const uniqueCultures = useMemo(
    () => [...new Set(allCultures)],
    [allCultures]
  );

  const router = useRouter();

  const handleCultureClick = (culture) => {
    const url = `/indian/${culture.toLowerCase()}-baby-names`;
    router.push(url);
  };

  return (
    <div className="grid grid-cols-1 content-center justify-items-end">
      <div className="bg-pink-50 border-white border-4 p-5 rounded-3xl w-full m-auto">
        <h2 className="text-2xl mb-8 text-center">Search Name by Culture</h2>
        {isLoading ? (
          <LoadingSkeleton />
        ) : (
          <CultureList
            uniqueCultures={uniqueCultures}
            handleCultureClick={handleCultureClick}
          />
        )}
      </div>
    </div>
  );
};

const LoadingSkeleton = () => (
  <div role="status" className="space-y-5 text-center animate-pulse">
    <div className="flex items-center w-full">
      <div className="h-10 bg-pink-200 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-300 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-200 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-300 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-200 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
    </div>
    <div className="flex items-center w-full">
      <div className="h-10 bg-pink-300 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-200 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-300 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-200 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-300 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
    </div>
    <div className="flex items-center w-full">
      <div className="h-10 bg-pink-200 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-300 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-200 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-300 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
      <div className="h-10 bg-pink-200 mx-2 rounded-full dark:bg-pink-700 w-1/5"></div>
    </div>
    <span className="sr-only">Loading...</span>
  </div>
);

const CultureList = ({ uniqueCultures, handleCultureClick }) => (
  <ul className="overflow-auto grid md:grid-cols-5 grid-cols-2 gap-5">
    {uniqueCultures.map((culture, index) => (
      <li key={index}>
        <div
          className="min-w-24 bg-pink-200 text-center rounded-3xl text-lg py-2 w-full cursor-pointer inline-block hover:font-bold hover:bg-pink-500 hover:text-white"
          onClick={() => handleCultureClick(culture)}
        >
          {culture && culture.charAt(0).toUpperCase() + culture.slice(1)}
        </div>
      </li>
    ))}
  </ul>
);

export default CategoriesList;
