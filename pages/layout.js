import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Header from "../components/CommonComponents/Header";
import Footer from "../components/CommonComponents/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <SpeedInsights />
      <Footer />
    </>
  );
};

export default Layout;
