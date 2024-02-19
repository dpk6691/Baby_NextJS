import React from "react";
import India from "../../pages/api/decrypt";
// import India from "../../../pages/api/india";
import { useRouter } from "next/router";

const CategoriesList = () => {
  const allEntries = Object.values(India).flat();
  const uniqueCultures = [
    ...new Set(allEntries.map((entry) => entry.Culture.toLowerCase())),
  ];
  const router = useRouter();

  const handleCultureClick = (culture) => {
    const url = `/indian/${culture}-baby-names`;
    router.push(url);
  };

  return (
    <div className="grid grid-cols-1 content-center justify-items-end">
      <div className="bg-pink-50 p-10 mt-14 rounded-3xl w-11/12 m-auto">
        <h2 className="text-2xl mb-8 text-center">Select by Culture</h2>
        <ul className="overflow-auto grid grid-cols-5 gap-5">
          {uniqueCultures.map((culture, index) => (
            <li key={index}>
              <div
                className="min-w-24 bg-pink-200 text-center rounded-3xl text-lg py-2 w-full cursor-pointer inline-block hover:font-bold hover:bg-pink-500 hover:text-white"
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
