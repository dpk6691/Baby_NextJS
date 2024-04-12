import React, { useMemo } from "react";
import Head from "next/head";
import India from "./../../pages/api/India";
import { useRouter } from "next/router";
import AdSection from "../../components/HomeComponents/AfterBannerComponemts/AdSection";
import RashiList from "../../components/CommonComponents/sidebar/RashiList";
import NumurolySidebar from "../../components/CommonComponents/sidebar/NumurolySidebar";

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
    <>
      <Head>
        <title>Indian Baby Names with Meaning by Culture</title>
        <meta
          name="description"
          content="Biggest collection of Indian baby names as per all Indian culture at firststep.baby. Discover name and meaning with their respective language. "
        />
      </Head>
      <div className="w-11/12 m-auto pt-32 md:pt-28">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-9/12">
            <div className="bg-pink-50 p-4 md:p-10 rounded-3xl">
              <h1 className="text-2xl mb-8 text-center">
                Unique Indian Baby Names for Your Little One
              </h1>
              <p className="text-center mb-10">
                Find unique Indian baby names by culture that can be the perfect
                gift for your little munchkin.<br></br>
                <br></br>
                Indian baby names can be a great place for you to start, if you
                are looking for a boy or girl baby name that is a tribute to
                your heritage or has deep roots into nature. We tried to cover
                all the Indian culture below to find the unique but meaningful
                names with their pronunciation and your local language.{" "}
                <br></br>
                <br></br>
                Try exploring the list of names by just clicking on your
                preferred culture.
              </p>

              <div className="w-full m-auto grid lg:grid-cols-4 gap-5 grid-cols-2">
                <div className="w-full max-w-sm hover:bg-pink-200 bg-white rounded-3xl">
                  <a href="#">
                    <img
                      className="p-8 rounded-t-lg"
                      src="https://flowbite.com/docs/images/products/apple-watch.png"
                      alt="product image"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-slate-900 text-center">
                        Top 10 Names
                      </h5>
                    </a>
                  </div>
                </div>
                <div className="w-full max-w-sm hover:bg-pink-200 bg-white rounded-3xl">
                  <a href="#">
                    <img
                      className="p-8 rounded-t-lg"
                      src="https://flowbite.com/docs/images/products/apple-watch.png"
                      alt="product image"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-slate-900 text-center">
                        Baby Girl Names
                      </h5>
                    </a>
                  </div>
                </div>
                <div className="w-full max-w-sm hover:bg-pink-200 bg-white rounded-3xl">
                  <a href="#">
                    <img
                      className="p-8 rounded-t-lg"
                      src="https://flowbite.com/docs/images/products/apple-watch.png"
                      alt="product image"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-slate-900 text-center">
                        Baby Girl Names
                      </h5>
                    </a>
                  </div>
                </div>
                <div className="w-full max-w-sm hover:bg-pink-200 bg-white rounded-3xl">
                  <a href="#">
                    <img
                      className="p-8 rounded-t-lg"
                      src="https://flowbite.com/docs/images/products/apple-watch.png"
                      alt="product image"
                    />
                  </a>
                  <div className="px-5 pb-5">
                    <a href="#">
                      <h5 className="text-xl font-semibold tracking-tight text-slate-900 text-center">
                        Numerology
                      </h5>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl mt-10 mb-8 text-center">
                Table of Indian Baby Names
              </h2>
              <ul className="overflow-auto grid grid-cols-2 md:grid-cols-5 gap-5">
                {uniqueCultures.map((culture, index) => (
                  <li key={index}>
                    <div
                      className="min-w-24 bg-blue-200 text-center rounded-3xl text-lg py-2 w-full cursor-pointer inline-block hover:font-bold hover:bg-blue-500 hover:text-white"
                      onClick={() => handleCultureClick(culture)}
                    >
                      {culture &&
                        culture.charAt(0).toUpperCase() + culture.slice(1)}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="md:ml-5 self-start mt-3 md:mt-0 p-5 bg-slate-50 rounded-3xl grid justify-items-stretch gap-5 w-full md:w-1/4">
            <AdSection />
            <div className="bg-blue-50 w-full p-7 rounded-3xl">
              <NumurolySidebar />
            </div>
            <RashiList />
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
