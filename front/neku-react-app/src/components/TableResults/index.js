import React from 'react';

// ------------- REACTSTRAP ------------- //
import { Table } from 'reactstrap';

// ------------- CSS ------------- //
import './TableResults.css'

const TableResults = (props) => {
  return (
    <Table borderless>
      <thead>
        <tr>
          <th>País</th>
          <th>Nombre</th>
          <th>@</th>
          <th>Puntuación</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">🇲🇽</th>
          <td>Luis Bastida</td>
          <td>bitbast</td>
          <td>16,345 pts</td>
        </tr>
        <tr>
          <th scope="row">🇦🇷</th>
          <td>Lucho Gomez</td>
          <td>gommorin</td>
          <td>14,369 pts</td>
        </tr>
        <tr>
          <th scope="row">🇲🇽</th>
          <td>Charlie Silva</td>
          <td>deMentor</td>
          <td>14,123 pts</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default TableResults;