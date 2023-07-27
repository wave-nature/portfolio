import ClientCard from "./ClientCard";
import Inview from "./Inview";

export default function () {
  return (
    <Inview id="testimonials">
      <section
        id="testimonials"
        className="fade-out flex flex-col justify-center gap-24"
      >
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
          <ClientCard
            title="Database Design | AI Agents"
            description="Third time working with this Vaibhav and team, and they always manage to go beyond expectations"
            user="miki_t"
            job="Self-Employed, (USA)"
          />
          <ClientCard
            title="Web Design & Development"
            description="very good, friendly and the delivery was vera fast :D"
            user="ivanbutronsossa"
            job="Self-Employed, (Germany)"
          />

          <ClientCard
            title="Web Design & Development"
            description="Work successfully done by them."
            user="Praveen Rana"
            job="Self-Employed, (India)"
          />
        </div>
      </section>
    </Inview>
  );
}
