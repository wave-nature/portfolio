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

export default async function Elements() {
  const elements = await getElements();

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
              price={element?.price}
              mainImage={urlForImage(element?.mainImage).url().toString()}
              alt={element?.mainImage?.alt}
              slug={element?.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
