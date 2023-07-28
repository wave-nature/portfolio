"use client";

const Service = ({ heading, icon }: { heading: string; icon: any }) => {
  return (
    <div className="space-y-5 w-10/12">
      {icon}
      <h5 className="md:text-2xl text-xl text-slate-700 font-semibold">
        {heading}
      </h5>
      {/* <p className="md:text-lg text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              vitae.
            </p> */}
    </div>
  );
};

export default Service;
