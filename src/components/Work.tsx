export default function () {
  return (
    <section id="work" className="flex flex-col justify-center gap-24">
      {/* Header */}
      <div className="space-y-4">
        <h5 className="uppercase font-bold text-pink-500 md:text-xl text-lg">
          Work
        </h5>
        <h2 className="font-semibold md:text-5xl sm:text-4xl text-3xl md:w-2/3">
          Real Result for every client.
        </h2>
        <h2 className="font-semibold md:text-5xl sm:text-4xl text-3xl md:w-2/3">
          Every time.
        </h2>
      </div>

      {/* Projects */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-16">
        {/* row 1 */}
        <div className="space-y-12">
          <div className="space-y-5">
            <div className="overflow-hidden">
              <img
                src="https://framerusercontent.com/images/GfXw1hONniSNADZ4LS14qrow.jpg"
                alt="some"
                className="w-full h-[50vh] hover:scale-125 transition-all duration-500"
              />
            </div>
            <h5 className="md:text-3xl text-2xl font-semibold">
              Saas Product Development
            </h5>
            <p className="md:text-lg text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem, consequuntur ab architecto labore sequi enim omnis
              iste at quo itaque.
            </p>
          </div>
          <div className="space-y-5">
            <div className="overflow-hidden">
              <img
                src="https://framerusercontent.com/images/GfXw1hONniSNADZ4LS14qrow.jpg"
                alt="some"
                className="w-full h-[50vh] hover:scale-125 transition-all duration-500"
              />
            </div>
            <h5 className="md:text-3xl text-2xl font-semibold">
              Saas Product Development
            </h5>
            <p className="md:text-lg text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem, consequuntur ab architecto labore sequi enim omnis
              iste at quo itaque.
            </p>
          </div>
        </div>

        {/* row 2 */}
        <div className="space-y-12 mt-16">
          <div className="space-y-5">
            <div className="overflow-hidden">
              <img
                src="https://framerusercontent.com/images/GfXw1hONniSNADZ4LS14qrow.jpg"
                alt="some"
                className="w-full h-[50vh] hover:scale-125 transition-all duration-500"
              />
            </div>
            <h5 className="md:text-3xl text-2xl font-semibold">
              Saas Product Development
            </h5>
            <p className="md:text-lg text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem, consequuntur ab architecto labore sequi enim omnis
              iste at quo itaque.
            </p>
          </div>
          <div className="space-y-5">
            <div className="overflow-hidden">
              <img
                src="https://framerusercontent.com/images/GfXw1hONniSNADZ4LS14qrow.jpg"
                alt="some"
                className="w-full h-[50vh] hover:scale-125 transition-all duration-500"
              />
            </div>
            <h5 className="md:text-3xl text-2xl font-semibold">
              Saas Product Development
            </h5>
            <p className="md:text-lg text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              vitae. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Exercitationem, consequuntur ab architecto labore sequi enim omnis
              iste at quo itaque.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
