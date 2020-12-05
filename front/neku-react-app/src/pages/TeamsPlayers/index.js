import React, {Component} from "react"
import { Container, Row, Col, Card, CardImg, CardBody} from "reactstrap";
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
                    <a href="/Profile">
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="TournametImg" />
                        </Card>
                        </a>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="TournametImg" />
                        </Card>
                    </Col> <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="TournametImg" />
                        </Card>
                    </Col>
                    <Col xs={{size: 10, offset: 1}} md={{size: 6, offset: 0}} lg="4" >
                        <Card className="TournamentCard m-3">
                            <CardImg top width="100%" height="150" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Tournament" className="TournametImg" />
                        </Card>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default TeamsPlayers