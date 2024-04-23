import React, { useState, useEffect, useMemo } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import { useRouter } from "next/router";
import Link from "next/link";
import LetterSearch from "./CommonComponents/LetterSearch";
import GenderSearch from "./CommonComponents/GenderSearch";
import India from "./../pages/api/India";

const itemsPerPage = 50;
const pagesToShow = 3;

const TableData = ({
  onTotalChange,
  setSelectedGenderState,
  setSelectedLetterState,
  setSelectedCultureState,
}) => {
  const router = useRouter();
  const { culture, gender, letter } = router.query;
  const { IndiaData, isLoading } = India();
  const {
    gender: urlGender,
    letter: urlLetter,
    categories: urlCulture,
  } = router.query;

  const [currentPage, setCurrentPage] = useState(1);
  const [searchInput, setSearchInput] = useState("");
  const [searchWarning, setSearchWarning] = useState(false);
  const [lastSelectedLetter, setLastSelectedLetter] = useState(null);
  const [selectedCulture, setSelectedCulture] = useState(urlCulture || "");
  const [selectedLetter, setSelectedLetter] = useState(
    urlLetter || letter || null
  );
  const [selectedGender, setSelectedGender] = useState("");

  const [filteredData, setFilteredData] = useState([]);
  const [totalFilteredObjects, setTotalFilteredObjects] = useState(0);

  useEffect(() => {
    setSelectedGenderState(urlGender);
    setSelectedLetterState(urlLetter);
    setSelectedCultureState(culture);
    setSelectedGender(urlGender);
    setSelectedLetter(urlLetter);
    setSelectedCulture(urlCulture || "");
  }, [urlGender, urlCulture, urlLetter, culture, gender, letter]);

  useEffect(() => {
    onTotalChange(totalFilteredObjects);
  }, [onTotalChange, totalFilteredObjects]);

  const allEntries = useMemo(() => {
    return IndiaData && Array.isArray(IndiaData) ? IndiaData.flat() : [];
  }, [IndiaData]);

  const allCultures = useMemo(
    () => allEntries.map((entry) => entry.culture),
    [allEntries]
  );

  const uniqueCultures = useMemo(
    () => [...new Set(allCultures)],
    [allCultures]
  );

  const { speak, voices } = useSpeechSynthesis();

  useEffect(() => {
    setSelectedLetter(
      urlLetter || (router.query.letter ? router.query.letter : null)
    );
  }, [urlLetter, router.query.letter]);

  useEffect(() => {
    const newFilteredData = allEntries.filter((entry) => {
      if (entry && entry.name) {
        const { name, gender, culture } = entry;
        const startsWithSelectedLetter =
          !selectedLetter ||
          name.toLowerCase().startsWith(selectedLetter.toLowerCase());
        const searchPattern = new RegExp(`\\b${searchInput.trim()}`, "i");
        const matchesGender = selectedGender
          ? gender.toLowerCase() === selectedGender
          : true;
        const matchesCulture =
          (selectedCulture && selectedCulture.toLowerCase() === "") ||
          selectedCulture.toLowerCase() === "all"
            ? true
            : culture.toLowerCase() === selectedCulture.toLowerCase();

        return (
          startsWithSelectedLetter &&
          searchPattern.test(name) &&
          matchesGender &&
          matchesCulture
        );
      }
      return false;
    });

    setFilteredData(newFilteredData);

    const uniqueFilteredNames = new Set(
      newFilteredData.map((entry) => entry.name)
    );
    setTotalFilteredObjects(uniqueFilteredNames.size);
  }, [
    allEntries,
    selectedCulture,
    selectedLetter,
    selectedGender,
    searchInput,
  ]);

  useEffect(() => {
    const totalPages = Math.ceil(totalFilteredObjects / itemsPerPage);
    const maxPage = Math.max(totalPages, 1);

    if (currentPage < 1 || currentPage > maxPage) {
      setCurrentPage(1);
    }
  }, [totalFilteredObjects, currentPage]);

  const totalPages = Math.ceil(totalFilteredObjects / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = Math.min(startIndex + itemsPerPage, totalFilteredObjects);

  const visibleData = filteredData.slice(startIndex, endIndex);
  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  const uniqueVisibleData = visibleData.filter(
    (entry, index, self) =>
      index === self.findIndex((t) => t.name === entry.name)
  );

  const handleSearchChange = (event) => {
    const input = event.target.value.toLowerCase();
    setSearchInput(event.target.value);

    if (
      input !== "" &&
      selectedLetter &&
      !input.startsWith(selectedLetter.toLowerCase())
    ) {
      setSearchWarning(true);
    } else {
      setSearchWarning(false);
    }

    setCurrentPage(1);
  };

  const handleLetterSelect = (letter) => {
    setSelectedLetter(letter);
    setLastSelectedLetter(letter);
    setSearchInput("");
    const cultureParam = selectedCulture
      ? `${selectedCulture.toLowerCase()}-baby-names`
      : "all-baby-names";
    const genderParam = selectedGender || "boy";
    router.push(`/indian/${cultureParam}/${genderParam}/${letter}`);
  };

  const handleGenderSelect = (gender) => {
    setSelectedGender(gender);

    const selectedLetterToUse = selectedLetter || lastSelectedLetter || "a";

    const cultureParam = selectedCulture
      ? `${selectedCulture.toLowerCase()}-baby-names`
      : "all-baby-names";
    router.push(
      `/indian/${cultureParam}/${gender || "boy"}/${selectedLetterToUse}`
    );
  };

  const handleSelectCulture = (
    culture,
    gender = selectedGender,
    letter = selectedLetter
  ) => {
    let cultureParam = culture.toLowerCase();
    setSelectedCulture(cultureParam);
    const genderParam = gender || "boy";
    const letterParam = letter || "";

    let url = "/indian/";

    if (cultureParam !== "") {
      url += `${cultureParam}-baby-names/`;
    } else {
      url += "all-baby-names/";
    }

    url += `${genderParam}/${letterParam}`;

    router.push(url);
  };

  useEffect(() => {
    const cultureParam = router.query.culture;
    if (cultureParam) {
      if (cultureParam.includes("baby-names")) {
        const cultureName = cultureParam.replace("-baby-names", "");
        setSelectedCulture(cultureName.toLowerCase());
      } else if (cultureParam === "all-baby-names") {
        setSelectedCulture("");
      } else if (uniqueCultures.includes(cultureParam.toLowerCase())) {
        setSelectedCulture(cultureParam.toLowerCase());
      } else {
        setSelectedCulture("");
      }
    }
  }, [router.query, uniqueCultures]);

  const renderPageButtons = () => {
    const pageButtons = [];
    const halfPagesToShow = Math.floor(pagesToShow / 2);

    if (totalPages <= pagesToShow) {
      for (let page = 1; page <= totalPages; page++) {
        pageButtons.push(renderPageButton(page));
      }
    } else {
      const showEndPage = currentPage < totalPages - halfPagesToShow;
      const startPage = Math.max(
        1,
        showEndPage
          ? currentPage - halfPagesToShow
          : totalPages - pagesToShow + 1
      );
      const endPage = showEndPage ? startPage + pagesToShow - 1 : totalPages;

      for (let page = startPage; page <= endPage; page++) {
        pageButtons.push(renderPageButton(page));
      }
    }

    return pageButtons;
  };

  const renderPageButton = (page) => (
    <button
      key={page}
      onClick={() => handlePageChange(page)}
      className={`px-2 py-1 text-sm ${
        currentPage === page
          ? "text-blue-500"
          : "text-slate-500 hover:text-primary-700 dark:hover:bg-slate-800 dark:text-slate-300 hover:bg-slate-100"
      } rounded-md dark:bg-slate-800 bg-blue-100/60`}
    >
      {page}
    </button>
  );

  return (
    <div className="shadow-lg border-4 bg-white/80 w-full border-black-500/100 dark:border-white-500/100 p-4 rounded-3xl dark:bg-black/35">
      <div className="flex items-center justify-evenly">
        <GenderSearch
          genderSelected={handleGenderSelect}
          selectedGender={selectedGender}
        />
      </div>
      <LetterSearch
        onSelectLetter={handleLetterSelect}
        selectedLetter={selectedLetter}
        selectedGender={selectedGender}
        activeLetter={selectedLetter}
      />

      <div className="flex mt-3 flex-col md:flex-row items-center justify-evenly space-y-3 md:space-y-0 md:space-x-4 p-4">
        <div className="flex flex-1 w-full justify-center md:justify-start">
          <form className="flex flex-col ">
            <label htmlFor="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-slate-500 dark:text-slate-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="simple-search"
                className={`cursor-pointer pr-4 pl-10 inline-flex items-center px-6 py-1 text-l font-medium rounded-2xl border-2 border-slate-200 hover:border-slate-500 text-slate-500${
                  searchWarning ? "border-red-500" : ""
                }`}
                placeholder={`Search ${
                  selectedLetter
                    ? "letter with " + selectedLetter.toUpperCase()
                    : "a name"
                }`}
                value={searchInput}
                onChange={handleSearchChange}
                required=""
              />
            </div>
            {searchWarning && (
              <div className="text-red-500 text-xs mt-1">
                Please type with the selected letter.
              </div>
            )}
          </form>
        </div>

        <div className="flex items-center justify-center flex-1 space-x-4">
          <h5>
            <span className="text-slate-900 dark:text-white">
              {selectedGender
                ? `${
                    selectedGender.charAt(0).toUpperCase() +
                    selectedGender.slice(1)
                  } `
                : ""}{" "}
              Names{" "}
              {selectedLetter ? `with ${selectedLetter.toUpperCase()}` : ""}{" "}
              {selectedCulture
                ? `in ${
                    selectedCulture.charAt(0).toUpperCase() +
                    selectedCulture.slice(1)
                  } `
                : ""}
            </span>
            <span className="dark:text-white">
              {" = " + totalFilteredObjects}
            </span>
          </h5>
        </div>

        <div className="w-full md:w-auto flex flex-1 flex-col md:flex-row space-y-2 md:space-y-0 items-center md:items-center justify-end md:space-x-3 flex-shrink-0">
          <label
            htmlFor="cultures"
            className="block text-sm font-medium text-slate-900 dark:text-white"
          >
            Select Cultures
          </label>
          <select
            id="cultures"
            value={selectedCulture || ""} // Ensure a default value if selectedCulture is null or undefined
            onChange={(e) => handleSelectCulture(e.target.value)}
            className="cursor-pointer inline-flex items-center px-6 py-1 text-l font-medium rounded-2xl border-2 border-slate-200 hover:border-slate-500 text-slate-500 hover:bg-slate-600 hover:text-white"
          >
            <option value="">All Culture</option>
            {uniqueCultures.map((culture) => (
              <option
                key={culture}
                value={culture ? culture.toLowerCase() : ""}
              >
                {culture
                  ? culture.charAt(0).toUpperCase() + culture.slice(1)
                  : ""}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="overflow-x-auto">
        {isLoading ? (
          <table className=" w-full text-sm text-left text-slate-500">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50">
              <tr>
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-16 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-28  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-12 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
              <tr className="animate-pulse border-b">
                <th className="px-3 py-4">
                  <div className="h-4 w-32 bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-10  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-32  bg-slate-200 rounded-full"></div>
                </th>
                <th className="px-3 py-4">
                  <div className="h-4 w-24 bg-slate-200 rounded-full"></div>
                </th>
              </tr>
            </tbody>
          </table>
        ) : (
          <table className=" w-full text-sm text-left text-slate-500 dark:text-slate-400">
            <thead className="text-xs text-slate-700 uppercase bg-slate-50 dark:bg-slate-700 dark:text-slate-400">
              <tr>
                <th scope="col" className="px-4 py-3">
                  Name
                </th>
                {selectedCulture && selectedCulture.toLowerCase() !== "all" && (
                  <>
                    <th scope="col" className="px-4 py-3">
                      Name in{" "}
                      {selectedCulture
                        ? `${
                            selectedCulture.charAt(0).toUpperCase() +
                            selectedCulture.slice(1)
                          } Language`
                        : "Default Language"}
                    </th>
                  </>
                )}
                <th scope="col" className="px-4 py-3">
                  Meaning
                </th>
                {selectedCulture && selectedCulture.toLowerCase() !== "all" && (
                  <th scope="col" className="px-4 py-3">
                    Meaning in{" "}
                    {selectedCulture
                      ? `${
                          selectedCulture.charAt(0).toUpperCase() +
                          selectedCulture.slice(1)
                        } Language`
                      : "Default Language"}
                  </th>
                )}
                <th scope="col" className="px-4 py-3">
                  Pronunciation
                </th>
              </tr>
            </thead>
            <tbody>
              {uniqueVisibleData.map(
                (
                  { name, meaning_of_name, language, meaning_in_language },
                  index
                ) => (
                  <>
                    <tr
                      key={index}
                      className="border-b dark:border-slate-600 hover:bg-slate-100 "
                    >
                      <td
                        data-label="Name"
                        className={`px-4 py-2 font-bold underline decoration-double decoration-1 hover:decoration-2 underline-offset-4 whitespace-nowrap ${
                          selectedGender === "boy"
                            ? "text-blue-500 decoration-blue-500"
                            : selectedGender === "girl"
                            ? "text-pink-500 decoration-pink-500"
                            : "text-slate-500 decoration-emerald-500 "
                        }`}
                      >
                        <Link href={`/indian/baby-name/${name.toLowerCase()}`}>
                          {name}
                        </Link>
                      </td>
                      {selectedCulture &&
                        selectedCulture.toLowerCase() !== "all" && (
                          <>
                            <td
                              data-label={
                                selectedCulture
                                  ? `${
                                      selectedCulture.charAt(0).toUpperCase() +
                                      selectedCulture.slice(1)
                                    } Name`
                                  : "Default Language"
                              }
                              className="px-4 py-2 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                            >
                              {language}
                            </td>
                          </>
                        )}
                      <td
                        data-label="Meaning"
                        className="px-4 py-2 text-slate-900 whitespace-nowrap dark:text-white"
                      >
                        {meaning_of_name}
                      </td>
                      {selectedCulture &&
                        selectedCulture.toLowerCase() !== "all" && (
                          <td
                            data-label={
                              selectedCulture
                                ? `${
                                    selectedCulture.charAt(0).toUpperCase() +
                                    selectedCulture.slice(1)
                                  } Meaning`
                                : "Default Language"
                            }
                            className="px-4 py-2 text-slate-900 whitespace-nowrap dark:text-white"
                          >
                            {meaning_in_language}
                          </td>
                        )}
                      <td
                        data-label="Pronunciation"
                        className="px-4 py-2 text-slate-900 whitespace-nowrap dark:text-white"
                      >
                        <button
                          className="buttonStyle border border-transparent hover:border-slate-500 p-1 rounded-lg dark:hover:border-slate-100"
                          onClick={() => {
                            speak({
                              text: name,
                              voice: voices.find((voice) =>
                                voice.lang.includes("hi-IN")
                              ),
                            });
                          }}
                        >
                          <svg
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              className="fill-emerald-500"
                              d="M13 3.7446C13 3.27314 12.8728 2.50021 12.1657 2.14424C11.4151 1.76635 10.7163 2.19354 10.3623 2.51158L4.94661 7.43717H3C1.89543 7.43717 1 8.3326 1 9.43717L1.00001 14.6248C1.00001 15.7293 1.89544 16.6248 3.00001 16.6248H4.95001L10.3623 21.4891C10.7175 21.8081 11.416 22.2331 12.1656 21.8554C12.8717 21.4998 13 20.7286 13 20.2561V3.7446Z"
                              fill="#000000"
                            />
                            <path
                              className="fill-slate-500"
                              d="M17.336 3.79605L17.0952 3.72886C16.5633 3.58042 16.0117 3.89132 15.8632 4.42329L15.7289 4.90489C15.5804 5.43685 15.8913 5.98843 16.4233 6.13687L16.6641 6.20406C18.9551 6.84336 20.7501 9.14615 20.7501 12.0001C20.7501 14.854 18.9551 17.1568 16.6641 17.7961L16.4233 17.8632C15.8913 18.0117 15.5804 18.5633 15.7289 19.0952L15.8632 19.5768C16.0117 20.1088 16.5633 20.4197 17.0952 20.2713L17.336 20.2041C20.7957 19.2387 23.2501 15.8818 23.2501 12.0001C23.2501 8.11832 20.7957 4.76146 17.336 3.79605Z"
                              fill="#000000"
                            />
                            <path
                              className="fill-slate-500"
                              d="M16.3581 7.80239L16.1185 7.73078C15.5894 7.57258 15.0322 7.87329 14.874 8.40243L14.7308 8.88148C14.5726 9.41062 14.8733 9.96782 15.4024 10.126L15.642 10.1976C16.1752 10.3571 16.75 11.012 16.75 12C16.75 12.9881 16.1752 13.643 15.642 13.8024L15.4024 13.874C14.8733 14.0322 14.5726 14.5894 14.7308 15.1185L14.874 15.5976C15.0322 16.1267 15.5894 16.4274 16.1185 16.2692L16.3581 16.1976C18.1251 15.6693 19.25 13.8987 19.25 12C19.25 10.1014 18.1251 8.33068 16.3581 7.80239Z"
                              fill="#000000"
                            />
                          </svg>
                        </button>
                      </td>
                    </tr>
                    {index === 4 && (
                      <tr
                        className="border-b dark:border-slate-600 hover:bg-slate-100 dark:hover:bg-slate-700"
                        key="custom-row"
                      >
                        <td
                          className="bg-slate-200 text-center px-4 py-2 font-medium text-slate-900 whitespace-nowrap dark:text-white"
                          colSpan={Object.keys(uniqueVisibleData[0]).length}
                        >
                          AD
                        </td>
                      </tr>
                    )}
                  </>
                )
              )}
            </tbody>
          </table>
        )}
      </div>

      <div className="flex items-center justify-between px-4 pt-6 pb-3">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="cursor-pointer inline-flex items-center px-6 py-1 text-l font-medium rounded-2xl border-2 border-slate-200 hover:border-slate-500 text-slate-500 hover:bg-slate-600 hover:text-white"
        >
          <span>previous</span>
        </button>

        <div className="items-center hidden md:flex gap-x-3">
          {currentPage > Math.floor(pagesToShow / 2) + 1 && (
            <>
              <button
                key={1}
                onClick={() => handlePageChange(1)}
                className={`px-2 py-1 text-sm rounded-md ${
                  currentPage === 1
                    ? "text-blue-500 bg-slate-800"
                    : "text-slate-500 hover:text-primary-700 hover:bg-slate-100"
                }  bg-blue-100/60`}
              >
                1
              </button>
              {currentPage > Math.floor(pagesToShow / 2) + 2 && (
                <span className="text-slate-500">...</span>
              )}
            </>
          )}

          {renderPageButtons()}

          {currentPage < totalPages - Math.floor(pagesToShow / 2) && (
            <>
              {currentPage < totalPages - Math.floor(pagesToShow / 2) - 1 && (
                <span className="text-slate-500">...</span>
              )}
              <button
                key={totalPages}
                onClick={() => handlePageChange(totalPages)}
                className={`px-2 py-1 text-sm rounded-md ${
                  currentPage === totalPages
                    ? "text-blue-500 bg-slate-800"
                    : "text-slate-500 hover:text-primary-700 hover:bg-slate-100"
                } bg-blue-100/60`}
              >
                {totalPages}
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="cursor-pointer inline-flex items-center px-6 py-1 text-l font-medium rounded-2xl border-2 border-slate-200 hover:border-slate-500 text-slate-500 hover:bg-slate-600 hover:text-white"
        >
          <span>Next</span>
        </button>
      </div>
    </div>
  );
};

export default TableData;
