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

  // useEffect(() => {
  //   fetch("https://ipapi.co/json/")
  //     .then((res) => res.json())
  //     .then((response) => {
  //       setCountryData(response);
  //     })
  //     .catch((error) => {
  //       console.log("Request failed:", error);
  //     });
  // }, []);

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
    <div className="grid grid-cols-1 content-center place-items-center">
      <GenderSearch genderSelected={handleGenderSelect} />

      <LetterSearch onSelectLetter={handleLetterSelect} />

      {/* {countryData && ( */}
      <div className="mt-9">
        {error && <p className="text-red-500">{error}</p>}
        {!error && (
          <>
            {/* <p>Country: {countryData.country_name}</p>
            <p className="mb-7">Region: {countryData.region}</p> */}
            {!selectedGender || !selectedLetter ? (
              <button
                className="flex items-center py-2 px-4 drop-shadow-xl shadow-black text-2xl font-medium rounded-xl bg-gray-500 cursor-not-allowed"
                disabled
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 pr-2 stroke-state-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  ></path>
                </svg>{" "}
                Search
              </button>
            ) : (
              <button
                className="flex items-center py-2 px-4 drop-shadow-xl shadow-black text-2xl font-medium rounded-xl bg-gray-900 text-white"
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 pr-2 stroke-state-500"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                  ></path>
                </svg>{" "}
                Search
              </button>
            )}
          </>
        )}
      </div>
      {/* )} */}
    </div>
  );
};

export default BabyNameSearch;
