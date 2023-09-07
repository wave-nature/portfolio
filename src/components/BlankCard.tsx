import { useRouter } from "next/navigation";
import { BsArrowRight } from "react-icons/bs";

export default function () {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="flex justify-center min-h-[250px] w-[20rem]">
        <div className="flex flex-row justify-start items-center gap-8">
          <button
            className="border-2 group border-slate-600 hover:border-dashed w-48 md:w-60 py-3 md:py-4 text-md md:text-xl"
            onClick={() => router.push("/elements")}
          >
            <span>View all</span>
            <span className="ml-4 absolute group-hover:translate-x-4 transition duration-300 mt-1">
              <BsArrowRight className="w-10" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
