import React, {Component} from "react"
import { Container, Row, Col} from "reactstrap";
import GamersCard from "../../components/GamersCard";
import 'bootstrap/dist/css/bootstrap.css';
import "./TeamPlayers.css"

class TeamPlayers extends Component {
    render() {
        return(
            <Container fluid className="teamsContainer">
                <Row className="d-flex justify-content-center align-items-center sectionNameBox">
                    <Col xs="12" md="6" className= "d-flex justify-content-center align-items-center">
                        <p className= "playerName">Anahuac Esports</p>
                    </Col>
                    <Col xs="12" md="4" className="d-flex justify-content-center align-items-center">
                            <img max width="100%" height="250" src="https://a.espncdn.com/photo/2020/0115/r652568_888x500_16-9.png" alt="Gamer img" />
                    </Col> 
                </Row>
                <Row >
                    <GamersCard></GamersCard>
                    <GamersCard></GamersCard>
                    <GamersCard></GamersCard>
                    <GamersCard></GamersCard>
                    <GamersCard></GamersCard>
                    <GamersCard></GamersCard>
                    <GamersCard></GamersCard>
                    <GamersCard></GamersCard>
                </Row>
            </Container>
        )
    }
}

export default TeamPlayers