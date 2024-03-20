import React, { useState } from "react";
import Head from "next/head";
import TableData from "../../../../../components/TableData";

const LetterPage = () => {
  const [selectedGenderState, setSelectedGenderState] = useState("");
  const [selectedLetterState, setSelectedLetterState] = useState("");
  const [selectedCultureState, setSelectedCultureState] = useState("");

  return (
    <div>
      <Head>
        <title>{`Culture Page - ${selectedGenderState}/${selectedLetterState}/${selectedCultureState}`}</title>
        <meta
          name="description"
          content={`Culture Page - ${selectedGenderState}/${selectedLetterState}/${selectedCultureState}`}
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
