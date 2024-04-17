import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import NumerologyDetails from "./NameSelectedComponents/NumerologyDetails";
import AdSection from "./HomeComponents/AfterBannerComponemts/AdSection";
// import SearchIcon from "./SearchIcon"; // Example: External SVG component

const Numerology = ({ onSelectedName }) => {
  const [searchValue, setSearchValue] = useState("");
  const [lowerCaseName, setLowerCaseName] = useState("");
  const [showDetails, setShowDetails] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  useEffect(() => {
    const { query } = router;
    if (query?.name) {
      const nameParam = query.name;
      setSearchValue(nameParam);
      handleSearch(nameParam);
    } else {
      setSearchValue("");
    }
  }, [router]);

  const handleSearch = (name) => {
    const trimmedValue = name.trim();
    if (trimmedValue === "") {
      setError("Please enter a name.");
      setShowDetails(false);
    } else {
      setLowerCaseName(trimmedValue.toLowerCase());
      setShowDetails(true);
      setError("");
    }
  };

  const handleSearchIconClick = () => {
    handleSearch(searchValue);
    router.push(`/names/numerology/${searchValue.toLowerCase()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearchIconClick();
    }
  };

  useEffect(() => {
    // if (searchValue) {
    //   onSelectedName(searchValue);
    // }
  }, [searchValue, onSelectedName]);

  return (
    <section className="w-11/12 m-auto pt-36 xl:pt-24 ">
      <div className="flex flex-col xl:flex-row justify-between">
        <div className="xl:w-9/12 flex flex-col">
          <h2 className="text-2xl mb-2 text-pink-500">
            Baby Names as Per Numerology
          </h2>
          <p className="pt-2">
            Everyone wants the best for their baby and you cannot be an
            exception in this regard. Baby name for your little treasure can
            bring in luck, so you can check numerology for the few cute baby
            names you have picked.
          </p>
          <p className="pt-2">
            In recent times, new parents make a conscious decision to have their
            baby on a particular date and time. If you are one among them or
            not, you can enhance your child’s luck by gifting your baby with the
            best baby name as per numerology.
          </p>
          <div className="md:w-96 mt-14 mb-5 relative">
            <input
              type="search"
              id="default-search-filter"
              className="rounded-xl text-xl block bg-pink-50 w-full py-3 pr-12 text-slate-900 border-0 border-b-2 border-slate-300 focus:ring-0 focus:border-0 focus:border-b-2"
              placeholder="Name..."
              required
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <div
              className="absolute p-2 bottom-2 right-2"
              onClick={handleSearchIconClick}
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

          <hr className="mt-7 mb-12" />

          {error && <p className="text-red-500">{error}</p>}
          {showDetails && (
            <div className="shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl">
              <NumerologyDetails lowerCaseName={lowerCaseName} />
            </div>
          )}
        </div>
        <div className="xl:ml-5 mt-7 xl:mt-0 p-5 bg-slate-50 rounded-3xl grid justify-items-stretch w-full xl:w-1/4">
          <AdSection />
        </div>
      </div>
    </section>
  );
};

export default Numerology;
