'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const linkSelected = "bg-orange-300 text-black p-1 rounded-lg";

const Header = () => {
  const path = usePathname()


  return (
    <header className="grid  grid-cols-3 grid-flow-row auto-rows-auto place-items-center  w-full dark:bg-black bg-slate-200 dark:text-white dark">
      <ThemeSwitcher />
      <h1 className="text-3xl">Welcome to my Gallery</h1>
      <div className="grid grid-cols-1 w-full">
        <ul className="grid grid-rows-none grid-cols-3 w-full gap-10 p-3 py-5">
          <li className="py-1  w-6/12">
            <Link href={"/"} className={path === "/" ? linkSelected : `dark:bg-gray-400 text-gray-300 p-1 rounded-lg`}>
              Home
            </Link>
          </li>
          <li className="py-1 w-6/12">
            <Link href={"/gallery"} className={path === "/gallery" ? linkSelected : `dark:bg-gray-400 text-gray-300 p-1 rounded-lg`}>
              Gallery
            </Link>
          </li>
          <li className="py-1 w-6/12">
            <Link href={"/add"} className={path === "/add" ? linkSelected : `dark:bg-gray-400 text-gray-300 p-1 rounded-lg`}>
              add picture
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};


export default Header;
