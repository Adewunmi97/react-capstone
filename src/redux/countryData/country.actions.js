import axios from 'axios';
import { getCountry } from '../dataApi';
import {
  REQUEST_COUNTRY_COVID_DATA,
  REQUEST_COUNTRY_COVID_DATA_SUCCESS,
  REQUEST_COUNTRY_COVID_DATA_FAILURE,
} from './country.types';

export const requestCountryCovidData = () => ({
  type: REQUEST_COUNTRY_COVID_DATA,
});

export const requestCountryCovidDataSuccess = (payload) => ({
  type: REQUEST_COUNTRY_COVID_DATA_SUCCESS,
  payload,
});

export const requestCountryCovidDataFailure = (error) => ({
  type: REQUEST_COUNTRY_COVID_DATA_FAILURE,
  payload: error,
});

const fetchCountryData = (country) => (dispatch) => {
  dispatch(requestCountryCovidData());

  axios.get(getCountry(country))
    .then((response) => {
      const result = Object.values(response.data);
      dispatch(requestCountryCovidDataSuccess(result));
    }).catch((error) => {
      dispatch(requestCountryCovidDataFailure(error));
    });
};

export default fetchCountryData;
