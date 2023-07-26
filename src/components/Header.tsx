"use client";

import Link from "next/link";
import { useState } from "react";
import {} from "react-icons/bs";

export default function () {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <header className="px-5 py-3  md:px-10  md:py-6 w-full flex justify-between fixed top-0 border-b shadow-sm">
      <h2 className=" text-xl md:text-2xl font-bold">Gig Placed</h2>

      <nav className="md:block hidden">
        <ul className="flex gap-16">
          <li>
            <Link href="#services">Services</Link>
          </li>
          <li>
            <Link href="#services">Work</Link>
          </li>
          <li>
            <Link href="#services">About</Link>
          </li>
          <li>
            <Link href="#services">Contact</Link>
          </li>
        </ul>
      </nav>

      <button
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
            className={`block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out ${
              toggle ? "-rotate-45" : "translate-y-1.5"
            }`}
          />
        </div>
      </button>
    </header>
  );
}
