"use client";

import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

const IncorrectRoute = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-2xl mx-auto mb-16">
        <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
          No Element Found
        </h1>
        <p className="mb-16 text-gray-600 dark:text-gray-400">
          No element was found in this route.
        </p>
        <button
          className="border-2 group border-slate-600 hover:border-dashed w-48 md:w-60 py-3 md:py-4 text-md md:text-xl"
          onClick={() => router.replace("/")}
        >
          <span>Return to Home</span>
        </button>
      </div>
      <span className="h-16" />
    </>
  );
};

export default IncorrectRoute;
