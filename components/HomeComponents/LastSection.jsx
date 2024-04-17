import Link from "next/link";
import React from "react";
import First from "../../public/images/Artboard6.png";
import Second from "../../public/images/Artboard2.png";
import Third from "../../public/images/Artboard7.png";
import Image from "next/image";

const LastSection = () => {
  return (
    <div className="w-11/12 m-auto pt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5 grid-cols-1 md:pt-24">
      <div className="w-full p-6 hover:bg-blue-100 bg-blue-50 rounded-3xl">
        <Image
          className="w-full bg-white rounded-xl"
          src={First}
          alt="product image"
        />

        <div className="pt-5">
          <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
            Unveiling India's Top Baby Names
          </h5>

          <ul className="my-4 space-y-3">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Top 2024 Indian Baby Names (Girl & Boy)
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Top International Names with Indian Appeal
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Timeless Elegance: Classic Indian Names for Every Era
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Nicknames with Flair: 5 Adorable Monikers for Your Little One
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Top 10 baby names by Indian Culture
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6  hover:bg-pink-100 bg-pink-50 rounded-3xl">
        <Image
          className="w-full bg-white rounded-xl"
          src={Second}
          alt="product image"
        />
        <div className="pt-5">
          <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
            Baby Names by Indian Culture
          </h5>
          <ul className="my-4 space-y-3">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Hindu Baby Names (Rich in Meaning & Mythology):
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  North Indian Baby Names (Mughal Influence & Rich History):
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Jain Baby Names (Peace & Non-Violence)
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Tribal Baby Names (Nature-Inspired & Symbolic):
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Parsi Baby Names (Zoroastrian Heritage & Strength)
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full p-6 hover:bg-blue-100 bg-blue-50 rounded-3xl">
        <Image
          className="w-full bg-white rounded-lg"
          src={Third}
          alt="product image"
        />
        <div className="pt-5">
          <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
            Baby names by theme
          </h5>
          <ul className="my-4 space-y-3">
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Uniquely You: Names with Bold Personalities (Modern):
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Nature's Symphony: Names Inspired by Earth & Sky
                  (Nature-Inspired)
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Blessings & Grace: Names with Spiritual Meanings (Gift of
                  God):
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Sweet & Simple: Short & Memorable Names (Short)
                </span>
              </Link>
            </li>
            <li>
              <Link
                href="#"
                className="flex items-center p-2 text-slate-900 rounded-lg bg-white border hover:border-slate-300 group hover:shadow"
              >
                <span className="flex-1 ms-3 text-center ">
                  Kindred Hearts: Names Radiating Compassion (Love & Kindness)
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LastSection;
