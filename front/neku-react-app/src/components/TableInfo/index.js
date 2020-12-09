import React, { useState, useEffect } from 'react';

// ------------- REACTSTRAP ------------- //
import { Table } from 'reactstrap';

// ------------- CSS ------------- //
import './TableInfo.css'

const TableInfo = (props) => {

  const [gameStats, setGameStats] = useState({});

  useEffect(() => {
    // console.log('mountComponent')
    obtainData()

    // console.log(news)
  },[])

  const obtainData = async () => {
      const data = await fetch("http://localhost:8080/players")
      const gameStatsCollection = await data.json()
      console.log(gameStatsCollection)
      setGameStats(gameStatsCollection.data.team) // de este key es de donde estoy jalando la info del json
      console.log(gameStats)
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
      <tbody>
        <tr>
          {
            gameStats.map((item) => {          
              return (
              <td
                key={item._id}
                >
                {item.gamesPlayed.game.gameName}
              </td>
                <td>{item.gamesPlayed.game.points}</td>
                <td>{item.tournamentsPlayed.tournament.totalEvents}</td>
                <td className="hideCol">{item.team}</td>
              )
            })
          }
        </tr>
      </tbody>
    </Table>
  );
}

export default TableInfo;