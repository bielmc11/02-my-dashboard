import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
  isReady: boolean;
}

const initialState = {
  value: 0,
  isReady: false,
};
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    initCounterSate : (state, action: PayloadAction<number>) => {
      if(state.isReady) return
      state.value = action.payload
      state.isReady = true 
    },
    increment: (state) => {
      state.value += 1;
    },
    decrement : (state) => {
      if(state.value === 0) return
        state.value -= 1;
    },
    reset : (state) => {
        state.value = 0
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
        state.value += action.payload;
    }
  },
});

export const {increment, decrement, reset, incrementByAmount, initCounterSate } = counterSlice.actions
export default counterSlice.reducer;