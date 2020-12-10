import React, { useState, useEffect, Fragment } from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col, Table } from 'reactstrap';

// ------------- CSS ------------- //
import './TableResults.css'


const tournamentTest = [];

const TableResults = (props) => {

  const [gamer, setGamer] = useState(tournamentTest);

  useEffect(() => {
    obtainData()
  },[])

  const obtainData = async () => {
    const data = await fetch("http://localhost:8080/tournament/")
    const tourCollection = await data.json()
    console.log(tourCollection)
    setGamer(tourCollection.data.-----)
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
                    {
                      gamer.map((item) => {
                        <th key={item.gamer} scope="row">{item.country}</th>
                        <td>{item.name}</td>
                        <td className="hideCol">{gamer.nickName}</td>
                        <td>{gamer.score}</td>
                      })
                    }
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
  );
}

export default TableResults;