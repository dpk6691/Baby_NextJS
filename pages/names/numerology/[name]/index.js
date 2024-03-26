import React, { useState } from "react";
import Numerology from "../../../../components/Numerology";
import Head from "next/head";

const NumoroNamePage = () => {
  const [selectedName, setSelectedName] = useState("");

  const handleNameSelection = (name) => {
    setSelectedName(name);
  };

  return (
    <>
      <Head>
        <title>
          {selectedName} Name Numerology Calculator - Firststep.baby
        </title>

        <meta
          name="description"
          content={`Discover the numerological meaning behind ${
            typeof selectedName === "string"
              ? selectedName.toLowerCase() +
                " name numerology calculator - Firststep.baby"
              : ""
          } name. Get the details of your lucky number, day, color, gemstone benefits etc. based on numerology.`}
        />
      </Head>
      <Numerology onSelectedName={handleNameSelection} />
    </>
  );
};

export default NumoroNamePage;
