// NamePage.jsx
import React, { useState } from "react";
import NameSelected from "../../../components/NameSelected";
import Head from "next/head";

const NamePage = () => {
  const [receivedData, setReceivedData] = useState("");

  const handlePassData = (data) => {
    console.log("Received data:", data);
    setReceivedData(data);
  };

  return (
    <>
      <Head>
        <title>
          Meaning of baby name{" "}
          {receivedData.charAt(0).toUpperCase() +
            receivedData.slice(1).toLowerCase()}{" "}
          with Lucky Number, Color, Day Details
        </title>

        <meta
          name="description"
          content={`Discover the meaning of the unique baby name ${receivedData} at FirstStep.Baby. Know the interesting details of the name ${receivedData} to find the ideal name for your precious child!`}
        />
      </Head>
      {/* Pass the callback function down to NameSelected */}
      <NameSelected onPassData={handlePassData} />
    </>
  );
};

export default NamePage;
