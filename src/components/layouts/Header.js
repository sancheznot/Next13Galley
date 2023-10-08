'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { ThemeSwitcher } from "./ThemeSwitcher";

const linkSelected = "bg-orange-300 text-black p-3 rounded-lg";

const Header = () => {
  const path = usePathname()

  const listLink = [
    {
      name: "Home",
      path: "/"
    },
    {
      name: "Gallery",
      path: "/gallery"
    },
    {
      name: "Add Picture",
      path: "/add"
    }
  ]

  return (
    <header className="grid grid-cols-2 place-items-center  w-full dark:bg-black bg-slate-200 dark:text-white dark">
      <h1 className="text-3xl">Welcome to my Gallery</h1>
      <div className="grid grid-cols-1 w-full">
        <ul className="grid grid-rows-none grid-cols-3 w-full gap-10 p-3 py-5">
          {listLink.map((link, index) => {
            return (
              <li className="py-1 w-6/12" key={index}>
                <Link href={link.path} className={path === link.path ? linkSelected : `dark:bg-gray-400 text-gray-300 p-3 rounded-lg`}>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </header>
  );
};


export default Header;
