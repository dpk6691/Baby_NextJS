import React from "react";
import TopTen from "../../public/images/TopTenNames.jpg";
import Rashi from "../../public/images/rashi.jpg";
import Calture from "../../public/images/culture.jpg";
import Blog from "../../public/images/blog.jpg";
import Image from "next/image";
import Link from "next/link";

const Shortcut = () => {
  return (
    <div className="w-11/12 m-auto pt-14 grid lg:grid-cols-4 gap-5 grid-cols-2 md:pt-24">
      <div className="w-full max-w-sm hover:bg-blue-100 bg-blue-50 rounded-3xl">
        <Link href="https://blog.firststep.baby">
          <Image className="p-4 rounded-xl" src={TopTen} alt="Top Ten Names" />
        </Link>
        <div className="px-5 pb-5">
          <Link href="https://blog.firststep.baby">
            <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
              Top 10 Names
            </h5>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-sm hover:bg-pink-100 bg-pink-50 rounded-3xl">
        <Link href="/indian">
          <Image className="p-4 rounded-xl" src={Calture} alt="Culture" />
        </Link>
        <div className="px-5 pb-5">
          <Link href="/indian">
            <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
              Culture
            </h5>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-sm hover:bg-blue-100 bg-blue-50 rounded-3xl">
        <Link href="/rashi">
          <Image className="p-4 rounded-xl" src={Rashi} alt="Rashi" />
        </Link>
        <div className="px-5 pb-5">
          <Link href="/rashi">
            <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
              Rashi
            </h5>
          </Link>
        </div>
      </div>
      <div className="w-full max-w-sm hover:bg-pink-100 bg-pink-50 rounded-3xl">
        <Link href="https://blog.firststep.baby">
          <Image className="p-4 rounded-xl" src={Blog} alt="Culture" />
        </Link>
        <div className="px-5 pb-5">
          <Link href="https://blog.firststep.baby">
            <h5 className="text-xl font-semibold text-center tracking-tight text-slate-900">
              Blog
            </h5>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Shortcut;
