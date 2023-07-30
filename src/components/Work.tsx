import Inview from "./Inview";
import Project from "./Project";

export default function () {
  return (
    <Inview id="work">
      <section
        id="work"
        className="fade-out flex flex-col justify-center gap-24"
      >
        {/* Header */}
        <div className="space-y-4">
          <h5 className="uppercase font-bold text-pink-500 md:text-xl text-lg">
            Work
          </h5>
          <h2 className="font-semibold md:text-5xl sm:text-4xl text-3xl md:w-2/3">
            Real results for more than 20+ clients now and then.
          </h2>
        </div>

        {/* Projects */}
        <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-16">
          {/* row 1 */}
          <div className="space-y-12">
            <Project
              link="https://bookmytable.vercel.app/"
              imgSrc="/images/home.png"
              title="Book Table"
              description="Table booking website application for restaurant and hotels. Functionalities like availaibilty and scheduling slot for booking."
            />
            <Project
              link="#"
              imgSrc="/images/1.webp"
              title="Uploading Soon"
              description="This is a dummy description for the project."
            />
          </div>

          {/* row 2 */}
          <div className="space-y-12 mt-16">
            <Project
              link="#"
              imgSrc="/images/2.webp"
              title="Uploading Soon"
              description="This is a dummy description for the project."
            />

            <Project
              link="#"
              imgSrc="/images/3.webp"
              title="Uploading Soon"
              description="This is a dummy description for the project."
            />
          </div>
        </div>
      </section>
    </Inview>
  );
}
