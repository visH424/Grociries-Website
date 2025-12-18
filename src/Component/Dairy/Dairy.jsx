import React from "react";
import CategoryPage from "../CategoryPage/CategoryPage";

const Dairy = () => {
  return (
    <div>
      <CategoryPage
        title="Dairy & Eggs"
        img="dairy-banner.jpg"
        categroies={["Dairy"]}
      />
    </div>
  );
};

export default Dairy;
