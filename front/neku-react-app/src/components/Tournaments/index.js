import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col } from 'reactstrap';

// ------------- CSS ------------- //
import './Tournaments.css';

// ------------- SMALLER COMPONENTS ------------- //
import Heading from '../Heading';
import TournamentCards from '../TournamentCards';

const Tournaments = (props) => {
  return (
    <Container fluid className="tournaments">
      <Heading />
      <Row>
        <Col>
            <TournamentCards />
        </Col>
      </Row>
    </Container>
  );
}

export default Tournaments;