import {
  BsLaptop,
  BsPhone,
  BsCodeSlash,
  BsGraphUp,
  BsAndroid,
  BsDatabase,
  BsRobot,
  BsClipboardData,
  BsSearch,
  BsGlobe,
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
            icon={<BsCodeSlash className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Saas Product Development"
            icon={<BsLaptop className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Cross-Platform Apps"
            icon={<BsPhone className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Data Scraping"
            icon={<BsGlobe className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Business Analytics"
            icon={<BsGraphUp className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Search Engine Optimization (SEO)"
            icon={<BsSearch className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Data Visualization"
            icon={<BsClipboardData className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Android Development"
            icon={<BsAndroid className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Landing Page/Portfolio Development"
            icon={<BsCodeSlash className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Database Design & Development"
            icon={<BsDatabase className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="AI Agents"
            icon={<LuBrainCircuit className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="LLM Apps Trained With Custom Data"
            icon={<BsRobot className="fill-slate-700 h-12 w-12" />}
          />

          <Service
            heading="Motion Design"
            icon={
              <MdOutlineAutoAwesomeMotion className="fill-slate-700 h-12 w-12" />
            }
          />
        </div>
      </section>
    </Inview>
  );
}
