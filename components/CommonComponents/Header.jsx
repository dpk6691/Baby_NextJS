import React, { useState, useEffect, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import India from "./../../pages/api/India";
import Image from "next/image";
import logo from "./../../public/images/logo.png";
import "flowbite";

const Header = () => {
  const { IndiaData, isLoading } = India();
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");
  const [showSearchButton, setShowSearchButton] = useState(false);

  const isActive = (path) => {
    return router.pathname === path;
  };

  const isIndianActive = () => {
    return router.pathname.startsWith("/indian/");
  };

  const isToolsActive = () => {
    return router.pathname.startsWith("/names");
  };

  useEffect(() => {
    setShowSearchButton(typeof window !== "undefined");
  }, []);

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

  const handleCultureClick = (culture) => {
    const url = `/indian/${culture.toLowerCase()}-baby-names`;
    router.push(url);
    hideMenuClick();
  };

  const hideMenuClick = () => {
    const navbarSearch = document.getElementById("navbar-search");
    const indianDropdown = document.getElementById("indian");
    const toolsDropdown = document.getElementById("names-dropdown");

    if (navbarSearch) {
      navbarSearch.classList.add("hidden");
    }
    if (indianDropdown) {
      indianDropdown.classList.add("hidden");
    }
    if (toolsDropdown) {
      toolsDropdown.classList.add("hidden");
    }
  };

  const handleToolsItemClick = () => {
    hideMenuClick();
  };

  return (
    <>
      <header className="fixed z-50 w-full bg-transparent backdrop-blur-xl">
        <div className="w-11/12 m-auto">
          <nav className="border-gray-200 ">
            <div className="flex flex-wrap items-center justify-between mx-auto py-2  ">
              <Link href="/" className="w-full xl:w-auto">
                <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                  <Image
                    onClick={hideMenuClick}
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
                    className="block bg-transparent w-full py-3 pr-10 text-sm text-gray-900 border-0 border-b-2 border-gray-300 focus:ring-0 focus:border-0 focus:border-b-2"
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
                  data-collapse-toggle="navbar-search"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-5 justify-center text-sm text-gray-500 rounded-lg xl:hidden"
                  aria-controls="navbar-search"
                  aria-expanded="false"
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
                className="items-center justify-between hidden w-full xl:flex xl:w-auto xl:order-1"
                id="navbar-search"
              >
                <ul className="flex flex-col mt-5 xl:mt-0 xl:flex-row xl:px-4 py-2 font-medium rounded-lg space-y-3 xl:space-y-0 xl:space-x-3 rtl:space-x-reverse">
                  <li>
                    <Link href="/" onClick={hideMenuClick}>
                      <div className="block py-1 px-3 ">
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
                      id="indian-button"
                      data-dropdown-toggle="indian"
                      className={
                        isIndianActive()
                          ? "flex py-1 px-3 items-center hover:text-blue-500 text-blue-500"
                          : "flex py-1 px-3 items-center hover:text-pink-500"
                      }
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
                    <div
                      id="indian"
                      className="absolute z-10 hidden w-auto text-sm bg-white border border-gray-100 rounded-3xl shadow-md"
                    >
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
                          <div className="flex items-center w-full">
                            <div className="h-3 bg-pink-200 mx-2 rounded-full w-1/5"></div>
                            <div className="h-3 bg-pink-300 mx-2 rounded-full w-1/5"></div>
                            <div className="h-3 bg-pink-200 mx-2 rounded-full w-1/5"></div>
                            <div className="h-3 bg-pink-300 mx-2 rounded-full w-1/5"></div>
                          </div>
                          <span className="sr-only">Loading...</span>
                        </div>
                      ) : (
                        <ul className="p-4 flex xl:w-96 flex-wrap">
                          {uniqueCultures.map((culture, index) => (
                            <li key={index} onClick={hideMenuClick}>
                              <div
                                className="min-w-28 flex items-center py-2 cursor-pointer inline-block hover:text-pink-500"
                                onClick={() => handleCultureClick(culture)}
                              >
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-5 h-5 pr-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="m8.25 4.5 7.5 7.5-7.5 7.5"
                                  />
                                </svg>
                                {culture &&
                                  culture.charAt(0).toUpperCase() +
                                    culture.slice(1)}
                              </div>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </li>
                  <li>
                    <Link
                      href="/rashi"
                      className="flex items-center"
                      onClick={hideMenuClick}
                    >
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
                      id="Names"
                      data-dropdown-toggle="names-dropdown"
                      className={
                        isToolsActive("/names")
                          ? "flex py-1 px-3 items-center hover:text-blue-500 text-blue-500"
                          : "flex py-1 px-3 items-center hover:text-pink-500"
                      }
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
                    <div
                      id="names-dropdown"
                      className="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-lg shadow-md"
                    >
                      <div className="p-4 pb-0 text-gray-900 pb-4">
                        <ul className="space-y-4" aria-labelledby="names">
                          <li>
                            <Link
                              onClick={handleToolsItemClick}
                              href="/names/numerology"
                              className="flex items-center text-gray-500 hover:text-blue-600"
                            >
                              <span className="sr-only">Numerology</span>
                              Numerology
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={handleToolsItemClick}
                              href="/indian/all-baby-names/boy"
                              className="flex items-center text-gray-500 hover:text-blue-600"
                            >
                              <span className="sr-only">Boy Names</span>
                              Boy Names
                            </Link>
                          </li>
                          <li>
                            <Link
                              onClick={handleToolsItemClick}
                              href="/indian/all-baby-names/girl"
                              className="flex items-center text-gray-500 hover:text-blue-600"
                            >
                              <span className="sr-only">Girls Names</span>
                              Girls Names
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="https://www.google.com">
                      <div className="block py-1 px-3 hover:text-pink-500">
                        Blog
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/advertise-with-us" onClick={hideMenuClick}>
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
                    <Link href="/contact-us" onClick={hideMenuClick}>
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
    </>
  );
};

export default Header;
