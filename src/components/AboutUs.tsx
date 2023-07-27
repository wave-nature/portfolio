import Image from "next/image";
import Link from "next/link";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import Inview from "./Inview";

export default function () {
  return (
    <Inview id="about">
      <section
        id="about"
        className="fade-out flex flex-col justify-center gap-24"
      >
        {/* Header */}
        <div className="space-y-4">
          <h5 className="uppercase font-bold text-pink-500 md:text-xl text-lg">
            About Us
          </h5>
          <h2 className="font-semibold md:text-5xl sm:text-4xl text-3xl md:w-2/3">
            We have a vision to transform the way of development.
          </h2>
        </div>

        {/* our team */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-16">
          {/* vaibhav */}
          <div className="flex flex-col items-center gap-4 p-4">
            <Image
              src="/images/vaibhav.jpg"
              alt="vaibhav"
              width={180}
              height={180}
              className="rounded-[100px] mx-auto"
            />
            <div className="flex flex-col justify-center items-center">
              <h5 className="md:text-3xl text-2xl font-semibold">
                Vaibhav Kesharwani
              </h5>
              <p className="md:text-lg text-base text-slate-700 font-medium">
                Software Engineer {"</>"}
              </p>
            </div>
            <div className="md:w-4/5">
              <p className="md:text-lg text-slate-600 mb-4 text-center">
                With a passion for crafting clean and maintainable code, he
                seamlessly navigates the realms of Data Science, Web
                Development, Android Development, and Creative Design, making
                him the ultimate Freelancer to bring your idea to life.
              </p>
              <div className="flex gap-8 justify-center items-center">
                <Link href="https://www.linkedin.com/in/vaibhav-kesharwani//">
                  <BsLinkedin className="w-6 h-6 fill-pink-500" />
                </Link>
                <Link href="https://www.instagram.com/vk_2128/">
                  <BsInstagram className="w-6 h-6 fill-pink-500" />
                </Link>
                <Link href="https://github.com/vaibbhavk">
                  <BsGithub className="w-6 h-6 fill-pink-500" />
                </Link>
              </div>
            </div>
          </div>
          {/* vivek */}
          <div className="flex flex-col items-center gap-4 p-4">
            <Image
              src="/images/vivek.jpg"
              alt="vivek"
              width={180}
              height={180}
              className="rounded-[100px] mx-auto"
            />
            <div className="flex flex-col justify-center items-center">
              <h5 className="md:text-3xl text-2xl font-semibold">
                Vivek Singh Bhadouria
              </h5>
              <p className="md:text-lg text-base text-slate-700 font-medium">
                Software Engineer {"</>"}
              </p>
            </div>
            <div className="md:w-4/5">
              <p className="md:text-lg text-slate-600 mb-4 text-center">
                Experienced developer proficient in React.js and Node.js,
                writing clean code with complex API development and contributing
                to web projects including a blogging website and a paperless
                water delivery system.
              </p>
              <div className="flex gap-8 justify-center items-center">
                <Link href="https://www.linkedin.com/in/vivek-singh-bhadouria-427649200/">
                  <BsLinkedin className="w-6 h-6 fill-pink-500" />
                </Link>
                <Link href="https://www.instagram.com/viveksinghbhadouria/">
                  <BsInstagram className="w-6 h-6 fill-pink-500" />
                </Link>
                <Link href="https://github.com/wave-nature">
                  <BsGithub className="w-6 h-6 fill-pink-500" />
                </Link>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </Inview>
  );
}
