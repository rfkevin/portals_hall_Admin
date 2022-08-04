import  {configureStore}  from '@reduxjs/toolkit';
import { darkModeSlice } from '../theme/slice';
export const store = configureStore({
  reducer: {
    darkMode: darkModeSlice.reducer
  },
});
