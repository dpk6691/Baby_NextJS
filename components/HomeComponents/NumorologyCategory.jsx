import React from "react";
import CategoriesList from "./CategoriesList";
import NumurolySidebar from "../CommonComponents/sidebar/NumurolySidebar";

const NumorologyCategory = () => {
  return (
    <div className="text-center w-11/12 m-auto pt-14 md:pt-24">
      <span className="grid gap-10 lg:grid-cols-3 place-items-center h-full w-full rounded-3xl">
        <div className="col-span-1">
          <NumurolySidebar />
        </div>
        <div className="col-span-1 w-full lg:col-span-2">
          <CategoriesList />
        </div>
      </span>
    </div>
  );
};

export default NumorologyCategory;
