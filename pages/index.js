// index.js
import React from "react";
import Head from "next/head";
import Layout from "./layout";
import Home from "./Home";
import { useRouter } from "next/router";
import { initializeApp } from "firebase/app";
import TableData from "../components/TableData";
import NameSelected from "../components/NameSelected";

const HomePage = () => {
  const firebaseConfig = {
    apiKey: "AIzaSyDaN0lsrRosXmn9Ho5DvLTYUQ80aVG3Xck",
    authDomain: "baby-name-734fd.firebaseapp.com",
    projectId: "baby-name-734fd",
    storageBucket: "baby-name-734fd.appspot.com",
    messagingSenderId: "533945436532",
    appId: "1:533945436532:web:212951d50f7b686d334421",
  };

  const app = initializeApp(firebaseConfig);

  const router = useRouter();
  const isHomePage = router.pathname === "/";

  return (
    <>
      <Head>
        <title>Your Next.js App</title>
        <meta
          name="description"
          content="Your Next.js application description"
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
