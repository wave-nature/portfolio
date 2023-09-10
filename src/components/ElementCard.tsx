import { LuArrowRight } from "react-icons/lu";
import Link from "next/link";

export default function ({
  name,
  price,
  mainImage,
  alt,
  slug,
  country,
}: {
  name: string;
  price: number;
  slug: string;
  mainImage: string;
  alt: string;
  country?: string;
}) {
  return (
    <Link href={`/elements/${slug}`}>
      <div className="group relative cursor-pointer">
        <img
          src={mainImage}
          alt={alt}
          className="min-h-[250px] w-[20rem] md:w-[24rem] rounded-lg shadow-sm group-hover:shadow-xl border border-gray-500 border-opacity-20 transition-all ease-in-out"
        />
        <span className="absolute text-lg top-4 right-8 hidden group-hover:flex w-10 h-10 bg-white shadow-md items-center justify-center rounded-full transition-all ease-in-out">
          <LuArrowRight />
        </span>
        <div className="flex items-center justify-between mt-3 px-1">
          <h4 className="text-lg font-semibold">{name}</h4>
          <h5 className="text-white font-semibold bg-green-500 py-1 px-2">
            {country === "IN" ? "₹" : "$"}
            {price}
          </h5>
        </div>
      </div>
    </Link>
  );
}
