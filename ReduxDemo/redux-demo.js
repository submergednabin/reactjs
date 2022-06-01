const redux = require("redux");

//Redux action
const counterReducer = (state = {counter: 0}, action) => {
  return {
    counter: state.counter + 1,
  };
};

// Redux store
const store = redux.createStore(counterReducer);

//Redux subscription
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(counterSubscriber);
