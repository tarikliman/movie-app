import { createSlice, configureStore } from '@reduxjs/toolkit';

const initialState = { theme: 'dark' };

const switchTheme = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme(state) {
      state.theme === 'dark' ?  state.theme = 'light' : state.theme = 'dark';
    }
  }
});

const store = configureStore({
  reducer: switchTheme.reducer
});

export const switchActions = switchTheme.actions;

export default store;