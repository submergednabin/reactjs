import { createStore } from "redux";
import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice =  createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment(state) {
        state.counter++;
    
    },
    decrement(state) {
        state.counter--;
    },
    increaseby5(state, action) {
        state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
        state.showCounter = !state.showCounter
    },
  }, //reducers is an object of this slice
});


// const store = configureStore(counterSlice.reducer)
const store = configureStore({
    reducer: counterSlice.reducer
})
export const counterActions = counterSlice.actions;

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
