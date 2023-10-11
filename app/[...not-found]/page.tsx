import React from "react";
import Link from "next/link";

import OverlayMenu from "@/components/Overlay";

export default function NotFoundPage() {
  return (
    <>
      <OverlayMenu />
      <section className="w-full container flex flex-col sm:gap-x-10 gap-y-14 lg:flex-row-reverse lg:items-center lg:justify-between lg:mt-52">
        <div className="lg:mt-0 mt-40">
          <span className="text-black font-opensans px-6 py-3 border-[1px] border-white-shade-4 rounded-full font-semibold">
            Page not found
          </span>
          <h1 className="text-4xl font-outfit mt-9 text-black font-semibold lg:text-6xl">
            Oh NO! Error 404
          </h1>
          <p className="text-white-shade-10 font-opensans font-medium text-lg mt-5 mb-8">
            Maybe Irani Usa has broken this page. <br /> Come back to the
            homepage
          </p>
          <Link
            className="text-white bg-black py-4  px-14 font-opensans rounded-2xl"
            href={"/"}
          >
            Back to homepage
          </Link>
        </div>
        <img className="w-full lg:w-1/2" src="/images/404/404.webp" alt="" />
      </section>
    </>
  );
}
