import React from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody
} from 'reactstrap';

// ------------- CSS ------------- //
import './RankDeck.css'

// ------------- SMALLER COMPONENTS ------------- //
import TableInfo from '../TableInfo'


const RankDeck = (props) => {
  return (
    <CardDeck>
      <Card className="rankerCards">
        <CardImg top src="https://a.espncdn.com/combiner/i?img=/i/headshots/nhl/players/full/2976853.png" alt="Card image cap" />
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h5">Ranker Name</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">nickname</CardSubtitle>
            </div>
            <p className="countryFlag">🇲🇽</p>
          </div>
          <TableInfo />
          <div className="d-flex justify-content-center align-items-center pb-3">
            <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
          </div>
        </CardBody>
      </Card>
      <Card className="rankerCards">
        <CardImg top src="https://a.espncdn.com/i/headshots/college-football/players/full/4565313.png" alt="Card image cap" />
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h5">Ranker Name</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">nickname</CardSubtitle>
            </div>
            <p className="countryFlag">🇲🇽</p>
          </div>
          <TableInfo />
          <div className="d-flex justify-content-center align-items-center pb-3">
            <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
          </div>
        </CardBody>
      </Card>
      <Card className="rankerCards">
        <CardImg top src="https://a.espncdn.com/i/headshots/nhl/players/full/3941970.png" alt="Card image cap" />
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h5">Ranker Name</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">nickname</CardSubtitle>
            </div>
            <p className="countryFlag">🇲🇽</p>
          </div>
          <TableInfo />
          <div className="d-flex justify-content-center align-items-center pb-3">
            <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
          </div>
        </CardBody>
      </Card>
      <Card className="rankerCards">
        <CardImg top src="https://a.espncdn.com/i/headshots/nhl/players/full/3114770.png" alt="Card image cap" />
        <CardBody>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <CardTitle tag="h5">Ranker Name</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">nickname</CardSubtitle>
            </div>
            <p className="countryFlag">🇲🇽</p>
          </div>
          <TableInfo />
          <div className="d-flex justify-content-center align-items-center pb-3">
            <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
          </div>
        </CardBody>
      </Card>
    </CardDeck>
  );
};

export default RankDeck;