import React from "react";
import { useLocation } from "react-router-dom";
import { Categories } from "../Categories/Categories";
import { Products } from "../Products/Products";

export const Category = () => {
  const { state } = useLocation();
  const products = state.products;

  return (
    <>
      <Categories />
      <Products productsOfCategory={products}/>
    </>
  );
};