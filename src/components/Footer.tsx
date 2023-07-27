import Link from "next/link";
import {
  BsEnvelope,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import Inview from "./Inview";
import ContactModal from "./Modal";

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
        <section className="space-y-16">
          {/* <nav>
          <ul className="flex md:flex-row flex-col gap-16 ">
            <li>
              <Link className="text-pink-500" href="#hero">
                Home
              </Link>
            </li>
            <li>
              <Link href="#services">Services</Link>
            </li>
            <li>
              <Link href="#work">Work</Link>
            </li>
            <li>
              <Link href="#about">About Us</Link>
            </li>
            <li>
              <Link href="#contact">Contact</Link>
            </li>
          </ul>
        </nav> */}

          <div className="flex md:flex-row flex-col items-center justify-between gap-4">
            <div className="flex gap-8 items-center">
              <Link
                href="https://www.linkedin.com/in/gigplaced/"
                target="blank"
                rel="noopener noreferrer"
              >
                <BsLinkedin className="w-6 h-6 fill-blue-500" />
              </Link>
              <Link href="/">
                <BsTwitter className="w-6 h-6 fill-blue-500" />
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="50"
                  height="50"
                  viewBox="0 0 50 50"
                  className="fill-green-500"
                >
                  <path d="M41.86 21.321v-1.539h-2.919l-1.283-.022c-1.097 0-1.847.722-2.141 1.561v-1.539h-3.269v9.979h3.269v-2.14-3.312c0-.995.806-1.801 1.801-1.801h1.274v7.253h3.269v-2.14-3.312c0-.995.806-1.801 1.801-1.801h1.623v-2.726l-1.283-.022C42.905 19.759 42.156 20.482 41.86 21.321zM18.597 19.991L16.843 25.758 15.089 19.991 11.82 19.991 15.371 29.97 15.562 29.97 18.124 29.97 18.315 29.97 21.866 19.991zM5.239 19.991v-.665c0-.583.472-1.055 1.055-1.055h2.064v-2.737H5.523c-1.962 0-3.553 1.591-3.553 3.553v.905H.059v2.645h1.911v7.334H5.24v-7.334h3.118v7.334h3.269v-7.334-2.645H8.358 5.239zM26.398 19.857H26c-2.678 0-4.849 2.171-4.849 4.849v.548c0 2.678 2.171 4.849 4.849 4.849h.885c1.834 0 3.403-1.132 4.048-2.735l-2.884-.842c0 0-.345.988-1.548.988-1.358 0-2.077-.744-2.172-1.586h-.001v-.005c-.007-.061-.01-.123-.01-.185h3.688 3.242v-1.032C31.248 22.028 29.077 19.857 26.398 19.857zM24.322 23.814c.039-.897.777-1.613 1.684-1.613h.312c.907 0 1.645.716 1.684 1.613H24.322zM47.932 26.136c-1.123 0-2.033.91-2.033 2.033s.91 2.033 2.033 2.033c1.123 0 2.033-.91 2.033-2.033C49.964 27.046 49.055 26.136 47.932 26.136z"></path>
                </svg>
              </Link>
              <Link href="/">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                  className="fill-green-500"
                >
                  <path d="M 1 9 C 0.448 9 0 9.448 0 10 L 0 24.115234 C 0 30.276234 4.6829844 35.631469 10.833984 35.980469 C 16.730984 36.314469 21.747875 32.176391 22.796875 26.650391 C 23.366875 27.420391 23.94625 28.135969 24.53125 28.792969 L 21.001953 43.771484 C 20.932953 44.069484 21.002406 44.380094 21.191406 44.621094 C 21.382406 44.859094 21.670563 45 21.976562 45 L 27.095703 45 C 27.559703 45 27.959406 44.687328 28.066406 44.236328 C 28.687406 41.615328 29.660969 37.508156 30.542969 33.785156 L 31.453125 34.3125 C 33.618125 35.4335 35.815 36 38 36 C 45.192 36 50.926 29.641 49.875 22.25 C 49.179 17.354 45.414078 13.318344 40.580078 12.277344 C 34.951078 11.064344 29.525359 13.949141 27.193359 18.744141 C 27.193359 18.744141 26.934562 19.318578 26.726562 19.892578 C 25.076563 17.046578 24.107609 14.094078 23.599609 11.955078 C 23.414609 11.175078 23.137469 9.762875 23.105469 9.671875 C 22.966469 9.268875 22.589109 9 22.162109 9 L 17 9 C 16.448 9 16 9.448 16 10 L 16 24.300781 C 16 26.649781 14.287219 28.750516 11.949219 28.978516 C 9.2672187 29.240516 7 27.13 7 24.5 L 7 10 C 7 9.448 6.552 9 6 9 L 1 9 z M 38 19 C 40.757 19 43 21.243 43 24 C 43 26.757 40.757 29 38 29 C 35.775 29 33.713531 27.658281 32.269531 26.488281 C 32.796531 24.263281 33.15025 22.773047 33.15625 22.748047 C 33.72425 20.541047 35.717 19 38 19 z"></path>
                </svg>
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
