import React, { useState } from "react";
import Head from "next/head";
import TableData from "../../../../components/TableData";

const GenderPage = () => {
  const [selectedGenderState, setSelectedGenderState] = useState("");
  const [selectedLetterState, setSelectedLetterState] = useState("");
  const [selectedCultureState, setSelectedCultureState] = useState("");

  return (
    <div>
      <Head>
        <title>
          Best{" "}
          {selectedCultureState // Check if selectedCultureState is not empty
            ? selectedCultureState.split("-")[0].charAt(0).toUpperCase() +
              selectedCultureState.split("-")[0].slice(1) +
              " "
            : ""}{" "}
          Baby{" "}
          {selectedGenderState
            ? selectedGenderState.charAt(0).toUpperCase() +
              selectedGenderState.slice(1).toLowerCase()
            : "Gender"}{" "}
          Names with Meaning and Pronunciation
        </title>

        <meta
          name="description"
          content={`What magical name will you give your little one? From traditional to modern, find the perfect Indian ${
            selectedGenderState ? selectedGenderState : "Gender"
          } name for your little one. Start browsing!`}
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

export default GenderPage;
