const BASE_URL = 'https://covid-api.mmediagroup.fr/v1/cases?';

export const getContinent = (continent) => `${BASE_URL}continent=${continent}`;

export const getCountry = (country) => `${BASE_URL}country=${country}`;
