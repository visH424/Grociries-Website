import React from "react";
import Banner from "../Banner/Banner";
import Product from "../Product/Product";
import Cards from "../Cards/Cards";
import { productList } from "../Product/Product";

const CategoryPage = ({ title, img, categroies = [] }) => {
  let filterItem = categroies.includes("All")
    ? productList
    : productList.filter((item) => categroies.includes(item.category));

  const renderProduct = filterItem.map((product) => {
    return (
      <Cards image={product.image} name={product.name} price={product.price} />
    );
  });
  return (
    <div>
      <Banner title={title} img={img} />
      <div className=" grid grid-cols-1 md:grid-cols-4  gap-9 py-20 max-w-[1400px] mx-auto px-10 ">
        {renderProduct}
      </div>
    </div>
  );
};

export default CategoryPage;
