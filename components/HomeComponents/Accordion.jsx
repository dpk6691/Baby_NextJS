import React, { useState } from "react";

const Accordion = ({
  title,
  children,
  sectionId,
  openSection,
  setOpenSection,
}) => {
  const isOpen = openSection === sectionId;

  const toggleAccordion = () => {
    setOpenSection(isOpen ? null : sectionId);
  };

  return (
    <div
      className={`border rounded-xl mt-3 ${
        isOpen ? " border-blue-200" : "border-slate-50"
      }`}
    >
      <div
        className={`flex items-center justify-between p-2 border-b rounded-xl  cursor-pointer ${
          isOpen ? "bg-pink-100 border-blue-50" : "bg-blue-50 border-pink-500"
        }`}
        onClick={toggleAccordion}
      >
        <div className="text-xl pl-2 font-semibold">{title}</div>
        <div className="text-2xl mr-4">{isOpen ? "-" : "+"}</div>
      </div>
      {isOpen && <div className="p-4">{children}</div>}
    </div>
  );
};

export default Accordion;
