import React from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Card, Button, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody, CardHeader, CardFooter
} from 'reactstrap';

// ------------- CSS ------------- //
import './TournamentCards.css'

// ------------- SMALLER COMPONENTS ------------- //
import TableResults from '../TableResults'
import CarouselTour from '../CarouselTour'

const TournamentCards = (props) => {
  return (
    <CardDeck>
      <Card>
        <CardHeader>Torneos En Curso</CardHeader>
        <CardImg top width="100%" src="https://www.dailyesports.gg/wp-content/uploads/2019/07/lol_front-800x400.jpg" alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">League Of Legends</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Ubicación: </CardSubtitle>
          <TableResults />
        </CardBody>
        <Button>DESCUBRE MÁS INFORMACIÓN</Button>
        <CardFooter className="text-muted">Tiempo de juego: </CardFooter>
      </Card>
      <Card id="cardCarousel">
          <CardHeader>Torneos Concluidos</CardHeader>
          <CarouselTour />
          <Button>DESCUBRE MÁS INFORMACIÓN</Button>
        <CardFooter className="text-muted">Tiempo de juego: </CardFooter>
      </Card>
    </CardDeck>
  );
};

export default TournamentCards;