import React, { useState, useEffect } from "react";

const LetterSearch = ({ activeLetter, onSelectLetter }) => {
  const [active, setActive] = useState(activeLetter);

  useEffect(() => {
    setActive(activeLetter);
  }, [activeLetter]);

  const getLetter = (letter) => {
    setActive(letter);
    onSelectLetter(letter);
  };

  return (
    <div>
      <div className="flex flex-wrap justify-center mt-7 gap-4 dark:text-white">
        {Array.from("abcdefghijklmnopqrstuvwxyz").map((letter) => (
          <div
            key={letter}
            className={`inline-flex items-center cursor-pointer w-8 flex justify-center ${
              active === letter
                ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-xl "
                : "bg-white text-gray-900 drop-shadow-xl shadow-black"
            } py-1 px-3 rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white`}
            onClick={() => getLetter(letter)}
          >
            {letter.toUpperCase()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default LetterSearch;
