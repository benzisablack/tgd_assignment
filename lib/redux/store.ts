import { configureStore, createSlice } from '@reduxjs/toolkit';
import { IRootState } from './types';

const initialState: IRootState = {
  user: {
    firstName: '',
    lastName: ''
  }
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    }
  }
});

export const { setUser } = userSlice.actions;

const rootReducer = userSlice.reducer;

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
