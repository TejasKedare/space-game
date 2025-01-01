import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  email: '',
  isLoggedIn: false,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    clearUserData: (state) => {
      state.name = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

export const { setUserData, clearUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
