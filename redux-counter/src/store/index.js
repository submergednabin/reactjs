import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authReducer from './authSlice';


// const store = configureStore(counterSlice.reducer)
const store = configureStore({
  reducer: { counter: counterReducer, auth: authReducer } //combining multiple slices and reducers
});
// export const counterActions = counterSlice.actions;
// export const authActions = authSlice.actions;
// const counterReducer = (state = initialState, action) => {
//   if (action.type === "increment") {
//     return {
//       counter: state.counter + 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "increaseby5") {
//     return {
//       counter: state.counter + action.value,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "decrement") {
//     return {
//       counter: state.counter - 1,
//       showCounter: state.showCounter,
//     };
//   }

//   if (action.type === "toggle") {
//     return {
//       showCounter: !state.showCounter,
//       counter: state.counter,
//     };
//   }

//   if (action.type === "reset") {
//     return {
//       showCounter: state.showCounter,
//       counter: 0,
//     };
//   }

//   //   if(action.type === "")
//   return state;
// };

// const store = createStore(counterReducer);

export default store;
