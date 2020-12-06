import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col } from 'reactstrap';

// ------------- CSS ------------- //
import './Tournaments.css';

// ------------- SMALLER COMPONENTS ------------- //
import TournamentCards from '../TournamentCards';

const Tournaments = (props) => {
  return (
    <Container fluid className="tournaments">
      <Row>
        <Col className="heading">
          <h1>TORNEOS</h1>
          <h4>Quién se apunta?</h4>
        </Col>
      </Row>
      <Row>
        <Col>
            <TournamentCards />
        </Col>
      </Row>
    </Container>
  );
}

export default Tournaments;