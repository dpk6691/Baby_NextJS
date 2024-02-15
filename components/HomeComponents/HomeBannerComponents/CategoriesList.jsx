import React from "react";
import India from "../../../pages/api/decrypt";
// import India from "../../../pages/api/india";
import { useRouter } from "next/router";

const CategoriesList = () => {
  const allEntries = Object.values(India).flat();
  const uniqueCultures = [
    ...new Set(allEntries.map((entry) => entry.Culture.toLowerCase())),
  ];
  const router = useRouter();

  const handleCultureClick = (culture) => {
    const url = `/india/${culture}`;
    router.push(url);
  };

  return (
    <div className="grid grid-cols-1 content-center justify-items-end">
      <div className="shadow-lg border-4 bg-white/35 w-12/12 border-black-500/100 dark:border-white-500/100 p-4 rounded-3xl dark:bg-black/35 lg:w-11/12">
        <h2 className="text-4xl mb-3 dark:text-white">All Categories</h2>
        <ul className="overflow-auto flex flex-wrap gap-4 dark:text-white">
          {uniqueCultures.map((culture, index) => (
            <li key={index}>
              <div
                className="min-w-24 cursor-pointer inline-block hover:font-bold"
                onClick={() => handleCultureClick(culture)}
              >
                {culture.charAt(0).toUpperCase() + culture.slice(1)}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CategoriesList;
