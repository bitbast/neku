import React, {Component} from "react"
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./Profile.css"


class Profile extends Component {
    render () {
        return (
            <Container fluid className="profileContainer">
                <Row>
                    <Col xs="12" md="6"  className=" playerNameBox d-flex justify-content-center align-items-center">
                        <p className= "playerName">Luis Bastida</p>
                    </Col>
                    <Col xs="12" md="6" className="d-flex justify-content-center align-items-center">
                            <img max width="50%" height="250" src="https://i.ytimg.com/vi/qMIWHHdp-VE/maxresdefault.jpg" alt="Card image cap" />
                    </Col> 
                </Row>
                <Row className="mt-5">
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
                <Row className="mt-5">
                    <Col xs="8" md="6" lg="4" >
                        <Card className="TournamentCard m-5">
                            <CardImg top width="100%" height="200" src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Juego:</CardTitle>
                                <CardText className="TournamentData ml-2">DBZ</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Rank:</CardTitle>
                                <CardText className="TournamentData ml-2">15</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Fecha:</CardTitle>
                                <CardText className="TournamentData ml-2">Abril 2020</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Tiempo:</CardTitle>
                                <CardText className="TournamentData ml-2">4 hrs</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">KD:</CardTitle>
                                <CardText className="TournamentData ml-2">50%</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="8" md="6" lg="4">
                        <Card className="TournamentCard m-5">
                            <CardImg top width="100%" height="200" src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/apex-switch-steam-opt1.jpg.adapt.crop191x100.628p.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Juego:</CardTitle>
                                <CardText className="TournamentData ml-2">Apex</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Rank:</CardTitle>
                                <CardText className="TournamentData ml-2">15</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Fecha:</CardTitle>
                                <CardText className="TournamentData ml-2">Abril 2020</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Tiempo:</CardTitle>
                                <CardText className="TournamentData ml-2">4 hrs</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">KD:</CardTitle>
                                <CardText className="TournamentData ml-2">50%</CardText>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="8" md="6" lg="4">
                        <Card className="TournamentCard m-5">
                            <CardImg top width="100%" height="200" src="https://esports.eldesmarque.com/wp-content/uploads/2019/09/LoL2.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Juego:</CardTitle>
                                <CardText className="TournamentData ml-2">LoL</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Rank:</CardTitle>
                                <CardText className="TournamentData ml-2">15</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Fecha:</CardTitle>
                                <CardText className="TournamentData ml-2">Abril 2020</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">Tiempo:</CardTitle>
                                <CardText className="TournamentData ml-2">4 hrs</CardText>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center ">
                                <CardTitle className="TournamentTitle mr-2" tag="h5">KD:</CardTitle>
                                <CardText className="TournamentData ml-2">50%</CardText>
                            </CardBody>
                        </Card></Col>
                </Row>
            </Container>
        )
    }
}

export default Profile;