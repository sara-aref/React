import React, { useEffect } from "react";
import Buttons from "../../reuableComponent/Buttons";
import RatingComponent from "../../reuableComponent/Rating";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../store/slices/products";

import "./ProductDetails.css";

const ProductDetails = () => {
  const btn = "Add to cart";
  const { productsList, isLoading } = useSelector((state) => state.products);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduct(id));
  }, [dispatch, id]);
  console.log(productsList);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (!productsList) {
    return null;
  }

  return (
    <div className="product-details-container">
      <div className="images-container">
        <div className="big-image">
          {productsList.images && (
            <img src={productsList.images[0]} alt={`Product`} />
          )}
        </div>
        <div className="small-images">
          {productsList.images &&
            productsList.images
              .slice(1)
              .map((image, index) => (
                <img key={index} src={image} alt={`Product ${index + 2}`} />
              ))}
        </div>
      </div>
      <div className="product-info">
        <p className="product-details-title">{productsList.title}</p>
        <p>{productsList.description}</p>
        <div>
          <RatingComponent value={productsList.rating} />
        </div>
        <div>
          {productsList.discountPercentage > 0 ? (
            <>
              <span>Price: </span>
              <span className="product-details-price original-price">
                {`$${productsList.price.toFixed(2)}`}
              </span>
              <span className="product-details-price">
                {`$${(
                  productsList.price -
                  productsList.price * (productsList.discountPercentage / 100)
                ).toFixed(2)}`}
              </span>
            </>
          ) : (
            <span className="product-details-price">
              {productsList.price && `$${productsList.price.toFixed(2)}`}
            </span>
          )}
        </div>
        <p>
          {productsList.stock > 0 ? (
            <span className="in-stock product-details-stock">In Stock</span>
          ) : (
            <span className="out-of-stock product-details-stock">
              Out of Stock
            </span>
          )}
        </p>
        <div className="additional-info">
          <span className="product-details-information brand">
            {productsList.brand}
          </span>
          <span className="product-details-information">
            {productsList.category}
          </span>
        </div>
        <Buttons btn={btn} />
      </div>
    </div>
  );
};

export default ProductDetails;
