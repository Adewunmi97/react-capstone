import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import covidReducer from './worldData/world.reducer';
import countryCovidDataReducer from './countryData/country.reducer';

const rootReducer = combineReducers({
  continent: covidReducer,
  country: countryCovidDataReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
