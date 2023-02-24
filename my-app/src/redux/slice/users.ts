import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import type { RootState } from "../../redux/store";

// Define a type for the slice state
interface CounterState {
  adminUsers: {
    username: string;
    password: string;
  }[];
  subUsers: {
    username: string;
    password: string;
  }[];
  activeUser: string | null;
  lastLogin: {
    username: string;
    IP: string;
    date: string;
    time: string;
    status: "failed" | "OK"
  } | null;
}

// Define the initial state using that type
const initialState: CounterState = {
  adminUsers: [{ password: "admin", username: "admin" }],
  subUsers: [{ password: "sub", username: "sub" }],
  activeUser: null,
  lastLogin: null,
};

export const counterSlice = createSlice({
  name: "user",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setActiveUser: (state, action: PayloadAction<null | string>) => {
      state.activeUser = action.payload;
    },
    changePasswordAPR: (state, action: PayloadAction<string>) => {
      state.adminUsers[0].password = action.payload;
    },
    changePasswordSAPR: (state, action: PayloadAction<string>) => {
      state.adminUsers[0].password = action.payload;
    },
    setLastLogin: (
      state,
      action: PayloadAction<{
        username: string;
        IP: string;
        date: string;
        time: string;
        status: "failed" | "OK"
      } | null>
    ) => {
      state.lastLogin = action.payload
    },
  },
});

export const { setActiveUser, changePasswordAPR,changePasswordSAPR,setLastLogin } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.user;

export default counterSlice.reducer;
