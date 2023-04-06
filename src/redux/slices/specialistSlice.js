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

export const recordToSpecialist = createAsyncThunk(
  "record/specialist",
  async ({ date, usluga, user, id }, thunkAPI) => {
    try {
      const record = await fetch(`http://localhost:4000/doctor/record/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          usluga,
          user,
        }),
      });
      return record.json();
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
    builder
      .addCase(fetchSpecialists.fulfilled, (state, action) => {
        state.specialists = action.payload;
      })
      .addCase(recordToSpecialist.fulfilled, (state, action) => {
        state.specialists = state.specialists.map((specialist) => {
          if (specialist._id === action.payload._id) {
            specialist = action.payload
          }
          return specialist
        });
      });
  },
});

export default specialistsSlice.reducer;
