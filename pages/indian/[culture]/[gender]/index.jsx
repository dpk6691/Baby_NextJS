import React, { useState } from "react";
import Head from "next/head";
import TableData from "../../../../components/TableData";
import NumurolySidebar from "../../../../components/CommonComponents/sidebar/NumurolySidebar";
import RashiList from "../../../../components/CommonComponents/sidebar/RashiList";
import AdSection from "../../../../components/HomeComponents/AfterBannerComponemts/AdSection";

const GenderPage = () => {
  const [selectedGenderState, setSelectedGenderState] = useState("");
  const [selectedLetterState, setSelectedLetterState] = useState("");
  const [selectedCultureState, setSelectedCultureState] = useState("");

  return (
    <div>
      <Head>
        <title>
          Best{" "}
          {selectedCultureState // Check if selectedCultureState is not empty
            ? selectedCultureState.split("-")[0].charAt(0).toUpperCase() +
              selectedCultureState.split("-")[0].slice(1) +
              " "
            : ""}{" "}
          Baby{" "}
          {selectedGenderState
            ? selectedGenderState.charAt(0).toUpperCase() +
              selectedGenderState.slice(1).toLowerCase()
            : "Gender"}{" "}
          Names with Meaning and Pronunciation
        </title>

        <meta
          name="description"
          content={`What magical name will you give your little one? From traditional to modern, find the perfect Indian ${
            selectedGenderState ? selectedGenderState : "Gender"
          } name for your little one. Start browsing!`}
        />
      </Head>

      <div className="w-11/12 m-auto pt-32 xl:pt-28">
        <div className="flex flex-col xl:flex-row justify-between">
          <div className="w-full xl:w-9/12">
            <h1 className="text-2xl mb-2 text-center text-slate-900">
              {selectedCultureState
                ? selectedCultureState
                    .split("-")[0]
                    .toLowerCase()
                    .charAt(0)
                    .toUpperCase() + selectedCultureState.split("-")[0].slice(1)
                : ""}{" "}
              {selectedGenderState
                ? selectedGenderState.charAt(0).toUpperCase() +
                  selectedGenderState.slice(1).toLowerCase()
                : "Gender"}{" "}
              <span className="text-pink-500">Names</span>{" "}
              <span className="text-blue-500">List</span>
            </h1>
            <p className="pt-2 mb-6 md:px-20 text-center">
              Every parent and relative has a wish to give a unique and lovely
              name to their upcoming or new arrived little family member. Here,
              we have listed all the traditional, unique and latest Gujarati boy
              names with their meaning and pronunciations to make it easier for
              you to choose. <br></br>
              <br></br>We will be always thankful for your feedback /
              suggestions to our email aww@firststep.baby
            </p>
            <TableData
              setSelectedGenderState={setSelectedGenderState}
              setSelectedLetterState={setSelectedLetterState}
              setSelectedCultureState={setSelectedCultureState}
            />
          </div>
          <div className="xl:ml-5 mt-7 self-start xl:mt-0 p-5 bg-slate-50 rounded-3xl grid justify-items-stretch gap-5 w-full xl:w-1/4">
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

export default GenderPage;
