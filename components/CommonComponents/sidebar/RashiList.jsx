import Link from "next/link";
import React from "react";

const rashi = [
  { Dhanu: "Sagittarius" },
  { Kanya: "Virgo" },
  { Karka: "Cancer" },
  { Kumbha: "Aquarius" },
  { Makar: "Capricorn" },
  { Meena: "Pisces" },
  { Mesha: "Aries" },
  { Mithun: "Gemini" },
  { Simha: "Leo" },
  { Tula: "Libra" },
  { Vrishabha: "Taurus" },
  { Vruschika: "Scorpio" },
];

const RashiList = () => {
  return (
    <div className="bg-pink-50 w-full p-7 rounded-3xl">
      <h2 className="text-2xl mb-5">Select Rashi</h2>
      <ul className="flex-1 space-y-2">
        {rashi &&
          rashi.map((item, index) => (
            <li
              className="flex items-center hover:text-pink-500 space-x-2"
              key={index}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-3 h-3"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z"
                  clip-rule="evenodd"
                />
              </svg>

              <span>
                <Link href={`/rashi/${Object.keys(item)[0].toLowerCase()}`}>
                  {Object.keys(item)[0]} - {Object.values(item)[0]}
                </Link>
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RashiList;
