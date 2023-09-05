"use client";
import React, { useState } from "react";
import {
  BsChevronCompactLeft,
  BsChevronCompactRight,
  BsArrowUpRight,
} from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
export default function ElementDetail() {
  const slides = [
    {
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
    },
    {
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
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
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex: number) => {
    setCurrentIndex(slideIndex);
  };

  const subCategories = ["Joy", "Upbeat", "Template"];

  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index: any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const features = [
    {
      title: "Hello",
      desc: "How are yoy",
    },
    {
      title: "Hello",
      desc: "How are yoy",
    },
  ];

  return (
    <main className="mt-16 md:px-28 px-4 space-y-12">
      <p>
        Elements / <span className="text-green-700">Templates</span>
      </p>
      <div className="flex flex-col md:flex-row items-start justify-between">
        <div className="min-w-[40%]">
          <h1 className="text-3xl md:text-4xl font-semibold">
            Agency Website Template
          </h1>
          <div className="mt-6">
            {subCategories.map((sub, i) => (
              <span
                className="inline-block text-slate-800 px-3 py-2 bg-stone-200 rounded-sm my-3 mr-3 text-sm font-medium hover:bg-stone-300 cursor-pointer"
                key={i}
              >
                {sub}
              </span>
            ))}
          </div>
        </div>
        <div className="mr-[5%] mt-8 md:mt-0">
          <p className="text-stone-600 tracking-wide">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eum
            reprehenderit, omnis placeat vitae amet.
          </p>
          <div className="mt-3 flex item-center justify-start gap-8">
            <button className="text-semibold text-white bg-green-500 px-3 py-2 rounded-sm hover:bg-green-600">
              Buy $79 USD
            </button>
            <button className="flex justify-start gap-2 text-semibold group bg-slate-200 px-3 py-2 rounded-sm hover:bg-slate-300">
              Preview{" "}
              <BsArrowUpRight className="group-hover:translate-x-2 group-hover:-translate-y-1 transition-all ease-in-out" />
            </button>
          </div>
        </div>
      </div>
      <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div>
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex items-center top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
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
      </div>
      <div>
        <h2 className="text-xl md:text-2xl font-semibold mb-4">Details</h2>
        <p className="text-slate-600">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
          ducimus assumenda mollitia similique! Illo sequi iure consectetur.
          Tempora porro, hic consectetur, corporis modi incidunt ullam
          repudiandae quae nobis omnis distinctio! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Similique, veniam repellat. Delectus,
          officiis. Sed vel voluptates neque illo, nostrum voluptatem fugiat ut!
          Dicta sequi quibusdam necessitatibus numquam quae! Non, fugit. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. In quis sed nulla
          natus, beatae dolores repellendus dolorem, ullam consequuntur
          repudiandae, maiores architecto. Voluptatum error ipsa ipsum earum
          deleniti quia autem.
        </p>
      </div>
      <section className="h-auto  w-full mx-auto py-8 bg-white">
        <div className="w-[95%] max-w-7xl mx-auto  my-8 ">
          <h5 className="font-medium text-center text-transparent text-xl bg-clip-text bg-gradient-to-t from-sky-500 to-purple-600 mb-4">
            Features
          </h5>
          <div className="transition-all ease-in-out">
            {features.map((item, index) => (
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
                  <h3>{item.title}</h3>
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
    </main>
  );
}
