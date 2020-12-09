import React, { useState, useEffect, Fragment } from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col, Table } from 'reactstrap';

// ------------- CSS ------------- //
import './TableResults.css'

const TableResults = (props) => {

  const [gamer, setGamer] = useState({});

  useEffect(() => {
    obtainData()
  },[])

  const obtainData = async () => {
    const data = await fetch("http://localhost:8080/players/")
    const playersCollection = await data.json()
    console.log(playersCollection)
    setGamer(playersCollection.data.player)
  }

  return (
      <Container>
        <Row>
          <Col>
            <Table borderless table-condensed table-responsive>
              <thead>
                <tr>
                  <th>País</th>
                  <th>Nombre</th>
                  <th className="hideCol">Apodo</th>
                  <th>Puntuación</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <Fragment>
                    {
                      <th key={gamer} scope="row">{gamer.country}</th>
                      <td>{gamer.name}</td>
                      <td className="hideCol">{gamer.nickName}</td>
                      <td>{gamer.score}</td>
                    }
                  </Fragment>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
  );
}

export default TableResults;