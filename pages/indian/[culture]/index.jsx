import React, { useState } from "react";
import Head from "next/head";
import India from "./../../../pages/api/India";
import TableData from "../../../components/TableData";
import AdSection from "../../../components/HomeComponents/AfterBannerComponemts/AdSection";
import NumurolySidebar from "../../../components/CommonComponents/sidebar/NumurolySidebar";
import RashiList from "../../../components/CommonComponents/sidebar/RashiList";

const CulturePage = () => {
  const { IndiaData } = India();
  const [selectedGenderState, setSelectedGenderState] = useState("");
  const [selectedLetterState, setSelectedLetterState] = useState("");
  const [selectedCultureState, setSelectedCultureState] = useState("");

  const selectedCultureStateLast = selectedCultureState
    ? selectedCultureState.charAt(0).toUpperCase() +
      selectedCultureState.slice(1).toLowerCase().replace("-baby-names", "")
    : "";

  const totalNames = selectedCultureStateLast
    ? IndiaData?.filter((item) => item.culture == selectedCultureStateLast)
        .length
    : 0;

  return (
    <div>
      <Head>
        <title>
          {selectedCultureState // Check if selectedCultureState is not empty
            ? selectedCultureState.split("-")[0].charAt(0).toUpperCase() +
              selectedCultureState.split("-")[0].slice(1) +
              " "
            : ""}
          Baby Names You'll Love: With Meaning and Pronunciation!
        </title>
        <meta
          name="description"
          content={`Firststep.baby brought to you ${totalNames} ${
            selectedCultureState
              ? selectedCultureState
                  .split("-")[0]
                  .toLowerCase()
                  .charAt(0)
                  .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
              : ""
          } baby boy and girl names. Explore a collection of unique ${
            selectedCultureState
              ? selectedCultureState
                  .split("-")[0]
                  .toLowerCase()
                  .charAt(0)
                  .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
              : ""
          } baby names with meanings and pronunciations.`}
        />
      </Head>

      <div className="w-11/12 m-auto pt-32 md:pt-28">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="w-full md:w-9/12">
            <h1 className="text-2xl mb-2 text-center text-slate-900">
              {selectedCultureState
                ? selectedCultureState
                    .split("-")[0]
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
                : ""}{" "}
              Baby <span className="text-pink-500">Names</span>{" "}
              <span className="text-blue-500">Collection</span>
            </h1>
            <p className="pt-2 mb-6 px-20 text-center">
              Looking for a unique{" "}
              {selectedCultureState
                ? selectedCultureState
                    .split("-")[0]
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
                : ""}{" "}
              baby name for your little one? Choose a baby name to relate your
              child to rich historical significance and hold profound
              traditional value. It will be your way to honour your state's
              cultural heritage and make a unique identity.
            </p>
            <TableData
              setSelectedGenderState={setSelectedGenderState}
              setSelectedLetterState={setSelectedLetterState}
              setSelectedCultureState={setSelectedCultureState}
            />
          </div>
          <div className="md:ml-5 mt-3 self-start md:mt-0 p-5 bg-slate-50 rounded-3xl grid justify-items-stretch gap-5 w-full md:w-1/4">
            <AdSection />
            <div className="bg-blue-50 w-full p-7 rounded-3xl">
              <NumurolySidebar />
            </div>
            <RashiList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CulturePage;
