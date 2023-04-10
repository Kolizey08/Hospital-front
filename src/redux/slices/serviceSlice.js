import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  service: [],
  serviceById: null,
  serviceMessage: null,
  serviceChoiceOpen: false,
};

export const fetchService = createAsyncThunk(
  "fetch/service",
  async (_, thunkAPI) => {
    try {
      const service = await fetch("http://localhost:4000/usluga");
      return service.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getServiceById = createAsyncThunk(
  "getById/service",
  async (id, thunkAPI) => {
    try {
      const serviceById = await fetch(`http://localhost:4000/usluga/${id}`);
      return serviceById.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const setOpenSeviceMessage = createAsyncThunk(
  "openMessage/service",
  async (bool, thunkAPI) => {
    return bool;
  }
);

export const setOpentChoiceForm = createAsyncThunk(
  "openChoice/service",
  async (bool, thunkAPI) => {
    return bool;
  }
);

export const servicegaSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (biulder) => {
    biulder
      .addCase(fetchService.fulfilled, (state, action) => {
        state.service = action.payload;
      })
      .addCase(getServiceById.fulfilled, (state, action) => {
        state.serviceById = action.payload;
      })
      .addCase(setOpenSeviceMessage.fulfilled, (state, action) => {
        state.serviceMessage = action.payload;
      })
      .addCase(setOpentChoiceForm.fulfilled, (state, action) => {
        state.serviceChoiceOpen = action.payload;
      });
  },
});

export default servicegaSlice.reducer;
