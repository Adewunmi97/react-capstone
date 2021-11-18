import React from 'react';
import { useSelector } from 'react-redux';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Container,
} from 'react-bootstrap';

function Info() {
  const countryCovidData = useSelector(({ country }) => country.covidData);

  return (
    <Container>
      <div className="details_page">
        <div className="inside">
          {
        countryCovidData.length > 0 ? countryCovidData.map(({
          confirmed, deaths, country, capitalCity, abbreviation,
        }) => (
          <div className="country" key={abbreviation}>

            <div>
              <h4>
                { country }
              </h4>
            </div>
            <div>
              <h5 className="cases">
                Confirmed Cases: &nbsp;
                { confirmed }
              </h5>
            </div>
            <div>
              <h5>
                Deaths: &nbsp;
                { deaths }
              </h5>
              <h5>
                Capital: &nbsp;
                { capitalCity }
              </h5>
            </div>

          </div>
        )) : (
          <p>No data to display...</p>
        )
      }
        </div>
        <div>
          <p><FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
        </div>
      </div>
    </Container>

  );
}

export default Info;
