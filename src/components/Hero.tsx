"use client";

import { useEffect } from "react";
import { BsArrowRight } from "react-icons/bs";
import { useRouter } from "next/navigation";
import Inview from "./Inview";
import { saveSiteVisitImpression } from "@/request";

export default function () {
  const router = useRouter();

  useEffect(() => {
    saveSiteVisitImpression();
  }, []);

  return (
    <Inview id="hero">
      <section
        id="hero"
        className="fade-out h-[70vh] md:h-[85vh] flex flex-col justify-center gap-5"
      >
        <div className="mb-1 md:mb-4">
          <h1 className="text-5xl sm:text-6xl md:text-7xl md:w-4/5 font-bold text-slate-800">
            We are here to make your on-paper{" "}
            <span className="text-gradient"> dream real.</span>
          </h1>
        </div>

        <h3 className="text-xl md:text-3xl font-light text-slate-600 md:w-2/3 mb-4 md:mb-12">
          Web Design, Android & Web Development, SaaS Development, Database
          Design & Development, Data Scraping, AI Agents, &{" "}
          <span className="bg-green-400 px-1 text-white inline-block -skew-x-12">
            Much More.
          </span>
        </h3>

        <div className="flex flex-col md:flex-row justify-start items-center gap-8">
          <button
            className="border-2 group border-slate-600 hover:border-dashed w-48 md:w-60 py-3 md:py-4 text-md md:text-xl"
            onClick={() => router.push("#footer")}
          >
            <span>Connect</span>
            <span className="ml-4 absolute group-hover:translate-x-4 transition duration-300 mt-1">
              <BsArrowRight className="w-10" />
            </span>
          </button>
        </div>
      </section>
    </Inview>
  );
}
