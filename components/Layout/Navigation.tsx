"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";

import HamburgerNav from "../Hamburger";

interface NavigationProps {
  LogoType: ReactNode;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const [menuItems, setMenuItems] = useState([
    { value: "Home", slug: "https://irani.world", isMainRoute: false },
    {
      value: "About us",
      slug: "https://irani.world/about",
      isMainRoute: false,
    },
    { value: "Blog", slug: "https://irani.world/blog", isMainRoute: false },
    { value: "Bio", slug: "/", isMainRoute: true },
    { value: "FAQ", slug: "https://irani.world/faq", isMainRoute: false },
    { value: "Help", slug: "https://irani.world/help", isMainRoute: false },
    { value: "Terms", slug: "https://irani.world/terms", isMainRoute: false },
    {
      value: "Contact us",
      slug: "https://irani.world/contact",
      isMainRoute: false,
    },
  ]);

  const activeStyle =
    "text-black border-t-4 border-black dark:text-white dark:border-white h-full flex items-center hover:cursor-pointer transitaion-all";

  return (
    <nav className="z-[1013] bg-white dark:bg-[#1a202c] shadow-deep absolute top-0 lg:top-[92%] w-full h-[8vh] border-t border-white-shade-4 dark:border-[#293446] soft-shadow">
      <div className="container flex gap-x-6 lg:gap-x-0 lg:justify-between items-center h-full">
        <div className="navigation hidden h-full lg:flex items-center gap-x-10 text-white-shade-10 dark:text-white font-opensans font-medium">
          {menuItems.map((link) => {
            return (
              <Link
                href={link.slug}
              >
                {link.value}
              </Link>
            );
          })}
        </div>
        <HamburgerNav />
        <div className="flex gap-x-6 items-center">
          <Link href={"/"}>{props.LogoType}</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
