// import Image from "next/image";
import Image from "next/image";
import Link from "next/link";
import { ReactElement } from "react";
import { BsStarFill, BsCheckCircleFill } from "react-icons/bs";

const colors = [
  "bg-red-500",
  "bg-green-500",
  "bg-blue-500",
  "bg-orange-500",
  "bg-indigo-500",
  "bg-purple-500",
];
function randomIntFromInterval(min: number, max: number) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export default function ({
  title,
  description,
  user,
  job,
  icon,
  iconLink,
}: {
  title: string;
  description: string;
  user: string;
  job: string;
  icon: any;
  iconLink: string;
}) {
  const rndInt = randomIntFromInterval(1, 6);
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
        <h5 className="md:text-3xl text-2xl font-semibold">{title}</h5>
        <p className="md:text-lg text-slate-600">{description}</p>

        <div className="flex items-start xl:items-center gap-8 justify-between flex-col xl:flex-row">
          {/* <Image
            src="/images/user.webp"
            alt="user"
            className="w-20 h-20 rounded-full"
            width={100}
            height={100}
          /> */}
          <div className="flex items-center gap-8">
            <div
              className={`rounded-full w-20 h-20 flex items-center justify-center text-2xl font-bold ${colors[rndInt]}`}
            >
              {user[0].toUpperCase()}
            </div>
            <div>
              <h5 className="md:text-xl text-lg font-semibold">{user}</h5>
              <p className="md:text-sm text-slate-600">{job}</p>
            </div>
          </div>
          <div className="flex items-center gap-1 justify-end">
            <BsCheckCircleFill className="w-4 h-4 fill-green-400" />
            <p className="md:text-sm text-slate-600">Verified from</p>
            <Link href={iconLink} target="blank" rel="noopener noreferrer">
              {icon}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
