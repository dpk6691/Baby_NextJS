import React, { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  // Check if window is defined (client-side rendering)
  const isClient = typeof window !== "undefined";

  // State to manage the visibility of the search button
  const [showSearchButton, setShowSearchButton] = useState(false);

  useEffect(() => {
    // Update the state based on client-side rendering
    setShowSearchButton(isClient);
  }, [isClient]);

  return (
    <>
      <header className="fixed z-50 w-full bg-transparent backdrop-blur-xl">
        <div className="w-11/12 m-auto">
          <nav className="border-gray-200 ">
            <div className="flex flex-wrap items-center justify-between mx-auto py-4">
              <Link href="/">
                <div className="flex items-center space-x-3 rtl:space-x-reverse cursor-pointer">
                  <span className="text-2xl font-semibold whitespace-nowrap dark:text-gray-900">
                    Dipak
                  </span>
                </div>
              </Link>
              <div className="flex md:order-2">
                {/* Render search button if showSearchButton is true */}
                {showSearchButton && (
                  <button
                    type="button"
                    data-collapse-toggle="navbar-search"
                    aria-controls="navbar-search"
                    aria-expanded="false"
                    className="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2 me-1"
                  >
                    <svg
                      className="w-5 h-5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search</span>
                  </button>
                )}
                {/* Render search input for both server and client-side */}
                <div className="relative hidden md:block">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                    <span className="sr-only">Search icon</span>
                  </div>
                  <input
                    type="text"
                    id="search-navbar"
                    className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Search..."
                  />
                </div>
                {/* Render menu button for both server and client-side */}
                <button
                  data-collapse-toggle="navbar-search"
                  type="button"
                  className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
              {/* Render navigation links */}
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-search"
              >
                <ul className="flex px-4 py-2 font-medium rounded-lg space-x-8 rtl:space-x-reverse">
                  <li>
                    <Link href="/">
                      <div className="drop-shadow-xl bg-white text-gray-900 shadow-black block py-1 px-2 text-gray-900 rounded-xl hover:bg-white hover:text-gray-900">
                        Home
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/about">
                      <div className="drop-shadow-xl shadow-black block py-1 px-2 text-gray-900 rounded-xl hover:bg-white hover:text-gray-900 dark:text-white">
                        About
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services">
                      <div className="drop-shadow-xl shadow-black block py-1 px-2 text-gray-900 rounded-xl hover:bg-white hover:text-gray-900 dark:text-white">
                        Services
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
