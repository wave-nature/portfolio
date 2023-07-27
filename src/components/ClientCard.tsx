import Image from "next/image";
import { BsStarFill } from "react-icons/bs";

export default function () {
  return (
    <div className="border p-8 space-y-10">
      <div className="flex gap-2">
        <BsStarFill className="fill-yellow-400 w-4 h-4" />
        <BsStarFill className="fill-yellow-400 w-4 h-4" />
        <BsStarFill className="fill-yellow-400 w-4 h-4" />
        <BsStarFill className="fill-yellow-400 w-4 h-4" />
        <BsStarFill className="fill-yellow-400 w-4 h-4" />
      </div>
      <div className="space-y-6">
        <h5 className="md:text-3xl text-2xl font-semibold">
          Saas Product Development
        </h5>
        <p className="md:text-lg text-slate-600">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
          vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Exercitationem, consequuntur ab architecto labore sequi enim omnis
          iste at quo itaque.
        </p>

        <div className="flex items-center gap-8">
          <Image
            src="/images/user.webp"
            alt="user"
            className="w-20 h-20 rounded-full"
            width={100}
            height={100}
          />
          <div>
            <h5 className="md:text-xl text-lg font-semibold">
              Saas Product Development
            </h5>
            <p className="md:text-sm text-slate-600">
              Marketing Manager, Company
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
