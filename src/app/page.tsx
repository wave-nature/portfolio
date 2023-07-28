import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import { saveSiteVisitImpression } from "@/request";

export default async function Home() {
  await saveSiteVisitImpression();
  return (
    <main className="mt-16 md:px-28 px-4 space-y-28">
      <Hero />
      <Services />
      <Work />
      <AboutUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
