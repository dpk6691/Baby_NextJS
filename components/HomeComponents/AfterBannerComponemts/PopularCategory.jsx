import React from "react";

const PopularCategory = ({ popularCultures }) => {
  return (
    <div className="w-full px-10">
      <h2 className="text-4xl mb-3 dark:text-gray-900">Popular Category</h2>
      <p className="dark:text-gray-900">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book.
      </p>

      <div className="mt-6">
        <div className="mb-4 flex gap-8">
          {popularCultures.map((culture, index) => (
            <button
              key={index}
              className="flex-1 drop-shadow-xl font-bold py-1 shadow-black bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:bg-gradient-to-r hover:from-indigo-500 hover:via-purple-500 hover:to-pink-500 hover:text-white active:bg-gradient-to-r active:from-indigo-500 active:via-purple-500 active:to-pink-500  active:text-white focus:outline-none focus:shadow-outline-blue"
              onClick={() => handleCultureClick(culture)}
            >
              {culture.charAt(0).toUpperCase() + culture.slice(1)}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-0.5">
            <div className=" h-full w-full bg-white rounded-xl p-4 shadow-md ">
              <p className="text-gray-700">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <p className="mt-3 font-semibold">
                Total Boys Name: <span className="font-extrabold">43552</span>
              </p>
              <p className="font-semibold">
                Total Girls Name: <span className="font-extrabold">34321</span>
              </p>
              <button className="mt-3 py-1 px-3 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:drop-shadow-xl hover:shadow-black">
                Click for Boys names
              </button>
              <button className="mt-3 ml-4 py-1 px-3 font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white rounded-xl hover:drop-shadow-xl hover:shadow-black">
                Click for Girls names
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCategory;
