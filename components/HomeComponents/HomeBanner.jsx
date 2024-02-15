import React from "react";
import MiddlePhoto from "./HomeBannerComponents/MiddlePhoto";
import CategoriesList from "./HomeBannerComponents/CategoriesList";
import BabyNameSearch from "./HomeBannerComponents/BabyNameSearch";

const HomeBanner = () => {
  return (
    <div className="w-11/12 m-auto">
      <div className="grid grid-cols-1 gap-3 pt-10 justify-items-stretch max-h-full content-center lg:grid-cols-3 lg:max-h-screen">
        <BabyNameSearch />
        <MiddlePhoto />
        <CategoriesList />
      </div>
    </div>
  );
};

export default HomeBanner;
