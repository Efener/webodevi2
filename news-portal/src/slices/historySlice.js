import { createSlice } from '@reduxjs/toolkit';

const historySlice = createSlice({
  name: 'history',
  initialState: [],
  reducers: {
    addToHistory: (state, action) => {
      // Aynı rota tekrar eklenmesin
      const exists = state.find(item => item.path === action.payload.path);
      if (!exists) {
        state.unshift(action.payload); // başa ekle
        if (state.length > 10) state.pop(); // maksimum 10 eleman
      }
    }
  }
});

export const { addToHistory } = historySlice.actions;
export default historySlice.reducer;
