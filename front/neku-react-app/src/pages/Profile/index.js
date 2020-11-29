import React, {Component} from "react"
import { Container, Row, Col } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Profile.css"


class Profile extends Component {
    render () {
        return (
            <Container fluid className="profileContainer p-0">
                <Row>
                    <Col md="6"  className=" playerNameBox d-flex justify-content-center align-items-center">
                        <p className= "playerName p-5">Nombre del jugador</p>
                    </Col>
                    <Col md="6" className="p-0">
                            <img width="100%" height="250" src="https://picsum.photos/200" alt="Card image cap" />
                    </Col> 
                </Row>
                <Row>
                    <Col md="4" className="d-flex flex-column justify-content-center align-items center" >
                        <p className="profileStatsTitle text-center mt-5 mb-2">Total de Partidas</p>
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
                        <img width="100" height="100" src="https://picsum.photos/200" alt="Equipo logo" className="rounded-circle mx-auto d-block mb-4" />

                    </Col>
                    <Col md="4" className="d-flex flex-column justify-content-center align-items center">
                        <p className="profileStatsTitle text-center mb-2">País</p>
                        <img width="100" height="100" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block mb-4"/>
                    </Col>
                    <Col md="4" className="d-flex flex-column justify-content-center align-items center">
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
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        )
    }
}

export default Profile;