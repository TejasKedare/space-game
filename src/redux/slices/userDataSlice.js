import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Optional: define a clear interface for your user state
interface UserState {
  name: string;
  email: string;
  isLoggedIn: boolean;
}

// Provide a strongly-typed initial state
const initialState: UserState = {
  name: '',
  email: '',
  isLoggedIn: false,
};

const userDataSlice = createSlice({
  name: 'userData',
  initialState,
  reducers: {
    // Provide a typed payload for clarity
    setUserData: (state, action: PayloadAction<{ name: string; email: string }>) => {
      // If you want extra checks: e.g. ensure email is not blank
      if (!action.payload.email) {
        console.warn('Attempting to set empty email in userData');
      }
      state.name = action.payload.name;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
    // Clears user data
    clearUserData: (state) => {
      state.name = '';
      state.email = '';
      state.isLoggedIn = false;
    },
  },
});

// Export the reducer actions for easy usage in components
export const { setUserData, clearUserData } = userDataSlice.actions;

// Export the reducer to register in your store
export default userDataSlice.reducer;
