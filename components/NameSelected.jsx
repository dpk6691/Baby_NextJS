import React from "react";
import { useRouter } from "next/router";
import India from "./../pages/api/India";
import NumerologyDetails from "../components/NameSelectedComponents/NumerologyDetails";

const NameSelected = () => {
  const { IndiaData } = India();
  const router = useRouter();
  const { name } = router.query;

  const lowerCaseName = name ? name.toLowerCase() : null;

  let selectedName = null;
  if (lowerCaseName && IndiaData) {
    for (const category in IndiaData) {
      if (IndiaData.hasOwnProperty(category)) {
        if (Array.isArray(IndiaData[category])) {
          // Check if it's an array
          for (const entry of IndiaData[category]) {
            if (entry.Name && entry.Name.toLowerCase() === lowerCaseName) {
              selectedName = entry;
              break;
            }
          }
        }
      }
      if (selectedName) break;
    }
  }

  const genders = [];
  if (lowerCaseName && IndiaData) {
    for (const category in IndiaData) {
      if (IndiaData.hasOwnProperty(category)) {
        if (Array.isArray(IndiaData[category])) {
          // Check if it's an array
          for (const entry of IndiaData[category]) {
            if (entry.Name && entry.Name.toLowerCase() === lowerCaseName) {
              genders.push(entry.Gender);
            }
          }
        }
      }
    }
  }
  const uniqueGenders = [...new Set(genders)];

  return (
    <div className="container mx-auto pt-24">
      {selectedName ? (
        <>
          <h1 className="text-3xl text-center">
            Selected Name:{" "}
            <span className="font-bold">{selectedName.Name}</span>
          </h1>
          <p className="mt-4 text-xl text-center">
            Meaning of {name[0].toUpperCase() + name.slice(1).toLowerCase()}:{" "}
            <span className="font-bold">{selectedName.MeaningOfName}</span>
          </p>
          <p className="text-xl text-center">
            Gender:{" "}
            <span className="font-bold">
              {uniqueGenders.length > 0
                ? uniqueGenders.join(" / ")
                : "Not specified"}
            </span>
          </p>

          <div className="mt-4 shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl dark:bg-black/35 dark:text-white">
            <NumerologyDetails lowerCaseName={lowerCaseName} />
          </div>
        </>
      ) : (
        <p className="text-red-500">Name not found</p>
      )}
    </div>
  );
};

export default NameSelected;
