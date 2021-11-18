import {
    requestCovidData,
    requestCovidDataSucess,
    errorRequestingCovidData,
  } from '../../redux/worldData/world.actions';

  describe('Redux actions to get data, and update the redux store', () => {
    const responseObject = requestCovidData();
    const error = 'Network error happened while making the request';
    const data = {
      All: {
        abbreviation: 'DZ',
        capital_city: 'Alger',
        confirmed: 200528,
        continent: 'Africa',
        country: 'Algeria',
        deaths: 5614,
        elevation_in_meters: 800,
        iso: 12,
        lat: '28.0339',
        life_expectancy: '69.7',
        location: 'Northern Africa',
        long: '1.6596',
        population: 41318142,
        recovered: 0,
        sq_km_area: 2381741,
        updated: '2021/09/15 14:21:30+00',
      },

    };

    test('Returns an object with a type property set to reflect data requests', () => {
      expect(responseObject).toEqual({ type: 'REQUEST_COVID_DATA' });
    });

    test('Returns an object with a type property set to reflect success request and the payload', () => {
      expect(requestCovidDataSucess(data)).toEqual({
        type: 'REQUEST_COVID_DATA_SUCCESS',
        payload: data,
      });
    });

    test('Returns an object with a type and error payload', () => {
      expect(errorRequestingCovidData(error)).toEqual({
        type: 'ERROR_REQUESTING_COVID_DATA',
        payload: error,
      });
    });
  });
