import React, { useState, useEffect } from "react";
import GenderSearch from "../../CommonComponents/GenderSearch";
import LetterSearch from "../../CommonComponents/LetterSearch";
import { useRouter } from "next/router";

const BabyNameSearch = () => {
  const [countryData, setCountryData] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [error, setError] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetch("https://ipapi.co/json/")
      .then((res) => res.json())
      .then((response) => {
        setCountryData(response);
      })
      .catch((error) => {
        console.log("Request failed:", error);
      });
  }, []);

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);
    setError("");
  };

  const handleLetterSelect = (letter) => {
    setSelectedLetter(letter);
    setError("");
  };

  const handleSearch = () => {
    if (!selectedGender || !selectedLetter) {
      setError("Please select both gender and letter.");
    } else {
      setError("");
      router.push(
        `/indian/all-baby-names/${
          selectedGender ? selectedGender.toLowerCase() : ""
        }/${selectedLetter ? selectedLetter.toLowerCase() : ""}`
      );
    }
  };

  return (
    <div className="grid grid-cols-1 content-center place-items-center lg:mt-0">
      <h2 className="text-4xl mb-2 dark:text-gray-900 text-center">
        Largest Collection of
      </h2>
      <h1 className="text-6xl font-black dark:text-gray-900 text-center">
        Baby Names
      </h1>

      <GenderSearch genderSelected={handleGenderSelect} />

      <LetterSearch onSelectLetter={handleLetterSelect} />

      {countryData && (
        <div className="mt-9">
          {error && <p className="text-red-500">{error}</p>}
          {!error && (
            <>
              <p>Country: {countryData.country_name}</p>
              <p className="mb-7">Region: {countryData.region}</p>
              {!selectedGender || !selectedLetter ? (
                <button
                  className="py-2 px-4 drop-shadow-xl shadow-black text-2xl font-medium rounded-xl bg-gray-500 cursor-not-allowed"
                  disabled
                >
                  Search
                </button>
              ) : (
                <button
                  className="py-2 px-4 drop-shadow-xl shadow-black text-2xl font-medium rounded-xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white"
                  onClick={handleSearch}
                >
                  Search
                </button>
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default BabyNameSearch;
