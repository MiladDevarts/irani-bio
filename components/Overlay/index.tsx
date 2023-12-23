"use client";

import { useContext, useState, useRef, useEffect } from "react";
import Link from "next/link";

import { MenuContext } from "@/context/MenuProvider";
import classNames from "classnames";

const OverlayMenu = () => {
  let menuVisibilty = useContext(MenuContext);

  const [menuItems, setMenuItesm] = useState([
    { value: "Home", slug: "https://irani.world" },
    { value: "About", slug: "https://irani.world/about" },
    { value: "Blog", slug: "https://irani.world/blog" },
    { value: "FAQ", slug: "https://irani.world/faq" },
    { value: "Origin", slug: "https://irani.world/origin" },
    { value: "Privacy Policy", slug: "https://irani.world/privacy-policy" },
    { value: "Contact", slug: "https://irani.world/contact" },
  ]);




  const OverlayClasses = classNames(
    "z-[1010] block lg:hidden w-full h-auto transition-all fixed top-0 -left-[1200px] z-10 soft-shadow bg-white duration-500",
    {
      "left-0": menuVisibilty.menu,
      "-left-[1200px]": !menuVisibilty.menu,
    }
  );
  return (
    <section className={OverlayClasses}>
      <div
        className="w-full h-full bg-white dark:bg-[#131821] dark:text-white text-black bg-cover"
        style={{
          backgroundImage: `url('/images/menu/overlay-background.png')`,
        }}
      >
        <ul className="py-10 container flex flex-col  gap-y-6 font-opensans font-normal text-lg dark:text-white  text-black pt-28">
          {menuItems.map((menuItem, index) => {
            return (
              <li key={index} className="text-black dark:text-white">
                <Link
                  href={menuItem.slug}
                  onClick={() => {
                    menuVisibilty.setMenu(!menuVisibilty.menu);
                  }}
                >
                  {menuItem.value}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default OverlayMenu;
