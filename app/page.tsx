"use client";

import { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import OverlayMenu from "@/components/Overlay";

export default function Home() {
  useEffect(() => {
    Aos.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 10,
    });
  }, []);

  useEffect(() => {
    Aos.refresh();
  }, []);

  return (
    <>
      <OverlayMenu />
      <div
        className="w-full bg-cover"
        style={{ backgroundImage: `url('/images/general/bg.png')` }}
      >
        <main className="w-full h-[92vh] container flex flex-col items-center justify-center lg:flex-row overflow-hidden">
          <video autoPlay muted loop className="w-96">
            <source src="/video/soon.mov" />
          </video>
        </main>
      </div>
    </>
  );
}
