import React, { useState, useMemo } from "react";
import GenderSearch from "../../CommonComponents/GenderSearch";
import India from "./../../../pages/api/India";
import LetterSearch from "../../CommonComponents/LetterSearch";
import { useRouter } from "next/router";

const BabyNameSearch = () => {
  const { IndiaData } = India();
  // const [countryData, setCountryData] = useState(null);
  const [selectedGender, setSelectedGender] = useState(null);
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [error, setError] = useState("");

  const router = useRouter();

  const allEntries = Object.values(IndiaData || {}).flat();

  const allCultures = useMemo(
    () => allEntries.map((entry) => entry.culture),
    [allEntries]
  );
  const uniqueCultures = useMemo(
    () => [...new Set(allCultures)],
    [allCultures]
  );

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
    let url = "/indian/";

    const cultureSelect = document.getElementById("underline_select");
    const selectedCulture =
      cultureSelect.options[cultureSelect.selectedIndex].value.toLowerCase();
    if (selectedCulture !== "all") {
      url += `${selectedCulture}-`;
    } else {
      url += "all-";
    }

    url += "baby-names/";

    url += `${selectedGender ? selectedGender.toLowerCase() : ""}/${
      selectedLetter ? selectedLetter.toLowerCase() : ""
    }`;

    router.push(url);
  };

  return (
    <div className="grid p-5 md:p-9 bg-white rounded-xl grid-cols-1 content-center place-items-center">
      <div className="grid md:grid-cols-2">
        <GenderSearch
          genderSelected={handleGenderSelect}
          selectedGender={selectedGender}
        />

        <form className="max-w-sm mx-auto mt-5 md:mt-0">
          <label htmlFor="underline_select" className="sr-only">
            Underline select
          </label>
          <select
            id="underline_select"
            className="cursor-pointer py-2 px-4 inline-flex items-center px-6 py-1 text-xl font-medium rounded-2xl border-2 border-gray-100 hover:border-gray-500 text-gray-500 hover:bg-gray-600 hover:text-white focus:border-gray-50 "
          >
            <option selected>All</option>
            {uniqueCultures.map((culture, index) => (
              <option key={index} value={culture}>
                {culture && culture.charAt(0).toUpperCase() + culture.slice(1)}
              </option>
            ))}
          </select>
        </form>
      </div>

      <LetterSearch
        onSelectLetter={handleLetterSelect}
        selectedLetter={selectedLetter}
        selectedGender={selectedGender}
        activeLetter={selectedLetter} // Pass selectedLetter as activeLetter
      />

      {/* {countryData && ( */}
      <div className="mt-9">
        {error && <p className="text-red-500">{error}</p>}
        {!error && (
          <>
            {/* <p>Country: {countryData.country_name}</p>
            <p className="mb-7">Region: {countryData.region}</p> */}

            {!selectedGender || !selectedLetter ? (
              <div className="text-center">
                <button
                  className="m-auto flex items-center py-2 px-4 text-2xl font-medium rounded-xl bg-slate-200 text-slate-400 cursor-not-allowed"
                  disabled
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8 pr-2 stroke-state-500"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    ></path>
                  </svg>{" "}
                  Search
                </button>

                <div className="mt-3">
                  <div className="bg-pink-50 text-sm rounded-full px-4 py-2">
                    <svg
                      className="flex-shrink-0 inline w-4 h-4 mr-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                    </svg>
                    Kindly select Gender and Letter both
                  </div>
                </div>
              </div>
            ) : (
              <button
                className="flex items-center py-2 px-4 text-2xl font-medium rounded-xl bg-gray-900 text-white"
                onClick={handleSearch}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-8 h-8 pr-2 stroke-state-500"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
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
