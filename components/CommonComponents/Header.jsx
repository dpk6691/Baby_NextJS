import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import India from "./../../pages/api/India";
import Image from "next/image";
import logo from "./../../public/images/logo.png";

const Header = () => {
  const { IndiaData, isLoading } = India();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [showSearchButton, setShowSearchButton] = useState(false);
  const [showIndianDropdown, setShowIndianDropdown] = useState(false);
  const [showNamesDropdown, setShowNamesDropdown] = useState(false);

  const isActive = (path) => router.pathname === path;
  const isIndianActive = () => router.pathname.startsWith("/indian/");
  const isToolsActive = () => router.pathname.startsWith("/names");

  useEffect(() => {
    setShowSearchButton(typeof window !== "undefined");
  }, []);

  const allEntries = useMemo(
    () => (IndiaData && Array.isArray(IndiaData) ? IndiaData.flat() : []),
    [IndiaData]
  );
  const allCultures = useMemo(
    () => allEntries.map((entry) => entry.culture),
    [allEntries]
  );
  const uniqueCultures = useMemo(
    () => [...new Set(allCultures)],
    [allCultures]
  );

  const handleCultureClick = (culture) => {
    const url = `/indian/${culture.toLowerCase()}-baby-names`;
    router.push(url);
    setShowIndianDropdown(false);
  };

  const handleDropdownToggle = (type) => {
    if (type === "indian") {
      setShowIndianDropdown(!showIndianDropdown);
      setShowNamesDropdown(false);
    } else if (type === "names") {
      setShowNamesDropdown(!showNamesDropdown);
      setShowIndianDropdown(false);
    }
  };

  const handleMenuClick = () => {
    setShowIndianDropdown(false);
    setShowNamesDropdown(false);
  };

  return (
    <>
      <header className="fixed z-50 w-full bg-transparent backdrop-blur-xl">
        <div className="w-11/12 m-auto">
          <nav className="border-slate-200">
            <div className="flex flex-wrap items-center justify-between mx-auto py-2">
              <Link
                href="/"
                className="w-full xl:w-auto"
                onClick={handleMenuClick}
              >
                <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                  <Image
                    className="w-60 m-auto max-h-screen py-2 xl:py-4"
                    src={logo}
                    alt="Logo"
                  />
                </div>
              </Link>
              <div className="flex items-center justify-between xl:order-2 w-full xl:w-auto">
                <div className="max-w-md xl:mx-auto relative">
                  <input
                    type="search"
                    id="default-search-header"
                    className="block bg-transparent w-full py-3 pr-10 text-sm text-slate-900 border-0 border-b-2 border-slate-300 focus:ring-0 focus:border-0 focus:border-b-2"
                    placeholder="Search by name..."
                    required
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        router.push(
                          `/indian/baby-name/${searchValue.toLowerCase()}`
                        );
                      }
                    }}
                  />
                  <Link
                    className="absolute p-2 bottom-1 right-1"
                    href={`/indian/baby-name/${searchValue.toLowerCase()}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 hover:stroke-pink-500 stroke-blue-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </Link>
                </div>

                <button
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-5 justify-center text-sm text-slate-500 rounded-lg xl:hidden"
                  onClick={() => setShowIndianDropdown(!showIndianDropdown)}
                >
                  <span className="sr-only">Open main menu</span>
                  <svg
                    className="w-5 h-5"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 17 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1h15M1 7h15M1 13h15"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={`items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1 ${
                  showIndianDropdown ? "block" : "hidden"
                }`}
                id="navbar-search"
              >
                <ul className="flex flex-col mt-5 xl:mt-0 xl:flex-row xl:px-4 py-2 font-medium rounded-lg space-y-3 xl:space-y-0 xl:space-x-3 rtl:space-x-reverse">
                  <li>
                    <Link href="/" onClick={handleMenuClick}>
                      <div className="block py-1 px-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className={`w-6 h-6 hover:stroke-pink-500 ${
                            isActive("/") &&
                            "hover:stroke-blue-500 stroke-blue-500"
                          }`}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                          />
                        </svg>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <button
                      className={`flex py-1 px-3 items-center ${
                        isIndianActive()
                          ? "text-blue-500"
                          : "hover:text-pink-500"
                      }`}
                      onClick={() => handleDropdownToggle("indian")}
                    >
                      Indian
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {showIndianDropdown && (
                      <div className="absolute z-10 grid grid-cols-4 w-auto text-sm bg-white border border-slate-100 rounded-xl shadow-md">
                        {isLoading ? (
                          <div className="space-y-5 xl:w-96 px-3 py-5 text-center animate-pulse">
                            <div className="flex items-center w-full">
                              <div className="h-3 bg-pink-200 mx-2 rounded-full w-1/5"></div>
                              <div className="h-3 bg-pink-300 mx-2 rounded-full w-1/5"></div>
                              <div className="h-3 bg-pink-200 mx-2 rounded-full w-1/5"></div>
                              <div className="h-3 bg-pink-300 mx-2 rounded-full w-1/5"></div>
                            </div>
                            <div className="flex items-center w-full">
                              <div className="h-3 bg-pink-300 mx-2 rounded-full w-1/5"></div>
                              <div className="h-3 bg-pink-200 mx-2 rounded-full w-1/5"></div>
                              <div className="h-3 bg-pink-300 mx-2 rounded-full w-1/5"></div>
                              <div className="h-3 bg-pink-200 mx-2 rounded-full w-1/5"></div>
                            </div>
                          </div>
                        ) : (
                          uniqueCultures.map((culture) => (
                            <button
                              key={culture}
                              onClick={() => handleCultureClick(culture)}
                              className="block py-2 px-4 text-sm w-full hover:text-pink-500 rounded-lg"
                            >
                              {culture}
                            </button>
                          ))
                        )}
                      </div>
                    )}
                  </li>
                  <li>
                    <Link href="/rashi" className="flex items-center">
                      <div
                        className={`block py-1 px-3 hover:text-pink-500 ${
                          isActive("/rashi") &&
                          "hover:text-blue-500 text-blue-500"
                        }`}
                      >
                        Rashi
                      </div>
                    </Link>
                  </li>
                  <li>
                    <button
                      className={`flex py-1 px-3 items-center ${
                        isToolsActive()
                          ? "text-blue-500"
                          : "hover:text-pink-500"
                      }`}
                      onClick={() => handleDropdownToggle("names")}
                    >
                      Names
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {showNamesDropdown && (
                      <div className="absolute z-10 w-auto text-sm p-3 bg-white border border-slate-100 rounded-xl shadow-md">
                        <Link
                          href="/names/numerology"
                          className="flex pb-2 items-center hover:text-pink-500"
                        >
                          <span className="sr-only">Numerology</span>
                          Numerology
                        </Link>
                        {/* <Link
                              href="/names/name-combiner"
                              className="flex items-center text-slate-500 hover:text-blue-600"
                            >
                              <span className="sr-only">Name Combine</span>
                              Name Combine
                            </Link>
                            */}
                        <Link
                          href="/indian/all-baby-names/boy"
                          className="flex pb-2 items-center hover:text-pink-500"
                        >
                          <span className="sr-only">Boy Names</span>
                          Boy Names
                        </Link>
                        <Link
                          href="/indian/all-baby-names/girl"
                          className="flex items-center hover:text-pink-500"
                        >
                          <span className="sr-only">Girls Names</span>
                          Girls Names
                        </Link>
                      </div>
                    )}
                  </li>
                  {/* <li>
                    <Link href="https://blog.firststep.baby/">
                      <div className="block py-1 px-3 hover:text-pink-500">
                        Blog
                      </div>
                    </Link>
                  </li> */}
                  <li>
                    <Link href="/company/advertise-with-us">
                      <div
                        className={`block py-1 px-3 hover:text-pink-500 ${
                          isActive("/advertise-with-us") &&
                          "hover:text-blue-500 text-blue-500"
                        }`}
                      >
                        Advertise with us
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <div
                        className={`block py-1 px-3 hover:text-pink-500 ${
                          isActive("/contact-us") &&
                          "hover:text-blue-500 text-blue-500"
                        }`}
                      >
                        Contact
                      </div>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div
        className={`absolute top-28 overflow-y-auto left-0 z-20 w-full h-[32rem] bg-white shadow-md xl:hidden transition-transform ${
          showIndianDropdown || showNamesDropdown
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        <ul className="flex flex-col p-5 space-y-4 font-medium">
          <li>
            <Link
              href="/"
              className="block py-2 px-4 text-slate-900 hover:bg-gray-100 rounded-lg"
              onClick={handleMenuClick}
            >
              Home
            </Link>
          </li>
          <li>
            <button
              className="flex py-2 px-4 items-center text-slate-900 hover:bg-gray-100 rounded-lg"
              onClick={() => handleDropdownToggle("indian")}
            >
              Indian
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {showIndianDropdown && (
              <div className="pt-2 pb-3 grid grid-cols-2 md:grid-cols-4 place-items-center bg-slate-50">
                {uniqueCultures.map((culture) => (
                  <button
                    key={culture}
                    onClick={() => handleCultureClick(culture)}
                    className="block py-2 px-4 text-slate-900 hover:bg-gray-100 rounded-lg w-full text-left"
                  >
                    {culture}
                  </button>
                ))}
              </div>
            )}
          </li>
          <li>
            <Link href="/rashi" className="flex items-center">
              <div
                className={`block py-1 px-3 hover:text-pink-500 ${
                  isActive("/rashi") && "hover:text-blue-500 text-blue-500"
                }`}
              >
                Rashi
              </div>
            </Link>
          </li>
          <li>
            <button
              className="flex py-2 px-4 items-center text-slate-900 hover:bg-gray-100 rounded-lg"
              onClick={() => handleDropdownToggle("names")}
            >
              Names
              <svg
                className="w-2.5 h-2.5 ms-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>
            {showNamesDropdown && (
              <div class="pt-2 pb-3 grid grid-cols-2 md:grid-cols-4 place-items-center bg-slate-50">
                <Link
                  href="/names/numerology"
                  className="block py-2 px-4 text-slate-900 hover:bg-gray-100 rounded-lg w-full text-left"
                >
                  <span className="sr-only">Numerology</span>
                  Numerology
                </Link>
                {/* <Link
                              href="/names/name-combiner"
                              className="block py-2 px-4 text-slate-900 hover:bg-gray-100 rounded-lg w-full text-left"
                            >
                              <span className="sr-only">Name Combine</span>
                              Name Combine
                            </Link>
                            */}
                <Link
                  href="/indian/all-baby-names/boy"
                  className="block py-2 px-4 text-slate-900 hover:bg-gray-100 rounded-lg w-full text-left"
                >
                  <span className="sr-only">Boy Names</span>
                  Boy Names
                </Link>
                <Link
                  href="/indian/all-baby-names/girl"
                  className="block py-2 px-4 text-slate-900 hover:bg-gray-100 rounded-lg w-full text-left"
                >
                  <span className="sr-only">Girls Names</span>
                  Girls Names
                </Link>
              </div>
            )}
          </li>
          {/* <li>
                    <Link href="https://blog.firststep.baby/">
                      <div className="block py-1 px-3 hover:text-pink-500">
                        Blog
                      </div>
                    </Link>
                  </li> */}
          <li>
            <Link href="/company/advertise-with-us">
              <div
                className={`block py-1 px-3 hover:text-pink-500 ${
                  isActive("/advertise-with-us") &&
                  "hover:text-blue-500 text-blue-500"
                }`}
              >
                Advertise with us
              </div>
            </Link>
          </li>
          <li>
            <Link href="/contact-us">
              <div
                className={`block py-1 px-3 hover:text-pink-500 ${
                  isActive("/contact-us") && "hover:text-blue-500 text-blue-500"
                }`}
              >
                Contact
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
