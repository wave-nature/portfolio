import Image from "next/image";
import ClientCard from "./ClientCard";
import Inview from "./Inview";
import ReviewModal from "./ReviewModal";

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
            icon={
              <Image
                src="/images/fiverr.svg"
                alt="fiverr icon"
                height={50}
                width={50}
              />
            }
            iconLink="https://www.fiverr.com/vaibbhavvk?public_mode=true"
          />
          <ClientCard
            title="Web Design & Development"
            description="very good, friendly and the delivery was vera fast :D"
            user="ivanbutronsossa"
            job="Self-Employed, (Germany)"
            icon={
              <Image
                src="/images/fiverr.svg"
                alt="fiverr icon"
                height={50}
                width={50}
              />
            }
            iconLink="https://www.fiverr.com/vaibbhavvk?public_mode=true"
          />

          <ClientCard
            title="Web Design & Development"
            description="Work successfully done by them."
            user="Praveen Rana"
            job="Self-Employed, (India)"
            icon={
              <Image
                src="/images/upwork.svg"
                alt="upwork icon"
                height={35}
                width={35}
              />
            }
            iconLink="https://www.upwork.com/freelancers/~01e98ab6fa7c516372?viewMode=1"
          />
        </div>

        {/* CTA */}
        <div className="mt-8">
          <ReviewModal />
        </div>
      </section>
    </Inview>
  );
}
