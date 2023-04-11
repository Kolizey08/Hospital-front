import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  users: [],
  token: localStorage.getItem("token"),
  registeredUser: null,
  loggedUser: null,
};

function parseJwt(token) {
  let base64Url = token.split(".")[1];
  let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  let jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  return JSON.parse(jsonPayload);
}

export const fetchUsers = createAsyncThunk(
  "fetch/users",
  async (_, thunkAPI) => {
    try {
      const users = await fetch("http://localhost:4000/user");
      return users.json();
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const registration = createAsyncThunk(
  "registration/users",
  async (
    { login, phone, password, firstname, lastname, surname, oms },
    thunkAPI
  ) => {
    try {
      const registration = await fetch("http://localhost:4000/registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login,
          phone,
          password,
          firstname,
          lastname,
          surname,
          oms,
        }),
      });
      return registration.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const authorization = createAsyncThunk(
  "authorization/users",
  async ({ login, password }, thunkAPI) => {
    try {
      const authorization = await fetch("http://localhost:4000/authorization", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          login,
          password,
        }),
      });
      const token = await authorization.json();
      if (token.error) {
        return thunkAPI.rejectWithValue(token.error);
      }
      return token;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const logOut = createAsyncThunk("logOut/users", async (_, thunkAPI) => {
  localStorage.removeItem("token");
});

export const getUserById = createAsyncThunk(
  "userById/users",
  async (_, thunkAPI) => {
    try {
      const token = parseJwt(initialState.token);
      const userByid = await fetch(`http://localhost:4000/user/${token.id}`);
      return userByid.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const updateUser = createAsyncThunk(
  "update/user",
  async (
    { id, firstname, lastname, surname, phone, password, oms, login },
    thunkAPI
  ) => {
    try {
      const updatedUser = await fetch(`http://localhost:4000/user/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname,
          lastname,
          surname,
          phone,
          password,
          oms,
          login,
        }),
      });
      return updatedUser.json();
    } catch (err) {
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (biulder) => {
    biulder
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.registeredUser = action.payload;
      })
      .addCase(authorization.fulfilled, (state, action) => {
        localStorage.setItem("token", action.payload);
        state.token = action.payload;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.loggedUser = action.payload;
        state.users = state.users.map((user) => {
          if (user._id === action.payload._id) {
            user = action.payload;
          }
          return user;
        });
      })
      .addCase(logOut.fulfilled, (state) => {
        state.token = null;
      })
      .addCase(getUserById.fulfilled, (state, action) => {
        state.loggedUser = action.payload;
        state.loggedUser.password = parseJwt(state.token).password;
      });
  },
});

export default userSlice.reducer;
