// import { createStore } from "redux";
import { createSlice, configureStore } from '@reduxjs/toolkit';

import counterSlice from './CounterSlice';
import authSlice from './AuthSlice';
// const counterReducer = (state = initialState , action) => {
//     if(action.type === 'increment'){
//         return{
//             counter: state.counter + 1, 
//             showCounter: state.showCounter
//         }
//     }
//     if(action.type === 'decrement'){
//         return {
//             counter: state.counter - 1,
//             showCounter: state.showCounter
//         }
//     }

//     if(action.type === 'increase'){
//         return {
//             counter: state.counter + action.value,
//             showCounter: state.counter,

//         }
//     }

//     if(action.type === 'toggle'){
//         return {
//             showCounter: !state.showCounter,
//             counter: state.counter
//         }
//     }

//     return state;
// } ;
// const store = createStore(counterReducer);
const store = configureStore({
    reducer: { counter: counterSlice, auth: authSlice },
});


export default store;