import React from "react";
import { useRouter } from "next/router";
import India from "./../pages/api/India";
import NumerologyDetails from "../components/NameSelectedComponents/NumerologyDetails";

const NameSelected = () => {
  const { IndiaData, isLoading } = India();
  const router = useRouter();
  const { name } = router.query;

  const lowerCaseName = name ? name.toLowerCase() : null;

  let selectedNames = [];
  let genders = [];

  if (lowerCaseName && IndiaData) {
    selectedNames = IndiaData.filter(
      (entry) => entry.name && entry.name.toLowerCase() === lowerCaseName
    );
    genders = selectedNames.reduce((acc, curr) => {
      if (curr.gender && !acc.includes(curr.gender)) {
        acc.push(curr.gender);
      }
      return acc;
    }, []);
  }

  const uniqueGenders = [...new Set(genders)];

  const skeleton = (
    <div className="skeleton">
      <div className="my-2 mt-8 text-xl text-center animate-pulse">
        <div class="h-4 w-72 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
        <div class="h-4 w-64 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
        <div class="h-4 w-24 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
        <div class="h-4 w-48 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
        <div class="h-4 w-36 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
        <div class="h-4 w-48 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
      </div>
      <div className="mt-4 shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl dark:bg-black/35 dark:text-white">
        <div className="my-2 text-xl text-center animate-pulse">
          <div class="h-6 w-72 bg-gray-200 mt-4 mb-7 m-auto rounded-full border-b"></div>
          <div class="h-4 w-48 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
          <div class="h-4 w-72 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
          <div class="h-4 w-64 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
          <div class="h-4 w-48 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
          <div class="h-4 w-24 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
          <div class="h-4 w-36 bg-gray-200 my-4 m-auto rounded-full border-b"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto pt-32 md:pt-28">
      <h1 className="text-3xl mb-4 text-center">
        Selected Name:{" "}
        <span className="font-bold">
          {lowerCaseName &&
            lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)}
        </span>
      </h1>
      {isLoading
        ? skeleton
        : selectedNames.map((entry, index) => (
            <div key={index}>
              {Array.isArray(entry.meaning_of_name) ? (
                entry.meaning_of_name.map((meaning, i) => {
                  if (
                    displayedMeanings[entry.culture] &&
                    displayedMeanings[entry.culture].has(meaning)
                  ) {
                    return null;
                  }
                  if (!displayedMeanings[entry.culture]) {
                    displayedMeanings[entry.culture] = new Set();
                  }
                  displayedMeanings[entry.culture].add(meaning);
                  return (
                    <p key={i} className="mt-4 text-xl text-center">
                      Meaning of {entry.name} in {entry.culture}:{" "}
                      <span className="font-bold">{meaning}</span>
                    </p>
                  );
                })
              ) : (
                <p className="my-2 text-xl text-center">
                  Meaning of {entry.name} in {entry.culture}:{" "}
                  <span className="font-bold">{entry.meaning_of_name}</span>
                </p>
              )}
              {index < selectedNames.length - 1 && <hr />}
            </div>
          ))}
      {selectedNames.length === 0 && !isLoading && (
        <p className="text-red-500 text-center">Name not found</p>
      )}
      {selectedNames.length > 0 && !isLoading && (
        <>
          <p className="text-xl text-center border-t pt-3">
            Gender:{" "}
            <span className="font-bold">
              {uniqueGenders.length > 0
                ? uniqueGenders.join(" / ")
                : "Not specified"}
            </span>
          </p>
          <div className="mt-4 shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl dark:bg-black/35 dark:text-white">
            {name && <NumerologyDetails lowerCaseName={lowerCaseName} />}
          </div>
        </>
      )}
    </div>
  );
};

export default NameSelected;
