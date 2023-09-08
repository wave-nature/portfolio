"use client";

import Inview from "./Inview";
import {
  collection,
  query,
  where,
  onSnapshot,
  DocumentData,
  orderBy,
  limit,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import ContentLoader from "react-content-loader";
import type { SanityDocument } from "@sanity/client";

import { db } from "../../firebase.config";
import ElementCard from "./ElementCard";
import BlankCard from "./BlankCard";
import { getElements } from "../../sanity/lib/utils";
import { urlForImage } from "../../sanity/lib/image";

const ELEMENTS = [
  {
    img: "/images/elements/simple/ecom-1.png",
    link: "https://gigplaced-shopitup.vercel.app/",
  },
  {
    img: "/images/elements/upbeat/lp-2.png",
    link: "https://gigplaced-lp-upbeat-2.vercel.app/",
  },
  {
    img: "/images/elements/playful/lp-1.png",
    link: "https://gigplaced-playful.vercel.app/",
  },
  {
    img: "/images/elements/upbeat/lp-1.png",
    link: "https://gigplaced-upbeat.vercel.app/",
  },
];

export default function ({ elements = [] }: { elements: SanityDocument[] }) {
  const [data, setData] = useState<DocumentData>([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    const q = query(collection(db, "elements"), orderBy("timestamp"), limit(3));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const templates: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        templates.push(doc.data());
      });
      setData(templates);
      setLoader(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  return (
    <Inview id="elements">
      <section
        id="elements"
        className="fade-out flex flex-col justify-center gap-24"
      >
        {/* Header */}
        <div className="space-y-4">
          <h5 className="uppercase font-bold text-pink-500 md:text-xl text-lg">
            Elements
          </h5>
          <h2 className="font-semibold md:text-5xl sm:text-4xl text-3xl md:w-2/3">
            For All The Business Needs, We Have Got You Covered.
          </h2>
        </div>

        {/* Projects */}
        {loader ? (
          <div className="flex gap-5 h-92">
            {Array.from({ length: 3 }).map((_, i: number) => (
              <ContentLoader key={i} viewBox="0 0 500 200">
                {/* Only SVG shapes */}
                <rect x="0" y="0" rx="3" ry="3" width="100%" height="300" />
                <rect x="0" y="40" rx="3" ry="10" width="100" height="10" />
              </ContentLoader>
            ))}
          </div>
        ) : (
          <div className="w-full overflow-x-scroll">
            <div
              className={`flex gap-8 p-2`}
              style={{ width: data.length * 30 + "rem" }}
            >
              {elements.map((element: any, index: number) => (
                <ElementCard
                  key={index}
                  name={element?.name}
                  price={element?.price}
                  mainImage={urlForImage(element?.mainImage).url().toString()}
                  alt={element?.mainImage?.alt}
                  slug={element?.slug}
                />
              ))}
              <BlankCard />
              {/* {ELEMENTS.map((el, i) => (
              <div key={i} className="space-y-4 border p-2 overflow-hidden">
                <Link href={el.link} target="_blank">
                  <img
                    src={el.img}
                    alt={el.link}
                    className="object-contain hover:scale-110 transition duration-300"
                  />
                </Link>
                <div className="flex justify-center gap-2">
                  <Link
                    href={el.link}
                    target="_blank"
                    className="border-green-500 border p-2 w-24 text-center "
                  >
                    View
                  </Link>
                  <button className="bg-green-500 p-2 w-24 text-white">
                    Buy
                  </button>
                </div>
              </div>
            ))} */}
            </div>
          </div>
        )}
      </section>
    </Inview>
  );
}
