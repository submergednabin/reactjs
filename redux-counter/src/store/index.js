import { createStore } from "redux";

const initialState = {counter: 0, showCounter: true}

const counterReducer = (state = initialState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    };
  }

  if (action.type=== "increaseby5"){
    return {
        counter: state.counter + action.value,
        showCounter: state.showCounter
    }
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    };
  }

  if(action.type === "toggle"){
      return {
          showCounter: !state.showCounter,
          counter: state.counter
      }
  }

  if(action.type === 'reset'){
      return {
          showCounter: state.showCounter,
          counter: 0
      }
  }

//   if(action.type === "")
  return state;
};

const store = createStore(counterReducer);

export default store;
