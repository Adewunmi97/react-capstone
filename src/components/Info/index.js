import React from 'react';
import { useSelector } from 'react-redux';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Col,
  Container, Row,
} from 'react-bootstrap';
import covid from '../covid.png';

function Info() {
  const countryCovidData = useSelector(({ country }) => country.covidData);
  let countryName = '';
  let confirmedCases = '';
  if (countryCovidData?.length) {
    countryName = countryCovidData[0].country;
    confirmedCases = countryCovidData[0].confirmed;
  }

  return (
    <Container>
      <div className="details_page">
        <Row className="title">
          <Col xs={6}>
            <img src={covid} alt="covid" className="img" />
          </Col>
          <Col xs={6} className="regionName">
            <h1 className="region">{countryName.toUpperCase()}</h1>
            <p className="cases">
              {confirmedCases}
              {' '}
              cases
            </p>
          </Col>
        </Row>
        <div className="inside">
          {
        countryCovidData.length > 0 ? countryCovidData.map(({
          confirmed, deaths, recovered, abbreviation,
        }) => (
          <div className="country" key={abbreviation}>
            <div className="d-flex justify-content-between tab">
              <h5 className="">
                Confirmed Cases: &nbsp;
              </h5>
              <div className="d-flex justify-content-between">
                <p className="me-2">{ confirmed }</p>
                <div>
                  <p><FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
                </div>
              </div>
            </div>
            <div className="tab">
              <h5>
                Deaths: &nbsp;

              </h5>
              <div className="d-flex justify-content-between">
                <p className="me-2">{ deaths }</p>
                <div>
                  <p><FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
                </div>
              </div>
            </div>
            <div className="tab">
              <h5>
                Recovered: &nbsp;

              </h5>
              <div className="d-flex justify-content-between">
                <p className="me-2">{ recovered }</p>
                <div>
                  <p><FontAwesomeIcon icon={faArrowAltCircleRight} /></p>
                </div>
              </div>
            </div>

          </div>
        )) : (
          <p>No data to display...</p>
        )
      }
        </div>
      </div>
    </Container>

  );
}

export default Info;
