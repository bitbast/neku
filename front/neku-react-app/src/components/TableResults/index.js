import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col, Table } from 'reactstrap';

// ------------- CSS ------------- //
import './TableResults.css'

let winLostAvg = {{won-games} / {lost-games}}

const TableResults = (props) => {
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
                <th>Puntos</th>
                <th className="hideCol">Ranking</th>
                <th className="hideCol">G/P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">{country-flag}</th>
                <td>{{name}+{father-lastname}+{mother-lastname}}</td>
                <td className="hideCol">{nickname}</td>
                <td>{score} pts</td>
                <td className="hideCol">{ranking}</td>
                <td className="hideCol">{winLostAvg}</td>
              </tr>
              <tr>
                <th scope="row">{country-flag}</th>
                <td>{{name}+{father-lastname}+{mother-lastname}}</td>
                <td className="hideCol">{nickname}</td>
                <td>{score} pts</td>
                <td className="hideCol">{ranking}</td>
                <td className="hideCol">{winLostAvg}</td>
              </tr>
              <tr>
                <th scope="row">{country-flag}</th>
                <td>{{name}+{father-lastname}+{mother-lastname}}</td>
                <td className="hideCol">{nickname}</td>
                <td>{score} pts</td>
                <td className="hideCol">{ranking}</td>
                <td className="hideCol">{winLostAvg}</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default TableResults;