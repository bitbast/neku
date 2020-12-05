import React, {Component} from "react"
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./TeamsPlayers.css";

class TeamsPlayers extends Component {
    render() {
        return(
            <Container fluid className="profileContainer">
                <Row className="d-flex justify-content-center align-items-center playerNameBox">
                    <Col xs="12" md="6" className= "d-flex justify-content-center align-items-center">
                        <p className= "playerName">Equipos!</p>
                    </Col>
                    <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                            <img max width="100%" src="https://www.techgames.com.mx/wp-content/uploads/2019/08/Telcel-LVP-Mexico-equipos.jpg" alt="Gamer img" />
                    </Col> 
                </Row>
                <Row className="overflow-auto">
                <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">DBZ</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Rank:</p>
                                <p className="TournamentData ml-2">15</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Fecha:</p>
                                <p className="TournamentData ml-2">Abril 2020</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Tiempo:</p>
                                <p className="TournamentData ml-2">4 hrs</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">KD:</p>
                                <p className="TournamentData ml-2">50%</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">DBZ</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Rank:</p>
                                <p className="TournamentData ml-2">15</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Fecha:</p>
                                <p className="TournamentData ml-2">Abril 2020</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Tiempo:</p>
                                <p className="TournamentData ml-2">4 hrs</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">KD:</p>
                                <p className="TournamentData ml-2">50%</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">DBZ</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Rank:</p>
                                <p className="TournamentData ml-2">15</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Fecha:</p>
                                <p className="TournamentData ml-2">Abril 2020</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Tiempo:</p>
                                <p className="TournamentData ml-2">4 hrs</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">KD:</p>
                                <p className="TournamentData ml-2">50%</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">DBZ</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Rank:</p>
                                <p className="TournamentData ml-2">15</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Fecha:</p>
                                <p className="TournamentData ml-2">Abril 2020</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Tiempo:</p>
                                <p className="TournamentData ml-2">4 hrs</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">KD:</p>
                                <p className="TournamentData ml-2">50%</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">DBZ</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Rank:</p>
                                <p className="TournamentData ml-2">15</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Fecha:</p>
                                <p className="TournamentData ml-2">Abril 2020</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Tiempo:</p>
                                <p className="TournamentData ml-2">4 hrs</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">KD:</p>
                                <p className="TournamentData ml-2">50%</p>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_DragonBallFighterZ.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">DBZ</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Rank:</p>
                                <p className="TournamentData ml-2">15</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Fecha:</p>
                                <p className="TournamentData ml-2">Abril 2020</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">Tiempo:</p>
                                <p className="TournamentData ml-2">4 hrs</p>
                            </CardBody>
                            <CardBody className="d-flex justify-content-center align-items center p-2">
                            <p className="TournamentTitle mr-2">KD:</p>
                                <p className="TournamentData ml-2">50%</p>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TeamsPlayers