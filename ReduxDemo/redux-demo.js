const redux = require("redux");

//Redux action
const counterReducer = (state = {counter: 0}, action) => {
    if (action.type === 'increment') {
        
        return {
          counter: state.counter + 1,
        };
    }

    if(action.type === 'decrement'){
        return {
            counter: state.counter - 1
        };
    }
    return state;
};

// Redux store
const store = redux.createStore(counterReducer);

//Redux subscription
const counterSubscriber = () => {
    const latestState = store.getState();
    console.log(latestState)
};

store.subscribe(counterSubscriber);

store.dispatch({ type: 'increment' });
store.dispatch({type :'decrement'})
store.dispatch({type:''});
