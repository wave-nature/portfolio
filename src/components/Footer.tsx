import Link from "next/link";
import { BsEnvelope, BsLinkedin } from "react-icons/bs";
import Inview from "./Inview";
import ContactModal from "./Modal";
import Image from "next/image";

export default function () {
  return (
    <Inview id="footer">
      <footer
        id="footer"
        className="fade-out flex flex-col justify-center gap-32"
      >
        <div className="space-y-16">
          <h1 className="md:text-7xl  font-semibold  text-6xl">
            Ready to get your business out there?
          </h1>

          <ContactModal />
        </div>

        {/* links and icons */}
        <section className="space-y-16 mx-auto md:mx-0">
          <nav>
            <ul className="flex md:flex-row flex-col gap-16 ">
              <li>
                <Link className="text-pink-500" href="/terms-conditions">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/refund-policy">Refund Policy</Link>
              </li>
              <li>
                <Link href="/cancellation-shipping-policy">
                  Cancellation And Shipping Policy
                </Link>
              </li>
              <li>
                <Link href="/contact-us">Contact</Link>
              </li>
            </ul>
          </nav>

          <div className="flex md:flex-row flex-col items-center justify-between gap-4">
            <div className="flex gap-8 items-center">
              <Link
                href="https://www.linkedin.com/in/gigplaced/"
                target="blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="w-6 h-6 fill-blue-500" />
              </Link>

              <Link
                href="https://www.fiverr.com/gigplaced"
                target="blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/fiverr.svg"
                  alt="fiverr icon"
                  height={50}
                  width={50}
                />
              </Link>
              <Link
                href="https://www.upwork.com/freelancers/~01501d8f8903eb5af2"
                target="blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/upwork.svg"
                  alt="upwork icon"
                  height={30}
                  width={30}
                />
              </Link>
              <Link
                href="https://www.freelancer.com/u/gigplaced"
                target="blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/freelancer.svg"
                  alt="freelancer icon"
                  height={30}
                  width={30}
                />
              </Link>
            </div>

            <Link
              href="mailto:gigplaced@gmail.com"
              target="blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-pink-500"
            >
              <BsEnvelope className="w-6 h-6" />
              <span className="text-lg">gigplaced@gmail.com</span>
            </Link>
          </div>
        </section>
      </footer>
    </Inview>
  );
}
