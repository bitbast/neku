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
                <th className="hideCol">Apodo</th>
                <th>Puntos</th>
                <th className="hideCol">Ranking</th>
                <th className="hideCol">G/P</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">México</th>
                <td>Luis Perez</td>
                <td className="hideCol">gameProPlayer</td>
                <td>10,000 pts</td>
                <td className="hideCol">1</td>
                <td className="hideCol">3/5</td>
              </tr>
              <tr>
                <th scope="row">México</th>
                <td>Luis Perez</td>
                <td className="hideCol">gameProPlayer</td>
                <td>10,000 pts</td>
                <td className="hideCol">2</td>
                <td className="hideCol">4/9</td>
              </tr>
              <tr>
                <th scope="row">México</th>
                <td>Luis Perez</td>
                <td className="hideCol">gameProPlayer</td>
                <td>10,000 pts</td>
                <td className="hideCol">3</td>
                <td className="hideCol">15/54</td>
              </tr>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
}

export default TableResults;