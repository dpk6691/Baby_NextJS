import React, { useState, useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import GenderSearch from "./CommonComponents/GenderSearch";
import Link from "next/link";
import { useSpeechSynthesis } from "react-speech-kit";
import India from "./../pages/api/India";
import AdSection from "./HomeComponents/AfterBannerComponemts/AdSection";
import NumurolySidebar from "./CommonComponents/sidebar/NumurolySidebar";

const itemsPerPage = 50;

const Rashi = () => {
  const router = useRouter();
  const { IndiaData, isLoading } = India();
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedCulture, setSelectedCulture] = useState("");
  const [selectedRashi, setSelectedRashi] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { speak, voices } = useSpeechSynthesis();

  const allEntries = useMemo(() => {
    return IndiaData && Array.isArray(IndiaData) ? IndiaData.flat() : [];
  }, [IndiaData]);

  const allCultures = useMemo(
    () => allEntries.map((entry) => entry.culture),
    [allEntries]
  );
  const uniqueCultures = useMemo(
    () => [...new Set(allCultures)],
    [allCultures]
  );

  const rashiInitials = useMemo(
    () => ({
      Dhanu: ["BH", "F", "DH"],
      Kanya: ["P", "THA"],
      Karka: ["DD", "H"],
      Kumbha: ["G", "S", "Sh"],
      Makar: ["KH", "J"],
      Meena: ["D", "CH", "Z", "TH"],
      Mesha: ["A", "L", "E", "I", "O"],
      Mithun: ["K", "CHH", "GH", "Q", "C"],
      Simha: ["M", "TT"],
      Tula: ["R", "T"],
      Vrishabha: ["B", "V", "U", "W"],
      Vruschika: ["N", "Y"],
    }),
    []
  );

  const rashiZodiacMapping = useMemo(
    () => ({
      Dhanu: "Sagittarius",
      Kanya: "Virgo",
      Karka: "Cancer",
      Kumbha: "Aquarius",
      Makar: "Capricorn",
      Meena: "Pisces",
      Mesha: "Aries",
      Mithun: "Gemini",
      Simha: "Leo",
      Tula: "Libra",
      Vrishabha: "Taurus",
      Vruschika: "Scorpio",
    }),
    []
  );

  const rashiPersonalityTraits = useMemo(
    () => ({
      Dhanu: "Optimistic, adventurous, philosophical, honest, and independent.",
      Kanya: "Practical, analytical, reliable, kind, and hardworking.",
      Karka: "Emotional, intuitive, protective, nurturing, and imaginative.",
      Kumbha:
        "Innovative, intellectual, humanitarian, eccentric, and independent.",
      Makar: "Responsible, disciplined, ambitious, practical, and cautious.",
      Meena: "Compassionate, artistic, intuitive, gentle, and wise.",
      Mesha:
        "Courageous, confident, enthusiastic, determined, and independent.",
      Mithun: "Adaptable, outgoing, intelligent, witty, and expressive.",
      Simha: "Confident, generous, loyal, dramatic, and charismatic.",
      Tula: "Diplomatic, charming, social, cooperative, and fair-minded.",
      Vrishabha: "Reliable, patient, practical, devoted, and sensual.",
      Vruschika: "Passionate, resourceful, brave, stubborn, and loyal.",
    }),
    []
  );

  const rashiCompatibility = useMemo(
    () => ({
      Dhanu: "Best with Aries(Mesh) and Leo(Simha).",
      Kanya: "Most compatible with Taurus (Vrishabha) and Capricorn (Makar).",
      Karka: "Most compatible with Scorpio (Vruschika) and Pisces (Meena).",
      Kumbha: "Best with Gemini (Mithun) and Libra (Tula).",
      Makar: "Most compatible with Taurus (Vrishabha) and Virgo (Kanya).",
      Meena: "Most compatible with Cancer (Karka) and Scorpio (Vruschika).",
      Mesha: "Best with Leo (Simha) and Sagittarius (Dhanu).",
      Mithun: "Best with Libra (Tula) and Aquarius (Kumbha).",
      Simha: "Best with Aries (Mesh) and Sagittarius (Dhanu).",
      Tula: "Best with Gemini (Mithun) and Aquarius (Kumbha).",
      Vrishabha: "Most compatible with Virgo (Kanya) and Capricorn (Makar).",
      Vruschika: "Most compatible with Cancer (Karka) and Pisces (Meena).",
    }),
    []
  );

  const rashiChallenges = useMemo(
    () => ({
      Dhanu: "Challenges with Virgo (Kanya) and Pisces (Meena).",
      Kanya: "Challenges with Gemini (Mithun) and Sagittarius (Dhanu).",
      Karka: "Challenges with Aries (Mesh) and Libra (Tula).",
      Kumbha: "Challenges with Taurus (Vrishabha) and Scorpio (Vruschika).",
      Makar: "Challenges with Aries (Mesh) and Libra (Tula).",
      Meena: "Challenges with Gemini (Mithun) and Sagittarius (Dhanu).",
      Mesha: "Challenges with Cancer (Karka) and Capricorn (Makar).",
      Mithun: "Challenges with Pisces (Meena) and Virgo (Kanya).",
      Simha: "Challenges with Taurus (Vrishabha) and Scorpio (Vruschika).",
      Tula: "Challenges with Cancer (Karka) and Capricorn (Makar).",
      Vrishabha: "Challenges with Scorpio (Vruschika) and Aquarius (Kumbha).",
      Vruschika: "Challenges with Leo (Simha) and Aquarius (Kumbha).",
    }),
    []
  );

  useEffect(() => {
    filterData();
  }, [selectedGender, selectedCulture, selectedRashi, currentPage, allEntries]);

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCulture, selectedRashi]);

  useEffect(() => {
    console.log("Effect triggered with query:", router.query);
    const { rashi } = router.query;
    if (rashi) {
      const formattedRashi =
        rashi.charAt(0).toUpperCase() + rashi.slice(1).toLowerCase();
      setSelectedRashi(formattedRashi);
    }
  }, [router.query]);

  useEffect(() => {
    if (selectedRashi) {
      router.push(`/rashi/${selectedRashi.toLowerCase()}`);
    }
  }, [selectedRashi]);

  useEffect(() => {
    const rashiNameParam = router.query.rashiName;
    if (rashiNameParam) {
      const formattedRashiName =
        rashiNameParam.charAt(0).toUpperCase() +
        rashiNameParam.slice(1).toLowerCase();
      setSelectedRashi(formattedRashiName); // Set selected rashi option
    }
  }, [router.query]);

  const filterData = () => {
    let filtered = allEntries;

    if (selectedGender) {
      filtered = filtered.filter(
        (entry) =>
          entry.gender &&
          entry.gender.toLowerCase() === selectedGender.toLowerCase()
      );
    }

    if (selectedCulture) {
      filtered = filtered.filter(
        (entry) =>
          entry.culture &&
          entry.culture.toLowerCase() === selectedCulture.toLowerCase()
      );
    }

    if (selectedRashi) {
      filtered = filtered.filter((entry) => {
        const nameUpperCase = entry.name.toUpperCase();
        const rashiInitialsMatch = rashiInitials[selectedRashi].some(
          (initial) => nameUpperCase.startsWith(initial)
        );

        // Check if rashiPersonalityTraits[selectedRashi] is an array before using .some()
        const rashiPersonalityTraitsArray = Array.isArray(
          rashiPersonalityTraits[selectedRashi]
        )
          ? rashiPersonalityTraits[selectedRashi]
          : [];

        const rashiPersonalityTraitsMatch = rashiPersonalityTraitsArray.some(
          (initial) => nameUpperCase.startsWith(initial)
        );

        // Similar handling for rashiCompatibility and rashiChallenges
        const rashiCompatibilityArray = Array.isArray(
          rashiCompatibility[selectedRashi]
        )
          ? rashiCompatibility[selectedRashi]
          : [];

        const rashiCompatibilityMatch = rashiCompatibilityArray.some(
          (initial) => nameUpperCase.startsWith(initial)
        );

        const rashiChallengesArray = Array.isArray(
          rashiChallenges[selectedRashi]
        )
          ? rashiChallenges[selectedRashi]
          : [];

        const rashiChallengesMatch = rashiChallengesArray.some((initial) =>
          nameUpperCase.startsWith(initial)
        );

        // Combine all matching criteria using logical OR operator
        return (
          entry.name &&
          (rashiInitialsMatch ||
            rashiPersonalityTraitsMatch ||
            rashiCompatibilityMatch ||
            rashiChallengesMatch)
        );
      });
    }

    setFilteredData(filtered);
  };

  const totalPages = useMemo(
    () => Math.ceil(filteredData.length / itemsPerPage),
    [filteredData]
  );

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  const selectedRashiLetters = selectedRashi
    ? rashiInitials[selectedRashi]
    : [];

  const selectedPersonality = selectedRashi
    ? rashiPersonalityTraits[selectedRashi]
    : [];

  const selectedCompatibility = selectedRashi
    ? rashiCompatibility[selectedRashi]
    : [];

  const selectedChallenges = selectedRashi
    ? rashiChallenges[selectedRashi]
    : [];

  return (
    <div className="w-11/12 m-auto pt-32 md:pt-28">
      <div className="flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-9/12">
          <h1 className="text-2xl mb-2 text-center text-pink-500">
            Title (H1)
          </h1>
          <p class="pt-2 mb-6 px-20 text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <div className="shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl">
            <div className="flex flex-col md:flex-row justify-between mb-5">
              <GenderSearch
                genderSelected={(gender) => {
                  setSelectedGender(gender);
                }}
              />

              <select
                value={selectedCulture}
                onChange={(e) => {
                  setSelectedCulture(e.target.value);
                }}
                className="cursor-pointer py-2 px-4 inline-flex items-center px-6 py-1 text-l font-medium rounded-2xl border-2 border-gray-200 hover:border-gray-500 text-gray-500 hover:bg-gray-600 hover:text-white mt-4 md:mt-0"
              >
                <option value="">Select Culture</option>
                {uniqueCultures.map((culture) => (
                  <option key={culture} value={culture}>
                    {culture &&
                      culture.charAt(0).toUpperCase() + culture.slice(1)}
                  </option>
                ))}
              </select>

              <select
                value={selectedRashi}
                onChange={(e) => setSelectedRashi(e.target.value)}
                className="cursor-pointer py-2 px-4 inline-flex items-center px-6 py-1 text-l font-medium rounded-2xl border-2 border-gray-200 hover:border-gray-500 text-gray-500 hover:bg-gray-600 hover:text-white mt-4 md:mt-0"
              >
                <option value="">Select Rashi</option>
                {Object.entries(rashiZodiacMapping).map(([rashi, zodiac]) => (
                  <option key={rashi} value={rashi}>
                    {`${rashi} - ${zodiac}`}
                  </option>
                ))}
              </select>
            </div>
            <div className="relative">
              <div
                className={`overflow-x-auto animate-fade-in`}
                style={{ transition: "opacity 0.5s" }}
              >
                {isLoading ? (
                  <table className="w-full text-sm text-left text-gray-500">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                      <tr>
                        <th scope="col" className="px-4 py-3">
                          Name
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Gender
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Culture
                        </th>
                        <th scope="col" className="px-4 py-3">
                          Pronunciation
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-16 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-28  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-12 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                      <tr class="animate-pulse border-b">
                        <th className="px-3 py-4">
                          <div class="h-4 w-32 bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-10  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-32  bg-gray-200 rounded-full"></div>
                        </th>
                        <th className="px-3 py-4">
                          <div class="h-4 w-24 bg-gray-200 rounded-full"></div>
                        </th>
                      </tr>
                    </tbody>
                  </table>
                ) : selectedRashi || filteredData.length > 0 ? (
                  <>
                    {selectedRashi.length > 0 ? (
                      <div className=" mb-3 overflow-x-auto">
                        <table className="w-full text-sm text-left">
                          <tbody>
                            <tr className="border-b border-gray-200">
                              <th
                                scope="row"
                                className="px-6 w-1/4 py-3 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                              >
                                Rashi
                              </th>
                              <td className="px-6 py-3 w-3/4">
                                {selectedRashi}
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <th
                                scope="row"
                                className="px-6 py-4  w-1/4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                              >
                                Zodiac
                              </th>
                              <td className="px-6 py-4 w-3/4 ">
                                {rashiZodiacMapping[selectedRashi]}
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <th
                                scope="row"
                                className="px-6 py-4 w-1/4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                              >
                                Letter
                              </th>
                              <td className="px-6 py-4 w-3/4">
                                {selectedRashiLetters.join(", ")}
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <th
                                scope="row"
                                className="px-6 py-4 w-1/4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                              >
                                Personality Traits
                              </th>
                              <td className="px-6 py-4 w-3/4">
                                {selectedPersonality}
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <th
                                scope="row"
                                className="px-6 py-4 w-1/4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                              >
                                Compatibility
                              </th>
                              <td className="px-6 py-4 w-3/4">
                                {selectedCompatibility}
                              </td>
                            </tr>
                            <tr className="border-b border-gray-200">
                              <th
                                scope="row"
                                className="px-6 py-4 w-1/4 font-medium text-gray-900 whitespace-nowrap bg-gray-50"
                              >
                                Challenges
                              </th>
                              <td className="px-6 py-4 w-3/4">
                                {selectedChallenges}
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    ) : null}

                    <div className=" mb-3 overflow-x-auto">
                      <table className="w-full text-sm text-left text-gray-500">
                        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                          <tr>
                            <th scope="col" className="px-4 py-3">
                              Name
                            </th>
                            <th scope="col" className="px-4 py-3">
                              Gender
                            </th>
                            <th scope="col" className="px-4 py-3">
                              Culture
                            </th>
                            <th scope="col" className="px-4 py-3">
                              Pronunciation
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {filteredData
                            .slice(
                              (currentPage - 1) * itemsPerPage,
                              currentPage * itemsPerPage
                            )
                            .map((entry, index) => (
                              <React.Fragment key={index}>
                                <tr className="border-b hover:bg-gray-100">
                                  <td
                                    className={`px-4 py-2 font-bold underline decoration-double decoration-1 hover:decoration-2 underline-offset-4 whitespace-nowrap ${
                                      selectedGender === "boy"
                                        ? "text-blue-500 decoration-blue-500"
                                        : selectedGender === "girl"
                                        ? "text-pink-500 decoration-pink-500"
                                        : "text-gray-500 decoration-emerald-500 "
                                    }`}
                                  >
                                    <Link
                                      href={`/indian/baby-name/${entry.name.toLowerCase()}`}
                                    >
                                      {entry.name}
                                    </Link>
                                  </td>
                                  <td className="px-4 py-2 text-gray-900 whitespace-nowrap ">
                                    {entry.gender}
                                  </td>
                                  <td className="px-4 py-2 text-gray-900 whitespace-nowrap ">
                                    {entry.culture &&
                                      entry.culture.charAt(0).toUpperCase() +
                                        entry.culture.slice(1)}
                                  </td>
                                  <td className="px-4 py-2 text-gray-900 whitespace-nowrap ">
                                    <button
                                      className="buttonStyle border border-transparent hover:border-slate-500 p-1 rounded-lg "
                                      onClick={() => {
                                        speak({
                                          text: entry.name,
                                          voice: voices.find((voice) =>
                                            voice.lang.includes("hi-IN")
                                          ),
                                        });
                                      }}
                                    >
                                      <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                      >
                                        <path
                                          className="fill-emerald-500"
                                          d="M13 3.7446C13 3.27314 12.8728 2.50021 12.1657 2.14424C11.4151 1.76635 10.7163 2.19354 10.3623 2.51158L4.94661 7.43717H3C1.89543 7.43717 1 8.3326 1 9.43717L1.00001 14.6248C1.00001 15.7293 1.89544 16.6248 3.00001 16.6248H4.95001L10.3623 21.4891C10.7175 21.8081 11.416 22.2331 12.1656 21.8554C12.8717 21.4998 13 20.7286 13 20.2561V3.7446Z"
                                          fill="#000000"
                                        />
                                        <path
                                          className="fill-slate-500"
                                          d="M17.336 3.79605L17.0952 3.72886C16.5633 3.58042 16.0117 3.89132 15.8632 4.42329L15.7289 4.90489C15.5804 5.43685 15.8913 5.98843 16.4233 6.13687L16.6641 6.20406C18.9551 6.84336 20.7501 9.14615 20.7501 12.0001C20.7501 14.854 18.9551 17.1568 16.6641 17.7961L16.4233 17.8632C15.8913 18.0117 15.5804 18.5633 15.7289 19.0952L15.8632 19.5768C16.0117 20.1088 16.5633 20.4197 17.0952 20.2713L17.336 20.2041C20.7957 19.2387 23.2501 15.8818 23.2501 12.0001C23.2501 8.11832 20.7957 4.76146 17.336 3.79605Z"
                                          fill="#000000"
                                        />
                                        <path
                                          className="fill-slate-500"
                                          d="M16.3581 7.80239L16.1185 7.73078C15.5894 7.57258 15.0322 7.87329 14.874 8.40243L14.7308 8.88148C14.5726 9.41062 14.8733 9.96782 15.4024 10.126L15.642 10.1976C16.1752 10.3571 16.75 11.012 16.75 12C16.75 12.9881 16.1752 13.643 15.642 13.8024L15.4024 13.874C14.8733 14.0322 14.5726 14.5894 14.7308 15.1185L14.874 15.5976C15.0322 16.1267 15.5894 16.4274 16.1185 16.2692L16.3581 16.1976C18.1251 15.6693 19.25 13.8987 19.25 12C19.25 10.1014 18.1251 8.33068 16.3581 7.80239Z"
                                          fill="#000000"
                                        />
                                      </svg>
                                    </button>
                                  </td>
                                </tr>
                                {index === 4 && (
                                  <tr
                                    className="border-b hover:bg-gray-100 "
                                    key="custom-row"
                                  >
                                    <td
                                      className="bg-gray-200 text-center px-4 py-2 font-medium text-gray-900 whitespace-nowrap"
                                      colSpan={
                                        Object.keys(filteredData[0]).length
                                      }
                                    >
                                      AD
                                    </td>
                                  </tr>
                                )}
                              </React.Fragment>
                            ))}
                        </tbody>
                      </table>
                    </div>
                  </>
                ) : (
                  <div>No data found</div>
                )}
              </div>
            </div>

            <div className="flex items-center justify-between px-4 py-3">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="cursor-pointer py-2 px-4 inline-flex items-center px-6 py-1 text-l font-medium rounded-xl border-2 border-gray-200 hover:border-gray-500 text-gray-500 hover:bg-gray-600 hover:text-white"
              >
                Previous
              </button>
              <span className="hidden md:block">{`Page ${currentPage} of ${totalPages}`}</span>
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="cursor-pointer py-2 px-4 inline-flex items-center px-6 py-1 text-l font-medium rounded-xl border-2 border-gray-200 hover:border-gray-500 text-gray-500 hover:bg-gray-600 hover:text-white"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        <div className="md:ml-5 mt-3 self-start md:mt-0 p-5 bg-gray-50 rounded-3xl grid justify-items-stretch gap-5 w-full md:w-1/4">
          <AdSection />
          <div className="bg-blue-50 w-full p-7 rounded-3xl">
            <NumurolySidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rashi;
