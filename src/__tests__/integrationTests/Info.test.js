import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import store from '../../redux/configureStore';
import Details from '../../components/Info';

describe('Homepage', () => {
  it('Renders the Homepage successfully', () => {
    render(
      <Provider store={store}>
        <Details />
      </Provider>,
    );
  });
});
