import React, { useState } from "react";
import Rashi from "../../../components/Rashi";
import Head from "next/head";

const RashiPage = () => {
  const [selectedRashi, setSelectedRashi] = useState("");

  const handleRashiSelection = (rashi) => {
    setSelectedRashi(rashi);
  };

  return (
    <>
      <Head>
        <title>
          Find the Perfect {selectedRashi.replace("-baby-names", "")} Rashi
          (Zodiac) Name for Your Baby
        </title>
        <meta
          name="description"
          content={`Looking for an auspicious name for your ${selectedRashi.replace(
            "-baby-names",
            ""
          )} Rashi baby? Find a meaningful names list aligned with your child's zodiac sign.`}
        />
      </Head>
      <Rashi onSelectRashi={handleRashiSelection} />
    </>
  );
};

export default RashiPage;
