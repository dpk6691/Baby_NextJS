import React, { useState } from "react";
import Head from "next/head";
import India from "./../../../../../pages/api/India";
import TableData from "../../../../../components/TableData";
import RashiList from "../../../../../components/CommonComponents/sidebar/RashiList";
import NumurolySidebar from "../../../../../components/CommonComponents/sidebar/NumurolySidebar";
import AdSection from "../../../../../components/HomeComponents/AfterBannerComponemts/AdSection";

const LetterPage = () => {
  const { IndiaData } = India();
  const [selectedGenderState, setSelectedGenderState] = useState("");
  const [selectedLetterState, setSelectedLetterState] = useState("");
  const [totalFilteredObjects, setTotalFilteredObjects] = useState(0);
  const [selectedCultureState, setSelectedCultureState] = useState("");

  const handleTotalFilteredObjectsChange = (total) => {
    setTotalFilteredObjects(total);
  };

  return (
    <div>
      <Head>
        <title>
          {totalFilteredObjects}{" "}
          {selectedCultureState // Check if selectedCultureState is not empty
            ? selectedCultureState.split("-")[0].charAt(0).toUpperCase() +
              selectedCultureState.split("-")[0].slice(1) +
              " "
            : ""}{" "}
          Baby {selectedGenderState ? selectedGenderState : "Gender"} Names
          Starting With Letter '
          {selectedLetterState ? selectedLetterState.toUpperCase() : ""}'
        </title>

        <meta
          name="description"
          content={`Find the most unique baby ${
            selectedGenderState
              ? selectedGenderState.charAt(0).toUpperCase() +
                selectedGenderState.slice(1).toLowerCase()
              : "Gender"
          } names that start with the letter '${
            selectedLetterState ? selectedLetterState.toUpperCase() : ""
          }'. Explore the list of ${totalFilteredObjects} ${
            selectedCultureState
              ? selectedCultureState.split("-")[0].charAt(0).toUpperCase() +
                selectedCultureState.split("-")[0].slice(1)
              : ""
          } baby ${
            selectedGenderState
              ? selectedGenderState.charAt(0).toUpperCase() +
                selectedGenderState.slice(1).toLowerCase()
              : "Gender"
          } names with meaning and pronunciation.`}
        />
      </Head>

      <div className="w-11/12 m-auto pt-32 xl:pt-28">
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-9/12">
            <h1 className="text-2xl mb-2 text-center text-slate-900">
              <span className="text-pink-500">Latest</span>{" "}
              {selectedCultureState
                ? selectedCultureState
                    .split("-")[0]
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
                : ""}{" "}
              {selectedGenderState
                ? selectedGenderState.charAt(0).toUpperCase() +
                  selectedGenderState.slice(1).toLowerCase()
                : "Gender"}{" "}
              <span className="text-blue-500">Names</span> with Letter "
              {selectedLetterState ? selectedLetterState.toUpperCase() : ""}"
            </h1>
            <p className="pt-2 mb-6 md:px-20 text-center">
              Discover a range of{" "}
              {selectedCultureState
                ? selectedCultureState
                    .split("-")[0]
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
                : ""}{" "}
              baby{" "}
              {selectedGenderState
                ? selectedGenderState.charAt(0).toUpperCase() +
                  selectedGenderState.slice(1).toLowerCase()
                : "Gender"}{" "}
              names starting with the letter '
              {selectedLetterState ? selectedLetterState.toUpperCase() : ""}'.
              We've included a variety of traditional, cultural, unique, and
              modern names to suit{" "}
              {selectedCultureState
                ? selectedCultureState
                    .split("-")[0]
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
                : ""}{" "}
              culture. Each name comes with its meaning and pronunciation to
              help you make your choice.
              <br></br>
              <br></br>
              We hope you find these names worth exploring and choose a
              beautiful name for your little one.
            </p>
            <TableData
              setSelectedGenderState={setSelectedGenderState}
              setSelectedLetterState={setSelectedLetterState}
              setSelectedCultureState={setSelectedCultureState}
              onTotalChange={handleTotalFilteredObjectsChange}
            />
          </div>
          <div className="xl:ml-5 mt-7 self-start xl:mt-0 p-5 bg-slate-50 rounded-3xl grid justify-items-stretch gap-5 w-full xl:w-1/4">
            <AdSection />
            <div className="bg-blue-50 w-full p-7 rounded-3xl">
              <NumurolySidebar />
            </div>
            <RashiList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterPage;
