import React, { useState } from "react";
import India from "./../pages/api/India";

const NameCombiner = () => {
  const { IndiaData } = India();
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [gender, setGender] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Function to shuffle array elements randomly
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Take the first letter from both fatherName and motherName
    const fatherPrefix = fatherName.charAt(0).toLowerCase();
    const motherPrefix = motherName.charAt(0).toLowerCase();

    // Filter IndiaData based on user input
    const filteredResults = IndiaData.filter((data) => {
      const nameLower = data.name.toLowerCase();
      // Check if the name starts with either father or mother prefix
      return (
        data.gender === gender &&
        (nameLower.startsWith(fatherPrefix) ||
          nameLower.startsWith(motherPrefix))
      );
    });

    // Shuffle the filtered results randomly
    const shuffledResults = shuffleArray(filteredResults);

    // Take top 5 most related names
    const top5Results = shuffledResults.slice(0, 5);

    // Combine father and mother prefix with every name and include meaning
    const combinedResults = top5Results.map((result) => {
      const fatherIndex = result.name.toLowerCase().indexOf(fatherPrefix);
      const motherIndex = result.name.toLowerCase().indexOf(motherPrefix);
      const fatherPart = result.name.substring(fatherIndex, fatherIndex + 1);
      const motherPart = result.name.substring(motherIndex, motherIndex + 1);
      const remainingPart = result.name.substring(1).toLowerCase();
      const combination = `${fatherPart} from ${fatherName} ${motherPart} from ${motherName} ${remainingPart}`;
      return {
        ...result,
        combination: combination,
      };
    });

    setSearchResults(combinedResults);
  };

  return (
    <div className="w-11/12 m-auto pt-32 md:pt-28">
      <form onSubmit={handleSubmit} className="mb-8">
        <div className="mb-4">
          <label htmlFor="fatherName" className="block mb-2">
            Father's Name
          </label>
          <input
            type="text"
            id="fatherName"
            value={fatherName}
            onChange={(e) => setFatherName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="motherName" className="block mb-2">
            Mother's Name
          </label>
          <input
            type="text"
            id="motherName"
            value={motherName}
            onChange={(e) => setMotherName(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="gender" className="block mb-2">
            Gender
          </label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="border border-gray-300 rounded-md px-3 py-2 w-full"
          >
            <option value="">Select Gender</option>
            <option value="Boy">Boy</option>
            <option value="Girl">Girl</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>

      <hr />

      <h2 className="text-xl font-semibold mt-8 mb-4">
        Baby name suggestions:
      </h2>
      {searchResults.length > 0 ? (
        <table className="w-full border-collapse border border-gray-400">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="border border-gray-400 px-4 py-2">Name</th>
              {/* <th className="border border-gray-400 px-4 py-2">Combination</th> */}
              <th className="border border-gray-400 px-4 py-2">Meaning</th>
            </tr>
          </thead>
          <tbody>
            {searchResults.map((result, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-100" : ""}>
                <td className="border border-gray-400 px-4 py-2">
                  {result.name}
                </td>
                {/* <td className="border border-gray-400 px-4 py-2">
                  {result.combination}
                </td> */}
                <td className="border border-gray-400 px-4 py-2">
                  {result.meaning_of_name}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No results found.</p>
      )}
    </div>
  );
};

export default NameCombiner;
