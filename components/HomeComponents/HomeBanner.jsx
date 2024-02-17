import React from "react";
import ParticleAnimation from "./HomeBannerComponents/ParticleAnimation";

const HomeBanner = () => {
  return (
    <div className="w-full m-auto">
      <div className="relative grid grid-cols-1 gap-3 pt-24 justify-items-stretch max-h-full content-center">
        <ParticleAnimation />
      </div>
    </div>
  );
};

export default HomeBanner;
