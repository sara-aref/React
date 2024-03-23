import { configureStore } from "@reduxjs/toolkit";
import userInfo from "./slices/contacts";
import products from "./slices/products";

export default configureStore({
  reducer: {
    userInfo,
    products,
  },
});
