import React, { useState, useEffect, Fragment } from 'react';

// ------------- REACTSTRAP ------------- //
import { Table } from 'reactstrap';

// ------------- CSS ------------- //
import './TableInfo.css'

const TableInfo = (props) => {

  const [gameStats, setGameStats] = useState([]);

  useEffect(() => {
    obtainData()
  },[])

  const obtainData = async () => {
      const data = await fetch("https://nekuapi-sleepy-kudu-wm.mybluemix.net/players")
      const gameStatsCollection = await data.json()
      console.log(gameStatsCollection)
      setGameStats(gameStatsCollection.data.team) // de este key es de donde estoy jalando la info del json
  }

  return (
    <Table borderless table-condensed table-responsive>
      <thead className="tableHead">
        <tr>
          <th>Juego</th>
          <th>Puntos</th>
          <th>Torneos Jugados</th>
          <th className="hideCol">Equipo</th>
        </tr>
      </thead>
      {
        gameStats.map((item) => {          
          return (
            <Fragment>
              <tbody>
                <tr>
                  <td key={item._id}>{item.gamesPlayed[0].game.gameName}</td>
                  <td>{item.gamesPlayed[0].game.points}</td>
                  <td>{item.tournamentsPlayed[0].tournament.totalEvents}</td>
                  <td className="hideCol">{item.team}</td>
                </tr>
              </tbody>
            </Fragment>
          )
        })
      }
    </Table>
  );
}

export default TableInfo;