import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { login, registration } from "../services/api.jsx";


// ======================================
// REGISTER USER
// ======================================

export const registerUser = createAsyncThunk(
  "auth/registerUser",

  async (data, { rejectWithValue }) => {
    try {
      const response = await registration(data);

      return response.data;
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Registration failed"
      );
    }
  }
);


// ======================================
// LOGIN USER
// ======================================
export const loginUser = createAsyncThunk(
  "auth/loginUser",

  async (data, { rejectWithValue }) => {
    try {
      const response = await login(data);

      const { token, user, message } = response.data;

      // JWT token browser mein save
      localStorage.setItem("token", token);

      return {
        token,
        user,
        message,
      };

    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || "Login failed"
      );
    }
  }
);


// ======================================
// INITIAL STATE
// ======================================

const initialState = {
  user: null,

  token: localStorage.getItem("token") || null,

  isAuthenticated: !!localStorage.getItem("token"),

  loading: false,

  error: null,

  registerSuccess: false,
};


// ======================================
// AUTH SLICE
// ======================================

const authSlice = createSlice({
  name: "auth",

  initialState,

  reducers: {

    // ==============================
    // LOGOUT
    // ==============================

    logout: (state) => {
      state.user = null;
      state.token = null;
      state.isAuthenticated = false;
      state.error = null;

      localStorage.removeItem("token");
    },


    // ==============================
    // CLEAR ERROR
    // ==============================

    clearError: (state) => {
      state.error = null;
    },


    // ==============================
    // CLEAR REGISTER SUCCESS
    // ==============================

    clearRegisterSuccess: (state) => {
      state.registerSuccess = false;
    },
  },


  // ======================================
  // ASYNC THUNK STATES
  // ======================================

  extraReducers: (builder) => {

    // ==================================
    // REGISTER
    // ==================================

    builder

      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.registerSuccess = false;
      })

      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
        state.registerSuccess = true;
        state.error = null;
      })

      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.registerSuccess = false;
      });


    // ==================================
    // LOGIN
    // ==================================

    builder

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;

        state.user = action.payload.user;

        state.token = action.payload.token;

        state.isAuthenticated = true;

        state.error = null;
      })

      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;

        state.error = action.payload;

        state.isAuthenticated = false;
      });
  },
});


// ======================================
// ACTIONS
// ======================================

export const {
  logout,
  clearError,
  clearRegisterSuccess,
} = authSlice.actions;


// ======================================
// REDUCER
// ======================================

export default authSlice.reducer;