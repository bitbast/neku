import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Container, Row, Col, Table } from 'reactstrap';

// ------------- CSS ------------- //
import './TableResults.css'

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
                <th className="hideCol">@</th>
                <th>Puntuación</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">🇲🇽</th>
                <td>Luis Bastida</td>
                <td className="hideCol">bitbast</td>
                <td>16,345 pts</td>
              </tr>
              <tr>
                <th scope="row">🇦🇷</th>
                <td>Lucho Gomez</td>
                <td className="hideCol">gommorin</td>
                <td>14,369 pts</td>
              </tr>
              <tr>
                <th scope="row">🇲🇽</th>
                <td>Charlie Silva</td>
                <td className="hideCol">deMentor</td>
                <td>14,123 pts</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default TableResults;