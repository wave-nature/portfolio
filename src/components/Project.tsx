import Link from "next/link";

interface Props {
  link: string;
  imgSrc: string;
  title: string;
  description: string;
}

export default function ({ link, imgSrc, title, description }: Props) {
  return (
    <div>
      <Link href={link} security="rel=noopener noreferrer">
        <div className="space-y-5">
          <div className="overflow-hidden">
            <img
              src={imgSrc}
              alt="some"
              className="w-full h-[50vh] hover:scale-125 transition-all duration-500"
            />
          </div>
          <h5 className="md:text-3xl text-2xl font-semibold">{title}</h5>
          <p className="md:text-lg text-slate-600">{description}</p>
        </div>
      </Link>
    </div>
  );
}
