"use client";

import ElementCard from "@/components/ElementCard";
const img = "/images/elements/simple/ecom-1.png";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { db } from "../../../firebase.config";
import { urlForImage } from "../../../sanity/lib/image";
import { getElements } from "../../../sanity/lib/utils";
import { getCountry, getUsdToInr } from "@/request";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "@/store";
import Loader from "@/components/Loader";

export default function Elements() {
  const { country, usdToInr, setCountry, setUsdToInr } =
    useContext(StoreContext);
  const [loader, setLoader] = useState(true);
  const [elements, setElements] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const elements = await getElements();
        setElements(elements);
        const usdToInr = await getUsdToInr();
        const country = await getCountry();
        setUsdToInr(usdToInr);
        setCountry(country);
      } catch (error) {
        console.log(error);
      } finally {
        setLoader(false);
      }
    }
    fetchData();
  }, []);

  if (loader) {
    return <Loader />;
  }

  return (
    <main className="mt-16 md:px-28 px-4 space-y-28 min-h-screen">
      {/* <Alert /> */}
      <div className="border border-yellow-400 text-slate-500 px-5 py-2 text-center rounded-xl md:text-xl">
        <p>
          Introducing GigPlaced Elements! A collection of Templates and Landing
          Pages for all your business needs at affordable prices.
        </p>
      </div>
      <section id="elements" className="w-[95%] max-w-7xl mx-auto my-8">
        {/* <h1 className="text-3xl md:text-4xl font-medium py-10">Elements</h1> */}
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-4 sm:gap-y-8 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-7 ">
          {elements?.map((element: any, index: number) => (
            <ElementCard
              key={index}
              name={element?.name}
              price={
                country === "IN" && usdToInr
                  ? (element?.price * usdToInr)?.toFixed(2)
                  : element?.price
              }
              mainImage={urlForImage(element?.mainImage).url().toString()}
              alt={element?.mainImage?.alt}
              slug={element?.slug}
              country={country}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
