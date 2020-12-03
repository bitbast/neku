import React, {Component} from "react"
import { Container, Row, Col, Card, CardImg, CardBody, CardTitle, CardText } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import './profileTourCard.css'

class ProfileTourCard extends Component {
    render() {
        return(
            <Row className="mt-5 mb-5">
                    <Col xs="12" className="sectionTitle">Torneos</Col>
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
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4">
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://media.contentapi.ea.com/content/dam/apex-legends/images/2020/10/apex-switch-steam-opt1.jpg.adapt.crop191x100.628p.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">Apex</p>
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
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4">
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://esports.eldesmarque.com/wp-content/uploads/2019/09/LoL2.jpg" alt="Tournament" className="TournametImg" />
                            <CardBody className="d-flex justify-content-center align-items center p-2 ">
                                <p className="TournamentTitle mr-2">Juego:</p>
                                <p className="TournamentData ml-2">LoL</p>
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
        )
    }
}

export default ProfileTourCard