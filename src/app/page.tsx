import AboutUs from "@/components/AboutUs";
import Alert from "@/components/Alert";
import Elements from "@/components/Elements";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";
import { getElements } from "../../sanity/lib/utils";

export default async function Home() {
  const elements = await getElements();

  return (
    <main className="mt-16 md:px-28 px-4 space-y-28">
      <Alert />
      <Hero />
      <Services />
      <Elements elements={elements} />
      <Work />
      <AboutUs />
      <Testimonials />
      <Footer />
    </main>
  );
}
