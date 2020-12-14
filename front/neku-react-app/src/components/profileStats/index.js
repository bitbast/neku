import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileStats.css'

const ProfileStats = () => {

    
    const {playerId} = useParams()
    console.log(playerId)
    
    const [player, setPlayer] = useState({})

    useEffect(() => {
        obtainData()
    }, [])

    const obtainData = async () => {
        const data = await fetch(`https://nekuapi-sleepy-kudu-wm.mybluemix.net/players/id/${playerId}`)
        const playerData = await data.json()
        console.log(playerData)
        setPlayer(playerData.data.team)
    }


    return (
        <Row className="mt-2 ">
            <Col md="12" className="sectionTitle">Estadísticas</Col>
            <Col md="4" className="d-flex flex-column justify-content-center align-items center" >
                <p className="profileStatsTitle text-center mb-2">Total de Partidas</p>
                <h3 className="profileStatsData text-center mb-5"> {player.totalMatches}</h3>
            </Col>
            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                <p className="profileStatsTitle text-center mb-2">% Ganados</p>
                <h3 className="profileStatsData text-center mb-5"> {player.winPercentage}%</h3>
            </Col>
            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                <p className="profileStatsTitle text-center mb-2">Ranking</p>
                <h3 className="profileRankingData text-center mb-5">{player.ranking}</h3>
            </Col>
            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                <p className="profileStatsTitle text-center mb-2">Equipo</p>
                <img width="100" height="100" src={player.teamLogo} alt="Equipo logo" className="rounded-circle mx-auto d-block mb-5" />

            </Col>
            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                <p className="profileStatsTitle text-center mb-2 align-self-center">País</p>
                <img width="100" height="100" src={player.countryLogo} alt="pais flag" className="rounded-circle mx-auto d-block mb-5"/>
            </Col>
            <Col md="4" className="d-flex flex-column  align-items center">
                <p className="profileStatsTitle text-center mb-2">Hrs de juego</p>
                <h3 className="profileStatsData text-center mb-5">{player.gameTime} </h3>
            </Col>
            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                <p className="profileStatsTitle text-center mb-2">Torneos jugados</p>
                <h3 className="profileStatsData text-center mb-5"></h3>
            </Col>{}
            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                <p className="profileStatsTitle text-center mb-2">Score</p>
                <h3 className="profileStatsData text-center mb-5"></h3>
            </Col>
            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                <p className="profileStatsTitle text-center mb-2">Tiempo promedio</p>
                <h3 className="profileStatsData text-center mb-5"></h3>
            </Col>
        </Row>

    )
}

export default ProfileStats