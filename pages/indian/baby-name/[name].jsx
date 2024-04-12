import React, { useState } from "react";
import NameSelected from "../../../components/NameSelected";
import Head from "next/head";

const NamePage = () => {
  const [receivedData, setReceivedData] = useState("");

  const handlePassData = (data) => {
    console.log("Received data:", data);
    setReceivedData(data);
  };

  // Check if receivedData is not null or empty before accessing its properties
  const title = receivedData
    ? `Meaning of baby name ${
        receivedData.charAt(0).toUpperCase() +
        receivedData.slice(1).toLowerCase()
      } with Lucky Number, Color, Day Details`
    : "Meaning of baby name with Lucky Number, Color, Day Details";

  const description = receivedData
    ? `Discover the meaning of the unique baby name ${receivedData} at FirstStep.Baby. Know the interesting details of the name ${receivedData} to find the ideal name for your precious child!`
    : "Discover the meaning of a unique baby name at FirstStep.Baby. Find the ideal name for your precious child!";

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      {/* Pass the callback function down to NameSelected */}
      <NameSelected onPassData={handlePassData} />
    </>
  );
};

export default NamePage;
