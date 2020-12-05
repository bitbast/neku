import React from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Container, Row, Card, Button, CardImg, CardTitle, CardDeck,
  CardSubtitle, CardBody, CardHeader, CardFooter
} from 'reactstrap';

// ------------- CSS ------------- //
import './TournamentCards.css'

// ------------- SMALLER COMPONENTS ------------- //
import TableResults from '../TableResults'
import CarouselTour from '../CarouselTour'

const TournamentCards = (props) => {
  return (
    <Container>
      <Row>
        <CardDeck id="ongoingTournament">
          <Card className="tourCard">
            <CardHeader>Torneos En Curso</CardHeader>
            <CardImg top src="https://www.dailyesports.gg/wp-content/uploads/2019/07/lol_front-800x400.jpg" alt="Card image cap" />
            <CardBody>
              <CardTitle tag="h5">League Of Legends</CardTitle>
              <CardSubtitle tag="h6" className="mb-2 text-muted">Ubicación: </CardSubtitle>
              <TableResults />
            </CardBody>
              <div className="d-flex justify-content-center align-items-center pb-3">
                <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
              </div>
            <CardFooter className="text-muted">Tiempo de juego: </CardFooter>
          </Card>
          <Card id="cardCarousel">
              <CardHeader>Torneos Concluidos</CardHeader>
              <CarouselTour />
              <div className="d-flex justify-content-center align-items-center pb-3">
                <Button id="moreInfoBtn">DESCUBRE MÁS INFORMACIÓN</Button>
              </div>
            <CardFooter className="text-muted">Tiempo de juego: </CardFooter>
          </Card>
        </CardDeck>
      </Row>
    </Container>
  );
};

export default TournamentCards;