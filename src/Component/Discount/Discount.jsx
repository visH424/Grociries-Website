import React from "react";
import Button from "../Button/Button";

const Discount = () => {
  return (
    <section
      className="bg-zinc-100 bg-no-repeat bg-right bg-contain"
      style={{ backgroundImage: `url(${"fresh-fruits.png"})` }}
    >
      <div className=" md:bg-transparent bg-zinc-100 flex md:flex-row flex-col max-w-[1400px] mx-auto px-10  py-10">
        <span className="md:text-9xl text-5xl text-orange-500 font-bold transform md:-rotate-90 h-fit md:self-center">
          20%
        </span>
        <div className="max-w-[600px] ">
          <h3 className="md:text-7xl  text-4xl text-zinc-800 font-bold ">
            First order Discount
          </h3>
          <p className="text-zinc-600 my-6 ">
            Enkoy an executive first order discount on our grocery website !
            shop fresh esentials and save big on your first purchase fast
            delivery
          </p>
          <Button content="Get A discount" />
        </div>
      </div>
    </section>
  );
};

export default Discount;
