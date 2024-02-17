import React from "react";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import AfterBanner from "../components/HomeComponents/AfterBanner";
import FilterName from "../components/HomeComponents/FilterName";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AfterBanner />
      <FilterName />
    </>
  );
};

export default Home;
