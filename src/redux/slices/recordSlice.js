import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
};

export const fetchRecords = createAsyncThunk(
  "fetch/records",
  async (_, thunkAPI) => {
    try {
      const allRecords = await fetch("http://localhost:4000/records");
      return allRecords.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const recordToSpecialist = createAsyncThunk(
  "record/records",
  async ({ date, usluga, user, doctor }, thunkAPI) => {
    try {
      const record = await fetch("http://localhost:4000/record/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date,
          usluga,
          user,
          doctor,
        }),
      });
      return record.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const recordSlice = createSlice({
  name: "records",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRecords.fulfilled, (state, action) => {
        state.records = action.payload;
      })
      .addCase(recordToSpecialist.fulfilled, (state, action) => {
        state.records.push(action.payload);
      });
  },
});

export default recordSlice.reducer;
