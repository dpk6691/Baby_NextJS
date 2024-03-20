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
        <title>{`Culture Page - ${selectedGenderState}/${selectedLetterState}/${selectedCultureState}`}</title>
        <meta name="description" content="Explore cultural data" />
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
