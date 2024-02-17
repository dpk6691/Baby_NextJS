// index.js
import React from "react";
import Head from "next/head";
import Layout from "./layout";
import Home from "./Home";
import { useRouter } from "next/router";
import TableData from "../components/TableData";
import NameSelected from "../components/NameSelected";

const HomePage = () => {
  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      <Head>
        <title>FirstStep.Baby</title>
        <meta
          name="description"
          content="Your FirstStep.Baby application description"
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
