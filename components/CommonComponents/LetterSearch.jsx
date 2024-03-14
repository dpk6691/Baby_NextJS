// LetterSearch.js

import React from "react";

const LetterSearch = ({ onSelectLetter, selectedGender, activeLetter }) => {
  const getBackgroundColor = () => {
    if (selectedGender === "boy") {
      return "bg-blue-500";
    } else if (selectedGender === "girl") {
      return "bg-pink-500";
    } else {
      return "bg-gray-900";
    }
  };

  const handleLetterClick = (letter) => {
    onSelectLetter(letter);
  };

  return (
    <div>
      <div className="flex max-w-[920px] m-auto flex-wrap justify-center mt-7 gap-4 dark:text-white">
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
          <div
            key={letter}
            className={`inline-flex items-center cursor-pointer w-8 flex justify-center ${
              activeLetter === letter
                ? "text-white " + getBackgroundColor()
                : "bg-white text-gray-900 border-2 hover:bg-gray-500"
            } py-1 px-3 rounded-xl hover:text-white`}
            onClick={() => handleLetterClick(letter)}
          >
            {letter.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterSearch;
