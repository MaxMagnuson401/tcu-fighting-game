import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { defaultState, diceReducer, IDiceState } from './stores/DiceReducer';
import { defaultFighterState, FighterSelectionReducer, IFighterSelectionState } from './stores/FighterSelectionStore';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

const combinedReducers = combineReducers({
  dice: diceReducer, 
  fighter: FighterSelectionReducer
});

export interface IApplicationState {
  dice: IDiceState,
  fighter: IFighterSelectionState,
} 

const combinedDefaultState: IApplicationState = {
  dice: defaultState,
  fighter: defaultFighterState,
}

const store = createStore(combinedReducers, combinedDefaultState, applyMiddleware(thunk));

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
