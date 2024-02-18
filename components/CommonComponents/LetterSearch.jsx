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
                ? "text-white bg-gray-900"
                : "bg-white text-gray-900 border-2  hover:bg-gray-500"
            } py-1 px-3 rounded-xl hover:text-white`}
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
