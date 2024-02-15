import React, { useState } from "react";
import AdSection from "./AfterBannerComponemts/AdSection";
import PopularCategory from "./AfterBannerComponemts/PopularCategory";

const AfterBanner = () => {
  // State to track clicks for each culture
  const [cultureClicks, setCultureClicks] = useState({});

  const handleCultureClick = (culture) => {
    console.log("Culture clicked:", culture);
    setCultureClicks((prevClicks) => {
      const updatedClicks = {
        ...prevClicks,
        [culture]: (prevClicks[culture] || 0) + 1,
      };

      // Log the updated state
      // console.log("Updated culture clicks:", updatedClicks);

      return updatedClicks;
    });
  };

  const popularCultures = Object.keys(cultureClicks)
    .sort((a, b) => cultureClicks[b] - cultureClicks[a])
    .slice(0, 5);

  // console.log(popularCultures); // Add this line to check popularCultures

  return (
    <div className="w-11/12 m-auto pt-10">
      <div className="flex justify-between">
        <AdSection />
        <PopularCategory popularCultures={popularCultures} />

        <AdSection />
      </div>
    </div>
  );
};

export default AfterBanner;
