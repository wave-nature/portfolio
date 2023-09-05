import { LuExternalLink } from "react-icons/lu";

export default function ({
  title,
  price,
  img,
  url,
}: {
  title: string;
  price: number;
  url: string;
  img: any;
}) {
  return (
    <div className="group relative">
      <img
        src={img}
        alt={title}
        className="min-h-[250px] rounded-lg shadow-sm group-hover:shadow-xl border border-gray-500 border-opacity-20 transition-all ease-in-out"
      />
      <a
        href={url}
        target="_blank"
        className="absolute text-lg top-4 right-4 hidden group-hover:flex w-10 h-10 bg-white shadow-md items-center justify-center rounded-full transition-all ease-in-out"
      >
        <LuExternalLink />
      </a>
      <div className="flex items-center justify-between mt-3 px-1">
        <h4 className="text-lg font-semibold">{title}</h4>
        <h5 className="text-gray-600 font-semibold">${price} USD</h5>
      </div>
    </div>
  );
}
