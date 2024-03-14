import React from "react";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import AfterBanner from "../components/HomeComponents/AfterBanner";
import FilterName from "../components/HomeComponents/FilterName";
import CategoriesList from "../components/HomeComponents/CategoriesList";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AfterBanner />
      {/* <FilterName /> */}
      <CategoriesList />
    </>
  );
};

export default Home;
