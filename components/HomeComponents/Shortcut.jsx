import React from "react";

const Shortcut = () => {
  return (
    <div className="w-11/12 m-auto pt-14 grid lg:grid-cols-4 gap-5 grid-cols-2 md:pt-24">
      <div className="w-full max-w-sm bg-white hover:bg-blue-50 border-4 border-blue-200 rounded-3xl">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://flowbite.com/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold text-center tracking-tight text-gray-900 text-center">
              Top 10 Names
            </h5>
          </a>
        </div>
      </div>
      <div className="w-full max-w-sm bg-white hover:bg-pink-50 border-4 border-pink-200 rounded-3xl">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://flowbite.com/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold text-center tracking-tight text-gray-900 text-center">
              Culture
            </h5>
          </a>
        </div>
      </div>
      <div className="w-full max-w-sm bg-white hover:bg-blue-50 border-4 border-blue-200 rounded-3xl">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://flowbite.com/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold text-center tracking-tight text-gray-900 text-center">
              Rashi
            </h5>
          </a>
        </div>
      </div>
      <div className="w-full max-w-sm bg-white hover:bg-pink-50 border-4 border-pink-200 rounded-3xl">
        <a href="#">
          <img
            className="p-8 rounded-t-lg"
            src="https://flowbite.com/docs/images/products/apple-watch.png"
            alt="product image"
          />
        </a>
        <div className="px-5 pb-5">
          <a href="#">
            <h5 className="text-xl font-semibold text-center tracking-tight text-gray-900 text-center">
              Rashi
            </h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Shortcut;
