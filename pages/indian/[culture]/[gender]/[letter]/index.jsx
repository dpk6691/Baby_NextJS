import React, { useState } from "react";
import Head from "next/head";
import India from "./../../../../../pages/api/India";
import TableData from "../../../../../components/TableData";

const LetterPage = () => {
  const { IndiaData } = India();
  const [selectedGenderState, setSelectedGenderState] = useState("");
  const [selectedLetterState, setSelectedLetterState] = useState("");
  const [selectedCultureState, setSelectedCultureState] = useState("");

  const selectedCultureStateLast = selectedCultureState
    ? selectedCultureState.charAt(0).toUpperCase() +
      selectedCultureState.slice(1).toLowerCase().replace("-baby-names", "")
    : "";

  const totalNames = selectedCultureStateLast
    ? IndiaData?.filter((item) => item.culture == selectedCultureStateLast)
        .length
    : 0;

  return (
    <div>
      <Head>
        <title>
          {totalNames}{" "}
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
          }'. Explore the list of ${totalNames} ${
            selectedCultureState // Check if selectedCultureState is not empty
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

      <TableData
        setSelectedGenderState={setSelectedGenderState}
        setSelectedLetterState={setSelectedLetterState}
        setSelectedCultureState={setSelectedCultureState}
      />
    </div>
  );
};

export default LetterPage;
