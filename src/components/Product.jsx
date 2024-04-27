import React, { useEffect } from "react";
import ProductCard from "./ProductCard";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../store/productSlice";
import StatusCode from "../util/StatusCode";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  if (status === StatusCode.LOADING) {
    return <p>Loading...</p>;
  }

  if (status === StatusCode.ERROR) {
    return <p>Something went wrong...</p>;
  }

  return (
    <div className="container">
      <h1 className="py-4">Products</h1>
      <div
        className="d-flex"
        style={{
          flexWrap: "wrap",
          justifyContent: "space-around",
          gap: "1rem",
        }}
      >
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
