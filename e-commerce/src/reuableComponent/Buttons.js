import React from "react";
import "./Button.css";

const Buttons = (props) => {
  const { btn } = props;
  return <button className="product-details-btn">{btn}</button>;
};
export default Buttons;
