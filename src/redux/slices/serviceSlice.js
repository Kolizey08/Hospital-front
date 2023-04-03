import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"

const initialState = {
    service: []
}

export const fetchService = createAsyncThunk(
    'fetch/service',
  async (_, thunkAPI) => {
    try {
        const service = await fetch('http://localhost:4000/usluga')
        return service.json()
    } catch (error) {
        return thunkAPI.rejectWithValue(error)
    }
  }
    
)

export const servicegaSlice = createSlice({
    name: 'service',
    initialState,
    reducers: {},
    extraReducers: (biulder) => {
        biulder
        .addCase(fetchService.fulfilled, (state, action) => {
            state.service = action.payload
        })
    }
})

export default servicegaSlice.reducer