import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "./productCard.css";
import Buttons from "../../reuableComponent/Buttons";
import RatingComponent from "../../reuableComponent/Rating";

const ProductCard = (props) => {
  const btn = "Add to cart";
  const { productItem } = props;

  const navigate = useNavigate();

  const redirectToProductDetails = () => {
    navigate(`/productDetails/${productItem.id}`);
  };
  return (
    <>
      <Card sx={{ maxWidth: 345, margin: "10px" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: "#109f17" }} aria-label="recipe">
              {productItem.id}
            </Avatar>
          }
          title={productItem.title}
          subheader={productItem.brand}
          onClick={() => redirectToProductDetails()}
          className="product-title"
        />
        <Typography
          variant="body2"
          color="text.secondary"
          className="product-price"
          sx={{ fontWeight: 700, fontSize: "1.2rem" }}
        >
          {productItem.price.toLocaleString("en-US", {
            style: "currency",
            currency: "USD",
          })}
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={productItem.images[0]}
          alt=""
        />
        <CardContent
          style={{
            height: "150px",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {productItem.description}
          </Typography>
        </CardContent>
        <div className="rating">
          <RatingComponent value={productItem.rating} />
        </div>
        <div className="btn">
          <Buttons btn={btn} />
        </div>
        <div>
          {productItem.stock > 0 ? (
            <span className="in-stock stock">In Stock</span>
          ) : (
            <span className="out-of-stock stock">Out of Stock</span>
          )}
        </div>
      </Card>
    </>
  );
};

export default ProductCard;
