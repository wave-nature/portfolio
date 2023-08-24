import Link from "next/link";
import Inview from "./Inview";

const ELEMENTS = [
  {
    id: 1,
    link: "https://shopitup.vercel.app/",
  },

  {
    id: 1,
    link: "https://shopitup.vercel.app/",
  },
  {
    id: 1,
    link: "https://shopitup.vercel.app/",
  },
];

export default function () {
  return (
    <Inview id="elements">
      <section
        id="elements"
        className="fade-out flex flex-col justify-center gap-24"
      >
        {/* Header */}
        <div className="space-y-4">
          <h5 className="uppercase font-bold text-pink-500 md:text-xl text-lg">
            Elements
          </h5>
          <h2 className="font-semibold md:text-5xl sm:text-4xl text-3xl md:w-2/3">
            For All The Business Needs, We Have Got You Covered.
          </h2>
        </div>

        {/* Projects */}
        <div className="flex overflow-x-scroll">
          <div className="flex gap-8 p-2">
            {ELEMENTS.map((el) => (
              <div key={el.id} className="space-y-2 border p-2">
                <Link href={el.link} target="_blank">
                  <img
                    src="/images/elements/simple/shopitup.png"
                    className="object-contain"
                  />
                </Link>
                <div className="flex justify-center gap-2">
                  <button className="border-green-500 border p-2 w-24">
                    View
                  </button>
                  <button className="bg-green-500 p-2 w-24 text-white">
                    Buy
                  </button>
                </div>

                {/* <Project
              link="#"
              imgSrc="/images/1.webp"
              title="Uploading Soon"
              description="This is a dummy description for the project."
            /> */}
              </div>
            ))}
          </div>
        </div>
      </section>
    </Inview>
  );
}
