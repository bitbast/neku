import React, {useState, useEffect} from "react"
import { useParams } from "react-router-dom"
import { Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileStats.css'

const ProfileStats = () => {

    
    const {playerId} = useParams()
    console.log(playerId)
    
    const [player, setPlayer] = useState([])

    useEffect(() => {
        obtainData()
    }, [])

    const obtainData = async () => {
        const data = await fetch(`http://localhost:8080/players/id/${playerId}`)
        const playerData = await data.json()
        console.log(playerData)
        setPlayer(playerData.data)
    }

    return (
            
            <div>
                {
                    Object.entries(player).map(item => (
                        <Row className="mt-2 ">
                            <Col md="12" className="sectionTitle">Estadísticas</Col>
                            <Col md="4" className="d-flex flex-column justify-content-center align-items center" >
                                <p className="profileStatsTitle text-center mb-2">Total de Partidas</p>
                                <h3 className="profileStatsData text-center mb-5">200</h3>
                            </Col>
                            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                                <p className="profileStatsTitle text-center mb-2">% Ganados</p>
                                <h3 className="profileStatsData text-center mb-5">75%</h3>
                            </Col>
                            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                                <p className="profileStatsTitle text-center mb-2">Ranking</p>
                                <h3 className="profileRankingData text-center mb-5">1</h3>
                            </Col>
                            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                                <p className="profileStatsTitle text-center mb-2">Equipo</p>
                                <img width="100" height="100" src={item.keys().team} alt="Equipo logo" className="rounded-circle mx-auto d-block mb-5" />

                            </Col>
                            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                                <p className="profileStatsTitle text-center mb-2 align-self-center">País</p>
                                <img width="100" height="100" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block mb-5"/>
                            </Col>
                            <Col md="4" className="d-flex flex-column  align-items center">
                                <p className="profileStatsTitle text-center mb-2">Hrs de juego</p>
                                <h3 className="profileStatsData text-center mb-5">300</h3>
                            </Col>
                            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                                <p className="profileStatsTitle text-center mb-2">KD</p>
                                <h3 className="profileStatsData text-center mb-5">84%</h3>
                            </Col>
                            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                                <p className="profileStatsTitle text-center mb-2">Score</p>
                                <h3 className="profileStatsData text-center mb-5">3000</h3>
                            </Col>
                            <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                                <p className="profileStatsTitle text-center mb-2">Tiempo promedio</p>
                                <h3 className="profileStatsData text-center mb-5">4</h3>
                            </Col>
                        </Row>

                    ))
                }
            </div>
            
            
            
    )
}

export default ProfileStats