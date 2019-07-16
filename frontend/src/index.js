import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import configureStore from './store/store';

// testing
import { fetchDrinksByIngredient, fetchAllIngredients } from './actions/ingredients_actions';
import { fetchAllDrinks, fetchSingleDrink } from './actions/drinks_actions';

const store = configureStore();

//testing
window.getState = store.getState;
window.dispatch = store.dispatch;
window.fetchDrinksByIngredient = fetchDrinksByIngredient;
window.fetchAllIngredients = fetchAllIngredients;
window.fetchAllDrinks = fetchAllDrinks;
window.fetchSingleDrink = fetchSingleDrink;

ReactDOM.render(<App />, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
