import { configureStore } from '@reduxjs/toolkit';
import userReducer from './features/userSlice'; // Example slice

export default configureStore({
  reducer: {
    user: userReducer, // Add more reducers here as you build them
  },
});
