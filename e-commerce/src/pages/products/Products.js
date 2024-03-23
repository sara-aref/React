// Products.js
import React, { useEffect } from "react";
import "./Products.css";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../store/slices/products";

const Products = () => {
  const { productsList } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  if (!Array.isArray(productsList)) {
    return null;
  }

  return (
    <div className="products-container">
      {productsList.map((product, id) => (
        <div key={id} style={{ position: "relative", marginBottom: "10px" }}>
          <ProductCard productItem={product} />
        </div>
      ))}
    </div>
  );
};

export default Products;
