// LetterSearch.js

import React from "react";

const LetterSearch = ({ onSelectLetter, selectedGender, activeLetter }) => {
  const getBackgroundColor = () => {
    if (selectedGender === "boy") {
      return "bg-blue-500 border-blue-500";
    } else if (selectedGender === "girl") {
      return "bg-pink-500 border-pink-500";
    } else {
      return "bg-slate-900 border-slate-500";
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
                ? "text-white text-xl border-2 " + getBackgroundColor()
                : "bg-slate-100 text-xl text-black border-slate-300 border-2 hover:bg-slate-800"
            } py-1 px-4 rounded-xl hover:text-white`}
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
