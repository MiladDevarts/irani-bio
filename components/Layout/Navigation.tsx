"use client";

import React, { ReactNode, useState } from "react";
import Link from "next/link";

import HamburgerNav from "../Hamburger";

interface NavigationProps {
  LogoType: ReactNode;
}

const Navigation: React.FC<NavigationProps> = (props) => {
  const [menuItems, setMenuItesm] = useState([
    { value: "Home", slug: "https://irani.world" },
    { value: "About us", slug: "https://irani.world/about" },
    { value: "News", slug: "https://irani.news" },
    { value: "Bio", slug: "/" },
    { value: "FAQ", slug: "https://irani.world/faq" },
    { value: "Help", slug: "https://irani.world/help" },
    { value: "Terms", slug: "https://irani.world/terms" },
    { value: "Contact us", slug: "https://irani.world/contact" },
  ]);


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
