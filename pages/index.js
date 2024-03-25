// HomePage.jsx
import React, { useEffect, useState } from "react";
import Head from "next/head";
import Layout from "./layout";
import Home from "./Home";
import India from "./../pages/api/India"; // Assuming India.jsx exports the India component
import { useRouter } from "next/router";
import TableData from "../components/TableData";
import NameSelected from "../components/NameSelected";

const HomePage = () => {
  const { IndiaData, isLoading } = India();
  const [totalUniqueNames, setTotalUniqueNames] = useState(0);

  useEffect(() => {
    if (IndiaData && !isLoading) {
      const uniqueNames = new Set();
      IndiaData.forEach((data) => {
        uniqueNames.add(data.name);
      });
      setTotalUniqueNames(uniqueNames.size);
    }
  }, [IndiaData, isLoading]);

  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      <Head>
        <title>
          {isLoading
            ? "Loading..."
            : `${totalUniqueNames}+ Meaningful Baby Names: Unique Baby Girl and Boy Names`}
        </title>
        <meta
          name="description"
          content="Explore the latest collection of baby names with rich meanings and pronunciation for your little one. Find the perfect baby girl or boy name list on FirstStep.Baby."
        />
      </Head>
      {isHomePage ? (
        <Home />
      ) : (
        <Layout>
          {router.pathname.startsWith("/india") && <TableData />}
          {router.pathname === "/india/name-selected" && <NameSelected />}
        </Layout>
      )}
    </>
  );
};

export default HomePage;
