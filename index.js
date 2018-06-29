import React from 'react';
import ReactDOM from 'react-dom';

import Counter from './Counter';
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    switch(action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 5
            };
        case 'DECREMENT':
            if(state.count > 0) {
                return {count: state.count -5}
            }
            else{
                return { count: 0}
            };
        default:
            return state;
    }
}

const store = createStore(reducer);

const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

ReactDOM.render(<App />, document.getElementById('root'));
