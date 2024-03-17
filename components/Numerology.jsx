import React, { useState } from "react";
import NumerologyDetails from "./NameSelectedComponents/NumerologyDetails";

const Numerology = () => {
  const [searchValue, setSearchValue] = useState("");
  const [lowerCaseName, setLowerCaseName] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [error, setError] = useState("");

  const handleIconClick = () => {
    const trimmedValue = searchValue.trim();
    if (trimmedValue === "") {
      setError("Please enter a name before clicking.");
      setShowDetails(false);
    } else {
      setLowerCaseName(trimmedValue.toLowerCase());
      setShowDetails(true);
      setError("");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleIconClick();
    }
  };

  return (
    <section className="w-11/12 justify-between pt-32 mx-auto">
      <h2 className="text-2xl mb-2 text-center text-pink-500">
        Top 10 Most Popular Indian Baby Girl Names of 2024!
      </h2>
      <p className="pt-2 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <p className="pt-2 text-center">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>
      <div className="w-96 mt-14 m-auto mb-5 relative">
        <input
          type="search"
          id="default-search-filter"
          className="rounded-xl text-xl block bg-pink-50 w-full py-3 pr-12 text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-0 focus:border-b-2"
          placeholder="Name..."
          required
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <div
          className="absolute p-2 bottom-2 right-2"
          onClick={handleIconClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 hover:stroke-pink-500 stroke-blue-500 cursor-pointer"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>

      {error && <p className="text-red-500">{error}</p>}
      {showDetails && (
        <div className="shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl dark:bg-black/35">
          {" "}
          <NumerologyDetails lowerCaseName={lowerCaseName} />{" "}
        </div>
      )}
    </section>
  );
};

export default Numerology;
