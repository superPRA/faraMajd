import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

type popup =
  | "APR1"
  | "APR2"
  | "APR3"
  | "APR4"
  | "SAPR1"
  | "SAPR2"
  | "SAPR3"
  | "SAPR4"
  | null;
// Define a type for the slice state
interface CounterState {
  popup: popup;
  timeLeft: number;
  deadline: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  popup: null,
  timeLeft: 0,
  deadline: 3 * 60 * 1000,
};

export const counterSlice = createSlice({
  name: "UI",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    changePopUp: (state, action: PayloadAction<popup>) => {
      state.popup = action.payload;
      // console.log(state.popup);
    },
    setTimer: (state, action: PayloadAction<number>) => {
      state.timeLeft = action.payload;
      console.log(state.timeLeft);
    },
  },
});

export const { changePopUp, setTimer } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.UI;

export default counterSlice.reducer;
