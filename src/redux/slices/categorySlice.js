import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  categories: [],
};

export const fetchCategories = createAsyncThunk(
  "fetch/categories",
  async (_, thunkAPI) => {
    try {
      const categories = await fetch("http://localhost:4000/category");
      return categories.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
    });
  },
});

export default categoriesSlice.reducer;
