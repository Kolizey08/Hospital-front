import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./slices/serviceSlice";
import categorySlice from "./slices/categorySlice";
import specialistSlice from "./slices/specialistSlice";
import userSlice from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    service: serviceSlice,
    category: categorySlice,
    specialist: specialistSlice,
    user: userSlice
  },
});
