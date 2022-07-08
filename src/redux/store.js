import { configureStore } from '@reduxjs/toolkit';
import userReducer from './users';

const store = configureStore({
  reducer: {
    userReducer,
  },
});

export default store;
