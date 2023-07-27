import Link from "next/link";
import {
  BsArrowRight,
  BsEnvelope,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";

export default function () {
  return (
    <footer className="flex flex-col justify-center gap-32">
      <div className="space-y-16">
        <h1 className="md:text-7xl  font-semibold  text-6xl">
          Ready to get your business out there?
        </h1>

        <div className="group flex items-center text-pink-500 md:text-3xl text-xl cursor-pointer font-bold">
          <p>let's make something special</p>
          <span className="ml-4 group-hover:translate-x-4 transition duration-300 mt-1">
            <BsArrowRight />
          </span>
        </div>
      </div>

      {/* links and icons */}
      <section className="space-y-16">
        <nav className="">
          <ul className="flex md:flex-row flex-col gap-16 ">
            <li>
              <Link className="text-pink-500" href="#hero">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#about">About Us</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="flex md:flex-row flex-col justify-between gap-4">
          <div className="flex gap-12">
            <Link href="/">
              <BsLinkedin className="w-6 h-6" />
            </Link>
            <Link href="/">
              <BsTwitter className="w-6 h-6" />
            </Link>
            <Link href="/">
              <BsTwitter className="w-6 h-6" />
            </Link>
            <Link href="/">
              <BsTwitter className="w-6 h-6" />
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <BsEnvelope className="w-5 h-5" />
            <span className="text-lg">gigplaced@gmail.com</span>
          </div>
        </div>
      </section>
    </footer>
  );
}
