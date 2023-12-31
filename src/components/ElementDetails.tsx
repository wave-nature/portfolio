"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsArrowUpRight,
} from "react-icons/bs";
import {
  SiDaisyui,
  SiReact,
  SiTailwindcss,
  SiBootstrap,
  SiMui,
  SiRedux,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { LuArrowLeft } from "react-icons/lu";
import { RxDotFilled } from "react-icons/rx";
import type { SanityDocument } from "@sanity/client";
import Link from "next/link";
import { urlForImage } from "../../sanity/lib/image";
import ContactModal from "./Modal";
import InterestedModal from "./InterestedModal";
import { Slideshow } from "./Slideshow";

export default function ElementDetails({
  element,
}: {
  element: SanityDocument;
}) {
  const router = useRouter();

  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://firebasestorage.googleapis.com/v0/b/gigplaced-elements.appspot.com/o/uploads%2Fimages%2Flp-upbeat-2.png?alt=media&token=299551be-eeef-4182-882e-4add08a23245",
    },
    {
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
    },

    {
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? element?.images?.length - 1
      : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === element?.images?.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  // Tech Stack Icon Mapper
  const techIcons: { [key: string]: any } = {
    react: <SiReact />,
    daisyUI: <SiDaisyui />,
    tailwind: <SiTailwindcss />,
    materialUI: <SiMui />,
    bootstrap: <SiBootstrap />,
    next: <TbBrandNextjs />,
    zustand: "Zustand",
    redux: <SiRedux />,
  };

  return (
    <>
      <button
        className="bg-slate-200 shadow-sm rounded-full w-12 h-12 flex items-center justify-center hover:bg-slate-300"
        onClick={() => router.replace("/elements")}
      >
        <LuArrowLeft />
      </button>
      <div>
        <div className="flex flex-col md:flex-row items-start justify-between">
          <div className="min-w-[40%]">
            <h1 className="text-3xl md:text-4xl font-semibold">
              {element?.name}
            </h1>
            <div className="mt-6">
              {element?.tags?.map((tag: { name: string }, index: number) => (
                <span
                  className="inline-block text-slate-800 px-3 py-2 bg-stone-200 rounded-sm my-3 mr-3 text-sm font-medium cursor-default"
                  key={index}
                >
                  {tag?.name}
                </span>
              ))}
            </div>
          </div>
          <div className="mr-[5%] mt-8 md:mt-0">
            <p className="text-stone-600 tracking-wide">
              {element?.shortDesc[0]?.children[0]?.text}
            </p>
            <div className="mt-3 flex item-center justify-start gap-8">
              {/* <button className="text-semibold text-white bg-green-500 px-3 py-2 rounded-sm hover:bg-green-600 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                Buy ${element?.price}
              </button> */}
              <InterestedModal slug={element?.slug} />

              <Link
                href={element?.previewURL}
                rel="noopener noreferrer"
                target="_blank"
              >
                <button className="flex justify-start group gap-2 text-semibold bg-slate-200 px-3 py-2 rounded-sm hover:bg-slate-300 transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                  Preview
                  <BsArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-all ease-in-out" />
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="relative max-w-[1400px] h-[50vh] md:h-[70vh] lg:h-[700px] w-full overflow-hidden py-16">
          <Slideshow images={element?.images} />
        </div>

        {/* <div className="max-w-[1400px] h-[60vh] md:h-[70vh] lg:h-[700px] w-full m-auto py-16 px-1 md:px-4 relative group">
          <div
            style={{
              backgroundImage: `url(${urlForImage(element?.images[currentIndex])
                .url()
                .toString()})`,
              backgroundPosition: `50% 0`,
              backgroundRepeat: `no-repeat`,
            }}
            className="w-full h-full rounded-xl md:rounded-2xl bg-cover duration-500"
          ></div>
          Left Arrow
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactLeft onClick={prevSlide} size={30} />
          </div>
          Right Arrow
          <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
            <BsChevronCompactRight onClick={nextSlide} size={30} />
          </div>
          <div className="flex items-center top-4 justify-center py-2">
            {element?.images?.map((slide: any, slideIndex: number) => (
              <div
                key={slideIndex}
                onClick={() => goToSlide(slideIndex)}
                className={`${
                  currentIndex === slideIndex ? "text-3xl" : "text-2xl"
                } cursor-pointer`}
              >
                <RxDotFilled />
              </div>
            ))}
          </div>
        </div> */}

        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Details</h2>
          <p className="text-slate-600">
            {element?.longDesc[0]?.children[0]?.text}
          </p>
        </div>
        <section className="h-auto  w-full mx-auto py-8 bg-white">
          <div className="w-[95%] max-w-7xl my-8 ">
            <h5 className="text-xl md:text-2xl font-semibold mb-4">Features</h5>
            <div className="transition-all ease-in-out">
              {element?.features.map((item: any, index: number) => (
                <div
                  className={` mb-4 pb-3 ${
                    activeIndex !== index && "border-b border-gray-300"
                  } `}
                  key={index}
                >
                  <div
                    className=" text-lg lg:text-xl font-medium cursor-pointer mb-1 py-2 flex justify-between items-center"
                    onClick={() => handleClick(index)}
                  >
                    <h3>{item.name}</h3>
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className={`${
                        activeIndex === index ? "rotate-45" : "rotate-0"
                      } transition-all ease-in-out delay-400`}
                    >
                      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                      <g
                        id="SVGRepo_tracerCarrier"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></g>
                      <g id="SVGRepo_iconCarrier">
                        {" "}
                        <g id="Edit / Add_Plus">
                          {" "}
                          <path
                            id="Vector"
                            d="M6 12H12M12 12H18M12 12V18M12 12V6"
                            stroke="#000000"
                            stroke-width="1"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          ></path>{" "}
                        </g>{" "}
                      </g>
                    </svg>
                  </div>
                  <div
                    className={`w-11/12 max-w-4xl text-lg text-gray-600 py-4  ${
                      activeIndex === index ? "block" : "hidden"
                    } transition-all ease-in-out`}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div>
          <h2 className="text-xl md:text-2xl font-semibold mb-4">Tech Stack</h2>
          <div className="flex items-center gap-4 text-3xl lg:text-4xl text-green-500 font-bold">
            {element?.techStack.map(
              (tech: { shortName: string }, index: number) => (
                <span key={index} className="cursor-pointer ">
                  {techIcons[tech?.shortName]}
                </span>
              )
            )}
          </div>
        </div>
      </div>
    </>
  );
}
