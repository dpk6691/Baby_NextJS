import React from "react";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import AfterBanner from "../components/HomeComponents/AfterBanner";
import TopTen from "../components/HomeComponents/TopTen";
import Shortcut from "../components/HomeComponents/Shortcut";
import NumorologyCategory from "../components/HomeComponents/NumorologyCategory";
import LastSection from "../components/HomeComponents/LastSection";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AfterBanner />
      <TopTen />
      <Shortcut />
      <NumorologyCategory />
      <LastSection />
    </>
  );
};

export default Home;
