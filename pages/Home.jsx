import React from "react";
import HomeBanner from "../components/HomeComponents/HomeBanner";
import AfterBanner from "../components/HomeComponents/AfterBanner";
import TopTen from "../components/HomeComponents/TopTen";
import Shortcut from "../components/HomeComponents/Shortcut";
import NameNumorology from "../components/HomeComponents/NameNumorology";

const Home = () => {
  return (
    <>
      <HomeBanner />
      <AfterBanner />
      <TopTen />
      <Shortcut />
      <NameNumorology />
    </>
  );
};

export default Home;
