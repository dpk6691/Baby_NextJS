import React from "react";
import { useRouter } from "next/router";
import India from "./../pages/api/India";
import NumerologyDetails from "../components/NameSelectedComponents/NumerologyDetails";
import AdSection from "./HomeComponents/AfterBannerComponemts/AdSection";
import RashiList from "./CommonComponents/sidebar/RashiList";

const NameSelected = () => {
  const { IndiaData, isLoading } = India();
  const router = useRouter();
  const { name } = router.query;

  const lowerCaseName = name ? name.toLowerCase() : null;

  let selectedNames = [];
  let genders = [];

  if (lowerCaseName && IndiaData) {
    selectedNames = IndiaData.filter(
      (entry) => entry.name && entry.name.toLowerCase() === lowerCaseName
    );
    genders = selectedNames.reduce((acc, curr) => {
      if (curr.gender && !acc.includes(curr.gender)) {
        acc.push(curr.gender);
      }
      return acc;
    }, []);
  }

  const uniqueGenders = [...new Set(genders)];

  const skeleton = (
    <div className="skeleton">
      <div className="my-2 mt-8 text-xl text-center animate-pulse">
        <div className="h-4 w-72 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
        <div className="h-4 w-64 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
        <div className="h-4 w-24 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
        <div className="h-4 w-48 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
        <div className="h-4 w-36 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
        <div className="h-4 w-48 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
      </div>
      <div className="mt-4 shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl dark:bg-black/35 dark:text-white">
        <div className="my-2 text-xl text-center animate-pulse">
          <div className="h-6 w-72 bg-slate-200 mt-4 mb-7 m-auto rounded-full border-b"></div>
          <div className="h-4 w-48 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
          <div className="h-4 w-72 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
          <div className="h-4 w-64 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
          <div className="h-4 w-48 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
          <div className="h-4 w-24 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
          <div className="h-4 w-36 bg-slate-200 my-4 m-auto rounded-full border-b"></div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="container mx-auto pt-32 md:pt-28">
      <h1 className="text-4xl mb-5 text-center">
        Selected Name:{" "}
        <span className="font-bold">
          {lowerCaseName &&
            lowerCaseName.charAt(0).toUpperCase() + lowerCaseName.slice(1)}
        </span>
      </h1>
      {isLoading ? (
        skeleton
      ) : (
        <>
          {selectedNames.length > 0 && (
            <p className="text-3xl text-center border-y py-4">
              Gender:{" "}
              <span className="font-bold">
                {uniqueGenders.length > 0
                  ? uniqueGenders.join(" / ")
                  : "Not specified"}
              </span>
            </p>
          )}
          <div className="grid md:grid-cols-12 gap-4">
            <div className="md:col-span-3 col-span-6 bg-blue-50 w-full p-7 rounded-3xl mt-4">
              <AdSection />
            </div>
            <div className="col-span-6">
              {selectedNames.map((entry, index) => (
                <div key={index}>
                  {Array.isArray(entry.meaning_of_name) ? (
                    entry.meaning_of_name.map((meaning, i) => {
                      if (
                        displayedMeanings[entry.culture] &&
                        displayedMeanings[entry.culture].has(meaning)
                      ) {
                        return null;
                      }
                      if (!displayedMeanings[entry.culture]) {
                        displayedMeanings[entry.culture] = new Set();
                      }
                      displayedMeanings[entry.culture].add(meaning);
                      return (
                        <table
                          key={i}
                          className="w-full text-xl p-6 text-left whitespace-nowrap"
                        >
                          <tr className="border-b">
                            <td className="text-right w-1/2 p-4">
                              Meaning of {entry.name} in {entry.culture}
                            </td>
                            <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
                              <span className="font-bold">{meaning}</span>
                            </td>
                          </tr>
                        </table>
                      );
                    })
                  ) : (
                    <div>
                      <table className="w-full m-auto text-xl p-6 text-left whitespace-nowrap">
                        <tr className="border-b">
                          <td className="text-right w-1/2 p-4">
                            Meaning of {entry.name} in {entry.culture}
                          </td>
                          <td className="w-1/2 text-wrap px-4 py-2 border-l border-slate-300">
                            <span className="font-bold">
                              {entry.meaning_of_name}
                            </span>
                          </td>
                        </tr>
                      </table>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div className="md:col-span-3 col-span-6 bg-pink-50 w-full rounded-3xl mt-4">
              <RashiList />
            </div>
          </div>

          {selectedNames.length === 0 && !isLoading && (
            <p className="text-red-500 text-center">Name not found</p>
          )}
          {selectedNames.length > 0 && !isLoading && (
            <>
              <div className="mt-4 shadow-lg border-4 bg-white/80 w-full border-black-500/100 p-4 rounded-3xl dark:bg-black/35 dark:text-white">
                {name && <NumerologyDetails lowerCaseName={lowerCaseName} />}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default NameSelected;
