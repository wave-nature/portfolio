"use client";

const Service = ({ heading, icon }) => {
  return (
    <div className="space-y-5 w-10/12">
      {icon}
      <h5 className="md:text-3xl text-2xl font-semibold">{heading}</h5>
      {/* <p className="md:text-lg text-slate-600">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque,
              vitae.
            </p> */}
    </div>
  );
};

export default Service;
