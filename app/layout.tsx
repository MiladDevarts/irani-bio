"use client";

import Navigation from "@/components/Layout/Navigation";
import "./globals.css";

import { Open_Sans } from "next/font/google";
import { Outfit } from "next/font/google";

import MenuProvider from "@/context/MenuProvider";
import ThemeColorProvider from "@/context/ThemeColorProvider";
import IraniWorldLogo from "@/components/Logo/IraniWorldLogo";

import { usePathname } from "next/navigation";
import IraniBio from "@/components/Logo/IraniBio";
import IraniNews from "@/components/Logo/IraniNews";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-opensans",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <html lang="en" className="light">
      <body
        className={`w-full h-[92vh] lg:overflow-scroll dark:bg-[#10141c] ${openSans.variable} ${outfit.variable}`}
      >
        <MenuProvider>
          <ThemeColorProvider>
            {children}
            <Navigation LogoType={<IraniBio classes="lg:w-auto" />} />
          </ThemeColorProvider>
        </MenuProvider>
      </body>
    </html>
  );
}
