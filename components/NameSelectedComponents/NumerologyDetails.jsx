import React from "react";

const NumerologyDetails = ({ lowerCaseName }) => {
  function generateNumerologyDetails(name) {
    const letterValues = {
      a: 1,
      b: 2,
      c: 3,
      d: 4,
      e: 5,
      f: 6,
      g: 7,
      h: 8,
      i: 9,
      j: 1,
      k: 2,
      l: 3,
      m: 4,
      n: 5,
      o: 6,
      p: 7,
      q: 8,
      r: 9,
      s: 1,
      t: 2,
      u: 3,
      v: 4,
      w: 5,
      x: 6,
      y: 7,
      z: 8,
    };

    const characters = name.toLowerCase().split("");
    let numerologyDetails = [];

    numerologyDetails.push(
      <div key="header" className="text-center mb-2">
        <p className="text-2xl pb-2 font-bold">Numerology Details</p>
        <hr className="border-slate-300 my-2" />
      </div>
    );

    numerologyDetails.push(
      <div key="numerologyContainer" className="flex justify-center">
        {characters.map((char, index) => {
          const value = letterValues[char];
          if (value) {
            return (
              <div key={index} className="py-1 text-xl px-2">
                <span className="font-bold">{char.toUpperCase()}</span>
                <span>-{value}</span>
              </div>
            );
          }
          return null;
        })}
      </div>
    );

    const numerologySum = characters.reduce((sum, char) => {
      const value = letterValues[char];
      return value ? sum + value : sum;
    }, 0);

    numerologyDetails.push(
      <hr key="separator" className="border-slate-300 my-2" />,
      <table className="w-full text-xl p-6 text-left ">
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="numSum" className=" border-b">
            <td className="text-right w-1/2 p-4">
              Numerology of the name{" "}
              <span className="font-bold">
                {lowerCaseName && lowerCaseName.length > 0
                  ? lowerCaseName[0].toUpperCase() +
                    lowerCaseName.slice(1).toLowerCase()
                  : ""}
              </span>
            </td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              <span className="font-bold">
                {reduceToSingleDigit(numerologySum)}
              </span>
            </td>
          </tr>
        )}
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="interpretation" className=" border-b">
            <td className="text-right w-1/2 p-4">
              In numerology, number{" "}
              <span className="font-bold">
                {reduceToSingleDigit(numerologySum)}
              </span>{" "}
              is for{" "}
            </td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              <span className="font-bold">
                {interpretNumerology(reduceToSingleDigit(numerologySum))}
              </span>
            </td>
          </tr>
        )}
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="luckyColor" className=" border-b">
            <td className="text-right w-1/2 p-4"> Lucky Color</td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              <span className="font-bold">
                {getLuckyColor(reduceToSingleDigit(numerologySum))}
              </span>
            </td>
          </tr>
        )}
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="luckyNumber" className=" border-b">
            <td className="text-right w-1/2 p-4">Lucky Number</td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              <span className="font-bold">
                {getLuckyNumber(reduceToSingleDigit(numerologySum))}
              </span>
            </td>
          </tr>
        )}
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="romanceNumber" className=" border-b">
            <td className="text-right w-1/2 p-4">Romance Number</td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              <span className="font-bold">
                {getRomanceNumber(reduceToSingleDigit(numerologySum))}
              </span>
            </td>
          </tr>
        )}
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="luckyDay" className=" border-b">
            <td className="text-right w-1/2 p-4">Lucky Day</td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              <span className="font-bold">
                {getLuckyDay(reduceToSingleDigit(numerologySum))}
              </span>
            </td>
          </tr>
        )}
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="rulingPlanet" className=" border-b">
            <td className="text-right w-1/2 p-4">Ruling Planet</td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              <span className="font-bold">
                {getRulingPlanet(reduceToSingleDigit(numerologySum))}
              </span>
            </td>
          </tr>
        )}
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="luckGemstone" className=" border-b">
            <td className="text-right w-1/2 p-4">Luck Gemstone</td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              {" "}
              <span className="font-bold">
                {getLuckGemstone(reduceToSingleDigit(numerologySum))}
              </span>
            </td>
          </tr>
        )}
        {lowerCaseName && lowerCaseName.trim().length > 0 && (
          <tr key="gemstoneBenefits" className=" border-b">
            <td className="text-right w-1/2 p-4">Gemstone Benefits</td>
            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
              <span className="font-bold">
                {getGemstoneBenefits(
                  getLuckGemstone(reduceToSingleDigit(numerologySum))
                )}
              </span>
            </td>
          </tr>
        )}
      </table>
    );

    return numerologyDetails;
  }

  function reduceToSingleDigit(number) {
    while (number > 9) {
      const digits = number.toString().split("").map(Number);
      number = digits.reduce((acc, val) => acc + val, 0);
    }
    return number;
  }

  function interpretNumerology(number) {
    const interpretations = {
      1: "Natural-born leader, independent, and driven to achieve personal goals with innovative and original thinking.",
      2: "Cooperative and diplomatic, possessing a sensitive and intuitive nature, adept at fostering harmonious relationships.",
      3: "Creative and expressive individual, radiating optimism and enthusiasm, contributing a dynamic and joyful presence.",
      4: "Strong, Traditional, Practical, Hard, Worker, Loyal, Organized, Strict, Patient, Dependable",
      5: "Adventurous and dynamic, embracing change and variety with a flexible and adaptable nature.",
      6: "Nurturing and family-oriented, demonstrating responsibility, care, and a commitment to creating harmony in relationships.",
      7: "Analytical and introspective, a spiritual thinker with a quest for knowledge and intuitive insights.",
      8: "Ambitious and success-driven, practical and goal-oriented, possessing authority and power for material and financial abundance.",
      9: "Compassionate and humanitarian, embodying universal love and understanding, symbolizing completion and new beginnings.",
    };
    return interpretations[number];
  }

  function getLuckyColor(number) {
    const colors = ["Red", "Blue", "Yellow", "Green", "Orange", "Purple"];
    return colors[number % colors.length];
  }

  function getLuckyNumber(number) {
    return number * 2;
  }

  function getRomanceNumber(number) {
    return number * 3;
  }

  function getLuckyDay(number) {
    const days = [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday",
    ];
    return days[number % days.length];
  }

  function getRulingPlanet(number) {
    const planets = [
      "Mercury",
      "Venus",
      "Mars",
      "Jupiter",
      "Saturn",
      "Uranus",
      "Neptune",
    ];
    return planets[number % planets.length];
  }

  function getLuckGemstone(number) {
    const gemstones = ["Ruby", "Emerald", "Diamond", "Sapphire", "Opal"];
    return gemstones[number % gemstones.length];
  }

  function getGemstoneBenefits(gemstone) {
    const benefitsMap = {
      Ruby: "Ruby is said to bring success in love and self-confidence.",
      Emerald:
        "Emerald is associated with enhancing intuition and promoting mental clarity.",
      Diamond: "Diamond is believed to bring clarity, abundance, and balance.",
      Sapphire:
        "Sapphire is associated with wisdom, intuition, and spiritual enlightenment.",
      Opal: "Opal is said to enhance creativity, passion, and emotional expression.",
      Pearl: "Pearl is associated with purity, integrity, and feminine energy.",
      Amethyst:
        "Amethyst is said to promote spiritual protection, purification, and wisdom.",
      Topaz:
        "Topaz is believed to bring courage, confidence, and emotional balance.",
      Aquamarine:
        "Aquamarine is associated with soothing energy, tranquility, and clarity of mind.",
    };
    return (
      benefitsMap[gemstone] || "No specific benefits found for this gemstone."
    );
  }

  const numerologyDetails = generateNumerologyDetails(lowerCaseName);

  return <div>{numerologyDetails}</div>;
};

export default NumerologyDetails;
