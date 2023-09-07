"use client";
import ElementCard from "@/components/ElementCard";
import Alert from "@/components/Alert";
const img = "/images/elements/simple/ecom-1.png";
import {
  collection,
  query,
  onSnapshot,
  DocumentData,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase.config";

export default function Elements() {
  const [data, setData] = useState<DocumentData>([]);

  useEffect(() => {
    const q = query(collection(db, "elements"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const templates: DocumentData[] = [];
      querySnapshot.forEach((doc) => {
        templates.push(doc.data());
      });
      setData(templates);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  // const data = [
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  //   {
  //     title: "Solar Aura",
  //     price: 40,
  //     img,
  //     redirectUrl: "https://gigplaced.tech",
  //   },
  // ];

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
          {data.map((element: any, index: number) => (
            <ElementCard
              key={index}
              name={element.name}
              price={element.price}
              img={element.imageURL}
              slug={element.slug}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
