import { axiosInstance } from "../../apis/config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async () => {
    const res = await axiosInstance.get("products");
    return res.data;
  }
);

export const getProduct = createAsyncThunk(
  "products/getProduct",
  async (id) => {
    const res = await axiosInstance.get(`/products/${id}`);
    console.log(res.data);
    return res.data;
  }
);

const products = createSlice({
  name: "products",
  initialState: { productsList: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllProducts.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getAllProducts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload.products;
      state.pagination = {
        total: action.payload.total,
        skip: action.payload.skip,
        limit: action.payload.limit,
      };
    });
    builder.addCase(getAllProducts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.isLoading = false;
      state.productsList = action.payload;
    });
    builder.addCase(getProduct.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload.message;
    });
  },
});

export default products.reducer;
