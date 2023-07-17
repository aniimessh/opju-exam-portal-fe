const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  token: "",
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
        state.token = action.payload.token,
        state.role = action.payload.role
        window.localStorage.setItem("token", state.token);
        window.localStorage.setItem("role", state.role);
    },
    logout: (state) => {
        state.token = "",
        state.role = "",
        window.localStorage.removeItem("token");
        window.localStorage.removeItem("role");
    },
  },
});

export const {login, logout}= authSlice.actions;
export default authSlice.reducer;
