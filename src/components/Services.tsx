import { BsLaptop, BsPhone, BsCodeSlash } from "react-icons/bs";

export default function () {
  return (
    <section id="services" className=" flex flex-col justify-center gap-24">
      {/* Header */}
      <div className="space-y-4">
        <h5 className="uppercase font-bold text-pink-500 md:text-xl text-lg">
          Services
        </h5>
        <h2 className="font-semibold md:text-5xl sm:text-4xl text-3xl md:w-2/3">
          Pushing the limits of what's possible
        </h2>
      </div>

      {/* Services */}
      <div className="grid gap-28 md:grid-cols-3 grid-cols-1">
        <div className="space-y-5 w-10/12">
          <BsCodeSlash className="h-16 w-16" />
          <h5 className="md:text-3xl text-2xl font-semibold">
            Web Design & Development
          </h5>
          <p className="md:text-lg text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            vitae.
          </p>
        </div>
        <div className="space-y-5 w-10/12">
          <BsLaptop className="h-16 w-16" />
          <h5 className="md:text-3xl text-2xl font-semibold">
            Saas Product Development
          </h5>
          <p className="md:text-lg text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            vitae.
          </p>
        </div>
        <div className="space-y-5 w-10/12">
          <BsPhone className="h-16 w-16" />
          <h5 className="md:text-3xl text-2xl font-semibold">
            Cross Platform Apps
          </h5>
          <p className="md:text-lg text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
            vitae.
          </p>
        </div>
      </div>
    </section>
  );
}
