import React, { useMemo } from "react";
import India from "./../../pages/api/India";
import { useRouter } from "next/router";
import AdSection from "../../components/HomeComponents/AfterBannerComponemts/AdSection";

const index = () => {
  const { IndiaData } = India();

  const allEntries = useMemo(() => {
    return IndiaData && Array.isArray(IndiaData) ? IndiaData.flat() : [];
  }, [IndiaData]);

  const allCultures = useMemo(
    () => allEntries.map((entry) => entry.culture),
    [allEntries]
  );
  const uniqueCultures = useMemo(
    () => [...new Set(allCultures)],
    [allCultures]
  );
  const router = useRouter();

  const handleCultureClick = (culture) => {
    const url = `/indian/${culture}-baby-names`;
    router.push(url);
  };

  return (
    <div className="w-11/12 m-auto pt-28">
      <div className="flex justify-between">
        <div className="bg-pink-50 p-10 rounded-3xl w-9/12">
          <h1 className="text-2xl mb-8 text-center">Indian Baby Names</h1>
          <p className="text-center mb-10">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
          <ul className="overflow-auto grid grid-cols-5 gap-5">
            {uniqueCultures.map((culture, index) => (
              <li key={index}>
                <div
                  className="min-w-24 bg-pink-200 text-center rounded-3xl text-lg py-2 w-full cursor-pointer inline-block hover:font-bold hover:bg-pink-500 hover:text-white"
                  onClick={() => handleCultureClick(culture)}
                >
                  {culture &&
                    culture.charAt(0).toUpperCase() + culture.slice(1)}
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="ml-5 bg-gray-50 rounded-3xl grid place-content-center w-1/4">
          <AdSection />
        </div>
      </div>
    </div>
  );
};

export default index;
