import React, { useState } from "react";
import Head from "next/head";
import India from "./../../../pages/api/India";
import TableData from "../../../components/TableData";

const CulturePage = () => {
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
          {selectedCultureState // Check if selectedCultureState is not empty
            ? selectedCultureState.split("-")[0].charAt(0).toUpperCase() +
              selectedCultureState.split("-")[0].slice(1) +
              " "
            : ""}
          Baby Names You'll Love: With Meaning and Pronunciation!
        </title>
        <meta
          name="description"
          content={`Firststep.baby brought to you ${totalNames} ${
            selectedCultureState
              ? selectedCultureState
                  .split("-")[0]
                  .toLowerCase()
                  .charAt(0)
                  .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
              : ""
          } baby boy and girl names. Explore a collection of unique ${
            selectedCultureState
              ? selectedCultureState
                  .split("-")[0]
                  .toLowerCase()
                  .charAt(0)
                  .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
              : ""
          } baby names with meanings and pronunciations.`}
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

export default CulturePage;
