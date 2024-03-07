import React, { useState } from "react";
import { useRouter } from "next/router";
import India from "./../pages/api/India";
import NumerologyDetails from "../components/NameSelectedComponents/NumerologyDetails";

const NameSelected = () => {
  const { IndiaData } = India();
  const router = useRouter();
  const { name } = router.query;

  const lowerCaseName = name ? name.toLowerCase() : null;

  let selectedNames = [];
  let genders = [];

  if (lowerCaseName && IndiaData) {
    // Filter IndiaData based on lowercase name
    selectedNames = IndiaData.filter(
      (entry) => entry.name && entry.name.toLowerCase() === lowerCaseName
    );

    // Extract genders from the selected names
    genders = selectedNames.reduce((acc, curr) => {
      if (curr.gender && !acc.includes(curr.gender)) {
        acc.push(curr.gender);
      }
      return acc;
    }, []);
  }

  const uniqueGenders = [...new Set(genders)];

  return (
    <div className="container mx-auto  pt-32 md:pt-28">
      <h1 className="text-3xl mb-4 text-center">
        Selected Name:{" "}
        <span className="font-bold">
          {lowerCaseName &&
            lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)}
        </span>
      </h1>
      {selectedNames.map((entry, index) => (
        <div key={index}>
          {/* Display meanings in different cultures */}
          {Array.isArray(entry.meaning_of_name) ? (
            entry.meaning_of_name.map((meaning, i) => {
              if (
                displayedMeanings[entry.culture] &&
                displayedMeanings[entry.culture].has(meaning)
              ) {
                return null; // Skip rendering duplicate meanings for this culture
              }
              if (!displayedMeanings[entry.culture]) {
                displayedMeanings[entry.culture] = new Set();
              }
              displayedMeanings[entry.culture].add(meaning); // Add meaning to displayed set for this culture
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
      {selectedNames.length === 0 && (
        <p className="text-red-500 text-center">Name not found</p>
      )}
      {selectedNames.length > 0 && (
        <>
          <p className="text-xl text-center">
            Gender:{" "}
            <span className="font-bold">
              {uniqueGenders.length > 0
                ? uniqueGenders.join(" / ")
                : "Not specified"}
            </span>
          </p>
          <div className="mt-4 shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl dark:bg-black/35 dark:text-white">
            {/* Check if name is defined before accessing its properties */}
            {name && <NumerologyDetails lowerCaseName={lowerCaseName} />}
          </div>
        </>
      )}
    </div>
  );
};

export default NameSelected;
