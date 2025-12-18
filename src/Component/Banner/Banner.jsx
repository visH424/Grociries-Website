import React from "react";

const Banner = ({ title, img }) => {
  return (
    <div
      className=" h-[50vh] mt-5 flex justify-center items-center bg-center bg-cover relative"
      style={{ backgroundImage: `url(${img})` }}
    >
      <h2 className="text-5xl text-zinc-800 bg-white p-5 rounded-xl font-bold z-10 ">
        {title}
      </h2>
      <div className="bg-black/15  absolute inset-0"></div>
    </div>
  );
};

export default Banner;
