import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./slices/serviceSlice";
import categorySlice from "./slices/categorySlice";

export const store = configureStore({
  reducer: {
    service: serviceSlice,
    category: categorySlice,
  }
});
