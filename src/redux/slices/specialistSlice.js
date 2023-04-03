import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  specialists: [],
};

export const fetchSpecialists = createAsyncThunk(
  "fetch/specialists",
  async (_, thunkAPI) => {
    try {
      const specialists = await fetch("http://localhost:4000/doctors");
      return specialists.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const specialistsSlice = createSlice({
  name: "specialists",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSpecialists.fulfilled, (state, action) => {
      state.specialists = action.payload;
    });
  },
});

export default specialistsSlice.reducer;
