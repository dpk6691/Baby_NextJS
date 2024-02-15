import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import India from "../../pages/api/decrypt";
import "flowbite";

const Header = () => {
  const router = useRouter();
  const [searchValue, setSearchValue] = useState("");

  const isClient = typeof window !== "undefined";

  const [showSearchButton, setShowSearchButton] = useState(false);

  useEffect(() => {
    setShowSearchButton(isClient);
  }, [isClient]);

  const allEntries = Object.values(India).flat();
  const uniqueCultures = [
    ...new Set(allEntries.map((entry) => entry.Culture.toLowerCase())),
  ];

  const handleCultureClick = (culture) => {
    const url = `/indian/${culture}-baby-names`;
    router.push(url);
  };

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
                <div className="max-w-md mx-auto relative">
                  <input
                    type="search"
                    id="default-search"
                    className="block w-full py-3 pr-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Name..."
                    required
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                  />
                  <Link
                    className="absolute p-2 bottom-1 right-1"
                    href={`/indian/baby-name/${searchValue.toLowerCase()}`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </Link>
                </div>

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
              <div
                className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
                id="navbar-search"
              >
                <ul className="flex flex-col md:flex-row px-4 py-2 font-medium rounded-lg space-x-8 rtl:space-x-reverse">
                  <li>
                    <Link href="/">
                      <div className="drop-shadow-xl bg-white text-gray-900 shadow-black block py-1 px-3 text-gray-900 rounded-xl hover:bg-white hover:text-gray-900">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="w-6 h-6"
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
                      className="flex items-center drop-shadow-xl shadow-black block py-1 px-3 text-gray-900 rounded-xl hover:bg-white hover:text-gray-900 dark:text-white"
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
                      className="absolute z-10 hidden w-auto text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700"
                    >
                      <ul className="p-4 flex w-96 flex-wrap">
                        {uniqueCultures.map((culture, index) => (
                          <li key={index}>
                            <div
                              className="min-w-28 flex items-center py-2 cursor-pointer inline-block hover:font-bold"
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
                              {culture.charAt(0).toUpperCase() +
                                culture.slice(1)}
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                  <li>
                    <button
                      id="tools"
                      data-dropdown-toggle="tools-dropdown"
                      className="flex items-center drop-shadow-xl shadow-black block py-1 px-3 text-gray-900 rounded-xl hover:bg-white hover:text-gray-900 dark:text-white"
                    >
                      Tools
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
                      id="tools-dropdown"
                      className="absolute z-10 grid hidden w-auto grid-cols-1 text-sm bg-white border border-gray-100 rounded-lg shadow-md dark:border-gray-700 dark:bg-gray-700"
                    >
                      <div className="p-4 pb-0 text-gray-900 md:pb-4 dark:text-white">
                        <ul className="space-y-4" aria-labelledby="tools">
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                              <span className="sr-only">About us</span>
                              <svg
                                className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                              </svg>
                              About Us
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="flex items-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-500 group"
                            >
                              <span className="sr-only">Library</span>
                              <svg
                                className="w-3 h-3 me-2 text-gray-400 dark:text-gray-500 group-hover:text-blue-600 dark:group-hover:text-blue-500"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                              >
                                <path d="m1.56 6.245 8 3.924a1 1 0 0 0 .88 0l8-3.924a1 1 0 0 0 0-1.8l-8-3.925a1 1 0 0 0-.88 0l-8 3.925a1 1 0 0 0 0 1.8Z" />
                                <path d="M18 8.376a1 1 0 0 0-1 1v.163l-7 3.434-7-3.434v-.163a1 1 0 0 0-2 0v.786a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.786a1 1 0 0 0-1-1Z" />
                                <path d="M17.993 13.191a1 1 0 0 0-1 1v.163l-7 3.435-7-3.435v-.163a1 1 0 1 0-2 0v.787a1 1 0 0 0 .56.9l8 3.925a1 1 0 0 0 .88 0l8-3.925a1 1 0 0 0 .56-.9v-.787a1 1 0 0 0-1-1Z" />
                              </svg>
                              Library
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li>
                    <Link href="https://blog.xyz.com">
                      <div className="text-gray-900 shadow-black block py-1 px-3 text-gray-900 rounded-xl hover:text-gray-900">
                        Blog
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/advertise-with-us">
                      <div className="text-gray-900 shadow-black block py-1 px-3 text-gray-900 rounded-xl hover:text-gray-900">
                        Advertise with us
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/write-for-us">
                      <div className="text-gray-900 shadow-black block py-1 px-3 text-gray-900 rounded-xl hover:text-gray-900">
                        Write for us
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact-us">
                      <div className="text-gray-900 shadow-black block py-1 px-3 text-gray-900 rounded-xl hover:text-gray-900">
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
