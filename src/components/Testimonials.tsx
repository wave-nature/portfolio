import ClientCard from "./ClientCard";

export default function () {
  return (
    <section id="testimonials" className="flex flex-col justify-center gap-24">
      {/* Header */}
      <div className="space-y-4">
        <h5 className="uppercase font-bold text-pink-500 md:text-xl text-lg">
          Testimonials
        </h5>
        <h2 className="font-semibold md:text-5xl sm:text-4xl text-3xl md:w-2/3">
          What our clients have to say.
        </h2>
      </div>

      {/* clients */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-12">
        <ClientCard />
        <ClientCard />
        <ClientCard />
        <ClientCard />
      </div>
    </section>
  );
}
