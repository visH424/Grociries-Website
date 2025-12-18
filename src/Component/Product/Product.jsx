import React, { useState } from "react";
import Heading from "../Heading/Heading";
import Caterory from "../Category/Caterory";
import Cards from "../Cards/Cards";
import Button from "../Button/Button";
import { Link } from "react-router-dom";

const Product = () => {
  const categroies = ["All", "Fruits", "Vegetable", "Dairy", "Seafood"];

  const [active, Setactve] = useState("All");

  let filterItem =
    active === "All"
      ? productList
      : productList.filter((item) => item.category === active);

  const renderCrads = filterItem.slice(0, 8).map((product) => {
    return (
      <Cards image={product.image} name={product.name} price={product.price} />
    );
  });

  return (
    <section>
      <div className="max-w-[1400px] mx-auto px-10 py-20 ">
        <Heading highlight="Our" heading="Products" />
        <div className="flex flex-wrap gap-3 justify-center mt-10 ">
          {categroies.map((categpry) => {
            return (
              <button
                key={categpry}
                className={` px-5 py-2 text-lg  rounded-xl  ${
                  active === categpry
                    ? "bg-orange-500 text-white"
                    : "bg-zinc-100"
                }`}
                onClick={() => Setactve(categpry)}
              >
                {categpry}
              </button>
            );
          })}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {renderCrads}
        </div>

        <div className="mt-15 mx-auto w-fit ">
          <Link
            to="/allproducts"
            className="bg-orange-500 text-white rounded-lg md:text-lg text-sm hover:scale-105 hover:bg-amber-600 transition-all duration-300
                     cursor-pointer px-6 py-2 "
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Product;

export const productList = [
  {
    id: 1,
    name: "Pineapple",
    price: 3.0,
    category: "Fruits",
    image: "pineapple.png",
  },
  {
    id: 2,
    name: "kiwi",
    price: 59.0,
    category: "Fruits",
    image: "kiwi.png",
  },
  {
    id: 3,
    name: "grapes",
    price: 76.0,
    category: "Fruits",
    image: "grapes.png",
  },
  {
    id: 4,
    name: "strawberry",
    price: 8.0,
    category: "Fruits",
    image: "strawberry.png",
  },
  {
    id: 5,
    name: "banana",
    price: 90.0,
    category: "Fruits",
    image: "banana.png",
  },
  {
    id: 6,
    name: "milk",
    price: 9.0,
    category: "Dairy",
    image: "milk.png",
  },
  {
    id: 7,
    name: "eggs",
    price: 9.0,
    category: "Dairy",
    image: "eggs.png",
  },
  {
    id: 8,
    name: "tofu",
    price: 9.0,
    category: "Dairy",
    image: "tofu.png",
  },
  {
    id: 9,
    name: "ricotta-cheese",
    price: 9.0,
    category: "Dairy",
    image: "ricotta-cheese.png",
  },
  {
    id: 10,
    name: "slice-cheese",
    price: 9.0,
    category: "Dairy",
    image: "slice-cheese.png",
  },
  {
    id: 11,
    name: "butter",
    price: 9.0,
    category: "Dairy",
    image: "butter.png",
  },
  {
    id: 12,
    name: "cabbage",
    price: 9.0,
    category: "Vegetable",
    image: "cabbage.png",
  },
  {
    id: 13,
    name: "tilapia",
    price: 9.0,
    category: "Seafood",
    image: "tilapia.png",
  },
  {
    id: 14,
    name: "shrimp",
    price: 9.0,
    category: "Seafood",
    image: "shrimp.png",
  },
  {
    id: 15,
    name: "lettuce",
    price: 120.0,
    category: "Vegetable",
    image: "lettuce.png",
  },
  {
    id: 16,
    name: "broccoli",
    price: 320.0,
    category: "Vegetable",
    image: "broccoli.png",
  },
];
