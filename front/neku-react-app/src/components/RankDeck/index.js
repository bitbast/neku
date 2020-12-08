import React from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Container, Row, Col, Card, Button, CardImg, CardTitle, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

// ------------- CSS ------------- //
import './RankDeck.css'

// ------------- SMALLER COMPONENTS ------------- //
import TableInfo from '../TableInfo'


const RankDeck = (props) => {
  return (
  <Container fluid id="rankersSection">
    <Row>
      <Col className="heading">
        <h1>RANKERS</h1>
        <h4>El TOP de la comunidad</h4>
      </Col>
    </Row>
    <Row>
      <CardDeck>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="rankerCards m-2"  xs={12} sm={6} md={6} lg={3}>
            <CardImg top src="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2976853.png" alt="Card image cap" />
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">Ranker Name:</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Enrique Suelas</CardSubtitle> 
                </div>
                <p className="countryFlag">ARG</p>
              </div>
              <TableInfo />
              <div className="d-flex justify-content-center align-items-center pb-3">
                <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="rankerCards m-2" xs={12} sm={6} md={6} lg={3}>
            <CardImg top src="https://a.espncdn.com/i/headshots/college-football/players/full/4565313.png" alt="Card image cap" />
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">Ranker Name:</CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Carlos Silva</CardSubtitle> 
                </div>
                <p className="countryFlag">MEX</p>
              </div>
              <TableInfo />
              <div className="d-flex justify-content-center align-items-center pb-3">
                <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="rankerCards m-2" xs={12} sm={6} md={6} lg={3}>
            <CardImg top src="https://a.espncdn.com/i/headshots/nhl/players/full/3941970.png" alt="Card image cap" />
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
                <div>
                  <CardTitle tag="h5">Ranker Name: </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Lucho Gomez</CardSubtitle> 
                </div>
                <p className="countryFlag">MEX</p>
              </div>
              <TableInfo />
              <div className="d-flex justify-content-center align-items-center pb-3">
                <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col xs={12} sm={6} md={6} lg={3}>
          <Card className="rankerCards m-2" xs={12} sm={6} md={6} lg={3}>
            <CardImg top src="https://a.espncdn.com/i/headshots/nhl/players/full/3114770.png" alt="Card image cap" />
            <CardBody>
              <div className="d-flex justify-content-between align-items-center">
              <div>
                  <CardTitle tag="h5">Ranker Name: </CardTitle>
                  <CardSubtitle tag="h6" className="mb-2 text-muted">Luis Bastida</CardSubtitle> 
                </div>
                <p className="countryFlag">URU</p>
              </div>
              <TableInfo />
              <div className="d-flex justify-content-center align-items-center pb-3">
                <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
              </div>
            </CardBody>
          </Card>
        </Col>
      </CardDeck>
    </Row>
  </Container>
  );
};

export default RankDeck;