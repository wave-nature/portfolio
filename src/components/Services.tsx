import {
  BsLaptop,
  BsPhone,
  BsCodeSlash,
  BsGraphUp,
  BsAndroid,
  BsDatabase,
} from "react-icons/bs";
import { LuBrainCircuit } from "react-icons/lu";
import { MdOutlineAutoAwesomeMotion } from "react-icons/md";
import Inview from "./Inview";
import Service from "./Service";

export default function () {
  return (
    <Inview id="services">
      <section
        id="services"
        className="fade-out flex flex-col justify-center gap-24"
      >
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
        <div className="grid gap-16 md:grid-cols-4 grid-cols-1">
          <Service
            heading="Web Design & Development"
            icon={<BsCodeSlash className="h-16 w-16" />}
          />

          <Service
            heading="Saas Product Development"
            icon={<BsLaptop className="h-16 w-16" />}
          />

          <Service
            heading="Cross-Platform Apps"
            icon={<BsPhone className="h-16 w-16" />}
          />

          <Service
            heading="Data Scraping"
            icon={<BsCodeSlash className="h-16 w-16" />}
          />

          <Service
            heading="Business Analytics"
            icon={<BsGraphUp className="h-16 w-16" />}
          />

          <Service
            heading="Search Engine Optimization"
            icon={<BsLaptop className="h-16 w-16" />}
          />

          <Service
            heading="Data Visualization"
            icon={<BsGraphUp className="h-16 w-16" />}
          />

          <Service
            heading="Android Development"
            icon={<BsAndroid className="h-16 w-16" />}
          />

          <Service
            heading="Database Design & Development"
            icon={<BsDatabase className="h-16 w-16" />}
          />

          <Service
            heading="AI Agents"
            icon={<LuBrainCircuit className="h-16 w-16" />}
          />

          <Service
            heading="LLM Apps Trained With Custom Data"
            icon={<LuBrainCircuit className="h-16 w-16" />}
          />

          <Service
            heading="Motion Design"
            icon={<MdOutlineAutoAwesomeMotion className="h-16 w-16" />}
          />
        </div>
      </section>
    </Inview>
  );
}
