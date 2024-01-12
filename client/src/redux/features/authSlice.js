// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   loading: false,
//   user: null,
//   token: null,
//   error: null,
// };

// const authSlice = createSlice({
//   name: "auth",
//   initialState: initialState,
//   reducers: {},
//   extraReducers: {},
// });

// export default authSlice;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  user: null,
  token: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    // // Action to set user data when authentication is successful
    // setUser: (state, action) => {
    //   state.user = action.payload;
    // },
    // // Action to set the authentication token
    // setToken: (state, action) => {
    //   state.token = action.payload;
    // },
    // // Action to set loading state during async operations
    // setLoading: (state, action) => {
    //   state.loading = action.payload;
    // },
    // // Action to set an error message
    // setError: (state, action) => {
    //   state.error = action.payload;
    // },
  },
  //   // extraReducers can be used to handle actions from other slices or async actions
  //   extraReducers: (builder) => {
  //     // Add extra reducers here if needed
  //   },
});

// export const { setUser, setToken, setLoading, setError } = authSlice.actions;

export default authSlice.reducer;
