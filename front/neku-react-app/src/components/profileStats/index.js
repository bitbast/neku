import React, {Component} from "react"
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileStats.css'

class ProfileStats extends Component {
    render() {
        return (
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
                        <img width="100" height="100" src="https://picsum.photos/200" alt="Equipo logo" className="rounded-circle mx-auto d-block mb-5" />

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
        )
    }
}

export default ProfileStats