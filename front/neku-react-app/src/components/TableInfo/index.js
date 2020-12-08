import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Table } from 'reactstrap';

// ------------- CSS ------------- //
import './TableInfo.css'

const TableInfo = (props) => {
  return (
    <Table borderless table-condensed table-responsive>
      <thead className="tableHead">
        <tr>
          <th>Juego</th>
          <th>Ranking</th>
          <th>Puntuación</th>
          <th className="hideCol">Tiempo de juego</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>League Of Legends</td>
          <td>1</td>
          <td>16,345 pts</td>
          <td className="hideCol">2,000 hrs</td>
        </tr>
        <tr>
          <td>Among Us</td>
          <td>324</td>
          <td>14,369 pts</td>
          <td className="hideCol">300 hrs</td>
        </tr>
        <tr>
          <td>Overwatch</td>
          <td>15</td>
          <td>14,123 pts</td>
          <td className="hideCol">647 hrs</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableInfo;