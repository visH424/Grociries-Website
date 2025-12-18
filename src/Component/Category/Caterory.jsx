import React from "react";
import Heading from "../Heading/Heading";
import Button from '../Button/Button'
import { Link } from "react-router-dom";


const Caterory = () => {
  const redercard = category.map((card) => {
    return (
      <div className="flex-1 basis-[300px]  ">
        <div className="w-full min-h-[30vh] relative -mb-10 ">
          <img src={card.image} className="absolute bottom-0"></img>
        </div>

        <div className="bg-zinc-100 pt-14 p-4">
          <h3 className="text-zinc-800 text-3xl font-bold">{card.title}</h3>
          <p className="text-zinc-600 mt-3 mb-9">{card.description}</p>
          <Link to={card.path} className='bg-orange-500 text-white rounded-lg md:text-lg text-sm hover:scale-105 hover:bg-amber-600 transition-all duration-300
      cursor-pointer px-6 py-2 '>See All</Link> 
        </div>
      </div>
    );
  });

  return (
    <section>
      <div className=" mx-w-[1400px] mx-auto  px-10 py-20">
        <Heading highlight="Shop" heading=" by category" />
        <div className="flex flex-wrap gap-10 md:mt-10  mt-5 ">
            {redercard}
        </div>
      </div>
    </section>
  );
};

export default Caterory;

const category = [
  {
    id: 1,
    title: "fruits & veggies",
    description:
      "Fresh organic produce soucred daily rom local farms, Explore a wide  range of sesonal fruits and crisp vegetables",
    image: "fruits-and-veggies.png",
    path: '/fruits'
  },
  {
    id: 2,
    title: "Dairy and Eggs ",
    description:
      "Wholesome dairy products nad free-range eggs from cremy milk and yogurt to artisanal cheese",
    image: "dairy-and-eggs.png",
    path: "/dairy"
  },
  {
    id: 3,
    title: "Meat & SeaFood",
    description:
      "High-Quality responsibly soucred meat and seafood, choose from fresh cuts, marianted options and more",
    image: "meat-and-seafood.png",
    path: "/seafood"
  },
];
