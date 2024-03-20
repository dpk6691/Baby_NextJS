import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

const GenderSearch = ({ genderSelected }) => {
  const router = useRouter();
  const { gender } = router.query;
  const [selectedGender, setSelectedGender] = useState(gender || null);

  useEffect(() => {
    setSelectedGender(gender);
  }, [gender]);

  const selectGender = (selected) => {
    setSelectedGender(selected);
    genderSelected(selected);
  };

  return (
    <div className="inline-flex justify-center" role="group">
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="gender"
          value="boy"
          checked={selectedGender === "boy"}
          onChange={() => selectGender("boy")}
          className="sr-only"
        />
        <div
          className={`cursor-pointer py-2 px-4 inline-flex items-center px-6 py-1 text-2xl font-medium rounded-l-2xl ${
            selectedGender === "boy"
              ? "bg-blue-500 text-white  border-2 border-blue-500"
              : "border-2 bg-blue-100 border-blue-300 hover:border-blue-500 text-slate-500 hover:bg-slate-600 hover:text-white"
          }`}
        >
          Boy
        </div>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          name="gender"
          value="girl"
          checked={selectedGender === "girl"}
          onChange={() => selectGender("girl")}
          className="sr-only"
        />
        <div
          className={`cursor-pointer py-2 px-4 inline-flex items-center px-6 py-1 text-2xl font-medium rounded-r-2xl ${
            selectedGender === "girl"
              ? "bg-pink-500 text-white border-2 border-pink-500 "
              : "border-2 bg-pink-100 border-pink-300 hover:border-pink-500 text-slate-500 hover:bg-slate-600 hover:text-white"
          }`}
        >
          Girl
        </div>
      </label>
    </div>
  );
};

export default GenderSearch;
