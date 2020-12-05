import React, {Component} from "react"
import { Container, Row, Col} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.css';
import "./TeamsPlayers.css"

class TeamsPlayers extends Component {
    render() {
        return(
            <Container fluid className="teamsContainer">
                <Row className="d-flex justify-content-center align-items-center sectionNameBox">
                    <Col xs="12" md="6" className= "d-flex justify-content-center align-items-center">
                        <p className= "playerName">Equipos!</p>
                    </Col>
                    <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                            <img max width="100%" height="250" src="https://www.techgames.com.mx/wp-content/uploads/2019/08/Telcel-LVP-Mexico-equipos.jpg" alt="Gamer img" />
                    </Col> 
                </Row>
                <Row >
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" className=" mb-3 mt-3 colTeam" >
                    <a href="/Profile">
                        <div className="p-2 TournamentCard">
                            <img width="100%" height="200" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="teamImage" />
                            <p className=" teamName text-center text-white">Equipo: Anahuac</p>
                            <img width="50" height="50" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block"/>
                        </div>
                    </a>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" className=" mb-3 mt-3 colTeam" >
                    <a href="/Profile">
                        <div className="p-2 TournamentCard">
                            <img width="100%" height="200" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="teamImage" />
                            <p className=" teamName text-center text-white">Equipo: Anahuac</p>
                            <img width="50" height="50" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block"/>
                        </div>
                    </a>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" className=" mb-3 mt-3 colTeam" >
                    <a href="/Profile">
                        <div className="p-2 TournamentCard">
                            <img width="100%" height="200" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="teamImage" />
                            <p className=" teamName text-center text-white">Equipo: Anahuac</p>
                            <img width="50" height="50" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block"/>
                        </div>
                    </a>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" className=" mb-3 mt-3 colTeam" >
                    <a href="/Profile">
                        <div className="p-2 TournamentCard">
                            <img width="100%" height="200" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="teamImage" />
                            <p className=" teamName text-center text-white">Equipo: Anahuac</p>
                            <img width="50" height="50" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block"/>
                        </div>
                    </a>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" className=" mb-3 mt-3 colTeam p-1" >
                    <a href="/Profile">
                        <div className="p-1 TournamentCard">
                            <img width="100%" height="200" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="teamImage" />
                            <p className=" teamName text-center text-white">Equipo: Anahuac</p>
                            <img width="50" height="50" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block"/>
                        </div>
                    </a>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" className=" mb-3 mt-3 colTeam" >
                    <a href="/Profile">
                        <div className="p-2 TournamentCard">
                            <img width="100%" height="200" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="teamImage" />
                            <p className=" teamName text-center text-white">Equipo: Anahuac</p>
                            <img width="50" height="50" src="https://picsum.photos/200" alt="pais flag" className="rounded-circle mx-auto d-block"/>
                        </div>
                    </a>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TeamsPlayers