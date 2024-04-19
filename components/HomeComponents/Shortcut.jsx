import React from "react";
import TopTen from "../../public/images/Artboard1.png";
import Rashi from "../../public/images/Artboard3.png";
import Calture from "../../public/images/Artboard5.png";
import Blog from "../../public/images/Artboard4.png";
import Image from "next/image";
import Link from "next/link";

const Shortcut = () => {
  return (
    <div className="w-11/12 m-auto pt-14 grid xl:grid-cols-3 md:grid-cols-2 gap-5 grid-cols-1 md:pt-24">
      <div className="w-full p-4 hover:bg-blue-100 bg-blue-50 rounded-3xl">
        <Link href="https://blog.firststep.baby">
          <Image
            className="bg-white rounded-xl"
            src={TopTen}
            alt="Top Ten Names"
          />
        </Link>
        <div className="px-5 pt-4 pb-1">
          <Link href="https://blog.firststep.baby">
            <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
              Top 10 Names
            </h5>
          </Link>
        </div>
      </div>
      <div className="w-full p-4 hover:bg-pink-100 bg-pink-50 rounded-3xl">
        <Link href="/indian">
          <Image className="bg-white rounded-xl" src={Calture} alt="Culture" />
        </Link>
        <div className="px-5 pt-4 pb-1">
          <Link href="/indian">
            <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
              Culture
            </h5>
          </Link>
        </div>
      </div>
      <div className="w-full p-4 hover:bg-blue-100 bg-blue-50 rounded-3xl">
        <Link href="/rashi">
          <Image className="bg-white rounded-xl" src={Rashi} alt="Rashi" />
        </Link>
        <div className="px-5 pt-4 pb-1">
          <Link href="/rashi">
            <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
              Rashi
            </h5>
          </Link>
        </div>
      </div>
      {/* <div className="w-full p-4 hover:bg-pink-100 bg-pink-50 rounded-3xl">
        <Link href="https://blog.firststep.baby">
          <Image className="bg-white rounded-xl" src={Blog} alt="Culture" />
        </Link>
        <div className="px-5 pt-4 pb-1">
          <Link href="https://blog.firststep.baby">
            <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
              Blog
            </h5>
          </Link>
        </div>
      </div> */}
    </div>
  );
};

export default Shortcut;
