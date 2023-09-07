"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import MobileNav from "./MobileNav";

export default function () {
  const [toggle, setToggle] = useState<boolean>(false);

  const pathname = usePathname();

  return (
    <header className="px-5 py-3  md:px-10  md:py-6 w-full bg-white sticky top-0 border-b border-slate-50 shadow-sm z-10">
      <div className="flex justify-between items-center">
        {pathname.includes("elements") ? (
          <Link href="/elements" className="text-xl md:text-2xl font-bold">
            <Image
              src="/images/logo-elements.svg"
              alt="GigPlaced"
              width={300}
              height={40}
            />
          </Link>
        ) : (
          <Link href="/" className="text-xl md:text-2xl font-bold">
            <Image
              src="/images/logo.svg"
              alt="GigPlaced"
              width={180}
              height={40}
            />
          </Link>
        )}

        {pathname === "/" ? (
          <nav className="md:block hidden">
            <ul className="flex gap-16">
              <li>
                <Link href="#elements">Elements</Link>
              </li>
              <li>
                <Link href="#services">Services</Link>
              </li>
              <li>
                <Link href="#work">Work</Link>
              </li>
              <li>
                <Link href="#about">About Us</Link>
              </li>
              <li>
                <Link href="#footer">Contact</Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="md:block hidden">
            <ul className="flex gap-16">
              <li>
                <Link href="/">Home</Link>
              </li>
            </ul>
          </nav>
        )}

        {/* <button
          className="text-gray-500 w-10 h-10 relative focus:outline-none bg-white block md:hidden"
          onClick={() => setToggle(!toggle)}
        >
          <div className="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2">
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                toggle ? "rotate-45" : "-translate-y-1.5"
              }`}
            />
            <span
              aria-hidden="true"
              className={`block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out ${
                toggle && "opacity-0"
              }`}
            />
            <span
              aria-hidden="true"
              className={`block absolute h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
                toggle ? "-rotate-45" : "translate-y-1.5"
              }`}
            />
          </div>
        </button> */}
        <MobileNav />
      </div>

      {/* {pathname === "/" ? (
        <nav className="md:hidden flex justify-center transition-all">
          <ul
            className={`${
              toggle ? "block" : "hidden"
            } transition duration-500 text-lg text-slate-800 space-y-8 mt-8`}
          >
            <li>
              <Link href="#elements">Elements</Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#about">About Us</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav className="md:hidden flex justify-center transition-all">
          <ul
            className={`${
              toggle ? "block" : "hidden"
            } transition duration-500 text-lg text-slate-800 space-y-8 mt-8`}
          >
            <li>
              <Link href="/">Home</Link>
            </li>
          </ul>
        </nav>
      )} */}
    </header>
  );
}
