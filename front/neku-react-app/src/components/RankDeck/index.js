import React, { useState, useEffect } from 'react';

// ------------- REACTSTRAP ------------- //
import {
  Container, Row, Col
} from 'reactstrap';

// ------------- CSS ------------- //
import './RankDeck.css'

// ------------- SMALLER COMPONENTS ------------- //
import RankCard from '../RankCard'


const RankDeck = (props) => {

  const [gamer, setGamer] = useState([]);

  useEffect(() => {
    obtainData()
  },[])

  const obtainData = async () => {
      const data = await fetch("http://localhost:8080/players")
      const gamersCollection = await data.json()
      // console.log(gamersCollection)
      setGamer(gamersCollection.data.team) // de este key es de donde estoy jalando la info del json
      // console.log(gamer)
  }

  return (
  <Container fluid id="rankersSection">
    <Row>
      <Col className="heading">
        <h1>RANKERS</h1>
        <h4>El TOP de la comunidad</h4>
      </Col>
    </Row>
    <Row>
      <Col xs={12} sm={6} md={6} lg={3}>
        <RankCard />
      </Col>
    </Row>
  </Container>
  );
};

export default RankDeck;