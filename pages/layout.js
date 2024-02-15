import React from "react";
import Header from "../components/CommonComponents/Header";
import Footer from "../components/CommonComponents/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
